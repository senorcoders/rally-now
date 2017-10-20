import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the OrganizationActionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-organization-action',
  templateUrl: 'organization-action.html',
})
export class OrganizationActionPage {
	endpoint:string = 'objectives/';
	orgName:string;
	orgDescription:string;
	organizationID:any;
	objectiveID:any;
	objTitle:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider:UsersProvider) {
  	  	this.objectiveID = navParams.get('objectiveID');
  	  	this.getdata();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationActionPage');
  }

  getdata(){
  this.httpProvider.getJsonData(this.endpoint + this.objectiveID).subscribe(
    result => {
      this.orgName=result.organization['name'];
      this.objTitle = result.title;
      this.orgDescription=result.organization['description'];
      this.organizationID=result.organization_id;
      console.log("Success : "+ result.name);
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
