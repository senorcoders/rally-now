import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, ActionSheetController } from 'ionic-angular';
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
import { ORG } from '../../providers/organizations';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';

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
  notificationsEndpoint:any = 'devices';
  alertsEndpoint:any = 'ux_events';
  organizations:any = ORG;
  organizationEndpoint:any = 'following_organizations';
  public orgs:any = [];


 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public dataService: DataProvider,
    private facebook: Facebook,
    private httpProvicer: UsersProvider,
    public alertCtrl: AlertController, 
    private orgProvider: OrganizationsProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    public actionSheetCtrl: ActionSheetController,
    ) {
       //this.searchControl = new FormControl();
       this.httpProvicer.returnRallyUserId().then(user => {
         this.myRallyID = user.apiRallyID;
        this.getFacebookFriendsList();
        this.getSuggestedFriend();
        this.mapOrgs(this.organizations);
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


  mapOrgs(array){
    for(let item of array){
      console.log("ORG", item);
      this.sortOrgs(item);
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


  sortOrgs(org){
    this.httpProvicer.getJsonData(this.organizationEndpoint + '?follower_id=' + this.myRallyID + '&organization_id=' + org.id)
      .subscribe(result => {
        console.log(result);
        if(result != ""){
          console.log("ya sigues a esta ORG");
        }else{
          this.orgs.push(org);
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

    hideItem(index, array){
      (array).splice(index, 1);
    }

    getDeviceID(user_id, $event, index, type){
      if(type === 'facebook'){
        this.hideItem(index, this.items);
      }else{
        this.hideItem(index, this.records);

      }
      //Reemplazar por parametro despues
      this.httpProvicer.getJsonData(this.notificationsEndpoint+'?user_id='+user_id)
        .subscribe(result => {
            console.log(result[0].id);
            this.saveNotification(user_id, result[0].id, this.myRallyID);
            $event.srcElement.innerHTML = "Unfollow";
            $event.srcElement.innerText = "UNFOLLOW";
        }, err => {
          console.error("Error: " +err);
        }, () => {
          console.log("Data Completed");
        });
    }

    saveNotification(user_id, registration_id, sender_id){
      this.httpProvicer.returnRallyUserId().then(user => {
       this.httpProvicer.saveNotification(user_id, registration_id, user.displayName + " wants to follow you",  this.alertsEndpoint, sender_id);
      this.followFriend(user_id);
      }); 
      //this.httpProvider.sendNotification(registration_id, msg);
    }

     followFriend(friendID){
      this.httpProvicer.followFriend(this.followEndpoint, this.myRallyID, friendID );
      this.presentToast("You're now following this user");
    }


    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }


    addOrg(organizationID, $event){
      let user:any = firebase.auth().currentUser;
      let followRef = this.db.database.ref('organizations/'+user['uid']+'/'+organizationID);
      followRef.once('value', snapshot=>{
        if (snapshot.hasChildren()) {
          console.log('You already follow this org');
          this.unFollowActionSheet(organizationID);
          $event.srcElement.innerText = 'Follow';
          
          //this.presentToast('You are not following this organization anymore');
  
        }else{
          this.followOrg(organizationID);
          $event.srcElement.innerText = 'Unfollow';
          
          this.presentToast('Follow Organization successfully');
        }
      });
     }

     followOrg(organizationID){ 
      this.httpProvicer.followOrganization(this.organizationEndpoint, this.myRallyID, organizationID );
    }
  
    unFollowActionSheet(organizationID) {
      
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Unfollow this organization?' ,
      cssClass: 'title-img',      
      buttons: [
        {
          text: 'Unfollow',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.getOrganizationFollowRecordID(organizationID);
            
          }
        },{
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
  
  getOrganizationFollowRecordID(organizationID){
          this.httpProvicer.getJsonData(this.organizationEndpoint+'?follower_id='+this.myRallyID+'&organization_id='+organizationID).subscribe(
        result => {
        console.log("Delete ID : "+ result[0].id);
        this.unfollow(result[0].id, organizationID);
        },
        err =>{
        console.error("Error : "+err);
        } ,
        () => {
        console.log('getData completed');
        }
  
        );
  }
  
  unfollow(recordID, organizationID){
    
          this.httpProvicer.unfollowOrganization(this.organizationEndpoint, recordID);
          this.httpProvicer.removeFollowRecordID(organizationID, 'organizations');
        }

        goToOrganizationProfile(organizationID){
          this.navCtrl.push(OrganizationProfilePage, {
             organizationID: organizationID,
             OrgPageName: "Discover"
       }, {animate:true,animation:'transition',duration:500,direction:'forward'});
        }
    

}
