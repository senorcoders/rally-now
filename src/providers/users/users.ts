import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class UsersProvider {
	base:string = 'https://api.provethisconcept.com/api/';
	data:any = {};
  recordID:any;
  senorcodersEndpoint:any = 'http://senorcoders.com/rally/';
  civilApi:any = 'https://api.civil.services/v1/house/?apikey=FA7D0F9C-3879-F284-9D4A-BD9E595BC89B&latitude=';

  constructor(public http: Http, public storage: Storage, public af:AngularFireDatabase) {
    console.log('Hello Users Provider');
    //this.getIDonLoad();
  }

  	getJsonData(endpoint){
  		return this.http.get(this.base + endpoint).map(res => res.json());
  }
  
  getHouseReps(lat, lng){
    console.log(lat, lng);
    return this.http.get(this.civilApi + lat + '&longitude=' + lng).map(res => res.json());
  }



	saveApiRallyID(rallyID){

    console.log("Here comes the ID from the API", rallyID);
     	let user:any = firebase.auth().currentUser;
		this.af.database.ref('users/'+user['uid']).update({
			apiRallyID: rallyID
    });
  
  }
  



  returnRallyUserId(): any{

     return new Promise( (resolve, reject) => {

       firebase.auth().onAuthStateChanged(user => {
          if (user) {
             let usuario:any = firebase.auth().currentUser;

            this.af.database.ref('users/'+usuario['uid']).once('value').then(function(snapshot){
              resolve(snapshot.val());
            })
          } else {
            console.log("Usuario no esta logueado");
          }
        });


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
		let userData = JSON.stringify({fname: data.displayName, photo_url: encodeURI(data.photoURL), searchable: data.searchable, hide_activity: data.hide_activity, facebook_id: data.facebook_id, username: data.username});
		console.log(this.base + endpoint, userData, options);
		this.http.post(this.base + endpoint, userData, options)
			.map(res => res.json())
			.subscribe(data => {
				console.log("Nuevo Usuario", data);
				this.storage.set('APIRALLYID', data.id);
				this.saveApiRallyID(data.id);
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

  updateUsername(endpoint, username):void{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    let userData = JSON.stringify({
      username: username
      });
    let options = new RequestOptions({ headers: headers });
  this.http.put(encodeURI(this.base + endpoint), userData, options)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log("Error", error);
    });
}

  updateNotificationStatus(endpoint, data){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    let notiData = JSON.stringify({
        what: data
      });
    let options = new RequestOptions({ headers: headers });
  this.http.put(encodeURI(this.base + endpoint), notiData, options)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log("Error", error);
    });
  }

  updateFollowers(endpoint){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    let notiData = JSON.stringify({
        approved: true
      });
    let options = new RequestOptions({ headers: headers });
  this.http.put(encodeURI(this.base + endpoint), notiData, options)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log("Error", error);
    });
  }
  
  enableLessData(endpoint, less_data){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    let userData = JSON.stringify({
      less_data: less_data
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
    let actionData = JSON.stringify({follower_id: currentUserRallyID, following_id: friendRallyID, approved: false});
    console.log(this.base + endpoint, actionData, options);
    this.http.post(encodeURI(this.base + endpoint), actionData, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.saveFollowRecordID(data.following_id, data.id, 'follow');
      }, error => {
        console.log("Error", error);
      });
  }

  followRep(endpoint, currentUserRallyID, repID){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    let options = new RequestOptions({ headers: headers });
    let actionData = JSON.stringify({user_id: currentUserRallyID, representative_id: repID});
    this.http.post(encodeURI(this.base + endpoint), actionData, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
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



  hideObjective(endpoint, user_id, objective_id):void{
      var headers = new Headers();
      headers.append('Content-Type', 'application/json' );
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
      headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
      headers.append('Access-Control-Max-Age', '1728000');
      
      let options = new RequestOptions({ headers: headers });
      let userData = JSON.stringify({user_id:user_id, objective_id:objective_id});
      this.http.post(encodeURI(this.base + endpoint), userData, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log("HIDE OBJ", data);
        this.data.response = data["_body"];
      }, error => {
        console.log("Error", error);
      });

  }


  saveDevice(registration_id, user_id, endpoint):void{
    console.log("Desde user Provider", user_id);
    var headers = new Headers();
      headers.append('Content-Type', 'application/json' );
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
      headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
      headers.append('Access-Control-Max-Age', '1728000');
      var d1 = new Date();
      d1.toUTCString();
      Math.floor(d1.getTime()/ 1000);
      var d2 = new Date(d1.getUTCFullYear(),  d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());

      let options = new RequestOptions({ headers: headers });
      let userData = JSON.stringify({registration_id:registration_id, user_id:user_id, created_at:d2.toUTCString(), updated_at:d2.toUTCString()});
      console.log(userData);
      this.http.post(encodeURI(this.base + endpoint), userData, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log("DEVICE", data);
        this.data.response = data["_body"];
      }, error => {
        console.log("Error", error);
      });
  }


  saveNotification(user_id, device_id, msg, endpoint, sender_id):void{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    var d1 = new Date();
    d1.toUTCString();
    Math.floor(d1.getTime()/ 1000);
    var d2 = new Date(d1.getUTCFullYear(),  d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());

    let options = new RequestOptions({ headers: headers });
    let userData = JSON.stringify({device_id:device_id, user_id:user_id, created_at:d2.toUTCString(), updated_at:d2.toUTCString(), data:msg, what: 'unread', sender_id: sender_id});
    console.log(userData);
    this.http.post(encodeURI(this.base + endpoint), userData, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log("NOTIFICATION", data);
    }, error => {
      console.log("Error", error);
    });
  }
  sendNotification(device_id, msg){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    
    let userData = JSON.stringify({device_id:device_id, msg:msg});
    
      this.http.post(encodeURI(this.senorcodersEndpoint), userData, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log("In senorcoders", data);
      }, error => {
        console.log("Error", error);
      });
  }

  addLike(endpoint, reference_id, user_id, like_type_id){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    
    let options = new RequestOptions({ headers: headers });
  let userData = JSON.stringify({reference_id: reference_id, user_id:user_id, like_type_id: like_type_id});
  console.log(this.base + endpoint, userData, options);
  return this.http.post(encodeURI(this.base + endpoint), userData, options)
    .map(res => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    // .subscribe(data => {
    //   console.log("POST LIKE", data);
    // }, error => {
    //   console.log("Error", error);
    // });
  }

  addShareAction(endpoint, goal_id, action_type_id, user_id):void{
    var headers = new Headers();
      headers.append('Content-Type', 'application/json' );
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
      headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
      headers.append('Access-Control-Max-Age', '1728000');
      let options = new RequestOptions({ headers: headers });
    let userData = JSON.stringify({action_type_id:action_type_id, goal_id:goal_id, user_id: user_id});
    console.log(this.base + endpoint, userData, options);
    this.http.post(encodeURI(this.base + endpoint), userData, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log("POST FAV", data);
        //this.saveFollowRecordID(data.id, data.id, 'favorites');
        this.data.response = data["_body"];
      }, error => {
        console.log("Error", error);
      });
  } 


  updateSingleItem(endpoint, itemName, value):void{
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    let userData = JSON.stringify({
      itemName: value
      });
    let options = new RequestOptions({ headers: headers });
  this.http.put(encodeURI(this.base + endpoint), userData, options)
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log("Error", error);
    });
}


addAction(endpoint, data):void{
  console.log(data);
  var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    headers.append('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Prototype-Version, content-type, api-token, OLI-Device-ID, OLI-Device-Identifier');
    headers.append('Access-Control-Max-Age', '1728000');
    let options = new RequestOptions({ headers: headers });
  let userData = JSON.stringify({
    action_type_id: data.action_type_id, 
    goal_id:data.goal_id, 
    user_id: data.user_id, 
    representative_id: data.representative_id,
    title: data.title,
    short_desc: data.short_desc,
    event_id: data.event_id
     });
  console.log(this.base + endpoint, userData, options);
  this.http.post(encodeURI(this.base + endpoint), userData, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log("Add action", data);
      //this.saveFollowRecordID(data.id, data.id, 'favorites');
    }, error => {
      console.log("Error", error);
    });
} 


removeItem(endpoint, recordID){
  var headers = new Headers();
   headers.append('Content-Type', 'application/json' );
   let options = new RequestOptions({ headers: headers });
          return this.http.delete(this.base + endpoint + '/' + recordID, options)
                .map(res => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
 
   
}

}
