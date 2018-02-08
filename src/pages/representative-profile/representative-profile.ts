import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { RepFollowersPage } from '../rep-followers/rep-followers';


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


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    private shareProvider: SocialShareProvider,
    public toastCtrl: ToastController,
    private inAppBrowser: InAppBrowser) {
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


}
