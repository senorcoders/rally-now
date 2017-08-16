import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import firebase from  'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAbPJa7ktiKO0WUlF-Au-Ev4WG4Eih7SPQ",
  authDomain: "api-project-237098324740.firebaseapp.com",
  databaseURL: "https://api-project-237098324740.firebaseio.com",
  projectId: "api-project-237098324740",
  storageBucket: "api-project-237098324740.appspot.com",
  messagingSenderId: "237098324740"
}); 

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
