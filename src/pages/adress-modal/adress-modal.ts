import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adress-modal',
  templateUrl: 'adress-modal.html',
})
export class AdressModalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdressModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
