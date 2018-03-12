import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicFollowersPage } from './public-followers';

@NgModule({
  declarations: [
    PublicFollowersPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicFollowersPage),
  ],
})
export class PublicFollowersPageModule {}
