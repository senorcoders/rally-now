import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocialSharing } from '@ionic-native/social-sharing';


@Injectable()
export class SocialShareProvider {

  constructor(public http: Http, private socialSharing: SocialSharing) {
    console.log('Hello SocialShareProvider Provider');
  }

  facebookShare(title, imgURI?) {
    this.socialSharing.shareViaFacebook(title, imgURI).then(() => {
      console.log("shareViaFacebook: Success");
    }).catch((error) => {
      console.error("shareViaFacebook: failed", error);
    });
	}

	twitterShare(title, imgURI?) {
    return this.socialSharing.shareViaTwitter(title, imgURI);
	}

	whatsappShare(title, imgURI) {
    this.socialSharing.shareViaWhatsApp(title, imgURI, null).then(() => {
      console.log("shareViaWhatsapp: Success");
    }).catch((error) => {
      console.error("shareViaWhatsapp: failed", error);
    });
	}

	otherShare(title, content?){
		this.socialSharing.share(content, title, title, title)
			.then(() =>{
				console.log('Success');
			}).catch((error) => {
				console.log('Error', error);
			})
  }
  
  shareViaEmail(){
    this.socialSharing.shareViaEmail("My Rally issue is:", "Rally", ["dayana@senorcoders.com"])
    .then(() =>{
      console.log('Success');
    }).catch((error) => {
      console.log('Error', error);
    })
  }

  shareViaSMS(number){
    this.socialSharing.shareViaSMS("Join me on Rally, the new app for progressive activism! bit.ly/rally-iphone or bit.ly/rally-android #letsrally", number)
    .then(() =>{
      console.log('Success');
    }).catch((error) => {
      console.log('Error', error);
    })
  }
  



}
