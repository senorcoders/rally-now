import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { PublicProfilePage } from '../public-profile/public-profile';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { RepresentativeProfilePage } from '../representative-profile/representative-profile';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-followed-organizations',
  templateUrl: 'followed-organizations.html',
})
export class FollowedOrganizationsPage {
  endpoint:any = 'following/';
  currentApiID:any;
  organizations:any;
  items:any;
  loading:any;
  users:any;
  reps:any;
  safeSvg:any;
  organizationEndpoint:any = 'following_organizations';
  followEndpoint:any = 'following_representative';
  followUserEndpoint:string= 'following_users';
  enablePlaceholder:boolean = true;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    private orgProvider: OrganizationsProvider,
    private sanitizer: DomSanitizer) {

   
  }

  ionViewDidEnter(){
    this.enablePlaceholder = true;
    this.organizations = [];
    this.users = [];
    this.reps = [];
    this.httpProvider.returnRallyUserId().then(
      user => {
        this.currentApiID = user.apiRallyID;
        this.getOrganizations();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowedOrganizationsPage');
  }

  getOrganizations(){
    this.orgProvider.getJsonData(this.endpoint+this.currentApiID)
      .subscribe(
        result => {
          console.log(result);
            this.organizations = result['organizations'];
            this.users = result['users'];
            this.reps = result['reps'];
            // this.initializeItems();
            //this.loading.dismiss();
            this.enablePlaceholder = false;
        }
      );
  }

  initializeItems() {
    this.items = this.organizations;
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

     getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      let val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.follow[0].name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    } 

    goToPublicProfile(userID){
      this.navCtrl.push(PublicProfilePage, {
         param1: userID,
         profilePageName: "Following"
   }, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    goToOrganizationProfile(organizationID){
      this.navCtrl.push(OrganizationProfilePage, {
         organizationID: organizationID,
         OrgPageName: "Following"
   }, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    goToRepProfile(repID){
      this.navCtrl.push(RepresentativeProfilePage, {repID: repID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }


    getOrganizationFollowRecordID(orgID, $event){
      this.httpProvider.getJsonData(this.organizationEndpoint+'?follower_id='+this.currentApiID +'&organization_id='+orgID).subscribe(
  result => {
    console.log("Delete ID : "+ result[0].id);
    this.unfollow(result[0].id, orgID);
    $event.srcElement.innerText = 'Follow';

  },
  err =>{
    console.error("Error : "+err);
  } ,
  () => {
    console.log('getData completed');
  });
  }

  unfollow(recordID, orgID){

    this.httpProvider.unfollowOrganization(this.organizationEndpoint, recordID);
    this.httpProvider.removeFollowRecordID(orgID, 'organizations');
  }


  followRep(repID, $event){
    console.log($event);
    
    
    this.httpProvider.getJsonData(this.followEndpoint+'?user_id='+this.currentApiID+'&representative_id='+repID)
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
      this.httpProvider.followRep(this.followEndpoint, this.currentApiID, repID);
      

  }

  unFollowRep(recordID){
    this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
  }


  getFollowRecordID(userID, $event){
    this.httpProvider.getJsonData(this.followUserEndpoint+'?follower_id='+this.currentApiID+'&following_id='+userID).subscribe(
result => {
  console.log("Delete User ID : "+ result[0].id);
  this.unFollowFriend(result[0].id, userID);
  $event.srcElement.innerHTML = "Follow";
  $event.srcElement.innerText = "FOLLOW";
},
err =>{
  console.error("Error : "+err);
} ,
() => {
  console.log('getData completed');
}

);
}

  unFollowFriend(recordID, userID){
    this.httpProvider.unfollowOrganization(this.followUserEndpoint, recordID);
    this.httpProvider.removeFollowRecordID(userID, 'follow');
  }

}
 