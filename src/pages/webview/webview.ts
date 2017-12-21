import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { FeedbackPage } from '../feedback/feedback';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { FaxFeedBackPage } from '../fax-feed-back/fax-feed-back';
import { EmailFeedBackPage } from '../email-feed-back/email-feed-back';


@IonicPage()
@Component({
  selector: 'page-webview',
  templateUrl: 'webview.html',
})
export class WebviewPage {
  url:any;
  actionType:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitize: DomSanitizer,
    private inAppBrowser: InAppBrowser,
    public viewCtrl:ViewController) {

      this.url = navParams.get('iframeUrl');
      this.actionType = navParams.get('actionType');
      console.log(this.actionType);

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false)
  }

  urlpaste(url){
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);


  }
  
  
  goToFeedBack(){ 
    if(this.actionType === 'fax'){
      this.navCtrl.push(FaxFeedBackPage);

    } else if(this.actionType === 'email'){
      this.navCtrl.push(EmailFeedBackPage);
    }else{
      this.navCtrl.push(FeedbackPage);

    }
  }
}
