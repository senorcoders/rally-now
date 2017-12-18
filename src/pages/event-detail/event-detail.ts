import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { OrganizationProfilePage } from '../organization-profile/organization-profile';
import { SocialShareProvider } from '../../providers/social-share/social-share';



@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  eventID:any;
  endpoint:any = 'events/';
  title:any;
  event_time:any;
  description:any;
  image_url:any;
  locations:any;
  favEndpoint:any = 'actions';
  likeAction:any ='1e006561-8691-4052-bef8-35cc2dcbd54e';
  myrallyID:any;
  buttonColor:any;
  eventPageName:any;
  orgName:any;
  orgId:any;
  orgPhoto:any;
  rallies:any;
  likes:any;
  shares:any;
  testPhoto:any = 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08';
  eventLike:any = 'd5d1b115-dbb6-4894-8935-322c336ae951';
  likeendpoint:any = 'likes';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private httpProvider: UsersProvider,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    private shareProvider:SocialShareProvider) {
        this.eventID = navParams.get('eventID');
        this.eventPageName = navParams.get('eventPageName');
        console.log("Evento ID", navParams.get('eventID'));
        this.httpProvider.returnRallyUserId().then( user => {
          this.myrallyID = user.apiRallyID;
          this.getButtonColor();
          this.getdata();
        });
        

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.eventPageName);
  }

 


     getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.eventID).subscribe(
    result => {
      this.title = result.title;
      this.locations = result.locations;
      this.event_time = result.event_time;
      this.description = result.description;
      this.image_url = result.image_url;
      this.orgName = result.organization[0].name;
      this.orgId = result.organization_id;
      this.orgPhoto = result.organization[0].image_url;
      this.rallies = result.rallies;
      this.likes = result.likes;
      this.shares = result.shares;

    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

getButtonColor(){
  this.httpProvider.getJsonData(this.favEndpoint+'?event_id='+this.eventID+'&action_type_id='+this.likeAction+'&user_id='+this.myrallyID)
    .subscribe(
        result => {
          console.log("Resultado", result);
            if (result.length > 0){
              this.buttonColor = "#296fb7";
            }
            else{
              this.buttonColor = "#f2f2f2";
            }
        },
    err =>{
      console.error("Error : "+err);         
    } ,
    () => {
      console.log('getData completed');
      console.log("Color", this.buttonColor);

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




removeFav(recordID){
  this.httpProvider.unfollowOrganization(this.likeendpoint, recordID);
}


goToOrganizationProfile(organizationID){
  this.navCtrl.push(OrganizationProfilePage, {
     organizationID: organizationID,
     OrgPageName: this.title
}, {animate:true,animation:'transition',duration:500,direction:'forward'});
}
 

getLikeStatus($event, reference_id, like_type){
  this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
    result => {
      console.log("Aqui", result);
      
      if(result != "" ){
        this.removeFav(result[0].id);
        this.presentToast('You unliked it');
        $event.srcElement.style.backgroundColor = '#f2f2f2';
        $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
        $event.srcElement.innerText--;
        
      }else{
       this.addLike(reference_id, like_type);
       this.presentToast('You liked it');
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

addLike(reference_id, like_type){
  this.httpProvider.addLike(this.likeendpoint, reference_id, this.myrallyID, like_type);
}

shareController(title, imgURI, reference_id, like_type, $event) {
  const actionSheet = this.actionsheetCtrl.create({
    title: 'Share with',
    buttons: [
      {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          this.shareProvider.facebookShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
          $event.srcElement.innerText++;           
          this.presentToast('Objective shared!');
        }
      }, 
      {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          this.shareProvider.twitterShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
          $event.srcElement.innerText++;           
          this.presentToast('Objective shared!');
        }
      },
      {
        text: 'Others',
        icon: 'md-share',
        handler: () => {
          console.log('Archive clicked');
          this.shareProvider.otherShare(title, imgURI);
          this.addShareAction(reference_id, like_type);
          $event.srcElement.innerText++;           
          this.presentToast('Objective shared!');
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
  this.httpProvider.addLike(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
}


}
