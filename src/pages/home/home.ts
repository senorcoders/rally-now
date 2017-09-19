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

  ) {

  }
  ngAfterViewInit() {
    this.slides.autoplay = 5000;
    this.slides.freeMode = true;
    this.slides.loop = true;
    this.slides.pager = true;
    this.slides.paginationType = 'bullets';
  } 
    
  LoginWithFacebook(){
    //let fbProvider = new firebase.auth.FacebookAuthProvider();

    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res=>{
      console.log('From --Facebook--');
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      this.storage.set('UID', res.user.uid);
      this.storage.set('DISPLAYNAME', res.user.displayName);
      this.storage.set('USERNAME', res.user.username);
      this.storage.set('PHOTOURL', res.user.photoURL);
      this.storage.set('PROVIDER', res.user.providerId);
      this.storage.set('EMAIL', res.user.email);
      this.storage.set('LOCATION', res.additionalUserInfo.profile.locale);
      this.storage.set('GENDER', res.additionalUserInfo.profile.gender);
      this.storage.set(this.HAS_LOGGED_IN, true);
      console.log(res);
      this.navCtrl.setRoot(FeedPage);
    });

    // this.fire.auth.signInWithRedirect(fbProvider).then(function(){
    //   this.fire.auth.getRedirectResult().then(function(res){
    //       console.log('From --Facebook--');
    //   this.provider.loggedin = true;
    //   this.provider.name = res.user.displayName;
    //   this.provider.email = res.user.email;
    //   this.storage.set('UID', res.user.uid);
    //   this.storage.set('DISPLAYNAME', res.user.displayName);
    //   this.storage.set('USERNAME', res.user.username);
    //   this.storage.set('PHOTOURL', res.user.photoURL);
    //   this.storage.set('PROVIDER', res.user.providerId);
    //   this.storage.set('EMAIL', res.user.email);
    //   this.storage.set('LOCATION', res.additionalUserInfo.profile.locale);
    //   this.storage.set('GENDER', res.additionalUserInfo.profile.gender);
    //   this.storage.set(this.HAS_LOGGED_IN, true);
    //   console.log(res);
    //   this.navCtrl.setRoot(FeedPage);

    //   })
    // });
  }

  TwitterSignIn(){
    console.log("Hola Twitter");
    this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then( res=> {
      console.log('From --Twitter--');
      /*this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.emai = res.user.email;
      this.provider.profilePicture = res.user.photoURL;*/
      this.storage.set('UID', res.user.uid);
      this.storage.set('DISPLAYNAME', res.user.displayName);
      this.storage.set('USERNAME', res.user.username);
      this.storage.set('PHOTOURL', res.user.photoURL);
      this.storage.set('PROVIDER', res.user.providerId);
      this.storage.set('EMAIL', res.user.email);
      this.storage.set('LOCATION', res.additionalUserInfo.profile.location);
      this.storage.set('DESCRIPTION', res.additionalUserInfo.profile.description);
      this.storage.set(this.HAS_LOGGED_IN, true);
      console.log(res);
      this.navCtrl.setRoot(FeedPage);
    })
    
  }
   
  Logout(){
    this.fire.auth.signOut();
  }

 
  goToFeed() {    
       this.navCtrl.setRoot(PublicFeedPage);
     }
}