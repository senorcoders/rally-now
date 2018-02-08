import { Component, ViewChild } from '@angular/core';
import { Tabs, IonicPage, NavController, NavParams, PopoverController, Events } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { OverlayPage } from '../overlay/overlay';
import { SearchPage } from '../search/search';
import { UsersProvider } from '../../providers/users/users';
import { NotiModel } from '../../models/notifications';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = AlertsPage;
  tab3Root = ProfilePage;
  tab4Root = OverlayPage;
  tab5Root = SearchPage;
  endpoint:any = 'ux_events';
  myRallyID:any;
  badgeCount:any;

  @ViewChild('mainTabs') mainTabs: Tabs;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider,
    public events: Events,
    public storage: Storage,
    public af:AngularFireDatabase) {
      this.httpProvider.returnRallyUserId().then( user => {
        this.myRallyID = user.apiRallyID;
        this.getNoticationsQty();
        this.updateBadge();

      });
      
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(OverlayPage);
    popover.present();
  }

  getNoticationsQty(){ 
    this.httpProvider.getNotifications(this.endpoint+'?user_id='+this.myRallyID+'&what=unread')
      .subscribe( result => {
        let user:any = firebase.auth().currentUser;

        console.log("Badges", result);
        this.badgeCount = result.length;
        console.log("Count", this.badgeCount);
        this.af.database.ref('badges/'+user['uid']).set({
          badgeCount: this.badgeCount
        });
      });
  } 


  updateBadge(){
    let user:any = firebase.auth().currentUser;
    this.af.object('badges/'+user['uid'])
      .subscribe((data) => {
          console.log(data);
          this.badgeCount = data.badgeCount;
      });

  }
  public tapped() {
    this.events.publish('home:scrollToTop', Date.now() );
}

  

}
