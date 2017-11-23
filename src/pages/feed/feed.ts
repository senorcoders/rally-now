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
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { UserData } from '../../providers/user-data';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import {EventDetailPage} from '../event-detail/event-detail';

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
  userEndpoint:any = 'users/';
  enabled:boolean = false;
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  likesCount: number;
  events:any;
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';

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
    private db: AngularFireDatabase,
    private network: Network,
    private storage: Storage,
    private storageProvider: UserData,
    private photoViewer: PhotoViewer) {
      console.log("Network", this.network.type);
      
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
        this.loading.present();
       
        this.usersProv.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
         
            this.getDataStatus();
      });
   
  
  }

  getDataStatus(){
    this.usersProv.getJsonData(this.userEndpoint+this.myrallyID).subscribe(
      result => {
          console.log("OPT", result.less_data);
          if(result.less_data === true && this.network.type != 'wifi'){
              console.log("Save Data");
              this.storageProvider.getHomeFeedJson().then( savedJson => {
                  console.log(JSON.stringify(savedJson));
                  this.organizationsData=savedJson['My_Organizations'];
                  this.objectives=savedJson['Objectives'];
                  this.fiends=savedJson['friends_activity'];
                  this.events=savedJson['Events'];
                  this.enabled = true;
                  this.loading.dismiss();
                  
              });
              
              
          } else{
            this.getdata();
          }
          
      }
    );
  }

  
  
 	 goToOtherPage() {
 
    this.navCtrl.setRoot(AlertsPage,{}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

   goToProfile() {
 
    this.navCtrl.setRoot(ProfilePage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

   goToHomeFilter() {
 
    this.navCtrl.setRoot(HomeFiltersPage);
  }

   presentPopover() {
    let popover = this.popoverCtrl.create(OverlayPage);
    popover.present();
  }
   
  goToRatePage() {
    this.navCtrl.push(RatePage,  {}, {animate: true, direction: 'forward'});
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.myrallyID).subscribe(
    result => {
      this.organizationsData=result['My_Organizations'];
      this.objectives=result['Objectives'];
      this.fiends=result['friends_activity'];
      this.events=result['Events'];
      this.storage.set("homefeed", result);
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
  this.getDataStatus();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


   goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID,
          OrgPageName: "Home"
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }

     goToPublicProfile(userID){
       this.navCtrl.push(PublicProfilePage, {
          param1: userID,
          profilePageName: "Home"
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }

     goToActionPage(objectiveID){
       this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID,
          pageName: 'Home'
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }

     share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }

     shareController(title, imgURI, goal_id, action_type_id, $event) {
   const actionSheet = this.actionSheetCtrl.create({
     title: 'Share with',
     buttons: [
       {
         text: 'Facebook',
         icon: 'logo-facebook',
         handler: () => {
           this.shareProvider.facebookShare(title, imgURI);
           this.addToFav(goal_id, action_type_id);
           $event.srcElement.innerText++;           
           this.presentToast('Objective shared!');
         }
       }, 
       {
         text: 'Twitter',
         icon: 'logo-twitter',
         handler: () => {
           this.shareProvider.twitterShare(title, imgURI);
           this.addToFav(goal_id, action_type_id);
           $event.srcElement.innerText++;           
           this.presentToast('Objective shared!');
         }
       },
       {
         text: 'Others',
         icon: 'md-share',
         handler: () => {
           console.log('Archive clicked');
           this.shareProvider.otherShare(title, imgURI);
           this.addToFav(goal_id, action_type_id);
           $event.srcElement.innerText++;           
           this.presentToast('Objective shared!');
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
 }

  getFavID($event, goal_id, action_type_id){
    console.log($event);

    
    this.usersProv.getJsonData(this.favEndpoint+'?goal_id='+goal_id+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID).subscribe(
      result => {
        console.log("Aqui", result);
        
        if(result != "" ){
          this.removeFav(result[0].id);
          this.presentToast('Removed from favorites');
          $event.srcElement.style.backgroundColor = '#f2f2f2';
          $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
          $event.srcElement.innerText--;
          
        }else{
         this.addToFav(goal_id, action_type_id);
         this.presentToast('Added to Favorites');
          $event.srcElement.style.backgroundColor = '#296fb7';
          $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
          $event.srcElement.innerText++;
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
        if(el.action_type_id === this.likeAction){
          return el.user_id[0].id== this.myrallyID;
        }
        
      });
      
      if (!found){
        return '#f2f2f2';
        
      }else{
        return '#296fb7';
        
      }
    }
   
  }




removeFav(recordID){
  this.usersProv.unfollowOrganization(this.favEndpoint, recordID);
  this.usersProv.removeFollowRecordID(recordID, 'favorites');
}

showPhotoViewer(path){
  this.photoViewer.show(path);
}

goToEventDetail(eventID){
  console.log(eventID);
  this.navCtrl.push(EventDetailPage, {
          eventID: eventID,
          eventPageName: "Home"
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
}

/* Functions to add likes on events... We need it this way for now */

getEventsLikeID($event, event_id, action_type_id){
  console.log($event);

  
  this.usersProv.getJsonData(this.favEndpoint+'?event_id='+event_id+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID).subscribe(
    result => {
      console.log("Aqui", result);
      
      if(result != "" ){
        this.removeEventFav(result[0].id);
        this.presentToast('Removed from favorites');
        $event.srcElement.style.backgroundColor = '#f2f2f2';
        $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
        
      }else{
       this.addEventToFav(event_id, action_type_id);
       this.presentToast('Added to Favorites');       
        $event.srcElement.style.backgroundColor = '#4a90e2';
        $event.srcElement.offsetParent.style.backgroundColor = '#4a90e2';
        
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


addEventToFav(event_id, action_type_id){
  this.usersProv.addLikeEvent(this.favEndpoint, event_id, action_type_id, this.myrallyID);
}

removeEventFav(recordID){
  this.usersProv.unfollowOrganization(this.favEndpoint, recordID);
}


getButtonColor($event){

  console.log($event);
//   this.httpProvider.getJsonData(this.favEndpoint+'?event_id='+this.eventID+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID)
//     .subscribe(
//         result => {
//           console.log("Resultado", result);
//             if (result !== ""){
//               this.buttonColor = "#296fb7";
//             }
//             else{
//               this.buttonColor = "#f2f2f2";
//             }
//         },
//     err =>{
//       console.error("Error : "+err);         
//     } ,
//     () => {
//       console.log('getData completed');
//       console.log("Color", this.buttonColor);

//     }
//       );
 }


 shareControllerEvent(title, imgURI, event_id, action_type_id, $event) {
  const actionSheet = this.actionSheetCtrl.create({
    title: 'Share with',
    buttons: [
      {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          this.shareProvider.facebookShare(title, imgURI);
          this.addEventToFav(event_id, action_type_id);
          $event.srcElement.innerText++;           
          this.presentToast('Objective shared!');
        }
      }, 
      {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          this.shareProvider.twitterShare(title, imgURI);
          this.addEventToFav(event_id, action_type_id);
          $event.srcElement.innerText++;           
          this.presentToast('Objective shared!');
        }
      },
      {
        text: 'Others',
        icon: 'md-share',
        handler: () => {
          console.log('Archive clicked');
          this.shareProvider.otherShare(title, imgURI);
          this.addEventToFav(event_id, action_type_id);
          $event.srcElement.innerText++;           
          this.presentToast('Objective shared!');
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


}
