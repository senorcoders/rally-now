import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LinkedAccountsPage } from '../linked-accounts/linked-accounts';
import { FindFriendsPage } from '../find-friends/find-friends';
import { TermsPage } from '../terms/terms';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { PushNotificationsSettingsPage } from '../push-notifications-settings/push-notifications-settings';
import { ReportProblemPage } from '../report-problem/report-problem';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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

  pushSettings(){
    this.navCtrl.push(PushNotificationsSettingsPage);
  }

   presentModal() {
    let modal = this.modalCtrl.create(ReportProblemPage);
    modal.present();
  }

}
