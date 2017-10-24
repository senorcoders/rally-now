import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private httpProvider: UsersProvider) {
        this.eventID = navParams.get('eventID');
        console.log("Evento ID", navParams.get('eventID'));
        this.getdata();

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

}
