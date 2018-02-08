import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Facebook } from '@ionic-native/facebook';

@Injectable()
export class DataProvider {

	items:any;

  constructor(public http: Http, private facebook: Facebook) {
    console.log('Hello DataProvider Provider');
        this.getFacebookFriendsList();
  }

  getFacebookFriendsList(){
    this.facebook.api('me/friends', ['user_friends']).then(
      list => {
          console.log("Lista de amigos", list['data']);
          this.items = list['data'];
      }, error => {
        console.log("error", error);
      });
  }

   filterItems(searchTerm){
     return this.items;
 
        // return this.items.filter((item) => {
        //     return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        // });     
 
    }

}
