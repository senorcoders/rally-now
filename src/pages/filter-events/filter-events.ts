import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { EventsPage } from '../events/events';


@IonicPage()
@Component({
  selector: 'page-filter-events',
  templateUrl: 'filter-events.html',
})
export class FilterEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterEventsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  public event = {
    month: '2017-10-01',
    timeStarts: '07:43',
    timeEnds: '2017-12-31'
}

goToEvents(){
 
   this.navCtrl.setRoot(EventsPage);
 }
}
