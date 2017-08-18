import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { FriendsRequestPage } from '../friends-request/friends-request';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  constructor(public navCtrl: NavController) {}
 	 goToSettings(){
  	this.navCtrl.push(SettingsPage);
  }

  goToRequests(){
  	this.navCtrl.push(FriendsRequestPage);
  }

        
}