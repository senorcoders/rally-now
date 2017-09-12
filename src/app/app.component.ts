import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
//import { FeedPage } from '../pages/feed/feed';
// import {
//   Push,
//   PushToken
// } from '@ionic/cloud-angular';


import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = HomePage;


    constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController, private push: Push) {
          platform.ready().then((readySource) => {

            console.log("Platform Ready from ", readySource);
            statusBar.styleDefault();
            //splashScreen.hide();
            this.pushsetup();
           
          
        });
    }

      //this.pushsetup();
            // to check if we have permission
            // this.push.hasPermission()
            //     .then((res: any) => {

            //         if (res.isEnabled) {
            //             console.log('We have permission to send push notifications');
            //         } else {
            //             console.log('We do not have permission to send push notifications');
            //         }

            //     });

            // const options: PushOptions = {
            //     android: {
            //         senderID: '1017475098724'
            //     },
            //     ios: {
            //         alert: 'true',
            //         badge: true,
            //         sound: 'false'
            //     },
            //     windows: {},
            //     browser: {
            //         pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            //     }
            // };

            // const pushObject: PushObject = this.push.init(options);
            // pushObject.on('notification').subscribe((notification: any) => {
            //     if (notification.additionalData.foreground) {
            //         let youralert = this.alertCtrl.create({
            //             title: 'New Push notification',
            //             message: notification.message
            //         });
            //         youralert.present();
            //     }
            // });

            // pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

            // pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

            // pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

    pushsetup() {
      const options: PushOptions = {
       android: {
           senderID: '1017475098724'
       },
       ios: {
           alert: 'true',
           badge: true,
           sound: 'false'
       },
       windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        let youralert = this.alertCtrl.create({
          title: 'New Push notification',
          message: notification.message
        });
        youralert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => {
      console.log("registration", registration);
       //do whatever you want with the registration ID
    });

    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
    }


}