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
  buttonColor:string = 'red';

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
   this.presentToast('Added to Favorites');
 }

  getFavID($event, goal_id, action_type_id){
    console.log($event);

    
    this.usersProv.getJsonData(this.favEndpoint+'?goal_id='+goal_id+'&action_type_id=a7033506-b29d-4544-81f1-6dce063e6ba2&user_id='+this.myrallyID).subscribe(
      result => {
        console.log("Aqui", result);
        
        if(result != "" ){
          this.removeFav(result[0].id);
          this.presentToast('Removed from favorites');
          $event.srcElement.style.backgroundColor = '#4a90e2';
          $event.srcElement.offsetParent.style.backgroundColor = '#4a90e2';
          
        }else{
          this.addToFav(goal_id, action_type_id);
          $event.srcElement.style.backgroundColor = 'red';
          $event.srcElement.offsetParent.style.backgroundColor = 'red';
          
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

    hideItem(objective_id, index){
        this.usersProv.hideObjective(this.hide_enpoint, this.myrallyID, objective_id);
        (this.objectives).splice(index, 1);
    }
    

   checkFavStatus(goal_id){
   return new Promise( (resolve, reject) => {
    
       let user:any = firebase.auth().currentUser;
         if (user) {
         let favRef = this.db.database.ref('favorites/'+user['uid']+'/'+goal_id);
            favRef.once('value', snapshot=>{
              if (snapshot.hasChildren()) {
               resolve('red');
               
              } else{
                 resolve('#4a90e2');       
              }
            });
         }
      });
    
  }

    resolvePromise(goal_id){
      return this.checkFavStatus(goal_id)
      .then(value => {
        return value;
      });
    }
  
 public async buttonColorRender(goal_id){
    
    let color = await this.resolvePromise(goal_id);
    console.log("Color Button", color);
    return color;


  }

  findInLoop(actions){
    if (actions != null){
      
      var found = actions.some(el => { 
        return el.user_id[0].id== this.myrallyID;
      });
      if (!found){
        return '#4a90e2';
        
      }else{
        return 'red';
        
      }
    }
   
  }




removeFav(recordID){
  this.usersProv.unfollowOrganization(this.favEndpoint, recordID);
  this.usersProv.removeFollowRecordID(recordID, 'favorites');
}
 

}
