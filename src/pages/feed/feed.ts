import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController, LoadingController, ActionSheetController, ToastController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'
import { HomeFiltersPage } from '../home-filters/home-filters';
import { OverlayPage } from '../overlay/overlay'
import { RatePage } from '../rate/rate';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { PublicProfilePage } from '../public-profile/public-profile';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { OrganizationActionPage } from '../organization-action/organization-action';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {
  organizationsData:any;
  endpoint:string = 'homefeed/';
  loading:any;
  objectives:any;
  fiends:any;
  favEndpoint:any = 'actions';
  myrallyID:any;
  hide_enpoint:any = 'hide_objective';

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    private shareProvider:SocialShareProvider,
    private usersProv: UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase) { 
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
        this.loading.present();
        this.usersProv.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
        this.getdata();

      });

     
  }

 

 	 goToOtherPage() {
 
    this.navCtrl.setRoot(AlertsPage);
  }

   goToProfile() {
 
    this.navCtrl.setRoot(ProfilePage);
  }

   goToHomeFilter() {
 
    this.navCtrl.setRoot(HomeFiltersPage);
  }

   presentPopover() {
    let popover = this.popoverCtrl.create(OverlayPage);
    popover.present();
  }
  
  goToRatePage() {
    this.navCtrl.push(RatePage);
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.myrallyID).subscribe(
    result => {
      this.organizationsData=result['My_Organizations'];
      this.objectives=result['Objectives'];
      this.fiends=result['friends_activity'];
      console.log("Success : "+ result['My_Organizations']);
      console.log("Goal ID", JSON.stringify(result['Objectives'][1].title));
      this.loading.dismiss();
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

doRefresh(refresher) {
  this.getdata();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


   goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID
    });
     }

     goToPublicProfile(userID){
       this.navCtrl.push(PublicProfilePage, {
          param1: userID
    });
     }

     goToActionPage(objectiveID){
       this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID
    });
     }

     share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }

     shareController(title, imgURI) {
   const actionSheet = this.actionSheetCtrl.create({
     title: 'Share with',
     buttons: [
       {
         text: 'Facebook',
         icon: 'logo-facebook',
         handler: () => {
           this.shareProvider.facebookShare(title, imgURI);
         }
       },
       {
         text: 'Twitter',
         icon: 'logo-twitter',
         handler: () => {
           this.shareProvider.twitterShare(title, imgURI);
         }
       },
       {
         text: 'Whatsapp',
         icon: 'logo-whatsapp',
         handler: () => {
           this.shareProvider.whatsappShare(title, imgURI);
         }
       },
       {
         text: 'Others',
         icon: 'md-share',
         handler: () => {
           console.log('Archive clicked');
           this.shareProvider.otherShare(title, imgURI);
         }
       },
       {
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

  presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }

 addToFav(goal_id, action_type_id){
   this.usersProv.addFavorites(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
   this.usersProv.saveFollowRecordID(goal_id, goal_id, 'favorites');
   this.presentToast('Added to Favorites');
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

    hideItem(objective_id){
        this.usersProv.hideObjective(this.hide_enpoint, this.myrallyID, objective_id);
    }
    

 

}
