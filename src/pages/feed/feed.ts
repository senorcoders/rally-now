import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { AlertsPage } from '../alerts/alerts'

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) { }
 	
 	 goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(AlertsPage);
  }

        
}