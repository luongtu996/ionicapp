import { Component } from '@angular/core';
import { Platform, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage:any = "TabPage";

    constructor(
        public platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public menu: MenuController,
        public modalCtrl: ModalController,
        ) {
        this.initializeApp();
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
}
