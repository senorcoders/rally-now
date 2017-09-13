import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { FeedPage } from '../feed/feed'
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'


@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})

export class AlertsPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public popoverCtrl: PopoverController) {

  }
  goToProfile() {
 
    this.navCtrl.setRoot(ProfilePage);
  }


  goToHome(){
  	this.navCtrl.setRoot(FeedPage);
  }

   presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }
 

        
}