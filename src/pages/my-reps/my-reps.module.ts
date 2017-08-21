import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRepsPage } from './my-reps';

@NgModule({
  declarations: [
    MyRepsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRepsPage),
  ],
})
export class MyRepsPageModule {}
