import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

	items:any;

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
    this.items = [
            {title: 'John'},
            {title: 'Eduardo'},
            {title: 'Marck'},
            {title: 'Luis'},
            {title: 'Pedro'},
            {title: 'Jose'}
        ]
  }

   filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }

}
