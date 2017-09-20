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



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public dataService: DataProvider) {
       this.searchControl = new FormControl();

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

}
