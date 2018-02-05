import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';
import { RepresentativeProfilePage } from '../representative-profile/representative-profile';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';



@IonicPage()
@Component({
  selector: 'page-representives-list',
  templateUrl: 'representives-list.html',
})
export class RepresentivesListPage {
  endpoint:any = 'reps';
  representatives:any = [];
  loading:any;
  items:any = []; 
  currentRallyID:any;
  followEndpoint:any = 'following_representative';
  newEndpoint:any = 'reps_pagination/';
  private start:number=1;
  searchControl: FormControl;
  shouldShowCancel: any = false;
  searchTerm: string = '';
  safeSvg:any;
  enablePlaceholder:boolean = true;




  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storage: Storage,
   private orgProvider: OrganizationsProvider,
   private sanitizer: DomSanitizer) {
    this.searchControl = new FormControl();
    // let svg = `<div id="Rallycontainer">
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Loading</title>
    //   <path id="arrow" class="bounce" d="M79.1,44.3c-2.4-0.5-4.1-2.6-4-5V22.6H58.7c-2.4,0.1-4.5-1.6-5-4C53.2,16,55,13.5,57.6,13c0.3,0,0.5-0.1,0.8-0.1h21.5
    //     c2.7,0,4.8,2.2,4.8,4.8v21.8c0,2.7-2.2,4.8-4.8,4.8C79.7,44.4,79.4,44.4,79.1,44.3z"/>
    //   <path id="R" d="M67.5,87H52.8L41.4,66.3h-4V87H24.8V33h19.4c6,0,10.7,1.3,14.3,3.8c3.9,2.9,6.1,7.5,5.9,12.4c0,10.3-6.6,14.3-10.6,15.5
    //     L67.5,87z M48.9,44.2c-1.6-1.2-3.6-1.4-6.5-1.4h-5v13.9h5c2.9,0,4.9-0.3,6.5-1.5c1.8-1.2,2.9-3.3,2.7-5.5
    //     C51.8,47.5,50.7,45.4,48.9,44.2z"/></svg>
    // </div>`;

    //   this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);


    //   this.loading = this.loadingCtrl.create({
    //     spinner: 'hide',
    //     content: this.safeSvg, 
    //   }); 
    //   this.loading.present();
    this.enablePlaceholder = true;
      this.httpProvider.returnRallyUserId().then(
        user => {
          this.currentRallyID = user.apiRallyID;
         
              this.getReps();
        } 
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsRequestPage');
     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
          this.shouldShowCancel = false;
        });

  }

  getReps(){

      return new Promise(resolve => {
        this.orgProvider.load(this.newEndpoint, this.start)
          .then(data => {
            this.getArray(data);
            // for(let person of data) {
            //   this.organizations.push(person);
            // }
            // this.representatives = data;
            // this.initializeItems();
            // console.log(data);
            // this.loading.dismiss();  
             
            resolve(true);
          });
      });
  } 

  getArray(array){
    for(let person of array) {
          this.items.push(person);
    }
    //this.loading.dismiss(); 
    this.enablePlaceholder = false;

}


  doInfinite(infiniteScroll:any) {
    console.log(infiniteScroll);
    console.log('doInfinite, start is currently '+this.start);
    this.start+=1;
    console.log(this.start);
    
    this.getReps().then(()=>{
      infiniteScroll.complete();
    });
    
 }

  // initializeItems() {
  //   this.items = this.representatives;
  // }

  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

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
          return el == this.currentRallyID;
        
      });
      
      if (!found){
        return 'Follow';
        
      }else{
        return 'Unfollow';
        
      }
    }
  }

  unFollowRep(recordID){
    this.httpProvider.unfollowOrganization(this.followEndpoint, recordID);
    this.presentToast('Representative removed');
  }

  followRep(repID, $event){
    console.log($event);
    
    
    this.httpProvider.getJsonData(this.followEndpoint+'?user_id='+this.currentRallyID+'&representative_id='+repID)
      .subscribe(
        result => {
          
          if (result != ""){              
            this.unFollowRep(result[0].id);
            $event.srcElement.innerHTML = "Follow";
            $event.srcElement.innerText = "FOLLOW";
          } else{
            this.saveRepInApi(repID);
            $event.srcElement.innerHTML = "Unfollow";
            $event.srcElement.innerText = "UNFOLLOW";
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

  saveRepInApi(repID){
      this.httpProvider.followRep(this.followEndpoint, this.currentRallyID, repID);
      this.presentToast('Representative added');
      

  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  goToRepProfile(repID){
    this.navCtrl.push(RepresentativeProfilePage, {repID: repID});
  }

  search(){
    this.orgProvider.getJsonData(this.endpoint + '/search/' + this.searchTerm).subscribe(
      result => {
        console.log("Search", result);
        this.items = result['reps'];
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
      this.getReps();
    } else{
      this.shouldShowCancel = true;
      this.search();
    }
       
  } 

  cancel(){
    this.getReps();
  }

  

}
