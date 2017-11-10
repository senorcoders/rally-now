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
import { CellularDataUsagePage } from '../cellular-data-usage/cellular-data-usage';
import { EditProfilePage } from '../edit-profile/edit-profile';


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
  	this.navCtrl.push(LinkedAccountsPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  findFriends(){
  	this.navCtrl.push(FindFriendsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }
  goToTerms(){
  	this.navCtrl.push(TermsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToPrivacy(){
  	this.navCtrl.push(PrivacyPolicyPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  pushSettings(){
    this.navCtrl.push(PushNotificationsSettingsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
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
  	this.navCtrl.push(ChangePasswordPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

    goToHome(){
    this.navCtrl.setRoot(FeedPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }
  goToLessData(){
    this.navCtrl.push(CellularDataUsagePage);
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

  goToEditProfile(){
    this.navCtrl.push(EditProfilePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }
}
