import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicProfilePage } from './public-profile';

@NgModule({
  declarations: [
    PublicProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PublicProfilePage),
  ],
})
export class PublicProfilePageModule {}
