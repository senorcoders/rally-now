import { NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { HomeFiltersPage } from './home-filters';
import { FeedPage } from '../feed/feed';

@NgModule({
  declarations: [
    HomeFiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeFiltersPage),
  ],
})
export class HomeFiltersPageModule {
  constructor(public navCtrl: NavController) {}
 	 goToFeeds(){
  	this.navCtrl.push(FeedPage);
  }


}
