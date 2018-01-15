import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { UsersProvider } from '../../providers/users/users';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-followed-candidates',
  templateUrl: 'followed-candidates.html',
})
export class FollowedCandidatesPage {
  endpoint:any = 'my_friends/';
  currentApiID:any;
  followers:any;
  items:any;
  loading:any;
  newEndpoint:string = 'users?id=';
  followEndpoint:string= 'following_users';
  notificationsEndpoint:any = 'devices';
  alertsEndpoint:any = 'ux_events';
  safeSvg:any;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider: OrganizationsProvider,
    private userProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController,
    private sanitizer: DomSanitizer
   ) {
    let svg = `<div id="Rallycontainer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Loading</title>
      <path id="arrow" class="bounce" d="M79.1,44.3c-2.4-0.5-4.1-2.6-4-5V22.6H58.7c-2.4,0.1-4.5-1.6-5-4C53.2,16,55,13.5,57.6,13c0.3,0,0.5-0.1,0.8-0.1h21.5
        c2.7,0,4.8,2.2,4.8,4.8v21.8c0,2.7-2.2,4.8-4.8,4.8C79.7,44.4,79.4,44.4,79.1,44.3z"/>
      <path id="R" d="M67.5,87H52.8L41.4,66.3h-4V87H24.8V33h19.4c6,0,10.7,1.3,14.3,3.8c3.9,2.9,6.1,7.5,5.9,12.4c0,10.3-6.6,14.3-10.6,15.5
        L67.5,87z M48.9,44.2c-1.6-1.2-3.6-1.4-6.5-1.4h-5v13.9h5c2.9,0,4.9-0.3,6.5-1.5c1.8-1.2,2.9-3.3,2.7-5.5
        C51.8,47.5,50.7,45.4,48.9,44.2z"/></svg>
    </div>`;

  this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
      this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: this.safeSvg,  
      }); 
      this.loading.present();

      this.userProvider.returnRallyUserId().then(
        user => {
          this.currentApiID = user.apiRallyID;
          this.getFollowers();
        }
      );
  }


  getFollowers(){
      this.httpProvider.getJsonData(this.endpoint+this.currentApiID)
        .subscribe( result => {
          this.followers = result['follower'];
          this.initializeItems();
          this.loading.dismiss();
        });
  }  

  initializeItems() {
    this.items = this.followers;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowedCandidatesPage');
  }

   goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage);
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage);
  }

   presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

     getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      let val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.follow[0].name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }

    addFollowRecordFirebase(friendID){ 
      let user:any = firebase.auth().currentUser;
      let followRef = this.db.database.ref('follow/'+user['uid']+'/'+friendID);
      followRef.once('value', snapshot=>{
        if (snapshot.hasChildren()) {
          console.log('You already follow this user');
          this.getFollowRecordID(friendID);
          this.presentToast('You are not following this user anymore');
 
        }else{
          //this.followFriend(friendID);
          this.getDeviceID(friendID);
          this.presentToast('Follow user successfully');
        }
      });
     }
 
     getDeviceID(user_id){
       //Reemplazar por parametro despues
       this.httpProvider.getJsonData(this.notificationsEndpoint+'?user_id='+user_id)
         .subscribe(result => {
             console.log(result[0].id);
             this.saveNotification(user_id, result[0].id, this.currentApiID);
         }, err => {
           console.error("Error: " +err);
         }, () => {
           console.log("Data Completed");
         });
     }
 
     saveNotification(user_id, registration_id, sender_id){
       this.userProvider.returnRallyUserId().then(user => {
        this.userProvider.saveNotification(user_id, registration_id, user.displayName + " wants to follow you",  this.alertsEndpoint, sender_id);
       this.followFriend(user_id);
       });
       //this.httpProvider.sendNotification(registration_id, msg);
     }
 
      followFriend(friendID){
       this.userProvider.followFriend(this.followEndpoint, this.currentApiID, friendID );
     }
 
 
     getFollowRecordID(parameter){
       this.userProvider.getJsonData(this.followEndpoint+'?follower_id='+this.currentApiID+'&following_id='+ parameter).subscribe(
   result => {
     console.log("Delete User ID : "+ result[0].id);
     this.unFollowFriend(result[0].id, parameter);
   },
   err =>{
     console.error("Error : "+err);
   } ,
   () => {
     console.log('getData completed');
   }
 
   );
   }
 
     unFollowFriend(recordID, parameter){
       this.userProvider.unfollowOrganization(this.followEndpoint, recordID);
       this.userProvider.removeFollowRecordID(parameter, 'follow');
     }
 
    
 

}
