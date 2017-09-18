import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { FriendsRequestPage } from '../friends-request/friends-request';
import { MyRepsPage } from '../my-reps/my-reps';
import { StreaksHistoryPage } from '../streaks-history/streaks-history';
import { FollowedOrganizationsPage } from '../followed-organizations/followed-organizations';
import { FollowedCandidatesPage } from '../followed-candidates/followed-candidates';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UserData } from '../../providers/user-data';




@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  profileURL:any;
  name:string;
  location:string;
  description:string;

  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController,
    public userData: UserData
    ) {}

 ngAfterViewInit(){
      this.getProfilePicture();
      this.getUsername();
      this.getLocation();
      this.getDescription();
  }

  getProfilePicture(){
      this.userData.getPhotoUrl().then((image) => {
          console.log(image);
          this.profileURL = image;
      }); 
   }

   getUsername(){
     this.userData.getUsername().then((username) => {
       this.name = username;
     }); 
   }

   getLocation(){
     this.userData.getLocation().then((location) => {
       this.location = location;
     }); 
   }

   getDescription(){
     this.userData.getDescription().then((description) => {
       this.description = description;
     }); 
   }

 	 goToSettings(){
  	this.navCtrl.push(SettingsPage);
  }

  goToRequests(){
  	this.navCtrl.push(FriendsRequestPage);
  }

  goToReps(){
  	this.navCtrl.push(MyRepsPage);
  }

  goToStreaks(){
    this.navCtrl.push(StreaksHistoryPage);
  }

  goToFollowedOrganizations(){
    this.navCtrl.push(FollowedOrganizationsPage);
  }

  goToFollowedCandidates(){
    this.navCtrl.push(FollowedCandidatesPage);
  }
  
  goToEditProfile(){
    this.navCtrl.push(EditProfilePage);
  }

  goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage);
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

        
}