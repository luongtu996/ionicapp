webpackJsonp([15],{

/***/ 163:
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__(73);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 197:
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
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/forms/layout-1/form-layout-1.module": [
		626,
		14
	],
	"../components/forms/layout-2/form-layout-2.module": [
		627,
		13
	],
	"../components/forms/layout-3/form-layout-3.module": [
		628,
		12
	],
	"../components/forms/layout-4/form-layout-4.module": [
		629,
		11
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		625,
		10
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		630,
		9
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		631,
		8
	],
	"../pages/home/home.module": [
		632,
		3
	],
	"../pages/intro-page/intro-page.module": [
		633,
		4
	],
	"../pages/items/items.module": [
		635,
		5
	],
	"../pages/leaderboard/leaderboard.module": [
		634,
		1
	],
	"../pages/login/login.module": [
		636,
		2
	],
	"../pages/profile/profile.module": [
		637,
		7
	],
	"../pages/review/review.module": [
		638,
		0
	],
	"../pages/tab/tab.module": [
		639,
		6
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
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(162);
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
        return this.parameters['API_URL'];
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('Parameters')),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(38);
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
    function AuthService(loginService, http, loadingService, app) {
        this.loginService = loginService;
        this.http = http;
        this.loadingService = loadingService;
        this.app = app;
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
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expires_date');
        this.app.getRootNavs()[0].setRoot("Login");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__http_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["App"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(35);
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



var UsuarioService = /** @class */ (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'api/users/';
        return _this;
    }
    UsuarioService.prototype.getProfile = function () {
        return this.http.get(this.url + "profile");
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], UsuarioService);
    return UsuarioService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], TemplateService);
    return TemplateService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=template.service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], CompanyService);
    return CompanyService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], SmsService);
    return SmsService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=sms.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], DashboardService);
    return DashboardService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(35);
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



var ReviewService = /** @class */ (function (_super) {
    __extends(ReviewService, _super);
    function ReviewService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = 'api/reviews/';
        return _this;
    }
    ReviewService.prototype.get = function (filters) {
        return this.http.get("" + this.url, filters);
    };
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__["a" /* HttpService */]])
    ], ReviewService);
    return ReviewService;
}(__WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__["a" /* ApiService */]));

//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(543);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_date_formatter__ = __webpack_require__(574);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_http_service__["a" /* HttpService */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_settings__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loading_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__parameters__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_http_http_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_template_service__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_auth_auth_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_company_service__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_sms_service__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_leaderboard_service__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_dashboard_service__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ion2_calendar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_usuario_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_local_notifications__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_review_service__ = __webpack_require__(427);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_11__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_16__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_services_http_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_19__services_template_service__["a" /* TemplateService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__services_company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_22__services_sms_service__["a" /* SmsService */],
                __WEBPACK_IMPORTED_MODULE_23__services_leaderboard_service__["a" /* LeaderboardService */],
                __WEBPACK_IMPORTED_MODULE_24__services_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_26__services_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] },
                { provide: 'Parameters', useClass: __WEBPACK_IMPORTED_MODULE_17__parameters__["a" /* Parameters */] },
                __WEBPACK_IMPORTED_MODULE_28__services_review_service__["a" /* ReviewService */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__services_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/forms/layout-1/form-layout-1.module#FormLayout1Module', name: 'FormLayout1', segment: 'form-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-2/form-layout-2.module#FormLayout2Module', name: 'FormLayout2', segment: 'form-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-3/form-layout-3.module#FormLayout3Module', name: 'FormLayout3', segment: 'form-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/forms/layout-4/form-layout-4.module#FormLayout4Module', name: 'FormLayout4', segment: 'form-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-page/intro-page.module#IntroPageModule', name: 'IntroPage', segment: 'intro-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderboard/leaderboard.module#LeaderboardModule', name: 'Leaderboard', segment: 'leaderboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab/tab.module#TabPageModule', name: 'TabPage', segment: 'tab', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25_ion2_calendar__["CalendarModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 574:
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

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 249,
	"./af.js": 249,
	"./ar": 250,
	"./ar-dz": 251,
	"./ar-dz.js": 251,
	"./ar-kw": 252,
	"./ar-kw.js": 252,
	"./ar-ly": 253,
	"./ar-ly.js": 253,
	"./ar-ma": 254,
	"./ar-ma.js": 254,
	"./ar-sa": 255,
	"./ar-sa.js": 255,
	"./ar-tn": 256,
	"./ar-tn.js": 256,
	"./ar.js": 250,
	"./az": 257,
	"./az.js": 257,
	"./be": 258,
	"./be.js": 258,
	"./bg": 259,
	"./bg.js": 259,
	"./bm": 260,
	"./bm.js": 260,
	"./bn": 261,
	"./bn.js": 261,
	"./bo": 262,
	"./bo.js": 262,
	"./br": 263,
	"./br.js": 263,
	"./bs": 264,
	"./bs.js": 264,
	"./ca": 265,
	"./ca.js": 265,
	"./cs": 266,
	"./cs.js": 266,
	"./cv": 267,
	"./cv.js": 267,
	"./cy": 268,
	"./cy.js": 268,
	"./da": 269,
	"./da.js": 269,
	"./de": 270,
	"./de-at": 271,
	"./de-at.js": 271,
	"./de-ch": 272,
	"./de-ch.js": 272,
	"./de.js": 270,
	"./dv": 273,
	"./dv.js": 273,
	"./el": 274,
	"./el.js": 274,
	"./en-au": 275,
	"./en-au.js": 275,
	"./en-ca": 276,
	"./en-ca.js": 276,
	"./en-gb": 277,
	"./en-gb.js": 277,
	"./en-ie": 278,
	"./en-ie.js": 278,
	"./en-il": 279,
	"./en-il.js": 279,
	"./en-nz": 280,
	"./en-nz.js": 280,
	"./eo": 281,
	"./eo.js": 281,
	"./es": 282,
	"./es-do": 283,
	"./es-do.js": 283,
	"./es-us": 284,
	"./es-us.js": 284,
	"./es.js": 282,
	"./et": 285,
	"./et.js": 285,
	"./eu": 286,
	"./eu.js": 286,
	"./fa": 287,
	"./fa.js": 287,
	"./fi": 288,
	"./fi.js": 288,
	"./fo": 289,
	"./fo.js": 289,
	"./fr": 290,
	"./fr-ca": 291,
	"./fr-ca.js": 291,
	"./fr-ch": 292,
	"./fr-ch.js": 292,
	"./fr.js": 290,
	"./fy": 293,
	"./fy.js": 293,
	"./gd": 294,
	"./gd.js": 294,
	"./gl": 295,
	"./gl.js": 295,
	"./gom-latn": 296,
	"./gom-latn.js": 296,
	"./gu": 297,
	"./gu.js": 297,
	"./he": 298,
	"./he.js": 298,
	"./hi": 299,
	"./hi.js": 299,
	"./hr": 300,
	"./hr.js": 300,
	"./hu": 301,
	"./hu.js": 301,
	"./hy-am": 302,
	"./hy-am.js": 302,
	"./id": 303,
	"./id.js": 303,
	"./is": 304,
	"./is.js": 304,
	"./it": 305,
	"./it.js": 305,
	"./ja": 306,
	"./ja.js": 306,
	"./jv": 307,
	"./jv.js": 307,
	"./ka": 308,
	"./ka.js": 308,
	"./kk": 309,
	"./kk.js": 309,
	"./km": 310,
	"./km.js": 310,
	"./kn": 311,
	"./kn.js": 311,
	"./ko": 312,
	"./ko.js": 312,
	"./ku": 313,
	"./ku.js": 313,
	"./ky": 314,
	"./ky.js": 314,
	"./lb": 315,
	"./lb.js": 315,
	"./lo": 316,
	"./lo.js": 316,
	"./lt": 317,
	"./lt.js": 317,
	"./lv": 318,
	"./lv.js": 318,
	"./me": 319,
	"./me.js": 319,
	"./mi": 320,
	"./mi.js": 320,
	"./mk": 321,
	"./mk.js": 321,
	"./ml": 322,
	"./ml.js": 322,
	"./mn": 323,
	"./mn.js": 323,
	"./mr": 324,
	"./mr.js": 324,
	"./ms": 325,
	"./ms-my": 326,
	"./ms-my.js": 326,
	"./ms.js": 325,
	"./mt": 327,
	"./mt.js": 327,
	"./my": 328,
	"./my.js": 328,
	"./nb": 329,
	"./nb.js": 329,
	"./ne": 330,
	"./ne.js": 330,
	"./nl": 331,
	"./nl-be": 332,
	"./nl-be.js": 332,
	"./nl.js": 331,
	"./nn": 333,
	"./nn.js": 333,
	"./pa-in": 334,
	"./pa-in.js": 334,
	"./pl": 335,
	"./pl.js": 335,
	"./pt": 336,
	"./pt-br": 337,
	"./pt-br.js": 337,
	"./pt.js": 336,
	"./ro": 338,
	"./ro.js": 338,
	"./ru": 339,
	"./ru.js": 339,
	"./sd": 340,
	"./sd.js": 340,
	"./se": 341,
	"./se.js": 341,
	"./si": 342,
	"./si.js": 342,
	"./sk": 343,
	"./sk.js": 343,
	"./sl": 344,
	"./sl.js": 344,
	"./sq": 345,
	"./sq.js": 345,
	"./sr": 346,
	"./sr-cyrl": 347,
	"./sr-cyrl.js": 347,
	"./sr.js": 346,
	"./ss": 348,
	"./ss.js": 348,
	"./sv": 349,
	"./sv.js": 349,
	"./sw": 350,
	"./sw.js": 350,
	"./ta": 351,
	"./ta.js": 351,
	"./te": 352,
	"./te.js": 352,
	"./tet": 353,
	"./tet.js": 353,
	"./tg": 354,
	"./tg.js": 354,
	"./th": 355,
	"./th.js": 355,
	"./tl-ph": 356,
	"./tl-ph.js": 356,
	"./tlh": 357,
	"./tlh.js": 357,
	"./tr": 358,
	"./tr.js": 358,
	"./tzl": 359,
	"./tzl.js": 359,
	"./tzm": 360,
	"./tzm-latn": 361,
	"./tzm-latn.js": 361,
	"./tzm.js": 360,
	"./ug-cn": 362,
	"./ug-cn.js": 362,
	"./uk": 363,
	"./uk.js": 363,
	"./ur": 364,
	"./ur.js": 364,
	"./uz": 365,
	"./uz-latn": 366,
	"./uz-latn.js": 366,
	"./uz.js": 365,
	"./vi": 367,
	"./vi.js": 367,
	"./x-pseudo": 368,
	"./x-pseudo.js": 368,
	"./yo": 369,
	"./yo.js": 369,
	"./zh-cn": 370,
	"./zh-cn.js": 370,
	"./zh-hk": 371,
	"./zh-hk.js": 371,
	"./zh-tw": 372,
	"./zh-tw.js": 372
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 593;

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(417);
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
    function MyApp(platform, splashScreen, statusBar, menu, modalCtrl) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.rootPage = "TabPage";
        this.initializeApp();
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\app\app.html"*/'<ion-split-pane when="md">\n\n    <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parameters; });
var Parameters = /** @class */ (function () {
    function Parameters() {
        // API_URL = `https://api.dev.2stepreviewsapp.com/app_dev.php/`;
        // API_URL = `http://localhost/reviews/web/app_dev.php/`;
        this.API_URL = "http://192.168.1.105/reviews/api/web/app_dev.php/";
    }
    return Parameters;
}());

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__(73);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], LeaderboardService);
    return LeaderboardService;
}());

//# sourceMappingURL=leaderboard-service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(38);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(163);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ToastController"]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map