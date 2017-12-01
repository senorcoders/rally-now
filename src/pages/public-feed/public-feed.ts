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
  testPhoto:any = 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08';
  localPhoto:any = 'https://static1.squarespace.com/static/5669e1f969a91ad6eca4abe1/t/581cc790b3db2bd6d9881936/1478281126634/Screen+Shot+2016-11-04+at+1.33.31+PM.png';
  avatarPhoto:any = 'https://flipagram.com/assets/resources/img/fg-avatar-anonymous-user-retina.png';

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
