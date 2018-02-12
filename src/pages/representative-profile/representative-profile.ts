import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { RepFollowersPage } from '../rep-followers/rep-followers';
import { ThanksPage } from '../thanks/thanks';


@IonicPage()
@Component({
  selector: 'page-representative-profile',
  templateUrl: 'representative-profile.html',
})
export class RepresentativeProfilePage {

  endpoint:any = 'reps/';
  name:any;
  twitter_id:any;
  followers_count:any;
  description:any;
  photo_url:any;
  currentRallyID:any;
  followEndpoint:any = 'following_representative';
  repID:any;
  followers:any;
  post_count:any;
  posts:any;
  likeendpoint:any = 'likes';
  disable:boolean = false;
  tweetLike:any = 'ab860ccb-9713-49e5-b844-34d18f92af21';
  favEndpoint:any = 'actions';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    private shareProvider: SocialShareProvider,
    public toastCtrl: ToastController,
    private inAppBrowser: InAppBrowser,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
      console.log("Rep ID", navParams.get('repID'));
      this.getRepData(navParams.get('repID'));
      this.httpProvider.returnRallyUserId().then(
        user => {
          this.currentRallyID = user.apiRallyID;
      });
  }


  getRepData(repID){
    this.httpProvider.getJsonData(this.endpoint + repID).subscribe(result => {
      console.log(result);
      this.name = result.name;
      this.twitter_id = result.twitter_id;
      this.followers_count = result.followers_count;
      this.description = result.description;
      this.photo_url = result.photo_url;
      this.repID = result.id;
      this.followers = result.followers;
      this.post_count = result.post_count;
      this.posts = result.posts;
    });
  }

  getLikeStatus($event, reference_id, like_type, likes){
    this.disable = true;

    this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.currentRallyID).subscribe(
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
    this.httpProvider.addLike(this.likeendpoint, reference_id, this.currentRallyID, like_type).subscribe(
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

  tweetRep(username){
    this.shareProvider.twitterShare(username);
  }
  

  followRep(repID, $event){
    console.log($event);
    
    
    this.httpProvider.getJsonData(this.followEndpoint+'?user_id='+this.currentRallyID+'&representative_id='+repID)
      .subscribe(
        result => {
          
          if (result != ""){              
            this.unFollowRep(result[0].id);
            $event.srcElement.innerHTML = "Follow";
            $event.srcElement.innerText = "FOLLOW";
          } else{
            this.saveRepInApi(repID);
            $event.srcElement.innerHTML = "Unfollow";
            $event.srcElement.innerText = "UNFOLLOW";
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

  saveRepInApi(repID){
    this.httpProvider.followRep(this.followEndpoint, this.currentRallyID, repID);
    this.presentToast('Representative added');
    

}

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  unFollowRep(recordID){
    this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
    this.presentToast('Representative removed');
  }

  findInLoop(actions){
    if (actions != null){
      
      var found = actions.some(el => { 
          return el == this.currentRallyID;
        
      });
      
      if (!found){
        return 'Follow';
        
      }else{
        return 'Unfollow';
        
      }
    }
  }

  getIcon(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el == this.currentRallyID;
        
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
          return el == this.currentRallyID;
        
      });
      
      if (!found){
        return '#b6b6b6';
        
      }else{
        return '#f2f2f2';
        
      }
    }

  }


  findInLoopColor(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el == this.currentRallyID;
        
      });
      
      if (!found){
        return '#f2f2f2';
        
      }else{
        return '#296fb7';
        
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

  goToFollowers(){
    this.navCtrl.push(RepFollowersPage, {
        repID: this.repID
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

streakModal() {
  let modal = this.modalCtrl.create(ThanksPage);
  modal.present();
}

addShareAction(goal_id, action_type_id){
  this.httpProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.currentRallyID);
}


}
