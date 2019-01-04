webpackJsonp([4],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());

//# sourceMappingURL=items.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_form_service__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemsPage = /** @class */ (function () {
    // services: array
    function ItemsPage(navCtrl, loginService, formService, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.formService = formService;
        this.alertCtrl = alertCtrl;
        this.isBuyButtonEnabled = false;
        this.pages = {};
        this.listServices = {};
        this.listServices = {
            'login': this.loginService,
            'form': this.formService,
        };
        this.componentName = navParams.get('componentName');
        this.service = this.listServices[this.componentName];
        this.isBuyButtonEnabled = __WEBPACK_IMPORTED_MODULE_2__services_app_settings__["a" /* AppSettings */].BUY_BUTTON;
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
        }
        else {
            navCtrl.setRoot("HomePage");
            return;
        }
    }
    ItemsPage_1 = ItemsPage;
    ItemsPage.prototype.selectPageForOpen = function (value) {
        var page;
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
                page = "ItemDetailsPageTimeLine";
                break;
            case "form":
                page = "ItemDetailsPageForm";
                break;
            case "comment":
                page = "ItemDetailsPageComment";
                break;
            case "profile":
                page = "ItemDetailsPageProfile";
                break;
            case "segment":
                page = "ItemDetailsPageSegment";
                break;
            case "alert":
                page = "ItemDetailsPageAlert";
                break;
            case "payment":
                page = "ItemDetailsPagePayment";
                break;
            default:
                page = "ItemDetailsPage";
        }
        return page;
    };
    ItemsPage.prototype.openPage = function (page) {
        if (__WEBPACK_IMPORTED_MODULE_2__services_app_settings__["a" /* AppSettings */].SUBSCRIBE) {
        }
        else {
            this.navigation(page);
        }
    };
    ItemsPage.prototype.navigation = function (page) {
        if (page.listView) {
            this.navCtrl.push(ItemsPage_1, {
                componentName: page.theme
            });
        }
        else {
            this.navCtrl.push(this.selectPageForOpen(this.componentName), {
                service: this.service,
                page: page
            });
        }
    };
    ItemsPage = ItemsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\pages\items\items.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <!---Title-->\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <ion-list no-padding no-margin *ngIf="pages.length">\n\n    <button ion-item padding-left no-lines item-title submenu *ngFor="let p of pages"  (click)="openPage(p)">\n\n        {{p.title}}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\pages\items\items.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_4__services_form_service__["a" /* FormService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__services_form_service__["a" /* FormService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ItemsPage);
    return ItemsPage;
    var ItemsPage_1;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormService = /** @class */ (function () {
    function FormService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'form'; };
        this.getTitle = function () { return 'Form'; };
        this.getAllThemes = function () {
            return [
                { "title": "Form + Write Comment", "theme": "layout1" },
                { "title": "Form + Write Review", "theme": "layout2" },
                { "title": "Form With Address", "theme": "layout3" },
                { "title": "Form add Photo Or  Video", "theme": "layout4" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onSubmit: function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                },
                onAddVideoPhoto: function (item) {
                    that.toastCtrl.presentToast(item.description);
                }
            };
        };
        this.getDataForLayout1 = function () {
            return {
                "yourName": "Your Name",
                "title": "Title",
                "description": "Enter a description",
                "button": " Write Comment"
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "title": "Continue",
                "rateTitle": "Rate",
                "descriptionPlaceholder": "Description",
                "btnSubmit": "Write Comment",
                "iconsStars": [
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": false,
                        "icon": "star"
                    }
                ],
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "firstName": "Firs Name",
                "lastName": "Last Name",
                "addressLine1": "Address Line 1",
                "addressLine2": "Address Line 2",
                "city": "City",
                "zipCode": "Zip Code",
                "button": "Write Comment"
            };
        };
        this.getDataForLayout4 = function () {
            return {
                "title": "Your comment",
                "rateTitle": "Rate",
                "descriptionPlaceholder": "Description",
                "btnSubmit": "Write Comment",
                "btnAddPhotoOrVideo": "Add Photo or Video",
                "iconsStars": [
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": true,
                        "icon": "star"
                    },
                    {
                        "isActive": false,
                        "icon": "star"
                    }
                ],
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    FormService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('form/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], FormService);
    return FormService;
}());

//# sourceMappingURL=form-service.js.map

/***/ })

});
//# sourceMappingURL=4.js.map