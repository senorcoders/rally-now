import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
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
import { FavoritesPage } from '../pages/favorites/favorites';
import { FriendsRequestPage } from '../pages/friends-request/friends-request';
import { SettingsPage } from '../pages/settings/settings';
import { LinkedAccountsPage } from '../pages/linked-accounts/linked-accounts';
import { FindFriendsPage } from '../pages/find-friends/find-friends';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { HomeFiltersPage } from '../pages/home-filters/home-filters';
import { MyRepsPage } from '../pages/my-reps/my-reps';
import { StreaksHistoryPage } from '../pages/streaks-history/streaks-history';
import { FollowedOrganizationsPage } from '../pages/followed-organizations/followed-organizations';
import { FollowedCandidatesPage } from '../pages/followed-candidates/followed-candidates';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { PushNotificationsSettingsPage } from '../pages/push-notifications-settings/push-notifications-settings';
import { CallPage } from '../pages/call/call';
import { ReportProblemPage } from '../pages/report-problem/report-problem';
import { UnlinkTwitterPage } from '../pages/unlink-twitter/unlink-twitter';
import { FilterEventsPage } from '../pages/filter-events/filter-events';
import { UnlinkFacebookPage } from '../pages/unlink-facebook/unlink-facebook';
import { RatePage } from '../pages/rate/rate';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ImagePicker } from '@ionic-native/image-picker';
import { UserData } from '../providers/user-data';
import { IonicStorageModule } from '@ionic/storage';
import { PublicFeedPage } from '../pages/public-feed/public-feed';






var config = {
   apiKey: "AIzaSyD72XPFvI7g9btbl20FGsCuoRF5rOqOFyM",
    authDomain: "rally-up-12c9b.firebaseapp.com",
    databaseURL: "https://rally-up-12c9b.firebaseio.com",
    projectId: "rally-up-12c9b",
    storageBucket: "rally-up-12c9b.appspot.com",
    messagingSenderId: "1017475098724"
  };



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '6a339c20',
  },
  'push': {
    'sender_id': '924920604639',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

firebase.initializeApp(config);


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
        TakeactionPage,
        FavoritesPage,
        FriendsRequestPage,
        SettingsPage,
        LinkedAccountsPage,
        FindFriendsPage,
        TermsPage,
        PrivacyPolicyPage,
        EventDetailPage,
        HomeFiltersPage,
        MyRepsPage,
        StreaksHistoryPage,
        FollowedOrganizationsPage,
        FollowedCandidatesPage,
        EditProfilePage,
        UnlinkTwitterPage,
        UnlinkFacebookPage,
        PushNotificationsSettingsPage,
        CallPage,
        ReportProblemPage,
        UnlinkTwitterPage,
        FilterEventsPage,
        ReportProblemPage,
        RatePage,
        ChangePasswordPage,
        PublicFeedPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(config),
        IonicStorageModule.forRoot(),
        AngularFireAuthModule,
                //IonicModule.forRoot(MyApp),
                CloudModule.forRoot(cloudSettings)
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
        TakeactionPage,
        FavoritesPage,
        FriendsRequestPage,
        SettingsPage,
        LinkedAccountsPage,
        FindFriendsPage,
        TermsPage,
        PrivacyPolicyPage,
        EventDetailPage,
        HomeFiltersPage,
        MyRepsPage,
        StreaksHistoryPage,
        FollowedOrganizationsPage,
        FollowedCandidatesPage,
        EditProfilePage,
        UnlinkTwitterPage,
        UnlinkFacebookPage,
        PushNotificationsSettingsPage,
        CallPage,
        ReportProblemPage,
        UnlinkTwitterPage,
        FilterEventsPage,
        ReportProblemPage,
        RatePage,
        ChangePasswordPage,
        PublicFeedPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ImagePicker,
        UserData
    ]
})
export class AppModule {}