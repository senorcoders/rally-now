import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';



@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  eventID:any;
  endpoint:any = 'events/';
  title:any;
  event_time:any;
  description:any;
  image_url:any;
  locations:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  myrallyID:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private httpProvider: UsersProvider,
    public toastCtrl: ToastController) {
        this.eventID = navParams.get('eventID');
        console.log("Evento ID", navParams.get('eventID'));
        this.httpProvider.returnRallyUserId().then( user => {
          this.myrallyID = user.apiRallyID;
          this.getdata();
        });
        

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


     getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.eventID).subscribe(
    result => {
      this.title = result.title;
      this.locations = result.locations;
      this.event_time = result.event_time;
      this.description = result.description;
      this.image_url = result.image_url;
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}


getFavID($event, event_id, action_type_id){
  console.log($event);

  
  this.httpProvider.getJsonData(this.favEndpoint+'?event_id='+event_id+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID).subscribe(
    result => {
      console.log("Aqui", result);
      
      if(result != "" ){
        this.removeFav(result[0].id);
        this.presentToast('Removed from favorites');
        $event.srcElement.style.backgroundColor = '#f2f2f2';
        $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
        
      }else{
       this.addToFav(event_id, action_type_id);
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


addToFav(event_id, action_type_id){
  this.httpProvider.addLikeEvent(this.favEndpoint, event_id, action_type_id, this.myrallyID);
  this.presentToast('Added to Favorites');
}

removeFav(recordID){
  this.httpProvider.unfollowOrganization(this.favEndpoint, recordID);
}

}
