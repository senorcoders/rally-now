import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnlinkFacebookPage } from  '../unlink-facebook/unlink-facebook';
import { UnlinkTwitterPage } from '../unlink-twitter/unlink-twitter';
import { SettingsPage } from '../settings/settings';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-linked-accounts',
  templateUrl: 'linked-accounts.html',
})
export class LinkedAccountsPage {

  username:any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private facebook: Facebook) {

      this.getFacebookAccount();
  }

 

  goToAccount(accountName){
    if (accountName == 'Facebook') {
      this.navCtrl.push(UnlinkFacebookPage);
    } else {
      this.navCtrl.push(UnlinkTwitterPage);
    }
  }

  goBack(){
    this.navCtrl.setRoot(SettingsPage);
  }

  getFacebookAccount(){
    this.facebook.api('me/', ['public_profile']).then(
      user => {
        console.log(user);
        this.username = user.name;
      }, error => {
        console.log("error", error);
      });
  }
}
