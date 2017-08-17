import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LinkedAccountsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-linked-accounts',
  templateUrl: 'linked-accounts.html',
})
export class LinkedAccountsPage {

  LinkedAccounts: any[] =[
    {
      id:1,
      name: 'Facebook',
      icon: 'logo-facebook',
      username: 'Milton Espinoza'
    },
    {
      id:1,
      name: 'Twitter',
      icon: 'logo-twitter',
      username: 'milton404'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinkedAccountsPage');
  }

}
