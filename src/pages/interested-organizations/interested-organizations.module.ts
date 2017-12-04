import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterestedOrganizationsPage } from './interested-organizations';

@NgModule({
  declarations: [
    InterestedOrganizationsPage,
  ],
  imports: [
    IonicPageModule.forChild(InterestedOrganizationsPage),
  ],
})
export class InterestedOrganizationsPageModule {}
