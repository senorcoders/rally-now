import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicFollowingPage } from './public-following';

@NgModule({
  declarations: [
    PublicFollowingPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicFollowingPage),
  ],
})
export class PublicFollowingPageModule {}
