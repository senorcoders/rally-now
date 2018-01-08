import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
import { SyncContactsPage } from '../sync-contacts/sync-contacts';
import { OrganizationsProvider } from '../../providers/organizations/organizations';


@IonicPage()
@Component({
  selector: 'page-friends-request',
  templateUrl: 'friends-request.html',
}) 
export class FriendsRequestPage {
  searchTerm: string = '';
  public items:any = [];
  searchControl: FormControl;
  searching: any = false;
  friends:any;
  userEndpoint:any = 'users/';
  endpoint:string = 'users?searchable=1';
  followEndpoint:string= 'following_users';
  profileEndpoint:any = 'users?facebook_id=';
  myRallyID:any;
  suggestedEndpoint:any = 'not_following/';
  public records:any = [];

 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public dataService: DataProvider,
    private facebook: Facebook,
    private httpProvicer: UsersProvider,
    public alertCtrl: AlertController, 
    private orgProvider: OrganizationsProvider
    ) {
       //this.searchControl = new FormControl();
       this.httpProvicer.returnRallyUserId().then(user => {
         this.myRallyID = user.apiRallyID;
        this.getFacebookFriendsList();
        this.getSuggestedFriend();
       });

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FriendsRequestPage');
  //   this.setFilteredItems();
  //    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
  //         this.searching = false;
  //         this.setFilteredItems();
 
  //       });

  // }

  getSuggestedFriend(){

    return new Promise(resolve => {
      this.orgProvider.getRecords(this.suggestedEndpoint+this.myRallyID)
        .then(data => {
          console.log("Full Data", data);
          this.getArray(data['not_following']);
        
  
          //this.organizations = data;
            
          resolve(true);  
        });
    });

  }

  getArray(array){
    // console.log(array);
    for(let person of array) {
      console.log(person);
      this.getUserFields(person);
      //this.records.push(person);
      // console.log("Records", this.records);
    }
  
  }

  getUserFields(user_id){
    this.httpProvicer.getJsonData(this.userEndpoint+user_id).subscribe(result => {
        // console.log(result);
        this.records.push(result);
        console.log(this.records);
    });
  }

  mapFacebookUsers(array){
    for(let person of array) {
      console.log("From FB", person.id);
      this.getRallyData(person.id);
     
    }
  }

  getFacebookFriendsList(){
    this.facebook.api('me/friends', ['user_friends']).then(
      list => {
          console.log("Lista de amigos", list['data']);
          // this.items = list['data'];
          this.mapFacebookUsers(list['data']);
      }, error => {
        console.log("error", error);
      });
  }

  getRallyData(fbID){
    console.log(fbID);
    this.httpProvicer.getJsonData(this.profileEndpoint + fbID).subscribe(
      result => {

        if(result != ""){
          console.log(result);
          this.sortFacebookFriends(result[0]);
        }else{
          console.log('Not found', 'This person is not using Rally anymore');
        }
         
      });

}

  sortFacebookFriends(user){
    this.httpProvicer.getJsonData(this.followEndpoint + '?follower_id=' + this.myRallyID + '&following_id=' + user.id)
      .subscribe(result => {
        console.log(result);
        if(result != ""){
          console.log("ya sigues a este usuario");
        }else{
          this.items.push(user);
        }
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

    

    goToListOrganizations(){
      this.navCtrl.push(OrganizationsListPage);
    }

    goToListReps(){
      this.navCtrl.push(RepresentivesListPage);
    }

    invite(){
      this.navCtrl.push(SyncContactsPage);
    }

    

    showAlert(title, msg) {
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: msg,
        buttons: ['OK']
      });
      alert.present();
    }
   

}
