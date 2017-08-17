import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkedAccountsPage } from './linked-accounts';

@NgModule({
  declarations: [
    LinkedAccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkedAccountsPage),
  ],
})
export class LinkedAccountsPageModule {}
