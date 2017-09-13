import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { CallPage } from '../call/call';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'


/**
 * Generated class for the TakeactionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-takeaction',
  templateUrl: 'takeaction.html',
})
export class TakeactionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeactionPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Bob Representative',
      buttons: [
        {
          text: 'Call',
          handler: () => {
             this.navCtrl.push(CallPage);
          }
        },{
          text: 'Post on Facebook',
          handler: () => {
            console.log('Post on Facebook clicked');
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
          }
        },{
          text: 'Send a Fax',
          handler: () => {
            console.log('Send a Fax clicked');
          }
        },{
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

   goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage);
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage);
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

}
