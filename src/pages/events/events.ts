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
  eventLike:any = 'd5d1b115-dbb6-4894-8935-322c336ae951';
  likeendpoint:any = 'likes';
  disable:boolean = false;


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
        //this.viewCtrl.showBackButton(false);
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

  

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }
    
    
    removeEventFav(recordID){
      this.httpProvider.unfollowOrganization(this.favEndpoint, recordID);
    }

    findInLoop(actions){
      if (actions != null){
        var found = actions.some(el => { 
          console.log(el);
            return el == this.myrallyID;
          
        });
        
        if (!found){
          return '#f2f2f2';
          
        }else{
          return '#296fb7';
          
        }
      }
     
    }

    getLikeStatus($event, reference_id, like_type){
      this.disable = true;
      this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
        result => {
          console.log("Aqui", result);
          
          if(result != "" ){
            this.removeEventFav(result[0].id);
            this.presentToast('You unliked it');
            $event.srcElement.style.backgroundColor = '#f2f2f2';
            $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
            $event.srcElement.lastChild.data++;
            this.disable = false;
            
          }else{
           this.addLike(reference_id, like_type);
           this.presentToast('You liked it');
            $event.srcElement.style.backgroundColor = '#296fb7';
            $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
            $event.srcElement.lastChild.data++;
            this.disable = false;
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

    addLike(reference_id, like_type){
      this.httpProvider.addLike(this.likeendpoint, reference_id, this.myrallyID, like_type);
    }

    shareController(title, imgURI, reference_id, like_type, $event) {
      this.disable = true;
      const actionSheet = this.actionSheetCtrl.create({
        title: 'Share with',
        buttons: [
          {
            text: 'Facebook',
            icon: 'logo-facebook',
            handler: () => {
              this.shareProvider.facebookShare(title, imgURI);
              this.addShareAction(reference_id, like_type);
              $event.srcElement.lastChild.data++;
              this.presentToast('Objective shared!');
              this.disable = false;
            }
          }, 
          {
            text: 'Twitter',
            icon: 'logo-twitter',
            handler: () => {
              this.shareProvider.twitterShare(title, imgURI);
              this.addShareAction(reference_id, like_type);
              $event.srcElement.lastChild.data++;
              this.presentToast('Objective shared!');
              this.disable = false;
            }
          },
          {
            text: 'Others',
            icon: 'md-share',
            handler: () => {
              console.log('Archive clicked');
              this.shareProvider.otherShare(title, imgURI);
              this.addShareAction(reference_id, like_type);
              $event.srcElement.lastChild.data++;
              this.presentToast('Objective shared!');
              this.disable = false;
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


    addShareAction(goal_id, action_type_id){
      this.httpProvider.addLike(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
    }

}
