import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, ModalController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { ThankYouPage } from '../thank-you/thank-you';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ThanksPage } from '../thanks/thanks';



@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  eventID:any;
  endpoint:any = 'events/';
  title:any;
  event_time:any;
  description:any;
  image_url:any;
  locations:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  myrallyID:any;
  buttonColor:any;
  eventPageName:any;
  orgName:any;
  orgId:any;
  orgPhoto:any;
  rallies:any;
  likes:any;
  shares:any;
  testPhoto:any = 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08';
  eventLike:any = 'd5d1b115-dbb6-4894-8935-322c336ae951';
  likeendpoint:any = 'likes';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  disable:boolean = false;
  start_date:any;
  attending:any;
  organizationEndpoint:any = 'following_organizations';
  organization_id;
  followers:any;
  state:any;
  venue:any;
  eventTime:any;
  fbID:any;
  eventEndTime:any;
  end_date:any;
  textColor:any;
  icon:any;
  notify:any;




  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private httpProvider: UsersProvider,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    private inAppBrowser: InAppBrowser) {
        this.eventID = navParams.get('eventID');
        this.eventPageName = navParams.get('eventPageName');
        console.log("Evento ID", navParams.get('eventID'));
        this.httpProvider.returnRallyUserId().then( user => {
          this.myrallyID = user.apiRallyID;
          this.getButtonColor();
          this.getdata();
        });
        

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.eventPageName);
  }

 


     getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.eventID).subscribe(
    result => {
      this.title = result.title;
      this.locations = result.city;
      this.event_time = result.event_time;
      this.description = result.description;
      this.image_url = result.image_url;
      this.orgName = result.organization.name;
      this.orgId = result.organization_id;
      this.orgPhoto = result.organization.image_url;
      this.rallies = result.rallies;
      this.likes = result.likes;
      this.shares = result.shares;
      this.start_date = result.start_date;
      this.attending = result.attending;
      this.organization_id = result.organization_id;
      this.followers = result.organization.followers;
      this.state = result.state;
      this.venue = result.venue;
      this.fbID = result.facebook_id;
      this.end_date = result.end_date;
      this.notify = result.organization.notify;
      this.getTime();
      this.getEndTime();

    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

getButtonColor(){

  this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+this.eventID+'&user_id='+this.myrallyID)
    .subscribe(
        result => {
          console.log("Resultado", result);
            if (result.length > 0){
              this.buttonColor = "#296fb7";
              this.textColor = "#f2f2f2";
              this.icon = "md-heart";
            }
            else{
              this.buttonColor = "#f2f2f2";
              this.textColor = "#b6b6b6";
              this.icon = "md-heart-outline";
            }
        },
    err =>{
      console.error("Error : "+err);         
    } ,
    () => {
      console.log('getData completed');
      console.log("Color", this.buttonColor);

    }
      );
}




presentToast(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
}




removeFav(recordID){
  this.httpProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
    console.log(res);
    this.disable = false;

  }, err =>{
    console.log(err);
  });
}


goToOrganizationProfile(organizationID){
  this.navCtrl.push(OrganizationProfilePage, {
     organizationID: organizationID,
     OrgPageName: 'Back'
}, {animate:true,animation:'transition',duration:500,direction:'forward'});
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
       this.shareProvider.twitterShare(title, imgURI).then(() =>{
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

eventEllipsisController(name, orgID, followers, notify){
  const actionSheet = this.actionSheetCtrl.create({
    buttons: [
    {
      text: 'Share this event via...',
      handler: () => {
        console.log("test");

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

        getTime(){

          if(this.start_date != null){
            var time = this.start_date.split("T");
            let bothTime = time[1].split("-");
            console.log("Hora", bothTime);
            var startTime = this.tConvert(bothTime[0]);
            this.eventTime = startTime ;
          }else{
            this.eventTime = 'No specific time';
          }
         
        }

        getEndTime(){

          if(this.end_date != null){
            var time = this.end_date.split("T");
            let endDate = time[1].split("-");
            console.log("Hora", endDate);
            var startTime = this.tConvert(endDate[0]);
            this.eventEndTime = "- " + startTime ;
          }
         
        }

        openWebpage() {
          var url:string = 'https://www.facebook.com/events/' + this.fbID;
          const options: InAppBrowserOptions = {
            zoom: 'no'
          }
      
          // Opening a URL and returning an InAppBrowserObject
          const browser = this.inAppBrowser.create(url, '_blank', options);
      
         // Inject scripts, css and more with browser.X
        }

        tConvert (time) {
          // Check correct time format and split into components
          time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        
          if (time.length > 1) { // If time format correct
            time = time.slice (1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
          }
        
          // console.log(time[0] + time[1] + time[2] + time[5]);
          return time[0] + time[1] + time[2] + time[5]; // return adjusted time or original string
        }


}
