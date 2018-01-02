import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-representative-profile',
  templateUrl: 'representative-profile.html',
})
export class RepresentativeProfilePage {

  endpoint:any = 'reps/';
  rep:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider) {
      this.getRepData(navParams.get('repID'));
  }


  getRepData(repID){
    this.httpProvider.getJsonData(this.endpoint + repID).subscribe(result => {
      this.rep = result;
    });
  }
  

}
