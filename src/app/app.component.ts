import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { UserData } from '../providers/user-data';
import { FeedPage } from '../pages/feed/feed';
// import {
//   Push,
//   PushToken
// } from '@ionic/cloud-angular';


//import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;


    constructor(
    	public platform: Platform, 
    	statusBar: StatusBar, 
    	splashScreen: SplashScreen, 
    	public alertCtrl: AlertController,
    	public userData: UserData
    	) {
       this.userData.hasLoggedIn().then((hasLoggedIn) => {
      
      if(hasLoggedIn){
        this.rootPage = FeedPage;
      }
      else{
        this.rootPage = HomePage;
      }
    });
          platform.ready().then((readySource) => {

            console.log("Platform Ready from ", readySource);
            statusBar.styleDefault();
            //splashScreen.hide();
           
          
        });
    }

      

  


}