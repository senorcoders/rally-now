import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database/database';



/*
  Generated class for the OrganizationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsersProvider {
	base:string = 'http://138.68.19.227:3000/api/';
	data:any = {};


  constructor(public http: Http, public storage: Storage, public af:AngularFireDatabase) {
    console.log('Hello Users Provider');
  }

  	getJsonData(endpoint){
  		return this.http.get(this.base + endpoint).map(res => res.json());
	}



	saveApiRallyID(rallyID){
     	let user:any = firebase.auth().currentUser;
		this.af.database.ref('users/'+user['uid']).update({
			apiRallyID: rallyID
		});
	}


  getRallyID(){
      let user:any = firebase.auth().currentUser;
      let userID;
      this.af.database.ref('users/'+user['uid']).once('value', snapshot=>{
        userID = snapshot.val().apiRallyID;
      });

      return userID;

  }


	saveNewUser(endpoint, data):void{
		var headers = new Headers();
    	headers.append('Content-Type', 'application/json' );
    	headers.append('Access-Control-Allow-Origin', '*');
    	headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    	headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    	headers.append('Access-Control-Max-Age', '1728000');
    	let options = new RequestOptions({ headers: headers });
		let userData = JSON.stringify({fname: data.displayName, photo_url: encodeURI(data.photoURL), searchable: data.searchable, hide_activity: data.hide_activity});
		console.log(this.base + endpoint, userData, options);
		this.http.post(encodeURI(this.base + endpoint), userData, options)
			.map(res => res.json())
			.subscribe(data => {
				console.log(data);
				this.storage.set('APIRALLYID', data.id);
				this.saveApiRallyID(data.id);
				this.data.response = data["_body"];
			}, error => {
				console.log("Error", error);
			});
	}

	updateUser(endpoint, data):void{
		var headers = new Headers();
    	headers.append('Content-Type', 'application/json' );
    	headers.append('Access-Control-Allow-Origin', '*');
    	headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    	headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    	headers.append('Access-Control-Max-Age', '1728000');
    	let userData = JSON.stringify({
    		fname: data.displayName, 
    		photo_url: encodeURI(data.photoURL),
    		country: data.location,
    		description: data.description,
        searchable: data.searchable,
        hide_activity: data.hide_activity
    		});
    	let options = new RequestOptions({ headers: headers });
		this.http.put(encodeURI(this.base + endpoint), userData, options)
			.subscribe(data => {
				console.log(data);
				this.data.response = data["_body"];
			}, error => {
				console.log("Error", error);
			});
	}


	followFriend(endpoint, currentUserRallyID, friendRallyID):void{
    var headers = new Headers();
      headers.append('Content-Type', 'application/json' );
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
      headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
      headers.append('Access-Control-Max-Age', '1728000');
      let options = new RequestOptions({ headers: headers });
    let actionData = JSON.stringify({follower_id: currentUserRallyID, following_id: friendRallyID});
    console.log(this.base + endpoint, actionData, options);
    this.http.post(encodeURI(this.base + endpoint), actionData, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.saveFollowRecordID(data.following_id, data.id);
        this.data.response = data["_body"];
      }, error => {
        console.log("Error", error);
      });
  }

  saveFollowRecordID(friendID, recordID){
    let user:any = firebase.auth().currentUser;
     let followRef = this.af.database.ref('follow/'+user['uid']+'/'+friendID).set({
       friendIDRecord: recordID
     });
  }

}
