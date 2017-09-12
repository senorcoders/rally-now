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
 
    this.app.getRootNav().setRoot(EventsPage);
     this.viewCtrl.dismiss();
  }

  goToFriendsActivity(){
  	this.app.getRootNav().setRoot(FriendsactivityPage);
    this.viewCtrl.dismiss();
  }

  goToOrganizations(){
  	this.app.getRootNav().setRoot(OrganizationsPage);
    this.viewCtrl.dismiss();
  }

  goToCandidates(){
    this.app.getRootNav().setRoot(CandidatesPage);
    this.viewCtrl.dismiss();
  }

  goToTakeAction(){
    this.app.getRootNav().setRoot(TakeactionPage);
        this.viewCtrl.dismiss();

  }

  goToFavorites(){
    this.app.getRootNav().setRoot(FavoritesPage);
    this.viewCtrl.dismiss();
  }

        
}