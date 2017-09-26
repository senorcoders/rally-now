import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OrganizationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrganizationsProvider {
	base:string = 'http://104.131.22.8:3000/api/';
	data:any = {};


  constructor(public http: Http) {
    console.log('Hello OrganizationsProvider Provider');
  }

  	getJsonData(endpoint){
  		return this.http.get(this.base + endpoint).map(res => res.json());
	}

	saveNewUser(endpoint, data):void{
		var headers = new Headers();
    	headers.append('Content-Type', 'application/json' );
    	headers.append('Access-Control-Allow-Origin', '*');
    	headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    	headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    	headers.append('Access-Control-Max-Age', '1728000');
    	let options = new RequestOptions({ headers: headers });
		let userData = JSON.stringify({fname: data.displayName, photo_url: data.photoURL});
		this.http.post(this.base + endpoint, userData, options)
			.subscribe(data => {
				this.data.response = data["_body"];
			}, error => {
				console.log("Error", error);
			});
	}

	updateUser(endpoint, data):void{
		this.http.put(this.base + endpoint, data, Headers)
			.subscribe(data => {
				this.data.response = data["_body"];
			}, error => {
				console.log("Error", error);
			});
	}

}
