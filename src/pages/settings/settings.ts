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
import { InterestedOrganizationsPage } from '../interested-organizations/interested-organizations';
import { HelloPage } from '../hello/hello';
import { SyncContactsPage } from '../sync-contacts/sync-contacts';
import { UsersProvider } from '../../providers/users/users';
import { UserData } from '../../providers/user-data';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChangeUsernamePage } from '../change-username/change-username';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  HAS_LOGGED_IN = 'hasLoggedIn';
  enabled:boolean;
  myRallyID:any;
  endpoint:any = 'users/';
  status:any;
  user:any={  
    searchable: '',
    hide_activity: '',
    uid: ''
  };


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public actionSheetCtrl: ActionSheetController, 
    public popoverCtrl: PopoverController,
    private fire: AngularFireAuth,
    public storage: Storage,
    private httpProvider: UsersProvider,
    public userData: UserData,
    public af:AngularFireDatabase
    ) {
      this.httpProvider.returnRallyUserId().then(user => {
        this.myRallyID = user.apiRallyID;
        this.getUID();
        this.getUserData();
      });
  }

  getUID(){
    this.userData.getUid().then((uid) => {
       this.af.database.ref('users/'+uid)
        .on('value', snapshot => {
          this.user.uid = snapshot.val().uid;        
        });
    });
  }

  getUserData(){
    this.httpProvider.getJsonData(this.endpoint + this.myRallyID).subscribe(result => {
      this.status = result.hide_activity;
      if(result.hide_activity === '1'){
        this.enabled = true;
      }else{
        this.enabled = false;
      }
    });
  }

  updateStatus(){
    console.log(this.enabled);
    if (this.enabled === true){
      this.user.hide_activity = '1';
      this.user.searchable = '0';
      this.httpProvider.updateSingleItem(this.endpoint + this.myRallyID, JSON.stringify({hide_activity: '1', searchable: '0'}));
      this.af.database.ref('users/'+this.user.uid).update(this.user);

    }else{
      this.user.hide_activity = '0';
      this.user.searchable = '1';
      this.httpProvider.updateSingleItem(this.endpoint + this.myRallyID, JSON.stringify({hide_activity: '0', searchable: '1'}));
      this.af.database.ref('users/'+this.user.uid).update(this.user);


    }

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

  goToUsername(){
    this.navCtrl.push(ChangeUsernamePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    
  }

  sync(){ 
    this.navCtrl.push(SyncContactsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});

  }

 
}
