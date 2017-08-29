webpackJsonp([22],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertsPage = (function () {
    function AlertsPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    AlertsPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    return AlertsPage;
}());
AlertsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alerts',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/alerts/alerts.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-left>\n      <p class="white">Rally</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <p>This is the text of a notification. It could say all sorts of things</p>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <p>This is the text of a notification. It could say all sorts of things</p>\n  </ion-item>\n</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Alerts</p>\n      </ion-col>\n      <ion-col col-2 class="active-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <button (click)="goToProfile()">\n         <ion-icon name="ios-person"></ion-icon>\n\n        </button>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/alerts/alerts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AlertsPage);

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friendsactivity_friendsactivity__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizations_organizations__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__candidates_candidates__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__takeaction_takeaction__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorites_favorites__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OverlayPage = (function () {
    function OverlayPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    OverlayPage.prototype.goToEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    OverlayPage.prototype.goToFriendsActivity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friendsactivity_friendsactivity__["a" /* FriendsactivityPage */]);
    };
    OverlayPage.prototype.goToOrganizations = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__organizations_organizations__["a" /* OrganizationsPage */]);
    };
    OverlayPage.prototype.goToCandidates = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__candidates_candidates__["a" /* CandidatesPage */]);
    };
    OverlayPage.prototype.goToTakeAction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__takeaction_takeaction__["a" /* TakeactionPage */]);
    };
    OverlayPage.prototype.goToFavorites = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__favorites_favorites__["a" /* FavoritesPage */]);
    };
    return OverlayPage;
}());
OverlayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-overlay',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/overlay/overlay.html"*/'<ion-content>\n  <ion-list>\n  <button ion-button full style="background-color: #934ae2; height: 70px;" (click)="goToFavorites()">Favorites</button>\n  <button ion-button full style="background-color: #8a57e2; height: 70px;" (click)="goToCandidates()">Candidates</button>\n  <button ion-button full style="background-color: #8162e2; height: 70px;" (click)="goToTakeAction()">Take Action</button>\n  <button ion-button full style="background-color: #776ce2; height: 70px;" (click)="goToOrganizations()">My Organizations</button>\n  <button ion-button full style="background-color: #6a76e2; height: 70px;" (click)="goToFriendsActivity()">Friend\'s Activity</button>\n  <button ion-button full style="background-color: #5c7fe2; height: 70px;" (click)="goToEvents()">Events</button>\n  <button ion-button full style="background-color: #4a87e2; height: 70px;">Home Feed</button>\n \n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/overlay/overlay.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], OverlayPage);

//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedAccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LinkedAccountsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LinkedAccountsPage = (function () {
    function LinkedAccountsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LinkedAccounts = [
            {
                id: 1,
                name: 'Facebook',
                icon: 'logo-facebook',
                username: 'Milton Espinoza'
            },
            {
                id: 1,
                name: 'Twitter',
                icon: 'logo-twitter',
                username: 'milton404'
            }
        ];
    }
    LinkedAccountsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LinkedAccountsPage');
    };
    return LinkedAccountsPage;
}());
LinkedAccountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-linked-accounts',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/linked-accounts/linked-accounts.html"*/'<!--\n  Generated template for the LinkedAccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar  color="primary">\n      <ion-title>Rally</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list>\n      <ion-item ion-item *ngFor="let account of LinkedAccounts">\n        <ion-icon name="{{account.icon}}" item-start></ion-icon>\n        <h2 item-start>{{ account.name }}</h2>\n        <button  (click)="itemSelected(account)" ion-button clear item-end>\n          {{ account.username }}           \n        </button>\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/linked-accounts/linked-accounts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], LinkedAccountsPage);

//# sourceMappingURL=linked-accounts.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FindFriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FindFriendsPage = (function () {
    function FindFriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FindFriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindFriendsPage');
    };
    return FindFriendsPage;
}());
FindFriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-find-friends',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/find-friends/find-friends.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n\n  <ion-item>\n  	<ion-icon item-start name="ios-mail"></ion-icon>\n  	via Email\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n   <ion-item>\n  	<ion-icon item-start name="logo-facebook"></ion-icon>\n  	Find Facebook Friends\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n   <ion-item>\n  	<ion-icon item-start name="logo-twitter"></ion-icon>\n  	Find Twitter Friends\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n   <ion-item>\n  	<ion-icon item-start name="ios-person"></ion-icon>\n  	From My Contacts\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Find Friends</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/find-friends/find-friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FindFriendsPage);

//# sourceMappingURL=find-friends.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/terms/terms.html"*/'<!--\n  Generated template for the PrivacyPolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem deserunt perspiciatis, optio, nemo repellat magni sit id aspernatur cumque labore omnis esse perferendis harum! Reiciendis cum architecto et fugit fugiat officia dolores quod quos molestias adipisci sint, eaque, nobis nisi.</p>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Terms</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivacyPolicyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PrivacyPolicyPage = (function () {
    function PrivacyPolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivacyPolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPolicyPage');
    };
    return PrivacyPolicyPage;
}());
PrivacyPolicyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacy-policy',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/privacy-policy/privacy-policy.html"*/'<!--\n  Generated template for the PrivacyPolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem deserunt perspiciatis, optio, nemo repellat magni sit id aspernatur cumque labore omnis esse perferendis harum! Reiciendis cum architecto et fugit fugiat officia dolores quod quos molestias adipisci sint, eaque, nobis nisi.</p>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Privacy Policy</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/privacy-policy/privacy-policy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PrivacyPolicyPage);

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationsSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PushNotificationsSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PushNotificationsSettingsPage = (function () {
    function PushNotificationsSettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PushNotificationsSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PushNotificationsSettingsPage');
    };
    return PushNotificationsSettingsPage;
}());
PushNotificationsSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-push-notifications-settings',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/push-notifications-settings/push-notifications-settings.html"*/'<!--\n  Generated template for the PushNotificationsSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-list>\n\n  <ion-item >\n  	<ion-label>Events <br> <p style="font-size: 10px;">Scheduled</p></ion-label>\n  	  <ion-toggle color="secondary" checked="true"></ion-toggle>\n  </ion-item>\n\n  <ion-item >\n  	<ion-label>Action Reminders <br> <p style="font-size: 10px;">Scheduled</p></ion-label>\n  	  <ion-toggle color="secondary" checked="true"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n      <ion-range min="-200" max="200" pin="true" [(ngModel)]="structure" color="dark">\n        <p range-left style="font-size: 10px;" >Sunday</p>\n        <ion-icon range-right name="md-close"></ion-icon>\n      </ion-range>\n    </ion-item>\n     <ion-item>\n      <ion-range min="-200" max="200" pin="true" [(ngModel)]="structure" color="dark">\n        <p range-left style="font-size: 10px;" >Monday</p>\n        <ion-icon range-right name="md-close"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n  <ion-item >\n  	<ion-label>Urgent Action Reminders <br> <p style="font-size: 10px;">As it happens</p></ion-label>\n  	  <ion-toggle color="secondary" checked="true"></ion-toggle>\n  </ion-item>\n  <ion-item >\n  	<ion-label>Follow-up Tasks <br> <p style="font-size: 10px;">Once a day</p></ion-label>\n  	  <ion-toggle color="secondary" checked="true"></ion-toggle>\n  </ion-item>\n\n  <ion-item >\n  	<ion-label>Follow-up Success Stories <br> <p style="font-size: 10px;">Once a day</p> </ion-label>\n  	  <ion-toggle color="secondary" checked="true"></ion-toggle>\n  </ion-item>\n\n  <ion-item >\n  	<ion-label>Friend Activity <br> <p style="font-size: 10px;">As it happens</p></ion-label>\n  	  <ion-toggle color="secondary" checked="true"></ion-toggle>\n  </ion-item>\n\n  <ion-item >\n  	<ion-label>Organization Activity <br> <p style="font-size: 10px;">As it happens</p></ion-label>\n  	  <ion-toggle color="secondary" checked="true"></ion-toggle>\n  </ion-item>\n\n  <ion-item >\n  	<ion-label>Candidate Activity <br> <p style="font-size: 10px;">As it happens</p></ion-label>\n  	  <ion-toggle color="secondary"  checked="true"></ion-toggle>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Push Notification Settings</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/push-notifications-settings/push-notifications-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PushNotificationsSettingsPage);

//# sourceMappingURL=push-notifications-settings.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReportProblemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReportProblemPage = (function () {
    function ReportProblemPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ReportProblemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportProblemPage');
    };
    ReportProblemPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ReportProblemPage;
}());
ReportProblemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-report-problem',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/report-problem/report-problem.html"*/'<!--\n  Generated template for the ReportProblemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n     <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n    	 <button ion-button>\n        <span ion-text color="primary" >Send</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<ion-row class="grayBg">\n		<ion-col padding>\n			<p>SOMETHING ISN\'T WORKING</p>\n			<p>Briefly explain what happened.</p>\n		</ion-col>\n	</ion-row>\n	<ion-list>\n  <ion-item style="border: none;">\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n   <ion-textarea type="text" placeholder="Write something here..."></ion-textarea>\n\n  </ion-item>\n</ion-list>\n  \n</ion-content>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/report-problem/report-problem.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], ReportProblemPage);

//# sourceMappingURL=report-problem.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linked_accounts_linked_accounts__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_friends_find_friends__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__push_notifications_settings_push_notifications_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_problem_report_problem__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.goToLinkedAccounts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__linked_accounts_linked_accounts__["a" /* LinkedAccountsPage */]);
    };
    SettingsPage.prototype.findFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__find_friends_find_friends__["a" /* FindFriendsPage */]);
    };
    SettingsPage.prototype.goToTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* TermsPage */]);
    };
    SettingsPage.prototype.goToPrivacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
    };
    SettingsPage.prototype.pushSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__push_notifications_settings_push_notifications_settings__["a" /* PushNotificationsSettingsPage */]);
    };
    SettingsPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Spam or Abuse',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__report_problem_report_problem__["a" /* ReportProblemPage */]);
                        modal.present();
                    }
                }, {
                    text: 'Something Is not working',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__report_problem_report_problem__["a" /* ReportProblemPage */]);
                        modal.present();
                    }
                }, {
                    text: 'General Feedback',
                    handler: function () {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__report_problem_report_problem__["a" /* ReportProblemPage */]);
                        modal.present();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n\n  <ion-item (click)="findFriends()">Find Friends\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    Account\n  </ion-list-header>\n  <ion-item>Change Password\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item>\n  		<ion-label> Private Account</ion-label>\n  	  <ion-toggle  checked="false"></ion-toggle>\n</ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    Settings\n  </ion-list-header>\n  <ion-item (click)="goToLinkedAccounts()">Linked Accounts\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item (click)="pushSettings()">Push Notification Settings\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n<ion-item>Cellular Data Usage\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n<ion-item>Edit Profile\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    Support\n  </ion-list-header>\n  <ion-item>Help Center\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item (click)="presentActionSheet()">Report a Problem\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    About\n  </ion-list-header>\n  <ion-item>Blog\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item (click)="goToPrivacy()">Privacy Policy\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n <ion-item (click)="goToTerms()">Terms\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n\n</ion-list>\n\n<ion-list>\n  <ion-item>Log Out</ion-item>\n</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Settings</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FriendsRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FriendsRequestPage = (function () {
    function FriendsRequestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsRequestPage');
    };
    return FriendsRequestPage;
}());
FriendsRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends-request',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/friends-request/friends-request.html"*/'<!--\n  Generated template for the FriendsRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-row padding class="search-btn">\n		<button  ion-button color="dark" class="action-btn">Search for friends	</button>\n	</ion-row>\n<ion-list>\n<ion-item>\n		<p class="list-title">Pending Friend Requests</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Katie Byron</h2>\n    <p>Friends with Ryan Cohen</p>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Friend</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Hide</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Barbara Pedro</h2>\n    <p>Friends with Bobby Moss</p>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Friend</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Hide</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Brandon Leonard</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Friend</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Hide</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n</ion-list>\n\n<ion-list>\n	<ion-item>\n		<p class="list-title">Suggested Friends</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Ross</h2>\n    <p>Friends with Lenny Lewis</p>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Request</button>\n		</ion-col>\n	\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Profile</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/friends-request/friends-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FriendsRequestPage);

//# sourceMappingURL=friends-request.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRepsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyRepsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyRepsPage = (function () {
    function MyRepsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyRepsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyRepsPage');
    };
    return MyRepsPage;
}());
MyRepsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-reps',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/my-reps/my-reps.html"*/'<!--\n  Generated template for the FriendsRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	\n<ion-list>\n<ion-item>\n		<p class="list-title">Federal</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n<ion-list>\n	<ion-item>\n		<p class="list-title">State</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n<ion-list>\n<ion-item>\n		<p class="list-title">Local</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">My Reps</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/my-reps/my-reps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyRepsPage);

//# sourceMappingURL=my-reps.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreaksHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StreaksHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StreaksHistoryPage = (function () {
    function StreaksHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StreaksHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StreaksHistoryPage');
    };
    return StreaksHistoryPage;
}());
StreaksHistoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-streaks-history',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/streaks-history/streaks-history.html"*/'<!--\n  Generated template for the StreaksHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <p class="white">Rally</p>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-row class="flame-bg">\n        <ion-col col-12>\n            <ion-icon name="md-flame"></ion-icon>\n        </ion-col>\n        <ion-col col-12>\n            <p class="white">Woo Hoo! You\'re on FIRE!!</p>\n        </ion-col>\n    </ion-row>\n    <ion-row padding class="star-row">\n        <ion-col col-12>\n            <p>Current Streak: <strong>17 Days</strong></p>\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n        <ion-col col-12>\n            <p>Previous Streak: <strong>6 Days</strong></p>\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    <ion-icon name="star"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n        <ion-col col-12>\n            <p>Longest Streak: <strong>32 Days</strong></p>\n        </ion-col>\n    </ion-row>\n    <ion-list>\n        <ion-list-header>\n            My Impact\n        </ion-list-header>\n        <ion-item>Actions Taken <span item-end>93</span></ion-item>\n        <ion-item>Shares <span item-end>64</span></ion-item>\n        <ion-item>Comments <span item-end>31</span></ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="min-height: auto; padding: 0;">\n        <ion-row>\n            <ion-col col-2 class="footer-icons">\n                <ion-icon name="ios-home"></ion-icon>\n            </ion-col>\n            <ion-col col-6>\n                <p class="white-footer">Streaks &amp; Impact</p>\n            </ion-col>\n            <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n                <ion-icon name="ios-notifications"></ion-icon>\n            </ion-col>\n            <ion-col class="footer-icons">\n                <ion-icon name="ios-person"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/streaks-history/streaks-history.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], StreaksHistoryPage);

//# sourceMappingURL=streaks-history.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowedOrganizationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FollowedOrganizationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FollowedOrganizationsPage = (function () {
    function FollowedOrganizationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FollowedOrganizationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowedOrganizationsPage');
    };
    return FollowedOrganizationsPage;
}());
FollowedOrganizationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-followed-organizations',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/followed-organizations/followed-organizations.html"*/'<!--\n  Generated template for the FollowedOrganizationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n        <ion-list-header>\n            Followed Organizations\n        </ion-list-header>\n    </ion-list>\n    <ion-row padding>\n      <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Organization</p>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Followed Organizations</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/followed-organizations/followed-organizations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FollowedOrganizationsPage);

//# sourceMappingURL=followed-organizations.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowedCandidatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FollowedCandidatesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FollowedCandidatesPage = (function () {
    function FollowedCandidatesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FollowedCandidatesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowedCandidatesPage');
    };
    return FollowedCandidatesPage;
}());
FollowedCandidatesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-followed-candidates',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/followed-candidates/followed-candidates.html"*/'<!--\n  Generated template for the FollowedOrganizationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n        <ion-list-header>\n            Followed Candidates\n        </ion-list-header>\n    </ion-list>\n    <ion-row padding>\n      <ion-col col-3>\n        <ion-avatar>\n          <img src="assets/img/login-image.jpg">\n        </ion-avatar>\n        <p>Pete Senator</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Pete Senator</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Pete Senator</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Pete Senator</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Pete Senator</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Pete Senator</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Pete Senator</p>\n      </ion-col>\n       <ion-col col-3>\n        <ion-thumbnail>\n          <img src="assets/img/login-image.jpg">\n        </ion-thumbnail>\n        <p>Pete Senator</p>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Followed Candidates</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/followed-candidates/followed-candidates.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FollowedCandidatesPage);

//# sourceMappingURL=followed-candidates.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeFiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomeFiltersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomeFiltersPage = (function () {
    function HomeFiltersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeFiltersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeFiltersPage');
    };
    return HomeFiltersPage;
}());
HomeFiltersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-filters',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/home-filters/home-filters.html"*/'<!--\n  Generated template for the HomeFiltersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="primary">    \n    <ion-title>Filter Feeds</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon (click)="goToFeeds()" ios="md-close" md="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="content" padding color="primary">\n  <ion-list>\n    <ion-item class="no-border" color="primary" no-padding>\n      <ion-input class="search" type="text" placeholder="Search term"></ion-input>\n    </ion-item>          \n  </ion-list>\n  <div class="subtitle" text-uppercase>\n    Feed Item Types\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6><button class="feed-type" text-uppercas block ion-button color="light">Favorites</button></ion-col>\n      <ion-col col-6><button class="feed-type" text-uppercas block ion-button color="light">Candidates</button></ion-col>\n      <ion-col col-6><button class="feed-type" text-uppercas block ion-button color="light">Actions</button></ion-col>\n      <ion-col col-6><button class="feed-type" text-uppercas block ion-button color="light">Events</button></ion-col>\n      <ion-col col-6><button class="feed-type" text-uppercas block ion-button color="light">Organizations</button></ion-col>\n      <ion-col col-6><button class="feed-type" text-uppercas block ion-button color="light">Friend\'s Activity</button></ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="subtitle" padding-top text-uppercase>\n    Issues - Touch to change\n  </div>\n  <div class="issues" padding-vertical>\n      Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.\n  </div>\n</ion-content>\n\n<ion-footer>\n    <div class="search-btn" padding>\n        <button class="feed-type" text-uppercas block ion-button color="light">Search</button>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/home-filters/home-filters.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HomeFiltersPage);

//# sourceMappingURL=home-filters.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_filters_home_filters__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay_overlay__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FeedPage = (function () {
    function FeedPage(navCtrl, alertCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    FeedPage.prototype.goToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alerts_alerts__["a" /* AlertsPage */]);
    };
    FeedPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    FeedPage.prototype.goToHomeFilter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_filters_home_filters__["a" /* HomeFiltersPage */]);
    };
    FeedPage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__overlay_overlay__["a" /* OverlayPage */]);
        popover.present();
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/feed/feed.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <p class="white">Rally</p>\n        </ion-title>\n        <ion-buttons end>\n            <button  (click)="goToHomeFilter()" ion-button icon-only>\n                <ion-icon name="ios-search"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <ion-fab right top>\n            <button ion-fab color="light">\n                <ion-icon name="ios-more"></ion-icon>\n            </button>\n            <ion-fab-list side="left">\n                <button ion-fab>\n                    <ion-icon name="logo-facebook"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-vimeo"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-googleplus"></ion-icon>\n                </button>\n            </ion-fab-list>\n        </ion-fab>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/img/login-image.jpg">\n            </ion-avatar>\n            <h2>ACLU</h2>\n        </ion-item>\n        <img src="assets/img/login-image.jpg">\n        <ion-card-content>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n            <p class="link">371 Likes, 212 Shares</p>\n        </ion-card-content>\n        <ion-row>\n            <ion-col class="token" col-8>\n                <p>You\'ve token action on this 3 times</p>\n            </ion-col>\n            <ion-col col-4 class="token-btn">\n                <button ion-button icon-left clear full style="height: 30px;     font-weight: 600;\n    font-size: 13px;">\n                    I\'M DONE\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="ios-share"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="min-height: auto; padding: 0;">\n        <ion-row>\n            <ion-col col-8>\n                <p (click)="presentPopover()" class="white-footer">Home</p>\n            </ion-col>\n            <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n                <button (click)="goToOtherPage()">\n                    <ion-icon name="ios-notifications"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="footer-icons">\n                <button (click)="goToProfile()">\n                    <ion-icon name="ios-person"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/feed/feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_events_filter_events__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.filterEvents = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter_events_filter_events__["a" /* FilterEventsPage */]);
        modal.present();
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="filterEvents()">\n        <ion-icon name="ios-search" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-row padding>\n		<h4 style="color: #545353;">October</h4>\n	</ion-row>\n	<ion-card>\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="danger">ACTION</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending\n    	</ion-col>\n  	</ion-row>\n    <h3>Call Senate on Gun Control Prop 101</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button>LOCATION EVENT</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending w/319 Others\n    	</ion-col>\n  	</ion-row>\n    <h3>No on 123 Rally</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-row padding>\n		<h4 style="color: #545353;">November</h4>\n	</ion-row>\n\n	<ion-card>\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n   Thursday November 21st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="secondary">OTHER</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending \n    	</ion-col>\n  	</ion-row>\n    <h3>All Voices on Deck for Peace</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Events</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/events/events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], EventsPage);

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsactivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FriendsactivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FriendsactivityPage = (function () {
    function FriendsactivityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsactivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsactivityPage');
    };
    return FriendsactivityPage;
}());
FriendsactivityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friendsactivity',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/friendsactivity/friendsactivity.html"*/'<!--\n  Generated template for the FriendsactivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	 <ion-card>\n       <ion-fab right top style="top: 4px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      	<img class="friend-headshot" src="assets/img/login-image.jpg" alt="">\n      </ion-col>\n      <ion-col col-7>\n       <ion-card-header>\n   			 Bob Smith\n  		</ion-card-header>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe error ipsa quasi, nobis a.</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n    	<p class="blue">371 Likes, 12 Shares</p>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 50px;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="md-call"></ion-icon></button>\n  </ion-fab> \n\n  <button ion-button full class="heart-btn"><ion-icon name="ios-heart"></ion-icon></button>\n\n  \n</ion-card>\n\n<ion-card>\n       <ion-fab right top style="top: 4px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      	<img class="friend-headshot" src="assets/img/login-image.jpg" alt="">\n      </ion-col>\n      <ion-col col-7>\n       <ion-card-header>\n   			 Leroy Jenkins\n  		</ion-card-header>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe error ipsa quasi, nobis a.</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n    	<p class="blue">371 Likes, 12 Shares</p>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 50px;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="ios-print"></ion-icon></button>\n  </ion-fab> \n\n  <button ion-button full class="heart-btn"><ion-icon name="ios-heart"></ion-icon></button>\n\n  \n</ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Friend\'s Activity</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/friendsactivity/friendsactivity.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FriendsactivityPage);

//# sourceMappingURL=friendsactivity.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrganizationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrganizationsPage = (function () {
    function OrganizationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrganizationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrganizationsPage');
    };
    return OrganizationsPage;
}());
OrganizationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-organizations',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/organizations/organizations.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Rally</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n      <ion-fab right top>\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>ACLU</h2>\n    </ion-item>\n    \n  <div class="organization-bg" style="background: url(\'assets/img/login-image.jpg\');">\n  		<div class="days-excerpt">\n  			<p class="white">2 Days Remaining</p>\n  		</div>\n  		<div class="railled-excerpt">\n  			<p class="white"><strong>1215</strong><br> Railled</p>\n  		</div>\n  		<div class="bottom-excerpt">\n  			<p class="white">Support the Dream Act</p>\n  		</div>\n  </div>\n\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <ion-row>\n    	<ion-col col-8>\n    		    <p class="link">371 Likes, 212 Shares</p>\n    	</ion-col>\n    	<ion-col col-4>\n    		<button ion-button color="dark" class="action-btn">Take action</button>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n   <ion-row>\n      <ion-col class="token" col-8>\n      <p>You\'ve token action on this 3 times</p>\n      </ion-col>\n      <ion-col col-4 class="token-btn">\n        <button ion-button icon-left clear full style="height: 30px; font-weight: 600;\n    font-size: 13px;">\n          I\'M DONE\n      </button>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n\n</ion-card>\n\n<ion-card class="simple-card">\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="danger">ACTION</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending\n    	</ion-col>\n  	</ion-row>\n    <h3>Call Senate on Gun Control Prop 101</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">My Organizations</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/organizations/organizations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], OrganizationsPage);

//# sourceMappingURL=organizations.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CandidatesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CandidatesPage = (function () {
    function CandidatesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CandidatesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CandidatesPage');
    };
    return CandidatesPage;
}());
CandidatesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-candidates',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/candidates/candidates.html"*/'<!--\n  Generated template for the CandidatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <p class="white">Rally</p>\n        </ion-title>\n        <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <ion-fab right top>\n            <button ion-fab color="light">\n                <ion-icon name="ios-more"></ion-icon>\n            </button>\n            <ion-fab-list side="left">\n                <button ion-fab>\n                    <ion-icon name="logo-facebook"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-vimeo"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-googleplus"></ion-icon>\n                </button>\n            </ion-fab-list>\n        </ion-fab>\n        <ion-card-header>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aut sed voluptate.\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/img/login-image.jpg">\n                        </ion-avatar>\n                        <h2>Senator Bob Jones</h2>\n                        <p>12:33pm</p>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-4 text-right style="line-height: 50px;">\n\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n        <ion-row>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="ios-share"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="min-height: auto; padding: 0;">\n        <ion-row>\n            <ion-col col-2 class="footer-icons">\n                <ion-icon name="ios-home"></ion-icon>\n            </ion-col>\n            <ion-col col-6>\n                <p class="white-footer">Candidates</p>\n            </ion-col>\n            <ion-col col-2 class="footer-icons" style="border-right: 1px solid #fff;">\n                <ion-icon name="ios-notifications"></ion-icon>\n            </ion-col>\n            <ion-col class="footer-icons">\n                <ion-icon name="ios-person"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/candidates/candidates.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CandidatesPage);

//# sourceMappingURL=candidates.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__call_call__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TakeactionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TakeactionPage = (function () {
    function TakeactionPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    TakeactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TakeactionPage');
    };
    TakeactionPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact Bob Representative',
            buttons: [
                {
                    text: 'Call',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__call_call__["a" /* CallPage */]);
                    }
                }, {
                    text: 'Post on Facebook',
                    handler: function () {
                        console.log('Post on Facebook clicked');
                    }
                }, {
                    text: 'Post message via Twitter',
                    handler: function () {
                        console.log('Post message via Twitter clicked');
                    }
                }, {
                    text: 'Send a Fax',
                    handler: function () {
                        console.log('Send a Fax clicked');
                    }
                }, {
                    text: 'Email',
                    handler: function () {
                        console.log('Email clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return TakeactionPage;
}());
TakeactionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-takeaction',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/takeaction/takeaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Rally</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n      <ion-fab right top>\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>NAACP</h2>\n    </ion-item>\n    \n  <div class="organization-bg" style="background: url(\'assets/img/login-image.jpg\');">\n  		\n  		<div class="railled-excerpt">\n  			<p class="white"><strong>711</strong><br> Railled</p>\n  		</div>\n  		<div class="bottom-excerpt">\n  			<p class="white">DEMOCRACY AWAKENING</p>\n  		</div>\n  </div>\n\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <p class="link">371 Likes, 212 Shares</p>\n    	\n  </ion-card-content>\n  	<ion-row class="grayBg">\n  		<p class="white">Sarah Jenkins, Jeremy Cohen and 58 of your friends railled</p>\n  	</ion-row>\n  	<ion-list>\n  	 <ion-item>\n      Why it\'s important\n   	 <ion-icon name="ios-add" item-end></ion-icon>\n  </ion-item>\n  <ion-item>\n      What to say (talking points)\n   	 <ion-icon name="ios-add" item-end></ion-icon>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="border-radius: 50%;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <button (click)="presentActionSheet()" item-end ion-button color="dark" class="action-btn">Contact</button>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="border-radius: 50%;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <button item-end ion-button color="dark" class="action-btn">Contact</button>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="border-radius: 50%;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <button item-end ion-button color="dark" class="action-btn">Contact</button>\n  </ion-item>\n</ion-list>\n\n  <ion-row>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n\n</ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Take Action</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/takeaction/takeaction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], TakeactionPage);

//# sourceMappingURL=takeaction.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CallPage = (function () {
    function CallPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallPage');
    };
    return CallPage;
}());
CallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-call',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/call/call.html"*/'<!--\n  Generated template for the CallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-row padding class="bordered">\n		<ion-col col-8>\n			<p class="gray">Calling this office</p>\n			<h3>Bob Representative</h3>\n			<p class="gray"><ion-icon name="ios-call"></ion-icon> (123) 456-7890</p>		\n		</ion-col>\n		<ion-col col-4>\n			<div class="bob-headshot"></div>\n		</ion-col>\n		<ion-col col-12>\n			This is your local representative in the house.\n		</ion-col>\n	</ion-row>\n\n	<ion-row padding>\n		<ion-list>\n			<ion-list-header style="border: none; padding-left: 0;">Talking Points</ion-list-header>\n			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eos veniam pariatur expedita aut fugit dicta maxime iure temporibus molestiae.</p>\n\n			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cumque fuga placeat quidem tenetur rerum sed provident ab, quisquam similique?</p>\n\n		</ion-list>\n	</ion-row>\n\n</ion-content>\n\n<ion-footer>\n	<ion-row no-padding>\n		<ion-col no-padding style="border-right: 1px solid #fff;">\n			  <button ion-button full class="bob-button">\n			  <ion-icon name="md-call" style="font-size: 40px;"></ion-icon>\n			  </button>\n\n		</ion-col>\n		<ion-col no-padding>\n			 <button ion-button full class="bob-button">\n			  <ion-icon name="md-close" style="font-size: 40px;"></ion-icon>\n			  </button>\n		</ion-col>\n	</ion-row>\n  <button style="margin: 0;" ion-button full color="danger">Trouble getting through?</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/call/call.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CallPage);

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoritesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the CandidatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <p class="white">Rally</p>\n        </ion-title>\n        <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card class="favorites">\n        <ion-fab right top>\n            <button ion-fab color="light">\n                <ion-icon name="ios-more"></ion-icon>\n            </button>\n            <ion-fab-list side="left">\n                <button ion-fab>\n                    <ion-icon name="logo-facebook"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-vimeo"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-googleplus"></ion-icon>\n                </button>\n            </ion-fab-list>\n        </ion-fab>\n        <ion-card-header>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aut sed voluptate.\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/img/login-image.jpg">\n                        </ion-avatar>\n                        <h2>Senator Bob Jones</h2>\n                        <p>12:33pm</p>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-4 text-right style="line-height: 50px;">\n\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n        <ion-row>\n            <ion-col class="blue red-btn">\n                <button ion-button icon-left clear full class="red-btn">\n                    <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="ios-share"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <ion-card class="takeAction">\n\n      <ion-fab right top style="top: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>NAACP</h2>\n    </ion-item>\n    \n  <div class="organization-bg" style="background: url(\'assets/img/login-image.jpg\');">\n  		\n  		<div class="railled-excerpt">\n  			<p class="white"><strong>711</strong><br> Railled</p>\n  		</div>\n  		<div class="bottom-excerpt">\n  			<p class="white">DEMOCRACY AWAKENING</p>\n  		</div>\n  </div>\n\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <p class="link">371 Likes, 212 Shares</p>\n    	\n  </ion-card-content>\n  \n\n  <ion-row>\n    <ion-col class="blue red-btn">\n      <button ion-button icon-left clear full class="red-btn">\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n  	<ion-row class="grayBg">\n  		<p class="white">Sarah Jenkins, Jeremy Cohen and 58 of your friends railled</p>\n  	</ion-row>\n\n</ion-card>\n\n <ion-card class="friendsActivity">\n       <ion-fab right top style="top: 0;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      	<img class="friend-headshot" src="assets/img/login-image.jpg" alt="">\n      </ion-col>\n      <ion-col col-7>\n\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe error ipsa quasi, nobis a.</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n    	<p class="blue">371 Likes, 12 Shares</p>\n    </ion-row>\n\n    \n\n  <button ion-button full class="heart-btn red-btn"><ion-icon name="ios-heart"></ion-icon></button>\n\n  \n</ion-card>\n<ion-card class="simple-card">\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="danger">ACTION</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending\n    	</ion-col>\n  	</ion-row>\n    <h3>Call Senate on Gun Control Prop 101</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="min-height: auto; padding: 0;">\n        <ion-row>\n            <ion-col col-2 class="footer-icons">\n                <ion-icon name="ios-home"></ion-icon>\n            </ion-col>\n            <ion-col col-6>\n                <p class="white-footer">Favorites</p>\n            </ion-col>\n            <ion-col col-2 class="footer-icons" style="border-right: 1px solid #fff;">\n                <ion-icon name="ios-notifications"></ion-icon>\n            </ion-col>\n            <ion-col class="footer-icons">\n                <ion-icon name="ios-person"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/favorites/favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/call/call.module": [
		474,
		50
	],
	"../pages/candidates/candidates.module": [
		473,
		49
	],
	"../pages/edit-profile/edit-profile.module": [
		478,
		48
	],
	"../pages/event-detail/event-detail.module": [
		477,
		21
	],
	"../pages/events/events.module": [
		470,
		20
	],
	"../pages/favorites/favorites.module": [
		476,
		19
	],
	"../pages/filter-events/filter-events.module": [
		483,
		1
	],
	"../pages/find-friends/find-friends.module": [
		458,
		18
	],
	"../pages/followed-candidates/followed-candidates.module": [
		468,
		17
	],
	"../pages/followed-organizations/followed-organizations.module": [
		467,
		16
	],
	"../pages/friends-request/friends-request.module": [
		464,
		15
	],
	"../pages/friendsactivity/friendsactivity.module": [
		471,
		14
	],
	"../pages/home-filters/home-filters.module": [
		469,
		13
	],
	"../pages/linked-accounts/linked-accounts.module": [
		457,
		12
	],
	"../pages/my-reps/my-reps.module": [
		465,
		11
	],
	"../pages/organizations/organizations.module": [
		472,
		10
	],
	"../pages/privacy-policy/privacy-policy.module": [
		460,
		9
	],
	"../pages/push-notifications-settings/push-notifications-settings.module": [
		461,
		8
	],
	"../pages/report-problem/report-problem.module": [
		462,
		7
	],
	"../pages/settings/settings.module": [
		463,
		6
	],
	"../pages/streaks-history/streaks-history.module": [
		466,
		5
	],
	"../pages/takeaction/takeaction.module": [
		475,
		4
	],
	"../pages/terms/terms.module": [
		459,
		3
	],
	"../pages/unlink-facebook/unlink-facebook.module": [
		480,
		0
	],
	"../pages/unlink-twitter/unlink-twitter.module": [
		481,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EventDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventDetailPage = (function () {
    function EventDetailPage(navCtrl, navParams, platform, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    EventDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailPage');
    };
    EventDetailPage.prototype.openMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return EventDetailPage;
}());
EventDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-detail',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/event-detail/event-detail.html"*/'<!--\n  Generated template for the EventDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only color="royal">\n        <ion-icon ios="ios-arrow-back" md="ios-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Rally</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon ios="ios-more" md="ios-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <div class="event">     \n    <div class="header" no-padding no-margin>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 col-sm>\n              <img src="assets/img/login-image.jpg">\n          </ion-col>\n          <ion-col col-10 col-sm>\n            <span class="title">Call Senate on Gun Control Prop 101</span>\n          </ion-col>              \n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="image-container">\n      <img class="featured-image" src="assets/img/login-image.jpg">\n      <ion-fab class="time" left top no-margin no-padding>\n        <button >\n          In 2 days\n        </button>\n      </ion-fab>\n    </div>\n    <div class="caption">Bob Smith, Leroy Jenkins and 3,213 others attending</div>\n    <div class="cta">\n        <ion-grid>\n          <ion-row padding-bottom>\n            <ion-col col-8 col-sm>\n                <span padding-vertical>Satuday October 1st, 2017</span>\n            </ion-col>\n            <ion-col col-4 col-sm no-padding >\n                <button ion-button text-uppercase color="main-red">Action</button>\n            </ion-col>              \n          </ion-row>\n          <ion-row>\n              <ion-col col-8 col-sm no-padding>\n                  <div class="address" no-padding>123 main street, Washington DC, 12345</div>\n              </ion-col>\n              <ion-col col-4 col-sm no-padding>\n                  <div class="hour" no-padding>10:00am - 12:00am</div>\n              </ion-col>              \n            </ion-row>\n        </ion-grid>\n        <div class="content" padding>\n          <h1>Why it\'s important</h1>\n          <p>Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales.</p>\n        </div>\n    </div>\n    <button class="add-calendar" ion-button full text-uppercase padding-horizontal>Add to my calendar</button>\n    <button class="count-me-in" ion-button full icon-left color="main-red">\n      <ion-icon ios="md-thumbs-up" md="md-thumbs-up"></ion-icon>\n      Count me in\n    </button>\n  </div>\n</ion-content>\n\n<ion-footer no-padding>\n    <ion-toolbar no-padding color="primary">\n        <ion-grid no-padding>\n            <ion-row>\n              <ion-col col-2 col-sm>\n                  <button ion-button icon-only>\n                    <ion-icon name="home"></ion-icon>\n                  </button>\n              </ion-col>\n              <ion-col col-6 col-sm no-padding text-left>\n                <button class="events" no-padding ion-button block (click)="openMenu()" color="light-blue" text-left>\n                  Events\n                </button>\n              </ion-col> \n              <ion-col col-2 col-sm>\n                  <button ion-button icon-only>\n                      <ion-icon ios="ios-notifications" md="ios-notifications"></ion-icon>\n                    </button>\n              </ion-col>\n              <ion-col col-2 col-sm>\n                  <button ion-button icon-only>\n                      <ion-icon ios="ios-person" md="ios-person"></ion-icon>                      \n                    </button>\n              </ion-col>             \n            </ion-row>\n          </ion-grid>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/event-detail/event-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], EventDetailPage);

//# sourceMappingURL=event-detail.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_overlay__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, alertCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.goToOtherPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alerts_alerts__["a" /* AlertsPage */]);
    };
    EditProfilePage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    EditProfilePage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__overlay_overlay__["a" /* OverlayPage */]);
        popover.present();
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="main-white">\n    <ion-buttons start>\n      <button ion-button icon-only color="royal" clear>\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title>Rally</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" clear>\n        Done\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div text-center>\n      <ion-avatar class="img-avatar">\n          <img src="assets/img/login-image.jpg">\n      </ion-avatar>\n      <button ion-button clear>Change Profile Photo</button>\n  \n    </div>\n\n    <ion-list>\n      <ion-list-header>\n        PUBLIC INFORMATION\n      </ion-list-header>\n      <ion-item>\n        <ion-icon ios="ios-pricetag" md="ios-pricetag" item-start></ion-icon>\n          Sally Smith\n      </ion-item>\n      <ion-item>\n          <ion-icon ios="md-globe" md="md-globe" item-start></ion-icon>\n            http://sally-smith.com\n      </ion-item>\n      <ion-item>\n          <ion-icon ios="md-information-circle" md="md-information-circle" item-start></ion-icon>\n            I like cool things\n      </ion-item>\n      <ion-item>\n          <ion-icon ios="md-map" md="md-map" item-start></ion-icon>\n            Phoenix, AZ\n      </ion-item>\n      <ion-item>\n          <ion-label>Hide my profile from search</ion-label>\n        <ion-icon ios="ios-lock" md="md-lock" item-start></ion-icon>        \n        <ion-toggle checked="false" item-end></ion-toggle>      \n      </ion-item>\n    </ion-list>\n  <br>\n    <ion-list>\n        <ion-list-header>\n          PRIVATE INFORMATION\n        </ion-list-header>\n        <ion-item>\n            <ion-icon ios="ios-mail" md="md-mail" item-start></ion-icon>\n            me@sallysmith.com\n        </ion-item>\n        <ion-item>\n            <ion-icon ios="ios-phone-portrait" md="md-phone-portrait" item-start></ion-icon>\n              (123) 456-7890\n        </ion-item>\n        <ion-item>\n            <ion-icon ios="ios-person" md="md-person" item-start></ion-icon>\n              Female\n        </ion-item>\n        <ion-item>\n            <ion-icon ios="ios-home" md="md-home" item-start></ion-icon>\n              123 main St. #12345, Washington DC, 12345\n        </ion-item>        \n      </ion-list>\n\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="min-height: auto; padding: 0;" color="primary">\n        <ion-row>\n            <ion-col col-2 class="footer-icons" style="border-right: 0px solid;">\n                <button (click)="goToOtherPage()">\n                    <ion-icon name="ios-home"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <p (click)="presentPopover()" class="white-footer">Edit Profiles</p>\n            </ion-col>\n            <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n                <button (click)="goToOtherPage()">\n                    <ion-icon name="ios-notifications"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="footer-icons">\n                <button (click)="goToProfile()">\n                    <ion-icon name="ios-person"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/edit-profile/edit-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
], EditProfilePage);

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(324);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_alerts_alerts__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_overlay_overlay__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_events_events__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_organizations_organizations__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_friendsactivity_friendsactivity__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_candidates_candidates__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_takeaction_takeaction__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_favorites_favorites__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_friends_request_friends_request__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_linked_accounts_linked_accounts__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_find_friends_find_friends__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_privacy_policy_privacy_policy__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_event_detail_event_detail__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_filters_home_filters__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_my_reps_my_reps__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_streaks_history_streaks_history__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_followed_organizations_followed_organizations__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_followed_candidates_followed_candidates__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_edit_profile_edit_profile__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_push_notifications_settings_push_notifications_settings__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_call_call__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_report_problem_report_problem__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_unlink_twitter_unlink_twitter__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_filter_events_filter_events__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angularfire2__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angularfire2_auth__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_push__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var config = {
    apiKey: "AIzaSyCji0mJw_7CYYcVupmz3TDP0Q6ABOOpcbE",
    authDomain: "test-144e3.firebaseapp.com",
    databaseURL: "https://test-144e3.firebaseio.com",
    projectId: "test-144e3",
    storageBucket: "test-144e3.appspot.com",
    messagingSenderId: "924920604639"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_alerts_alerts__["a" /* AlertsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_overlay_overlay__["a" /* OverlayPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_friendsactivity_friendsactivity__["a" /* FriendsactivityPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_organizations_organizations__["a" /* OrganizationsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_candidates_candidates__["a" /* CandidatesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_takeaction_takeaction__["a" /* TakeactionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_friends_request_friends_request__["a" /* FriendsRequestPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_linked_accounts_linked_accounts__["a" /* LinkedAccountsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_find_friends_find_friends__["a" /* FindFriendsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_event_detail_event_detail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_filters_home_filters__["a" /* HomeFiltersPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_my_reps_my_reps__["a" /* MyRepsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_streaks_history_streaks_history__["a" /* StreaksHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_followed_organizations_followed_organizations__["a" /* FollowedOrganizationsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_followed_candidates_followed_candidates__["a" /* FollowedCandidatesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_push_notifications_settings_push_notifications_settings__["a" /* PushNotificationsSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_call_call__["a" /* CallPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_report_problem_report_problem__["a" /* ReportProblemPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_unlink_twitter_unlink_twitter__["a" /* UnlinkTwitterPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_filter_events_filter_events__["a" /* FilterEventsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/linked-accounts/linked-accounts.module#LinkedAccountsPageModule', name: 'LinkedAccountsPage', segment: 'linked-accounts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/find-friends/find-friends.module#FindFriendsPageModule', name: 'FindFriendsPage', segment: 'find-friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule', name: 'PrivacyPolicyPage', segment: 'privacy-policy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends-request/friends-request.module#FriendsRequestPageModule', name: 'FriendsRequestPage', segment: 'friends-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-reps/my-reps.module#MyRepsPageModule', name: 'MyRepsPage', segment: 'my-reps', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/streaks-history/streaks-history.module#StreaksHistoryPageModule', name: 'StreaksHistoryPage', segment: 'streaks-history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/followed-organizations/followed-organizations.module#FollowedOrganizationsPageModule', name: 'FollowedOrganizationsPage', segment: 'followed-organizations', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/followed-candidates/followed-candidates.module#FollowedCandidatesPageModule', name: 'FollowedCandidatesPage', segment: 'followed-candidates', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-filters/home-filters.module#HomeFiltersPageModule', name: 'HomeFiltersPage', segment: 'home-filters', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friendsactivity/friendsactivity.module#FriendsactivityPageModule', name: 'FriendsactivityPage', segment: 'friendsactivity', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/organizations/organizations.module#OrganizationsPageModule', name: 'OrganizationsPage', segment: 'organizations', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/candidates/candidates.module#CandidatesPageModule', name: 'CandidatesPage', segment: 'candidates', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/takeaction/takeaction.module#TakeactionPageModule', name: 'TakeactionPage', segment: 'takeaction', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-detail/event-detail.module#EventDetailPageModule', name: 'EventDetailPage', segment: 'event-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/call/call.module#CallPageModule', name: 'CallPage', segment: 'call', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/push-notifications-settings/push-notifications-settings.module#PushNotificationsSettingsPageModule', name: 'PushNotificationsSettingsPage', segment: 'push-notifications-settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/report-problem/report-problem.module#ReportProblemPageModule', name: 'ReportProblemPage', segment: 'report-problem', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/unlink-facebook/unlink-facebook.module#UnlinkFacebookPageModule', name: 'UnlinkFacebookPage', segment: 'unlink-facebook', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/unlink-twitter/unlink-twitter.module#UnlinkTwitterPageModule', name: 'UnlinkTwitterPage', segment: 'unlink-twitter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filter-events/filter-events.module#FilterEventsPageModule', name: 'FilterEventsPage', segment: 'filter-events', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_35_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_36_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_alerts_alerts__["a" /* AlertsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_overlay_overlay__["a" /* OverlayPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_friendsactivity_friendsactivity__["a" /* FriendsactivityPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_organizations_organizations__["a" /* OrganizationsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_candidates_candidates__["a" /* CandidatesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_takeaction_takeaction__["a" /* TakeactionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_friends_request_friends_request__["a" /* FriendsRequestPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_linked_accounts_linked_accounts__["a" /* LinkedAccountsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_find_friends_find_friends__["a" /* FindFriendsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_event_detail_event_detail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_filters_home_filters__["a" /* HomeFiltersPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_my_reps_my_reps__["a" /* MyRepsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_streaks_history_streaks_history__["a" /* StreaksHistoryPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_followed_organizations_followed_organizations__["a" /* FollowedOrganizationsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_followed_candidates_followed_candidates__["a" /* FollowedCandidatesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_push_notifications_settings_push_notifications_settings__["a" /* PushNotificationsSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_call_call__["a" /* CallPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_report_problem_report_problem__["a" /* ReportProblemPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_unlink_twitter_unlink_twitter__["a" /* UnlinkTwitterPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_filter_events_filter_events__["a" /* FilterEventsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_push__["a" /* Push */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Push, PushObject, PushOptions } from '@ionic-native/push';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__["a" /* FeedPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this.pushsetup();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(fire, navCtrl, alertCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.facebookLoggedIn = false;
        this.provider = {
            loggedin: false,
            name: '',
            profilePicture: '',
            email: false
        };
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 5000;
        this.slides.freeMode = true;
        this.slides.loop = true;
        this.slides.pager = true;
        this.slides.paginationType = 'bullets';
    };
    HomePage.prototype.LoginWithFacebook = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider())
            .then(function (res) {
            console.log('From --Facebook--');
            _this.provider.loggedin = true;
            _this.provider.name = res.user.displayName;
            _this.provider.email = res.user.email;
            console.log(res);
        });
    };
    HomePage.prototype.TwitterSignIn = function () {
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.TwitterAuthProvider())
            .then(function (res) {
            console.log('From --Twitter--');
            console.log(res);
            /*this.provider.loggedin = true;
            this.provider.name = res.user.displayName;
            this.provider.emai = res.user.email;
            this.provider.profilePicture = res.user.photoURL;*/
        });
    };
    HomePage.prototype.Logout = function () {
        this.fire.auth.signOut();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Welcome to Rally</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p style="margin-bottom: 30px; font-size: 14px;">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus, eligendi! Perferendis natus quos at, nesciunt necessitatibus reiciendis inventore, velit animi commodi magni dolore quod debitis, consequuntur illum tempora consequatur?\n  </p>\n  <ion-slides margin-bottom>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n  </ion-slides>\n  <div text-center margin-top>\n    <button ion-button color="facebook" icon-left block outline margin-top (click)="LoginWithFacebook()" > <ion-icon name="logo-facebook"></ion-icon>Login with Facebook</button>\n    <button ion-button color="twitter" icon-left block outline margin-top (click)="TwitterSignIn()"> <ion-icon name="logo-twitter"></ion-icon>Login with Twitter</button>\n    <button ion-button color="primary" clear margin-top> Skip </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnlinkTwitterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UnlinkTwitterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UnlinkTwitterPage = (function () {
    function UnlinkTwitterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnlinkTwitterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnlinkTwitterPage');
    };
    return UnlinkTwitterPage;
}());
UnlinkTwitterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-unlink-twitter',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/unlink-twitter/unlink-twitter.html"*/'<!--\n  Generated template for the UnlinkTwitterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n      <ion-toolbar color="primary">\n        <ion-buttons start>\n          <button ion-button icon-only>\n              <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n    \n        <ion-title>Rally</ion-title>\n    \n      </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list >\n    <ion-list-header>\n        Account\n    </ion-list-header>\n    <ion-item ion-item >\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      <button ion-button clear item-start>\n        Twitter\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/unlink-twitter/unlink-twitter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], UnlinkTwitterPage);

//# sourceMappingURL=unlink-twitter.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FilterEventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FilterEventsPage = (function () {
    function FilterEventsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    FilterEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterEventsPage');
    };
    FilterEventsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FilterEventsPage;
}());
FilterEventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter-events',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/filter-events/filter-events.html"*/'<!--\n  Generated template for the FilterEventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n        <ion-title start>\n            <p class="white">Filter Events</p>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="dismiss()">\n                <ion-icon name="md-close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-list-header style="border:none; background-color: #4a90e2; color: #fff; text-transform: uppercase;">\n            Distance from me\n        </ion-list-header>\n        <ion-item style="border:none; background-color: #4a90e2; color: #fff;">\n            <ion-range [(ngModel)]="structure" style="color: #fff;">\n                <p range-right class="white">50 MILES</p>\n            </ion-range>\n        </ion-item>\n        <ion-list-header style="border:none; background-color: #4a90e2; color: #fff; text-transform: uppercase;">\n            Event types - Touch to change\n        </ion-list-header>\n        <p padding>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eveniet rem non possimus, ipsam reprehenderit ut omnis ab saepe ad.</p>\n    </ion-list>\n    <ion-list>\n        <ion-list-header style="border:none; background-color: #4a90e2; color: #fff; text-transform: uppercase;">\n            Date Range\n        </ion-list-header>\n        <ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label>End Date</ion-label>\n            <ion-datetime displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n    	<ion-list-header style="border:none; background-color: #4a90e2; color: #fff; text-transform: uppercase;">\n    		Search\n        </ion-list-header>\n        <ion-searchbar style="background: transparent;" (input)="getItems($event)"></ion-searchbar>\n     </ion-list>\n</ion-content>\n<ion-footer padding>\n    <ion-toolbar>\n        <button ion-button full class="filter-btn">FILTER</button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/filter-events/filter-events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], FilterEventsPage);

//# sourceMappingURL=filter-events.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_request_friends_request__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_reps_my_reps__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__streaks_history_streaks_history__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__followed_organizations_followed_organizations__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followed_candidates_followed_candidates__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.goToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    ProfilePage.prototype.goToRequests = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friends_request_friends_request__["a" /* FriendsRequestPage */]);
    };
    ProfilePage.prototype.goToReps = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_reps_my_reps__["a" /* MyRepsPage */]);
    };
    ProfilePage.prototype.goToStreaks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__streaks_history_streaks_history__["a" /* StreaksHistoryPage */]);
    };
    ProfilePage.prototype.goToFollowedOrganizations = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__followed_organizations_followed_organizations__["a" /* FollowedOrganizationsPage */]);
    };
    ProfilePage.prototype.goToFollowedCandidates = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__followed_candidates_followed_candidates__["a" /* FollowedCandidatesPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-left>\n      <p class="white">Rally</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToRequests()" >\n        <ion-icon name="ios-person"></ion-icon>\n      </button>\n    </ion-buttons>\n     <ion-buttons end>\n      <button ion-button icon-only (click)="goToSettings()">\n        <ion-icon name="ios-cog-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row padding>\n    <ion-col col-4 class="profile-headshot">\n    <ion-avatar item-start class="profile-img">\n     <button ion-button icon-only (click)="goToStreaks()" style="height: auto;">\n      <img src="assets/img/login-image.jpg">\n      </button>\n    </ion-avatar>\n    <h4>Sally Smith</h4>\n    <p>Washington, DC</p>\n    </ion-col>\n    <ion-col col-8 class="profile-counts">\n      <ion-row>\n        <ion-col>\n          <h4>103</h4>\n          <p class="small">Friends</p>\n        </ion-col>\n        <ion-col (click)="goToFollowedCandidates()">\n        <h4>32</h4>\n        <p class="small">Candidates</p>\n        </ion-col>\n         <ion-col (click)="goToFollowedOrganizations()">\n        <h4>19</h4>\n        <p class="small">Organizations</p>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="light" outline>Edit Profile </button>\n\n    </ion-col>\n    <ion-col col-8>\n    <p>I like cool things</p>\n    </ion-col>\n     <ion-col col-4>\n        <button ion-button color="light" outline (click)="goToReps()">My Reps</button>\n\n    </ion-col>  \n  </ion-row>\n\n    <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      </ion-col>\n      <ion-col col-7>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        <p>via website.com</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="ios-heart"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n\n  <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n        <p class="excerpt">Private</p>\n      </ion-col>\n      <ion-col col-7 class="inactive">\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Sally Smith</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="logo-usd"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n\n   <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      </ion-col>\n      <ion-col col-7>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Sally Smith</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="md-call"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n    \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Profile</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="active-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

},[305]);
//# sourceMappingURL=main.js.map