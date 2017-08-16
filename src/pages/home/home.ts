import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private fb: Facebook) {

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
        console.log(JSON.stringify(result));
      }).catch(function(error){
        console.log(JSON.stringify(error))
      })
    })
    
/*    let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['OK']
      });
      alert.present();
*/
/*
      this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));*/
    
    
      //this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
        
}

//https://api-project-237098324740.firebaseapp.com/__/auth/handler