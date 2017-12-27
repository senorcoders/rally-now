import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-organizations-list',
  templateUrl: 'organizations-list.html',
})
export class OrganizationsListPage {
  endpoint:any = 'organizations';
  organizations:any;
  loading:any;
  items:any;
  currentRallyID:any;
  favEndpoint:any = 'actions';  
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  organizationEndpoint:any = 'following_organizations';

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    public actionSheetCtrl: ActionSheetController,
    private storage: Storage) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
      this.loading.present();
      this.httpProvider.returnRallyUserId().then(
        user => {
          this.currentRallyID = user.apiRallyID;
          this.storage.get('organizations').then((val) =>{
            if(val != null){
              console.log("Loading from local");
              this.organizations = val;
              this.initializeItems();
              this.loading.dismiss();
            } else{
              console.log("calling the api");
              this.getOrganizations();
            }
        });
          });

      
  }

 

  getOrganizations(){
    this.httpProvider.getJsonData(this.endpoint)
      .subscribe( result => {
        this.organizations = result;
        this.storage.set("organizations", result);
        this.initializeItems();
        this.loading.dismiss();
      });
  }

  initializeItems() {
    this.items = this.organizations;
  }

  goToOrganizationProfile(organizationID){
    this.navCtrl.push(OrganizationProfilePage, {
       organizationID: organizationID,
       OrgPageName: "Discover"
 }, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  findInLoop(actions){
    if (actions != null){
      var found = actions.some(el => { 
          return el.id == this.currentRallyID;
        
      });
      
      if (!found){
        return 'Follow';
        
      }else{
        return 'Unfollow';
        
      }
    }
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  addFollowRecordFirebase(organizationID, $event){
    let user:any = firebase.auth().currentUser;
    let followRef = this.db.database.ref('organizations/'+user['uid']+'/'+organizationID);
    followRef.once('value', snapshot=>{
      if (snapshot.hasChildren()) {
        console.log('You already follow this org');
        this.unFollowActionSheet(organizationID);
        $event.srcElement.innerText = 'Follow';
        
        //this.presentToast('You are not following this organization anymore');

      }else{
        this.followOrg(organizationID);
        $event.srcElement.innerText = 'Unfollow';
        
        this.presentToast('Follow Organization successfully');
      }
    });
   }

   followOrg(organizationID){ 
    this.httpProvider.followOrganization(this.organizationEndpoint, this.currentRallyID, organizationID );
  }

  unFollowActionSheet(organizationID) {
    
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Unfollow this organization?' ,
    cssClass: 'title-img',      
    buttons: [
      {
        text: 'Unfollow',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
          this.getOrganizationFollowRecordID(organizationID);
          
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

getOrganizationFollowRecordID(organizationID){
        this.httpProvider.getJsonData(this.organizationEndpoint+'?follower_id='+this.currentRallyID+'&organization_id='+organizationID).subscribe(
      result => {
      console.log("Delete ID : "+ result[0].id);
      this.unfollow(result[0].id, organizationID);
      },
      err =>{
      console.error("Error : "+err);
      } ,
      () => {
      console.log('getData completed');
      }

      );
}

unfollow(recordID, organizationID){
  
        this.httpProvider.unfollowOrganization(this.organizationEndpoint, recordID);
        this.httpProvider.removeFollowRecordID(organizationID, 'organizations');
      }

}
