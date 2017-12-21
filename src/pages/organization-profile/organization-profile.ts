import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { OrganizationActionPage } from '../organization-action/organization-action';
import { SocialShareProvider } from '../../providers/social-share/social-share';


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
  OrgPageName:any;
  data:any;
  posts:any;
  followers:any;
  goalLike:any = 'ea9bd95e-128c-4a38-8edd-938330ad8b2d';
  likeendpoint:any = 'likes';
  shareAction:any = '875b4997-f4e0-4014-a808-2403e0cf24f0';
  disable:boolean = false;



  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private httpProvider:UsersProvider,
    private orgProvider:OrganizationsProvider,
  	public toastCtrl: ToastController,
    private db: AngularFireDatabase,
    public actionSheetCtrl: ActionSheetController,
    public viewCtrl:ViewController,
    private shareProvider:SocialShareProvider) {
  	this.organizationID = navParams.get('organizationID');
    this.OrgPageName = navParams.get('OrgPageName');

    this.httpProvider.returnRallyUserId().then(user => {
      this.myrallyID = user.apiRallyID;
        this.getdata();
    this.checkOrganizationStatus();

    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationProfilePage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText(this.OrgPageName);
  }

  getdata(){
  this.orgProvider.getJsonData(this.endpoint + this.organizationID).subscribe(
    result => {
      console.log(result);
      this.data=result.organization[0];
      this.name=result.organization[0]['name'];
      this.description=result.organization[0]['description'];
      this.short_desc=result.organization[0]['short_desc'];
      this.dataID=result.organization[0]['id'];
      this.objectives = result.objectives;
      this.posts = result.organization[0]['objectives_count'];
      this.followers = result.organization[0]['follower_count'];
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
      this.httpProvider.followOrganization(this.organizationEndpoint, this.myrallyID, organizationID );
    }

    getOrganizationFollowRecordID(){
        this.httpProvider.getJsonData(this.organizationEndpoint+'?follower_id='+this.myrallyID+'&organization_id='+this.organizationID).subscribe(
    result => {
      console.log("Delete ID : "+ result[0].id);
      this.unfollow(result[0].id);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    });
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




  

    hideItem(objective_id, index){
        this.httpProvider.hideObjective(this.hide_enpoint, this.myrallyID, objective_id);
        (this.objectives).splice(index, 1);
    }

     findInLoop(actions){
      if (actions != null){
        var found = actions.some(el => { 
          console.log(el);
            return el == this.myrallyID;
          
        });
        
        if (!found){
          return '#f2f2f2';
          
        }else{
          return '#296fb7';
          
        }
      }
   
  }




removeFav(recordID){
  this.httpProvider.removeItem(this.likeendpoint, recordID).subscribe(res => {
    console.log(res);
    this.disable = false;

  }, err =>{
    console.log(err);
  });
 this.httpProvider.removeFollowRecordID(recordID, 'favorites');
}

goToActionPage(objectiveID){
       this.navCtrl.push(OrganizationActionPage, {
          objectiveID: objectiveID,
          pageName: this.name
    }, {animate:true,animation:'transition',duration:500,direction:'forward'});
     }


     getLikeStatus($event, reference_id, like_type){
       this.disable = true;
      this.httpProvider.getJsonData(this.likeendpoint+'?reference_id='+reference_id+'&user_id='+this.myrallyID).subscribe(
        result => {
          console.log("Aqui", result);
          
          if(result != "" ){
            this.removeFav(result[0].id);
            this.presentToast('You unliked it');
            $event.srcElement.style.backgroundColor = '#f2f2f2';
            $event.srcElement.offsetParent.style.backgroundColor = '#f2f2f2';
            $event.srcElement.lastChild.data--;
            
          }else{
           this.addLike(reference_id, like_type);
           this.presentToast('You liked it');
            $event.srcElement.style.backgroundColor = '#296fb7';
            $event.srcElement.offsetParent.style.backgroundColor = '#296fb7';
            $event.srcElement.lastChild.data++;
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
      this.httpProvider.addLike(this.likeendpoint, reference_id, this.myrallyID, like_type).subscribe(
          response =>{
              console.log(response);
              this.disable = false;
          });
    
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
              $event.srcElement.innerText++;           
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
      this.httpProvider.addLike(this.favEndpoint, goal_id, action_type_id, this.myrallyID);
    }
}
