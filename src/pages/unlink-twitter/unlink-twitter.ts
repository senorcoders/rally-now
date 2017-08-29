import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LinkedAccountsPage } from '../linked-accounts/linked-accounts';
/**
 * Generated class for the UnlinkTwitterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unlink-twitter',
  templateUrl: 'unlink-twitter.html',
})
export class UnlinkTwitterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnlinkTwitterPage');
  }

  goBack(){
    this.navCtrl.push(LinkedAccountsPage);
  }

}
