import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController,  NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { PublicProfilePage } from '../public-profile/public-profile';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { UsersProvider } from '../../providers/users/users';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { ThankYouPage } from '../thank-you/thank-you';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { RepresentativeProfilePage } from '../representative-profile/representative-profile';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { OrganizationActionPage } from '../organization-action/organization-action';
import { SignFeedBackPage } from '../sign-feed-back/sign-feed-back';



@IonicPage()
@Component({
  selector: 'page-friendsactivity',
  templateUrl: 'friendsactivity.html',
})
export class FriendsactivityPage {

    activitiesData:any;
    myRallyID:any;
    endpoint:string = 'community_feed';
    all: string = "all";
    objectivesAction:any;
    disable:boolean = false;
    activityLike:any = 'd32c1cb5-b076-4353-ad9c-1c8f81d812e3';
    likeendpoint:any = 'likes';
    favEndpoint:any = 'actions';
    shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
    activitiesPersonal:any;
    objectivesPersonal:any;
    enable:boolean = true;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider,
    public viewCtrl:ViewController,
    private usersProvider: UsersProvider,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    private shareProvider:SocialShareProvider,
  public modalCtrl: ModalController) {
      this.all = "all";
      this.enable = true;
      console.log(this.enable);
      this.usersProvider.returnRallyUserId().then( user => {
        this.myRallyID = user.apiRallyID;
        this.getdata();
        this.getPersonaldata();
      });
        

  }

  
    ionViewWillEnter(){
   
      this.viewCtrl.setBackButtonText("My Feeds");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsactivityPage');
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

     goToPublicProfile(userID){
       this.navCtrl.push(PublicProfilePage, {
          param1: userID,
          profilePageName: "Community"
    });
     }
 
      getdata(){
  this.httpProvider.getJsonData(this.endpoint).subscribe(
    result => {
      this.activitiesPersonal=result['Direct_Actions'];
      this.objectivesPersonal=result['Objectives_Actions'];
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}
getPersonaldata(){
  this.httpProvider.getJsonData(this.endpoint + '/' + this.myRallyID).subscribe(
    result => {
      this.activitiesData=result['Direct_Actions'];
      this.objectivesAction=result['Objectives_Actions'];
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}


getLikeStatus($event, reference_id, like_type, likes){
  this.disable = true;

  this.usersProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myRallyID).subscribe(
    result => {
      console.log($event);
      console.log("Aqui", $event.srcElement.lastChild.data);
      
      if(result != "" ){
        this.removeFav(result[0].id);
        this.presentToast('You unliked it');
        $event.srcElement.style.backgroundColor = '#f2f2f2';
        $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
        $event.srcElement.lastChild.data--;
        
      }else{
       this.addLike(reference_id, like_type);
       this.presentToast('You liked it');
        $event.srcElement.style.backgroundColor = '#296fb7';
        $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
        $event.srcElement.lastChild.data++;
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
  this.usersProvider.addLike(this.likeendpoint, reference_id, this.myRallyID, like_type).subscribe(
    response =>{
        console.log(response);
        this.disable = false;
    });

}

findInLoop(actions){
  if (actions != null){
    var found = actions.some(el => { 
        return el == this.myRallyID;
      
    });
    
    if (!found){
      return '#f2f2f2';
      
    }else{
      return '#296fb7';
      
    }
  }

}

removeFav(recordID){
  this.usersProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
    console.log(res);
    this.disable = false;

  }, err =>{
    console.log(err);
  });
  this.usersProvider.removeFollowRecordID(recordID, 'favorites');

}

presentToast(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
}

streakModal() {
  let modal = this.modalCtrl.create(ThankYouPage);
  modal.present();
}
shareController(title, imgURI, reference_id, like_type, $event) {
  this.disable = true;

const actionSheet = this.actionSheetCtrl.create({
 title: 'Share to where?',
 buttons: [
   {
     text: 'Facebook',
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
     handler: () => {
       this.shareProvider.twitterShare(title, imgURI);
       this.addShareAction(reference_id, like_type);
       $event.srcElement.lastChild.data++;
       this.presentToast('Objective shared!');
       this.disable = false;

     }
   },
  //  {
  //   text: 'Copy Link',
  //   handler: () => {
  //     this.disable = false;

  //   }
  // },
  // {
  //   text: 'SMS Message',
  //   handler: () => {
  //     this.presentToast('Objective shared!');
  //     this.disable = false;

  //   }
  // },
  // {
  //   text: 'Email',
  //   handler: () => {
      
  //     this.presentToast('Objective shared!');
  //     this.disable = false;

  //   }
  // },
   {
     text: 'Cancel',
     role: 'cancel',
     handler: () => {
       console.log('Cancel clicked');
       this.disable = false;

     }
   }
 ]
});

actionSheet.present();
}


addShareAction(goal_id, action_type_id){
  this.usersProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myRallyID);
}

segmentChanged(){
  console.log(this.enable);
  this.enable = !this.enable;
}


goToRepProfile(repID){
  this.navCtrl.push(RepresentativeProfilePage, {repID: repID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
}

goToOrganizationProfile(organizationID){
  this.navCtrl.push(OrganizationProfilePage, {
     organizationID: organizationID,
     OrgPageName: "Community"
}, {animate:true,animation:'transition',duration:500,direction:'forward'});
}

goToActionPage(objectiveID, goal_type){ 
  if(goal_type !== "sign"){ 
   this.navCtrl.push(OrganizationActionPage, {
     objectiveID: objectiveID,
     pageName: 'Community'
 }, {animate:true,animation:'transition',duration:500,direction:'forward'});
  } else{
   this.navCtrl.push(SignFeedBackPage, {iframeUrl: 'https://ionicframework.com/', repID:objectiveID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }  
 
}



}
