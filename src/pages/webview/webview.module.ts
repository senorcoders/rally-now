import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebviewPage } from './webview';

@NgModule({
  declarations: [
    WebviewPage,
  ],
  imports: [
    IonicPageModule.forChild(WebviewPage),
  ],
})
export class WebviewPageModule {}
