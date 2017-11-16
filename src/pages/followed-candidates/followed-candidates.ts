import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-followed-candidates',
  templateUrl: 'followed-candidates.html',
})
export class FollowedCandidatesPage {
  endpoint:any = 'my_friends/';
  currentApiID:any;
  followers:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider: OrganizationsProvider,
    private userProvider: UsersProvider) {

      this.userProvider.returnRallyUserId().then(
        user => {
          this.currentApiID = user.apiRallyID;
          this.getFollowers();
        }
      );
  }


  getFollowers(){
      this.httpProvider.getJsonData(this.endpoint+this.currentApiID)
        .subscribe( result => {
          this.followers = result['follower'];
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowedCandidatesPage');
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

}
