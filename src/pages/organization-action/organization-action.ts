import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { CallNumber } from '@ionic-native/call-number';
import { CallPage } from '../call/call';
import { WebviewPage } from '../webview/webview';
import { Storage } from '@ionic/storage';


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


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController,
    private callNumber: CallNumber,
    public viewCtrl: ViewController,
    private storage: Storage) {
  	  	this.objectiveID = navParams.get('objectiveID');
        this.pageName = navParams.get('pageName');
  	  	this.httpProvider.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
        this.getdata();

 
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationActionPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.pageName);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Bob Representative',
      buttons: [
        {
          text: 'Call',
          handler: () => {
            this.navCtrl.push(CallPage);
            // this.callNumber.callNumber("18001010101", true)
            // .then(() => console.log('Launched dialer!'))
            // .catch((error) => console.log('Error launching dialer', error));
          }
        },{
          text: 'Fax',
          handler: () => {
            console.log('Fax clicked');
            this.navCtrl.push(WebviewPage);
          }
        },{
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
            this.shareProvider.shareViaEmail();
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
            this.navCtrl.push(WebviewPage);
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
      if (val != null){
        
      }
  });
}


}
