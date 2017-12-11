import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { PhotoViewer } from '@ionic-native/photo-viewer';


@IonicPage()
@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {
	parameter: string;
	userData:any;
	endpoint:string = 'users?id=';
  hidden:any;
  followEndpoint:string= 'following_users';
  buttonFollowTest:string;
  login:any = true;
  notificationsEndpoint:any = 'devices';
  alertsEndpoint:any = 'ux_events';
  profilePageName:any;
  myRallyID:any;
  my_activity:any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider:UsersProvider,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    private photoViewer: PhotoViewer,
    public viewCtrl:ViewController
  ) {
  	this.parameter = navParams.get('param1');
    this.profilePageName = navParams.get('profilePageName');
    this.httpProvider.returnRallyUserId().then( user => {
      this.myRallyID = user.apiRallyID;
      this.getdata();
      this.checkUserStatus();
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicProfilePage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.profilePageName);
  }

  checkUserStatus(){
   let user:any = firebase.auth().currentUser;
     if (user) {
       let orgRef = this.db.database.ref('follow/'+user['uid']+'/'+this.parameter);
        orgRef.on('value', snapshot=>{
      if (snapshot.hasChildren()) {
       console.log('Unfollow');
       this.buttonFollowTest = 'Unfollow';
       
      } else{
        console.log('Follow');
        this.buttonFollowTest = 'Follow';
          
      }
    });
     } else{
       this.login = false;
     }
    
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.parameter).subscribe(
    result => {
      this.userData=result;
      this.hidden=result.hide_activity;
      this.my_activity= result.my_activity;
      console.log("Success : "+ result);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
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
         this.unFollowActionSheet();
         //this.presentToast('You are not following this user anymore');

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
            this.saveNotification(user_id, result[0].id);
        }, err => {
          console.error("Error: " +err);
        }, () => {
          console.log("Data Completed");
        });
    }

    saveNotification(user_id, registration_id){
      this.httpProvider.returnRallyUserId().then(user => {
       this.httpProvider.saveNotification(user_id, registration_id, user.displayName + " wants to follow you",  this.alertsEndpoint);
      this.followFriend(user_id);
      });
      //this.httpProvider.sendNotification(registration_id, msg);
    }

     followFriend(friendID){
      this.httpProvider.followFriend(this.followEndpoint, this.myRallyID, friendID );
    }


    getFollowRecordID(){
      this.httpProvider.getJsonData(this.followEndpoint+'?follower_id='+this.myRallyID+'&following_id='+this.parameter).subscribe(
  result => {
    console.log("Delete User ID : "+ result[0].id);
    this.unFollowFriend(result[0].id);
  },
  err =>{
    console.error("Error : "+err);
  } ,
  () => {
    console.log('getData completed');
  }

  );
  }

    unFollowFriend(recordID){
      this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
      this.httpProvider.removeFollowRecordID(this.parameter, 'follow');
    }

    unFollowActionSheet() {
      
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Unfollow ' + this.userData[0].name + '?' ,
      cssClass: 'title-img',      
      buttons: [
        {
          text: 'Unfollow',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.getFollowRecordID();
            
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

    showPhotoViewer(path){
  this.photoViewer.show(path);
}


}
