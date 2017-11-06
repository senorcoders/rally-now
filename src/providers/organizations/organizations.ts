import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class OrganizationsProvider {
	base:string = 'http://138.68.19.227:3000/rallyapi/';
	data:any = {};


  constructor(public http: Http, public storage: Storage, public af:AngularFireDatabase) {
    console.log('Hello OrganizationsProvider Provider');
  }

  	getJsonData(endpoint){
  		return this.http.get(this.base + endpoint).map(res => res.json());
	} 


}
