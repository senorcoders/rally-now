import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { LinkedAccountsPage } from '../linked-accounts/linked-accounts';
import { FindFriendsPage } from '../find-friends/find-friends';
import { TermsPage } from '../terms/terms';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { PushNotificationsSettingsPage } from '../push-notifications-settings/push-notifications-settings';
import { ReportProblemPage } from '../report-problem/report-problem';
import { ChangePasswordPage } from '../change-password/change-password';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';



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

  HAS_LOGGED_IN = 'hasLoggedIn';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public actionSheetCtrl: ActionSheetController, 
    public popoverCtrl: PopoverController,
    private fire: AngularFireAuth,
    public storage: Storage,
    ) {
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

    presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Spam or Abuse',
          handler: () => {
            let modal = this.modalCtrl.create(ReportProblemPage);
            modal.present();
          }
        },{
          text: 'Something Is not working',
          handler: () => {
            let modal = this.modalCtrl.create(ReportProblemPage);
            modal.present();
          }
        },{
          text: 'General Feedback',
          handler: () => {
            let modal = this.modalCtrl.create(ReportProblemPage);
            modal.present();
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

  goToChangePassword(){
  	this.navCtrl.push(ChangePasswordPage);
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

      Logout(){
        this.fire.auth.signOut();
        this.storage.remove('UID');
        this.storage.remove('DISPLAYNAME');
        this.storage.remove('USERNAME');
        this.storage.remove('PHOTOURL');
        this.storage.remove('PROVIDER');
        this.storage.remove('EMAIL');
        this.storage.remove('LOCATION');
        this.storage.remove('GENDER');
        this.storage.remove('DESCRIPTION');
        this.storage.set(this.HAS_LOGGED_IN, false);
        this.navCtrl.setRoot(HomePage);
  }

}
