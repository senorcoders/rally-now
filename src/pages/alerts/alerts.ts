import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { FeedPage } from '../feed/feed'
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import { Device } from '@ionic-native/device';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { PublicProfilePage } from '../public-profile/public-profile';

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})

export class AlertsPage {

  endpoint:any = 'ux_events';
  myRallyID:any;
  public alerts:any = [];
  followEndpoint:any = "following_users?following_id=";
  followSingleEndpoint:any = "following_users/";
  userEndpoint:any = "users/";
  badgeCount:number;
  public:boolean;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public popoverCtrl: PopoverController,
    private httpProvider:UsersProvider,
    public device: Device,
    public toastCtrl: ToastController,
    public af:AngularFireDatabase) {
      this.httpProvider.returnRallyUserId().then(user => {
          this.myRallyID = user.apiRallyID;
          this.getData();
          this.getNoticationsQty();
          this.updateFireRecord();
          this.getMyAccountStatus();
      });

  }
  goToProfile() {
 
    this.navCtrl.setRoot(ProfilePage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }


  goToHome(){
  	this.navCtrl.setRoot(FeedPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

   presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

     getMyAccountStatus(){
        this.httpProvider.getJsonData(this.userEndpoint + this.myRallyID).subscribe(result => {
          if(result.searchable == '1' && result.hide_activity == '0'){
            this.public = true;
          }else{
            this.public = false;
          }

        });
     }

     getData(){
      this.httpProvider.getJsonData(this.endpoint + '?user_id=' + this.myRallyID + '&what=unread').subscribe(
        result => {
          console.log("Alertas", result);
          this.getArray(result);
          
        },
        err =>{
          console.error("Error : "+err);
        } ,
        () => {
          console.log('Notificaciones completed');
          console.log("Alerts", this.alerts);
          
        }
      );
     }


     getArray(array){
      for(let person of array) {
        console.log(person);
        this.getSingleUsersData(person.sender_id);
      }
     }

     getSingleUsersData(person){
      this.httpProvider.getJsonData(this.userEndpoint+person).subscribe(result => {
        this.alerts.push(result);
    });

     }

     getNoticationsQty(){ 
      this.httpProvider.getNotifications(this.endpoint+'?user_id='+this.myRallyID+'&what=unread')
        .subscribe( result => {
  
          console.log("Badges", result);
          this.badgeCount = result.length;
          
        });
    }
    goToPublicProfile(userID){
      this.navCtrl.push(PublicProfilePage, {
         param1: userID,
         profilePageName: "Alerts"
   }, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    hideNotification(user_id, i){
        this.httpProvider.getJsonData(this.endpoint+'?sender_id='+user_id+'&user_id='+this.myRallyID)
          .subscribe(result => {
              console.log("Notification", result);
            this.markAsRead(result[0].id);
            this.goToPublicProfile(user_id);
          });
    }

    approveRequest(user_id, i){
      this.httpProvider.getJsonData(this.endpoint+'?sender_id='+user_id+'&user_id='+this.myRallyID)
      .subscribe(result => {
          console.log("Notification", result);
        this.markAsRead(result[0].id);
        this.getFollowID(result[0].sender_id);
        this.hideItem(i);
      });
    }

     markAsRead(id){
        this.httpProvider.updateNotificationStatus(this.endpoint+'/'+id, 'read');
        // this.getFollowID(sender_id);
        // this.hideItem(index);
        console.log("Alert updated");
     }

     getFollowID(sender_id){ 
      this.httpProvider.getJsonData(this.followEndpoint + this.myRallyID + '&follower_id=' + sender_id).subscribe(
        result => {
          console.log("To get Follow ID", result);
            if (result != ""){
                this.httpProvider.updateFollowers(this.followSingleEndpoint + result[0].id);
                // this.updateFireRecord(this.badgeCount - 1 );
                this.presentToast('You got a new follower!');
                
            }
        }
      )
     }

     updateFireRecord(count?){
      let user:any = firebase.auth().currentUser;
      this.af.database.ref('badges/'+user['uid']).update({
        badgeCount: 0
      });
     }

     hideItem(index){
      (this.alerts).splice(index, 1);
    }

     removeNotification(id){
       console.log(id);
      this.httpProvider.unfollowOrganization(this.endpoint, id);
      this.presentToast('Notification removed');
     }
 
     presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }

    // getSenderPhoto(sender_id){
    //   this.httpProvider.getJsonData(this.userEndpoint + sender_id).subscribe(
    //     result => {
    //         if (result != ""){
    //           console.log(result.photo_url);
    //             return result.photo_url;
    //         }
    //     }
    //   )
    // }
        
}