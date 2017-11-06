import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';



@IonicPage()
@Component({
  selector: 'page-public-feed',
  templateUrl: 'public-feed.html',
})
export class PublicFeedPage {
	endpoint:string = 'homefeed';
	objectives:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider:OrganizationsProvider) {
  	this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicFeedPage');
  }

      getdata(){
  this.httpProvider.getJsonData(this.endpoint).subscribe(
    result => {
      this.objectives=result['Objectives'];
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

 goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID
    },  {animate:true,animation:'transition',duration:500,direction:'forward'});
     }


}
