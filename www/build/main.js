webpackJsonp([12],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = /** @class */ (function () {
    function HomeService(af) {
        this.af = af;
        // Set data for - HOME PAGE
        this.getData = function () {
            return {
                "toolbarTitle": "Ionic3 UI Theme - Blue Light",
                "title": "SAVE HOURS",
                "subtitle": "OF DEVELOPING",
                "subtitle2": "and make apps fast as light!",
                "link": "http://csform.com/documentation-for-ionic-3-ui-template-app-blue-light/",
                "description": "For better understanding how our template works please read documentation.",
                "background": "assets/images/background/29.jpg"
            };
        };
    }
    HomeService.prototype.load = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.next(_this.getData());
                observer.complete();
            });
        }
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home-service.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/forms/layout-1/form-layout-1.module": [
		486,
		11
	],
	"../components/forms/layout-2/form-layout-2.module": [
		489,
		10
	],
	"../components/forms/layout-3/form-layout-3.module": [
		493,
		9
	],
	"../components/forms/layout-4/form-layout-4.module": [
		487,
		8
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		485,
		7
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		490,
		6
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		488,
		5
	],
	"../pages/home/home.module": [
		491,
		2
	],
	"../pages/intro-page/intro-page.module": [
		492,
		3
	],
	"../pages/items/items.module": [
		496,
		4
	],
	"../pages/leaderboard/leaderboard.module": [
		494,
		1
	],
	"../pages/login/login.module": [
		495,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaderboardService = /** @class */ (function () {
    function LeaderboardService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'leaderboard'; };
        this.getTitle = function () { return 'Leaderboard pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Leaderboard + logo 1", "theme": "layout1" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // Set Data For Login Pages - lOGIN + LOGO 1
        this.getDataForLayout1 = function () {
            return {
                "username": "Username",
                "password": "Password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/login.png",
                "errorUser": "Field can't be empty.",
                "errorPassword": "Field can't be empty."
            };
        };
        // Set Data For Login Pages - lOGIN + LOGO 2
        this.getDataForLayout2 = function () {
            return {
                "username": "Username",
                "password": "Password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/login.png",
                "errorUser": "Field can't be empty.",
                "errorPassword": "Field can't be empty."
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onLogin: function (params) {
                    that.toastCtrl.presentToast('onLogin:' + JSON.stringify(params));
                },
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip:' + JSON.stringify(params));
                },
                onFacebook: function (params) {
                    that.toastCtrl.presentToast('onFacebook:' + JSON.stringify(params));
                },
                onTwitter: function (params) {
                    that.toastCtrl.presentToast('onTwitter:' + JSON.stringify(params));
                },
                onGoogle: function (params) {
                    that.toastCtrl.presentToast('onGoogle:' + JSON.stringify(params));
                },
                onPinterest: function (params) {
                    that.toastCtrl.presentToast('onPinterest:' + JSON.stringify(params));
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: {},
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    LeaderboardService.prototype.load = function (item) {
        var that = this;
        that.loadingService.show();
        that.loadingService.hide();
    };
    LeaderboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], LeaderboardService);
    return LeaderboardService;
}());

//# sourceMappingURL=leaderboard-service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(41);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateService = /** @class */ (function (_super) {
    __extends(TemplateService, _super);
    function TemplateService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'api/templates/';
        return _this;
    }
    TemplateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], TemplateService);
    return TemplateService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=template.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(navCtrl, loginService, http, loadingService) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.http = http;
        this.loadingService = loadingService;
        this.isLoggedIn = false;
        this.isLoggedIn = true;
    }
    AuthService.prototype.login = function () {
        this.isLoggedIn = true;
    };
    // Logout a user, destroy token and remove
    // every information related to a user
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.navCtrl.push("Login", {
            service: this.loginService,
            page: { "title": "Login Pages", "theme": "login", "icon": "icon-lock-open-outline", "listView": false, "component": "Login", "singlePage": true },
            componentName: "Login"
        });
    };
    // Returns whether the user is currently authenticated
    // Could check if current token is still valid
    AuthService.prototype.authenticated = function () {
        return this.isLoggedIn;
    };
    AuthService.prototype.canActivate = function () {
        var _this = this;
        if (localStorage.getItem('access_token') == null || localStorage.getItem('access_token') == '') {
            this.logout();
        }
        else {
            if (localStorage.getItem('expires_date') == null || localStorage.getItem('expires_date') == '') {
                this.logout();
            }
            else {
                var now = new Date(localStorage.getItem(''));
                var expiresDate = new Date('expires_date');
                var tokenStillValid = (now < expiresDate);
                if (!tokenStillValid) {
                    if (localStorage.getItem('refresh_token') == null || localStorage.getItem('refresh_token') == '') {
                        this.logout();
                    }
                    else {
                        var params = {
                            "grant_type": "refresh_token",
                            "client_id": "1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4",
                            "client_secret": "4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
                            "refresh_token": localStorage.getItem('refresh_token')
                        };
                        this.http.post('oauth/v2/token', params).subscribe(function (response) {
                            localStorage.setItem('access_token', response.access_token);
                            localStorage.setItem('refresh_token', response.refresh_token);
                            localStorage.setItem('expires_date', _this.calculateTokenExpiresDateTime(response.expires_in).toString());
                        }, function (error) {
                            _this.logout();
                        });
                    }
                }
            }
        }
    };
    AuthService.prototype.calculateTokenExpiresDateTime = function (expires_in) {
        var now = new Date();
        var expiresDate = new Date(now.getTime() + expires_in * 1000);
        return expiresDate;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__http_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(41);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function (_super) {
    __extends(CompanyService, _super);
    function CompanyService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'api/companies/';
        return _this;
    }
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], CompanyService);
    return CompanyService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(41);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmsService = /** @class */ (function (_super) {
    __extends(SmsService, _super);
    function SmsService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'api/sms/';
        return _this;
    }
    SmsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], SmsService);
    return SmsService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=sms.service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(41);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'api/stats/';
        return _this;
    }
    DashboardService.prototype.getStats = function () {
        return this.http.get(this.url + "dashboard");
    };
    DashboardService.prototype.getStatsByDate = function (start, end) {
        return this.http.get(this.url + "dashboard?fecha_desde=" + start + "&fecha_hasta=" + end);
    };
    DashboardService.prototype.getStatsByLeaderboard = function () {
        return this.http.get(this.url + "leaderboard");
    };
    DashboardService.prototype.getStatsByLeaderboardByRange = function (start, end) {
        return this.http.get(this.url + "leaderboard?fecha_desde=" + start + "&fecha_hasta=" + end);
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], DashboardService);
    return DashboardService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(409);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loading_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_home_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__parameters__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_http_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_template_service__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_auth_auth_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_company_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_sms_service__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_leaderboard_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_dashboard_service__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_11__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_16__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_17__services_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_services_http_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_20__services_template_service__["a" /* TemplateService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__services_company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_23__services_sms_service__["a" /* SmsService */],
                __WEBPACK_IMPORTED_MODULE_24__services_leaderboard_service__["a" /* LeaderboardService */],
                __WEBPACK_IMPORTED_MODULE_25__services_dashboard_service__["a" /* DashboardService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: 'Parameters', useClass: __WEBPACK_IMPORTED_MODULE_18__parameters__["a" /* Parameters */] },
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__services_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/forms/layout-1/form-layout-1.module#FormLayout1Module', name: 'FormLayout1', segment: 'form-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-4/form-layout-4.module#FormLayout4Module', name: 'FormLayout4', segment: 'form-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-2/form-layout-2.module#FormLayout2Module', name: 'FormLayout2', segment: 'form-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-page/intro-page.module#IntroPageModule', name: 'IntroPage', segment: 'intro-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-3/form-layout-3.module#FormLayout3Module', name: 'FormLayout3', segment: 'form-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderboard/leaderboard.module#LeaderboardModule', name: 'Leaderboard', segment: 'leaderboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HttpService = /** @class */ (function () {
    function HttpService(parameters, http) {
        this.parameters = parameters;
        this.http = http;
    }
    HttpService.prototype.get = function (url, options) {
        return this.http.get(this.getUrl() + url, { headers: this.addAuthHeader(), params: this.addAuthParams(options) });
    };
    HttpService.prototype.post = function (url, body, options) {
        return this.http.post(this.getUrl() + url, body, { headers: this.addAuthHeader() });
    };
    HttpService.prototype.put = function (url, body) {
        return this.http.put(this.getUrl() + url, body, { headers: this.addAuthHeader() });
    };
    HttpService.prototype.delete = function (url, body, options) {
        return this.http.delete(this.getUrl() + url, { headers: this.addAuthHeader() });
    };
    HttpService.prototype.deleteWithBody = function (url, body, options) {
        return this.http.request('delete', this.getUrl() + url, { headers: this.addAuthHeader(), body: body });
    };
    HttpService.prototype.addAuthHeader = function () {
        if (localStorage.getItem('access_token')) {
            return new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + localStorage.getItem('access_token'));
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        }
    };
    HttpService.prototype.addAuthParams = function (options) {
        // If undefined it's set to an empty object
        options = Object(__WEBPACK_IMPORTED_MODULE_1_util__["isUndefined"])(options) ? new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]() : options;
        return options;
    };
    HttpService.prototype.getUrl = function () {
        return this.parameters['API_URL'].replace('{domain}', localStorage.getItem('domain'));
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])('Parameters')),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatter; });
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    /**
     * Formats a Date's into the correct string format.
     *
     * @param date The date to format.
     * @returns {string} The formatted Date.
     */
    DateFormatter.formatDate = function (date) {
        var month = '' + (date.month), day = '' + (date.day), year = date.year;
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    return DateFormatter;
}());

//# sourceMappingURL=date-formatter.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_service__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_home_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_leaderboard_service__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, splashScreen, statusBar, menu, menuService, modalCtrl, loginService, homeService, leaderboardService) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.loginService = loginService;
        this.homeService = homeService;
        this.leaderboardService = leaderboardService;
        this.rootPage = "HomePage";
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
            if (__WEBPACK_IMPORTED_MODULE_5__services_app_settings__["a" /* AppSettings */].SHOW_START_WIZARD) {
                _this.presentProfileModal();
            }
        });
    }
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        if (page.singlePage) {
            this.menu.open();
            this.nav.setRoot(this.getPageForOpen(page), {
                service: this.getServiceForPage(page),
                page: page,
                componentName: page['component']
            });
        }
        else {
            this.nav.setRoot("ItemsPage", {
                componentName: page.theme
            });
        }
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return value['component'];
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return this.selectServiceForOpen(value);
    };
    MyApp.prototype.selectServiceForOpen = function (value) {
        var service;
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\app\app.html"*/'<ion-split-pane when="md">\n\n  <!-- Menu Main Top  -->\n\n    <ion-menu [content]="content"  *ngIf="params != null">\n\n        <ion-header header-background-image [ngStyle]="{\'background-image\': \'url(\' + params.background + \')\'}">\n\n            <ion-thumbnail>\n\n                <img [src]="params.image">\n\n            </ion-thumbnail>\n\n            <h2 item-title text-center>{{params.title}}</h2>\n\n        </ion-header>\n\n        <!-- Menu Main List -->\n\n        <ion-content main-menu>\n\n            <ion-list no-margin no-padding>\n\n                <button menuClose ion-item paddinge-left no-lines item-title *ngFor="let p of pages" (click)="openPage(p)">\n\n                  <ion-icon icon-small item-left>\n\n                    <i class="icon {{p.icon}}"></i>\n\n                  </ion-icon>\n\n                  {{p.title}}\n\n                </button>\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n    <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__services_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_8__services_leaderboard_service__["a" /* LeaderboardService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = /** @class */ (function () {
    function MenuService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "Send A Review Invite", "theme": "home", "icon": "icon-comment-outline", "listView": false, "component": "HomePage", "singlePage": false },
                { "title": "Leaderboard", "theme": "home", "icon": "icon-account-outline", "listView": false, "component": "Leaderboard", "singlePage": true },
                { "title": "Logout", "theme": "login", "icon": "icon-logout", "listView": false, "component": "Login", "singlePage": true },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                // "background": "assets/images/background/16.jpg",
                "image": "assets/images/logo/logo-light-icon.png",
                "title": "2Step Reviews"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('menu')
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
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parameters; });
var Parameters = /** @class */ (function () {
    function Parameters() {
        this.API_URL = "https://api.{domain}.2stepreviewsapp.com/app_dev.php/";
        // API_URL = `http://localhost/reviews/web/app_dev.php/`;
        // API_URL = `https://api.repc.2stepreviewsapp.com/app_dev.php/`;
    }
    return Parameters;
}());

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = {
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": false,
    "BUY_BUTTON": false,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCYOVrRscQ26G5lAmOSfwrBFncNidaCSOE",
        "authDomain": "ionic3-blue-light.firebaseapp.com",
        "databaseURL": "https://ionic3-blue-light.firebaseio.com",
        "projectId": "ionic3-blue-light",
        "storageBucket": "ionic3-blue-light.appspot.com",
        "messagingSenderId": "519928359775"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_date_formatter__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.list = function (params) {
        if (!params)
            return this.http.get(this.url);
        params = this.serialize(params);
        return this.http.get(this.url, params);
    };
    ApiService.prototype.getById = function (id) {
        return this.http.get("" + this.url + id);
    };
    ApiService.prototype.getAll = function (params) {
        if (!params)
            return this.http.get(this.url + "all");
        params = this.serialize(params);
        return this.http.get(this.url + "all", params);
    };
    ApiService.prototype.create = function (resource) {
        resource = this.serialize(resource);
        return this.http.post(this.url, resource);
    };
    ApiService.prototype.update = function (resource, id) {
        resource = this.serialize(resource);
        return this.http.put("" + this.url + id, resource);
    };
    // updateByLanguage(resource: any, language: string): Observable<any> {
    //     resource = this.serialize(resource);
    //     return this.http.put(`${this.url}${resource.id}/${language}`, resource);
    // }
    ApiService.prototype.delete = function (id) {
        return this.http.delete("" + this.url + id);
    };
    ApiService.prototype.deleteWithBody = function (resources) {
        return this.http.delete("" + this.url, { body: (resources) });
    };
    // importar(resource): Observable<any> {
    //     resource = this.serialize(resource);
    //     return this.http.post(`${this.url}import`, resource);
    // }
    /**
     * Gets the data ready for being sent to the API.
     * Converts boolean params into binary params attributes.
     * Formats dates params.
     *
     * @param data The data to serialize
     * @returns {any} The serialized data.
     */
    ApiService.prototype.serialize = function (data) {
        var serializedData = {};
        Object.getOwnPropertyNames(data).forEach(function (attr) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_util__["isNullOrUndefined"])(data[attr])) {
                // Does not include it if null or undefined
            }
            else if (typeof data[attr] == 'boolean') {
                // Converts boolean params into binary int.
                serializedData[attr] = data[attr] ? 1 : 0;
                // serializedData[attr] = data[attr] ? true : false;
            }
            else if (data[attr]['year'] && data[attr]['month'] && data[attr]['day']) {
                // Puts Dates into the correct format.
                serializedData[attr] = __WEBPACK_IMPORTED_MODULE_3__helper_date_formatter__["a" /* DateFormatter */].formatDate(data[attr]);
            }
            else if (typeof data[attr] == 'string') {
                if (!data[attr].length) {
                }
                else {
                    // serializedData[attr] = data[attr].split(' ').join(',');
                    serializedData[attr] = data[attr].split(' ').join(' ');
                }
                // Does not include empty strings
            }
            else if (typeof data[attr] == 'number' && data[attr] == -1) {
            }
            else if (data[attr].formatted && data[attr].date) {
                serializedData[attr] = data[attr].formatted;
            }
            else {
                // Leaves it as is.
                serializedData[attr] = data[attr];
            }
        });
        return serializedData;
    };
    /**
     * Takes an object with params and transforms it into
     * a query params string to pass to an http request.
     *
     * @param object The object with the params.
     * @returns {string} The query params string.
     */
    ApiService.prototype.object2Params = function (object) {
        // Transforms the object into a query params array.
        var array = Object.getOwnPropertyNames(object).map(function (key) {
            return key + "=" + object[key];
        });
        // Joins the query params into a query params string.
        return array.join('&');
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_http_service__["a" /* HttpService */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'login'; };
        this.getTitle = function () { return 'Login pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Login + logo 1", "theme": "layout1" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // Set Data For Login Pages - lOGIN + LOGO 1
        this.getDataForLayout1 = function () {
            return {
                "username": "Username",
                "password": "Password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/login.png",
                "errorUser": "Field can't be empty.",
                "errorPassword": "Field can't be empty."
            };
        };
        // Set Data For Login Pages - lOGIN + LOGO 2
        this.getDataForLayout2 = function () {
            return {
                "username": "Username",
                "password": "Password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/login.png",
                "errorUser": "Field can't be empty.",
                "errorPassword": "Field can't be empty."
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onLogin: function (params) {
                    that.toastCtrl.presentToast('onLogin:' + JSON.stringify(params));
                },
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip:' + JSON.stringify(params));
                },
                onFacebook: function (params) {
                    that.toastCtrl.presentToast('onFacebook:' + JSON.stringify(params));
                },
                onTwitter: function (params) {
                    that.toastCtrl.presentToast('onTwitter:' + JSON.stringify(params));
                },
                onGoogle: function (params) {
                    that.toastCtrl.presentToast('onGoogle:' + JSON.stringify(params));
                },
                onPinterest: function (params) {
                    that.toastCtrl.presentToast('onPinterest:' + JSON.stringify(params));
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                theme: item.theme,
                data: {},
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    LoginService.prototype.load = function (item) {
        var that = this;
        that.loadingService.show();
        that.loadingService.hide();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login-service.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map