import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchResultsPage } from '../../pages/search-results/search-results';
import { ModalController, NavController } from 'ionic-angular';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { PublicProfilePage } from '../../pages/public-profile/public-profile';


@Component({
  selector: 'rally-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  searching: any = false;
  searchTerm: string = '';
  searchControl: FormControl;
  endpoint: string = 'search/';
  users:any;
  organizations:any;



  constructor(public modalCtrl: ModalController, private httpProvider:OrganizationsProvider, public navCtrl: NavController) {
    console.log('Hello HeaderComponent Component');
    this.searchControl = new FormControl();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsRequestPage');
     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.searching = false; 
        });

  }

  presentResultsPage() {
    let modal = this.modalCtrl.create(SearchResultsPage);
    modal.present();
  }

  onSearchInput(){
  		if (this.searchTerm === "") {
  			this.searching = false;
  		} else{
  			this.searching = true;
  			this.getdata();
  		}
        
    }

      getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.searchTerm).subscribe(
    result => {
    	this.users = result['users'];
    	this.organizations = result['objective'];
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}


 goToPublicProfile(userID){
       this.navCtrl.push(PublicProfilePage, {
          param1: userID
    	});
     }

   

}
