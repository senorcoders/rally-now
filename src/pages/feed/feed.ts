import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public popoverCtrl: PopoverController) { }
 	
 	 goToOtherPage() {
 
    this.navCtrl.push(AlertsPage);
  }

   goToProfile() {
 
    this.navCtrl.push(ProfilePage);
  }

   presentPopover() {
    let popover = this.popoverCtrl.create(OverlayPage);
    popover.present();
  }
        
}