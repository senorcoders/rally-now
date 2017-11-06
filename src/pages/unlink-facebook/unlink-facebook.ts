import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LinkedAccountsPage } from '../linked-accounts/linked-accounts';

@IonicPage()
@Component({
  selector: 'page-unlink-facebook',
  templateUrl: 'unlink-facebook.html',
})
export class UnlinkFacebookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnlinkFacebookPage');
  }

  goBack(){
    this.navCtrl.push(LinkedAccountsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }
}
