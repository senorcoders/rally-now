import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';

/**
 * Generated class for the HomeFiltersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-filters',
  templateUrl: 'home-filters.html',
})
export class HomeFiltersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	goToFeed() {

    this.navCtrl.push(FeedPage);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeFiltersPage');
  }

}
