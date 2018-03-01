import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ViewController, AlertController } from 'ionic-angular';
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
  selector: 'page-call-rep',
  templateUrl: 'call-rep.html',
})
export class CallRepPage {
  rep:any;
  endpoint:any = 'actions';
  callButtonText:any = 'Call';
  data:any = [{
    user_id: '',
    title: '',
    short_desc: '',
    representative_id: '',
    action_type_id: '',
    goal_id: ''
  }];
  talkingPoints:any;
  offices:any;
  objetiveID:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public actionSheetCtrl: ActionSheetController,
    private callNumber: CallNumber,
    private httpProvider: UsersProvider,
    public viewCtrl:ViewController,
    private alertCtrl: AlertController) {
      console.log("offices", navParams.get('offices'));
      this.offices = navParams.get('offices');
      this.rep = navParams.get('rep');
      this.talkingPoints = navParams.get('talkingPoints');
      this.data.representative_id = navParams.get('repID');
      this.data.goal_id = navParams.get('goalID');
      this.objetiveID = navParams.get('objectiveID');
      this.data.action_type_id = '2afa6869-7ee5-436e-80a9-4fee7c871212';
      this.data.title = 'call';
      this.httpProvider.returnRallyUserId().then( user => {
        this.data.user_id = user.apiRallyID;
      });
      this.showCallAlert(this.rep.phone);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallPage');
  } 
  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText("Contact");
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
      // buttons: [
      //   {
      //     text: '(123) 456 789',
      //     handler: () => {
      //       console.log('test');
      //     }
      //   },{
      //     text: '(987) 654 321',
      //     handler: () => {
      //       console.log('Fax clicked');
      //     }
      //   },{
      //     text: 'Cancel',
      //     role: 'cancel',
      //     handler: () => {
      //       console.log('Cancel clicked');
      //     }
      //   }
      // ]
    });

    // for(var i = 0; i< this.offices.length; i++){
      
      
    // }

    this.offices.forEach(office => {
      actionSheet.addButton({
        text: office.phone, 
        handler: ()=> {
          console.log("Phone Number", this.offices);
          console.log("Iterator", office.phone);
          this.makeCall(office.phone);

        } 
      });
    });
    
    actionSheet.addButton({text: 'Cancel', 'role': 'cancel' });       

    actionSheet.present();
  }

  giveFeedBack(){
    this.navCtrl.push(FeedbackPage, {repID: this.data.representative_id, goalID: this.data.goal_id, objectiveID: this.objetiveID});
  } 

  showCallAlert(phone_number){
    let alert = this.alertCtrl.create({
      title: 'Are you ready?',
      message: "If you're not sure what to say, you can review the suggested script with talking points before making the call.",
      buttons: [
        {
          text: 'Review script',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.callButtonText = "Call Again";
          }
        },
        {
          text: 'Make the Call',
          handler: () => {
            this.makeCall(phone_number);
            this.callButtonText = "Call Again";

          }
        }
      ]
    });
    alert.present();
  }
  makeCall(phone_number){

    console.log(phone_number);
    this.callNumber.callNumber(phone_number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  transform(value: any) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
  }

  pop(){
    this.navCtrl.pop();
  }
  

}

