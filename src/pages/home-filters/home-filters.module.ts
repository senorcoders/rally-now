import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeFiltersPage } from './home-filters';

@NgModule({
  declarations: [
    HomeFiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeFiltersPage),
  ],
})
export class HomeFiltersPageModule {}
