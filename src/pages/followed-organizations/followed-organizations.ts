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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    private orgProvider: OrganizationsProvider,
    private sanitizer: DomSanitizer) {
      let svg = `<div id="Rallycontainer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Loading</title>
      <path id="arrow" class="bounce" d="M79.1,44.3c-2.4-0.5-4.1-2.6-4-5V22.6H58.7c-2.4,0.1-4.5-1.6-5-4C53.2,16,55,13.5,57.6,13c0.3,0,0.5-0.1,0.8-0.1h21.5
        c2.7,0,4.8,2.2,4.8,4.8v21.8c0,2.7-2.2,4.8-4.8,4.8C79.7,44.4,79.4,44.4,79.1,44.3z"/>
      <path id="R" d="M67.5,87H52.8L41.4,66.3h-4V87H24.8V33h19.4c6,0,10.7,1.3,14.3,3.8c3.9,2.9,6.1,7.5,5.9,12.4c0,10.3-6.6,14.3-10.6,15.5
        L67.5,87z M48.9,44.2c-1.6-1.2-3.6-1.4-6.5-1.4h-5v13.9h5c2.9,0,4.9-0.3,6.5-1.5c1.8-1.2,2.9-3.3,2.7-5.5
        C51.8,47.5,50.7,45.4,48.9,44.2z"/></svg>
    </div>`;

      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
      this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: this.safeSvg,  
      }); 
      this.loading.present();
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
            this.loading.dismiss();
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

}
