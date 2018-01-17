import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
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
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  hide_enpoint:any = 'hide_objective';
  goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
  likeendpoint:any = 'likes';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  disable:boolean = false;
  organizationEndpoint:any = 'following_organizations';




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
    public modalCtrl: ModalController
    ) {

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
          organizationID: organizationID, 
          OrgPageName: "Take Action"
    },  {animate:true,animation:'transition',duration:500,direction:'forward'});
     }


     goToActionPage(objectiveID, goal_type, source, goalID){ 
      if(goal_type !== "sign"){
       this.navCtrl.push(OrganizationActionPage, {
         objectiveID: objectiveID,
         pageName: 'Home'
     }, {animate:true,animation:'transition',duration:500,direction:'forward'});
      } else{
       this.navCtrl.push(SignFeedBackPage, {iframeUrl: source, repID:objectiveID, goalID:goalID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
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
    this.httpProvider.addLike(this.likeendpoint, reference_id, this.myrallyID, like_type).subscribe(
        response =>{
            console.log(response);
            this.disable = false;
        });

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
    this.httpProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
  }

  ellipsisController(name, id, index, orgID, followers){
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
      {
        text: 'Share this post via...',
        handler: () => {
          console.log("test");
  
        }
      }, 
      {
        text: 'Hide post',
        handler: () => {
         this.hideItem(id, index);
        }
      },
      {
        text: 'Turn on/off notifications for ' + name,
        handler: () => {
          console.log("test");
  
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
