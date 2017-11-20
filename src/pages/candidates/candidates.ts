import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';



@IonicPage()
@Component({
  selector: 'page-candidates',
  templateUrl: 'candidates.html',
})
export class CandidatesPage {
videoOpts : VideoOptions ;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public viewCtrl:ViewController,
    private videoPlayer: VideoPlayer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatesPage');
  }

  ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

   goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage);
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage);
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

     playVideo(){
       this.videoOpts = {volume : 1.0};
    this.videoPlayer.play('http://dev.senorcoders.com/wp-content/uploads/2017/11/tweet.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    }); 
     }

}
