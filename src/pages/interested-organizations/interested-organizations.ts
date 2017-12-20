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
  enable:boolean = true;
  count:number= 0 ;
  buttonText:any = "Continue";
  followArray:any = ["5242fadc-4a05-43f3-afa8-9a421984c281", "c638f9c4-4a81-48d9-8664-6acd10058eaf", "e233339d-8f0a-405f-be52-b9a3d1d09b72",
  "f2b1f2dc-2b66-4412-b5e0-57aea34fb040", "993a6240-849b-4cc8-90b0-bd7574570430", "9ff402a5-daf1-45c7-9f50-adcb899649e4",
  "fa55c654-8396-42c1-aefa-d69283719936", "fd79e7bb-6cea-487b-8a7f-c6f5194b8ec9", "81b79228-bb12-4b95-81b2-604bcfa50548"];
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
      this.count = 9;
      this.buttonText = "Follow (" + this.count + ")";
      console.log(this.followArray);

  }

  ionViewDidLoad() {
    this.getUID();
    console.log('ionViewDidLoad InterestedOrganizationsPage');
  }

  goToHome(){
    this.navCtrl.setRoot(TabsPage);
  }

    toggleAll(){
      console.log(this.count);
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
        let position = this.followArray.indexOf(id);
        console.log(position);  
        (this.followArray).splice(position, 1);
        console.log(this.followArray); 
        console.log("Count", this.count);
        if (this.count < 1){
          this.buttonText = "Next";

        }else{
          this.buttonText = "Follow (" + this.count + ")";

        }
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
