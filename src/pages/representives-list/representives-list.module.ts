import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepresentivesListPage } from './representives-list';

@NgModule({
  declarations: [
    RepresentivesListPage,
  ],
  imports: [
    IonicPageModule.forChild(RepresentivesListPage),
  ],
})
export class RepresentivesListPageModule {}
