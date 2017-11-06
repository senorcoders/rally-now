import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { UsersProvider } from '../../providers/users/users';


@IonicPage() 
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html',
})
export class OrganizationsPage {
  organizations: any;
  endpoint:string = 'my_organizations/';
  myApiRallyID:any;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider,
    private rallyProvider:UsersProvider,
    ) {
    this.rallyProvider.returnRallyUserId()
      .then(user => {
        console.log(user);
        this.myApiRallyID = user.apiRallyID;
        this.getdata();
 
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationsPage');
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

     getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.myApiRallyID).subscribe(
    result => {
      this.organizations=result['My_Organizations'];
      console.log("Success : "+ result['My_Organizations']);
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
    });
     }
}
