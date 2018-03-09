import { Component, NgZone } from '@angular/core';
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
    public userData: UserData,
    private readonly ngZone: NgZone,
  ) {
    this.getUID(); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
    
  }

  changeUsername(){
    this.ngZone.run(() =>    this.navCtrl.setRoot(ChangeUsernamePage)  );
  }

  followOrg(){
    this.ngZone.run(() =>     this.navCtrl.setRoot(InterestedOrganizationsPage));
   
  }

  getUID(){
    this.userData.getUid().then((uid) => {
      console.log("My Firebase ID", uid);
       this.af.database.ref('users/'+uid)
        .once('value').then(snapshot => {
          console.log("User from Firebase", snapshot);
           this.username = snapshot.val().username;
           let nickname = snapshot.val().displayName.split(" ");
           this.displayName = nickname[0];   
         }); 
    });
  }

}
