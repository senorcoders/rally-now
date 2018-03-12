import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, PopoverController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import firebase from 'firebase';
import { PublicProfilePage } from '../public-profile/public-profile';
import { OverlayPage } from '../overlay/overlay';


@IonicPage()
@Component({
  selector: 'page-public-followers',
  templateUrl: 'public-followers.html',
})
export class PublicFollowersPage {

  profileID:any;
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
  enablePlaceholder: boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private httpProvider: OrganizationsProvider,
    private userProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController,
    private sanitizer: DomSanitizer) {
    this.profileID = navParams.get('profileID');
    this.enablePlaceholder = true;
    this.userProvider.returnRallyUserId().then(
      user => {
        this.currentApiID = user.apiRallyID;
        this.getFollowers();
      }
    );
  }

 

  getFollowers(){
    this.httpProvider.getJsonData(this.endpoint+this.profileID)
      .subscribe( result => {
        this.followers = result['follower'];
        console.log("Follower",result['follower'] );
        this.initializeItems();
        //this.loading.dismiss();
        this.enablePlaceholder = false;
      });
}  

initializeItems() {
  this.items = this.followers;
}
ionViewDidLoad() {
  console.log('ionViewDidLoad FollowedCandidatesPage');
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
        this.followFriend(friendID);
        // this.getDeviceID(friendID);
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
           this.sendPushNotification(result[0].registration_id);

       }, err => {
         console.error("Error: " +err);
       }, () => {
         console.log("Data Completed");
       });
   }

   sendPushNotification(device){
    this.userProvider.sendPushNotification(device, 'New Follow Request')
      .subscribe(result =>{
        console.log("Noti", result);
      });
}

   saveNotification(user_id, registration_id, sender_id){
     this.userProvider.returnRallyUserId().then(user => {
      this.userProvider.saveNotification(user_id, registration_id, user.displayName + " wants to follow you",  this.alertsEndpoint, sender_id);
     });
     //this.httpProvider.sendNotification(registration_id, msg);
   }

    followFriend(friendID){
     this.userProvider.followFriend(this.followEndpoint, this.currentApiID, friendID, true ).subscribe(data => {
      console.log(data);
      this.userProvider.saveFollowRecordID(data.following_id, data.id, 'follow');
      this.getDeviceID(friendID);
    }, error => {
      console.log("Error", error);
    });
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


   goToPublicProfile(userID){
    this.navCtrl.push(PublicProfilePage, {
       param1: userID,
       profilePageName: "Followers"
   });
  }

}
