import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-report-problem',
  templateUrl: 'report-problem.html',
})
export class ReportProblemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,     public viewCtrl: ViewController
) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportProblemPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
