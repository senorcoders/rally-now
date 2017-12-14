import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


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
    private sanitize: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebviewPage');
  }

  urlpaste(){
    this.url = "https://hackerrankgeek.wordpress.com/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.url);
  }
  

}
