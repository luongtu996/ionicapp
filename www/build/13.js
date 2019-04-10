webpackJsonp([13],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayout3Module", function() { return FormLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_layout_3__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormLayout3Module = /** @class */ (function () {
    function FormLayout3Module() {
    }
    FormLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_3__["a" /* FormLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__form_layout_3__["a" /* FormLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_3__["a" /* FormLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FormLayout3Module);
    return FormLayout3Module;
}());

//# sourceMappingURL=form-layout-3.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormLayout3 = /** @class */ (function () {
    function FormLayout3() {
    }
    FormLayout3.prototype.onEvent = function (event, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](this.getItemData());
            this.resetValue();
        }
    };
    FormLayout3.prototype.getItemData = function () {
        return {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'address1': this.address1,
            'address2': this.address2,
            'city': this.city,
            'zipCode': this.zipCode
        };
    };
    FormLayout3.prototype.resetValue = function () {
        this.firstName = "";
        this.lastName = "";
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.zipCode = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormLayout3.prototype, "events", void 0);
    FormLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-layout-3',template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-3\form.html"*/'<!--  Theme Form - Form Write Address -->\n\n<ion-content>\n\n  <ion-grid *ngIf="data != null">\n\n    <ion-row padding>\n\n      <!-- Full Name -->\n\n      <ion-col col-12 align-self-start>\n\n        <ion-item no-lines box-shadow margin-bottom>\n\n          <ion-input no-margin type="text" [placeholder]="data.firstName" [(ngModel)]="firstName"></ion-input>\n\n       </ion-item>\n\n       <!-- Last Name -->\n\n       <ion-item no-lines box-shadow margin-bottom>\n\n          <ion-input no-margin type="text" [placeholder]="data.lastName" [(ngModel)]="lastName"></ion-input>\n\n       </ion-item>\n\n       <!-- Address Line 1 -->\n\n       <ion-item no-lines box-shadow margin-bottom>\n\n          <ion-input no-margin type="text" [placeholder]="data.addressLine1" [(ngModel)]="address1"></ion-input>\n\n       </ion-item>\n\n       <!-- Address Line 2 -->\n\n       <ion-item no-lines box-shadow margin-bottom>\n\n          <ion-input no-margin type="text" [placeholder]="data.addressLine2" [(ngModel)]="address2"></ion-input>\n\n       </ion-item>\n\n       <!-- City -->\n\n       <ion-item no-lines box-shadow half-col>\n\n          <ion-input no-margin type="text" [placeholder]="data.city" [(ngModel)]="city"></ion-input>\n\n       </ion-item>\n\n       <!-- Zip Code -->\n\n       <ion-item no-lines box-shadow half-col margin-left>\n\n          <ion-input no-margin type="number" [placeholder]="data.zipCode" [(ngModel)]="zipCode"></ion-input>\n\n       </ion-item>\n\n     </ion-col>\n\n      <!-- Button Write Comment -->\n\n      <ion-col col-12 align-self-end>\n\n      <button ion-button button-clear-outline round outline block text-capitalize (click)="onEvent(\'onSubmit\', $event)">\n\n        {{data.button}}\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-3\form.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FormLayout3);
    return FormLayout3;
}());

//# sourceMappingURL=form-layout-3.js.map

/***/ })

});
//# sourceMappingURL=13.js.map