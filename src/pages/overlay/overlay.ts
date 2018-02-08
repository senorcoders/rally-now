import { Component } from '@angular/core';
import { NavController, App, ViewController} from 'ionic-angular';
import { EventsPage } from '../events/events';
import { FriendsactivityPage } from '../friendsactivity/friendsactivity';
import { OrganizationsPage } from '../organizations/organizations';
import { CandidatesPage } from '../candidates/candidates';
import { TakeactionPage } from '../takeaction/takeaction';
import { FavoritesPage } from '../favorites/favorites';
import { FriendsRequestPage } from '../friends-request/friends-request';


@Component({
  selector: 'page-overlay',
  templateUrl: 'overlay.html'
})

export class OverlayPage {

  constructor(public navCtrl: NavController, private app:App, public viewCtrl:ViewController) {}
  
 	goToEvents() {
 
    this.navCtrl.push(EventsPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToFriendsActivity(){
  	this.navCtrl.push(FriendsactivityPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToOrganizations(){
  	this.navCtrl.push(OrganizationsPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToCandidates(){
    this.navCtrl.push(CandidatesPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToTakeAction(){
    this.navCtrl.push(TakeactionPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});

  }

  goToFavorites(){
    this.app.getRootNav().setRoot(FavoritesPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToRequests(){
  	this.navCtrl.push(FriendsRequestPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

        
}