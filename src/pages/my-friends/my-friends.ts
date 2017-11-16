import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-my-friends',
  templateUrl: 'my-friends.html',
})
export class MyFriendsPage {

  endpoint:any = '/my_friends/';
  currentRallyID:any;
  friends:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: OrganizationsProvider,
    private usersProvider: UsersProvider) {
      this.usersProvider.returnRallyUserId().then( user => {
        this.currentRallyID = user.apiRallyID;
        this.getFriends();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFriendsPage');
  }

  getFriends(){
    this.httpProvider.getJsonData(this.endpoint+this.currentRallyID)
      .subscribe(
        
        result => {
          console.log(JSON.stringify(result));
          
            this.friends = result['my_friends'];
        }
      );
  }

}
