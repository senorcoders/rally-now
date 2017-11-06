import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreaksHistoryPage } from './streaks-history';

@NgModule({
  declarations: [
    StreaksHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(StreaksHistoryPage),
  ],
})
export class StreaksHistoryPageModule {}
