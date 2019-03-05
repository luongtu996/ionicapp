webpackJsonp([15],{

/***/ 167:
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
        "apiKey": "AIzaSyCRtOnMpz4V0ObZbXWoaLVRkPdtkgjGDPQ",
        "authDomain": "probable-pager-194417.firebaseapp.com",
        "databaseURL": "https://probable-pager-194417.firebaseio.com",
        "projectId": "probable-pager-194417",
        "storageBucket": "probable-pager-194417.appspot.com",
        "messagingSenderId": "62062255134"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(98);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(36);
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

/***/ 202:
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
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/forms/layout-1/form-layout-1.module": [
		639,
		14
	],
	"../components/forms/layout-2/form-layout-2.module": [
		640,
		13
	],
	"../components/forms/layout-3/form-layout-3.module": [
		641,
		12
	],
	"../components/forms/layout-4/form-layout-4.module": [
		642,
		11
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		638,
		10
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		643,
		9
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		644,
		8
	],
	"../pages/home/home.module": [
		645,
		3
	],
	"../pages/intro-page/intro-page.module": [
		646,
		4
	],
	"../pages/items/items.module": [
		647,
		5
	],
	"../pages/leaderboard/leaderboard.module": [
		648,
		1
	],
	"../pages/login/login.module": [
		649,
		2
	],
	"../pages/profile/profile.module": [
		650,
		7
	],
	"../pages/review/review.module": [
		651,
		0
	],
	"../pages/tab/tab.module": [
		652,
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
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(99);
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

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_usuario_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FcmProvider = /** @class */ (function () {
    function FcmProvider(http, firebaseNative, afs, platform, usuarioService) {
        this.http = http;
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
        this.usuarioService = usuarioService;
    }
    FcmProvider.prototype.getTokecn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.saveTokenToFirestore(token)];
                }
            });
        });
    };
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        if (!token)
            return;
        var devicesRef = this.afs.collection('devices');
        this.usuarioService.getProfile().subscribe(function (response) {
            var docData = {
                token: token,
                userId: response.data.id
            };
            return devicesRef.doc(token).set(docData);
        }, function (error) {
            console.log(error);
        });
    };
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_5__services_usuario_service__["a" /* UsuarioService */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(35);
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(36);
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

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(36);
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

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(36);
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(36);
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_api_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_service__ = __webpack_require__(36);
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

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(553);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_date_formatter__ = __webpack_require__(584);
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

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_settings__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loading_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__parameters__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_http_http_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_template_service__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_auth_auth_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_company_service__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_sms_service__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_leaderboard_service__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_dashboard_service__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ion2_calendar__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_usuario_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_local_notifications__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_review_service__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_firebase__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_firestore__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_fcm_fcm__ = __webpack_require__(424);
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
                __WEBPACK_IMPORTED_MODULE_28__services_review_service__["a" /* ReviewService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_fcm_fcm__["a" /* FcmProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_firebase__["a" /* Firebase */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__services_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_30_angularfire2_firestore__["b" /* AngularFirestoreModule */],
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
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderboard/leaderboard.module#LeaderboardModule', name: 'Leaderboard', segment: 'leaderboard', priority: 'low', defaultHistory: [] },
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

/***/ 584:
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

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 255,
	"./af.js": 255,
	"./ar": 256,
	"./ar-dz": 257,
	"./ar-dz.js": 257,
	"./ar-kw": 258,
	"./ar-kw.js": 258,
	"./ar-ly": 259,
	"./ar-ly.js": 259,
	"./ar-ma": 260,
	"./ar-ma.js": 260,
	"./ar-sa": 261,
	"./ar-sa.js": 261,
	"./ar-tn": 262,
	"./ar-tn.js": 262,
	"./ar.js": 256,
	"./az": 263,
	"./az.js": 263,
	"./be": 264,
	"./be.js": 264,
	"./bg": 265,
	"./bg.js": 265,
	"./bm": 266,
	"./bm.js": 266,
	"./bn": 267,
	"./bn.js": 267,
	"./bo": 268,
	"./bo.js": 268,
	"./br": 269,
	"./br.js": 269,
	"./bs": 270,
	"./bs.js": 270,
	"./ca": 271,
	"./ca.js": 271,
	"./cs": 272,
	"./cs.js": 272,
	"./cv": 273,
	"./cv.js": 273,
	"./cy": 274,
	"./cy.js": 274,
	"./da": 275,
	"./da.js": 275,
	"./de": 276,
	"./de-at": 277,
	"./de-at.js": 277,
	"./de-ch": 278,
	"./de-ch.js": 278,
	"./de.js": 276,
	"./dv": 279,
	"./dv.js": 279,
	"./el": 280,
	"./el.js": 280,
	"./en-au": 281,
	"./en-au.js": 281,
	"./en-ca": 282,
	"./en-ca.js": 282,
	"./en-gb": 283,
	"./en-gb.js": 283,
	"./en-ie": 284,
	"./en-ie.js": 284,
	"./en-il": 285,
	"./en-il.js": 285,
	"./en-nz": 286,
	"./en-nz.js": 286,
	"./eo": 287,
	"./eo.js": 287,
	"./es": 288,
	"./es-do": 289,
	"./es-do.js": 289,
	"./es-us": 290,
	"./es-us.js": 290,
	"./es.js": 288,
	"./et": 291,
	"./et.js": 291,
	"./eu": 292,
	"./eu.js": 292,
	"./fa": 293,
	"./fa.js": 293,
	"./fi": 294,
	"./fi.js": 294,
	"./fo": 295,
	"./fo.js": 295,
	"./fr": 296,
	"./fr-ca": 297,
	"./fr-ca.js": 297,
	"./fr-ch": 298,
	"./fr-ch.js": 298,
	"./fr.js": 296,
	"./fy": 299,
	"./fy.js": 299,
	"./gd": 300,
	"./gd.js": 300,
	"./gl": 301,
	"./gl.js": 301,
	"./gom-latn": 302,
	"./gom-latn.js": 302,
	"./gu": 303,
	"./gu.js": 303,
	"./he": 304,
	"./he.js": 304,
	"./hi": 305,
	"./hi.js": 305,
	"./hr": 306,
	"./hr.js": 306,
	"./hu": 307,
	"./hu.js": 307,
	"./hy-am": 308,
	"./hy-am.js": 308,
	"./id": 309,
	"./id.js": 309,
	"./is": 310,
	"./is.js": 310,
	"./it": 311,
	"./it.js": 311,
	"./ja": 312,
	"./ja.js": 312,
	"./jv": 313,
	"./jv.js": 313,
	"./ka": 314,
	"./ka.js": 314,
	"./kk": 315,
	"./kk.js": 315,
	"./km": 316,
	"./km.js": 316,
	"./kn": 317,
	"./kn.js": 317,
	"./ko": 318,
	"./ko.js": 318,
	"./ku": 319,
	"./ku.js": 319,
	"./ky": 320,
	"./ky.js": 320,
	"./lb": 321,
	"./lb.js": 321,
	"./lo": 322,
	"./lo.js": 322,
	"./lt": 323,
	"./lt.js": 323,
	"./lv": 324,
	"./lv.js": 324,
	"./me": 325,
	"./me.js": 325,
	"./mi": 326,
	"./mi.js": 326,
	"./mk": 327,
	"./mk.js": 327,
	"./ml": 328,
	"./ml.js": 328,
	"./mn": 329,
	"./mn.js": 329,
	"./mr": 330,
	"./mr.js": 330,
	"./ms": 331,
	"./ms-my": 332,
	"./ms-my.js": 332,
	"./ms.js": 331,
	"./mt": 333,
	"./mt.js": 333,
	"./my": 334,
	"./my.js": 334,
	"./nb": 335,
	"./nb.js": 335,
	"./ne": 336,
	"./ne.js": 336,
	"./nl": 337,
	"./nl-be": 338,
	"./nl-be.js": 338,
	"./nl.js": 337,
	"./nn": 339,
	"./nn.js": 339,
	"./pa-in": 340,
	"./pa-in.js": 340,
	"./pl": 341,
	"./pl.js": 341,
	"./pt": 342,
	"./pt-br": 343,
	"./pt-br.js": 343,
	"./pt.js": 342,
	"./ro": 344,
	"./ro.js": 344,
	"./ru": 345,
	"./ru.js": 345,
	"./sd": 346,
	"./sd.js": 346,
	"./se": 347,
	"./se.js": 347,
	"./si": 348,
	"./si.js": 348,
	"./sk": 349,
	"./sk.js": 349,
	"./sl": 350,
	"./sl.js": 350,
	"./sq": 351,
	"./sq.js": 351,
	"./sr": 352,
	"./sr-cyrl": 353,
	"./sr-cyrl.js": 353,
	"./sr.js": 352,
	"./ss": 354,
	"./ss.js": 354,
	"./sv": 355,
	"./sv.js": 355,
	"./sw": 356,
	"./sw.js": 356,
	"./ta": 357,
	"./ta.js": 357,
	"./te": 358,
	"./te.js": 358,
	"./tet": 359,
	"./tet.js": 359,
	"./tg": 360,
	"./tg.js": 360,
	"./th": 361,
	"./th.js": 361,
	"./tl-ph": 362,
	"./tl-ph.js": 362,
	"./tlh": 363,
	"./tlh.js": 363,
	"./tr": 364,
	"./tr.js": 364,
	"./tzl": 365,
	"./tzl.js": 365,
	"./tzm": 366,
	"./tzm-latn": 367,
	"./tzm-latn.js": 367,
	"./tzm.js": 366,
	"./ug-cn": 368,
	"./ug-cn.js": 368,
	"./uk": 369,
	"./uk.js": 369,
	"./ur": 370,
	"./ur.js": 370,
	"./uz": 371,
	"./uz-latn": 372,
	"./uz-latn.js": 372,
	"./uz.js": 371,
	"./vi": 373,
	"./vi.js": 373,
	"./x-pseudo": 374,
	"./x-pseudo.js": 374,
	"./yo": 375,
	"./yo.js": 375,
	"./zh-cn": 376,
	"./zh-cn.js": 376,
	"./zh-hk": 377,
	"./zh-hk.js": 377,
	"./zh-tw": 378,
	"./zh-tw.js": 378
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
webpackContext.id = 602;

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__ = __webpack_require__(424);
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
    function MyApp(platform, splashScreen, statusBar, menu, modalCtrl, fcm) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.fcm = fcm;
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
            _this.fcm.getTokecn();
            _this.fcm.listenToNotifications().subscribe(function (response) {
                console.log('response');
            }, function (error) {
                console.log(error);
            });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\app\app.html"*/'<ion-split-pane when="md">\n\n    <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_fcm_fcm__["a" /* FcmProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parameters; });
var Parameters = /** @class */ (function () {
    function Parameters() {
        this.API_URL = "https://api.dev.2stepreviewsapp.com/app_dev.php/";
        // API_URL = `https://api.dev.2stepreviewsapp.com/app.php/`;
        // API_URL = `http://localhost/reviews/web/app_dev.php/`;
    }
    return Parameters;
}());

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(98);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(35);
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(167);
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

},[438]);
//# sourceMappingURL=main.js.map