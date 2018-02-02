import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController,  NavParams, ToastController, ActionSheetController, LoadingController } from 'ionic-angular';
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
import { ThanksPage } from '../thanks/thanks';
import { DomSanitizer } from '@angular/platform-browser';



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
    public records:any = [];
    public following:any = [];
    safeSvg:any;
    loading:any;
    loader:boolean = false;
    enablePlaceholder:boolean = true;

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
  public modalCtrl: ModalController,
  public loadingCtrl: LoadingController,
  private sanitizer: DomSanitizer) {
      this.all = "all";
      this.enable = false;
    //   let svg = `<div id="Rallycontainer">
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Loading</title>
    //     <path id="arrow" class="bounce" d="M79.1,44.3c-2.4-0.5-4.1-2.6-4-5V22.6H58.7c-2.4,0.1-4.5-1.6-5-4C53.2,16,55,13.5,57.6,13c0.3,0,0.5-0.1,0.8-0.1h21.5
    //       c2.7,0,4.8,2.2,4.8,4.8v21.8c0,2.7-2.2,4.8-4.8,4.8C79.7,44.4,79.4,44.4,79.1,44.3z"/>
    //     <path id="R" d="M67.5,87H52.8L41.4,66.3h-4V87H24.8V33h19.4c6,0,10.7,1.3,14.3,3.8c3.9,2.9,6.1,7.5,5.9,12.4c0,10.3-6.6,14.3-10.6,15.5
    //       L67.5,87z M48.9,44.2c-1.6-1.2-3.6-1.4-6.5-1.4h-5v13.9h5c2.9,0,4.9-0.3,6.5-1.5c1.8-1.2,2.9-3.3,2.7-5.5
    //       C51.8,47.5,50.7,45.4,48.9,44.2z"/></svg>
    //   </div>`;

    // this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
    //   this.loading = this.loadingCtrl.create({
    //      spinner: 'hide',
    //     content: this.safeSvg,  
    //   }); 
    //   this.loading.present();
    this.enablePlaceholder = true;

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
 
//       getdata(){
//   this.httpProvider.getJsonData(this.endpoint).subscribe(
//     result => {
//       this.activitiesPersonal=result['Direct_Actions'];
//       this.objectivesPersonal=result['Objectives_Actions'];
//     },
//     err =>{
//       console.error("Error : "+err);
//     } ,
//     () => {
//       console.log('getData completed');
//     }
//   );
// }

doRefresh(refresher) {
  this.objectivesAction = [];
  this.objectivesPersonal = []
  // this.loading = this.loadingCtrl.create({
  //   spinner: 'hide',
  //   content: this.safeSvg,
  //   }); 
  //   this.loading.present();
  this.loader = true;
  this.getdata();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  } 

getdata(){
  
  return new Promise(resolve => {
    this.httpProvider.getRecords(this.endpoint)
    .then(data => {
      console.log("Full Data", data);
      this.getArray(data['Objectives_Actions']);
      this.getArray(data['Direct_Actions']);
      //this.loading.dismiss(); 
      this.enablePlaceholder = false;
      this.loader = false;   
      resolve(true);

    });
});
  
}

sortArray(array){
  array.sort(function(a, b){
    var dateA:any = new Date(a.created_at), dateB:any = new Date(b.created_at);
    return dateB - dateA;
  });
}

getArray(array){
  for(let person of array) {
    this.records.push(person);
    this.sortArray(this.records);
  } 

}
getPersonaldata(){
  return new Promise(resolve => {
    this.httpProvider.getRecords(this.endpoint + '/' + this.myRallyID)
    .then(data => {
      console.log("Full Data", data);
      this.getFollowingArray(data['Objectives_Actions']);
      this.getFollowingArray(data['Direct_Actions']);

        
      resolve(true);

    });
});
  
}

getFollowingArray(array){
    for(let person of array) {
      this.following.push(person);
      this.sortArray(this.following);
    }
  
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
  let modal = this.modalCtrl.create(ThanksPage);
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
       this.streakModal();
       this.disable = false;

     }
   }, 
   {
     text: 'Twitter', 
     handler: () => {
       this.shareProvider.twitterShare(title, imgURI).then(() =>{
        this.addShareAction(reference_id, like_type);
        $event.srcElement.lastChild.data++;
        this.presentToast('Objective shared!');
        this.streakModal();
        this.disable = false;
       }).catch((error) => {
        console.error("shareViaWhatsapp: failed", error);
        this.disable = false;

      });
       

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

goToActionPage(objectiveID, goal_type, source, goalID, repID){ 
  if(goal_type !== "sign"){
   this.navCtrl.push(OrganizationActionPage, {
     objectiveID: objectiveID,
     pageName: 'Community'
 }, {animate:true,animation:'transition',duration:500,direction:'forward'});
  } else{
   this.navCtrl.push(SignFeedBackPage, {iframeUrl: source, repID:repID, goalID: goalID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }  
 
}



}
