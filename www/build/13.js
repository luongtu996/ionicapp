webpackJsonp([13],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayout2Module", function() { return FormLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_layout_2__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FormLayout2Module = /** @class */ (function () {
    function FormLayout2Module() {
    }
    FormLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_2__["a" /* FormLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__form_layout_2__["a" /* FormLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__form_layout_2__["a" /* FormLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FormLayout2Module);
    return FormLayout2Module;
}());

//# sourceMappingURL=form-layout-2.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayout2; });
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

var FormLayout2 = /** @class */ (function () {
    function FormLayout2() {
    }
    FormLayout2.prototype.onEvent = function (event, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](this.getItemData());
            this.resetValue();
        }
    };
    FormLayout2.prototype.getItemData = function () {
        return {
            'description': this.description
        };
    };
    FormLayout2.prototype.resetValue = function () {
        this.description = "";
    };
    FormLayout2.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        if (this.events['onRates']) {
            this.events['onRates'](index);
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormLayout2.prototype, "events", void 0);
    FormLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-layout-2',template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-2\form.html"*/'<!-- Theme Form - Form + Write Reviev -->\n\n  <ion-content>\n\n    <ion-grid *ngIf="data != null">\n\n      <ion-row padding>\n\n        <ion-col col-12 text-center>\n\n          <span font-bold span-small>{{data.rateTitle}}</span>\n\n        </ion-col>\n\n        <ion-col col-12 text-center>\n\n            <ion-icon\n\n              *ngFor="let item of data.iconsStars;let i = index"\n\n              color="dark"\n\n              [name]="item.icon"\n\n              [ngClass]="{\'active\':item.isActive}"\n\n              (click)="onStarClass(data.iconsStars, i, $event)">\n\n            </ion-icon>\n\n        </ion-col>\n\n        <ion-col col-12 text-center>\n\n          <span font-bold span-small>{{data.title}}</span>\n\n        </ion-col>\n\n        <ion-col col-12 textarea>\n\n          <ion-item no-lines box-shadow>\n\n            <ion-textarea [placeholder]="data.descriptionPlaceholder" [(ngModel)]="description"></ion-textarea>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <button ion-button button-clear-outline round outline block text-capitalize (click)="onEvent(\'onSubmit\', $event)">\n\n          {{data.btnSubmit}}\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\components\forms\layout-2\form.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FormLayout2);
    return FormLayout2;
}());

//# sourceMappingURL=form-layout-2.js.map

/***/ })

});
//# sourceMappingURL=13.js.map