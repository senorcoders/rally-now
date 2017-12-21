import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRepresentativesPage } from './my-representatives';

@NgModule({
  declarations: [
    MyRepresentativesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRepresentativesPage),
  ],
})
export class MyRepresentativesPageModule {}
