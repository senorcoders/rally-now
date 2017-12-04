import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { FeedPage } from '../feed/feed';
import { EditProfilePage } from '../edit-profile/edit-profile';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { PublicFeedPage } from '../public-feed/public-feed';
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { UsersProvider } from '../../providers/users/users';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';
import { HelloPage } from '../hello/hello';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slides: Slides;
  facebookLoggedIn = false; 
  provider =  {
    loggedin: false,
    name: '',
    profilePicture : '',
    email: false
  };
   HAS_LOGGED_IN = 'hasLoggedIn';
   users: FirebaseListObservable<any>;
   user:any = {
     uid: '',
     displayName: '',
     photoURL: '',
     provider: '',
     email: '',
     searchable: '1',
     hide_activity: '1',
    facebook_id: '',
    username: '',

   };
   endpoint:string = 'users/';



  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage,
    private facebook: Facebook,
    private twitter: TwitterConnect,
    private db: AngularFireDatabase,
    private httpProvider:UsersProvider

  ) {
      this.users = db.list('/users');

  }

 
    
  checkIfUserExists(id){
    let userRef = this.db.database.ref('users/'+id);
    var that = this;
    userRef.once('value', function (snapshot){
      if (snapshot.hasChildren()) {
       console.log('Usuario ya existe');
       that.navCtrl.setRoot(TabsPage);
      } else{
        console.log('Nuevo Usuario', that.user);
          that.db.database.ref('users/'+that.user.uid).set(that.user);
          that.httpProvider.saveNewUser(that.endpoint, that.user);
          that.navCtrl.setRoot(HelloPage);
      }
    });
  }
 

  facebookLogin(): void{
    console.log("Hola Facebook API");


    this.facebook.login(["email", "public_profile", "user_friends"]).then((loginResponse) => {
        let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
        firebase.auth().signInWithCredential(credential).then((res) =>{
          console.log(res);
          this.storage.set('UID', res.uid);
          this.user.uid = res.uid;
          this.storage.set('DISPLAYNAME', res.displayName);
          this.user.displayName = res.displayName;
          this.storage.set('USERNAME', res.username);
          this.user.username = res.displayName.replace(" ", ".");
          this.storage.set('PHOTOURL', res.photoURL);
          this.user.photoURL = res.photoURL;
          this.storage.set('PROVIDER', 'twitter.com');
          this.user.provider = 'facebook.com';
          this.storage.set('EMAIL', res.email);
          this.user.email = res.email;
          this.storage.set('LOCATION', res.location);
          this.storage.set('DESCRIPTION', res.description);
          this.user.facebook_id = res.providerData[0].uid;
          this.storage.set(this.HAS_LOGGED_IN, true);
          console.log(res);
          this.checkIfUserExists(res.uid);
        })
    }, error => {
      console.log("Error connecting to Facebook", error);
    });

}



twLogin(): void {
  this.twitter.login().then( response => {
    const twitterCredential = firebase.auth.TwitterAuthProvider
        .credential(response.token, response.secret);

    firebase.auth().signInWithCredential(twitterCredential)
    .then( res => {
          console.log(JSON.stringify(res));
          this.storage.set('UID', res.uid);
          this.user.uid = res.uid;
          this.storage.set('DISPLAYNAME', res.displayName);
          this.user.displayName = res.displayName;
          this.storage.set('USERNAME', res.username);
          this.storage.set('PHOTOURL', res.photoURL);
          this.user.photoURL = res.photoURL;
          this.storage.set('PROVIDER', 'twitter.com');
          this.user.provider = 'twitter.com';
          this.storage.set('EMAIL', res.email);
          this.user.email = res.email;
          this.storage.set('LOCATION', res.location);
          this.storage.set('DESCRIPTION', res.description);
          this.storage.set(this.HAS_LOGGED_IN, true);
          this.checkIfUserExists(res.uid);
          
    });
  }, error => {
    console.log("Error connecting to twitter: ", error);
  });
}

 
   
  Logout(){
    this.fire.auth.signOut();
  }

 
  goToFeed() {    
       this.navCtrl.setRoot(HelloPage);
     }
}