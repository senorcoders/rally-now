import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';


@IonicPage()
@Component({
  selector: 'page-cellular-data-usage',
  templateUrl: 'cellular-data-usage.html',
})
export class CellularDataUsagePage {
  endpoint:any='users?id=';
  currentRallyID:any;
  toggleStatus:boolean;
  toggle:any;
  newEndpoint:any = 'users/';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider) {
      this.httpProvider.returnRallyUserId().then(
        user =>{
            this.currentRallyID = user.apiRallyID;
            this.getToggleStatus();
        }
      );
  }

  getToggleStatus(){
    this.httpProvider.getJsonData(this.endpoint+this.currentRallyID).subscribe(
      result =>{
          this.toggleStatus = result[0].less_data;
      }
    );
  }

  onToggle(){
    console.log(this.toggle);
    this.httpProvider.enableLessData(this.newEndpoint + this.currentRallyID, this.toggle);
    
  }

}
