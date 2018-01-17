import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepresentativeProfilePage } from './representative-profile';

@NgModule({
  declarations: [
    RepresentativeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(RepresentativeProfilePage),
  ],
})
export class RepresentativeProfilePageModule {}
