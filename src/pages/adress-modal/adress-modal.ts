import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';

@IonicPage()
@Component({
  selector: 'page-adress-modal',
  templateUrl: 'adress-modal.html',
})
export class AdressModalPage {
  searchTerm:any;
  address:any;
  showFooter: boolean = true;

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private nativeGeocoder: NativeGeocoder,
    private httpProvider: UsersProvider,
    private storage: Storage,
    private keyboard: Keyboard) {
      
      this.keyboard.onKeyboardShow().subscribe(() => {
          this.showFooter = false;
      });

      this.keyboard.onKeyboardHide().subscribe(() => {
        this.showFooter = true;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdressModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

 


  public getLocation(){
    this.nativeGeocoder.forwardGeocode(this.searchTerm)
  .then((coordinates: NativeGeocoderForwardResult) => {
    
    console.log(this.searchTerm);
    this.saveReps(coordinates.latitude, coordinates.longitude);
  })
  .catch((error: any) => console.log(error));
  }


  saveReps(lat, lng){
    this.getHouseReps(lat, lng);
    //this.getSenateReps(lat, lng);

  }

  getHouseReps(lat, lng){
    this.httpProvider.getHouseReps(lat, lng).subscribe(
      result => {
          console.log("Your reps", result.data);
          if(result.data.length > 0){
            this.storage.set('representatives', result.data);
            this.storage.set('repAdress', this.searchTerm);
            this.getSenateReps(lat, lng);
          }else{
            this.storage.set('representatives', 'sorry');
            this.storage.set('repAdress', this.searchTerm);
            this.getSenateReps(lat, lng);
          }
         

      });
  }

  getSenateReps(lat, lng){
    this.httpProvider.getSenateReps(lat, lng).subscribe(
      result => {
          console.log("Your reps", result.data);
          this.storage.set('senators', result.data);
          this.dismiss();
      });
  }

  detail(item){
    console.log(item);
    //this.address = item.description;
    this.searchTerm = item.description;
  }

 

  
} 
