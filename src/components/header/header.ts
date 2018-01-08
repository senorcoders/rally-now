import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchResultsPage } from '../../pages/search-results/search-results';
import { ModalController, NavController } from 'ionic-angular';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { PublicProfilePage } from '../../pages/public-profile/public-profile';
import { OrganizationProfilePage } from '../../pages/organization-profile/organization-profile';
import { EventDetailPage } from '../../pages/event-detail/event-detail';
import { RepresentativeProfilePage } from '../../pages/representative-profile/representative-profile';


@Component({
  selector: 'rally-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
 
  searching: any = false;
  shouldShowCancel: any = false;
  searchTerm: string = '';
  searchControl: FormControl;
  endpoint: string = 'search/';
  users:any;
  organizations:any;
  results:any;
  reps:any;
  events:any;



  constructor(public modalCtrl: ModalController, private httpProvider:OrganizationsProvider, public navCtrl: NavController) {
    console.log('Hello HeaderComponent Component');
    this.results = "people";
    this.searchControl = new FormControl();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsRequestPage');
     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.searching = false; 
          this.shouldShowCancel = false;
        });

  }

  presentResultsPage() {
    let modal = this.modalCtrl.create(SearchResultsPage);
    modal.present();
  }

  onSearchInput(){
  		if (this.searchTerm === "") {
  			this.searching = false;
        this.shouldShowCancel = false;
  		} else{
  			this.searching = true;
        this.shouldShowCancel = true;
        this.getdata();
  		}
         
    }

      getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.searchTerm).subscribe(
    result => {
      this.users = result['users'];
      this.organizations = result['organizations'];
      this.reps = result['reps'];
      this.events = result['events'];
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

// getOrganizations(){
//   this.httpProvider.getJsonData(this.endpoint + 'organization/' + this.searchTerm).subscribe(
//     result => {
//     	this.users = result['users'];
//     	this.organizations = result['organizations'];
//     },
//     err =>{
//       console.error("Error : "+err);
//     } ,
//     () => {
//       console.log('getData completed');
//     }
//   );
// }


 goToPublicProfile(userID){
       this.navCtrl.push(PublicProfilePage, {
          param1: userID,
          profilePageName: "Search"
    	});
     }


      goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID,
          OrgPageName: "Search"
    });
     }

     cancel(){
       this.searching = false;
     }

     goToEventDetail(eventID){
      console.log(eventID);
      this.navCtrl.push(EventDetailPage, {
              eventID: eventID,
              eventPageName: "Search"
        }, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    goToRepProfile(repID){
      this.navCtrl.push(RepresentativeProfilePage, {repID: repID},  {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

   

}
