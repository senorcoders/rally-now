webpackJsonp([10],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_request_friends_request__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_reps_my_reps__ = __webpack_require__(460);
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
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-left>\n      <p class="white">Rally</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToRequests()" >\n        <ion-icon name="ios-person"></ion-icon>\n      </button>\n    </ion-buttons>\n     <ion-buttons end>\n      <button ion-button icon-only (click)="goToSettings()">\n        <ion-icon name="ios-cog-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row padding>\n    <ion-col col-4 class="profile-headshot">\n    <ion-avatar item-start class="profile-img">\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h4>Sally Smith</h4>\n    <p>Washington, DC</p>\n    </ion-col>\n    <ion-col col-8 class="profile-counts">\n      <ion-row>\n        <ion-col>\n          <h4>103</h4>\n          <p class="small">Friends</p>\n        </ion-col>\n        <ion-col>\n        <h4>32</h4>\n        <p class="small">Candidates</p>\n        </ion-col>\n         <ion-col>\n        <h4>19</h4>\n        <p class="small">Organizations</p>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="light" outline>Edit Profile </button>\n\n    </ion-col>\n    <ion-col col-8>\n    <p>I like cool things</p>\n    </ion-col>\n     <ion-col col-4>\n        <button ion-button color="light" outline (click)="goToReps()">My Reps</button>\n\n    </ion-col>  \n  </ion-row>\n\n    <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      </ion-col>\n      <ion-col col-7>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        <p>via website.com</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="ios-heart"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n\n  <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n        <p class="excerpt">Private</p>\n      </ion-col>\n      <ion-col col-7 class="inactive">\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Sally Smith</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="logo-usd"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n\n   <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      </ion-col>\n      <ion-col col-7>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Sally Smith</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="md-call"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n    \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Profile</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="active-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
], ProfilePage);

var _a;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedAccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-linked-accounts',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/linked-accounts/linked-accounts.html"*/'<!--\n  Generated template for the LinkedAccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar  color="primary">\n      <ion-title>Rally</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list>\n      <ion-item ion-item *ngFor="let account of LinkedAccounts">\n        <ion-icon name="{{account.icon}}" item-start></ion-icon>\n        <h2 item-start>{{ account.name }}</h2>\n        <button  (click)="itemSelected(account)" ion-button clear item-end>\n          {{ account.username }}           \n        </button>\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/linked-accounts/linked-accounts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LinkedAccountsPage);

//# sourceMappingURL=linked-accounts.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-find-friends',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/find-friends/find-friends.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n\n  <ion-item>\n  	<ion-icon item-start name="ios-mail"></ion-icon>\n  	via Email\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n   <ion-item>\n  	<ion-icon item-start name="logo-facebook"></ion-icon>\n  	Find Facebook Friends\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n   <ion-item>\n  	<ion-icon item-start name="logo-twitter"></ion-icon>\n  	Find Twitter Friends\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n   <ion-item>\n  	<ion-icon item-start name="ios-person"></ion-icon>\n  	From My Contacts\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Find Friends</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/find-friends/find-friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FindFriendsPage);

//# sourceMappingURL=find-friends.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linked_accounts_linked_accounts__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_friends_find_friends__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy__ = __webpack_require__(458);
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
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n\n  <ion-item (click)="findFriends()">Find Friends\n	<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    Account\n  </ion-list-header>\n  <ion-item>Change Password\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item>\n  		<ion-label> Private Account</ion-label>\n  	  <ion-toggle  checked="false"></ion-toggle>\n</ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    Settings\n  </ion-list-header>\n  <ion-item (click)="goToLinkedAccounts()">Linked Accounts\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item>Push Notification Settings\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n<ion-item>Cellular Data Usage\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n<ion-item>Edit Profile\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    Support\n  </ion-list-header>\n  <ion-item>Help Center\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item>Report a Problem\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    About\n  </ion-list-header>\n  <ion-item>Blog\n		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n  </ion-item>\n  <ion-item (click)="goToPrivacy()">Privacy Policy\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n <ion-item (click)="goToTerms()">Terms\n  		<ion-icon item-end name="ios-arrow-forward"></ion-icon>\n</ion-item>\n\n</ion-list>\n\n<ion-list>\n  <ion-item>Log Out</ion-item>\n</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Settings</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends-request',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/friends-request/friends-request.html"*/'<!--\n  Generated template for the FriendsRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-row padding class="search-btn">\n		<button  ion-button color="dark" class="action-btn">Search for friends	</button>\n	</ion-row>\n<ion-list>\n<ion-item>\n		<p class="list-title">Pending Friend Requests</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Katie Byron</h2>\n    <p>Friends with Ryan Cohen</p>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Friend</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Hide</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Barbara Pedro</h2>\n    <p>Friends with Bobby Moss</p>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Friend</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Hide</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Brandon Leonard</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Friend</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Hide</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n</ion-list>\n\n<ion-list>\n	<ion-item>\n		<p class="list-title">Suggested Friends</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Ross</h2>\n    <p>Friends with Lenny Lewis</p>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Request</button>\n		</ion-col>\n	\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Profile</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/friends-request/friends-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FriendsRequestPage);

//# sourceMappingURL=friends-request.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-row padding>\n		<h4 style="color: #545353;">October</h4>\n	</ion-row>\n	<ion-card>\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="danger">ACTION</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending\n    	</ion-col>\n  	</ion-row>\n    <h3>Call Senate on Gun Control Prop 101</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button>LOCATION EVENT</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending w/319 Others\n    	</ion-col>\n  	</ion-row>\n    <h3>No on 123 Rally</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-row padding>\n		<h4 style="color: #545353;">November</h4>\n	</ion-row>\n\n	<ion-card>\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n   Thursday November 21st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="secondary">OTHER</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending \n    	</ion-col>\n  	</ion-row>\n    <h3>All Voices on Deck for Peace</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Events</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/events/events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EventsPage);

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsactivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friendsactivity',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/friendsactivity/friendsactivity.html"*/'<!--\n  Generated template for the FriendsactivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	 <ion-card>\n       <ion-fab right top style="top: 4px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      	<img class="friend-headshot" src="assets/img/login-image.jpg" alt="">\n      </ion-col>\n      <ion-col col-7>\n       <ion-card-header>\n   			 Bob Smith\n  		</ion-card-header>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe error ipsa quasi, nobis a.</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n    	<p class="blue">371 Likes, 12 Shares</p>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 50px;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="md-call"></ion-icon></button>\n  </ion-fab> \n\n  <button ion-button full class="heart-btn"><ion-icon name="ios-heart"></ion-icon></button>\n\n  \n</ion-card>\n\n<ion-card>\n       <ion-fab right top style="top: 4px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      	<img class="friend-headshot" src="assets/img/login-image.jpg" alt="">\n      </ion-col>\n      <ion-col col-7>\n       <ion-card-header>\n   			 Leroy Jenkins\n  		</ion-card-header>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe error ipsa quasi, nobis a.</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n    	<p class="blue">371 Likes, 12 Shares</p>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 50px;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="ios-print"></ion-icon></button>\n  </ion-fab> \n\n  <button ion-button full class="heart-btn"><ion-icon name="ios-heart"></ion-icon></button>\n\n  \n</ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Friend\'s Activity</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/friendsactivity/friendsactivity.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FriendsactivityPage);

//# sourceMappingURL=friendsactivity.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-organizations',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/organizations/organizations.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Rally</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n      <ion-fab right top>\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>ACLU</h2>\n    </ion-item>\n    \n  <div class="organization-bg" style="background: url(\'assets/img/login-image.jpg\');">\n  		<div class="days-excerpt">\n  			<p class="white">2 Days Remaining</p>\n  		</div>\n  		<div class="railled-excerpt">\n  			<p class="white"><strong>1215</strong><br> Railled</p>\n  		</div>\n  		<div class="bottom-excerpt">\n  			<p class="white">Support the Dream Act</p>\n  		</div>\n  </div>\n\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <ion-row>\n    	<ion-col col-8>\n    		    <p class="link">371 Likes, 212 Shares</p>\n    	</ion-col>\n    	<ion-col col-4>\n    		<button ion-button color="dark" class="action-btn">Take action</button>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n   <ion-row>\n      <ion-col class="token" col-8>\n      <p>You\'ve token action on this 3 times</p>\n      </ion-col>\n      <ion-col col-4 class="token-btn">\n        <button ion-button icon-left clear full style="height: 30px;">\n          I\'M DONE\n      </button>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n\n</ion-card>\n\n<ion-card class="simple-card">\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="danger">ACTION</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending\n    	</ion-col>\n  	</ion-row>\n    <h3>Call Senate on Gun Control Prop 101</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">My Organizations</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/organizations/organizations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], OrganizationsPage);

//# sourceMappingURL=organizations.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-candidates',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/candidates/candidates.html"*/'<!--\n  Generated template for the CandidatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <p class="white">Rally</p>\n        </ion-title>\n        <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <ion-fab right top>\n            <button ion-fab color="light">\n                <ion-icon name="ios-more"></ion-icon>\n            </button>\n            <ion-fab-list side="left">\n                <button ion-fab>\n                    <ion-icon name="logo-facebook"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-vimeo"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-googleplus"></ion-icon>\n                </button>\n            </ion-fab-list>\n        </ion-fab>\n        <ion-card-header>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aut sed voluptate.\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/img/login-image.jpg">\n                        </ion-avatar>\n                        <h2>Senator Bob Jones</h2>\n                        <p>12:33pm</p>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-4 text-right style="line-height: 50px;">\n\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n        <ion-row>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="ios-share"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="min-height: auto; padding: 0;">\n        <ion-row>\n            <ion-col col-2 class="footer-icons">\n                <ion-icon name="ios-home"></ion-icon>\n            </ion-col>\n            <ion-col col-6>\n                <p class="white-footer">Candidates</p>\n            </ion-col>\n            <ion-col col-2 class="footer-icons" style="border-right: 1px solid #fff;">\n                <ion-icon name="ios-notifications"></ion-icon>\n            </ion-col>\n            <ion-col class="footer-icons">\n                <ion-icon name="ios-person"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/candidates/candidates.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CandidatesPage);

//# sourceMappingURL=candidates.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function TakeactionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TakeactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TakeactionPage');
    };
    return TakeactionPage;
}());
TakeactionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-takeaction',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/takeaction/takeaction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Rally</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n      <ion-fab right top>\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>NAACP</h2>\n    </ion-item>\n    \n  <div class="organization-bg" style="background: url(\'assets/img/login-image.jpg\');">\n  		\n  		<div class="railled-excerpt">\n  			<p class="white"><strong>711</strong><br> Railled</p>\n  		</div>\n  		<div class="bottom-excerpt">\n  			<p class="white">DEMOCRACY AWAKENING</p>\n  		</div>\n  </div>\n\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <p class="link">371 Likes, 212 Shares</p>\n    	\n  </ion-card-content>\n  	<ion-row class="grayBg">\n  		<p class="white">Sarah Jenkins, Jeremy Cohen and 58 of your friends railled</p>\n  	</ion-row>\n  	<ion-list>\n  	 <ion-item>\n      Why it\'s important\n   	 <ion-icon name="ios-add" item-end></ion-icon>\n  </ion-item>\n  <ion-item>\n      What to say (talking points)\n   	 <ion-icon name="ios-add" item-end></ion-icon>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="border-radius: 50%;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <button item-end ion-button color="dark" class="action-btn">Contact</button>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="border-radius: 50%;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <button item-end ion-button color="dark" class="action-btn">Contact</button>\n  </ion-item>\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="border-radius: 50%;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <button item-end ion-button color="dark" class="action-btn">Contact</button>\n  </ion-item>\n</ion-list>\n\n  <ion-row>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n\n</ion-card>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Take Action</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/takeaction/takeaction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TakeactionPage);

//# sourceMappingURL=takeaction.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the CandidatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <p class="white">Rally</p>\n        </ion-title>\n        <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card class="favorites">\n        <ion-fab right top>\n            <button ion-fab color="light">\n                <ion-icon name="ios-more"></ion-icon>\n            </button>\n            <ion-fab-list side="left">\n                <button ion-fab>\n                    <ion-icon name="logo-facebook"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-vimeo"></ion-icon>\n                </button>\n                <button ion-fab>\n                    <ion-icon name="logo-googleplus"></ion-icon>\n                </button>\n            </ion-fab-list>\n        </ion-fab>\n        <ion-card-header>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aut sed voluptate.\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/img/login-image.jpg">\n                        </ion-avatar>\n                        <h2>Senator Bob Jones</h2>\n                        <p>12:33pm</p>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-4 text-right style="line-height: 50px;">\n\n                    <ion-icon name="logo-twitter"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n        <ion-row>\n            <ion-col class="blue red-btn">\n                <button ion-button icon-left clear full class="red-btn">\n                    <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="blue">\n                <button ion-button icon-left clear full>\n                    <ion-icon name="ios-share"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <ion-card class="takeAction">\n\n      <ion-fab right top style="top: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>NAACP</h2>\n    </ion-item>\n    \n  <div class="organization-bg" style="background: url(\'assets/img/login-image.jpg\');">\n  		\n  		<div class="railled-excerpt">\n  			<p class="white"><strong>711</strong><br> Railled</p>\n  		</div>\n  		<div class="bottom-excerpt">\n  			<p class="white">DEMOCRACY AWAKENING</p>\n  		</div>\n  </div>\n\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <p class="link">371 Likes, 212 Shares</p>\n    	\n  </ion-card-content>\n  \n\n  <ion-row>\n    <ion-col class="blue red-btn">\n      <button ion-button icon-left clear full class="red-btn">\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n  	<ion-row class="grayBg">\n  		<p class="white">Sarah Jenkins, Jeremy Cohen and 58 of your friends railled</p>\n  	</ion-row>\n\n</ion-card>\n\n <ion-card class="friendsActivity">\n       <ion-fab right top style="top: 0;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      	<img class="friend-headshot" src="assets/img/login-image.jpg" alt="">\n      </ion-col>\n      <ion-col col-7>\n\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe error ipsa quasi, nobis a.</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n    	<p class="blue">371 Likes, 12 Shares</p>\n    </ion-row>\n\n    \n\n  <button ion-button full class="heart-btn red-btn"><ion-icon name="ios-heart"></ion-icon></button>\n\n  \n</ion-card>\n<ion-card class="simple-card">\n	<ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-card-header>\n    Saturday October 1st, 2017\n  </ion-card-header>\n\n  <ion-card-content>\n  	<ion-row>\n  		<ion-col col-6>\n    		<button ion-button color="danger">ACTION</button>\n    	</ion-col>\n    	<ion-col text-right col-6 style="line-height: 35px;">\n    		Attending\n    	</ion-col>\n  	</ion-row>\n    <h3>Call Senate on Gun Control Prop 101</h3>\n    <ion-row>\n    	\n    	<ion-col col-8>\n    		<p class="street">\n    			123 Main Street, Washington DC, 12345\n    		</p>\n    		\n    	</ion-col>\n    	<ion-col col-4>\n    		<strong>10:00am - 12:00pm</strong>\n    	</ion-col>\n    </ion-row>\n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n<ion-footer>\n    <ion-toolbar style="min-height: auto; padding: 0;">\n        <ion-row>\n            <ion-col col-2 class="footer-icons">\n                <ion-icon name="ios-home"></ion-icon>\n            </ion-col>\n            <ion-col col-6>\n                <p class="white-footer">Favorites</p>\n            </ion-col>\n            <ion-col col-2 class="footer-icons" style="border-right: 1px solid #fff;">\n                <ion-icon name="ios-notifications"></ion-icon>\n            </ion-col>\n            <ion-col class="footer-icons">\n                <ion-icon name="ios-person"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/favorites/favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/candidates/candidates.module": [
		452,
		26
	],
	"../pages/events/events.module": [
		449,
		25
	],
	"../pages/favorites/favorites.module": [
		454,
		22
	],
	"../pages/find-friends/find-friends.module": [
		446,
		21
	],
	"../pages/friends-request/friends-request.module": [
		448,
		20
	],
	"../pages/friendsactivity/friendsactivity.module": [
		450,
		19
	],
	"../pages/linked-accounts/linked-accounts.module": [
		445,
		18
	],
	"../pages/my-reps/my-reps.module": [
		459,
		12
	],
	"../pages/organizations/organizations.module": [
		451,
		17
	],
	"../pages/privacy-policy/privacy-policy.module": [
		457,
		16
	],
	"../pages/settings/settings.module": [
		447,
		15
	],
	"../pages/takeaction/takeaction.module": [
		453,
		14
	],
	"../pages/terms/terms.module": [
		455,
		13
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
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_overlay__ = __webpack_require__(250);
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
    FeedPage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__overlay_overlay__["a" /* OverlayPage */]);
        popover.present();
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/feed/feed.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Rally</p>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n      <ion-fab right top>\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>ACLU</h2>\n    </ion-item>\n    \n  \n\n  <img src="assets/img/login-image.jpg">\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <p class="link">371 Likes, 212 Shares</p>\n  </ion-card-content>\n   <ion-row>\n      <ion-col class="token" col-8>\n      <p>You\'ve token action on this 3 times</p>\n      </ion-col>\n      <ion-col col-4 class="token-btn">\n        <button ion-button icon-left clear full style="height: 30px;">\n          I\'M DONE\n      </button>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n\n</ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row>\n      <ion-col col-8>\n           <p (click)="presentPopover()" class="white-footer">Home</p>\n\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n      <button (click)="goToOtherPage()">\n\n        <ion-icon name="ios-notifications"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <button (click)="goToProfile()" >\n            <ion-icon name="ios-person"></ion-icon>\n        </button>\n        \n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/feed/feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(131);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AlertsPage);

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friendsactivity_friendsactivity__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organizations_organizations__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__candidates_candidates__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__takeaction_takeaction__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorites_favorites__ = __webpack_require__(156);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], OverlayPage);

//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(313);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_alerts_alerts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_overlay_overlay__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_events_events__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_organizations_organizations__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_friendsactivity_friendsactivity__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_candidates_candidates__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_takeaction_takeaction__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_favorites_favorites__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_friends_request_friends_request__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_linked_accounts_linked_accounts__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_find_friends_find_friends__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_privacy_policy_privacy_policy__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_my_reps_my_reps__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_push__ = __webpack_require__(251);
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
            __WEBPACK_IMPORTED_MODULE_23__pages_my_reps_my_reps__["a" /* MyRepsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/linked-accounts/linked-accounts.module#LinkedAccountsPageModule', name: 'LinkedAccountsPage', segment: 'linked-accounts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/find-friends/find-friends.module#FindFriendsPageModule', name: 'FindFriendsPage', segment: 'find-friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends-request/friends-request.module#FriendsRequestPageModule', name: 'FriendsRequestPage', segment: 'friends-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friendsactivity/friendsactivity.module#FriendsactivityPageModule', name: 'FriendsactivityPage', segment: 'friendsactivity', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/organizations/organizations.module#OrganizationsPageModule', name: 'OrganizationsPage', segment: 'organizations', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/candidates/candidates.module#CandidatesPageModule', name: 'CandidatesPage', segment: 'candidates', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/takeaction/takeaction.module#TakeactionPageModule', name: 'TakeactionPage', segment: 'takeaction', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule', name: 'PrivacyPolicyPage', segment: 'privacy-policy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-reps/my-reps.module#MyRepsPageModule', name: 'MyRepsPage', segment: 'my-reps', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_23__pages_my_reps_my_reps__["a" /* MyRepsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_push__["a" /* Push */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, push, alertCtrl) {
        var _this = this;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__["a" /* FeedPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pushsetup();
        });
    }
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '924920604639'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            //do whatever you want with the registration ID
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(382);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Welcome to Rally</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p style="margin-bottom: 30px; font-size: 14px;">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus, eligendi! Perferendis natus quos at, nesciunt necessitatibus reiciendis inventore, velit animi commodi magni dolore quod debitis, consequuntur illum tempora consequatur?\n  </p>\n  <ion-slides margin-bottom>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n  </ion-slides>\n  <div text-center margin-top>\n    <button ion-button color="facebook" icon-left block outline margin-top (click)="LoginWithFacebook()" > <ion-icon name="logo-facebook"></ion-icon>Login with Facebook</button>\n    <button ion-button color="twitter" icon-left block outline margin-top (click)="TwitterSignIn()"> <ion-icon name="logo-twitter"></ion-icon>Login with Twitter</button>\n    <button ion-button color="primary" clear margin-top> Skip </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/terms/terms.html"*/'<!--\n  Generated template for the PrivacyPolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem deserunt perspiciatis, optio, nemo repellat magni sit id aspernatur cumque labore omnis esse perferendis harum! Reiciendis cum architecto et fugit fugiat officia dolores quod quos molestias adipisci sint, eaque, nobis nisi.</p>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Terms</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacy-policy',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/privacy-policy/privacy-policy.html"*/'<!--\n  Generated template for the PrivacyPolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem deserunt perspiciatis, optio, nemo repellat magni sit id aspernatur cumque labore omnis esse perferendis harum! Reiciendis cum architecto et fugit fugiat officia dolores quod quos molestias adipisci sint, eaque, nobis nisi.</p>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Privacy Policy</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/privacy-policy/privacy-policy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PrivacyPolicyPage);

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRepsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-reps',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/my-reps/my-reps.html"*/'<!--\n  Generated template for the FriendsRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="white">Rally</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	\n<ion-list>\n<ion-item>\n		<p class="list-title">Federal</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n<ion-list>\n	<ion-item>\n		<p class="list-title">State</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n<ion-list>\n<ion-item>\n		<p class="list-title">Local</p>\n	</ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg" style="width: 70px; height: 70px;">\n    </ion-avatar>\n    <h2>Bob Representative</h2>\n    <ion-row item-end text-right style="max-width: 80px;">\n    	<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Follow</button>\n		</ion-col>\n		<ion-col col-12 style="padding: 0;">\n    	<button ion-button color="dark" class="action-btn">Contact</button>\n		</ion-col>\n    </ion-row>\n  </ion-item>\n \n</ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">My Reps</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/my-reps/my-reps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MyRepsPage);

//# sourceMappingURL=my-reps.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map