import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsResultPage } from './events-result';

@NgModule({
  declarations: [
    EventsResultPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsResultPage),
  ],
})
export class EventsResultPageModule {}
