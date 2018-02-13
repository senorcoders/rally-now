import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { OrganizationActionPage } from '../organization-action/organization-action';
import { SignFeedBackPage } from '../sign-feed-back/sign-feed-back';
import { RepresentativeProfilePage } from '../representative-profile/representative-profile';


@IonicPage()
@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {
	parameter: string;
	userData:any;
	endpoint:string = 'users/';
  hidden:any;
  followEndpoint:string= 'following_users';
  buttonFollowTest:string;
  login:any = true;
  notificationsEndpoint:any = 'devices';
  alertsEndpoint:any = 'ux_events';
  profilePageName:any;
  myRallyID:any;
  my_activity:any;
  name:any;
  photo_url:any;
  actions_taken:any;
  followers_count:any;
  organizations_count:any;
  id:any;
  disable:boolean = false;
  likeendpoint:any = 'likes';
  activityLike:any = 'd32c1cb5-b076-4353-ad9c-1c8f81d812e3';
  objectiveActions:any;
  activitiesData:any;
  favEndpoint:any = 'actions';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  username:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider:UsersProvider,
    private db: AngularFireDatabase,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    private photoViewer: PhotoViewer,
    public viewCtrl:ViewController,
    private shareProvider:SocialShareProvider
  ) {
  	this.parameter = navParams.get('param1');
    this.profilePageName = navParams.get('profilePageName');
    this.httpProvider.returnRallyUserId().then( user => {
      this.myRallyID = user.apiRallyID;
      this.getdata();
      this.checkUserStatus();
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicProfilePage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.profilePageName);
  }

  checkUserStatus(){
   let user:any = firebase.auth().currentUser;
     if (user) {
       let orgRef = this.db.database.ref('follow/'+user['uid']+'/'+this.parameter);
        orgRef.on('value', snapshot=>{
      if (snapshot.hasChildren()) {
       console.log('Unfollow');
       this.buttonFollowTest = 'Unfollow';
       
      } else{
        console.log('Follow');
        this.buttonFollowTest = 'Follow';
          
      }
    });
     } else{
       this.login = false;
     }
    
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.parameter).subscribe(
    result => {
      this.hidden=result.hide_activity;
      this.my_activity= result.my_actions;
      this.photo_url = result.photo_url;
      this.name = result.name;
      this.actions_taken = result.actions_taken;
      this.followers_count = result.followers_count;
      this.organizations_count = result.following_count;
      this.id = result.id;
      this.objectiveActions = result.Objectives_Actions;
      this.activitiesData = result.Direct_Actions;
      this.username = result.username;
      console.log("Success : "+ result);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
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

 addFollowRecordFirebase(friendID){ 
     let user:any = firebase.auth().currentUser;
     let followRef = this.db.database.ref('follow/'+user['uid']+'/'+friendID);
     followRef.once('value', snapshot=>{
       if (snapshot.hasChildren()) {
         console.log('You already follow this user');
         this.unFollowActionSheet();
         //this.presentToast('You are not following this user anymore');

       }else{
         //this.followFriend(friendID);
         this.getDeviceID(friendID);
         this.presentToast('Follow user successfully');
       }
     });
    }

    getDeviceID(user_id){
      //Reemplazar por parametro despues
      this.httpProvider.getJsonData(this.notificationsEndpoint+'?user_id='+user_id)
        .subscribe(result => {
            console.log(result[0].id);
            this.saveNotification(user_id, result[0].id, this.myRallyID);
        }, err => {
          console.error("Error: " +err);
        }, () => {
          console.log("Data Completed");
        });
    }

    saveNotification(user_id, registration_id, sender_id){
      this.httpProvider.returnRallyUserId().then(user => {
       this.httpProvider.saveNotification(user_id, registration_id, user.displayName + " wants to follow you",  this.alertsEndpoint, sender_id);
      this.followFriend(user_id);
      });
      //this.httpProvider.sendNotification(registration_id, msg);
    }

     followFriend(friendID){
      this.httpProvider.followFriend(this.followEndpoint, this.myRallyID, friendID );
    }


    getFollowRecordID(){
      this.httpProvider.getJsonData(this.followEndpoint+'?follower_id='+this.myRallyID+'&following_id='+this.parameter).subscribe(
  result => {
    console.log("Delete User ID : "+ result[0].id);
    this.unFollowFriend(result[0].id);
  },
  err =>{
    console.error("Error : "+err);
  } ,
  () => {
    console.log('getData completed');
  }

  );
  }

    unFollowFriend(recordID){
      this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
      this.httpProvider.removeFollowRecordID(this.parameter, 'follow');
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
            this.getFollowRecordID();
            
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

    showPhotoViewer(path){
  this.photoViewer.show(path);
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

getIcon(actions){
  if (actions != null){
    var found = actions.some(el => { 
        return el == this.myRallyID;
      
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
        return el == this.myRallyID;
      
    });
    
    if (!found){
      return '#b6b6b6';
      
    }else{
      return '#f2f2f2';
      
    }
  }

}


getLikeStatus($event, reference_id, like_type, likes){
  this.disable = true;

  this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myRallyID).subscribe(
    result => {
      console.log($event);
      console.log("Aqui", $event.srcElement.lastChild.data);
      
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
  this.httpProvider.addLike(this.likeendpoint, reference_id, this.myRallyID, like_type).subscribe(
    response =>{
        console.log(response);
        this.disable = false;
    });

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
       this.shareProvider.twitterShare(title, imgURI).then(() =>{
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
  this.httpProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.id);
}

goToRepProfile(repID){
  this.navCtrl.push(RepresentativeProfilePage, {repID: repID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
}

goToOrganizationProfile(organizationID){
  this.navCtrl.push(OrganizationProfilePage, {
     organizationID: organizationID,
     OrgPageName: "Public Profile"
}, {animate:true,animation:'transition',duration:500,direction:'forward'});
}

goToActionPage(objectiveID, goal_type, source, goalID, repID){ 
  if(goal_type !== "sign"){
   this.navCtrl.push(OrganizationActionPage, {
     objectiveID: objectiveID,
     pageName: 'Public Profile'
 }, {animate:true,animation:'transition',duration:500,direction:'forward'});
  } else{
   this.navCtrl.push(SignFeedBackPage, {iframeUrl: source, repID:repID, goalID: goalID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }  
 
}

transform(value: any) {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
return value;
}

}
