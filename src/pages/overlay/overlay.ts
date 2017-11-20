import { Component } from '@angular/core';
import { NavController, App, ViewController} from 'ionic-angular';
import { EventsPage } from '../events/events';
import { FriendsactivityPage } from '../friendsactivity/friendsactivity';
import { OrganizationsPage } from '../organizations/organizations';
import { CandidatesPage } from '../candidates/candidates';
import { TakeactionPage } from '../takeaction/takeaction';
import { FavoritesPage } from '../favorites/favorites';


@Component({
  selector: 'page-overlay',
  templateUrl: 'overlay.html'
})

export class OverlayPage {

  constructor(public navCtrl: NavController, private app:App, public viewCtrl:ViewController) {}
  
 	goToEvents() {
 
    this.navCtrl.push(EventsPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
     this.viewCtrl.dismiss();
  }

  goToFriendsActivity(){
  	this.navCtrl.push(FriendsactivityPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    this.viewCtrl.dismiss();
  }

  goToOrganizations(){
  	this.navCtrl.push(OrganizationsPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    this.viewCtrl.dismiss();
  }

  goToCandidates(){
    this.navCtrl.push(CandidatesPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    this.viewCtrl.dismiss();
  }

  goToTakeAction(){
    this.navCtrl.push(TakeactionPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
        this.viewCtrl.dismiss();

  }

  goToFavorites(){
    this.app.getRootNav().setRoot(FavoritesPage, {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
    this.viewCtrl.dismiss();
  }

        
}