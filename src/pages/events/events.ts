import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { FilterEventsPage } from '../filter-events/filter-events';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { OverlayPage } from '../overlay/overlay'





/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,  public popoverCtrl: PopoverController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

   filterEvents() {
    let modal = this.modalCtrl.create(FilterEventsPage);
    modal.present();
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
