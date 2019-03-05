webpackJsonp([7],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_auth_service__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    function ProfilePage(http, loadingService, usuarioServie, toast, authService) {
        this.http = http;
        this.loadingService = loadingService;
        this.usuarioServie = usuarioServie;
        this.toast = toast;
        this.authService = authService;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.authService.canActivate();
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        this.loadingService.show();
        this.usuarioServie.getProfile().subscribe(function (response) {
            _this.usuario = response.data;
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
            _this.toast.presentToast(error.error.error.message);
        });
    };
    ProfilePage.prototype.logout = function () {
        this.authService.logout();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\pages\profile\profile.html"*/'<!--Fist Screen-->\n<ion-header>\n  <ion-navbar>\n    <!---Title-->\n    <ion-title>2Step Reviews</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Theme Appearance animation (Zoom In)-->\n<ion-content>\n  <br>\n  <ion-col col-12 padding-top>\n    <span font-bold span-medium padding-left>Profile</span>\n  </ion-col>\n  <ion-grid no-padding >\n    <ion-col col-12 padding-top *ngIf="!usuario">\n      <span font-bold span-small="" padding-left>No results found</span>\n    </ion-col>\n\n    <ion-col col-12 *ngIf="usuario">\n      <ion-card padding box-shadow>\n        <ion-avatar>\n          <img [src]="usuario?.avatar?.web_url" alt="">\n        </ion-avatar>\n        <ion-card-content text-center>\n          <h1>{{ usuario?.nombre }}</h1>\n          <p>{{ usuario?.email }}</p>\n        </ion-card-content>\n\n        <br>\n        <button ion-button full (click)="logout()" style="background-color: #4FF6C6">Logout</button>\n      </ion-card>\n\n    </ion-col>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_auth_auth_service__["a" /* AuthService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map