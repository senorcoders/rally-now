import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
/**
 * Generated class for the OrganizationProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */ 

@IonicPage()
@Component({
  selector: 'page-organization-profile',
  templateUrl: 'organization-profile.html',
})
export class OrganizationProfilePage {
	organizationID:string;
	endpoint:string = 'organizations/';
	name:string;
	description:string;
	short_desc:string;
	organizationEndpoint:any = 'following_organizations';
	dataID:any;
  buttonFollowTest:string;


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private httpProvider:UsersProvider,
  	public toastCtrl: ToastController,
  	private db: AngularFireDatabase) {
  	this.organizationID = navParams.get('organizationID');
  	this.getdata();
    this.checkOrganizationStatus();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationProfilePage');
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.organizationID).subscribe(
    result => {
      this.name=result.name;
      this.description=result.description;
      this.short_desc=result.short_desc;
      this.dataID=result.id;
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

  checkOrganizationStatus(){
   let user:any = firebase.auth().currentUser;
    let orgRef = this.db.database.ref('organizations/'+user['uid']+'/'+this.organizationID);
    orgRef.once('value', snapshot=>{
      if (snapshot.hasChildren()) {
       console.log('Unfollow');
       this.buttonFollowTest = 'Unfollow';
       
      } else{
        console.log('Follow');
        this.buttonFollowTest = 'Follow';
          
      }
    });
  }


presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

    addFollowRecordFirebase(organizationID){
     let user:any = firebase.auth().currentUser;
     let followRef = this.db.database.ref('organizations/'+user['uid']+'/'+organizationID);
     followRef.once('value', snapshot=>{
       if (snapshot.hasChildren()) {
         console.log('You already follow this org');
         this.getOrganizationFollowRecordID();
         this.presentToast('You already follow this organization');

       }else{
         this.followOrg(organizationID);
         this.presentToast('Follow Organization successfully');
       }
     });
    }

    followOrg(organizationID){
      this.httpProvider.followOrganization(this.organizationEndpoint, this.httpProvider.getRallyID(), organizationID );
      console.log("My RallyID", this.httpProvider.getRallyID());
    }

    getOrganizationFollowRecordID(){
        this.httpProvider.getJsonData(this.organizationEndpoint+'?follower_id='+this.httpProvider.getRallyID()+'&organization_id='+this.organizationID).subscribe(
    result => {
      console.log("Delete ID : "+ result[0].id);
      this.unfollow(result[0].id);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }

    );
    }

    unfollow(recordID){
      this.httpProvider.unfollowOrganization(this.organizationEndpoint, recordID);
      //this.httpProvider.removeFollowRecordID(this.organizationID, 'organizations');
    }
    

}
