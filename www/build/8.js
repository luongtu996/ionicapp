webpackJsonp([8],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayout4Module", function() { return FormLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_layout_4__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormLayout4Module = /** @class */ (function () {
    function FormLayout4Module() {
    }
    FormLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_4__["a" /* FormLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__form_layout_4__["a" /* FormLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_4__["a" /* FormLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], FormLayout4Module);
    return FormLayout4Module;
}());

//# sourceMappingURL=form-layout-4.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayout4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormLayout4 = /** @class */ (function () {
    function FormLayout4(camera, alertCtrl) {
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true,
        };
        this.item = {
            'description': '',
            'stars': 1,
            'imageUrl': ''
        };
    }
    FormLayout4.prototype.onAddVideoPhoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            _this.item.imageUrl = window.Ionic.WebView.convertFileSrc(imageData);
        }, function (err) {
            _this.displayErrorAlert(err);
        });
    };
    ;
    FormLayout4.prototype.displayErrorAlert = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error while trying to capture picture',
            buttons: ['OK']
        });
        alert.present();
    };
    FormLayout4.prototype.onEvent = function (event, e, index) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](this.item);
        }
    };
    FormLayout4.prototype.onStarClass = function (items, index, e) {
        this.item.stars = index;
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        if (this.events['onRates']) {
            this.events['onRates'](index);
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FormLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FormLayout4.prototype, "events", void 0);
    FormLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-layout-4',template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-4\form.html"*/'<!--  Theme Form - Form add Photo Or Video -->\n\n  <ion-content>\n\n    <ion-grid *ngIf="data != null">\n\n      <ion-row padding>\n\n        <ion-col col-12 text-center>\n\n          <span span-small>{{data.rateTitle}}</span>\n\n        </ion-col>\n\n        <ion-col col-12 text-center>\n\n            <ion-icon\n\n              *ngFor="let item of data.iconsStars;let i = index"\n\n              color="accent"\n\n              [name]="item.icon"\n\n              [ngClass]="{\'active\':item.isActive}"\n\n              (click)="onStarClass(data.iconsStars, i, $event)">\n\n            </ion-icon>\n\n        </ion-col>\n\n        <ion-col col-12 text-center>\n\n          <span span-small>{{data.title}}</span>\n\n        </ion-col>\n\n        <ion-col col-12 textarea>\n\n          <ion-item no-lines>\n\n            <ion-textarea [placeholder]="data.descriptionPlaceholder" [(ngModel)]="item.description"></ion-textarea>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <div *ngIf="item.imageUrl" background-size [ngStyle]="{\'background-image\': \'url(\' + item.imageUrl + \')\'}"></div>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <button ion-button button-clear-outline round outline block text-capitalize (click)="onAddVideoPhoto()">\n\n            {{data.btnAddPhotoOrVideo}}\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <button ion-button button-clear-outline round outline block text-capitalize (click)="onEvent(\'onSubmit\', $event)">\n\n            {{data.btnSubmit}}\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-4\form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FormLayout4);
    return FormLayout4;
}());

//# sourceMappingURL=form-layout-4.js.map

/***/ })

});
//# sourceMappingURL=8.js.map