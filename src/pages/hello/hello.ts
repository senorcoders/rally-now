import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChangeUsernamePage } from '../change-username/change-username';
import { InterestedOrganizationsPage } from '../interested-organizations/interested-organizations';
import { UsersProvider } from '../../providers/users/users';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { UserData } from '../../providers/user-data';


@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {
  username:any;
  endpoint:string = 'users/';
  displayName:any;
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public af:AngularFireDatabase,
    private httpProvider:UsersProvider,
    public userData: UserData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
    this.getUID(); 
    
  }

  changeUsername(){
    this.navCtrl.setRoot(ChangeUsernamePage);
  }

  followOrg(){
   
    this.navCtrl.setRoot(InterestedOrganizationsPage);
  }

  getUID(){
    this.userData.getUid().then((uid) => {
      console.log(uid);
       this.af.database.ref('users/'+uid)
        .on('value', snapshot => {
         
          this.username = snapshot.val().username;
          let nickname = snapshot.val().displayName.split(" ");
          this.displayName = nickname[0];
          
         
        });
    });
  }

}
