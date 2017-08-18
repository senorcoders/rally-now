import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { AlertsPage } from '../pages/alerts/alerts';
import { ProfilePage } from '../pages/profile/profile';
import { OverlayPage } from '../pages/overlay/overlay';
import { EventsPage } from '../pages/events/events';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { FriendsactivityPage } from '../pages/friendsactivity/friendsactivity';
import { CandidatesPage } from '../pages/candidates/candidates';
import { TakeactionPage } from '../pages/takeaction/takeaction';
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Push } from '@ionic-native/push';



var config = {
    apiKey: "AIzaSyCji0mJw_7CYYcVupmz3TDP0Q6ABOOpcbE",
    authDomain: "test-144e3.firebaseapp.com",
    databaseURL: "https://test-144e3.firebaseio.com",
    projectId: "test-144e3",
    storageBucket: "test-144e3.appspot.com",
    messagingSenderId: "924920604639"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        FeedPage,
        AlertsPage,
        ProfilePage,
        OverlayPage,
        EventsPage,
        FriendsactivityPage,
        OrganizationsPage,
        CandidatesPage,
        TakeactionPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        FeedPage,
        AlertsPage,
        ProfilePage,
        OverlayPage,
        EventsPage,
        FriendsactivityPage,
        OrganizationsPage,
        CandidatesPage,
        TakeactionPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Push,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}