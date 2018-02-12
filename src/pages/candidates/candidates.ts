import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, ModalController, ToastController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { UsersProvider } from '../../providers/users/users';
import { RepresentativeProfilePage } from '../representative-profile/representative-profile';
import { ThanksPage } from '../thanks/thanks';
import { SocialShareProvider } from '../../providers/social-share/social-share';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser';



@IonicPage()
@Component({
  selector: 'page-candidates',
  templateUrl: 'candidates.html',
})
export class CandidatesPage {

  endpoint:any = 'my_representatives/';
  myRallyID:any;
  public records:any = [];
  private start:number=1;
  likeendpoint:any = 'likes';
  tweetLike:any = 'ab860ccb-9713-49e5-b844-34d18f92af21';
  favEndpoint:any = 'actions';
  disable:boolean = false;
  organizationEndpoint:any = 'following_organizations';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  loader:boolean = false;
  enablePlaceholder:boolean = true;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public viewCtrl:ViewController,
    private httpProvider: OrganizationsProvider,
    private userProv: UsersProvider,
    public actionSheetCtrl: ActionSheetController,
    private shareProvider:SocialShareProvider,
    public modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private inAppBrowser: InAppBrowser,
    public toastCtrl: ToastController
    ) {
      this.enablePlaceholder = true;

      this.userProv.returnRallyUserId().then(user => {
        this.myRallyID = user.apiRallyID;
        this.getdata();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatesPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText("My Feeds");
  }

  getdata(){
    
  

  return new Promise(resolve => {
    this.httpProvider.loadHome(this.endpoint + this.myRallyID + '/', this.start)
      .then(data => {
        console.log("rep Tweets", data);
        this.getArray(data['Reps_Tweets']);
          
        resolve(true);
        this.enablePlaceholder = false;
        this.loader = false;

      });
  });
} 

    getArray(array){
      // console.log(array);
      for(let person of array) {
        // console.log(person);
        this.records.push(person);
        // console.log("Records", this.records);
      }

    }

    findInLoop(actions){
      if (actions != null){
        var found = actions.some(el => { 
            return el == this.myRallyID;
          
        });
        
        if (!found){
          return '#f2f2f2';
          
        }else{
          return '#296fb7';
          
        }
      }
  
    }

    getIcon(actions){
      if (actions != null){
        var found = actions.some(el => { 
            return el == this.myRallyID;
          
        });
        
        if (!found){
          return 'md-heart-outline';
          
        }else{
          return 'md-heart';
          
        }
      }
  
    }
  
  
    getColor(actions){
      if (actions != null){
        var found = actions.some(el => { 
            return el == this.myRallyID;
          
        });
        
        if (!found){
          return '#b6b6b6';
          
        }else{
          return '#f2f2f2';
          
        }
      }
  
    }
  

    tweetOrgEllipsisController(name, orgID, desc, followers){
      const actionSheet = this.actionSheetCtrl.create({
        buttons: [
        {
          text: 'Share this event via...',
          handler: () => {
            console.log("test");
            this.shareProvider.otherShare(name, desc);
    
          }
        }, 
        {
          text: 'Turn on/off notifications for ' + name,
          handler: () => {
            console.log("test");
    
          }
        },
        {
          text: this.findInLoopTweet(followers) + ' ' + name,
          handler: () => {
            this.orgStatus(orgID);
            console.log("test");
    
          }
        },
        {
          text: 'Report',
          role: 'destructive',
          handler: () => {
            console.log("test");
            this.shareProvider.shareViaEmail();
    
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

    goToRepProfile(repID){
      this.navCtrl.push(RepresentativeProfilePage, {repID: repID}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    }

    openWebpage(username, tweetID) {
      var url:string = 'https://twitter.com/' + username + '/status/' + tweetID;
      const options: InAppBrowserOptions = {
        zoom: 'no'
      }
  
      // Opening a URL and returning an InAppBrowserObject
      const browser = this.inAppBrowser.create(url, '_blank', options);
  
     // Inject scripts, css and more with browser.X
    }

    getLikeStatus($event, reference_id, like_type, likes){
      this.disable = true;

      this.userProv.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myRallyID).subscribe(
        result => {
          console.log($event);
          console.log("Aqui", $event.srcElement.lastChild.data);
          
          if(result != "" ){
            this.removeFav(result[0].id);
            this.presentToast('You unliked it');
            $event.srcElement.style.backgroundColor = '#f2f2f2';
            $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
            $event.srcElement.lastChild.data--;
            $event.srcElement.children[0].className = 'icon icon-md ion-md-heart-outline';
            $event.srcElement.style.color = '#b6b6b6';
            
          }else{
           this.addLike(reference_id, like_type);
           this.presentToast('You liked it');
            $event.srcElement.style.backgroundColor = '#296fb7';
            $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
            $event.srcElement.lastChild.data++;
            $event.srcElement.children[0].className = 'icon icon-md ion-md-heart';
            $event.srcElement.style.color = '#f2f2f2';
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
      this.userProv.addLike(this.likeendpoint, reference_id, this.myRallyID, like_type).subscribe(
        response =>{
            console.log(response);
            this.disable = false;
        });

    }

    removeFav(recordID){
      this.userProv.removeItem(this.likeendpoint, recordID).subscribe(res => {
        console.log(res);
        this.disable = false;
    
      }, err =>{
        console.log(err);
      });
      this.userProv.removeFollowRecordID(recordID, 'favorites');
    
    }

    presentToast(message) {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }


    shareController(title, imgURI, reference_id, like_type, $event) {
      this.disable = true;

   const actionSheet = this.actionSheetCtrl.create({
     title: 'Share to where?',
     buttons: [ 
       {
         text: 'Facebook',
         handler: () => {
           this.shareProvider.facebookShare(title, imgURI);
           this.addShareAction(reference_id, like_type);
           $event.path[1].lastChild.data++;
           this.presentToast('Objective shared!');
           this.disable = false;
           this.streakModal();
 
         }
       }, 
       {
         text: 'Twitter',
         handler: () => {
           this.shareProvider.twitterShare(title, imgURI).then(() => {
            console.log("twitter: Success");
            this.addShareAction(reference_id, like_type);
            $event.path[1].lastChild.data++;
            this.presentToast('Objective shared!');
           this.disable = false;
           this.streakModal();
          }).catch((error) => {
            console.error("shareViaWhatsapp: failed", error);
            this.disable = false;

          });
           

         }
       },
      //  {
      //   text: 'Copy Link',
      //   handler: () => {
      //     this.disable = false;

      //   }
      // },
      // {
      //   text: 'SMS Message',
      //   handler: () => {
      //     this.presentToast('Objective shared!');
      //     this.disable = false;

      //   }
      // },
      // {
      //   text: 'Email',
      //   handler: () => {
          
      //     this.presentToast('Objective shared!');
      //     this.disable = false;

      //   }
      // },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
           this.disable = false;

         }
       }
     ]
   });

   actionSheet.present();
 }

 streakModal() {
  let modal = this.modalCtrl.create(ThanksPage);
  modal.present();
}

addShareAction(goal_id, action_type_id){
  this.userProv.addShareAction(this.favEndpoint, goal_id, action_type_id, this.myRallyID);
}

findInLoopTweet(actions){
  if (actions != null){
    var found = actions.some(el => { 
        return el == this.myRallyID;
      
    });
    
    if (!found){
      return 'Follow';
      
    }else{
      return 'Unfollow';
      
    }
  }

}

orgStatus(orgID){
  this.userProv.getJsonData(this.organizationEndpoint+'?follower_id='+this.myRallyID+'&organization_id='+orgID).subscribe(
        result => {
          if(result != ""){
             this.unfollowOrg(result[0].id, orgID);
             console.log("Unfollow");
          }else{
            console.log("Follow");
            this.followOrg(orgID);
          }
        },
        err =>{
        console.error("Error : "+err);
        } ,
        () => {
        console.log('getData completed');
        });
        }

        unfollowOrg(recordID, orgID){

          this.userProv.unfollowOrganization(this.organizationEndpoint, recordID);
          this.userProv.removeFollowRecordID(orgID, 'organizations');
          this.presentToast("You're not following this organization anymore");
        }

        followOrg(organizationID){
          this.userProv.followOrganization(this.organizationEndpoint, this.myRallyID, organizationID );
          this.presentToast("You're now following this organization");

        }

        doRefresh(refresher) {
          this.records = [];
          // this.loading = this.loadingCtrl.create({
          //   spinner: 'hide',
          //   content: this.safeSvg,
          //   }); 
          //   this.loading.present();
          this.loader = true;
          this.getdata();
        
            setTimeout(() => {
              console.log('Async operation has ended');
              refresher.complete();
            }, 2000);
          } 
  

}
