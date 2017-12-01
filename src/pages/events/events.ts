import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, ModalController, PopoverController, ViewController } from 'ionic-angular';
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
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { SocialShareProvider } from '../../providers/social-share/social-share';

 
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
  testPhoto:any = 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08';
  myrallyID:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,  
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider,
    public storage: Storage,
    public viewCtrl:ViewController,
    public toastCtrl: ToastController,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController) {
      this.searchControl = new FormControl();
      this.httpProvider.returnRallyUserId().then(user => {
        this.myrallyID = user.apiRallyID;
        this.getdata();        
      });


  }

   ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
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
          eventID: eventID,
          eventPageName: "Events"
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
}


 goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID,
          OrgPageName: "Events"
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

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }
    getEventsLikeID($event, event_id, action_type_id){
      console.log($event);
    
      
      this.httpProvider.getJsonData(this.favEndpoint+'?event_id='+event_id+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID).subscribe(
        result => {
          console.log("Aqui", result);
          
          if(result != "" ){
            this.removeEventFav(result[0].id);
            this.presentToast('You unliked it');
            $event.srcElement.style.backgroundColor = '#f2f2f2';
            $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
            
          }else{
           this.addEventToFav(event_id, action_type_id);
           this.presentToast('You like it');       
            $event.srcElement.style.backgroundColor = '#4a90e2';
            $event.srcElement.offsetParent.style.backgroundColor = '#4a90e2';
            
          }
        },
        err =>{
          console.error("Error : "+err);         
        } ,
        () => {
          console.log('getData completed');
        }
    
        );
    }
    
    
    addEventToFav(event_id, action_type_id){
      this.httpProvider.addLikeEvent(this.favEndpoint, event_id, action_type_id, this.myrallyID);
    }
    
    removeEventFav(recordID){
      this.httpProvider.unfollowOrganization(this.favEndpoint, recordID);
    }

    findInLoop(actions){
      if (actions != null){
        
        var found = actions.some(el => { 
          if(el.action_type_id === this.likeAction){
            if(typeof(el.user_id[0]) !== 'undefined'){
              return el.user_id[0].id === this.myrallyID;
            } 
          }
          
        });
        
        if (!found){
          return '#f2f2f2';
          
        }else{
          return '#296fb7';
          
        }
      }
     
    }

    shareControllerEvent(title, imgURI, event_id, action_type_id, $event) {
      const actionSheet = this.actionSheetCtrl.create({
        title: 'Share with',
        buttons: [
          {
            text: 'Facebook',
            icon: 'logo-facebook',
            handler: () => {
              this.shareProvider.facebookShare(title, imgURI);
              this.addEventToFav(event_id, action_type_id);
              $event.srcElement.innerText++;           
              this.presentToast('Objective shared!');
            }
          }, 
          {
            text: 'Twitter',
            icon: 'logo-twitter',
            handler: () => {
              this.shareProvider.twitterShare(title, imgURI);
              this.addEventToFav(event_id, action_type_id);
              $event.srcElement.innerText++;           
              this.presentToast('Objective shared!');
            }
          },
          {
            text: 'Others',
            icon: 'md-share',
            handler: () => {
              console.log('Archive clicked');
              this.shareProvider.otherShare(title, imgURI);
              this.addEventToFav(event_id, action_type_id);
              $event.srcElement.innerText++;           
              this.presentToast('Objective shared!');
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
