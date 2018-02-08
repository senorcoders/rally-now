import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { PublicProfilePage } from '../public-profile/public-profile';


@IonicPage()
@Component({
  selector: 'page-organization-followers',
  templateUrl: 'organization-followers.html',
})
export class OrganizationFollowersPage {

  endpoint:any = 'organization/';
  followers:any;
  items:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: OrganizationsProvider) {
      this.getFollowers(navParams.get('orgID'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationFollowersPage');
  }

  getFollowers(orgID){
    this.httpProvider.getJsonData(this.endpoint + orgID).subscribe(result => {
      this.followers = result['organization'][0].followers;
      this.initializeItems();
      console.log(result['organization'][0].followers);
    }); 
  }

  initializeItems() {
    this.items = this.followers;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToPublicProfile(userID){
    this.navCtrl.push(PublicProfilePage, {
       param1: userID,
       profilePageName: "Organization"
 });
  }

}
