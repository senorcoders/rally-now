import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { UsersProvider } from '../../providers/users/users';
import { PublicProfilePage } from '../public-profile/public-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-rep-followers',
  templateUrl: 'rep-followers.html',
})
export class RepFollowersPage {

  myRallyID:any;
  repID:any;
  endpoint:any = 'reps/';
  items:any;
  followEndpoint:string= 'following_users';
  notificationsEndpoint:any = 'devices';
  alertsEndpoint:any = 'ux_events';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private orgProvider: OrganizationsProvider,
    private httpProvider: UsersProvider,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController) {
      this.repID = navParams.get('repID');
      this.httpProvider.returnRallyUserId().then(user => {
        this.myRallyID = user.apiRallyID;
        this.getFollowers();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepFollowersPage');
  }

  getFollowers(){
    this.orgProvider.getJsonData(this.endpoint + this.repID + '/followers/' + this.myRallyID)
      .subscribe(result => {
          this.items = result;
      });

  }

  getText(value){
    if (value === '0'){
      return 'Follow';
    }else{
      return 'Following';
    }
  }

  goToPublicProfile(userID){
    this.navCtrl.push(PublicProfilePage, {
       param1: userID,
       profilePageName: "Representatives"
   });
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  addFollowRecordFirebase(friendID, $event){ 
    let user:any = firebase.auth().currentUser;
    let followRef = this.db.database.ref('follow/'+user['uid']+'/'+friendID);
    followRef.once('value', snapshot=>{
      if (snapshot.hasChildren()) {
        console.log('You already follow this user');
        this.getFollowRecordID(friendID);
        this.presentToast('You are not following this user anymore');
        $event.srcElement.innerHTML = "Follow";
        $event.srcElement.innerText = "FOLLOW";

      }else{
        this.followFriend(friendID, $event);
        // this.getDeviceID(friendID);
        
      }
    });
   }


   getDeviceID(user_id){
    //Reemplazar por parametro despues
    this.httpProvider.getJsonData(this.notificationsEndpoint+'?user_id='+user_id)
      .subscribe(result => {
          this.saveNotification(user_id, result[0].id, this.myRallyID);
          this.sendPushNotification(result[0].registration_id);

      }, err => {
        console.error("Error: " +err);
      }, () => {
        console.log("Data Completed");
      });
  }

  saveNotification(user_id, registration_id, sender_id){
    this.httpProvider.returnRallyUserId().then(user => {
     this.httpProvider.saveNotification(user_id, registration_id, user.displayName + " wants to follow you",  this.alertsEndpoint, sender_id);
    });
    //this.httpProvider.sendNotification(registration_id, msg);
  }

  sendPushNotification(device){
    this.httpProvider.sendPushNotification(device, 'New Follow Request')
      .subscribe(result =>{
        console.log("Noti", result);
      });
}

   followFriend(friendID, $event){
    this.httpProvider.followFriend(this.followEndpoint, this.myRallyID, friendID, true ).subscribe(data => {
      console.log(data);
      this.httpProvider.saveFollowRecordID(data.following_id, data.id, 'follow');
      this.getDeviceID(friendID);
      this.presentToast('Follow user successfully');
      $event.srcElement.innerHTML = "Unfollow";
      $event.srcElement.innerText = "UNFOLLOW";
    }, error => {
      console.log("Error", error);
    });;
   
  }


  getFollowRecordID(parameter){
    this.httpProvider.getJsonData(this.followEndpoint+'?follower_id='+this.myRallyID+'&following_id='+ parameter).subscribe(
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
    this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
    this.httpProvider.removeFollowRecordID(parameter, 'follow');
  }
}
