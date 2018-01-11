import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { SocialShareProvider } from '../../providers/social-share/social-share';


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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    private shareProvider: SocialShareProvider,
    public toastCtrl: ToastController) {
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
    });
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


}
