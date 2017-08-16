import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

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
  }
  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {

  }
  ngAfterViewInit() {
    this.slides.autoplay = 5000;
    this.slides.freeMode = true;
    this.slides.loop = true;
    this.slides.pager = true;
    this.slides.paginationType = 'bullets';
  } 
  
  facebookSignIn(){
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{        
        let alert = this.alertCtrl.create({
          title: 'Access Granted',
          subTitle: JSON.stringify(result),
          buttons: ['OK']
        });
        alert.present();
      }).catch(function(error){
        let alert = this.alertCtrl.create({
          title: 'Error Access',
          subTitle: JSON.stringify(error),
          buttons: ['OK']
        });
        alert.present();
      })
    })
    }

    
  LoginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then( res=>{
      console.log('From --Facebook--');
      this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.email = res.user.email;
      console.log(res);
    })
  }

  TwitterSignIn(){
    this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then( res=> {
      console.log('From --Twitter--');
      console.log(res);
      /*this.provider.loggedin = true;
      this.provider.name = res.user.displayName;
      this.provider.emai = res.user.email;
      this.provider.profilePicture = res.user.photoURL;*/
    })
    
  }
   
  Logout(){
    this.fire.auth.signOut();
  }
}