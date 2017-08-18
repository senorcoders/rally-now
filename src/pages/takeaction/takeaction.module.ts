import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakeactionPage } from './takeaction';

@NgModule({
  declarations: [
    TakeactionPage,
  ],
  imports: [
    IonicPageModule.forChild(TakeactionPage),
  ],
})
export class TakeactionPageModule {}
