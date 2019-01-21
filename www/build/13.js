webpackJsonp([13],{

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayout1Module", function() { return FormLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_layout_1__ = __webpack_require__(653);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormLayout1Module = /** @class */ (function () {
    function FormLayout1Module() {
    }
    FormLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_1__["a" /* FormLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__form_layout_1__["a" /* FormLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_1__["a" /* FormLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FormLayout1Module);
    return FormLayout1Module;
}());

//# sourceMappingURL=form-layout-1.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayout1; });
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

var FormLayout1 = /** @class */ (function () {
    function FormLayout1() {
    }
    FormLayout1.prototype.onEvent = function (event, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](this.getItemData());
            this.resetValue();
        }
    };
    FormLayout1.prototype.getItemData = function () {
        return {
            'name': this.name,
            'title': this.title,
            'description': this.description
        };
    };
    FormLayout1.prototype.resetValue = function () {
        this.name = "";
        this.title = "";
        this.description = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormLayout1.prototype, "events", void 0);
    FormLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-layout-1',template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-1\form.html"*/'<!--  Theme Form - Form + Write Comment -->\n\n<ion-content>\n\n  <ion-grid *ngIf="data != null">\n\n    <ion-row padding>\n\n      <ion-col col-12>\n\n        <ion-item no-lines box-shadow>\n\n         <ion-input no-margin type="text" [placeholder]="data.yourName" [(ngModel)]="name"></ion-input>\n\n      </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <ion-item no-lines box-shadow>\n\n           <ion-input no-margin type="text" [placeholder]="data.title" [(ngModel)]="title"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12 textarea>\n\n        <ion-item no-lines box-shadow>\n\n          <ion-textarea no-margin  [placeholder]="data.description" [(ngModel)]="description"></ion-textarea>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <button ion-button button-clear-outline round outline block text-capitalize (click)="onEvent(\'onSubmit\', $event)">\n\n        {{data.button}}\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-1\form.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FormLayout1);
    return FormLayout1;
}());

//# sourceMappingURL=form-layout-1.js.map

/***/ })

});
//# sourceMappingURL=13.js.map