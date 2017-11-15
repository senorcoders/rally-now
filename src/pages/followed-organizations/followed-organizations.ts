import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-followed-organizations',
  templateUrl: 'followed-organizations.html',
})
export class FollowedOrganizationsPage {
  endpoint:any = 'following_organizations?follower_id=';
  currentApiID:any;
  organizations:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider) {
      this.httpProvider.returnRallyUserId().then(
        user => {
          this.currentApiID = user.apiRallyID;
          this.getOrganizations();
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowedOrganizationsPage');
  }

  getOrganizations(){
    this.httpProvider.getJsonData(this.endpoint+this.currentApiID)
      .subscribe(
        result => {
            this.organizations = result;
        }
      );
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
