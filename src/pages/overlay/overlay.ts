import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { FriendsactivityPage } from '../friendsactivity/friendsactivity';
import { OrganizationsPage } from '../organizations/organizations';

@Component({
  selector: 'page-overlay',
  templateUrl: 'overlay.html'
})

export class OverlayPage {

  constructor(public navCtrl: NavController) {}
  
 	goToEvents() {
 
    this.navCtrl.push(EventsPage);
  }

  goToFriendsActivity(){
  	this.navCtrl.push(FriendsactivityPage);
  }

  goToOrganizations(){
  	this.navCtrl.push(OrganizationsPage);
  }

        
}