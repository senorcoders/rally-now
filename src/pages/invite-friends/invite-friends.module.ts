import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteFriendsPage } from './invite-friends';

@NgModule({
  declarations: [
    InviteFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteFriendsPage),
  ],
})
export class InviteFriendsPageModule {}
