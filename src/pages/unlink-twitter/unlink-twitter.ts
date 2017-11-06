import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LinkedAccountsPage } from '../linked-accounts/linked-accounts';


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
    this.navCtrl.push(LinkedAccountsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

}
