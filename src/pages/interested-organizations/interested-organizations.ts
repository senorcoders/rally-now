import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UsersProvider } from '../../providers/users/users';
import { Http } from '@angular/http';
import { ORG } from '../../providers/organizations';
import { UserData } from '../../providers/user-data';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-interested-organizations',
  templateUrl: 'interested-organizations.html',
})
export class InterestedOrganizationsPage {

  organizations:any = ORG;
  enable:boolean = false;
  count:number= 0 ;
  buttonText:any = "Continue";
  followArray:any = [];
  organizationEndpoint:any = 'following_organizations';
  myrallyID:any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public af:AngularFireDatabase,
    private httpProvider:UsersProvider,
    public userData: UserData
    ) {
      console.log(ORG);
  }

  ionViewDidLoad() {
    this.getUID();
    console.log('ionViewDidLoad InterestedOrganizationsPage');
  }

  goToHome(){
    this.navCtrl.setRoot(TabsPage);
  }

    toggleAll(){
      this.organizations.forEach(org => {
          org.selected = this.enable;
      });
    }

    getState($event, id){
      console.log("DOM", $event);
      if($event._value === true){
          this.count++;
          this.buttonText = "Follow (" + this.count + ")";
          console.log(this.count);
          this.followArray.push(id);
          console.log(this.followArray);
      }else{
        this.count--;
        this.buttonText = "Follow (" + this.count + ")";
        let position = this.followArray.indexOf(id);
        console.log(position);  
        (this.followArray).splice(position, 1);
        console.log(this.followArray);      
      }
    }

    followOrganizations(){
        if(this.followArray.length > 0){

          this.followArray.forEach(org => {
              console.log(org);
              this.followOrg(org);
          });
          console.log("You can Follow");
          this.goToHome();
        }else{
          console.log("Just go home");
          this.goToHome();
        }
    }

    followOrg(organizationID){
      this.httpProvider.followOrganization(this.organizationEndpoint, this.myrallyID, organizationID );
    }

    getUID(){ 
      this.userData.getUid().then((uid) => {
        console.log(uid);
         this.af.database.ref('users/'+uid)
          .on('value', snapshot => {
            console.log("Username", snapshot.val());
            this.myrallyID = snapshot.val().apiRallyID;
        
           
          });
      });
    }
 

}
