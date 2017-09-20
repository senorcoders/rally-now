import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FeedPage } from '../feed/feed';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { PublicFeedPage } from '../public-feed/public-feed';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';



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


  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage,
    private facebook: Facebook,
    private twitter: TwitterConnect

  ) {

  }
  ngAfterViewInit() {
    this.slides.autoplay = 5000;
    this.slides.freeMode = true;
    this.slides.loop = true;
    this.slides.pager = true;
    this.slides.paginationType = 'bullets';
  } 
    
 

  facebookLogin(): void{
    console.log("Hola Facebook 3");

    this.facebook.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res);
      const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(res.authResponse.accessToken);
       firebase.auth().signInWithCredential(facebookCredential)
        .then(success => {
                console.log("Firebase success: " + success);
                this.storage.set('UID', success.uid);
                this.storage.set('DISPLAYNAME', success.displayName);
                this.storage.set('USERNAME', success.username);
                this.storage.set('PHOTOURL', success.photoURL);
                this.storage.set('PROVIDER', success.providerData.providerId);
                this.storage.set('EMAIL', success.email);
                this.storage.set('LOCATION', success.profile.locale);
                this.storage.set('GENDER', success.profile.gender);
                this.storage.set(this.HAS_LOGGED_IN, true);
                this.navCtrl.setRoot(FeedPage);
        });     
    }).catch(e => console.log('Error logging into Facebook', e));

}



twLogin(): void {
  this.twitter.login().then( response => {
    const twitterCredential = firebase.auth.TwitterAuthProvider
        .credential(response.token, response.secret);

    firebase.auth().signInWithCredential(twitterCredential)
    .then( res => {
          this.storage.set('UID', res.uid);
          this.storage.set('DISPLAYNAME', res.displayName);
          this.storage.set('USERNAME', res.username);
          this.storage.set('PHOTOURL', res.photoURL);
          this.storage.set('PROVIDER', 'twitter.com');
          this.storage.set('EMAIL', res.email);
          this.storage.set('LOCATION', res.location);
          this.storage.set('DESCRIPTION', res.description);
          this.storage.set(this.HAS_LOGGED_IN, true);
          console.log(res);
          this.navCtrl.setRoot(FeedPage);
    });
  }, error => {
    console.log("Error connecting to twitter: ", error);
  });
}

 
   
  Logout(){
    this.fire.auth.signOut();
  }

 
  goToFeed() {    
       this.navCtrl.setRoot(PublicFeedPage);
     }
}