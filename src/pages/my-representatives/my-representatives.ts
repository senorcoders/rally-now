import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ActionSheetController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AdressModalPage } from '../adress-modal/adress-modal';
import { UsersProvider } from '../../providers/users/users';
import { WebviewPage } from '../webview/webview';
import { FaxFeedBackPage } from '../fax-feed-back/fax-feed-back';
import { EmailFeedBackPage } from '../email-feed-back/email-feed-back';
import { CallStatePage } from '../call-state/call-state';
import { ThanksPage } from '../thanks/thanks';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { CallRepPage } from '../call-rep/call-rep';
import { RepresentativeProfilePage } from '../representative-profile/representative-profile';


@IonicPage()
@Component({
  selector: 'page-my-representatives',
  templateUrl: 'my-representatives.html',
})
export class MyRepresentativesPage {

  reps:any;
  senators:any;
  repAddress:any;
  repsEndpoint:any = 'reps?bioguide=';
  data:any = [{
    user_id: '',
    title: '',
    short_desc: '',
    representative_id: '',
    action_type_id: ''
  }];
  favEndpoint:any = 'actions';
  myrallyID:any;
  followEndpoint:any = 'following_representative';
  statereps:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    public modalCtrl: ModalController,
    private httpProvider:UsersProvider,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    private shareProvider:SocialShareProvider) {    
      this.httpProvider.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
        this.data.user_id = user.apiRallyID;
        this.getAddress();
        this.getReps();
        // this.getStateReps();
        this.getSenators();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRepresentativesPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText("My Profile");
  }

  getReps(){
    this.storage.get('representatives').then((val) => {
      console.log(val);
        if (val != null){
          this.reps = val;
        } 
    });

  }

  getSenators(){
    this.storage.get('senators').then((val) => {
      console.log(val);
        if (val != null){
          this.senators = val;
        } 
    });
  }
  getStateReps(){
    this.storage.get('statesReps').then((val) => {
      console.log(val);
        if (val != null){
          this.statereps = val;
        } 
    });
  }
  

  finReps(){
    let modal = this.modalCtrl.create(AdressModalPage);
    modal.onDidDismiss(() => {
      this.getReps();
      this.getSenators();
      // this.getStateReps();
      this.getAddress();
    });
    modal.present();
  
  }


  getAddress(){
    this.storage.get('repAdress').then((val) => {
      if (val != null){
        this.repAddress = val;
      } else{
        this.repAddress = "No Address";
      }
    });
  }

  getRepID(rep, fax, twitter, email, bioguide){
    this.httpProvider.getJsonData(this.repsEndpoint +bioguide).subscribe( result => {
        console.log(result);
        this.data.representative_id = result[0].id;
        this.presentActionSheet(rep, result[0].fax_url, result[0].twitter_id, email, result[0].id, result[0].offices);
    });
  }

  

  presentActionSheet(rep, fax, twitter, email, repID, offices) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + rep.name,
      buttons: [
        {
          text: 'Call',
          handler: () => {
            this.navCtrl.push(CallRepPage, {rep: rep, repID: repID, offices: offices});
          }
        },{
          text: 'Fax',
          handler: () => {
            console.log('Fax clicked');
            // this.data.title = 'fax';
            // this.data.action_type_id = 'ad3ef19b-d809-45b7-bef2-d470c9af0d1d';
            // this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(FaxFeedBackPage, {iframeUrl: fax, repID: repID});

          }
        },{
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
            // this.data.title = 'email';
            // this.data.action_type_id = 'f9b53bc8-9847-4699-b897-521d8e1a34bb';
            // this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(EmailFeedBackPage, {iframeUrl: email, repID: repID});
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
            
            this.shareProvider.twitterShare('@' + twitter).then(() => {
              this.data.title = 'tweet';
              this.data.action_type_id = '9eef1652-ccf9-449a-901e-ad6c0b3a8a6c';
              this.httpProvider.addAction(this.favEndpoint, this.data);
              this.streakModal();
            }); 
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

  streakModal() {
    let modal = this.modalCtrl.create(ThanksPage);
    modal.present();
  }


  getRepStatus(bioguide, $event){
    this.httpProvider.getJsonData(this.repsEndpoint +bioguide).subscribe( result => {
      console.log(result);
      this.followRep(result[0].id, $event);
  });
  }

  getID(bioguide){
    this.httpProvider.getJsonData(this.repsEndpoint +bioguide).subscribe( result => {
      console.log(result);
      this.goToRepProfile(result[0].id,);
  });
  }
 
  
  followRep(repID, $event){
    console.log($event);
    
    
    this.httpProvider.getJsonData(this.followEndpoint+'?user_id='+this.myrallyID+'&representative_id='+repID)
      .subscribe(
        result => {
          
          if (result != ""){              
            this.unFollowRep(result[0].id);
            $event.srcElement.innerHTML = "Follow";
            $event.srcElement.innerText = "FOLLOW";
          } else{
            this.saveRepInApi(repID);
            $event.srcElement.innerHTML = "Unfollow";
            $event.srcElement.innerText = "UNFOLLOW";
          }
        },
    err =>{
      console.error("Error : "+err);         
    } ,
    () => {
      console.log('getData completed');
    }
      );
  }

  saveRepInApi(repID){
      this.httpProvider.followRep(this.followEndpoint, this.myrallyID, repID);
      this.presentToast('Representative added');
      

  }


  unFollowRep(recordID){
    this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
    this.presentToast('Representative removed');
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  getRepStateID(rep, fax, twitter, email, bioguide, offices){ 
    this.httpProvider.getJsonData(this.repsEndpoint +bioguide).subscribe( result => {
        console.log(result);
        this.data.representative_id = result[0].id;
        this.presentActionSheetState(rep, result[0].fax_url, result[0].twitter_id, email, result[0].id, offices);
    });
  }

  

  presentActionSheetState(rep, fax, twitter, email, repID, offices) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + rep.first_name,
      buttons: [
        {
          text: 'Call',
          handler: () => {
            this.navCtrl.push(CallStatePage, {rep: rep, repID: repID, offices: offices});
      
          }
        }//{
        //   text: 'Fax',
        //   handler: () => {
        //     console.log('Fax clicked');
        //     // this.data.title = 'fax';
        //     // this.data.action_type_id = 'ad3ef19b-d809-45b7-bef2-d470c9af0d1d';
        //     // this.httpProvider.addAction(this.favEndpoint, this.data);
        //     this.navCtrl.push(FaxFeedBackPage, {iframeUrl: fax, repID: repID});

        //   }
        // }
        ,{
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
            // this.data.title = 'email';
            // this.data.action_type_id = 'f9b53bc8-9847-4699-b897-521d8e1a34bb';
            // this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(EmailFeedBackPage, {iframeUrl: email, repID: repID});
          }
        },
        // {
        //   text: 'Post message via Twitter',
        //   handler: () => {
        //     console.log('Post message via Twitter clicked');
        //     this.shareProvider.twitterShare('@' + twitter).then(() => {
        //       this.data.title = 'tweet';
        //       this.data.action_type_id = '9eef1652-ccf9-449a-901e-ad6c0b3a8a6c';
        //       this.httpProvider.addAction(this.favEndpoint, this.data);
        //       this.streakModal();
        //     });
        //   }
        // },
        {
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

  transform(value: any) {
    if (value) {
      return value.toUpperCase();
  }
  return value;
  }

  goToRepProfile(repID){
    this.navCtrl.push(RepresentativeProfilePage, {repID: repID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

}
