import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    private shareProvider: SocialShareProvider) {
      console.log("Rep ID", navParams.get('repID'));
      this.getRepData(navParams.get('repID'));
  }


  getRepData(repID){
    this.httpProvider.getJsonData(this.endpoint + repID).subscribe(result => {
      console.log(result);
      this.name = result.name;
      this.twitter_id = result.twitter_id;
      this.followers_count = result.followers_count;
      this.description = result.description;
      this.photo_url = result.photo_url;
    });
  }

  tweetRep(username){
    this.shareProvider.twitterShare(username);
  }
  

}
