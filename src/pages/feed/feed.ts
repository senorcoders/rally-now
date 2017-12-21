import { Component, ViewChild } from '@angular/core';
import {  NavController, AlertController, PopoverController, LoadingController, ActionSheetController, ToastController, Events } from 'ionic-angular';
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
import { FriendsRequestPage } from '../friends-request/friends-request';
import { FilterEventsPage } from '../filter-events/filter-events';
import { WebviewPage } from '../webview/webview';
import { Content } from 'ionic-angular';

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
  testPhoto:any = 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08';
  localPhoto:any = 'https://static1.squarespace.com/static/5669e1f969a91ad6eca4abe1/t/581cc790b3db2bd6d9881936/1478281126634/Screen+Shot+2016-11-04+at+1.33.31+PM.png';
  avatarPhoto:any = 'https://flipagram.com/assets/resources/img/fg-avatar-anonymous-user-retina.png';
  goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
  activityLike:any = 'd32c1cb5-b076-4353-ad9c-1c8f81d812e3';
  eventLike:any = 'd5d1b115-dbb6-4894-8935-322c336ae951';
  likeendpoint:any = 'likes';
  message:any = [{'action':'getMessages','uid':'1dcd32f2-745e-4b9c-8072-3f702d8b0415'}];
  disable:boolean = false;
  
  // @ViewChild(Content) content: Content;

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
    private photoViewer: PhotoViewer,
    public eventsAng: Events) {

      // eventsAng.subscribe('home:scrollToTop', (time) => {
      //   console.log('home:scrollToTop', 'at', time);
      //   this.content.scrollToTop();
      // });
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


          // var connection = new WebSocket('ws://138.68.19.227:5000/');

          //   connection.onopen = function () {
          //     console.log("Connected!");
                
          //   };

            // connection.onmessage = function (e) {

            //  console.log(e);
         
            // };

            // this.message = JSON.stringify(this.message);
            //connection.send(this.message);
   
  
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
      console.log("Homefeed for Current user", result);
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
 
     goToActionPage(objectiveID, goal_type){
       if(goal_type !== "sign"){
        this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID,
          pageName: 'Home'
      }, {animate:true,animation:'transition',duration:500,direction:'forward'});
       } else{
        this.navCtrl.push(WebviewPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
       }
      
     }

     share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }

     shareController(title, imgURI, reference_id, like_type, $event) {
      this.disable = true;

   const actionSheet = this.actionSheetCtrl.create({
     title: 'Share with',
     buttons: [
       {
         text: 'Facebook',
         icon: 'logo-facebook',
         handler: () => {
           this.shareProvider.facebookShare(title, imgURI);
           this.addShareAction(reference_id, like_type);
           $event.srcElement.lastChild.data++;
           this.presentToast('Objective shared!');
           this.disable = false;

         }
       }, 
       {
         text: 'Twitter',
         icon: 'logo-twitter',
         handler: () => {
           this.shareProvider.twitterShare(title, imgURI);
           this.addShareAction(reference_id, like_type);
           $event.srcElement.lastChild.data++;
           this.presentToast('Objective shared!');
           this.disable = false;

         }
       },
       {
         text: 'Others',
         icon: 'md-share',
         handler: () => {
           console.log('Archive clicked');
           this.shareProvider.otherShare(title, imgURI);
           this.addShareAction(reference_id, like_type);
           $event.srcElement.lastChild.data++;
           this.presentToast('Objective shared!');
           this.disable = false;

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


    getLikeStatus($event, reference_id, like_type, likes){
      this.disable = true;

      this.usersProv.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
        result => {
          console.log($event);
          console.log("Aqui", $event.srcElement.lastChild.data);
          
          if(result != "" ){
            this.removeFav(result[0].id);
            this.presentToast('You unliked it');
            $event.srcElement.style.backgroundColor = '#f2f2f2';
            $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
            $event.srcElement.lastChild.data--;
            this.disable = false;
            
          }else{
           this.addLike(reference_id, like_type);
           this.presentToast('You liked it');
            $event.srcElement.style.backgroundColor = '#296fb7';
            $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
            $event.srcElement.lastChild.data++;
            this.disable = false;
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

    addLike(reference_id, like_type){
      this.usersProv.addLike(this.likeendpoint, reference_id, this.myrallyID, like_type);
    }



    hideItem(objective_id, index){
        this.usersProv.hideObjective(this.hide_enpoint, this.myrallyID, objective_id);
        (this.objectives).splice(index, 1);
    }
    



  findInLoop(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el == this.myrallyID;
        
      });
      
      if (!found){
        return '#f2f2f2';
        
      }else{
        return '#296fb7';
        
      }
    }

  }




removeFav(recordID){
  this.usersProv.unfollowOrganization(this.likeendpoint, recordID);
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

goToRequests(){
  this.navCtrl.push(FriendsRequestPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
}

goToEventFilter(){
  this.navCtrl.push(FilterEventsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  
}

addShareAction(goal_id, action_type_id){
  this.usersProv.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
}
}
