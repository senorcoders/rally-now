import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowedOrganizationsPage } from './followed-organizations';

@NgModule({
  declarations: [
    FollowedOrganizationsPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowedOrganizationsPage),
  ],
})
export class FollowedOrganizationsPageModule {}
