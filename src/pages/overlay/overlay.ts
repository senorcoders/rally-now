import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { FriendsactivityPage } from '../friendsactivity/friendsactivity';
import { OrganizationsPage } from '../organizations/organizations';
import { CandidatesPage } from '../candidates/candidates';
import { TakeactionPage } from '../takeaction/takeaction';

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

  goToCandidates(){
    this.navCtrl.push(CandidatesPage);
  }

  goToTakeAction(){
    this.navCtrl.push(TakeactionPage);
  }

        
}