import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'
import { HomeFiltersPage } from '../home-filters/home-filters';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { RatePage } from '../rate/rate';
import { OrganizationsProvider } from '../../providers/organizations/organizations';


@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {
  organizationsData:any;
  endpoint:string = 'organization';

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider) { 

    this.getdata();
  }

 	 goToOtherPage() {
 
    this.navCtrl.setRoot(AlertsPage);
  }

   goToProfile() {
 
    this.navCtrl.setRoot(ProfilePage);
  }

   goToHomeFilter() {
 
    this.navCtrl.setRoot(HomeFiltersPage);
  }

   presentPopover() {
    let popover = this.popoverCtrl.create(OverlayPage);
    popover.present();
  }
  
  goToRatePage() {
    this.navCtrl.push(RatePage);
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint).subscribe(
    result => {
      this.organizationsData=result;
      console.log("Success : "+ result);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

doRefresh(refresher) {
  this.getdata();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
