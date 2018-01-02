import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';
import { RepresentativeProfilePage } from '../representative-profile/representative-profile';



@IonicPage()
@Component({
  selector: 'page-representives-list',
  templateUrl: 'representives-list.html',
})
export class RepresentivesListPage {
  endpoint:any = 'reps';
  representatives:any;
  loading:any;
  items:any; 
  currentRallyID:any;
  followEndpoint:any = 'following_representative';
  

  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storage: Storage) {

      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
      this.loading.present();
      this.httpProvider.returnRallyUserId().then(
        user => {
          this.currentRallyID = user.apiRallyID;
          this.storage.get('repFullList').then((val) =>{
            if(val != null){
              console.log("Loading from local");
              this.representatives = val;
              this.initializeItems();
              this.loading.dismiss();
            } else{
              console.log("calling the api");
              this.getReps();
            }
        });
          
        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepresentivesListPage');
  }

  getReps(){
    this.httpProvider.getJsonData(this.endpoint)
      .subscribe( result => {
        this.representatives = result;
        this.storage.set("repFullList", result);
        this.initializeItems();
        this.loading.dismiss();
      });
  }

  initializeItems() {
    this.items = this.representatives;
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

}
