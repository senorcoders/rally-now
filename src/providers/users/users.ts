import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';



/*
  Generated class for the OrganizationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsersProvider {
	base:string = 'http://138.68.19.227:3000/api/';
	data:any = {};
  recordID:any;


  constructor(public http: Http, public storage: Storage, public af:AngularFireDatabase) {
    console.log('Hello Users Provider');
    this.getIDonLoad();
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

  getIDonLoad(){
    let user:any = firebase.auth().currentUser;
    if (user) {
      this.af.database.ref('users/'+user['uid']).once('value', snapshot=>{
        this.recordID = snapshot.val().apiRallyID;
        });
    } else{
      console.log("Usuario no esta logueado");
    }
      
  }

  returnRallyUserId(): any{

     return new Promise( (resolve, reject) => {
          let user:any = firebase.auth().currentUser;
          if (user) {
            this.af.database.ref('users/'+user['uid']).once('value').then(function(snapshot){
              resolve(snapshot.val());
            })
          } else{
            console.log("Usuario no esta logueado");
          }

      });
    


  }

  getRallyID(){
      
         return this.recordID;
      
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
        hide_activity: data.hide_activity,
        email: data.email,
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
        this.saveFollowRecordID(data.following_id, data.id, 'follow');
        this.data.response = data["_body"];
      }, error => {
        console.log("Error", error);
      });
  }

  saveFollowRecordID(friendID, recordID, path){
    let user:any = firebase.auth().currentUser;
    this.af.database.ref(path+'/'+user['uid']+'/'+friendID).set({
       friendIDRecord: recordID
     });
  }


  removeFollowRecordID(recordID, path){
    let user:any = firebase.auth().currentUser;
    this.af.database.ref(path+'/'+user['uid']+'/'+recordID).remove();
  }

  followOrganization(endpoint, currentUserRallyID, organizationID):void{
    var headers = new Headers();
      headers.append('Content-Type', 'application/json' );
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
      headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
      headers.append('Access-Control-Max-Age', '1728000');
      let options = new RequestOptions({ headers: headers });
    let actionData = JSON.stringify({follower_id: currentUserRallyID, organization_id: organizationID});
    console.log(this.base + endpoint, actionData, options);
    this.http.post(encodeURI(this.base + endpoint), actionData, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.saveFollowRecordID(data.organization_id, data.id, 'organizations');
        this.data.response = data["_body"];
      }, error => {
        console.log("Error", error);
      });
  }

  unfollowOrganization(endpoint, recordID){
     var headers = new Headers();
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
     this.http.delete(this.base + endpoint + '/' + recordID, options)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log("Error", error);
      });
      
  }

   handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }

}
