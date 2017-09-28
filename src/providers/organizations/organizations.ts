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
	base:string = 'http://138.68.19.227:3000/api/';
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
		let userData = JSON.stringify({fname: data.displayName, photo_url: data.photoURL, api_token: 'e85abcad-00ae-4124-8bfe-e4473338fa98'});
		console.log(this.base + endpoint, userData, options);
		this.http.post(this.base + endpoint, userData, options)
			.map(res => res.json())
			.subscribe(data => {
				console.log(data);
				this.data.response = data["_body"];
			}, error => {
				console.log("Error", error);
			});
	}

	updateUser(endpoint, data):void{
		this.http.put(this.base + endpoint , data, Headers)
			.subscribe(data => {
				this.data.response = data["_body"];
			}, error => {
				console.log("Error", error);
			});
	}

}
