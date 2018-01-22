import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { UsersProvider } from '../../providers/users/users';
import { IssueScreenPage } from '../issue-screen/issue-screen';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-fax-feed-back',
  templateUrl: 'fax-feed-back.html',
})
export class FaxFeedBackPage { 
  isenabled:boolean=false;
  url:any;
  value:any;
  endpoint:any = 'actions';
  data:any = [{
    user_id: '',
    title: '',
    short_desc: '',
    representative_id: '',
    action_type_id: '',
    goal_id: ''
  }]; 
  objectiveID:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private inAppBrowser: InAppBrowser, 
    private httpProvider: UsersProvider,
    public viewCtrl: ViewController) {
      this.url = navParams.get('iframeUrl');
      this.openWebpage(this.url);
      this.data.representative_id = navParams.get('repID');
      this.data.goal_id = navParams.get('goalID');
      this.data.action_type_id = 'ad3ef19b-d809-45b7-bef2-d470c9af0d1d';
      this.data.title = 'fax';
      this.objectiveID = navParams.get('objectiveID');
      this.httpProvider.returnRallyUserId().then( user => {
        this.data.user_id = user.apiRallyID;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaxFeedBackPage');
  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_blank', options);

   // Inject scripts, css and more with browser.X
  }
  sendActions($event){
    this.isenabled = true;
    console.log($event);
    
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }

  streakModal() {
    let modal = this.modalCtrl.create(ThankYouPage);
    modal.present();
  }

  errorModal(){
    let modal = this.modalCtrl.create(IssueScreenPage);
    modal.present();
  }

  getValue(value){
    console.log(value);
    this.value = value;

  }

  addAction(){
    this.httpProvider.addAction(this.endpoint, this.data);
  }

  back(){
   
      this.navCtrl.pop();

  }
  

  submit(){
  
    console.log("Value", this.value);
    if(this.value === 'success'){
      this.streakModal();
      this.addAction();
    }else if(this.value === 'fail'){
      this.errorModal();
    }else{
      this.back();
    }
  }

}
