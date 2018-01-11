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
import { ThankYouPage } from '../thank-you/thank-you';
import { FaxFeedBackPage } from '../fax-feed-back/fax-feed-back';
import { EmailFeedBackPage } from '../email-feed-back/email-feed-back';


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
  disable:boolean = false;

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
  senators:any;
  contactOption:any;
  enableReps:boolean;
  enableSen:boolean;
  enableSpecificRep:boolean;
  reps_goals:any;


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
        this.data.title = 'tweet';
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

  presentActionSheet(rep, fax, twitter, email, repID, offices) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + rep.name,
      buttons: [ 
        {
          text: 'Call',
          handler: () => { 
            this.navCtrl.push(CallPage, {rep: rep, repID: repID, talkingPoints: this.objDesc, offices: offices});
            this.callNumber.callNumber(rep.phone, true)
            .then(() => console.log('Launched dialer!'))
            .catch((error) => console.log('Error launching dialer', error));
          }
        },{
          text: 'Fax',
          handler: () => {
            console.log('Fax clicked');
            // this.data.action_type_id = 'ad3ef19b-d809-45b7-bef2-d470c9af0d1d';
            // this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(FaxFeedBackPage, {iframeUrl: fax, repID: repID});

          }
        },{ 
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
            // this.data.action_type_id = 'f9b53bc8-9847-4699-b897-521d8e1a34bb';
            // this.httpProvider.addAction(this.favEndpoint, this.data);
            this.navCtrl.push(EmailFeedBackPage, {iframeUrl: email});
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
            this.data.action_type_id = '9eef1652-ccf9-449a-901e-ad6c0b3a8a6c';
            this.httpProvider.addAction(this.favEndpoint, this.data);
            this.shareProvider.twitterShare('@' + twitter);
            this.streakModal();
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

  streakModal() {
    let modal = this.modalCtrl.create(ThankYouPage);
    modal.present();
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
      this.reps_goals = result.goals[0].reps_goals;
      this.contactOption = result.goals[0].contact_option_id;
      if(result.goals[0].contact_option_id === '5ab2a2d5-776c-4364-b7c7-9760b185268e'){
        this.enableSen = true;
      }else if(result.goals[0].contact_option_id === 'b93168cb-3edb-4b06-92fb-65029e6deea0'){
        this.enableReps = true;
      }else if(result.goals[0].contact_option_id === '081e67ea-ac08-4d6e-b91c-17efe265be06'){
          this.enableReps = true;
          this.enableSen = true;
      }else if(result.goals[0].contact_option_id === '40c652e4-bf45-4680-8223-b0b0cf8a92ba'){
        this.enableSpecificRep = true;
      }

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
    this.httpProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
      console.log(res);
      this.disable = false;
  
    }, err =>{
      console.log(err);
    });
  this.httpProvider.removeFollowRecordID(recordID, 'favorites');
  }

 


    share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }


     findInLoop(actions){
      if (actions != null){
        var found = actions.some(el => { 
            return el == this.myrallyID;
          
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
  this.disable = true;
  this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
    result => {
      console.log("Aqui", result);
      
      if(result != "" ){
        this.removeFav(result[0].id);
        this.presentToast('You unliked it');
        $event.srcElement.style.backgroundColor = '#f2f2f2';
        $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
        $event.srcElement.lastChild.data--;
        
      }else{
       this.addLike(reference_id, like_type);
       this.presentToast('You liked it');
        $event.srcElement.style.backgroundColor = '#296fb7';
        $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
        $event.srcElement.lastChild.data++;
      }
    },
    err =>{
      console.error("Error : "+err);         
    } ,
    () => {
      console.log('getData completed');
    });
}

addLike(reference_id, like_type){
  this.httpProvider.addLike(this.likeendpoint, reference_id, this.myrallyID, like_type).subscribe(
      response =>{
          console.log(response);
          this.disable = false;
      });

}



shareController(title, imgURI, reference_id, like_type, $event) {
  this.disable = true;

const actionSheet = this.actionSheetCtrl.create({
 title: 'Share to where?',
 buttons: [
   {
     text: 'Facebook',
     handler: () => {
       this.shareProvider.facebookShare(title, imgURI);
       this.addShareAction(reference_id, like_type);
       $event.srcElement.lastChild.data++;
       this.presentToast('Objective shared!');
       this.disable = false;
       this.streakModal();

     }
   }, 
   {
     text: 'Twitter',
     handler: () => {
       this.shareProvider.twitterShare(title, imgURI);
       this.addShareAction(reference_id, like_type);
       $event.srcElement.lastChild.data++;
       this.presentToast('Objective shared!');
       this.disable = false;
       this.streakModal();

     }
   },
  //  {
  //   text: 'Copy Link',
  //   handler: () => {
  //     this.disable = false;

  //   }
  // },
  // {
  //   text: 'SMS Message',
  //   handler: () => {
  //     this.presentToast('Objective shared!');
  //     this.disable = false;

  //   }
  // },
  // {
  //   text: 'Email',
  //   handler: () => {
      
  //     this.presentToast('Objective shared!');
  //     this.disable = false;

  //   }
  // },
   {
     text: 'Cancel',
     role: 'cancel',
     handler: () => {
       console.log('Cancel clicked');
       this.disable = false;

     }
   }
 ]
});

actionSheet.present();
}

addShareAction(goal_id, action_type_id){
  this.httpProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
}


getReps(){
  this.storage.get('representatives').then((val) => {
    console.log(val);
      if (val != null){
        this.enable = true;
        this.reps = val; 
        this.getAddress();
        this.getSenator();
      } else{
        this.enable = false;
      }
  });
}

getSenator(){
  this.storage.get('senators').then((val) => {
    if(val != null){
      this.senators = val;
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
    this.getAddress();
  });
  modal.present();

}


getRepID(rep, fax, twitter, email, bioguide){
  this.httpProvider.getJsonData(this.repsEndpoint +bioguide).subscribe( result => {
      console.log(result[0].id);
      this.data.representative_id = result[0].id;
      this.presentActionSheet(rep, result[0].fax_url, twitter, email, result[0].id, result[0].offices);
  });
}


}
