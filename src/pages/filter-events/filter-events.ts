import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the FilterEventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
}
}
