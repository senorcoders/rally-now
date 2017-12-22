import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';

@IonicPage()
@Component({
  selector: 'page-sign-feed-back',
  templateUrl: 'sign-feed-back.html',
})
export class SignFeedBackPage {

  isenabled:boolean=false;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignFeedBackPage');
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

}
