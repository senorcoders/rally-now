import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { CallPage } from '../call/call';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { OrganizationActionPage } from '../organization-action/organization-action';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { SocialShareProvider } from '../../providers/social-share/social-share';


@IonicPage()
@Component({
  selector: 'page-takeaction',
  templateUrl: 'takeaction.html',
})
export class TakeactionPage {

  endpoint:string = 'objectives';
  objectives:any;
  myrallyID:any;
  favEndpoint:any = 'actions';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController, 
    public popoverCtrl: PopoverController,
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    private shareProvider:SocialShareProvider) {

     this.httpProvider.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
        this.getdata();

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeactionPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Bob Representative',
      buttons: [
        {
          text: 'Call',
          handler: () => {
             this.navCtrl.push(CallPage);
          }
        },{
          text: 'Post on Facebook',
          handler: () => {
            console.log('Post on Facebook clicked');
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
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
      this.objectives=result;
      console.log("Objectives", JSON.stringify(result));
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}


goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID
    });
     }


     goToActionPage(objectiveID){
       this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID
    });
     }


      addToFav(goal_id, action_type_id){
   this.httpProvider.addFavorites(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
   this.httpProvider.saveFollowRecordID(goal_id, goal_id, 'favorites');
   this.presentToast('Added to Favorites');
 }

 

 presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }

 addFavRecordFirebase(goal_id, action_type_id){
     let user:any = firebase.auth().currentUser;
     let favRef = this.db.database.ref('favorites/'+user['uid']+'/'+goal_id);
     favRef.once('value', snapshot=>{
       if (snapshot.hasChildren()) {
         console.log('Already added to favorties');
         this.presentToast('Already added to favorties');

       }else{
        this.addToFav(goal_id, action_type_id);
         this.presentToast('Added to Favorites');
       }
     });
    }


   share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }

     findInLoop(actions){
      if (actions != null){
        
        var found = actions.some(el => {
          return el.user_id[0].id== this.myrallyID;
        });
        if (!found){
          console.log("No encontrado", found);
          
        }else{
          return 'red';
          
        }
      }
     
    }

}
