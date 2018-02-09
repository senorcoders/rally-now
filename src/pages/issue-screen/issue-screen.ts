import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TakeactionPage } from '../takeaction/takeaction';
import { OverlayPage } from '../overlay/overlay';


@IonicPage()
@Component({
  selector: 'page-issue-screen',
  templateUrl: 'issue-screen.html',
})
export class IssueScreenPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueScreenPage');
  }

  dismiss() {
    this.app.getRootNav().setRoot(TabsPage);
   this.viewCtrl.dismiss();
 }

}
