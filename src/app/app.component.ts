import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';

import { IService } from '../services/IService';
import { LoginService } from "../services/login-service";
import { HomeService } from "../services/home-service";
import { LeaderboardService } from "../services/leaderboard-service";

@Component({
    templateUrl: 'app.html',
    providers: [MenuService]
})

export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = "HomePage";
    pages: any;
    params:any;
    leftMenuTitle: string;

    constructor(
        public platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public menu: MenuController,
        private menuService: MenuService,
        public modalCtrl: ModalController,
        public loginService: LoginService,
        public homeService:HomeService,
        public leaderboardService:LeaderboardService
        ) {
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe( snapshot => {
            this.params = snapshot;
            if (AppSettings.SHOW_START_WIZARD) {
              this.presentProfileModal();
            }
        });
    }

    presentProfileModal() {
      const profileModal = this.modalCtrl.create("IntroPage");
      profileModal.present();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        if (page.singlePage) {
            this.menu.open();
            this.nav.setRoot(this.getPageForOpen(page), {
              service: this.getServiceForPage(page),
              page: page,
              componentName: page['component']
            });
        } else {
          this.nav.setRoot("ItemsPage", {
            componentName: page.theme
          });
        }
    }

    getPageForOpen(value: string): any {
        return value['component'];
    }

    getServiceForPage(value: string): IService {
        return this.selectServiceForOpen(value);
    }

    selectServiceForOpen(value: string): any {
        let service;

        switch (value['component']) {
            case "Login":
                service = this.loginService;
                break;
            case "Leaderboard":
                service = this.leaderboardService;
                break;
            default:
                service = this.homeService;
        }
        return service;
    }
}
