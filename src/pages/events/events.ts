import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, ModalController, PopoverController, ViewController, LoadingController } from 'ionic-angular';
import { FilterEventsPage } from '../filter-events/filter-events';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import {EventDetailPage} from '../event-detail/event-detail';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { ThankYouPage } from '../thank-you/thank-you';

 
@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  endpoint:string = 'events_pagination/';
  public events:any = [];
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  testPhoto:any = 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08';
  myrallyID:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  eventLike:any = 'd5d1b115-dbb6-4894-8935-322c336ae951';
  likeendpoint:any = 'likes';
  disable:boolean = false;
  organizationEndpoint:any = 'following_organizations';
  eventStart:any;
  eventEnd:any;
  eventFiltered:boolean = false;
  private start:number=1;
  loading:any;
  endpointOld:any = 'events';
  filterBy:any;
  zipcode:any;
  distance:any;




  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,  
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider,
    public storage: Storage,
    public viewCtrl:ViewController,
    public toastCtrl: ToastController,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController,
    private orgProvider:OrganizationsProvider,
    public loadingCtrl: LoadingController) {
      this.searchControl = new FormControl();
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
      this.loading.present();
      this.httpProvider.returnRallyUserId().then(user => {
        this.myrallyID = user.apiRallyID;
        this.getdata();        
      });


  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText("My Feeds");
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EventsPage');
  //    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
  //         this.searching = false;
  //         this.getdata();
  //       });

   
  // }

   

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

       getdata(startDate?, endDate?, filterBy?, zipcode?, distance?){
         if(startDate != null){
           if(filterBy === 'all'){
            this.getAllEvents();

           }else{
            this.getFollowedEvents(startDate, endDate, zipcode, distance);
           }
           this.eventFiltered = true;
         }else{
           this.getAllEvents();
         }
 
    }


    getFollowedEvents(startDate, endDate, zipcode, distance){
     

        return new Promise(resolve => {
          this.orgProvider.load(this.endpointOld + '/' + this.myrallyID + '/' + zipcode + '/' + startDate + '/' + endDate + '/' + distance + '/', this.start)
            .then(data => {
              this.events = data['Events'];
              this.loading.dismiss(); 

             
              resolve(true);
            });
        });
    }
getAllEvents(){
  return new Promise(resolve => {
    this.orgProvider.load(this.endpoint, this.start)
      .then(data => {
        // this.events = [];

        this.getArray(data);
       
        resolve(true);
      });
  });
}

getArray(array){
  for(let event of array) {
        this.events.push(event);
  }
  this.loading.dismiss(); 

}

getFilteredEvents(startDate, endDate){
  this.httpProvider.getJsonData(this.endpointOld + '/' + this.myrallyID + '/' + startDate + '/' + endDate).subscribe(
    result => {
      console.log(result);
     this.events = result.Events;
    //  this.storage.set('EVENTS', result);

     //this.filterItems(this.searchTerm); 
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    });
}

doInfinite(infiniteScroll:any) {
  console.log(infiniteScroll);
  console.log('doInfinite, start is currently '+this.start);
  this.start+=1;
  console.log(this.start);
  
  this.getAllEvents().then(()=>{
    infiniteScroll.complete();
  });
  
}


goToEventDetail(eventID){
  console.log(eventID);
  this.navCtrl.push(EventDetailPage, {
          eventID: eventID,
          eventPageName: "Events"
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
}


 goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID,
          OrgPageName: "Events"
    });
     }

  goToEventFilter(){
      // this.navCtrl.push(FilterEventsPage);
      let modal = this.modalCtrl.create(FilterEventsPage, {location: 'events'});
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
        this.getZipcode()
      });
    }

    getZipcode(){
      this.storage.get('homeZipcode').then((val) => {
        this.zipcode = val;
        this.getDistance();
      });
    }

    getDistance(){
      this.storage.get('homeDistance').then((val) => {
        this.distance = val;
        this.getFilterType();
      });

    }

    getFilterType(){
      this.storage.get('filterBy').then((val) => {
        this.filterBy = val;
        this.getdata(this.eventStart, this.eventEnd, this.filterBy, this.zipcode, this.distance);
        this.events = [];
        this.loading = this.loadingCtrl.create({
          content: 'Sorting Events...'
        }); 
          this.loading.present();

      });
    }

     onSearchInput(){
        this.searching = true;
    }

  

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }
    
    
    removeEventFav(recordID){
      this.httpProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
        console.log(res);
        this.disable = false;

      }, err =>{
        console.log(err);
      });

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

    getLikeStatus($event, reference_id, like_type){
      this.disable = true;
      this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
        result => {
          console.log("Aqui", result);
          
          if(result != "" ){
            this.removeEventFav(result[0].id);
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
      this.httpProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
    }

    eventEllipsisController(name, orgID, followers){
      const actionSheet = this.actionSheetCtrl.create({
        buttons: [
        {
          text: 'Share this event via...',
          handler: () => {
            console.log("test");
    
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
              var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              // console.log(monthNames[d.getMonth()]);
              var date = monthNames[d.getMonth()] + ' ' + d.getDay();
              return date;
            }

}
