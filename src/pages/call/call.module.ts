import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallPage } from './call';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CallPage,
  ],
  imports: [
    IonicPageModule.forChild(CallPage),
    PipesModule   

  ],
})
export class CallPageModule {}
