import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizationProfilePage } from './organization-profile';

@NgModule({
  declarations: [
    OrganizationProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationProfilePage),
  ],
})
export class OrganizationProfilePageModule {}
