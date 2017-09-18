import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OrganizationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrganizationsProvider {

  constructor(public http: Http) {
    console.log('Hello OrganizationsProvider Provider');
  }

  getJsonData(){
  return this.http.get('http://localhost:3000/api/organization').map(res => res.json());
}

}
