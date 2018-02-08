import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicFeedPage } from './public-feed';

@NgModule({
  declarations: [
    PublicFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicFeedPage),
  ],
})
export class PublicFeedPageModule {}
