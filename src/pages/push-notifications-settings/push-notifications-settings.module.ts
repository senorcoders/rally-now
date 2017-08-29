import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushNotificationsSettingsPage } from './push-notifications-settings';

@NgModule({
  declarations: [
    PushNotificationsSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PushNotificationsSettingsPage),
  ],
})
export class PushNotificationsSettingsPageModule {}
