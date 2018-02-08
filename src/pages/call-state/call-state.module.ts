import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallStatePage } from './call-state';

@NgModule({
  declarations: [
    CallStatePage,
  ],
  imports: [
    IonicPageModule.forChild(CallStatePage),
  ],
})
export class CallStatePageModule {}
