import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class OrganizationsProvider {
	base:string = 'https://api.provethisconcept.com/rallyapi/';
	data:any = {};
	perpage:number = 30;
	perpageHome:number = 5;



  constructor(public http: Http, public storage: Storage, public af:AngularFireDatabase) {
	console.log('Hello OrganizationsProvider Provider');
	//this.showToken();

  }

 


		getToken(){
			return localStorage.getItem('token');
		}

  	getJsonData(endpoint){ 
		var headers = new Headers();
		headers.append('Content-Type', 'application/json' );
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
		headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
		headers.append('Access-Control-Max-Age', '1728000');
		headers.append('Authorization', `${this.getToken()}`);
	
		let options = new RequestOptions({ headers: headers });
  		return this.http.get(this.base + endpoint, options).map(res => res.json());
	} 

	getRecords(endpoint){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json' );
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
		headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
		headers.append('Access-Control-Max-Age', '1728000');
		headers.append('Authorization', `${this.getToken()}`);
	
		let options = new RequestOptions({ headers: headers });
		return new Promise(resolve => {
			this.http.get(this.base + endpoint, options)
				.map(res => res.json())
				.subscribe(data => {
					console.log(data);
						resolve(data);
				});
		});
	}

	load(endpoint, start:number=0){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json' );
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
		headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
		headers.append('Access-Control-Max-Age', '1728000');
		headers.append('Authorization', `${this.getToken()}`);
	
		let options = new RequestOptions({ headers: headers });
		console.log(this.base + endpoint + start + '/' + this.perpage);
		return new Promise(resolve => {
			this.http.get(this.base + endpoint + start + '/' + this.perpage, options)
				.map(res => res.json())
				.subscribe(data => {
					console.log(data);
						resolve(data);
				});
		});
	}

	loadHome(endpoint, start:number=0){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json' );
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
		headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
		headers.append('Access-Control-Max-Age', '1728000');
		headers.append('Authorization', `${this.getToken()}`);
	
		let options = new RequestOptions({ headers: headers });
		console.log("Home", this.base + endpoint + start + '/' + this.perpageHome, options);
		return new Promise(resolve => {
			this.http.get(this.base + endpoint + start + '/' + this.perpageHome, options)
				.map(res => res.json())
				.subscribe(data => {
					console.log(data);
						resolve(data);
				});
		});
	}


}
