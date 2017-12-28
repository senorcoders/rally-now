import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";


@IonicPage()
@Component({
  selector: 'page-fax-feed-back',
  templateUrl: 'fax-feed-back.html',
})
export class FaxFeedBackPage { 
  isenabled:boolean=false;
  url:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private inAppBrowser: InAppBrowser) {
      this.url = navParams.get('iframeUrl');
      this.openWebpage(this.url);
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

}
