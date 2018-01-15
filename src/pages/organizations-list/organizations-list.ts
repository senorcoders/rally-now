import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-organizations-list',
  templateUrl: 'organizations-list.html',
})
export class OrganizationsListPage {
  endpoint:any = 'organizations';
  public organizations:any = [];
  loading:any;
  public items:any = [];
  currentRallyID:any;
  favEndpoint:any = 'actions';  
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  organizationEndpoint:any = 'following_organizations';
  private start:number=1;
  newEndpoint:any = 'organization_pagination/';
  searchControl: FormControl;
  shouldShowCancel: any = false;
  searchTerm: string = '';
  safeSvg:any;


  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    public actionSheetCtrl: ActionSheetController,
    private storage: Storage,
    private orgProvider: OrganizationsProvider,
    private sanitizer: DomSanitizer) {
      this.searchControl = new FormControl();

      let svg = `<div id="Rallycontainer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Loading</title>
      <path id="arrow" class="bounce" d="M79.1,44.3c-2.4-0.5-4.1-2.6-4-5V22.6H58.7c-2.4,0.1-4.5-1.6-5-4C53.2,16,55,13.5,57.6,13c0.3,0,0.5-0.1,0.8-0.1h21.5
        c2.7,0,4.8,2.2,4.8,4.8v21.8c0,2.7-2.2,4.8-4.8,4.8C79.7,44.4,79.4,44.4,79.1,44.3z"/>
      <path id="R" d="M67.5,87H52.8L41.4,66.3h-4V87H24.8V33h19.4c6,0,10.7,1.3,14.3,3.8c3.9,2.9,6.1,7.5,5.9,12.4c0,10.3-6.6,14.3-10.6,15.5
        L67.5,87z M48.9,44.2c-1.6-1.2-3.6-1.4-6.5-1.4h-5v13.9h5c2.9,0,4.9-0.3,6.5-1.5c1.8-1.2,2.9-3.3,2.7-5.5
        C51.8,47.5,50.7,45.4,48.9,44.2z"/></svg>
    </div>`;

      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);

      this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: this.safeSvg,  
      }); 
      this.loading.present();
      this.httpProvider.returnRallyUserId().then(
        user => {
          this.currentRallyID = user.apiRallyID;
          this.getOrganizations();
          });
 
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsRequestPage');
     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.shouldShowCancel = false;
        });

  }

 

  // getOrganizations(){
  //   this.httpProvider.getJsonData(this.endpoint)
  //     .subscribe( result => {
  //       this.organizations = result;
  //       // this.storage.set("organizations", result);
  //       this.initializeItems();
  //       this.loading.dismiss();
  //     });
  // }

  getOrganizations(){
    return new Promise(resolve => {
      this.orgProvider.load(this.newEndpoint, this.start)
        .then(data => {
          this.getArray(data);
          //this.organizations = data;
            
          resolve(true);
        });
    });
  }

  getArray(array){
      for(let person of array) {
            this.items.push(person);
      }
      // this.initializeItems();
      this.loading.dismiss(); 

  }

  doInfinite(infiniteScroll:any) {
    console.log(infiniteScroll);
    console.log('doInfinite, start is currently '+this.start);
    this.start+=1;
    console.log(this.start);
    
    this.getOrganizations().then(()=>{
      infiniteScroll.complete();
    });
    
 }
 
  // initializeItems() {
  //   this.items = this.organizations;
  // }

  goToOrganizationProfile(organizationID){
    this.navCtrl.push(OrganizationProfilePage, {
       organizationID: organizationID,
       OrgPageName: "Discover"
 }, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value

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


      search(){
        this.orgProvider.getJsonData(this.endpoint + '/search/' + this.searchTerm).subscribe(
          result => {
            console.log("Search", result);
            this.items = result['organization'];
            // this.initializeItems();
           
          },
          err =>{
            console.error("Error : "+err);
          } ,
          () => {
            console.log('getData completed');
          });
      }
    
      onSearchInput(){
        console.log("Busqueda", this.searchTerm);
        if (this.searchTerm === "") {
          this.shouldShowCancel = false;
          this.getOrganizations();
        } else{
          this.shouldShowCancel = true;
          this.search();
        }
           
      } 
    
      cancel(){
        this.getOrganizations();
      }

}