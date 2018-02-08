import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFriendsPage } from './my-friends';

@NgModule({
  declarations: [
    MyFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFriendsPage),
  ],
})
export class MyFriendsPageModule {}
