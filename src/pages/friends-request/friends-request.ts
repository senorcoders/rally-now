import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay';
import { DataProvider } from '../../providers/data/data'; 
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook';
import { PublicProfilePage } from '../public-profile/public-profile';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationsListPage } from '../organizations-list/organizations-list';
import { RepresentivesListPage } from '../representives-list/representives-list';


@IonicPage()
@Component({
  selector: 'page-friends-request',
  templateUrl: 'friends-request.html',
}) 
export class FriendsRequestPage {
  searchTerm: string = '';
  items: any;
  searchControl: FormControl;
  searching: any = false;
  friends:any;
  endpoint:string = 'users?searchable=1';
  followEndpoint:string= 'following_users';
  profileEndpoint:any = 'users?facebook_id=';

 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public dataService: DataProvider,
    private facebook: Facebook,
    private httpProvicer: UsersProvider
    ) {
       //this.searchControl = new FormControl();
       this.getFacebookFriendsList();

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FriendsRequestPage');
  //   this.setFilteredItems();
  //    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
  //         this.searching = false;
  //         this.setFilteredItems();
 
  //       });

  // }

  getFacebookFriendsList(){
    this.facebook.api('me/friends', ['user_friends']).then(
      list => {
          console.log("Lista de amigos", list['data']);
          this.items = list['data'];
      }, error => {
        console.log("error", error);
      });
  }

    goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage);
  }

 

   presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

    //   setFilteredItems() {
 
    //     this.items = this.dataService.filterItems(this.searchTerm);
 
    // }

    //  onSearchInput(){
    //     this.searching = true;
    // }

    goToProfile(facebook_id){
      this.httpProvicer.getJsonData(this.profileEndpoint + facebook_id).subscribe(
        result => {
            console.log(result);
            this.goToPublicProfile(result[0].id);
        });
    }

    goToPublicProfile(userID){
      this.navCtrl.push(PublicProfilePage, {
         param1: userID,
         profilePageName: "Facebook Friends"
     });
    }

    getPhoto(facebook_id){
     
      this.httpProvicer.getJsonData(this.profileEndpoint + facebook_id).subscribe(
        result => {

          if(result != ""){
            return result[0].photo_url;
          }
           
        });
    }

    goToListOrganizations(){
      this.navCtrl.push(OrganizationsListPage);
    }

    goToListReps(){
      this.navCtrl.push(RepresentivesListPage);
    }
   

}
