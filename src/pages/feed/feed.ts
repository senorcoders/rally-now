import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) { }
 	
 	 goToOtherPage() {
 
    this.navCtrl.push(AlertsPage);
  }

   goToProfile() {
 
    this.navCtrl.push(ProfilePage);
  }

        
}