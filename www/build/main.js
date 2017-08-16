webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-left>\n      <p class="white">Rally</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row padding>\n    <ion-col col-4 class="profile-headshot">\n    <ion-avatar item-start class="profile-img">\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h4>Sally Smith</h4>\n    <p>Washington, DC</p>\n    </ion-col>\n    <ion-col col-8 class="profile-counts">\n      <ion-row>\n        <ion-col>\n          <h4>103</h4>\n          <p class="small">Friends</p>\n        </ion-col>\n        <ion-col>\n        <h4>32</h4>\n        <p class="small">Candidates</p>\n        </ion-col>\n         <ion-col>\n        <h4>19</h4>\n        <p class="small">Organizations</p>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="light" outline>Edit Profile </button>\n\n    </ion-col>\n    <ion-col col-8>\n    <p>I like cool things</p>\n    </ion-col>\n     <ion-col col-4>\n        <button ion-button color="light" outline>My Reps</button>\n\n    </ion-col>  \n  </ion-row>\n\n    <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      </ion-col>\n      <ion-col col-7>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Feed Item Title</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        <p>via website.com</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="ios-heart"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n\n  <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n        <p class="excerpt">Private</p>\n      </ion-col>\n      <ion-col col-7 class="inactive">\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Sally Smith</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="logo-usd"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n\n   <ion-card>\n       <ion-fab right top style="top: -8px;\n    right: 0;">\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>  \n    <ion-row>\n\n      <ion-col col-5 class="profile-rep" style="background: url(\'assets/img/login-image.jpg\');">\n      </ion-col>\n      <ion-col col-7>\n        <ion-card-content>\n        <h5 style="font-weight: 500;\n    font-size: 16px;">Sally Smith</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>\n        </ion-card-content>\n      </ion-col>\n    </ion-row>\n\n     <ion-fab right bottom style="bottom: 0;\n    right: 0;">\n    <button class="blue-icon" ion-fab color="light"><ion-icon name="md-call"></ion-icon></button>\n  </ion-fab> \n  \n</ion-card>\n    \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row> \n      <ion-col col-2 class="footer-icons">\n          <ion-icon name="ios-home"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n            <p class="white-footer">Profile</p>\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n        <ion-icon name="ios-notifications"></ion-icon>\n      </ion-col>\n      <ion-col class="active-icons">\n        <ion-icon name="ios-person"></ion-icon>\n\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(238);
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
    function HomePage(navCtrl, alertCtrl, fb) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 5000;
        this.slides.freeMode = true;
        this.slides.loop = true;
        this.slides.pager = true;
        this.slides.paginationType = 'bullets';
    };
    HomePage.prototype.facebookSignIn = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithRedirect(provider).then(function () {
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().getRedirectResult().then(function (result) {
                var alert = _this.alertCtrl.create({
                    title: 'Access Granted',
                    subTitle: JSON.stringify(result),
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (error) {
                var alert = this.alertCtrl.create({
                    title: 'Error Access',
                    subTitle: JSON.stringify(error),
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Welcome to Rally</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p style="margin-bottom: 30px;">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus, eligendi! Perferendis natus quos at, nesciunt necessitatibus reiciendis inventore, velit animi commodi magni dolore quod debitis, consequuntur illum tempora consequatur?\n  </p>\n  <ion-slides margin-bottom>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/login-image.jpg"/>\n    </ion-slide>\n  </ion-slides>\n  <div text-center margin-top>\n    <button ion-button color="facebook" icon-left block outline margin-top (click)="facebookSignIn()" > <ion-icon name="logo-facebook"></ion-icon>Login with Facebook</button>\n    <button ion-button color="twitter" icon-left block outline margin-top > <ion-icon name="logo-twitter"></ion-icon>Login with Twitter</button>\n    <button ion-button color="primary" clear margin-top> Skip </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(144);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AlertsPage);

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_alerts_alerts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_overlay_overlay__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













__WEBPACK_IMPORTED_MODULE_12_firebase___default.a.initializeApp({
    apiKey: "AIzaSyAbPJa7ktiKO0WUlF-Au-Ev4WG4Eih7SPQ",
    authDomain: "api-project-237098324740.firebaseapp.com",
    databaseURL: "https://api-project-237098324740.firebaseio.com",
    projectId: "api-project-237098324740",
    storageBucket: "api-project-237098324740.appspot.com",
    messagingSenderId: "237098324740"
});
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
            __WEBPACK_IMPORTED_MODULE_10__pages_overlay_overlay__["a" /* OverlayPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_alerts_alerts__["a" /* AlertsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_overlay_overlay__["a" /* OverlayPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__ = __webpack_require__(413);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_feed_feed__["a" /* FeedPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alerts__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_overlay__ = __webpack_require__(414);
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
        selector: 'page-feed',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/feed/feed.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <p class="white">Rally</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n      <ion-fab right top>\n    <button ion-fab color="light"><ion-icon name="ios-more"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/login-image.jpg">\n    </ion-avatar>\n    <h2>ACLU</h2>\n    </ion-item>\n    \n  \n\n  <img src="assets/img/login-image.jpg">\n\n  <ion-card-content>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestias facere natus blanditiis temporibus dolorem ipsum maiores ipsam sequi recusandae?</p>\n    <p class="link">371 Likes, 212 Shares</p>\n  </ion-card-content>\n   <ion-row>\n      <ion-col class="token" col-8>\n      <p>You\'ve token action on this 3 times</p>\n      </ion-col>\n      <ion-col col-4 class="token-btn">\n        <button ion-button icon-left clear full>\n          I\'M DONE\n      </button>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="md-heart" ios="md-heart" md="ios-heart"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col class="blue">\n      <button ion-button icon-left clear full>\n        <ion-icon name="ios-share"></ion-icon>\n      </button>\n    </ion-col>\n   \n  </ion-row>\n\n</ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style="min-height: auto; padding: 0;">\n    <ion-row>\n      <ion-col col-8>\n           <p (click)="presentPopover()" class="white-footer">Home</p>\n\n      </ion-col>\n      <ion-col col-2 class="footer-icons" style="border-right: 1px solid;">\n      <button (click)="goToOtherPage()">\n\n        <ion-icon name="ios-notifications"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col class="footer-icons">\n        <button (click)="goToProfile()" >\n            <ion-icon name="ios-person"></ion-icon>\n        </button>\n        \n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/feed/feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
    return OverlayPage;
}());
OverlayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-overlay',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/overlay/overlay.html"*/'<ion-content>\n  <ion-list>\n  <button ion-button full style="background-color: #934ae2">Favorites</button>\n  <button ion-button full style="background-color: #8a57e2">Candidates</button>\n  <button ion-button full style="background-color: #8162e2">Take Action</button>\n  <button ion-button full style="background-color: #776ce2">My Organizations</button>\n  <button ion-button full style="background-color: #6a76e2">Friend\'s Activity</button>\n  <button ion-button full style="background-color: #5c7fe2">Events</button>\n  <button ion-button full style="background-color: #4a87e2">Home Feed</button>\n \n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/overlay/overlay.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], OverlayPage);

//# sourceMappingURL=overlay.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map