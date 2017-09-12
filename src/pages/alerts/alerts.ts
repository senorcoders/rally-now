import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { FeedPage } from '../feed/feed'



@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})

export class AlertsPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  goToProfile() {
 
    this.navCtrl.setRoot(ProfilePage);
  }


  goToHome(){
  	this.navCtrl.setRoot(FeedPage);
  }
 

        
}