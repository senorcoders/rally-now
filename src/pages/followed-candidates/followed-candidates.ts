import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  items:any;
  loading:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider: OrganizationsProvider,
    private userProvider: UsersProvider,
    public loadingCtrl: LoadingController) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
      this.loading.present();

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
          this.initializeItems();
          this.loading.dismiss();
        });
  }

  initializeItems() {
    this.items = this.followers;
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

     getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      let val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.follow[0].name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

}
