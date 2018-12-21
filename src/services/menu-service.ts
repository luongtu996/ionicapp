import { IService } from './IService';

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'
import { HomePage } from "../pages/home/home";

@Injectable()
export class MenuService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'menu';

  getTitle = (): string => 'UIAppTemplate';

  getAllThemes = (): Array<any> => {
    return [
      {"title" : "Send A Review Invite", "theme"  : "home",  "icon" : "icon-comment-outline", "listView" : false, "component":"HomePage", "singlePage":false},
      {"title" : "Leaderboard", "theme"  : "home",  "icon" : "icon-account-outline", "listView" : false, "component":"Leaderboard", "singlePage":true},
      {"title" : "Logout", "theme"  : "login",  "icon" : "icon-logout", "listView" : false, "component":"Login", "singlePage":true},
    ];
  };

  getDataForTheme = (menuItem: any) => {
    return {
      // "background": "assets/images/background/16.jpg",
      "image": "assets/images/logo/logo-light-icon.png",
      "title": "2Step Reviews"
    };
  };

  getEventsForTheme = (menuItem: any): any => {
    return {};
  };

  prepareParams = (item: any) => {
    return {
      title: item.title,
      data: {},
      events: this.getEventsForTheme(item)
    };
  };

  load(item: any): Observable<any> {
    var that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('menu')
          .valueChanges()
          .subscribe(snapshot => {
            that.loadingService.hide();
            observer.next(snapshot);
            observer.complete();
          }, err => {
            that.loadingService.hide();
            observer.error([]);
            observer.complete();
          });
      });
    } else {
      return new Observable(observer => {
        that.loadingService.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
