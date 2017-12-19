import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { FeedPage } from '../feed/feed';
import { FeedbackPage } from '../feedback/feedback';
import { CallNumber } from '@ionic-native/call-number';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {
  rep:any;
  endpoint:any = 'actions';
  data:any = [{
    user_id: '',
    title: '',
    short_desc: '',
    representative_id: '',
    action_type_id: ''
  }];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public actionSheetCtrl: ActionSheetController,
    private callNumber: CallNumber,
    private httpProvider: UsersProvider) {
      console.log("rep", navParams.get('rep'));
      this.rep = navParams.get('rep');
      this.data.representative_id = navParams.get('repID');
      this.data.action_type_id = '2afa6869-7ee5-436e-80a9-4fee7c871212';
      this.data.title = 'call';
      this.httpProvider.returnRallyUserId().then( user => {
        this.data.user_id = user.apiRallyID;
      });
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

  makeCall(phone_number){
    this.callNumber.callNumber(phone_number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
    this.addAction();
  }


  addAction(){
    this.httpProvider.addAction(this.endpoint, this.data);
  }

}
