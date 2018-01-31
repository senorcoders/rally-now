import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InterestedOrganizationsPage } from '../interested-organizations/interested-organizations';
import { UserData } from '../../providers/user-data';
import { UsersProvider } from '../../providers/users/users';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { ChangePasswordPageModule } from '../change-password/change-password.module';


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
  warning:string;

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

  validateUsername(){
    var format = /[ !@#$%^&*()+\=\[\]{};':"\\|,<>\/?]/;
    var format2 = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var firstLetter = this.username.charAt(0);
    var lastChar = this.username[this.username.length -1];


    if(this.username.length < 3 ){
      this.warning = "Username should contain at least 3 characters long";
      console.log("Username should contain at least 3 characters long");
      this.enable = false;
      
    }else if(this.username.length > 15){
      this.warning = "Username should contain no more than 15 characters long";
      this.enable = false;
    }else if (/\s/.test(this.username)) {
      this.warning = "Username should not contain spaces";
      this.enable = false;
    }else if(format.test(this.username) == true){
      this.warning = "Username should not contain special characters";
      this.enable = false;
    }else if(format2.test(firstLetter) == true){
      this.warning = "Username should not start with -, _  or .";
      this.enable = false;
    }else if(format2.test(lastChar) == true){
      this.warning = "Username should not end with -, _  or .";
      this.enable = false;
    }else{
      this.checkAvailability();
    }
  }

  checkAvailability(){
      this.httpProvider.getJsonData(this.endpoint + '?username=' + this.username).subscribe(
        result =>{
          if(result != ""){
            console.log('Username already exists');
            this.enable = false;
            this.warning = "username already taken";
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
