webpackJsonp([8],{

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfigPageModule", function() { return ModalConfigPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(670);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalConfigPageModule = /** @class */ (function () {
    function ModalConfigPageModule() {
    }
    ModalConfigPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ModalConfigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ModalConfigPage */]),
            ],
        })
    ], ModalConfigPageModule);
    return ModalConfigPageModule;
}());

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_auth_service__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalConfigPage = /** @class */ (function () {
    function ModalConfigPage(http, loadingService, usuarioService, toast, authService, modalCtrl) {
        this.http = http;
        this.loadingService = loadingService;
        this.usuarioService = usuarioService;
        this.toast = toast;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.map = {
            "pending.auth": "Pending Autorization",
            "inactive.account": "Inactive Account",
            "unanswered.reviews": "Unanswered Reviews",
            "new.invite": "New Invite Sent",
            "new.review": "New Review Received",
            "new.bad.review": "New Bad Review Received",
            "monthly.leaderboard": "Monthly Leaderboard",
            "weekly.leaderboard": "Weekly Leaderboard",
            "monthly.performance": "Monthly Performance",
            "weekly.performance": "Weekly Performance",
            "tagged.review": "Review Tagged",
            "dashboard.completed": "Dashboard Completed"
        };
    }
    ModalConfigPage.prototype.ionViewWillEnter = function () {
        this.authService.canActivate();
    };
    ModalConfigPage.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ModalConfigPage.prototype.getProfile = function () {
        var _this = this;
        this.loadingService.show();
        this.usuarioService.getProfile().subscribe(function (response) {
            var usuario = response.data;
            _this.notifications = [];
            for (var item in usuario.allowed_notifications) {
                _this.notifications.push({
                    key: item,
                    value: usuario.allowed_notifications[item],
                    name: _this.map[item]
                });
            }
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
        });
    };
    ModalConfigPage.prototype.changeValue = function (name, value) {
        var _this = this;
        this.loadingService.show();
        this.usuarioService.changeStatusNotification(name, (value == 1) ? 0 : 1).subscribe(function (data) {
            _this.loadingService.hide();
            _this.getProfile();
        }, function (error) {
            _this.loadingService.hide();
            _this.getProfile();
        });
    };
    ModalConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-config',template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\pages\config\config.html"*/'<!--Fist Screen-->\n<ion-header>\n  <ion-navbar>\n    <!---Title-->\n    <ion-title>2 Step Reviews</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Theme Appearance animation (Zoom In)-->\n<ion-content class="masters">\n  <ion-grid no-padding >\n    <ion-list>\n      <ion-list-header header-section no-margin>\n        <!-- Header-title -->\n        <h1 header-title text-capitalize>Notifications</h1>\n      </ion-list-header>\n      <ion-item no-lines *ngFor="let notification of notifications; let i= index">\n        <!-- Item-title -->\n        <ion-label item-title item-start>{{ notification.name }}</ion-label>\n        <!-- Toggle -->\n        <ion-toggle item-end  (ionChange)="changeValue(notification?.key,notification?.value)" [checked]="notification.value"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["ModalController"]])
    ], ModalConfigPage);
    return ModalConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ })

});
//# sourceMappingURL=8.js.map