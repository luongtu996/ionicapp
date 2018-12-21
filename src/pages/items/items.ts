import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { IService } from '../../services/IService';

import { AppSettings } from '../../services/app-settings';
import { LoginService } from '../../services/login-service';
import { FormService } from '../../services/form-service';

@IonicPage()
@Component({
    templateUrl: 'items.html',
    providers: [
      LoginService,
      FormService
    ]
})
export class ItemsPage {
    title: string;
    isBuyButtonEnabled = false;
    componentName: string;
    pages: any = {};
    listServices: { [key: string]: IService; } = {};
    service: IService;

    // services: array
    constructor(
      public navCtrl: NavController,
      private loginService: LoginService,
      private formService: FormService,
      public alertCtrl: AlertController,
      navParams: NavParams) {

        this.listServices = {
          'login': this.loginService,
          'form': this.formService,
        };

        this.componentName = navParams.get('componentName');
        this.service = this.listServices[this.componentName];
        this.isBuyButtonEnabled = AppSettings.BUY_BUTTON;
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
        } else {
          navCtrl.setRoot("HomePage");
          return;
        }
    }

    selectPageForOpen(value: string): any {
      let page;

      switch (value) {
        case "spinner":
          page = "ItemDetailsPageSpinner";
          break;
        case "textViews":
          page = "ItemDetailsPageTextView";
          break;
        case "splashScreens":
          page = "ItemDetailsPageSplashScreen";
          break;
        case "searchBars":
          page = "ItemDetailsPageSearchBar";
          break;
        case "checkBoxes":
          page = "ItemDetailsPageCheckBox";
          break;
        case "wizard":
          page = "ItemDetailsPageWizard";
          break;
        case "tabs":
          page = "ItemDetailsPageTabs";
          break;
        case "login":
          page = "ItemDetailsPageLogin";
          break;
        case "register":
          page = "ItemDetailsPageRegister";
          break;
        case "expandable":
          page = "ItemDetailsPageExpandable";
          break;
        case "swipeToDismiss":
          page = "ItemDetailsPageSwipeToDismiss";
          break;
        case "dragAndDrop":
          page = "ItemDetailsPageDragAndDrop";
          break;
        case "appearanceAnimation":
          page = "ItemDetailsPageAppearanceAnimation";
          break;
        case "googleCards":
          page = "ItemDetailsPageGoogleCard";
          break;
        case "parallax":
          page = "ItemDetailsPageParallax";
          break;
        case "maps":
          page = "ItemDetailsPageMaps";
          break;
        case "imageGallery":
          page = "ItemDetailsPageImageGallery";
          break;
        case "qrcode":
          page = "ItemDetailsPageQRCode";
          break;
        case "radioButton":
          page = "ItemDetailsPageRadioButton";
          break;
        case "range":
          page = "ItemDetailsPageRange";
          break;
        case "toggle":
          page = "ItemDetailsPageToggle";
          break;
        case "select":
          page = "ItemDetailsPageSelect";
          break;
        case "actionSheet":
          page = "ItemDetailsPageActionSheet";
          break;
        case "timeline":
          page = "ItemDetailsPageTimeLine"
          break;
        case "form":
            page = "ItemDetailsPageForm"
            break;
        case "comment":
            page = "ItemDetailsPageComment"
            break;
        case "profile":
            page = "ItemDetailsPageProfile"
            break;
        case "segment":
            page = "ItemDetailsPageSegment"
            break;
        case "alert":
            page = "ItemDetailsPageAlert"
            break;
        case "payment":
              page = "ItemDetailsPagePayment";
              break;
        default:
          page = "ItemDetailsPage";
      }
      return page;
  }

  openPage(page: any) {
      if (AppSettings.SUBSCRIBE) {

      } else {
        this.navigation(page);
      }
  }

  navigation(page: any) {
    if (page.listView) {
      this.navCtrl.push(ItemsPage, {
        componentName: page.theme
      });
    } else {
      this.navCtrl.push(this.selectPageForOpen(this.componentName), {
        service: this.service,
        page: page
      });

    }
  }
}
