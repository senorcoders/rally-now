import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizationActionPage } from './organization-action';

@NgModule({
  declarations: [
    OrganizationActionPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationActionPage),
  ],
})
export class OrganizationActionPageModule {}
