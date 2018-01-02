import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizationFollowersPage } from './organization-followers';

@NgModule({
  declarations: [
    OrganizationFollowersPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationFollowersPage),
  ],
})
export class OrganizationFollowersPageModule {}
