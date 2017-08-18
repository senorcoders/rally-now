import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LinkedAccountsPage } from '../linked-accounts/linked-accounts';
import { FindFriendsPage } from '../find-friends/find-friends';
import { TermsPage } from '../terms/terms';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
   goToLinkedAccounts(){
  	this.navCtrl.push(LinkedAccountsPage);
  }

  findFriends(){
  	this.navCtrl.push(FindFriendsPage);
  }
  goToTerms(){
  	this.navCtrl.push(TermsPage);
  }

  goToPrivacy(){
  	this.navCtrl.push(PrivacyPolicyPage);
  }

}
