import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController,  NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { PublicProfilePage } from '../public-profile/public-profile';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { UsersProvider } from '../../providers/users/users';



@IonicPage()
@Component({
  selector: 'page-friendsactivity',
  templateUrl: 'friendsactivity.html',
})
export class FriendsactivityPage {

    activitiesData:any;
    myRallyID:any;
    endpoint:string = 'friends_activity/';
    all: string = "all";



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider,
    public viewCtrl:ViewController,
    private usersProvider: UsersProvider) {
      this.all = "all";
      this.usersProvider.returnRallyUserId().then( user => {
        this.myRallyID = user.apiRallyID;
        this.getdata();
      });
        

  }

  ionViewWillEnter() {
        //this.viewCtrl.showBackButton(false);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsactivityPage');
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

     goToPublicProfile(userID){
       this.navCtrl.push(PublicProfilePage, {
          param1: userID,
          profilePageName: "Community"
    });
     }
 
      getdata(){
  this.httpProvider.getJsonData(this.endpoint+this.myRallyID).subscribe(
    result => {
      this.activitiesData=result['friends_activity'];
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

}
