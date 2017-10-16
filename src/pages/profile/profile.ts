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
import { AngularFireDatabase } from 'angularfire2/database/database';




@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  profileURL:any;
  name:string;
  location:string;
  description:string;
   user={
    displayName: '',
    photoURL: '',
    location: '',
    description: '',
  };

  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController,
    public userData: UserData,
    public af:AngularFireDatabase
    ) {
           

  }

 // ngAfterViewInit(){
 //  }
 ionViewDidLoad(){
    this.getUID();
 }

  getUID(){
       this.userData.getUid().then((uid) => {
         console.log(uid);
          this.af.database.ref('users/'+uid)
           .on('value', snapshot => {
             console.log(snapshot.val().displayName);
             this.user.displayName = snapshot.val().displayName;
             this.user.photoURL = snapshot.val().photoURL;
             this.user.location = snapshot.val().location || '';
             this.user.description = snapshot.val().description || '';
           });
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