import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizationsListPage } from './organizations-list';

@NgModule({
  declarations: [
    OrganizationsListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationsListPage),
  ],
})
export class OrganizationsListPageModule {}
