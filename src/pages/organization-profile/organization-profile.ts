import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationActionPage } from '../organization-action/organization-action';


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
  location:string;
  myrallyID:any;
  hide_enpoint:any = 'hide_objective';
  favEndpoint:any = 'actions';
    likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';




  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private httpProvider:UsersProvider,
    private orgProvider:OrganizationsProvider,
  	public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    public actionSheetCtrl: ActionSheetController) {
  	this.organizationID = navParams.get('organizationID');
    this.httpProvider.returnRallyUserId().then(user => {
      this.myrallyID = user.apiRallyID;
        this.getdata();
    this.checkOrganizationStatus();

    });
  
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
         this.unFollowActionSheet();
         //this.presentToast('You are not following this organization anymore');

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
    unFollowActionSheet() {
      
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Unfollow ' + this.name + '?' ,
      cssClass: 'title-img',      
      buttons: [
        {
          text: 'Unfollow',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.getOrganizationFollowRecordID();
            
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


  addToFav(goal_id, action_type_id){
   this.httpProvider.addFavorites(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
   this.presentToast('Added to Favorites');
 }

  getFavID($event, goal_id, action_type_id){
    console.log($event);

    
    this.httpProvider.getJsonData(this.favEndpoint+'?goal_id='+goal_id+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID).subscribe(
      result => {
        console.log("Aqui", result);
        
        if(result != "" ){
          this.removeFav(result[0].id);
          this.presentToast('Removed from favorites');
          $event.srcElement.style.backgroundColor = '#f2f2f2';
          $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
          $event.srcElement.innerText--;
          
        }else{
         this.addToFav(goal_id, action_type_id);
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

    hideItem(objective_id, index){
        this.httpProvider.hideObjective(this.hide_enpoint, this.myrallyID, objective_id);
        (this.objectives).splice(index, 1);
    }

     findInLoop(actions){
    if (actions != null){
      
      var found = actions.some(el => { 
        if(el.action_type_id === this.likeAction){
          return el.user_id[0].id== this.myrallyID;
        }
        
      });
      
      if (!found){
        return '#f2f2f2';
        
      }else{
        return '#296fb7';
        
      }
    }
   
  }




removeFav(recordID){
  this.httpProvider.unfollowOrganization(this.favEndpoint, recordID);
  this.httpProvider.removeFollowRecordID(recordID, 'favorites');
}

goToActionPage(objectiveID){
       this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }

}
