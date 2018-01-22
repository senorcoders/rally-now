import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, ToastController, ModalController, LoadingController} from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { UsersProvider } from '../../providers/users/users';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { OrganizationActionPage } from '../organization-action/organization-action';
import { EventDetailPage } from '../event-detail/event-detail';
import { FilterEventsPage } from '../filter-events/filter-events';
import { Storage } from '@ionic/storage';
import { ThankYouPage } from '../thank-you/thank-you';
import { DomSanitizer } from '@angular/platform-browser';
import { SignFeedBackPage } from '../sign-feed-back/sign-feed-back';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage() 
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html',
})
export class OrganizationsPage {
  organizations: any;
  endpoint:string = 'my_organizations_pagination/';
  myApiRallyID:any;
 favEndpoint:any = 'actions';
   hide_enpoint:any = 'hide_objective';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
  tweetLike:any = 'ab860ccb-9713-49e5-b844-34d18f92af21';
  eventLike:any = 'd5d1b115-dbb6-4894-8935-322c336ae951';
  likeendpoint:any = 'likes';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  disable:boolean = false;
  organizationEndpoint:any = 'following_organizations';
  events:any;
  eventStart:any;
  eventEnd:any;
  eventFiltered:boolean = false;
  public records:any = [];
  private start:number=1;
  loading:any;
  filterBy:any;
  safeSvg:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider,
    private rallyProvider:UsersProvider,
    public viewCtrl:ViewController,
    public actionSheetCtrl: ActionSheetController,
    private shareProvider:SocialShareProvider,
    public toastCtrl: ToastController,
    private photoViewer: PhotoViewer,
    public modalCtrl: ModalController,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    private sanitizer: DomSanitizer,
    private inAppBrowser: InAppBrowser) {
      let svg = `<div id="Rallycontainer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Loading</title>
      <path id="arrow" class="bounce" d="M79.1,44.3c-2.4-0.5-4.1-2.6-4-5V22.6H58.7c-2.4,0.1-4.5-1.6-5-4C53.2,16,55,13.5,57.6,13c0.3,0,0.5-0.1,0.8-0.1h21.5
        c2.7,0,4.8,2.2,4.8,4.8v21.8c0,2.7-2.2,4.8-4.8,4.8C79.7,44.4,79.4,44.4,79.1,44.3z"/>
      <path id="R" d="M67.5,87H52.8L41.4,66.3h-4V87H24.8V33h19.4c6,0,10.7,1.3,14.3,3.8c3.9,2.9,6.1,7.5,5.9,12.4c0,10.3-6.6,14.3-10.6,15.5
        L67.5,87z M48.9,44.2c-1.6-1.2-3.6-1.4-6.5-1.4h-5v13.9h5c2.9,0,4.9-0.3,6.5-1.5c1.8-1.2,2.9-3.3,2.7-5.5
        C51.8,47.5,50.7,45.4,48.9,44.2z"/></svg>
    </div>`;

      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
      this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: this.safeSvg,  
      }); 
        this.loading.present();
    this.rallyProvider.returnRallyUserId()
      .then(user => {
        console.log(user);
        this.myApiRallyID = user.apiRallyID;
        this.getdata();
 
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationsPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText("My Feeds");
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

     getdata(startDate?, endDate?, filterBy?){

      if(startDate != null){
        if(filterBy !== 'all'){
          var url = this.endpoint + this.myApiRallyID + '/';


        }else{
          var url = this.endpoint +  'all-events/' + this.myApiRallyID + '/';


        }
        this.eventFiltered = true;
      } else{
        var url = this.endpoint + this.myApiRallyID + '/';
      }
      
      return new Promise(resolve => {
        this.httpProvider.loadHome(url, this.start)
          .then(data => {
            // this.records = [];

            console.log("Full Data", data);
            this.getArray(data['My_Organizations']);
            this.getArray(data['Orgs_events']);
            this.getArray(data['Org_Tweets']);
    
            //this.organizations = data;
              
            resolve(true);
            this.loading.dismiss(); 
    
          });
      });
}

getArray(array){
  // console.log(array);
  for(let person of array) {
    // console.log(person);
    this.records.push(person);
    // console.log("Records", this.records);
  }

}

doInfinite(infiniteScroll:any) {
  console.log(infiniteScroll);
  console.log('doInfinite, start is currently '+this.start);
  this.start+=1;
  console.log(this.start);
  
  this.getdata().then(()=>{
    infiniteScroll.complete();
  });
  
}


 goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID,
          OrgPageName: "My Organizations"
    });
     }

     goToActionPage(objectiveID, goal_type, source, goalID, repID){ 
      if(goal_type !== "sign"){
       this.navCtrl.push(OrganizationActionPage, {
         objectiveID: objectiveID,
         pageName: 'Home'
     }, {animate:true,animation:'transition',duration:500,direction:'forward'});
      } else{
       this.navCtrl.push(SignFeedBackPage, {iframeUrl: source, repID:repID, goalID: goalID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
      }  
     
    }

       


 presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }



  

    hideItem(objective_id, index){
        this.rallyProvider.hideObjective(this.hide_enpoint, this.myApiRallyID, objective_id);
        (this.organizations).splice(index, 1);
    }


     findInLoop(actions){
      if (actions != null){
        var found = actions.some(el => { 
            return el == this.myApiRallyID;
        });
        
        if (!found){
          return '#f2f2f2'; 
        }else{
          return '#296fb7';      
        }
      }
   
  }




removeFav(recordID){
  this.rallyProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
    console.log(res);
    this.disable = false;

  }, err =>{
    console.log(err);
  });
  this.rallyProvider.removeFollowRecordID(recordID, 'favorites');
}

showPhotoViewer(path){
  this.photoViewer.show(path);
}


getLikeStatus($event, reference_id, like_type){
  this.disable = true;
  this.rallyProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myApiRallyID).subscribe(
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
  this.rallyProvider.addLike(this.likeendpoint, reference_id, this.myApiRallyID, like_type).subscribe(
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
       this.streakModal();

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
       this.streakModal();

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
  this.rallyProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myApiRallyID);
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
      text: this.getOrganizationFollowStatus(followers) + ' ' + name,
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


orgStatus(orgID){
  this.rallyProvider.getJsonData(this.organizationEndpoint+'?follower_id='+this.myApiRallyID+'&organization_id='+orgID).subscribe(
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

          this.rallyProvider.unfollowOrganization(this.organizationEndpoint, recordID);
          this.rallyProvider.removeFollowRecordID(orgID, 'organizations');
          this.presentToast("You're not following this organization anymore");
        }

        followOrg(organizationID){
          this.rallyProvider.followOrganization(this.organizationEndpoint, this.myApiRallyID, organizationID );
          this.presentToast("You're now following this organization");

        }


        eventEllipsisController(name, orgID, desc, followers){
          const actionSheet = this.actionSheetCtrl.create({
            buttons: [
            {
              text: 'Share this event via...',
              handler: () => {
                console.log("test");
                this.shareProvider.otherShare(name, desc);
        
              }
            }, 
            {
              text: 'Turn on/off notifications for ' + name,
              handler: () => {
                console.log("test");
        
              }
            },
            {
              text: this.getOrganizationFollowStatus(followers) + ' ' + name,
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
                this.shareProvider.shareViaEmail();
        
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

        goToEventDetail(eventID){
          console.log(eventID);
          this.navCtrl.push(EventDetailPage, {
                  eventID: eventID,
                  eventPageName: "Home"
            }, {animate:true,animation:'transition',duration:500,direction:'forward'});
        }

        getDay(day){
          var d = new Date(day);
          var weekday = new Array(7);
          weekday[0] = "SUNDAY";
          weekday[1] = "MONDAY";
          weekday[2] = "TUESDAY";
          weekday[3] = "WEDNESDAY";
          weekday[4] = "THURSDAY";
          weekday[5] = "FRIDAY";
          weekday[6] = "SATURDAY";
          var n = weekday[d.getDay()];
          return n;
        }
        getShortDate(day){
          var d = new Date(day);
          var dd = d.getDate();
          
          var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
          // console.log(monthNames[d.getMonth()]);
          var date = monthNames[d.getMonth()] + ' ' + dd;
          return date;
        }

        goToEventFilter(){
          // this.navCtrl.push(FilterEventsPage,  {}, {animate:true,animation:'ios-transition',duration:500,direction:'forward'});
          let modal = this.modalCtrl.create(FilterEventsPage, {location: 'orgs'});
          modal.onDidDismiss(() => {
            console.log('Test');
            this.getStartDate();
            
          });
          modal.present();
          
        }

        getStartDate(){
          this.storage.get('startDate').then((val) => {
            this.eventStart = val;
            this.getEndDate();

          });
        }

        getEndDate(){
          this.storage.get('endDate').then((val) => {
            this.eventEnd = val; 
            this.getFilterType();
          });
        }

        getFilterType(){
          this.storage.get('filterBy').then((val) => {
            this.filterBy = val;
            this.getdata(this.eventStart, this.eventEnd, this.filterBy);
            this.records = [];
            this.loading = this.loadingCtrl.create({
              spinner: 'hide',
              content: this.safeSvg, 
            }); 
              this.loading.present();

          });
        }

        

        getOrganizationFollowStatus(actions){
          if (actions != null){
            var found = actions.some(el => { 
                return el.id == this.myApiRallyID;
              
            });
            
            if (!found){
              return 'Follow';
              
            }else{
              return 'Unfollow';
              
            }
          }
        }

        openWebpage(username, tweetID) {
          var url:string = 'https://twitter.com/' + username + '/status/' + tweetID;
          const options: InAppBrowserOptions = {
            zoom: 'no'
          }
          const browser = this.inAppBrowser.create(url, '_blank', options);     
        }
}
