import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyncContactsPage } from './sync-contacts';

@NgModule({
  declarations: [
    SyncContactsPage,
  ],
  imports: [
    IonicPageModule.forChild(SyncContactsPage),
  ],
})
export class SyncContactsPageModule {}
