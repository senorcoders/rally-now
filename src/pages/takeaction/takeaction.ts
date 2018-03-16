import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ActionSheetController, ModalController, LoadingController } from 'ionic-angular';
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
import { ThankYouPage } from '../thank-you/thank-you';
import { SignFeedBackPage } from '../sign-feed-back/sign-feed-back';
import { ThanksPage } from '../thanks/thanks';
import { DomSanitizer } from '@angular/platform-browser';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { DonateFeedBackPage } from '../donate-feed-back/donate-feed-back';


@IonicPage()
@Component({
  selector: 'page-takeaction',
  templateUrl: 'takeaction.html',
})
export class TakeactionPage {

  endpoint:string = 'objectives/take_action/';
  objectives:any;
  myrallyID:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  hide_enpoint:any = 'hide_objective';
  goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
  likeendpoint:any = 'likes';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  disable:boolean = false;
  organizationEndpoint:any = 'following_organizations';
  safeSvg:any;
  loading:any;
  loader:boolean = false;
  enablePlaceholder:boolean = true;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController, 
    public popoverCtrl: PopoverController,
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    private shareProvider:SocialShareProvider,
    public viewCtrl:ViewController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private sanitizer: DomSanitizer,
    public orgProvider: OrganizationsProvider
    ) {
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
     this.httpProvider.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
        this.getdata();

      });
  }

  
    ionViewWillEnter(){
   
      this.viewCtrl.setBackButtonText("My Feeds");
    }

    doRefresh(refresher) {
      this.objectives = [];
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
    this.navCtrl.setRoot(FeedPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }


      getdata(){
  this.orgProvider.getJsonData(this.endpoint+ this.myrallyID ).subscribe(
    result => {
      this.objectives=result;
      //this.loading.dismiss();
      this.enablePlaceholder = false;
      this.loader = false;
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
          organizationID: organizationID, 
          OrgPageName: "Take Action"
    },  {animate:true,animation:'transition',duration:500,direction:'forward'});
}


     goToActionPage(objectiveID, goal_type, source, goalID, repID){  
      if(goal_type === "contact"){
       this.navCtrl.push(OrganizationActionPage, {
         objectiveID: objectiveID,
         pageName: 'Action'
     }, {animate:true,animation:'transition',duration:500,direction:'forward'});
      } else if(goal_type === 'sign'){
       this.navCtrl.push(SignFeedBackPage, {iframeUrl: source, repID:repID, goalID:goalID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
      }  else if(goal_type === 'donate'){
        this.navCtrl.push(DonateFeedBackPage, {iframeUrl: source, repID:repID, goalID:goalID}, {animate:true,animation:'transition',duration:500,direction:'forward'});

      }
     
    }



 

 presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }




   share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }

      

 removeFav(recordID){
  this.httpProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
    console.log(res);
    this.disable = false;

  }, err =>{
    console.log(err);
  });
}

hideItem(objective_id, index){
        this.httpProvider.hideObjective(this.hide_enpoint, this.myrallyID, objective_id);
        (this.objectives).splice(index, 1);
    }

    findInLoop(actions){
      if (actions != null){
        var found = actions.some(el => { 
          console.log(el);
            return el == this.myrallyID;
          
        });
        
        if (!found){
          return '#f2f2f2';
          
        }else{
          return '#296fb7';
          
        }
      }
   
  }

  getIcon(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el == this.myrallyID;
        
      });
      
      if (!found){
        return 'md-heart-outline';
        
      }else{
        return 'md-heart';
        
      }
    }

  }


  getColor(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el == this.myrallyID;
        
      });
      
      if (!found){
        return '#b6b6b6';
        
      }else{
        return '#f2f2f2';
        
      }
    }

  }



  getLikeStatus($event, reference_id, like_type){
    this.disable = true;
    this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
      result => {
        console.log("Aqui", result);
        
        if(result != "" ){
          this.removeFav(result[0].id);
          this.presentToast('You unliked it');
          $event.srcElement.style.backgroundColor = '#f2f2f2';
          $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
          $event.srcElement.lastChild.data--;
          $event.srcElement.children[0].className = 'icon icon-md ion-md-heart-outline';
          $event.srcElement.style.color = '#b6b6b6';
          
        }else{
         this.addLike(reference_id, like_type);
         this.presentToast('You liked it');
          $event.srcElement.style.backgroundColor = '#296fb7';
          $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
          $event.srcElement.lastChild.data++;
          $event.srcElement.children[0].className = 'icon icon-md ion-md-heart';
          $event.srcElement.style.color = '#f2f2f2';
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
    this.httpProvider.addLike(this.likeendpoint, reference_id, this.myrallyID, like_type).subscribe(
        response =>{
            console.log(response);
            this.disable = false;
        });

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
         $event.path[1].lastChild.data++;
         this.presentToast('Objective shared!');
         this.disable = false;
         this.streakModal();

       }
     }, 
     {
       text: 'Twitter',
       handler: () => {
         this.shareProvider.twitterShare(title, imgURI).then(() => {
          this.addShareAction(reference_id, like_type);
          $event.path[1].lastChild.data++;
          this.presentToast('Objective shared!');
          this.disable = false;
          this.streakModal();
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
    this.httpProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
  }

  ellipsisController(name, id, index, orgID, desc, followers, notify){
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
      {
        text: 'Share this post via...',
        handler: () => {
          this.shareProvider.otherShare(name, desc);
  
        }
      }, 
      {
        text: 'Hide post',
        handler: () => {
         this.hideItem(id, index);
        }
      },
      {
        text: this.notifyExist(notify) + name,
        handler: () => {
          console.log("test");
          this.checkNotifiers(orgID);
  
        }
      },
      {
        text: this.getOrganizationFollowStatus(followers) +' ' + name,
        handler: () => {
          this.orgStatus(orgID);
          console.log("test");
  
        }
      },
      {
        text: 'Report',
        role: 'destructive',
        handler: () => {
          console.log("test");
  
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

  notifyExist(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el == this.myrallyID;
        
      });
      
      if (!found){
        return 'Turn on notifications for ';
        
      }else{
        return 'Turn off notifications for ';
        
      }
    }
  }
  
  checkNotifiers(orgID){
    this.httpProvider.getJsonData(this.organizationEndpoint + '?follower_id=' + this.myrallyID + '&organization_id=' + orgID)
      .subscribe(result => {
        console.log("Notifications", result);
        if(result != ""){
          console.log(result[0].enable_notifications);
          if(result[0].enable_notifications == true){
            this.httpProvider.updateSingleItem(this.organizationEndpoint + '/' + result[0].id, JSON.stringify({enable_notifications: false}));
            this.presentToast("You've turned off notifications for this organization");
          }else{
            this.httpProvider.updateSingleItem(this.organizationEndpoint + '/' + result[0].id, JSON.stringify({enable_notifications: true}));
            this.presentToast("You've turned on notifications for this organization");
  
          }
        }else{
          this.presentToast("You need to follow this organization to enable the notifications");
        }
      });
  }

  getOrganizationFollowStatus(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el.id == this.myrallyID;
        
      });
      
      if (!found){
        return 'Follow';
        
      }else{
        return 'Unfollow';
        
      }
    }
  }


  orgStatus(orgID){
    this.httpProvider.getJsonData(this.organizationEndpoint+'?follower_id='+this.myrallyID+'&organization_id='+orgID).subscribe(
          result => {
            if(result != ""){
               this.unfollowOrg(result[0].id, orgID);
               console.log("Unfollow");
            }else{
              console.log("Follow");
              this.followOrg(orgID);
            }
          },
          err =>{
          console.error("Error : "+err);
          } ,
          () => {
          console.log('getData completed');
          });
          }
  
  
          unfollowOrg(recordID, orgID){
  
            this.httpProvider.unfollowOrganization(this.organizationEndpoint, recordID);
            this.httpProvider.removeFollowRecordID(orgID, 'organizations');
            this.presentToast("You're not following this organization anymore");
          }
  
          followOrg(organizationID){
            this.httpProvider.followOrganization(this.organizationEndpoint, this.myrallyID, organizationID );
            this.presentToast("You're now following this organization");
  
          }

}
