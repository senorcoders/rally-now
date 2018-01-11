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



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider: OrganizationsProvider,
    private userProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController
   ) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...' 
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
