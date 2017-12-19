import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { FeedbackPage } from '../feedback/feedback';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";


@IonicPage()
@Component({
  selector: 'page-webview',
  templateUrl: 'webview.html',
})
export class WebviewPage {
  url:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitize: DomSanitizer,
    private inAppBrowser: InAppBrowser,
    public viewCtrl:ViewController) {

      this.url = navParams.get('iframeUrl');

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false)
  }

  urlpaste(url){
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);


  }
  
  
  goToFeedBack(){
    this.navCtrl.push(FeedbackPage);
  }
}
