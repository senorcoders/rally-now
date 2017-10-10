import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the PublicProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {
	parameter: string;
	userData:any;
	endpoint:string = 'users?id=';
  hidden:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider:UsersProvider) {
  	this.parameter = navParams.get('param1');
  	this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicProfilePage');
  }


  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.parameter).subscribe(
    result => {
      this.userData=result;
      this.hidden=result.hide_activity;
      console.log("Success : "+ result);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
}

}
