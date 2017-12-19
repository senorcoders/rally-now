import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { CallNumber } from '@ionic-native/call-number';
import { CallPage } from '../call/call';
import { WebviewPage } from '../webview/webview';
import { Storage } from '@ionic/storage';
import { AdressModalPage } from '../adress-modal/adress-modal';


@IonicPage()
@Component({
  selector: 'page-organization-action',
  templateUrl: 'organization-action.html',
})
export class OrganizationActionPage {
  endpoint:string = 'objectives/';
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';  
	orgName:string;
	orgDescription:string;
	organizationID:any;
	objectiveID:any;
	objTitle:string;
  rallies:string;
  myrallyID:any;
  shares:any;
  likes:any;
  actions:any;
  goal_id:any;
  buttonColor:any;
  shownGroup = null; 
  date:any; 
  pageName:any;
  objectivesMedia:any;
  objDesc:any;
  objShort:any;
  orgPhoto:any;
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  information = [];
  enable:boolean;

  goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
  likeendpoint:any = 'likes';
  reps:any;
  repAddress:any;
  repsEndpoint:any = 'reps?bioguide=';
  data:any = [{
    user_id: '',
    title: '',
    short_desc: '',
    representative_id: '',
    action_type_id: ''
  }];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController,
    private callNumber: CallNumber,
    public viewCtrl: ViewController,
    private storage: Storage,
    public modalCtrl: ModalController) {
  	  	this.objectiveID = navParams.get('objectiveID');
        this.pageName = navParams.get('pageName');
  	  	this.httpProvider.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
        this.data.user_id = user.apiRallyID;
        this.data.title = 'call';
        this.getdata();
        this.getReps();

        

 
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationActionPage');

  }

  

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.pageName);
  }

  presentActionSheet(rep, fax, twitter, email, repID) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Bob Representative',
      buttons: [
        {
          text: 'Call',
          handler: () => {
            this.navCtrl.push(CallPage, {rep: rep, repID: repID});
            // this.callNumber.callNumber("18001010101", true)
            // .then(() => console.log('Launched dialer!'))
            // .catch((error) => console.log('Error launching dialer', error));
          }
        },{
          text: 'Fax',
          handler: () => {
            console.log('Fax clicked');
            this.data.action_type_id = 'ad3ef19b-d809-45b7-bef2-d470c9af0d1d';
            this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(WebviewPage, {iframeUrl: fax});

          }
        },{
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
            this.data.action_type_id = 'f9b53bc8-9847-4699-b897-521d8e1a34bb';
            this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(WebviewPage, {iframeUrl: email});
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
            this.data.action_type_id = '9eef1652-ccf9-449a-901e-ad6c0b3a8a6c';
            this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(WebviewPage, {iframeUrl: twitter});
          }
        },{
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
 
  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.objectiveID).subscribe(
    result => {
      this.orgName=result.organization['name'];
      this.objTitle = result.title;
      this.orgPhoto = result.organization['image_url'];
      this.orgDescription=result.organization['description'];
      this.organizationID=result.organization_id;
      this.rallies=result.rallies;
      this.goal_id=result.goals[0]['id'];
      this.likes = result.likes;
      this.shares = result.shares;
      this.actions = result.goals[0];
      this.date = result.created_at;
      this.objectivesMedia = result.image_url;
      this.objDesc = result.description;
      this.objShort = result.short_desc;
      this.information.push(
        {
        title: "Why it's important",
        description: this.objDesc
        },
      {
        title: "What to say (talking points)",
        description: this.objShort
      });

      console.log("Actions", JSON.stringify(this.actions ));
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




  removeFav(recordID){
    this.httpProvider.unfollowOrganization(this.likeendpoint, recordID);
    this.httpProvider.removeFollowRecordID(recordID, 'favorites');
  }

 


    share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
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
 

     

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};



getLikeStatus($event, reference_id, like_type){
  this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
    result => {
      console.log("Aqui", result);
      
      if(result != "" ){
        this.removeFav(result[0].id);
        this.presentToast('You unliked it');
        $event.srcElement.style.backgroundColor = '#f2f2f2';
        $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
        $event.srcElement.innerText--;
        
      }else{
       this.addLike(reference_id, like_type);
       this.presentToast('You liked it');
        $event.srcElement.style.backgroundColor = '#296fb7';
        $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
        $event.srcElement.innerText++;
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
  const actionSheet = this.actionSheetCtrl.create({
    title: 'Share with',
    buttons: [
      {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          this.shareProvider.facebookShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
          $event.srcElement.innerText++;           
          this.presentToast('Objective shared!');
        }
      }, 
      {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          this.shareProvider.twitterShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
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
          this.addShareAction(reference_id, like_type);
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

addShareAction(goal_id, action_type_id){
  this.httpProvider.addLike(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
}


getReps(){
  this.storage.get('representatives').then((val) => {
    console.log(val);
      if (val != null){
        this.enable = true;
        this.reps = val;
        this.getAddress();
      } else{
        this.enable = false;
      }
  });
}

getAddress(){
  this.storage.get('repAdress').then((val) => {
    if (val != null){
      this.repAddress = val;
    } else{
      this.repAddress = "No Address";
    }
  });
}


finReps(){
  let modal = this.modalCtrl.create(AdressModalPage);
  modal.onDidDismiss(() => {
    this.getReps();
  });
  modal.present();

}


getRepID(rep, fax, twitter, email, bioguide){
  this.httpProvider.getJsonData(this.repsEndpoint +bioguide).subscribe( result => {
      console.log(result[0].id);
      this.data.representative_id = result[0].id;
      this.presentActionSheet(rep, fax, twitter, email, result[0].id);
  });
}


}
