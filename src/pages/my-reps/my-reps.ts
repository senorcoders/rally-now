import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-my-reps',
  templateUrl: 'my-reps.html',
})
export class MyRepsPage {

  endpoint:string = 'representatives';
  representatives:any;
  currentRallyID:any;
  followEndpoint:any = 'following_representative';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider:UsersProvider,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController,
    private callNumber: CallNumber,
    public toastCtrl: ToastController) {
      this.httpProvider.returnRallyUserId().then(user =>{
          this.currentRallyID = user.apiRallyID;
          this.getdata();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRepsPage');
  }


  presentActionSheet(number) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Bob Representative',
      buttons: [ 
        {
          text: 'Call',
          handler: () => {
            this.callNumber.callNumber(number, true)
            .then(() => console.log('Launched dialer!'))
            .catch((error) => console.log('Error launching dialer', error));
          }
        },{
          text: 'Post on Facebook',
          handler: () => {
            console.log('Post on Facebook clicked');
            this.shareProvider.facebookShare("Hola desde Rally up", "http://via.placeholder.com/350x150");
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
            this.shareProvider.twitterShare("Hola desde Rally up", "http://via.placeholder.com/350x150");
          }
        },{
          text: 'Send a Fax',
          handler: () => {
            console.log('Send a Fax clicked');
          }
        },{
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
            this.shareProvider.shareViaEmail();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
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


     getdata(){
      this.httpProvider.getJsonData(this.endpoint).subscribe(
        result => {
            this.representatives = result;
           },
        err =>{
          console.error("Error : "+err);
        } ,
        () => {
          console.log('getData completed');
        }
      );
    }

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }
    followRep(repID, $event){
      console.log($event);
      
      
      this.httpProvider.getJsonData(this.followEndpoint+'?user_id='+this.currentRallyID+'&representative_id='+repID)
        .subscribe(
          result => {
            
            if (result != ""){              
              this.unFollowRep(result[0].id);
              $event.srcElement.innerHTML = "Follow";
              $event.srcElement.innerText = "FOLLOW";
            } else{
              this.saveRepInApi(repID);
              $event.srcElement.innerHTML = "Unfollow";
              $event.srcElement.innerText = "UNFOLLOW";
            }
          },
      err =>{
        console.error("Error : "+err);         
      } ,
      () => {
        console.log('getData completed');
      }
        );
    }

    saveRepInApi(repID){
        this.httpProvider.followRep(this.followEndpoint, this.currentRallyID, repID);
        this.presentToast('Representative added');
        

    }


    unFollowRep(recordID){
      this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
      this.presentToast('Representative removed');
    }

    findInLoop(actions){
      if (actions != null){
        
        var found = actions.some(el => { 
            return el == this.currentRallyID;
          
        });
        
        if (!found){
          return 'Follow';
          
        }else{
          return 'Unfollow';
          
        }
      }
    }

}
