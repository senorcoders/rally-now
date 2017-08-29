import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterEventsPage } from './filter-events';

@NgModule({
  declarations: [
    FilterEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterEventsPage),
  ],
})
export class FilterEventsPageModule {}
