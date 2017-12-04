import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';


@IonicPage()
@Component({
  selector: 'page-organizations-list',
  templateUrl: 'organizations-list.html',
})
export class OrganizationsListPage {
  endpoint:any = 'organizations';
  organizations:any;
  loading:any;
  items:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
      this.loading.present();
      this.getOrganizations();
  }

 

  getOrganizations(){
    this.httpProvider.getJsonData(this.endpoint)
      .subscribe( result => {
        this.organizations = result;
        this.initializeItems();
        this.loading.dismiss();
      });
  }

  initializeItems() {
    this.items = this.organizations;
  }

  goToOrganizationProfile(organizationID){
    this.navCtrl.push(OrganizationProfilePage, {
       organizationID: organizationID,
       OrgPageName: "Discover"
 }, {animate:true,animation:'transition',duration:500,direction:'forward'});
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

 

}
