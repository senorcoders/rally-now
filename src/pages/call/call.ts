import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { FeedPage } from '../feed/feed';
import { FeedbackPage } from '../feedback/feedback';


@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallPage');
  }
    presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

       goToHome(){
    this.navCtrl.setRoot(FeedPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  callOffices() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select a different office',
      buttons: [
        {
          text: '(123) 456 789',
          handler: () => {
            console.log('test');
          }
        },{
          text: '(987) 654 321',
          handler: () => {
            console.log('Fax clicked');
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

  giveFeedBack(){
    this.navCtrl.push(FeedbackPage);
  }

}
