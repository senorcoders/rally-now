import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';
import { IssueScreenPage } from '../issue-screen/issue-screen';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  isenabled:boolean=false;
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
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private httpProvider: UsersProvider) {
      this.data.representative_id = navParams.get('repID');
      this.data.goal_id = navParams.get('goalID');
      this.data.action_type_id = '2afa6869-7ee5-436e-80a9-4fee7c871212';
      this.data.title = 'call';
      this.httpProvider.returnRallyUserId().then( user => {
        this.data.user_id = user.apiRallyID;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  // sendActions($event){
  //   console.log($event);
  //   $event.srcElement.style.opacity = 0.4;
  //   this.isenabled = true;
  // }

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

  back(){
    this.navCtrl.pop();
  }


  getValue(value){
    console.log(value);
    this.value = value;

  }

  addAction(){
    this.httpProvider.addAction(this.endpoint, this.data);
  }

  submit(){
  
    console.log("Value", this.value);
    if(this.value === 'success'){
      this.streakModal();
      this.addAction();
    }else{
      this.errorModal();
    }
  }


}
