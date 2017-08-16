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
        
}