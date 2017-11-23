import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocialSharing } from '@ionic-native/social-sharing';


@Injectable()
export class SocialShareProvider {

  constructor(public http: Http, private socialSharing: SocialSharing) {
    console.log('Hello SocialShareProvider Provider');
  }

  facebookShare(title, imgURI) {
    this.socialSharing.shareViaFacebook(title, 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08', 'http://senorcoders.com/').then(() => {
      console.log("shareViaFacebook: Success");
    }).catch((error) => {
      console.error("shareViaFacebook: failed", error);
    });
	}

	twitterShare(title, imgURI) {
    this.socialSharing.shareViaTwitter(title, 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08', 'http://senorcoders.com/').then(() => {
      console.log("shareViaTwitter: Success");
    }).catch((error) => {
      console.error("shareViaTwitter: failed", error);
    });
	}

	whatsappShare(title, imgURI) {
    this.socialSharing.shareViaWhatsApp(title, 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08', null).then(() => {
      console.log("shareViaWhatsapp: Success");
    }).catch((error) => {
      console.error("shareViaWhatsapp: failed", error);
    });
	}

	otherShare(title, imgURI){
		this.socialSharing.share(title, title, 'https://c1.staticflickr.com/9/8409/buddyicons/41284017@N08_l.jpg?1369764880#41284017@N08', null)
			.then(() =>{
				console.log('Success');
			}).catch((error) => {
				console.log('Error', error);
			})
  }
  
  shareViaEmail(){
    this.socialSharing.shareViaEmail("Hola desde Rally", "Rally", ["dayana@senorcoders.com"])
    .then(() =>{
      console.log('Success');
    }).catch((error) => {
      console.log('Error', error);
    })
  }


}
