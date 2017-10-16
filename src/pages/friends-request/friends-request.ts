import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay';
import { DataProvider } from '../../providers/data/data'; 
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';



/**
 * Generated class for the FriendsRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
  buttonFollowText:string = 'Click me!';




  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public dataService: DataProvider,
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase
    ) {
       this.searchControl = new FormControl();
       this.getdata();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsRequestPage');
    this.setFilteredItems();
     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.searching = false;
          this.setFilteredItems();
 
        });

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

      setFilteredItems() {
 
        this.items = this.dataService.filterItems(this.searchTerm);
 
    }

     onSearchInput(){
        this.searching = true;
    }

    presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

    addFollowRecordFirebase(friendID){
     let user:any = firebase.auth().currentUser;
     let followRef = this.db.database.ref('follow/'+user['uid']+'/'+friendID);
     followRef.once('value', snapshot=>{
       if (snapshot.hasChildren()) {
         console.log('You already follow this user');
         this.presentToast('You already follow this user');

       }else{
         this.followFriend(friendID);
         this.presentToast('Follow user successfully');
       }
     });
    }

    followFriend(friendID){
      this.httpProvider.followFriend(this.followEndpoint, this.httpProvider.getRallyID(), friendID );
      console.log(this.httpProvider.getRallyID());
    }

      getdata(){
  this.httpProvider.getJsonData(this.endpoint).subscribe(
    result => {
      this.friends=result;
      console.log("Friends: "+ result);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('Friends Call completed');
    }
  );
}

}
