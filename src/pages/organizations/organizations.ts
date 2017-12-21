import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, ToastController} from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { UsersProvider } from '../../providers/users/users';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { OrganizationActionPage } from '../organization-action/organization-action';


@IonicPage() 
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html',
})
export class OrganizationsPage {
  organizations: any;
  endpoint:string = 'my_organizations/';
  myApiRallyID:any;
 favEndpoint:any = 'actions';
   hide_enpoint:any = 'hide_objective';
likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
likeendpoint:any = 'likes';
shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
disable:boolean = false;




  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    private httpProvider:OrganizationsProvider,
    private rallyProvider:UsersProvider,
    public viewCtrl:ViewController,
    public actionSheetCtrl: ActionSheetController,
    private shareProvider:SocialShareProvider,
    public toastCtrl: ToastController,
    private photoViewer: PhotoViewer) {
    this.rallyProvider.returnRallyUserId()
      .then(user => {
        console.log(user);
        this.myApiRallyID = user.apiRallyID;
        this.getdata();
 
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationsPage');
  }

  ionViewWillEnter() {
        //this.viewCtrl.showBackButton(false);
    }

  
  
 goToHome(){
    this.navCtrl.setRoot(FeedPage);
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage);
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage);
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

     getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.myApiRallyID).subscribe(
    result => {
      this.organizations=result['My_Organizations'];
      console.log("Success : "+ result['My_Organizations']);
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
          OrgPageName: "My Organizations"
    });
     }

     goToActionPage(objectiveID){
       this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID,
          pageName: 'My Organizations'
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }

       


 presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }



  

    hideItem(objective_id, index){
        this.rallyProvider.hideObjective(this.hide_enpoint, this.myApiRallyID, objective_id);
        (this.organizations).splice(index, 1);
    }


     findInLoop(actions){
      if (actions != null){
        var found = actions.some(el => { 
          console.log(el);
            return el == this.myApiRallyID;
          
        });
        
        if (!found){
          return '#f2f2f2';
          
        }else{
          return '#296fb7';
          
        }
      }
   
  }




removeFav(recordID){
  this.rallyProvider.unfollowOrganization(this.favEndpoint, recordID);
  this.rallyProvider.removeFollowRecordID(recordID, 'favorites');
}

showPhotoViewer(path){
  this.photoViewer.show(path);
}


getLikeStatus($event, reference_id, like_type){
  this.disable = true;
  this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myApiRallyID).subscribe(
    result => {
      console.log("Aqui", result);
      
      if(result != "" ){
        this.removeFav(result[0].id);
        this.presentToast('You unliked it');
        $event.srcElement.style.backgroundColor = '#f2f2f2';
        $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
        $event.srcElement.lastChild.data++;
        this.disable = false;
        
      }else{
       this.addLike(reference_id, like_type);
       this.presentToast('You liked it');
        $event.srcElement.style.backgroundColor = '#296fb7';
        $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
        $event.srcElement.lastChild.data++;
        this.disable = false;
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

addLike(reference_id, like_type){
  this.rallyProvider.addLike(this.likeendpoint, reference_id, this.myApiRallyID, like_type);
}

shareController(title, imgURI, reference_id, like_type, $event) {
  this.disable = true;
  const actionSheet = this.actionSheetCtrl.create({
    title: 'Share with',
    buttons: [
      {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          this.shareProvider.facebookShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
          $event.srcElement.lastChild.data++;
          this.presentToast('Objective shared!');
          this.disable = false;
        }
      }, 
      {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          this.shareProvider.twitterShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
          $event.srcElement.lastChild.data++;
          this.presentToast('Objective shared!');
          this.disable = false;
        }
      },
      {
        text: 'Others',
        icon: 'md-share',
        handler: () => {
          console.log('Archive clicked');
          this.shareProvider.otherShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
          $event.srcElement.lastChild.data++;
          this.presentToast('Objective shared!');
          this.disable = false;
        }
      },
      {
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

addShareAction(goal_id, action_type_id){
  this.rallyProvider.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myApiRallyID);
}
}
