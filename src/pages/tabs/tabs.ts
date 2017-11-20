import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { OverlayPage } from '../overlay/overlay';
import { SearchPage } from '../search/search';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = AlertsPage;
  tab3Root = ProfilePage;
  tab4Root = OverlayPage;
  tab5Root = SearchPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(OverlayPage);
    popover.present();
  }

}
