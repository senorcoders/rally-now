import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class OrganizationsProvider {
	base:string = 'https://api.provethisconcept.com/rallyapi/';
	data:any = {};
	perpage:number = 15;
	perpageHome:number = 5;



  constructor(public http: Http, public storage: Storage, public af:AngularFireDatabase) {
    console.log('Hello OrganizationsProvider Provider');
  }

  	getJsonData(endpoint){
  		return this.http.get(this.base + endpoint).map(res => res.json());
	} 

	load(endpoint, start:number=0){
		console.log(this.base + endpoint + start + '/' + this.perpage);
		return new Promise(resolve => {
			this.http.get(this.base + endpoint + start + '/' + this.perpage)
				.map(res => res.json())
				.subscribe(data => {
					console.log(data);
						resolve(data);
				});
		});
	}

	loadHome(endpoint, start:number=0){
		console.log(this.base + endpoint + start + '/' + this.perpageHome);
		return new Promise(resolve => {
			this.http.get(this.base + endpoint + start + '/' + this.perpageHome)
				.map(res => res.json())
				.subscribe(data => {
					console.log(data);
						resolve(data);
				});
		});
	}


}
