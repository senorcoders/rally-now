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
import { UsersProvider } from '../../providers/users/users';
import { MyFriendsPage } from '../my-friends/my-friends';
import { PhotoViewer } from '@ionic-native/photo-viewer';




@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  profileURL:any;
  endpoint:any ='users';
  name:string;
  location:string;
  description:string;
  currentRallyID:any;
   user={
    displayName: '',
    photoURL: '',
    location: '',
    description: '',
    actions_taken:'',
    shares: '',
    friends_count: '',
    followers_count: '',
    organizations_count: ''
  };

  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController,
    public userData: UserData,
    public af:AngularFireDatabase,
    private httpProvider:UsersProvider,
    private photoViewer: PhotoViewer
    ) {
        this.httpProvider.returnRallyUserId().then(user =>{
            this.currentRallyID = user.apiRallyID;
            this.getUserData();
        });

  }

 // ngAfterViewInit(){
 //  }
//  ionViewDidLoad(){
//     this.getUID();
//  }

  // getUID(){
  //      this.userData.getUid().then((uid) => {
  //        console.log(uid);
  //         this.af.database.ref('users/'+uid)
  //          .on('value', snapshot => {
  //            console.log(snapshot.val().displayName);
  //            this.user.displayName = snapshot.val().displayName;
  //            this.user.photoURL = snapshot.val().photoURL;
  //            this.user.location = snapshot.val().location || '';
  //            this.user.description = snapshot.val().description || '';
  //          });
  //      });
  //    }


     getUserData(){
       this.httpProvider.getJsonData(this.endpoint+'?id='+this.currentRallyID)
        .subscribe(
          result => {
            this.user.displayName = result[0].name;
            this.user.photoURL = result[0].photo_url;
            this.user.location = result[0].country;
            this.user.description = result[0].description;
            this.user.actions_taken = result[0].actions_taken;
            this.user.shares = result[0].shares;
            this.user.friends_count = result[0].friends_count;
            this.user.followers_count = result[0].followers_count;
            this.user.organizations_count = result[0].organizations_count;
          }
        );
     }


 

 	 goToSettings(){
  	this.navCtrl.push(SettingsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToRequests(){
  	this.navCtrl.push(FriendsRequestPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToReps(){
  	this.navCtrl.push(MyRepsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToStreaks(){
    this.navCtrl.push(StreaksHistoryPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToFollowedOrganizations(){
    this.navCtrl.push(FollowedOrganizationsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToFollowedCandidates(){
    this.navCtrl.push(FollowedCandidatesPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }
  
  goToEditProfile(){
    this.navCtrl.push(EditProfilePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToHome(){
    this.navCtrl.setRoot(FeedPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

     goToMyFriends(){
       this.navCtrl.push(MyFriendsPage, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }

     showPhotoViewer(path){
  this.photoViewer.show(path);
}

        
}