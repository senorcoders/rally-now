import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailFeedBackPage } from './email-feed-back';

@NgModule({
  declarations: [
    EmailFeedBackPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailFeedBackPage),
  ],
})
export class EmailFeedBackPageModule {}
