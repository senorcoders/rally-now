import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { OrganizationsProvider } from '../../providers/organizations/organizations';


@IonicPage()
@Component({
  selector: 'page-organization-profile',
  templateUrl: 'organization-profile.html',
})
export class OrganizationProfilePage {
	organizationID:string;
	endpoint:string = 'organization/';
	name:string;
	description:string;
	short_desc:string;
	organizationEndpoint:any = 'following_organizations';
	dataID:any;
  buttonFollowTest:string;
  login:any = true;
  objectives:any;


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private httpProvider:UsersProvider,
    private orgProvider:OrganizationsProvider,
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
  this.orgProvider.getJsonData(this.endpoint + this.organizationID).subscribe(
    result => {
      this.name=result.organization[0]['name'];
      this.description=result.organization[0]['description'];
      this.short_desc=result.organization[0]['short_desc'];
      this.dataID=result.organization[0]['id'];
      this.objectives = result.objectives;
      console.log("Success : "+ JSON.stringify(result.organization[0]['name']) );
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
     if (user) {
       let orgRef = this.db.database.ref('organizations/'+user['uid']+'/'+this.organizationID);
    orgRef.on('value', snapshot=>{
      if (snapshot.hasChildren()) {
       console.log('Unfollow');
       this.buttonFollowTest = 'Unfollow';
       
      } else{
        console.log('Follow');
        this.buttonFollowTest = 'Follow';
          
      }
    });
     }else{
       console.log("No logueado");
       this.login = false;
     }
    
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
         this.presentToast('You are not following this organization anymore');

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
      this.httpProvider.removeFollowRecordID(this.organizationID, 'organizations');
    }
    

}
