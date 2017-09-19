import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts'
import { ProfilePage } from '../profile/profile'
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { FeedPage } from '../feed/feed';
import { ImagePicker } from '@ionic-native/image-picker';
import { UserData } from '../../providers/user-data';
import firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';





/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  options = {
    // max images to be selected, defaults to 15. If this is set to 1, upon
  // selection of a single image, the plugin will return it.
  maximumImagesCount: 15,
  
  // max width and height to allow the images to be.  Will keep aspect
  // ratio no matter what.  So if both are 800, the returned image
  // will be at most 800 pixels wide and 800 pixels tall.  If the width is
  // 800 and height 0 the image will be 800 pixels wide if the source
  // is at least that wide.
    width: 800,
    height: 800,
  
  // quality of resized image, defaults to 100
    quality: 100
  };

  profileURL:any;
  name:string;
  email:string;
  gender:string;
  location:string;
  description:string;
  captureDataUrl: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public popoverCtrl: PopoverController,
    private imagePicker: ImagePicker,
    public userData: UserData,
    private camera: Camera,
    public storage: Storage,) {

       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  ngAfterViewInit(){
      this.getProfilePicture();
      this.getUsername();
      this.getEmail();
      this.getGender();
      this.getLocation();
      this.getDescription();
  }
 
   
   getProfilePicture(){
      this.userData.getPhotoUrl().then((image) => {
          console.log(image);
          this.profileURL = image;
      }); 
   }

   getUsername(){
     this.userData.getUsername().then((username) => {
       this.name = username;
     }); 
   }

   getEmail(){
     this.userData.getEmail().then((email) => {
       this.email = email;
     }); 
   }

    getGender(){
     this.userData.getGender().then((gender) => {
       this.gender = gender;
     }); 
   }

   getLocation(){
     this.userData.getLocation().then((location) => {
       this.location = location;
     }); 
   }

   getDescription(){
     this.userData.getDescription().then((description) => {
       this.description = description;
     }); 
   }
     
   
      presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
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

 

  // changeProfilePicture(){
  //   this.imagePicker.getPictures(this.options).then((results) => {
  //     for (var i = 0; i < results.length; i++) {
  //         console.log('Image URI: ' + results[i]);
  //         this.captureDataUrl = 'data:image/jpeg;base64,' + results[i];
  //         //this.profileURL = results[i];
  //         // let user:any = firebase.auth().currentUser;
  //         // user.updateProfile({
  //         //   photoURL: results[i]
  //         // }).then(function() {
  //         //   // Update successful.
  //         // }, function(error) {
  //         //   // An error happened.
  //         // });
  //     }
  //   }, (err) => { });
  // }

   capture() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      this.upload();
    }, (err) => {
      // Handle error
    });
  }


   upload() {
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);
    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      console.log(snapshot.downloadURL);
      this.showSuccesfulUploadAlert();
      let user:any = firebase.auth().currentUser;
          user.updateProfile({
            photoURL: snapshot.downloadURL
          }).then(function() {

          }, function(error) {
            // An error happened.
          });
       this.storage.set('PHOTOURL', snapshot.downloadURL);

    });

  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Profile Picture has been updated',
      buttons: ['OK']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.captureDataUrl = "";
  }


}
