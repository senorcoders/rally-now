import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';
import {UsersProvider} from '../users/users';
import { FCM } from '@ionic-native/fcm';


@Injectable()
export class NotificationProvider {

  endpoint:string = 'devices';
  myRallyID:any;

  constructor(
  	public http: Http,
    public device: Device,
    private httpProvider: UsersProvider,
    private fcm: FCM) {
    
  }


  init(rallyID){
  	
  
    //this.httpProvider.saveDevice(this.device.uuid, rallyID,  this.endpoint);

		// this.push.register().then((t: PushToken) => {
		//   return this.push.saveToken(t);
		// }).then((t: PushToken) => {
		//   console.log('Token saved:', t.token);
    //   this.saveToken(t.token, rallyID);
    // });
    this.fcm.getToken().then(token=>{
      console.log("Firebase Token", token);
      this.saveToken(token, this.myRallyID);
    })

    
  }


  saveToken (token, rallyID) {
    console.log("Desde notication Provider", rallyID);
    // build the headers for our api call to make sure we send json data type to our api
    const headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    const options = new RequestOptions({ headers });

    // this is our payload for the POST request to server
    const device = {
        platform: this.device.platform,
        model: this.device.model,
        uuid: this.device.uuid,
        token
    };
    const url = "https://noti.provethisconcept.com/devices";

    console.log(device);
    this.http.post(url, {device}, options)
        .subscribe(data => {
            console.log('token saved', data);
        }, error => {
            console.log('error saving token', error);
        });
    this.httpProvider.saveDevice(this.device.uuid, rallyID,  this.endpoint);
}

}
