import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UserData } from '../../providers/user-data';
import firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
// import { FirebaseListObservable} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { UsersProvider } from '../../providers/users/users';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
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

  

  captureDataUrl: string;
  website:string;
  user:any={
    displayName: '',
    photoURL: '',
    email: '',
    location: '',
    description: '',
    website: '',
    phone: '',
    address:'',
    uid: '',
    apiRallyID: '',
    searchable: '',
    hide_activity: ''
  };
  endpoint:string = 'users/';
  toggle: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public popoverCtrl: PopoverController,
    public userData: UserData,
    private camera: Camera,
    public storage: Storage,
    public af:AngularFireDatabase,
    private httpProvider:UsersProvider
  ) {
  }

  ionViewDidLoad(){
    this.getUID(); 
    console.log(this.toggle);


}

getUID(){
  this.userData.getUid().then((uid) => {
    console.log(uid);
     this.af.database.ref('users/'+uid)
      .on('value', snapshot => {
        console.log(snapshot.val().displayName);
        this.user.displayName = snapshot.val().displayName;
        this.user.photoURL = snapshot.val().photoURL;
        this.user.uid = snapshot.val().uid;
        this.user.address = snapshot.val().address || '';
        this.user.email = snapshot.val().email || '';
        this.user.location = snapshot.val().location || '';
        this.user.phone = snapshot.val().phone || '';
        this.user.website = snapshot.val().website || '';
        this.user.description = snapshot.val().description || '';
        this.user.apiRallyID = snapshot.val().apiRallyID || '';
        this.user.searchable = snapshot.val().searchable || '1';
        this.user.hide_activity = snapshot.val().hide_activity;
        if (snapshot.val().hide_activity == 1) {
          this.toggle = false;
        }else{
          this.toggle = true;
        }
      });
  });
}


updateProfile(){
  this.af.database.ref('users/'+this.user.uid).set(this.user);
  this.httpProvider.updateUser(this.endpoint + this.user.apiRallyID, this.user);
}

 presentPopover() {
  let popover = this.popoverCtrl.create(OverlayPage);
  popover.present();
}

goToTabs(){
  this.navCtrl.setRoot(TabsPage);
}



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


updatePhotoFirebase(url){
this.af.database.ref('users/'+this.user.uid).update({
  photoURL: url
});


}

upload() {
let storageRef = firebase.storage().ref();

const filename = Math.floor(Date.now() / 1000);

// Create a reference to 'images/todays-date.jpg'
const imageRef = storageRef.child(`images/${filename}.jpg`);
imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
 console.log(snapshot.downloadURL);
  this.updatePhotoFirebase(snapshot.downloadURL);
  this.storage.set('PHOTOURL', snapshot.downloadURL);
  // this.user.photoURL = snapshot.downloadURL;
 this.showSuccesfulUploadAlert();


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

onUpdateToggle(){
if (this.toggle.checked == false) {
   console.log('No cambia de estado');
  //this.user.hide_activity = 1;

}else{
 this.user.hide_activity = 0;
}

}

}
