import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InviteFriendsPage } from '../invite-friends/invite-friends';


@IonicPage()
@Component({
  selector: 'page-sync-contacts',
  templateUrl: 'sync-contacts.html',
})
export class SyncContactsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncContactsPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText("Discover");
  }

  sync(){
    this.navCtrl.push(InviteFriendsPage);
  }

}
