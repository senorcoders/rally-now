import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';


@IonicPage()
@Component({
  selector: 'page-interested-organizations',
  templateUrl: 'interested-organizations.html',
})
export class InterestedOrganizationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestedOrganizationsPage');
  }

  goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

}
