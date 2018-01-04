import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { SocialShareProvider } from '../../providers/social-share/social-share';



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




  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private httpProvider: UsersProvider,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController) {
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
      this.locations = result.locations;
      this.event_time = result.event_time;
      this.description = result.description;
      this.image_url = result.image_url;
      this.orgName = result.organization[0].name;
      this.orgId = result.organization_id;
      this.orgPhoto = result.organization[0].image_url;
      this.rallies = result.rallies;
      this.likes = result.likes;
      this.shares = result.shares;
      this.start_date = result.start_date;
      this.attending = result.attending;
      this.organization_id = result.organization_id;
      this.followers = result.organization[0].followers;
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
            }
            else{
              this.buttonColor = "#f2f2f2";
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
     OrgPageName: this.title
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


}
