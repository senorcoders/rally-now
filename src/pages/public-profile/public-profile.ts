import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';


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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider:UsersProvider,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController) {
  	this.parameter = navParams.get('param1');
  	this.getdata();
    this.checkUserStatus();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicProfilePage');
  }

  checkUserStatus(){
   let user:any = firebase.auth().currentUser;
    let orgRef = this.db.database.ref('follow/'+user['uid']+'/'+this.parameter);
    orgRef.once('value', snapshot=>{
      if (snapshot.hasChildren()) {
       console.log('Unfollow');
       this.buttonFollowTest = 'Unfollow';
       
      } else{
        console.log('Follow');
        this.buttonFollowTest = 'Follow';
          
      }
    });
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.parameter).subscribe(
    result => {
      this.userData=result;
      this.hidden=result.hide_activity;
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
         this.presentToast('You already follow this user');

       }else{
         this.followFriend(friendID);
         this.presentToast('Follow user successfully');
       }
     });
    }


     followFriend(friendID){
      this.httpProvider.followFriend(this.followEndpoint, this.httpProvider.getRallyID(), friendID );
      console.log(this.httpProvider.getRallyID());
    }

}
