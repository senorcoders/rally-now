webpackJsonp([8],{

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRepsPageModule", function() { return MyRepsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_reps__ = __webpack_require__(155);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_filters__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(256);
>>>>>>> 3c89ae4e75b8c90c5124085ec46b88f2e3e145f3
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





<<<<<<< HEAD
var MyRepsPageModule = (function () {
    function MyRepsPageModule() {
    }
    return MyRepsPageModule;
=======
var HomeFiltersPageModule = (function () {
    function HomeFiltersPageModule(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomeFiltersPageModule.prototype.goToFeeds = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feed_feed__["a" /* FeedPage */]);
    };
    return HomeFiltersPageModule;
>>>>>>> 3c89ae4e75b8c90c5124085ec46b88f2e3e145f3
}());
MyRepsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_reps__["a" /* MyRepsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_reps__["a" /* MyRepsPage */]),
        ],
<<<<<<< HEAD
    })
], MyRepsPageModule);

//# sourceMappingURL=my-reps.module.js.map
=======
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object])
], HomeFiltersPageModule);

var _a;
//# sourceMappingURL=home-filters.module.js.map
>>>>>>> 3c89ae4e75b8c90c5124085ec46b88f2e3e145f3

/***/ })

});
//# sourceMappingURL=8.js.map