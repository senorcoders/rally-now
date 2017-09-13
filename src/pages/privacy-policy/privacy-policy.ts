import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'

/**
 * Generated class for the PrivacyPolicyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html',
})
export class PrivacyPolicyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPolicyPage');
  }

   goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage);
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage);
  }
  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

}
