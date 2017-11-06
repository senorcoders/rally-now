import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowedCandidatesPage } from './followed-candidates';

@NgModule({
  declarations: [
    FollowedCandidatesPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowedCandidatesPage),
  ],
})
export class FollowedCandidatesPageModule {}
