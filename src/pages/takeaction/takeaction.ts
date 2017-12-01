import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { CallPage } from '../call/call';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { OrganizationActionPage } from '../organization-action/organization-action';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { SocialShareProvider } from '../../providers/social-share/social-share';


@IonicPage()
@Component({
  selector: 'page-takeaction',
  templateUrl: 'takeaction.html',
})
export class TakeactionPage {

  endpoint:string = 'objectives';
  objectives:any;
  myrallyID:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  hide_enpoint:any = 'hide_objective';



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController, 
    public popoverCtrl: PopoverController,
    private httpProvider:UsersProvider,
    public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    private shareProvider:SocialShareProvider,
    public viewCtrl:ViewController) {

     this.httpProvider.returnRallyUserId()
      .then(user => {
        console.log(" Usuario",user);
        this.myrallyID = user.apiRallyID;
        this.getdata();

      });
  }

   ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeactionPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Bob Representative',
      buttons: [
        {
          text: 'Call',
          handler: () => {
             this.navCtrl.push(CallPage);
          }
        },{
          text: 'Post on Facebook',
          handler: () => {
            console.log('Post on Facebook clicked');
          }
        },{
          text: 'Post message via Twitter',
          handler: () => {
            console.log('Post message via Twitter clicked');
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

   goToHome(){
    this.navCtrl.setRoot(FeedPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }


      getdata(){
  this.httpProvider.getJsonData(this.endpoint).subscribe(
    result => {
      this.objectives=result;
      console.log("Objectives", JSON.stringify(result));
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}


goToOrganizationProfile(organizationID){
       this.navCtrl.push(OrganizationProfilePage, {
          organizationID: organizationID,
          OrgPageName: "Take Action"
    },  {animate:true,animation:'transition',duration:500,direction:'forward'});
     }


     goToActionPage(objectiveID){
       this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID,
          pageName: 'Take Action'
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }



 

 presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }




   share(title, imgURI){
       this.shareProvider.otherShare(title, imgURI);
     }

      getFavID($event, goal_id, action_type_id){
    console.log($event);

    
    this.httpProvider.getJsonData(this.favEndpoint+'?goal_id='+goal_id+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID).subscribe(
      result => {
        console.log("Aqui", result);
        
        if(result != "" ){
          this.removeFav(result[0].id);
          this.presentToast('You unliked it');
          $event.srcElement.style.backgroundColor = '#f2f2f2';
          $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
          
        }else{
         this.addToFav(goal_id, action_type_id);
          $event.srcElement.style.backgroundColor = '#296fb7';
          $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
          
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


 addToFav(goal_id, action_type_id){
   this.httpProvider.addFavorites(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
   this.presentToast('You liked it');
 }

 removeFav(recordID){
  this.httpProvider.unfollowOrganization(this.favEndpoint, recordID);
}

hideItem(objective_id, index){
        this.httpProvider.hideObjective(this.hide_enpoint, this.myrallyID, objective_id);
        (this.objectives).splice(index, 1);
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

     

}
