import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationActionPage } from '../organization-action/organization-action';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { OrganizationFollowersPage } from '../organization-followers/organization-followers';
import { SignFeedBackPage } from '../sign-feed-back/sign-feed-back';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { EventDetailPage } from '../event-detail/event-detail';


@IonicPage()
@Component({
  selector: 'page-organization-profile',
  templateUrl: 'organization-profile.html',
})
export class OrganizationProfilePage {
	organizationID:string;
	endpoint:string = 'organization/';
	name:string;
	description:string;
	short_desc:string;
	organizationEndpoint:any = 'following_organizations';
	dataID:any;
  buttonFollowTest:string;
  login:any = true;
  objectives:any;
  location:string;
  myrallyID:any;
  hide_enpoint:any = 'hide_objective';
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  OrgPageName:any;
  data:any;
  posts:any;
  followers:any;
  goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
  likeendpoint:any = 'likes';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  disable:boolean = false;
  twitter:any;
  events:any;
  tweets:any;
  eventLike:any = 'd5d1b115-dbb6-4894-8935-322c336ae951';
  notify:any;
  followersArr:any;



  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private httpProvider:UsersProvider,
    private orgProvider:OrganizationsProvider,
  	public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    public actionSheetCtrl: ActionSheetController,
    public viewCtrl:ViewController,
    private shareProvider:SocialShareProvider,
    private inAppBrowser: InAppBrowser) {
  	this.organizationID = navParams.get('organizationID');
    this.OrgPageName = navParams.get('OrgPageName');

    this.httpProvider.returnRallyUserId().then(user => {
      this.myrallyID = user.apiRallyID;
        this.getdata();
    this.checkOrganizationStatus();

    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationProfilePage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.OrgPageName);
  }

  getdata(){
  this.orgProvider.getJsonData(this.endpoint + this.organizationID).subscribe(
    result => {
      console.log(result);
      this.data=result.organization[0];
      this.name=result.organization[0]['name'];
      this.description=result.organization[0]['description'];
      this.short_desc=result.organization[0]['short_desc'];
      this.dataID=result.organization[0]['id'];
      this.objectives = result.objectives;
      this.posts = result.organization[0]['post_count']; 
      this.followers = result.organization[0]['follower_count'];
      this.followersArr = result.organization[0]['followers'];

      this.notify = result.organization[0]['notify'];
      this.twitter = result.organization[0]['twitter'];
      this.events = result.organization[0].events;
      this.tweets = result.organization[0].tweets; 
      console.log("Success : "+ JSON.stringify(result.organization[0]['name']) );
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
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
  checkOrganizationStatus(){
   let user:any = firebase.auth().currentUser;
     if (user) {
       let orgRef = this.db.database.ref('organizations/'+user['uid']+'/'+this.organizationID);
    orgRef.on('value', snapshot=>{
      if (snapshot.hasChildren()) {
       console.log('Unfollow');
       this.buttonFollowTest = 'Unfollow';
       
      } else{
        console.log('Follow');
        this.buttonFollowTest = 'Follow';
          
      }
    });
     }else{
       console.log("No logueado");
       this.login = false;
     }
    
  }


presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

    addFollowRecordFirebase(organizationID){
     let user:any = firebase.auth().currentUser;
     let followRef = this.db.database.ref('organizations/'+user['uid']+'/'+organizationID);
     followRef.once('value', snapshot=>{
       if (snapshot.hasChildren()) {
         console.log('You already follow this org');
         this.unFollowActionSheet();
         //this.presentToast('You are not following this organization anymore');

       }else{
         this.followOrg(organizationID);
         this.presentToast('Follow Organization successfully');
       }
     });
    }

    followOrg(organizationID){
      this.httpProvider.followOrganization(this.organizationEndpoint, this.myrallyID, organizationID );
    }

    getOrganizationFollowRecordID(){
        this.httpProvider.getJsonData(this.organizationEndpoint+'?follower_id='+this.myrallyID+'&organization_id='+this.organizationID).subscribe(
    result => {
      console.log("Delete ID : "+ result[0].id);
      this.unfollow(result[0].id);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    });
    }

    unfollow(recordID){

      this.httpProvider.unfollowOrganization(this.organizationEndpoint, recordID);
      this.httpProvider.removeFollowRecordID(this.organizationID, 'organizations');
    }
    unFollowActionSheet() {
      
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Unfollow ' + this.name + '?' ,
      cssClass: 'title-img',      
      buttons: [
        {
          text: 'Unfollow',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.getOrganizationFollowRecordID();
            
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





removeFav(recordID){
  this.httpProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
    console.log(res);
    this.disable = false;

  }, err =>{
    console.log(err);
  });
 this.httpProvider.removeFollowRecordID(recordID, 'favorites');
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

    ellipsisController(name, orgID, desc, notify){
      const actionSheet = this.actionSheetCtrl.create({
        buttons: [
        {
          text: 'Share this post via...',
          handler: () => {
            console.log("test");
            this.shareProvider.otherShare(name, desc);
    
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

    eventEllipsisController(name, orgID, desc, followers, notify){
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
          text: this.notifyExist(notify) + name,
      handler: () => {
        console.log("test");
        this.checkNotifiers(orgID);
    
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
           $event.path[1].lastChild.data++;
           this.presentToast('Objective shared!');
           this.disable = false;
 
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

    goToFollowers(){
      this.navCtrl.push(OrganizationFollowersPage, {orgID: this.organizationID});
    }

    tweetOrg(username){
      this.shareProvider.twitterShare(username);
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

    openWebpage(username, tweetID) {
      var url:string = 'https://twitter.com/' + username + '/status/' + tweetID;
      const options: InAppBrowserOptions = {
        zoom: 'no'
      }
  
      // Opening a URL and returning an InAppBrowserObject
      const browser = this.inAppBrowser.create(url, '_blank', options);
  
     // Inject scripts, css and more with browser.X
    }

    goToEventDetail(eventID){
      console.log(eventID);
      this.navCtrl.push(EventDetailPage, {
              eventID: eventID,
              eventPageName: "Home"
        }, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    
}
