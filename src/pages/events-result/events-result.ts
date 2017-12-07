import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, ToastController, ActionSheetController } from 'ionic-angular';
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
import { SocialShareProvider } from '../../providers/social-share/social-share';


@IonicPage()
@Component({
  selector: 'page-events-result',
  templateUrl: 'events-result.html',
})
export class EventsResultPage {
  events:any;
  startDate:any;
  endDate:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  testPhoto:any = 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08';
  myrallyID:any;
 


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,  
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider,
    public storage: Storage,
    public toastCtrl: ToastController,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController) {
      console.log(JSON.stringify(navParams.get('events').events) );
      this.events = navParams.get('events').events;
      this.startDate = navParams.get('startDate');
      this.endDate = navParams.get('endDate');
      this.httpProvider.returnRallyUserId().then(user => {
        this.myrallyID = user.apiRallyID;
      });
      


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    

   
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

       


goToEventDetail(eventID){
  console.log(eventID);
  this.navCtrl.push(EventDetailPage, {
          eventID: eventID
    });
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

presentToast(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
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
