import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CellularDataUsagePage } from './cellular-data-usage';

@NgModule({
  declarations: [
    CellularDataUsagePage,
  ],
  imports: [
    IonicPageModule.forChild(CellularDataUsagePage),
  ],
})
export class CellularDataUsagePageModule {}
