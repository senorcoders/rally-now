import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';
import { Push, PushOptions, PushToken} from '@ionic/cloud-angular';





/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NotificationProvider {



  constructor(
  	public http: Http,
  	public push: Push,
    public device: Device) {
    console.log('Hello NotificationProvider Provider');
  }


  init(){
  	
  

		this.push.register().then((t: PushToken) => {
		  return this.push.saveToken(t);
		}).then((t: PushToken) => {
		  console.log('Token saved:', t.token);
      this.saveToken(t.token);
		});

    
  }


  saveToken (token) {
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
    const url = "http://138.68.19.227:8000/devices";
    console.log(device);
    this.http.post(url, {device}, options)
        .subscribe(data => {
            console.log('token saved', data);
        }, error => {
            console.log('error saving token', error);
        });
}

}
