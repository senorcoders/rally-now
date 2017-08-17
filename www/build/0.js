webpackJsonp([0],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedAccountsPageModule", function() { return LinkedAccountsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linked_accounts__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LinkedAccountsPageModule = (function () {
    function LinkedAccountsPageModule() {
    }
    return LinkedAccountsPageModule;
}());
LinkedAccountsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__linked_accounts__["a" /* LinkedAccountsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__linked_accounts__["a" /* LinkedAccountsPage */]),
        ],
    })
], LinkedAccountsPageModule);

//# sourceMappingURL=linked-accounts.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedAccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-linked-accounts',template:/*ion-inline-start:"/Users/dayana/Sites/rally-up/src/pages/linked-accounts/linked-accounts.html"*/'<!--\n  Generated template for the LinkedAccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar  color="primary">\n      <ion-buttons start>\n        <button ion-button icon-only>\n            <ion-icon ios="ios-arrow-back" md="ios-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Rally</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list>\n      <ion-item ion-item *ngFor="let account of LinkedAccounts">\n        <ion-icon name="{{account.icon}}" item-start></ion-icon>\n        <h2 item-start>{{ account.name }}</h2>\n        <button  (click)="itemSelected(account)" ion-button clear item-end>\n          {{ account.username }}           \n        </button>\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dayana/Sites/rally-up/src/pages/linked-accounts/linked-accounts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LinkedAccountsPage);

//# sourceMappingURL=linked-accounts.js.map

/***/ })

});
//# sourceMappingURL=0.js.map