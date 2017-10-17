import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController, LoadingController, ActionSheetController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'
import { HomeFiltersPage } from '../home-filters/home-filters';
import { OverlayPage } from '../overlay/overlay'
import { RatePage } from '../rate/rate';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { PublicProfilePage } from '../public-profile/public-profile';
import { SocialShareProvider } from '../../providers/social-share/social-share';



@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {
  organizationsData:any;
  endpoint:string = 'homefeed/825eaf5e-2782-467e-8e34-70576d55e321';
  loading:any;
  objectives:any;
  fiends:any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    private shareProvider:SocialShareProvider) { 

       this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      this.loading.present();
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
      this.organizationsData=result['My_Organizations'];
      this.objectives=result['Objectives'];
      this.fiends=result['friends_activity'];
      console.log("Success : "+ result['My_Organizations']);
      this.loading.dismiss();
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


   goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID
    });
     }

     goToPublicProfile(userID){
       this.navCtrl.push(PublicProfilePage, {
          param1: userID
    });
     }


     shareController(title, imgURI) {
   const actionSheet = this.actionSheetCtrl.create({
     title: 'Share with',
     buttons: [
       {
         text: 'Facebook',
         icon: 'logo-facebook',
         handler: () => {
           this.shareProvider.facebookShare(title, imgURI);
         }
       },
       {
         text: 'Twitter',
         icon: 'logo-twitter',
         handler: () => {
           this.shareProvider.twitterShare(title, imgURI);
         }
       },
       {
         text: 'Whatsapp',
         icon: 'logo-whatsapp',
         handler: () => {
           this.shareProvider.whatsappShare(title, imgURI);
         }
       },
       {
         text: 'Others',
         icon: 'md-share',
         handler: () => {
           console.log('Archive clicked');
           this.shareProvider.otherShare(title, imgURI);
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

 

}
