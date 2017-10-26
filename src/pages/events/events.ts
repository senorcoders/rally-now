import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { FilterEventsPage } from '../filter-events/filter-events';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import {EventDetailPage} from '../event-detail/event-detail';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  endpoint:string = 'events';
  events:any;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,  
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider,
    public storage: Storage) {
      this.searchControl = new FormControl();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    this.getdata();
     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.searching = false;
          this.getdata();
        });

   
  }

   filterEvents() {
    let modal = this.modalCtrl.create(FilterEventsPage);
    modal.present();
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
  this.httpProvider.getJsonData(this.endpoint).subscribe(
    result => {
     this.events = result.filter((item) => {
            return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });  
     this.storage.set('EVENTS', result);

     //this.filterItems(this.searchTerm); 
      
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}


goToEventDetail(eventID){
  console.log(eventID);
  this.navCtrl.push(EventDetailPage, {
          eventID: eventID
    });
}

goToEventFilter(){
      this.navCtrl.push(FilterEventsPage);
    }

     onSearchInput(){
        this.searching = true;
    }

    //  setFilteredItems() {
 
    //     this.events = this.getdata(this.searchTerm);
    //     console.log(this.events);
 
    // }


    // filterItems(searchTerm){

    //     return this.events.filter((item) => {
    //         return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    //     });  
 
    // }

}
