import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsRequestPage } from './friends-request';

@NgModule({
  declarations: [
    FriendsRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsRequestPage),
  ],
})
export class FriendsRequestPageModule {}
