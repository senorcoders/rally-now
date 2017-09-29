import { Component, Input } from '@angular/core';
import { FeedPage } from '../../pages/feed/feed';
import { AlertsPage } from '../../pages/alerts/alerts';
import { ProfilePage } from '../../pages/profile/profile';
import { PopoverController, NavController } from 'ionic-angular';
import { OverlayPage } from '../../pages/overlay/overlay'

/**
 * Generated class for the RallyFooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rally-footer',
  templateUrl: 'rally-footer.html'
})
export class RallyFooterComponent {

   @Input() name: string;


  constructor(
  	 public navCtrl: NavController,
  	 public popoverCtrl: PopoverController,) {
    console.log('Hello RallyFooterComponent Component');
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
