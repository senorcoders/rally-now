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



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  constructor(public navCtrl: NavController) {}
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

        
}