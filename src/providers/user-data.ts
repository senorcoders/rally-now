import { Injectable } from '@angular/core';

import { Events, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FeedPage } from '../pages/feed/feed';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';

@Injectable()
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';
  public fireAuth: any;

  constructor(
    public events: Events,
    public storage: Storage,
  ) {
    this.fireAuth = firebase.auth();
  }


  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('DISPLAYNAME').then((value) => {
      return value;
    });
  };

  getUid(): Promise<string> {
    return this.storage.get('UID').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email)
    .then(() => {
      this.events.publish('resetPassword', 'Reset Password Email has been sent Successfully.');
    })
    .catch(() => {
      this.events.publish('resetPassword', 'Cannot send Reset Password Email for now.');
    });
  }

   getPhotoUrl(): Promise<string> {
    return this.storage.get('PHOTOURL').then((value) => {
      return value;
    });
  };


  getEmail(): Promise<string> {
    return this.storage.get('EMAIL').then((value) => {
      return value;
    });
  };

  getGender(): Promise<string> {
    return this.storage.get('GENDER').then((value) => {
      return value;
    });
  };

  getDescription(): Promise<string> {
    return this.storage.get('DESCRIPTION').then((value) => {
      return value;
    });
  };
  getLocation(): Promise<string> {
    return this.storage.get('LOCATION').then((value) => {
      return value;
    });
  };
}
