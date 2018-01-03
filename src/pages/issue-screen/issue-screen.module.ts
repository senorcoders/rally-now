import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IssueScreenPage } from './issue-screen';

@NgModule({
  declarations: [
    IssueScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(IssueScreenPage),
  ],
})
export class IssueScreenPageModule {}
