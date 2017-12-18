import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdressModalPage } from './adress-modal';

@NgModule({
  declarations: [
    AdressModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdressModalPage),
  ],
})
export class AdressModalPageModule {}
