var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.fireAuth = firebase.auth();
    }
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getUid = function () {
        return this.storage.get('UID').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.resetPassword = function (email) {
        var _this = this;
        return this.fireAuth.sendPasswordResetEmail(email)
            .then(function () {
            _this.events.publish('resetPassword', 'Reset Password Email has been sent Successfully.');
        })
            .catch(function () {
            _this.events.publish('resetPassword', 'Cannot send Reset Password Email for now.');
        });
    };
    return UserData;
}());
UserData = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Events,
        Storage])
], UserData);
export { UserData };
//# sourceMappingURL=user-data.js.map