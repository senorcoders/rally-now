import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { SocialShareProvider } from '../../providers/social-share/social-share';


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




  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    private shareProvider:SocialShareProvider) {
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

}
