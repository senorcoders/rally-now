import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { PublicProfilePage } from '../public-profile/public-profile';



/**
 * Generated class for the FriendsactivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friendsactivity',
  templateUrl: 'friendsactivity.html',
})
export class FriendsactivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsactivityPage');
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

     goToPublicProfile(){
       this.navCtrl.push(PublicProfilePage, {
          param1: '825eaf5e-2782-467e-8e34-70576d55e321'
    });
     }

}
