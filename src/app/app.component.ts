import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { UserData } from '../providers/user-data';
import { FeedPage } from '../pages/feed/feed';
import { NotificationProvider } from '../providers/notification/notification';

//import { FCM } from '@ionic-native/fcm';



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
    	public userData: UserData,
      noti: NotificationProvider
      //private fcm: FCM
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
            noti.init();


        });


            
    }
}