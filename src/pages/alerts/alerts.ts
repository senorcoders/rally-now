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

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})

export class AlertsPage {

  endpoint:any = 'ux_events';
  myRallyID:any;
  alerts:any;
  followEndpoint:any = "following_users?following_id=";
  followSingleEndpoint:any = "following_users/";
  userEndpoint:any = "users/";
  badgeCount:number;

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

     getData(){
      this.httpProvider.getJsonData(this.endpoint + '?user_id=' + this.myRallyID).subscribe(
        result => {
          
          this.alerts = result;
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

     getNoticationsQty(){ 
      this.httpProvider.getNotifications(this.endpoint+'?user_id='+this.myRallyID+'&what=unread')
        .subscribe( result => {
  
          console.log("Badges", result);
          this.badgeCount = result.length;
          
        });
    }

     markAsRead(id, sender_id, index){
        this.httpProvider.updateNotificationStatus(this.endpoint+'/'+id, 'read');
        this.getFollowID(sender_id);
        this.hideItem(index);
        console.log("Alert updated");
     }

     getFollowID(sender_id){ 
      this.httpProvider.getJsonData(this.followEndpoint + this.myRallyID + '&follower_id=' + sender_id).subscribe(
        result => {
          console.log("To get Follow ID", result);
            if (result != ""){
                this.httpProvider.updateFollowers(this.followSingleEndpoint + result[0].id);
                this.updateFireRecord(this.badgeCount - 1 );
                this.presentToast('You got a new follower!');
                
            }
        }
      )
     }

     updateFireRecord(count){
      let user:any = firebase.auth().currentUser;
      this.af.database.ref('badges/'+user['uid']).update({
        badgeCount: count
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