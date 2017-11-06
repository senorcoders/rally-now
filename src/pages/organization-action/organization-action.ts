import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-organization-action',
  templateUrl: 'organization-action.html',
})
export class OrganizationActionPage {
	endpoint:string = 'objectives/';
	orgName:string;
	orgDescription:string;
	organizationID:any;
	objectiveID:any;
	objTitle:string;
  rallies:string;
  myrallyID:any;
  favEndpoint:any = 'actions';
  goal_id:any;
  buttonColor:any;
  shownGroup = null;  
  information = [
    {title: "Why it's important", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor sit amet enim et vulputate. Donec et elit id quam viverra interdum at eu lacus. Duis volutpat semper magna, et auctor eros. Aliquam fermentum consequat turpis. Maecenas eu lectus at odio aliquet aliquam in convallis elit. Integer sagittis nunc vitae felis varius vestibulum. Pellentesque scelerisque rhoncus velit, sit amet fringilla tellus varius sit amet. Vestibulum ullamcorper sollicitudin feugiat. Nam eu placerat urna, ullamcorper finibus mi. Aliquam scelerisque ligula sem, eu euismod ex gravida faucibus. Etiam et pulvinar nisl. Phasellus ac tellus id purus vestibulum scelerisque ut sit amet elit. Sed velit est, suscipit a leo ullamcorper, sollicitudin aliquam quam. Maecenas blandit, ex at hendrerit euismod, erat felis pharetra ante, in fermentum nunc neque a felis. Integer vel est neque."},
    {title: "What to say (talking points)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor sit amet enim et vulputate. Donec et elit id quam viverra interdum at eu lacus. Duis volutpat semper magna, et auctor eros. Aliquam fermentum consequat turpis. Maecenas eu lectus at odio aliquet aliquam in convallis elit. Integer sagittis nunc vitae felis varius vestibulum. Pellentesque scelerisque rhoncus velit, sit amet fringilla tellus varius sit amet. Vestibulum ullamcorper sollicitudin feugiat. Nam eu placerat urna, ullamcorper finibus mi. Aliquam scelerisque ligula sem, eu euismod ex gravida faucibus. Etiam et pulvinar nisl. Phasellus ac tellus id purus vestibulum scelerisque ut sit amet elit. Sed velit est, suscipit a leo ullamcorper, sollicitudin aliquam quam. Maecenas blandit, ex at hendrerit euismod, erat felis pharetra ante, in fermentum nunc neque a felis. Integer vel est neque."}
  ];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    private shareProvider:SocialShareProvider,
    public actionSheetCtrl: ActionSheetController,
    private callNumber: CallNumber) {
  	  	this.objectiveID = navParams.get('objectiveID');
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

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Bob Representative',
      buttons: [
        {
          text: 'Call',
          handler: () => {
            this.callNumber.callNumber("18001010101", true)
            .then(() => console.log('Launched dialer!'))
            .catch((error) => console.log('Error launching dialer', error));
          }
        },{
          text: 'Post on Facebook',
          handler: () => {
            console.log('Post on Facebook clicked');
            this.shareProvider.facebookShare("Hola desde Rally up", "http://via.placeholder.com/350x150");
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
            this.shareProvider.twitterShare("Hola desde Rally up", "http://via.placeholder.com/350x150");
          }
        },{
          text: 'Send a Fax',
          handler: () => {
            console.log('Send a Fax clicked');
          }
        },{
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
            this.shareProvider.shareViaEmail();
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
      this.orgDescription=result.organization['description'];
      this.organizationID=result.organization_id;
      this.rallies=result.rallies;
      this.goal_id=result.goals[0]['id'];
      this.checkFavStatus();

      console.log("Success : "+ result.name);
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

 addToFav(goal_id, action_type_id){
   this.httpProvider.addFavorites(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
   this.httpProvider.saveFollowRecordID(goal_id, goal_id, 'favorites');
   this.presentToast('Added to Favorites');
 }

 addFavRecordFirebase(goal_id, action_type_id){
     let user:any = firebase.auth().currentUser;
     let favRef = this.db.database.ref('favorites/'+user['uid']+'/'+goal_id);
     favRef.once('value', snapshot=>{
       if (snapshot.hasChildren()) {
         console.log('Already added to favorties');
         this.presentToast('Already added to favorties');

       }else{
         this.addToFav(goal_id, action_type_id);
         this.presentToast('Added to Favorites');
       }
     });
    }


    share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }


     checkFavStatus(){
   let user:any = firebase.auth().currentUser;
     if (user) {
       let orgRef = this.db.database.ref('favorites/'+user['uid']+'/'+this.goal_id);
    orgRef.on('value', snapshot=>{
      if (snapshot.hasChildren()) {
       console.log('Added');
       this.buttonColor = 'red';
       
      } else{
        console.log('Not yet');
        this.buttonColor = '#4a90e2';
          
      }
    });
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

}
