import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InterestedOrganizationsPage } from '../interested-organizations/interested-organizations';
import { UserData } from '../../providers/user-data';
import { UsersProvider } from '../../providers/users/users';
import { AngularFireDatabase } from 'angularfire2/database/database';


@IonicPage()
@Component({
  selector: 'page-change-username',
  templateUrl: 'change-username.html',
})
export class ChangeUsernamePage {
  username:any;
  endpoint:string = 'users/';
  userID:any;
  uid:any;
  enable:boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public af:AngularFireDatabase,
    private httpProvider:UsersProvider,
    public userData: UserData
  ) {
  }

  ionViewDidLoad() {
    this.getUID();
    console.log('ionViewDidLoad ChangeUsernamePage');
  }

  followOrg(){
    this.af.database.ref('users/'+this.uid).update({ username: this.username });
    this.httpProvider.updateUsername(this.endpoint + this.userID, this.username);
    this.navCtrl.setRoot(InterestedOrganizationsPage);
  }

  checkAvailability(){
      this.httpProvider.getJsonData(this.endpoint + '?username=' + this.username).subscribe(
        result =>{
          if(result != ""){
            console.log('Username already exists');
            this.enable = false;
          }else{
            console.log("Avaible!!");
            this.enable = true;
            this.followOrg();
          }
        }
      )
  }

  getUID(){ 
    this.userData.getUid().then((uid) => {
      console.log(uid);
       this.af.database.ref('users/'+uid)
        .on('value', snapshot => {
          console.log("Username", snapshot.val());
          this.username = snapshot.val().username;
          this.userID = snapshot.val().apiRallyID;
          this.uid = snapshot.val().uid;
         
        });
    });
  }

}
