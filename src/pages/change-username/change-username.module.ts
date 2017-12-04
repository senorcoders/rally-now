import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeUsernamePage } from './change-username';

@NgModule({
  declarations: [
    ChangeUsernamePage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeUsernamePage),
  ],
})
export class ChangeUsernamePageModule {}
