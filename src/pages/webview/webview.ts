import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { FeedbackPage } from '../feedback/feedback';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";


@IonicPage()
@Component({
  selector: 'page-webview',
  templateUrl: 'webview.html',
})
export class WebviewPage {
  url:any = "https://twitter.com/";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitize: DomSanitizer,
    private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebviewPage');
  }

  urlpaste(url){
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);


  }
  
  
  goToFeedBack(){
    this.navCtrl.push(FeedbackPage);
  }
}
