webpackJsonp([0],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewModule", function() { return ReviewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReviewModule = /** @class */ (function () {
    function ReviewModule() {
    }
    ReviewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ReviewModule);
    return ReviewModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_avatar__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_lm_mask_directive__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_lm_strong_directive__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_mask_ionic__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_avatar__["a" /* AvatarModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_mask_ionic__["a" /* NgxMaskIonicModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__directives_lm_mask_directive__["a" /* LmMaskDirective */],
                __WEBPACK_IMPORTED_MODULE_4__directives_lm_strong_directive__["a" /* LmStrongDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2_ngx_avatar__["a" /* AvatarModule */],
                __WEBPACK_IMPORTED_MODULE_3__directives_lm_mask_directive__["a" /* LmMaskDirective */],
                __WEBPACK_IMPORTED_MODULE_4__directives_lm_strong_directive__["a" /* LmStrongDirective */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_mask_ionic__["a" /* NgxMaskIonicModule */]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarModule; });
/* unused harmony export ɵd */
/* unused harmony export ɵa */
/* unused harmony export ɵc */
/* unused harmony export ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_retina__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_retina___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_is_retina__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(47);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Contract of all async sources.
 * Every async source must implement the processResponse method that extracts the avatar url from the data
 * @abstract
 */
var /**
 * Contract of all async sources.
 * Every async source must implement the processResponse method that extracts the avatar url from the data
 * @abstract
 */
AsyncSource = /** @class */ (function () {
    function AsyncSource(sourceId) {
        this.sourceId = sourceId;
    }
    return AsyncSource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var AvatarSource = {
    FACEBOOK: "facebook",
    GOOGLE: "google",
    TWITTER: "twitter",
    VKONTAKTE: "vkontakte",
    SKYPE: "skype",
    GRAVATAR: "gravatar",
    GITHUB: "github",
    CUSTOM: "custom",
    INITIALS: "initials",
    VALUE: "value",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Facebook source impelementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
var /**
 *  Facebook source impelementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
Facebook = /** @class */ (function () {
    function Facebook(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.FACEBOOK;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Facebook.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return 'https://graph.facebook.com/' +
            (this.sourceId + "/picture?width=" + size + "&height=" + size);
    };
    return Facebook;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Twitter source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
var /**
 *  Twitter source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
Twitter = /** @class */ (function () {
    function Twitter(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.TWITTER;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Twitter.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var twitterImgSize = this.getImageSize(size);
        return "https://twitter.com/" + this.sourceId + "/profile_image?size=" + twitterImgSize;
    };
    /**
     * @param {?} size
     * @return {?}
     */
    Twitter.prototype.getImageSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (size <= 24) {
            return 'mini';
        }
        if (size <= 48) {
            return 'normal';
        }
        if (size <= 73) {
            return 'bigger';
        }
        return 'original';
    };
    return Twitter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Google source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
var /**
 *  Google source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
Google = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(Google, _super);
    function Google(sourceId) {
        var _this = _super.call(this, sourceId) || this;
        _this.sourceType = AvatarSource.GOOGLE;
        return _this;
    }
    /**
     * @return {?}
     */
    Google.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return "https://picasaweb.google.com/data/entry/api/user/" + this.sourceId + "?alt=json";
    };
    /**
     * Extract google avatar from json data
     */
    /**
     * Extract google avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    Google.prototype.processResponse = /**
     * Extract google avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    function (data, size) {
        /** @type {?} */
        var avatarSrc = data.entry.gphoto$thumbnail.$t;
        if (avatarSrc) {
            return avatarSrc.replace('s64', 's' + size);
        }
    };
    return Google;
}(AsyncSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Custom source impelementation.
 *  return custom image as an avatar
 *
 */
var /**
 *  Custom source impelementation.
 *  return custom image as an avatar
 *
 */
Custom = /** @class */ (function () {
    function Custom(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.CUSTOM;
    }
    /**
     * @return {?}
     */
    Custom.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return this.sourceId;
    };
    return Custom;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Initials source impelementation.
 * return the initals of the given value
 */
var /**
 * Initials source impelementation.
 * return the initals of the given value
 */
Initials = /** @class */ (function () {
    function Initials(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.INITIALS;
    }
    /**
     * @param {?} initialsSize
     * @return {?}
     */
    Initials.prototype.getAvatar = /**
     * @param {?} initialsSize
     * @return {?}
     */
    function (initialsSize) {
        return this.getInitials(this.sourceId, initialsSize);
    };
    /**
     * Returns the initial letters of a name in a string.
     */
    /**
     * Returns the initial letters of a name in a string.
     * @param {?} name
     * @param {?} size
     * @return {?}
     */
    Initials.prototype.getInitials = /**
     * Returns the initial letters of a name in a string.
     * @param {?} name
     * @param {?} size
     * @return {?}
     */
    function (name, size) {
        name = name ? name.trim() : null;
        if (!name) {
            return '';
        }
        /** @type {?} */
        var initials = name.split(" ");
        if (size && size < initials.length) {
            return this.constructInitials(initials.slice(0, size));
        }
        else {
            return this.constructInitials(initials);
        }
    };
    /**
     * Iterates a person's name string to get the initials of each word in uppercase.
     */
    /**
     * Iterates a person's name string to get the initials of each word in uppercase.
     * @param {?} elements
     * @return {?}
     */
    Initials.prototype.constructInitials = /**
     * Iterates a person's name string to get the initials of each word in uppercase.
     * @param {?} elements
     * @return {?}
     */
    function (elements) {
        if (!elements || !elements.length) {
            return '';
        }
        return elements
            .filter(function (element) { return element && element.length > 0; })
            .map(function (element) { return element[0].toUpperCase(); })
            .join('');
    };
    return Initials;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Gravatar source impelementation.
 *  Fetch avatar source based on gravatar email
 */
var /**
 *  Gravatar source impelementation.
 *  Fetch avatar source based on gravatar email
 */
Gravatar = /** @class */ (function () {
    function Gravatar(value) {
        this.value = value;
        this.sourceType = AvatarSource.GRAVATAR;
        this.sourceId = value.match('^[a-f0-9]{32}$') ? value : __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(value).toString();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Gravatar.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var avatarSize = __WEBPACK_IMPORTED_MODULE_1_is_retina___default()() ? size * 2 : size;
        return "https://secure.gravatar.com/avatar/" + this.sourceId + "?s=" + avatarSize + "&d=404";
    };
    return Gravatar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Skype source impelementation.
 *  Fetch avatar source based on skype identifier
 */
var /**
 *  Skype source impelementation.
 *  Fetch avatar source based on skype identifier
 */
Skype = /** @class */ (function () {
    function Skype(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.SKYPE;
    }
    /**
     * @return {?}
     */
    Skype.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return "https://api.skype.com/users/" + this.sourceId + "/profile/avatar";
    };
    return Skype;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Value source impelementation.
 *  return the value as avatar
 */
var /**
 *  Value source impelementation.
 *  return the value as avatar
 */
Value = /** @class */ (function () {
    function Value(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.VALUE;
    }
    /**
     * @return {?}
     */
    Value.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return this.sourceId;
    };
    return Value;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Vkontakte source impelementation.
 *  Fetch avatar source based on vkontakte identifier
 *  and image size
 * @type {?}
 */
var apiVersion = 5.8;
var Vkontakte = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(Vkontakte, _super);
    function Vkontakte(sourceId) {
        var _this = _super.call(this, sourceId) || this;
        _this.sourceType = AvatarSource.VKONTAKTE;
        return _this;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Vkontakte.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var imgSize = this.getImageSize(size);
        return "https://api.vk.com/method/users.get?user_id=" + this.sourceId + "&v=" + apiVersion + "&fields=" + imgSize;
    };
    /**
    * extract vkontakte avatar from json data
    */
    /**
     * extract vkontakte avatar from json data
     * @param {?} data
     * @return {?}
     */
    Vkontakte.prototype.processResponse = /**
     * extract vkontakte avatar from json data
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // avatar key property is the size used to generate avatar url
        // size property is always the last key in the response object
        /** @type {?} */
        var sizeProperty = Object.keys(data['response'][0]).pop();
        // return avatar src
        return data['response'][0][sizeProperty];
    };
    /**
     * Returns image size related to vkontakte API
     * @param size
     */
    /**
     * Returns image size related to vkontakte API
     * @param {?} size
     * @return {?}
     */
    Vkontakte.prototype.getImageSize = /**
     * Returns image size related to vkontakte API
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (size <= 50) {
            return 'photo_50';
        }
        if (size <= 100) {
            return 'photo_100';
        }
        if (size <= 200) {
            return 'photo_200';
        }
        return 'photo_max';
    };
    return Vkontakte;
}(AsyncSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
var /**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
Github = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(Github, _super);
    function Github(sourceId) {
        var _this = _super.call(this, sourceId) || this;
        _this.sourceType = AvatarSource.GITHUB;
        return _this;
    }
    /**
     * @return {?}
     */
    Github.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return "https://api.github.com/users/" + this.sourceId;
    };
    /**
    * extract github avatar from json data
    */
    /**
     * extract github avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    Github.prototype.processResponse = /**
     * extract github avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    function (data, size) {
        if (size) {
            return data.avatar_url + "&s=" + size;
        }
        return data.avatar_url;
    };
    return Github;
}(AsyncSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Factory class that implements factory method pattern.
 * Used to create Source implementation class based
 * on the source Type
 */
var SourceFactory = /** @class */ (function () {
    function SourceFactory() {
        this.sources = {};
        this.sources[AvatarSource.FACEBOOK] = Facebook;
        this.sources[AvatarSource.TWITTER] = Twitter;
        this.sources[AvatarSource.GOOGLE] = Google;
        this.sources[AvatarSource.SKYPE] = Skype;
        this.sources[AvatarSource.GRAVATAR] = Gravatar;
        this.sources[AvatarSource.CUSTOM] = Custom;
        this.sources[AvatarSource.INITIALS] = Initials;
        this.sources[AvatarSource.VALUE] = Value;
        this.sources[AvatarSource.VKONTAKTE] = Vkontakte;
        this.sources[AvatarSource.GITHUB] = Github;
    }
    /**
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    SourceFactory.prototype.newInstance = /**
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    function (sourceType, sourceValue) {
        return new this.sources[sourceType](sourceValue);
    };
    SourceFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"] }
    ];
    /** @nocollapse */
    SourceFactory.ctorParameters = function () { return []; };
    return SourceFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Token used to inject the AvatarConfig object
 * @type {?}
 */
var AVATAR_CONFIG = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["InjectionToken"]("avatar.config");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * list of Supported avatar sources
 * @type {?}
 */
var defaultSources = [
    AvatarSource.FACEBOOK,
    AvatarSource.GOOGLE,
    AvatarSource.TWITTER,
    AvatarSource.VKONTAKTE,
    AvatarSource.SKYPE,
    AvatarSource.GRAVATAR,
    AvatarSource.GITHUB,
    AvatarSource.CUSTOM,
    AvatarSource.INITIALS,
    AvatarSource.VALUE
];
/**
 * list of default colors
 * @type {?}
 */
var defaultColors = [
    "#1abc9c",
    "#3498db",
    "#f1c40f",
    "#8e44ad",
    "#e74c3c",
    "#d35400",
    "#2c3e50",
    "#7f8c8d"
];
/**
 * Provides utilities methods related to Avatar component
 */
var AvatarService = /** @class */ (function () {
    function AvatarService(avatarConfig, http) {
        this.avatarConfig = avatarConfig;
        this.http = http;
        this.avatarSources = defaultSources;
        this.avatarColors = defaultColors;
        if (this.avatarConfig) {
            this.overrideAvatarSources();
            this.overrideAvatarColors();
        }
    }
    /**
     * @param {?} avatarUrl
     * @return {?}
     */
    AvatarService.prototype.fetchAvatar = /**
     * @param {?} avatarUrl
     * @return {?}
     */
    function (avatarUrl) {
        return this.http.get(avatarUrl);
    };
    /**
     * @param {?} avatarText
     * @return {?}
     */
    AvatarService.prototype.getRandomColor = /**
     * @param {?} avatarText
     * @return {?}
     */
    function (avatarText) {
        if (!avatarText) {
            return "transparent";
        }
        /** @type {?} */
        var asciiCodeSum = this.calculateAsciiCode(avatarText);
        return this.avatarColors[asciiCodeSum % this.avatarColors.length];
    };
    /**
     * @param {?} sourceType1
     * @param {?} sourceType2
     * @return {?}
     */
    AvatarService.prototype.copmareSources = /**
     * @param {?} sourceType1
     * @param {?} sourceType2
     * @return {?}
     */
    function (sourceType1, sourceType2) {
        return (this.getSourcePriority(sourceType1) - this.getSourcePriority(sourceType2));
    };
    /**
     * @param {?} source
     * @return {?}
     */
    AvatarService.prototype.isSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        return this.avatarSources.includes((/** @type {?} */ (source)));
    };
    /**
     * @param {?} sourceType
     * @return {?}
     */
    AvatarService.prototype.isTextAvatar = /**
     * @param {?} sourceType
     * @return {?}
     */
    function (sourceType) {
        return [AvatarSource.INITIALS, AvatarSource.VALUE].includes(sourceType);
    };
    /**
     * @return {?}
     */
    AvatarService.prototype.overrideAvatarSources = /**
     * @return {?}
     */
    function () {
        // TODO: add sources to avatarConfig and implement this
    };
    /**
     * @return {?}
     */
    AvatarService.prototype.overrideAvatarColors = /**
     * @return {?}
     */
    function () {
        if (this.avatarConfig.colors && this.avatarConfig.colors.length > 0) {
            this.avatarColors = this.avatarConfig.colors;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AvatarService.prototype.calculateAsciiCode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value
            .split("")
            .map(function (letter) { return letter.charCodeAt(0); })
            .reduce(function (previous, current) { return previous + current; });
    };
    /**
     * @param {?} sourceType
     * @return {?}
     */
    AvatarService.prototype.getSourcePriority = /**
     * @param {?} sourceType
     * @return {?}
     */
    function (sourceType) {
        return this.avatarSources.indexOf(sourceType);
    };
    AvatarService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"] }
    ];
    /** @nocollapse */
    AvatarService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [AVATAR_CONFIG,] }] },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] }
    ]; };
    return AvatarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Universal avatar component that
 * generates avatar from different sources
 *
 * export
 * class AvatarComponent
 * implements {OnChanges}
 */
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(elementRef, sourceFactory, avatarService) {
        this.elementRef = elementRef;
        this.sourceFactory = sourceFactory;
        this.avatarService = avatarService;
        this.round = true;
        this.size = 50;
        this.textSizeRatio = 3;
        this.fgColor = "#FFF";
        this.style = {};
        this.cornerRadius = 0;
        this.clickOnAvatar = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.avatarStyle = {};
        this.hostStyle = {};
        this._currentSource = 0;
        this._sources = Array();
    }
    // handle click event
    // handle click event
    /**
     * @param {?} event
     * @return {?}
     */
    AvatarComponent.prototype.handleClickEvent = 
    // handle click event
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event) {
            this.clickOnAvatar.emit(this._sources[this._currentSource - 1]);
        }
    };
    /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     */
    /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     * @param {?} changes
     * @return {?}
     */
    AvatarComponent.prototype.ngOnChanges = /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var propName in changes) {
            if (this.avatarService.isSource(propName)) {
                /** @type {?} */
                var currentValue = changes[propName].currentValue;
                this._addSource(AvatarSource[propName.toUpperCase()], currentValue);
            }
        }
        // reintialize the avatar component when a source property value has changed
        // the fallback system must be re-invoked with the new values.
        this._initializeAvatar();
    };
    /**
     * Initialize the avatar component and its fallback system
     */
    /**
     * Initialize the avatar component and its fallback system
     * @return {?}
     */
    AvatarComponent.prototype._initializeAvatar = /**
     * Initialize the avatar component and its fallback system
     * @return {?}
     */
    function () {
        var _this = this;
        this._currentSource = 0;
        if (this._sources.length > 0 && this._sources[this._currentSource]) {
            // Order sources array by source priority
            this._sources.sort(function (source1, source2) { return _this.avatarService.copmareSources(source1.sourceType, source2.sourceType); });
            // Host style
            this.hostStyle = {
                width: this.size + "px",
                height: this.size + "px"
            };
            // Fetch avatar source
            this.fetch();
        }
    };
    /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     */
    /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     * @param {?=} event
     * @return {?}
     */
    AvatarComponent.prototype.fetch = /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var avatarSource = this._sources[this._currentSource];
        if (!avatarSource) {
            return false;
        }
        if (this.avatarService.isTextAvatar(avatarSource.sourceType)) {
            this.data = avatarSource.getAvatar(this.initialsSize);
            this.src = undefined;
            this.avatarStyle = this._initialsStyle(avatarSource.sourceId);
        }
        else {
            this.avatarStyle = this._imageStyle();
            if (avatarSource instanceof AsyncSource) {
                this._fetchAsyncAvatar(avatarSource);
            }
            else {
                this.src = avatarSource.getAvatar(this.size);
            }
        }
        this._currentSource++;
    };
    /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     */
    /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     * @param {?} avatarValue
     * @return {?}
     */
    AvatarComponent.prototype._initialsStyle = /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     * @param {?} avatarValue
     * @return {?}
     */
    function (avatarValue) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"])({ textAlign: "center", borderRadius: this.round ? "100%" : this.cornerRadius + "px", border: this.borderColor ? "1px solid " + this.borderColor : "", textTransform: "uppercase", color: this.fgColor, backgroundColor: this.bgColor
                ? this.bgColor
                : this.avatarService.getRandomColor(avatarValue), font: Math.floor(this.size / this.textSizeRatio) +
                "px Helvetica, Arial, sans-serif", lineHeight: this.size + "px" }, this.style);
    };
    /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     */
    /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     * @return {?}
     */
    AvatarComponent.prototype._imageStyle = /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     * @return {?}
     */
    function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__assign"])({ maxWidth: "100%", borderRadius: this.round ? "50%" : this.cornerRadius + "px", border: this.borderColor ? "1px solid " + this.borderColor : "", width: this.size, height: this.size }, this.style);
    };
    /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     */
    /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     * @param {?} source
     * @return {?}
     */
    AvatarComponent.prototype._fetchAsyncAvatar = /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var _this = this;
        this.avatarService.fetchAvatar(source.getAvatar()).subscribe(function (data) {
            // extract avatar image from the response data
            _this.src = source.processResponse(data, _this.size);
        }, function (err) {
            console.error("ngx-avatar: error while fetching " + source.sourceType + " avatar ");
        });
    };
    /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     */
    /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    AvatarComponent.prototype._addSource = /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    function (sourceType, sourceValue) {
        if (sourceValue) {
            if (!this._updateExistingSource(sourceType, sourceValue)) {
                this._sources.push(this.sourceFactory.newInstance(sourceType, sourceValue));
            }
        }
    };
    /**
     * This method check wether an avatar source has been added. If so
     * the source value will be updated with the new value passed as
     * paramater.
     * It returns true if the source exists and update has been performed,
     * returns false if the source was not found
     *
     * param {string} sourceType the type of the source
     * param {string} sourceValue the new value of the source
     *
     * memberof AvatarComponent
     */
    /**
     * This method check wether an avatar source has been added. If so
     * the source value will be updated with the new value passed as
     * paramater.
     * It returns true if the source exists and update has been performed,
     * returns false if the source was not found
     *
     * param {string} sourceType the type of the source
     * param {string} sourceValue the new value of the source
     *
     * memberof AvatarComponent
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    AvatarComponent.prototype._updateExistingSource = /**
     * This method check wether an avatar source has been added. If so
     * the source value will be updated with the new value passed as
     * paramater.
     * It returns true if the source exists and update has been performed,
     * returns false if the source was not found
     *
     * param {string} sourceType the type of the source
     * param {string} sourceValue the new value of the source
     *
     * memberof AvatarComponent
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    function (sourceType, sourceValue) {
        /** @type {?} */
        var sourceIndex = this._sources.findIndex(function (source) { return source.sourceType === sourceType.toUpperCase(); });
        if (sourceIndex > -1) {
            this._sources[sourceIndex].sourceId = sourceValue;
            return true;
        }
        return false;
    };
    AvatarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: "ngx-avatar",
                    template: "\n    <div (click)=\"handleClickEvent($event)\" class=\"avatar-container\" [ngStyle]=\"hostStyle\">\n    <img *ngIf=\"src\"\n      [src]=\"src\"\n      [width]=\"size\"\n      [height]=\"size\"\n      [ngStyle]=\"avatarStyle\"\n      (error)=\"fetch($event)\"\n      class=\"avatar-content\"\n     />\n\n   <div *ngIf=\"data && !src\"\n     [ngStyle]=\"avatarStyle\"\n     class=\"avatar-content\">{{data}}</div>\n   </div>",
                    styles: ["\n      :host {\n        border-radius: \"50%\";\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    AvatarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] },
        { type: SourceFactory },
        { type: AvatarService }
    ]; };
    AvatarComponent.propDecorators = {
        round: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        size: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        textSizeRatio: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        bgColor: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        fgColor: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        borderColor: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        style: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        cornerRadius: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        facebook: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["facebookId",] }],
        twitter: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["twitterId",] }],
        google: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["googleId",] }],
        vkontakte: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["vkontakteId",] }],
        skype: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["skypeId",] }],
        gravatar: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["gravatarId",] }],
        github: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["githubId",] }],
        custom: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["src",] }],
        initials: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["name",] }],
        value: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["value",] }],
        placeholder: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["placeholder",] }],
        initialsSize: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ["initialsSize",] }],
        clickOnAvatar: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"] }]
    };
    return AvatarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AvatarModule = /** @class */ (function () {
    function AvatarModule() {
    }
    /**
     * @param {?=} avatarConfig
     * @return {?}
     */
    AvatarModule.forRoot = /**
     * @param {?=} avatarConfig
     * @return {?}
     */
    function (avatarConfig) {
        return {
            ngModule: AvatarModule,
            providers: [
                { provide: AVATAR_CONFIG, useValue: avatarConfig ? avatarConfig : {} }
            ]
        };
    };
    AvatarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
                    ],
                    declarations: [
                        AvatarComponent
                    ],
                    providers: [
                        SourceFactory,
                        AvatarService
                    ],
                    exports: [
                        AvatarComponent
                    ]
                },] }
    ];
    return AvatarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF2YXRhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWF2YXRhci9saWIvc291cmNlcy9hc3luYy1zb3VyY2UudHMiLCJuZzovL25neC1hdmF0YXIvbGliL3NvdXJjZXMvYXZhdGFyLXNvdXJjZS5lbnVtLnRzIiwibmc6Ly9uZ3gtYXZhdGFyL2xpYi9zb3VyY2VzL2ZhY2Vib29rLnRzIiwibmc6Ly9uZ3gtYXZhdGFyL2xpYi9zb3VyY2VzL3R3aXR0ZXIudHMiLCJuZzovL25neC1hdmF0YXIvbGliL3NvdXJjZXMvZ29vZ2xlLnRzIiwibmc6Ly9uZ3gtYXZhdGFyL2xpYi9zb3VyY2VzL2N1c3RvbS50cyIsIm5nOi8vbmd4LWF2YXRhci9saWIvc291cmNlcy9pbml0aWFscy50cyIsIm5nOi8vbmd4LWF2YXRhci9saWIvc291cmNlcy9ncmF2YXRhci50cyIsIm5nOi8vbmd4LWF2YXRhci9saWIvc291cmNlcy9za3lwZS50cyIsIm5nOi8vbmd4LWF2YXRhci9saWIvc291cmNlcy92YWx1ZS50cyIsIm5nOi8vbmd4LWF2YXRhci9saWIvc291cmNlcy92a29udGFrdGUudHMiLCJuZzovL25neC1hdmF0YXIvbGliL3NvdXJjZXMvZ2l0aHViLnRzIiwibmc6Ly9uZ3gtYXZhdGFyL2xpYi9zb3VyY2VzL3NvdXJjZS5mYWN0b3J5LnRzIiwibmc6Ly9uZ3gtYXZhdGFyL2xpYi9hdmF0YXItY29uZmlnLnRva2VuLnRzIiwibmc6Ly9uZ3gtYXZhdGFyL2xpYi9hdmF0YXIuc2VydmljZS50cyIsIm5nOi8vbmd4LWF2YXRhci9saWIvYXZhdGFyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWF2YXRhci9saWIvYXZhdGFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogQ29udHJhY3Qgb2YgYWxsIGFzeW5jIHNvdXJjZXMuXG4gKiBFdmVyeSBhc3luYyBzb3VyY2UgbXVzdCBpbXBsZW1lbnQgdGhlIHByb2Nlc3NSZXNwb25zZSBtZXRob2QgdGhhdCBleHRyYWN0cyB0aGUgYXZhdGFyIHVybCBmcm9tIHRoZSBkYXRhXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBc3luY1NvdXJjZSBpbXBsZW1lbnRzIFNvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlSWQ6IHN0cmluZykgeyB9XG5cbiAgYWJzdHJhY3QgZ2V0QXZhdGFyKHNpemU/OiBudW1iZXIpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHByb2Nlc3NSZXNwb25zZShkYXRhOiBhbnksIHNpemU/OiBudW1iZXIpOiBzdHJpbmc7XG5cbn1cbiIsImV4cG9ydCBlbnVtIEF2YXRhclNvdXJjZSB7XG4gIEZBQ0VCT09LID0gXCJmYWNlYm9va1wiLFxuICBHT09HTEUgPSBcImdvb2dsZVwiLFxuICBUV0lUVEVSID0gXCJ0d2l0dGVyXCIsXG4gIFZLT05UQUtURSA9IFwidmtvbnRha3RlXCIsXG4gIFNLWVBFID0gXCJza3lwZVwiLFxuICBHUkFWQVRBUiA9IFwiZ3JhdmF0YXJcIixcbiAgR0lUSFVCID0gXCJnaXRodWJcIixcbiAgQ1VTVE9NID0gXCJjdXN0b21cIixcbiAgSU5JVElBTFMgPSBcImluaXRpYWxzXCIsXG4gIFZBTFVFID0gXCJ2YWx1ZVwiXG59XG4iLCJpbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG4vKipcbiAqICBGYWNlYm9vayBzb3VyY2UgaW1wZWxlbWVudGF0aW9uLlxuICogIEZldGNoIGF2YXRhciBzb3VyY2UgYmFzZWQgb24gZmFjZWJvb2sgaWRlbnRpZmllclxuICogIGFuZCBpbWFnZSBzaXplXG4gKi9cbmV4cG9ydCBjbGFzcyBGYWNlYm9vayBpbXBsZW1lbnRzIFNvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5GQUNFQk9PSztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlSWQ6IHN0cmluZykge1xuICB9XG5cbiAgcHVibGljIGdldEF2YXRhcihzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiAnaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vJyArXG4gICAgICBgJHt0aGlzLnNvdXJjZUlkfS9waWN0dXJlP3dpZHRoPSR7c2l6ZX0maGVpZ2h0PSR7c2l6ZX1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogIFR3aXR0ZXIgc291cmNlIGltcGVsZW1lbnRhdGlvbi5cbiAqICBGZXRjaCBhdmF0YXIgc291cmNlIGJhc2VkIG9uIGdvb2dsZSBpZGVudGlmaWVyXG4gKiAgYW5kIGltYWdlIHNpemVcbiAqL1xuZXhwb3J0IGNsYXNzIFR3aXR0ZXIgaW1wbGVtZW50cyBTb3VyY2Uge1xuICByZWFkb25seSBzb3VyY2VUeXBlOiBBdmF0YXJTb3VyY2UgPSBBdmF0YXJTb3VyY2UuVFdJVFRFUjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlSWQ6IHN0cmluZykge1xuICB9XG5cbiAgcHVibGljIGdldEF2YXRhcihzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHR3aXR0ZXJJbWdTaXplID0gdGhpcy5nZXRJbWFnZVNpemUoc2l6ZSk7XG4gICAgcmV0dXJuIGBodHRwczovL3R3aXR0ZXIuY29tLyR7dGhpcy5zb3VyY2VJZH0vcHJvZmlsZV9pbWFnZT9zaXplPSR7dHdpdHRlckltZ1NpemV9YDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW1hZ2VTaXplKHNpemU6IG51bWJlcikge1xuICAgIGlmIChzaXplIDw9IDI0KSB7XG4gICAgICByZXR1cm4gJ21pbmknO1xuICAgIH1cblxuICAgIGlmIChzaXplIDw9IDQ4KSB7XG4gICAgICByZXR1cm4gJ25vcm1hbCc7XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPD0gNzMpIHtcbiAgICAgIHJldHVybiAnYmlnZ2VyJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ29yaWdpbmFsJztcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBBc3luY1NvdXJjZSB9IGZyb20gJy4vYXN5bmMtc291cmNlJztcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gJy4vYXZhdGFyLXNvdXJjZS5lbnVtJztcblxuLyoqXG4gKiAgR29vZ2xlIHNvdXJjZSBpbXBlbGVtZW50YXRpb24uXG4gKiAgRmV0Y2ggYXZhdGFyIHNvdXJjZSBiYXNlZCBvbiBnb29nbGUgaWRlbnRpZmllclxuICogIGFuZCBpbWFnZSBzaXplXG4gKi9cbmV4cG9ydCBjbGFzcyBHb29nbGUgZXh0ZW5kcyBBc3luY1NvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5HT09HTEU7XG5cbiAgY29uc3RydWN0b3Ioc291cmNlSWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNvdXJjZUlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmF0YXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vcGljYXNhd2ViLmdvb2dsZS5jb20vZGF0YS9lbnRyeS9hcGkvdXNlci8ke3RoaXMuc291cmNlSWR9P2FsdD1qc29uYDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgZ29vZ2xlIGF2YXRhciBmcm9tIGpzb24gZGF0YVxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NSZXNwb25zZShkYXRhOiBhbnksIHNpemU/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGF2YXRhclNyYyA9IGRhdGEuZW50cnkuZ3Bob3RvJHRodW1ibmFpbC4kdDtcbiAgICBpZiAoYXZhdGFyU3JjKSB7XG4gICAgICByZXR1cm4gYXZhdGFyU3JjLnJlcGxhY2UoJ3M2NCcsICdzJyArIHNpemUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi9zb3VyY2UnO1xuaW1wb3J0IHsgQXZhdGFyU291cmNlIH0gZnJvbSAnLi9hdmF0YXItc291cmNlLmVudW0nO1xuLyoqXG4gKiAgQ3VzdG9tIHNvdXJjZSBpbXBlbGVtZW50YXRpb24uXG4gKiAgcmV0dXJuIGN1c3RvbSBpbWFnZSBhcyBhbiBhdmF0YXJcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b20gaW1wbGVtZW50cyBTb3VyY2Uge1xuICByZWFkb25seSBzb3VyY2VUeXBlOiBBdmF0YXJTb3VyY2UgPSBBdmF0YXJTb3VyY2UuQ1VTVE9NO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzb3VyY2VJZDogc3RyaW5nKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXZhdGFyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlSWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCIuL3NvdXJjZVwiO1xuaW1wb3J0IHsgQXZhdGFyU291cmNlIH0gZnJvbSBcIi4vYXZhdGFyLXNvdXJjZS5lbnVtXCI7XG5cbi8qKlxuICogSW5pdGlhbHMgc291cmNlIGltcGVsZW1lbnRhdGlvbi5cbiAqIHJldHVybiB0aGUgaW5pdGFscyBvZiB0aGUgZ2l2ZW4gdmFsdWVcbiAqL1xuZXhwb3J0IGNsYXNzIEluaXRpYWxzIGltcGxlbWVudHMgU291cmNlIHtcbiAgXG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5JTklUSUFMUztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc291cmNlSWQ6IHN0cmluZ1xuICApIHsgfVxuXG4gIHB1YmxpYyBnZXRBdmF0YXIoaW5pdGlhbHNTaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxzKHRoaXMuc291cmNlSWQsIGluaXRpYWxzU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCBsZXR0ZXJzIG9mIGEgbmFtZSBpbiBhIHN0cmluZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0SW5pdGlhbHMobmFtZTogc3RyaW5nLCBzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIFxuICAgIG5hbWUgPSBuYW1lID8gbmFtZS50cmltKCkgOiBudWxsO1xuICAgIFxuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbml0aWFscyA9IG5hbWUuc3BsaXQoXCIgXCIpO1xuICAgIFxuICAgIGlmIChzaXplICYmIHNpemUgPCBpbml0aWFscy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdEluaXRpYWxzKGluaXRpYWxzLnNsaWNlKDAsIHNpemUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0SW5pdGlhbHMoaW5pdGlhbHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyBhIHBlcnNvbidzIG5hbWUgc3RyaW5nIHRvIGdldCB0aGUgaW5pdGlhbHMgb2YgZWFjaCB3b3JkIGluIHVwcGVyY2FzZS5cbiAgICovXG4gIHByaXZhdGUgY29uc3RydWN0SW5pdGlhbHMoZWxlbWVudHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBpZiAoIWVsZW1lbnRzIHx8ICFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbiAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50WzBdLnRvVXBwZXJDYXNlKCkpXG4gICAgICAuam9pbignJyk7XG4gIH1cbn1cbiIsImltcG9ydCBpc1JldGluYSBmcm9tICdpcy1yZXRpbmEnO1xuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4vc291cmNlJztcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gJy4vYXZhdGFyLXNvdXJjZS5lbnVtJztcblxuLyoqXG4gKiAgR3JhdmF0YXIgc291cmNlIGltcGVsZW1lbnRhdGlvbi5cbiAqICBGZXRjaCBhdmF0YXIgc291cmNlIGJhc2VkIG9uIGdyYXZhdGFyIGVtYWlsXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmF2YXRhciBpbXBsZW1lbnRzIFNvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5HUkFWQVRBUjtcbiAgcHVibGljIHNvdXJjZUlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZUlkID0gdmFsdWUubWF0Y2goJ15bYS1mMC05XXszMn0kJykgPyB2YWx1ZSA6IE1kNS5oYXNoU3RyKHZhbHVlKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIGdldEF2YXRhcihzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGF2YXRhclNpemUgPSBpc1JldGluYSgpID8gc2l6ZSAqIDIgOiBzaXplO1xuICAgIHJldHVybiBgaHR0cHM6Ly9zZWN1cmUuZ3JhdmF0YXIuY29tL2F2YXRhci8ke3RoaXMuc291cmNlSWR9P3M9JHthdmF0YXJTaXplfSZkPTQwNGA7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4vc291cmNlJztcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gJy4vYXZhdGFyLXNvdXJjZS5lbnVtJztcbi8qKlxuICogIFNreXBlIHNvdXJjZSBpbXBlbGVtZW50YXRpb24uXG4gKiAgRmV0Y2ggYXZhdGFyIHNvdXJjZSBiYXNlZCBvbiBza3lwZSBpZGVudGlmaWVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTa3lwZSBpbXBsZW1lbnRzIFNvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5TS1lQRTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlSWQ6IHN0cmluZykge1xuICB9XG5cbiAgcHVibGljIGdldEF2YXRhcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaHR0cHM6Ly9hcGkuc2t5cGUuY29tL3VzZXJzLyR7dGhpcy5zb3VyY2VJZH0vcHJvZmlsZS9hdmF0YXJgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogIFZhbHVlIHNvdXJjZSBpbXBlbGVtZW50YXRpb24uXG4gKiAgcmV0dXJuIHRoZSB2YWx1ZSBhcyBhdmF0YXJcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHVlIGltcGxlbWVudHMgU291cmNlIHtcbiAgcmVhZG9ubHkgc291cmNlVHlwZTogQXZhdGFyU291cmNlID0gQXZhdGFyU291cmNlLlZBTFVFO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzb3VyY2VJZDogc3RyaW5nKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXZhdGFyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlSWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFzeW5jU291cmNlIH0gZnJvbSAnLi9hc3luYy1zb3VyY2UnO1xuaW1wb3J0IHsgQXZhdGFyU291cmNlIH0gZnJvbSAnLi9hdmF0YXItc291cmNlLmVudW0nO1xuXG4vKipcbiAqICBWa29udGFrdGUgc291cmNlIGltcGVsZW1lbnRhdGlvbi5cbiAqICBGZXRjaCBhdmF0YXIgc291cmNlIGJhc2VkIG9uIHZrb250YWt0ZSBpZGVudGlmaWVyXG4gKiAgYW5kIGltYWdlIHNpemVcbiAqL1xuY29uc3QgYXBpVmVyc2lvbiA9IDUuODtcbmV4cG9ydCBjbGFzcyBWa29udGFrdGUgZXh0ZW5kcyBBc3luY1NvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5WS09OVEFLVEU7XG5cbiAgY29uc3RydWN0b3Ioc291cmNlSWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNvdXJjZUlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmF0YXIoc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBpbWdTaXplID0gdGhpcy5nZXRJbWFnZVNpemUoc2l6ZSk7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS52ay5jb20vbWV0aG9kL3VzZXJzLmdldD91c2VyX2lkPSR7dGhpcy5zb3VyY2VJZH0mdj0ke2FwaVZlcnNpb259JmZpZWxkcz0ke2ltZ1NpemV9YDtcbiAgfVxuXG4gICAvKipcbiAgICogZXh0cmFjdCB2a29udGFrdGUgYXZhdGFyIGZyb20ganNvbiBkYXRhXG4gICAqL1xuICBwdWJsaWMgcHJvY2Vzc1Jlc3BvbnNlKGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgLy8gYXZhdGFyIGtleSBwcm9wZXJ0eSBpcyB0aGUgc2l6ZSB1c2VkIHRvIGdlbmVyYXRlIGF2YXRhciB1cmxcbiAgICAvLyBzaXplIHByb3BlcnR5IGlzIGFsd2F5cyB0aGUgbGFzdCBrZXkgaW4gdGhlIHJlc3BvbnNlIG9iamVjdFxuICAgIGNvbnN0IHNpemVQcm9wZXJ0eSA9IE9iamVjdC5rZXlzKGRhdGFbJ3Jlc3BvbnNlJ11bMF0pLnBvcCgpO1xuICAgIC8vIHJldHVybiBhdmF0YXIgc3JjXG4gICAgcmV0dXJuIGRhdGFbJ3Jlc3BvbnNlJ11bMF1bc2l6ZVByb3BlcnR5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGltYWdlIHNpemUgcmVsYXRlZCB0byB2a29udGFrdGUgQVBJXG4gICAqIEBwYXJhbSBzaXplXG4gICAqL1xuICBwcml2YXRlIGdldEltYWdlU2l6ZShzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChzaXplIDw9IDUwKSB7XG4gICAgICByZXR1cm4gJ3Bob3RvXzUwJztcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8PSAxMDApIHtcbiAgICAgIHJldHVybiAncGhvdG9fMTAwJztcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8PSAyMDApIHtcbiAgICAgIHJldHVybiAncGhvdG9fMjAwJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3Bob3RvX21heCc7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQXN5bmNTb3VyY2UgfSBmcm9tICcuL2FzeW5jLXNvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogIEdpdGh1YiBzb3VyY2UgaW1wZWxlbWVudGF0aW9uLlxuICogIEZldGNoIGF2YXRhciBzb3VyY2UgYmFzZWQgb24gZ2l0aHViIGlkZW50aWZpZXJcbiAqL1xuZXhwb3J0IGNsYXNzIEdpdGh1YiBleHRlbmRzIEFzeW5jU291cmNlIHtcbiAgcmVhZG9ubHkgc291cmNlVHlwZTogQXZhdGFyU291cmNlID0gQXZhdGFyU291cmNlLkdJVEhVQjtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoc291cmNlSWQpO1xuICB9XG5cbiAgcHVibGljIGdldEF2YXRhcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3RoaXMuc291cmNlSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAqIGV4dHJhY3QgZ2l0aHViIGF2YXRhciBmcm9tIGpzb24gZGF0YVxuICAqL1xuIHB1YmxpYyBwcm9jZXNzUmVzcG9uc2UoZGF0YTogYW55LCBzaXplPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoc2l6ZSkge1xuICAgICAgcmV0dXJuIGAke2RhdGEuYXZhdGFyX3VybH0mcz0ke3NpemV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuYXZhdGFyX3VybDtcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCIuL3NvdXJjZVwiO1xuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tIFwiLi9mYWNlYm9va1wiO1xuaW1wb3J0IHsgVHdpdHRlciB9IGZyb20gXCIuL3R3aXR0ZXJcIjtcbmltcG9ydCB7IEdvb2dsZSB9IGZyb20gXCIuL2dvb2dsZVwiO1xuaW1wb3J0IHsgQ3VzdG9tIH0gZnJvbSBcIi4vY3VzdG9tXCI7XG5pbXBvcnQgeyBJbml0aWFscyB9IGZyb20gXCIuL2luaXRpYWxzXCI7XG5pbXBvcnQgeyBHcmF2YXRhciB9IGZyb20gXCIuL2dyYXZhdGFyXCI7XG5pbXBvcnQgeyBTa3lwZSB9IGZyb20gXCIuL3NreXBlXCI7XG5pbXBvcnQgeyBWYWx1ZSB9IGZyb20gXCIuL3ZhbHVlXCI7XG5pbXBvcnQgeyBWa29udGFrdGUgfSBmcm9tIFwiLi92a29udGFrdGVcIjtcbmltcG9ydCB7IEdpdGh1YiB9IGZyb20gXCIuL2dpdGh1YlwiO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNvdXJjZUNyZWF0b3IgfSBmcm9tIFwiLi9zb3VyY2UuY3JlYXRvclwiO1xuaW1wb3J0IHsgQXZhdGFyU291cmNlIH0gZnJvbSBcIi4vYXZhdGFyLXNvdXJjZS5lbnVtXCI7XG5cbi8qKlxuICogRmFjdG9yeSBjbGFzcyB0aGF0IGltcGxlbWVudHMgZmFjdG9yeSBtZXRob2QgcGF0dGVybi5cbiAqIFVzZWQgdG8gY3JlYXRlIFNvdXJjZSBpbXBsZW1lbnRhdGlvbiBjbGFzcyBiYXNlZFxuICogb24gdGhlIHNvdXJjZSBUeXBlXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VGYWN0b3J5IHtcbiAgcHJpdmF0ZSBzb3VyY2VzOiB7IFtrZXk6IHN0cmluZ106IFNvdXJjZUNyZWF0b3IgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc291cmNlc1tBdmF0YXJTb3VyY2UuRkFDRUJPT0tdID0gRmFjZWJvb2s7XG4gICAgdGhpcy5zb3VyY2VzW0F2YXRhclNvdXJjZS5UV0lUVEVSXSA9IFR3aXR0ZXI7XG4gICAgdGhpcy5zb3VyY2VzW0F2YXRhclNvdXJjZS5HT09HTEVdID0gR29vZ2xlO1xuICAgIHRoaXMuc291cmNlc1tBdmF0YXJTb3VyY2UuU0tZUEVdID0gU2t5cGU7XG4gICAgdGhpcy5zb3VyY2VzW0F2YXRhclNvdXJjZS5HUkFWQVRBUl0gPSBHcmF2YXRhcjtcbiAgICB0aGlzLnNvdXJjZXNbQXZhdGFyU291cmNlLkNVU1RPTV0gPSBDdXN0b207XG4gICAgdGhpcy5zb3VyY2VzW0F2YXRhclNvdXJjZS5JTklUSUFMU10gPSBJbml0aWFscztcbiAgICB0aGlzLnNvdXJjZXNbQXZhdGFyU291cmNlLlZBTFVFXSA9IFZhbHVlO1xuICAgIHRoaXMuc291cmNlc1tBdmF0YXJTb3VyY2UuVktPTlRBS1RFXSA9IFZrb250YWt0ZTtcbiAgICB0aGlzLnNvdXJjZXNbQXZhdGFyU291cmNlLkdJVEhVQl0gPSBHaXRodWI7XG4gIH1cblxuICBwdWJsaWMgbmV3SW5zdGFuY2Uoc291cmNlVHlwZTogQXZhdGFyU291cmNlLCBzb3VyY2VWYWx1ZTogc3RyaW5nKTogU291cmNlIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuc291cmNlc1tzb3VyY2VUeXBlXShzb3VyY2VWYWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQXZhdGFyQ29uZmlnIH0gZnJvbSBcIi4vYXZhdGFyLWNvbmZpZ1wiO1xuLyoqXG4gKiBUb2tlbiB1c2VkIHRvIGluamVjdCB0aGUgQXZhdGFyQ29uZmlnIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgQVZBVEFSX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBdmF0YXJDb25maWc+KFwiYXZhdGFyLmNvbmZpZ1wiKTtcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBBVkFUQVJfQ09ORklHIH0gZnJvbSBcIi4vYXZhdGFyLWNvbmZpZy50b2tlblwiO1xuaW1wb3J0IHsgQXZhdGFyQ29uZmlnIH0gZnJvbSBcIi4vYXZhdGFyLWNvbmZpZ1wiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tIFwiLi9zb3VyY2VzL2F2YXRhci1zb3VyY2UuZW51bVwiO1xuXG4vKipcbiAqIGxpc3Qgb2YgU3VwcG9ydGVkIGF2YXRhciBzb3VyY2VzXG4gKi9cbmNvbnN0IGRlZmF1bHRTb3VyY2VzID0gW1xuICBBdmF0YXJTb3VyY2UuRkFDRUJPT0ssXG4gIEF2YXRhclNvdXJjZS5HT09HTEUsXG4gIEF2YXRhclNvdXJjZS5UV0lUVEVSLFxuICBBdmF0YXJTb3VyY2UuVktPTlRBS1RFLFxuICBBdmF0YXJTb3VyY2UuU0tZUEUsXG4gIEF2YXRhclNvdXJjZS5HUkFWQVRBUixcbiAgQXZhdGFyU291cmNlLkdJVEhVQixcbiAgQXZhdGFyU291cmNlLkNVU1RPTSxcbiAgQXZhdGFyU291cmNlLklOSVRJQUxTLFxuICBBdmF0YXJTb3VyY2UuVkFMVUVcbl07XG5cbi8qKlxuICogbGlzdCBvZiBkZWZhdWx0IGNvbG9yc1xuICovXG5jb25zdCBkZWZhdWx0Q29sb3JzID0gW1xuICBcIiMxYWJjOWNcIixcbiAgXCIjMzQ5OGRiXCIsXG4gIFwiI2YxYzQwZlwiLFxuICBcIiM4ZTQ0YWRcIixcbiAgXCIjZTc0YzNjXCIsXG4gIFwiI2QzNTQwMFwiLFxuICBcIiMyYzNlNTBcIixcbiAgXCIjN2Y4YzhkXCJcbl07XG5cbi8qKlxuICogUHJvdmlkZXMgdXRpbGl0aWVzIG1ldGhvZHMgcmVsYXRlZCB0byBBdmF0YXIgY29tcG9uZW50XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdmF0YXJTZXJ2aWNlIHtcbiAgcHVibGljIGF2YXRhclNvdXJjZXM6IEF2YXRhclNvdXJjZVtdID0gZGVmYXVsdFNvdXJjZXM7XG4gIHB1YmxpYyBhdmF0YXJDb2xvcnM6IHN0cmluZ1tdID0gZGVmYXVsdENvbG9ycztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQVZBVEFSX0NPTkZJRylcbiAgICBwcml2YXRlIGF2YXRhckNvbmZpZzogQXZhdGFyQ29uZmlnLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICApIHtcbiAgICBpZiAodGhpcy5hdmF0YXJDb25maWcpIHtcbiAgICAgIHRoaXMub3ZlcnJpZGVBdmF0YXJTb3VyY2VzKCk7XG4gICAgICB0aGlzLm92ZXJyaWRlQXZhdGFyQ29sb3JzKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZldGNoQXZhdGFyKGF2YXRhclVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChhdmF0YXJVcmwpO1xuICB9XG5cbiAgcHVibGljIGdldFJhbmRvbUNvbG9yKGF2YXRhclRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFhdmF0YXJUZXh0KSB7XG4gICAgICByZXR1cm4gXCJ0cmFuc3BhcmVudFwiO1xuICAgIH1cbiAgICBjb25zdCBhc2NpaUNvZGVTdW0gPSB0aGlzLmNhbGN1bGF0ZUFzY2lpQ29kZShhdmF0YXJUZXh0KTtcbiAgICByZXR1cm4gdGhpcy5hdmF0YXJDb2xvcnNbYXNjaWlDb2RlU3VtICUgdGhpcy5hdmF0YXJDb2xvcnMubGVuZ3RoXTtcbiAgfVxuXG4gIHB1YmxpYyBjb3BtYXJlU291cmNlcyhcbiAgICBzb3VyY2VUeXBlMTogQXZhdGFyU291cmNlLFxuICAgIHNvdXJjZVR5cGUyOiBBdmF0YXJTb3VyY2VcbiAgKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZXRTb3VyY2VQcmlvcml0eShzb3VyY2VUeXBlMSkgLSB0aGlzLmdldFNvdXJjZVByaW9yaXR5KHNvdXJjZVR5cGUyKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaXNTb3VyY2Uoc291cmNlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hdmF0YXJTb3VyY2VzLmluY2x1ZGVzKHNvdXJjZSBhcyBBdmF0YXJTb3VyY2UpO1xuICB9XG5cbiAgcHVibGljIGlzVGV4dEF2YXRhcihzb3VyY2VUeXBlOiBBdmF0YXJTb3VyY2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gW0F2YXRhclNvdXJjZS5JTklUSUFMUywgQXZhdGFyU291cmNlLlZBTFVFXS5pbmNsdWRlcyhzb3VyY2VUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVBdmF0YXJTb3VyY2VzKCk6IHZvaWQge1xuICAgIC8vIFRPRE86IGFkZCBzb3VyY2VzIHRvIGF2YXRhckNvbmZpZyBhbmQgaW1wbGVtZW50IHRoaXNcbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVBdmF0YXJDb2xvcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXZhdGFyQ29uZmlnLmNvbG9ycyAmJiB0aGlzLmF2YXRhckNvbmZpZy5jb2xvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hdmF0YXJDb2xvcnMgPSB0aGlzLmF2YXRhckNvbmZpZy5jb2xvcnM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBc2NpaUNvZGUodmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICAuc3BsaXQoXCJcIilcbiAgICAgIC5tYXAobGV0dGVyID0+IGxldHRlci5jaGFyQ29kZUF0KDApKVxuICAgICAgLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHByZXZpb3VzICsgY3VycmVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvdXJjZVByaW9yaXR5KHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSkge1xuICAgIHJldHVybiB0aGlzLmF2YXRhclNvdXJjZXMuaW5kZXhPZihzb3VyY2VUeXBlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSBcIi4vc291cmNlcy9zb3VyY2VcIjtcbmltcG9ydCB7IEFzeW5jU291cmNlIH0gZnJvbSBcIi4vc291cmNlcy9hc3luYy1zb3VyY2VcIjtcbmltcG9ydCB7IFNvdXJjZUZhY3RvcnkgfSBmcm9tIFwiLi9zb3VyY2VzL3NvdXJjZS5mYWN0b3J5XCI7XG5pbXBvcnQgeyBBdmF0YXJTZXJ2aWNlIH0gZnJvbSBcIi4vYXZhdGFyLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gXCIuL3NvdXJjZXMvYXZhdGFyLXNvdXJjZS5lbnVtXCI7XG5cbi8qKlxuICogVW5pdmVyc2FsIGF2YXRhciBjb21wb25lbnQgdGhhdFxuICogZ2VuZXJhdGVzIGF2YXRhciBmcm9tIGRpZmZlcmVudCBzb3VyY2VzXG4gKlxuICogZXhwb3J0XG4gKiBjbGFzcyBBdmF0YXJDb21wb25lbnRcbiAqIGltcGxlbWVudHMge09uQ2hhbmdlc31cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJuZ3gtYXZhdGFyXCIsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogXCI1MCVcIjtcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAoY2xpY2spPVwiaGFuZGxlQ2xpY2tFdmVudCgkZXZlbnQpXCIgY2xhc3M9XCJhdmF0YXItY29udGFpbmVyXCIgW25nU3R5bGVdPVwiaG9zdFN0eWxlXCI+XG4gICAgPGltZyAqbmdJZj1cInNyY1wiXG4gICAgICBbc3JjXT1cInNyY1wiXG4gICAgICBbd2lkdGhdPVwic2l6ZVwiXG4gICAgICBbaGVpZ2h0XT1cInNpemVcIlxuICAgICAgW25nU3R5bGVdPVwiYXZhdGFyU3R5bGVcIlxuICAgICAgKGVycm9yKT1cImZldGNoKCRldmVudClcIlxuICAgICAgY2xhc3M9XCJhdmF0YXItY29udGVudFwiXG4gICAgIC8+XG5cbiAgIDxkaXYgKm5nSWY9XCJkYXRhICYmICFzcmNcIlxuICAgICBbbmdTdHlsZV09XCJhdmF0YXJTdHlsZVwiXG4gICAgIGNsYXNzPVwiYXZhdGFyLWNvbnRlbnRcIj57e2RhdGF9fTwvZGl2PlxuICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICByb3VuZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNpemU6IG51bWJlciA9IDUwO1xuICBASW5wdXQoKVxuICB0ZXh0U2l6ZVJhdGlvOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKVxuICBiZ0NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGZnQ29sb3IgPSBcIiNGRkZcIjtcbiAgQElucHV0KClcbiAgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3R5bGU6IGFueSA9IHt9O1xuICBASW5wdXQoKVxuICBjb3JuZXJSYWRpdXMgPSAwO1xuICBASW5wdXQoXCJmYWNlYm9va0lkXCIpXG4gIGZhY2Vib29rOiBzdHJpbmc7XG4gIEBJbnB1dChcInR3aXR0ZXJJZFwiKVxuICB0d2l0dGVyOiBzdHJpbmc7XG4gIEBJbnB1dChcImdvb2dsZUlkXCIpXG4gIGdvb2dsZTogc3RyaW5nO1xuICBASW5wdXQoXCJ2a29udGFrdGVJZFwiKVxuICB2a29udGFrdGU6IHN0cmluZztcbiAgQElucHV0KFwic2t5cGVJZFwiKVxuICBza3lwZTogc3RyaW5nO1xuICBASW5wdXQoXCJncmF2YXRhcklkXCIpXG4gIGdyYXZhdGFyOiBzdHJpbmc7XG4gIEBJbnB1dChcImdpdGh1YklkXCIpXG4gIGdpdGh1Yjogc3RyaW5nO1xuICBASW5wdXQoXCJzcmNcIilcbiAgY3VzdG9tOiBzdHJpbmc7XG4gIEBJbnB1dChcIm5hbWVcIilcbiAgaW5pdGlhbHM6IHN0cmluZztcbiAgQElucHV0KFwidmFsdWVcIilcbiAgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KFwicGxhY2Vob2xkZXJcIilcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KFwiaW5pdGlhbHNTaXplXCIpXG4gIGluaXRpYWxzU2l6ZTogbnVtYmVyO1xuICBAT3V0cHV0KClcbiAgY2xpY2tPbkF2YXRhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvLyBhdmF0YXIgaW1nIHNyY1xuICBwdWJsaWMgc3JjOiBzdHJpbmc7XG4gIC8vIGF2YXRhciB0ZXh0IHZhbHVlXG4gIHB1YmxpYyBkYXRhOiBzdHJpbmc7XG4gIHB1YmxpYyBhdmF0YXJTdHlsZTogYW55ID0ge307XG4gIHB1YmxpYyBob3N0U3R5bGU6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgX2N1cnJlbnRTb3VyY2UgPSAwO1xuICBwcml2YXRlIF9zb3VyY2VzOiBTb3VyY2VbXSA9IEFycmF5KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHNvdXJjZUZhY3Rvcnk6IFNvdXJjZUZhY3RvcnksXG4gICAgcHJpdmF0ZSBhdmF0YXJTZXJ2aWNlOiBBdmF0YXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgLy8gaGFuZGxlIGNsaWNrIGV2ZW50XG4gIGhhbmRsZUNsaWNrRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgdGhpcy5jbGlja09uQXZhdGFyLmVtaXQodGhpcy5fc291cmNlc1t0aGlzLl9jdXJyZW50U291cmNlIC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlY3QgaW5wdXRzIGNoYW5nZVxuICAgKlxuICAgKiBwYXJhbSB7eyBbcHJvcEtleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH19IGNoYW5nZXNcbiAgICpcbiAgICogbWVtYmVyb2YgQXZhdGFyQ29tcG9uZW50XG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuYXZhdGFyU2VydmljZS5pc1NvdXJjZShwcm9wTmFtZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuICAgICAgICB0aGlzLl9hZGRTb3VyY2UoQXZhdGFyU291cmNlW3Byb3BOYW1lLnRvVXBwZXJDYXNlKCldLCBjdXJyZW50VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZWludGlhbGl6ZSB0aGUgYXZhdGFyIGNvbXBvbmVudCB3aGVuIGEgc291cmNlIHByb3BlcnR5IHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgLy8gdGhlIGZhbGxiYWNrIHN5c3RlbSBtdXN0IGJlIHJlLWludm9rZWQgd2l0aCB0aGUgbmV3IHZhbHVlcy5cbiAgICB0aGlzLl9pbml0aWFsaXplQXZhdGFyKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgYXZhdGFyIGNvbXBvbmVudCBhbmQgaXRzIGZhbGxiYWNrIHN5c3RlbVxuICAgKi9cbiAgX2luaXRpYWxpemVBdmF0YXIoKSB7XG4gICAgdGhpcy5fY3VycmVudFNvdXJjZSA9IDA7XG4gICAgaWYgKHRoaXMuX3NvdXJjZXMubGVuZ3RoID4gMCAmJiB0aGlzLl9zb3VyY2VzW3RoaXMuX2N1cnJlbnRTb3VyY2VdKSB7XG4gICAgICAvLyBPcmRlciBzb3VyY2VzIGFycmF5IGJ5IHNvdXJjZSBwcmlvcml0eVxuICAgICAgdGhpcy5fc291cmNlcy5zb3J0KChzb3VyY2UxLCBzb3VyY2UyKSA9PiB0aGlzLmF2YXRhclNlcnZpY2UuY29wbWFyZVNvdXJjZXMoc291cmNlMS5zb3VyY2VUeXBlLCBzb3VyY2UyLnNvdXJjZVR5cGUpKTtcbiAgICAgIC8vIEhvc3Qgc3R5bGVcbiAgICAgIHRoaXMuaG9zdFN0eWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5zaXplICsgXCJweFwiLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZSArIFwicHhcIlxuICAgICAgfTtcbiAgICAgIC8vIEZldGNoIGF2YXRhciBzb3VyY2VcbiAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggYXZhdGFyIHNvdXJjZVxuICAgKlxuICAgKiBwYXJhbSB7YW55fSBldmVudFxuICAgKlxuICAgKiBtZW1iZXJPZiBBdmF0YXJDb21wb25lbnRcbiAgICovXG4gIGZldGNoKGV2ZW50PzogYW55KSB7XG4gICAgY29uc3QgYXZhdGFyU291cmNlID0gdGhpcy5fc291cmNlc1t0aGlzLl9jdXJyZW50U291cmNlXTtcbiAgICBpZiAoIWF2YXRhclNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdmF0YXJTZXJ2aWNlLmlzVGV4dEF2YXRhcihhdmF0YXJTb3VyY2Uuc291cmNlVHlwZSkpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGF2YXRhclNvdXJjZS5nZXRBdmF0YXIodGhpcy5pbml0aWFsc1NpemUpO1xuICAgICAgdGhpcy5zcmMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmF2YXRhclN0eWxlID0gdGhpcy5faW5pdGlhbHNTdHlsZShhdmF0YXJTb3VyY2Uuc291cmNlSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF2YXRhclN0eWxlID0gdGhpcy5faW1hZ2VTdHlsZSgpO1xuICAgICAgaWYgKGF2YXRhclNvdXJjZSBpbnN0YW5jZW9mIEFzeW5jU291cmNlKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoQXN5bmNBdmF0YXIoYXZhdGFyU291cmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3JjID0gYXZhdGFyU291cmNlLmdldEF2YXRhcih0aGlzLnNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50U291cmNlKys7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogcmV0dXJucyBpbml0aWFscyBzdHlsZVxuICAgKlxuICAgKiBtZW1iZXJPZiBBdmF0YXJDb21wb25lbnRcbiAgICovXG4gIF9pbml0aWFsc1N0eWxlKGF2YXRhclZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLnJvdW5kID8gXCIxMDAlXCIgOiB0aGlzLmNvcm5lclJhZGl1cyArIFwicHhcIixcbiAgICAgIGJvcmRlcjogdGhpcy5ib3JkZXJDb2xvciA/IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5ib3JkZXJDb2xvciA6IFwiXCIsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgY29sb3I6IHRoaXMuZmdDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iZ0NvbG9yXG4gICAgICAgID8gdGhpcy5iZ0NvbG9yXG4gICAgICAgIDogdGhpcy5hdmF0YXJTZXJ2aWNlLmdldFJhbmRvbUNvbG9yKGF2YXRhclZhbHVlKSxcbiAgICAgIGZvbnQ6XG4gICAgICAgIE1hdGguZmxvb3IodGhpcy5zaXplIC8gdGhpcy50ZXh0U2l6ZVJhdGlvKSArXG4gICAgICAgIFwicHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgICAgbGluZUhlaWdodDogdGhpcy5zaXplICsgXCJweFwiLFxuICAgICAgLi4udGhpcy5zdHlsZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogcmV0dXJucyBpbWFnZSBzdHlsZVxuICAgKlxuICAgKiBtZW1iZXJPZiBBdmF0YXJDb21wb25lbnRcbiAgICovXG4gIF9pbWFnZVN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMucm91bmQgPyBcIjUwJVwiIDogdGhpcy5jb3JuZXJSYWRpdXMgKyBcInB4XCIsXG4gICAgICBib3JkZXI6IHRoaXMuYm9yZGVyQ29sb3IgPyBcIjFweCBzb2xpZCBcIiArIHRoaXMuYm9yZGVyQ29sb3IgOiBcIlwiLFxuICAgICAgd2lkdGg6IHRoaXMuc2l6ZSxcbiAgICAgIGhlaWdodDogdGhpcy5zaXplLFxuICAgICAgLi4udGhpcy5zdHlsZVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEZldGNoIGF2YXRhciBpbWFnZSBhc3luY2hyb3Vuc2x5LlxuICAgKlxuICAgKiBwYXJhbSB7U291cmNlfSBzb3VyY2UgcmVwcmVzZW50cyBhdmF0YXIgc291cmNlXG4gICAqIG1lbWJlcm9mIEF2YXRhckNvbXBvbmVudFxuICAgKi9cbiAgX2ZldGNoQXN5bmNBdmF0YXIoc291cmNlOiBBc3luY1NvdXJjZSkge1xuICAgIHRoaXMuYXZhdGFyU2VydmljZS5mZXRjaEF2YXRhcihzb3VyY2UuZ2V0QXZhdGFyKCkpLnN1YnNjcmliZShcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICAvLyBleHRyYWN0IGF2YXRhciBpbWFnZSBmcm9tIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgIHRoaXMuc3JjID0gc291cmNlLnByb2Nlc3NSZXNwb25zZShkYXRhLCB0aGlzLnNpemUpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYG5neC1hdmF0YXI6IGVycm9yIHdoaWxlIGZldGNoaW5nICR7c291cmNlLnNvdXJjZVR5cGV9IGF2YXRhciBgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYXZhdGFyIHNvdXJjZVxuICAgKlxuICAgKiBwYXJhbSBzb3VyY2VUeXBlIGF2YXRhciBzb3VyY2UgdHlwZSBlLmcgZmFjZWJvb2ssdHdpdHRlciwgZXRjLlxuICAgKiBwYXJhbSBzb3VyY2VWYWx1ZSAgc291cmNlIHZhbHVlIGUuZyBmYWNlYm9va0lkIHZhbHVlLCBldGMuXG4gICAqL1xuICBfYWRkU291cmNlKHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSwgc291cmNlVmFsdWU6IHN0cmluZykge1xuICAgIGlmIChzb3VyY2VWYWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLl91cGRhdGVFeGlzdGluZ1NvdXJjZShzb3VyY2VUeXBlLCBzb3VyY2VWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5fc291cmNlcy5wdXNoKFxuICAgICAgICAgIHRoaXMuc291cmNlRmFjdG9yeS5uZXdJbnN0YW5jZShzb3VyY2VUeXBlLCBzb3VyY2VWYWx1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNoZWNrIHdldGhlciBhbiBhdmF0YXIgc291cmNlIGhhcyBiZWVuIGFkZGVkLiBJZiBzb1xuICAgKiB0aGUgc291cmNlIHZhbHVlIHdpbGwgYmUgdXBkYXRlZCB3aXRoIHRoZSBuZXcgdmFsdWUgcGFzc2VkIGFzXG4gICAqIHBhcmFtYXRlci5cbiAgICogSXQgcmV0dXJucyB0cnVlIGlmIHRoZSBzb3VyY2UgZXhpc3RzIGFuZCB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkLFxuICAgKiByZXR1cm5zIGZhbHNlIGlmIHRoZSBzb3VyY2Ugd2FzIG5vdCBmb3VuZFxuICAgKlxuICAgKiBwYXJhbSB7c3RyaW5nfSBzb3VyY2VUeXBlIHRoZSB0eXBlIG9mIHRoZSBzb3VyY2VcbiAgICogcGFyYW0ge3N0cmluZ30gc291cmNlVmFsdWUgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgc291cmNlXG4gICAqXG4gICAqIG1lbWJlcm9mIEF2YXRhckNvbXBvbmVudFxuICAgKi9cbiAgX3VwZGF0ZUV4aXN0aW5nU291cmNlKHNvdXJjZVR5cGU6IHN0cmluZywgc291cmNlVmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNvdXJjZUluZGV4ID0gdGhpcy5fc291cmNlcy5maW5kSW5kZXgoXG4gICAgICBzb3VyY2UgPT4gc291cmNlLnNvdXJjZVR5cGUgPT09IHNvdXJjZVR5cGUudG9VcHBlckNhc2UoKVxuICAgICk7XG4gICAgaWYgKHNvdXJjZUluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3NvdXJjZXNbc291cmNlSW5kZXhdLnNvdXJjZUlkID0gc291cmNlVmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBdmF0YXJDb21wb25lbnQgfSBmcm9tICcuL2F2YXRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlRmFjdG9yeSB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBBdmF0YXJTZXJ2aWNlIH0gZnJvbSAnLi9hdmF0YXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdmF0YXJDb25maWcgfSBmcm9tICcuL2F2YXRhci1jb25maWcnO1xuaW1wb3J0IHsgQVZBVEFSX0NPTkZJRyB9IGZyb20gJy4vYXZhdGFyLWNvbmZpZy50b2tlbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBdmF0YXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU291cmNlRmFjdG9yeSxcbiAgICBBdmF0YXJTZXJ2aWNlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBdmF0YXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChhdmF0YXJDb25maWc/OiBBdmF0YXJDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEF2YXRhck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEFWQVRBUl9DT05GSUcsIHVzZVZhbHVlOiBhdmF0YXJDb25maWcgPyBhdmF0YXJDb25maWc6e30gfV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7Ozs7O0lBR0UscUJBQW1CLFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7S0FBSztJQUsxQyxrQkFBQztDQUFBLElBQUE7Ozs7Ozs7O0lDZEMsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUTtJQUNqQixTQUFVLFNBQVM7SUFDbkIsV0FBWSxXQUFXO0lBQ3ZCLE9BQVEsT0FBTztJQUNmLFVBQVcsVUFBVTtJQUNyQixRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFRO0lBQ2pCLFVBQVcsVUFBVTtJQUNyQixPQUFRLE9BQU87Ozs7Ozs7QUNUakI7Ozs7O0FBTUE7Ozs7OztJQUdFLGtCQUFtQixRQUFnQjtRQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBRjFCLGVBQVUsR0FBaUIsWUFBWSxDQUFDLFFBQVEsQ0FB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

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = function() {
  var mediaQuery;
  if (typeof window !== "undefined" && window !== null) {
    mediaQuery = "(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)";
    if (window.devicePixelRatio > 1.25) {
      return true;
    }
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
      return true;
    }
  }
  return false;
};


/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*

TypeScript Md5
==============

Based on work by
* Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
* André Cruz: https://github.com/satazor/SparkMD5
* Raymond Hill: https://github.com/gorhill/yamd5.js

Effectively a TypeScrypt re-write of Raymond Hill JS Library

The MIT License (MIT)

Copyright (C) 2014 Raymond Hill

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.


*/
Object.defineProperty(exports, "__esModule", { value: true });
var Md5 = (function () {
    function Md5() {
        this._state = new Int32Array(4);
        this._buffer = new ArrayBuffer(68);
        this._buffer8 = new Uint8Array(this._buffer, 0, 68);
        this._buffer32 = new Uint32Array(this._buffer, 0, 17);
        this.start();
    }
    // One time hashing functions
    Md5.hashStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendStr(str)
            .end(raw);
    };
    Md5.hashAsciiStr = function (str, raw) {
        if (raw === void 0) { raw = false; }
        return this.onePassHasher
            .start()
            .appendAsciiStr(str)
            .end(raw);
    };
    Md5._hex = function (x) {
        var hc = Md5.hexChars;
        var ho = Md5.hexOut;
        var n;
        var offset;
        var j;
        var i;
        for (i = 0; i < 4; i += 1) {
            offset = i * 8;
            n = x[i];
            for (j = 0; j < 8; j += 2) {
                ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
                ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                n >>>= 4;
            }
        }
        return ho.join('');
    };
    Md5._md5cycle = function (x, k) {
        var a = x[0];
        var b = x[1];
        var c = x[2];
        var d = x[3];
        // ff()
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        // gg()
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        // hh()
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        // ii()
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    };
    Md5.prototype.start = function () {
        this._dataLength = 0;
        this._bufferLength = 0;
        this._state.set(Md5.stateIdentity);
        return this;
    };
    // Char to code point to to array conversion:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
    // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
    Md5.prototype.appendStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var code;
        var i;
        for (i = 0; i < str.length; i += 1) {
            code = str.charCodeAt(i);
            if (code < 128) {
                buf8[bufLen++] = code;
            }
            else if (code < 0x800) {
                buf8[bufLen++] = (code >>> 6) + 0xC0;
                buf8[bufLen++] = code & 0x3F | 0x80;
            }
            else if (code < 0xD800 || code > 0xDBFF) {
                buf8[bufLen++] = (code >>> 12) + 0xE0;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            else {
                code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                if (code > 0x10FFFF) {
                    throw new Error('Unicode standard supports code points up to U+10FFFF');
                }
                buf8[bufLen++] = (code >>> 18) + 0xF0;
                buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                buf8[bufLen++] = (code & 0x3F) | 0x80;
            }
            if (bufLen >= 64) {
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen -= 64;
                buf32[0] = buf32[16];
            }
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendAsciiStr = function (str) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(str.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = str.charCodeAt(j++);
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.appendByteArray = function (input) {
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var bufLen = this._bufferLength;
        var i;
        var j = 0;
        for (;;) {
            i = Math.min(input.length - j, 64 - bufLen);
            while (i--) {
                buf8[bufLen++] = input[j++];
            }
            if (bufLen < 64) {
                break;
            }
            this._dataLength += 64;
            Md5._md5cycle(this._state, buf32);
            bufLen = 0;
        }
        this._bufferLength = bufLen;
        return this;
    };
    Md5.prototype.getState = function () {
        var self = this;
        var s = self._state;
        return {
            buffer: String.fromCharCode.apply(null, self._buffer8),
            buflen: self._bufferLength,
            length: self._dataLength,
            state: [s[0], s[1], s[2], s[3]]
        };
    };
    Md5.prototype.setState = function (state) {
        var buf = state.buffer;
        var x = state.state;
        var s = this._state;
        var i;
        this._dataLength = state.length;
        this._bufferLength = state.buflen;
        s[0] = x[0];
        s[1] = x[1];
        s[2] = x[2];
        s[3] = x[3];
        for (i = 0; i < buf.length; i += 1) {
            this._buffer8[i] = buf.charCodeAt(i);
        }
    };
    Md5.prototype.end = function (raw) {
        if (raw === void 0) { raw = false; }
        var bufLen = this._bufferLength;
        var buf8 = this._buffer8;
        var buf32 = this._buffer32;
        var i = (bufLen >> 2) + 1;
        var dataBitsLen;
        this._dataLength += bufLen;
        buf8[bufLen] = 0x80;
        buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
        buf32.set(Md5.buffer32Identity.subarray(i), i);
        if (bufLen > 55) {
            Md5._md5cycle(this._state, buf32);
            buf32.set(Md5.buffer32Identity);
        }
        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        dataBitsLen = this._dataLength * 8;
        if (dataBitsLen <= 0xFFFFFFFF) {
            buf32[14] = dataBitsLen;
        }
        else {
            var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
            if (matches === null) {
                return;
            }
            var lo = parseInt(matches[2], 16);
            var hi = parseInt(matches[1], 16) || 0;
            buf32[14] = lo;
            buf32[15] = hi;
        }
        Md5._md5cycle(this._state, buf32);
        return raw ? this._state : Md5._hex(this._state);
    };
    // Private Static Variables
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    return Md5;
}());
exports.Md5 = Md5;
if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    console.error('Md5 self test failed.');
}
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmMaskDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LmMaskDirective = /** @class */ (function () {
    function LmMaskDirective(ngControl) {
        this.ngControl = ngControl;
    }
    LmMaskDirective.prototype.onModelChange = function (event) {
        this.onInputChange(event, false);
    };
    LmMaskDirective.prototype.keydownBackspace = function (event) {
        this.onInputChange(event.target.value, true);
    };
    LmMaskDirective.prototype.onInputChange = function (event, backspace) {
        var pattern = event.replace(/[()\-\ ]+/g, '');
        if (!pattern.match(/^[0-9]*$/)) {
            this.ngControl.valueAccessor.writeValue(pattern);
        }
        else {
            var newVal = event.replace(/\D/g, '');
            if (backspace && newVal.length <= 6) {
                newVal = newVal.substring(0, newVal.length - 1);
            }
            if (newVal.length === 0) {
                newVal = ' ';
            }
            else if (newVal.length <= 3) {
                newVal = newVal.replace(/^(\d{0,3})/, '($1)');
            }
            else if (newVal.length <= 6) {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
            }
            else if (newVal.length <= 10) {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
            }
            else {
                newVal = newVal.substring(0, 10);
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
            }
            this.ngControl.valueAccessor.writeValue(newVal);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('ngModelChange', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LmMaskDirective.prototype, "onModelChange", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown.backspace', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LmMaskDirective.prototype, "keydownBackspace", null);
    LmMaskDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[formControlName][lmMask]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]])
    ], LmMaskDirective);
    return LmMaskDirective;
}());

//# sourceMappingURL=lm-mask.directive.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LmStrongDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LmStrongDirective = /** @class */ (function () {
    function LmStrongDirective(ngControl) {
        this.ngControl = ngControl;
    }
    LmStrongDirective.prototype.onModelChange = function (event) {
        this.onInputChange(event);
    };
    LmStrongDirective.prototype.onInputChange = function (event) {
        if (event.includes(":company:")) {
            var newVal = event.replace(':company:', ':<strong>company</strong>:');
            this.ngControl.valueAccessor.writeValue(newVal);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('ngModelChange', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LmStrongDirective.prototype, "onModelChange", null);
    LmStrongDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[formControlName][lmStrong]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]])
    ], LmStrongDirective);
    return LmStrongDirective;
}());

//# sourceMappingURL=lm-strong.directive.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* unused harmony export NEW_CONFIG */
/* unused harmony export INITIAL_CONFIG */
/* unused harmony export initialConfig */
/* unused harmony export MaskDirective */
/* unused harmony export MaskService */
/* unused harmony export _configFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxMaskIonicModule; });
/* unused harmony export MaskPipe */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var config = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('config');
/** @type {?} */
var NEW_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NEW_CONFIG');
/** @type {?} */
var INITIAL_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('INITIAL_CONFIG');
/** @type {?} */
var initialConfig = {
    sufix: '',
    prefix: '',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    dropSpecialCharacters: true,
    specialCharacters: [
        '/',
        '(',
        ')',
        '.',
        ':',
        '-',
        ' ',
        '+',
        ',',
        '@',
        '[',
        ']',
        '"',
        "'"
    ],
    patterns: {
        '0': {
            pattern: new RegExp('\\d')
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true
        },
        A: {
            pattern: new RegExp('[a-zA-Z0-9]')
        },
        S: {
            pattern: new RegExp('[a-zA-Z]')
        },
        d: {
            pattern: new RegExp('\\d')
        },
        m: {
            pattern: new RegExp('\\d')
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskApplierService = /** @class */ (function () {
    function MaskApplierService(_config) {
        this._config = _config;
        this.maskExpression = '';
        this._shift = new Set();
        this.maskSpecialCharacters = (/** @type {?} */ (this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = (/** @type {?} */ (this._config)).specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.sufix = this._config.sufix;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    MaskApplierService.prototype.applyMaskWithPattern = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    function (inputValue, maskAndPattern) {
        var _a = Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__read"])(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskApplierService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        if (inputValue === undefined ||
            inputValue === null ||
            maskExpression === undefined) {
            return '';
        }
        /** @type {?} */
        var cursor = 0;
        /** @type {?} */
        var result = "";
        /** @type {?} */
        var multi = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        /** @type {?} */
        var inputArray = inputValue.toString().split('');
        // tslint:disable-next-line
        for (var i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
            if (cursor === maskExpression.length) {
                break;
            }
            if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) &&
                maskExpression[cursor + 1] === '?') {
                result += inputSymbol;
                cursor += 2;
            }
            else if (maskExpression[cursor + 1] === '*' &&
                multi &&
                this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
                multi = false;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) &&
                maskExpression[cursor + 1] === '*') {
                result += inputSymbol;
                multi = true;
            }
            else if (maskExpression[cursor + 1] === '?' &&
                this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
            }
            else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                if (maskExpression[cursor] === 'd') {
                    if (Number(inputSymbol) > 3) {
                        result += 0;
                        cursor += 1;
                        /** @type {?} */
                        var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                            ? inputArray.length
                            : cursor;
                        this._shift.add(shiftStep + this.prefix.length || 0);
                        i--;
                        continue;
                    }
                }
                if (maskExpression[cursor - 1] === 'd') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                        continue;
                    }
                }
                if (maskExpression[cursor] === 'm') {
                    if (Number(inputSymbol) > 1) {
                        result += 0;
                        cursor += 1;
                        /** @type {?} */
                        var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                            ? inputArray.length
                            : cursor;
                        this._shift.add(shiftStep + this.prefix.length || 0);
                        i--;
                        continue;
                    }
                }
                if (maskExpression[cursor - 1] === 'm') {
                    if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                        continue;
                    }
                }
                result += inputSymbol;
                cursor++;
            }
            else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;
                /** @type {?} */
                var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                    ? inputArray.length
                    : cursor;
                this._shift.add(shiftStep + this.prefix.length || 0);
                i--;
            }
            else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 &&
                this.maskAvailablePatterns[maskExpression[cursor]] &&
                this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                cursor++;
                i--;
            }
            else if (this.maskExpression[cursor + 1] === '*' &&
                this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2]) {
                cursor += 3;
                result += inputSymbol;
            }
        }
        if (result.length + 1 === maskExpression.length &&
            this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        /** @type {?} */
        var shift = 1;
        /** @type {?} */
        var newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        cb(this._shift.has(position) ? shift : 0);
        /** @type {?} */
        var res = "" + this.prefix + result;
        res =
            this.sufix && cursor === maskExpression.length
                ? "" + this.prefix + result + this.sufix
                : "" + this.prefix + result;
        return res;
    };
    /**
     * @param {?} inputSymbol
     * @return {?}
     */
    MaskApplierService.prototype._findSpecialChar = /**
     * @param {?} inputSymbol
     * @return {?}
     */
    function (inputSymbol) {
        /** @type {?} */
        var symbol = this.maskSpecialCharacters.find(function (val) { return val === inputSymbol; });
        return symbol;
    };
    /**
     * @private
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    MaskApplierService.prototype._checkSymbolMask = /**
     * @private
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    function (inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern
            ? this.customPattern
            : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    };
    MaskApplierService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] }
    ];
    /** @nocollapse */
    MaskApplierService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [config,] }] }
    ]; };
    return MaskApplierService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskService = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__extends"])(MaskService, _super);
    function MaskService(document, _config, _elementRef, _renderer, _ngControl) {
        var _this = _super.call(this, _config) || this;
        _this.document = document;
        _this._config = _config;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this._ngControl = _ngControl;
        _this.maskExpression = '';
        _this.isNumberValue = false;
        _this.showMaskTyped = false;
        _this.maskIsShown = '';
        _this.onTouch = function () { };
        _this.setFormElement(_elementRef.nativeElement);
        setTimeout(function () {
            if (_this._formElement.localName !== 'input') {
                /** @type {?} */
                var inputEl = _this._elementRef.nativeElement.querySelector('input');
                if (inputEl != null) {
                    _this.setFormElement(inputEl);
                }
                else {
                    console.warn('mask-service: Could not find Input Element.  Please make sure one is present.');
                }
            }
            _this._ngControl.valueChanges.subscribe(function (value) {
                _this._onControlValueChange(value);
            });
        });
        return _this;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    MaskService.prototype.setFormElement = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this._formElement = el;
    };
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyMask = /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (inputValue, maskExpression, position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        this.maskIsShown = this.showMaskTyped
            ? this.maskExpression.replace(/[0-9]/g, '_')
            : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        /** @type {?} */
        var result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
        this.unmaskedValue = this.getUnmaskedValue(result);
        return this._applyMaskResult(result);
    };
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    MaskService.prototype.applyValueChanges = /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    function (position, cb) {
        if (position === void 0) { position = 0; }
        if (cb === void 0) { cb = function () { }; }
        /** @type {?} */
        var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    };
    /**
     * @return {?}
     */
    MaskService.prototype.showMaskInInput = /**
     * @return {?}
     */
    function () {
        if (this.showMaskTyped) {
            this.maskIsShown = this.maskExpression.replace(/[0-9]/g, '_');
        }
    };
    /**
     * @return {?}
     */
    MaskService.prototype.clearIfNotMatchFn = /**
     * @return {?}
     */
    function () {
        console.log('clear-if-not-matched');
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.setValue('');
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.unmaskedValue = this.getUnmaskedValue(value);
        this._ngControl.control.setValue(value);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype.setFormElementProperty = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        if (this._formElement) {
            this._renderer.setProperty(this._formElement, name, value);
        }
    };
    /**
     * @param {?} result
     * @return {?}
     */
    MaskService.prototype.getUnmaskedValue = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        /** @type {?} */
        var resultNoSuffixOrPrefix = this._removeSufix(this._removePrefix(result));
        /** @type {?} */
        var changeValue = resultNoSuffixOrPrefix;
        if (Array.isArray(this.dropSpecialCharacters)) {
            changeValue = this._removeMask(resultNoSuffixOrPrefix, this.dropSpecialCharacters);
        }
        else if (this.dropSpecialCharacters) {
            changeValue = this._removeMask(resultNoSuffixOrPrefix, this.maskSpecialCharacters);
            changeValue = this.isNumberValue ? Number(changeValue) : changeValue;
        }
        return changeValue;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._removeMask = /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removePrefix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.prefix) {
            return value;
        }
        return value ? value.replace(this.prefix, '') : value;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._removeSufix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.sufix) {
            return value;
        }
        return value ? value.replace(this.sufix, '') : value;
    };
    /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    MaskService.prototype._regExpForRemove = /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    function (specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
    };
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    MaskService.prototype._applyMaskResult = /**
     * @private
     * @param {?} result
     * @return {?}
     */
    function (result) {
        if (!this.showMaskTyped) {
            return result;
        }
        /** @type {?} */
        var resLen = result.length;
        /** @type {?} */
        var prefNmask = this.prefix + this.maskIsShown;
        /** @type {?} */
        var ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MaskService.prototype._onControlValueChange = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /*
              Because we are no longer working with the ControlValueAccessor (since it doesn't play nice with Ionic).
              We need logic here to track changes made programmatically to the form value.  Specifically changes
              done OUTSIDE of the mask. Since changes done inside the mask may also fire off this method
              we need to do some jiu jitsu to ensure we are ignoring those changes.
            */
        /** @type {?} */
        var newValue = this.getUnmaskedValue(value);
        if (this.unmaskedValue === newValue) {
            return;
        }
        /** @type {?} */
        var unmaskedSubstring = null;
        // This method (value change) fires off before a Keydown or Input event, so we need to subtract
        // the latest change and compare to our previous (known) value.
        if (this.unmaskedValue != null) {
            /** @type {?} */
            var v = this.unmaskedValue.toString();
            unmaskedSubstring = v.substring(0, v.length - 1);
        }
        if (newValue !== unmaskedSubstring) {
            /** @type {?} */
            var nv = newValue != null ? newValue.toString() : null;
            /** @type {?} */
            var v = this.applyMask(nv, this.maskExpression);
            this.setValue(v);
        }
    };
    MaskService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] }
    ];
    /** @nocollapse */
    MaskService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DOCUMENT */],] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [config,] }] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgControl"] }
    ]; };
    return MaskService;
}(MaskApplierService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskDirective = /** @class */ (function () {
    function MaskDirective(document, _maskService, _ngControl) {
        this.document = document;
        this._maskService = _maskService;
        this._ngControl = _ngControl;
        this._position = null;
        // tslint:disable-next-line
        this.onTouch = function () { };
    }
    Object.defineProperty(MaskDirective.prototype, "maskExpression", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskValue = value || '';
            if (!this._maskValue) {
                return;
            }
            this._inputValue = this._ngControl.control.value;
            this._initializeMask();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value ||
                !Array.isArray(value) ||
                (Array.isArray(value) && !value.length)) {
                return;
            }
            this._maskService.maskSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "patterns", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.maskAvailablePatterns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "prefix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "sufix", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.sufix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.dropSpecialCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showMaskTyped", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                return;
            }
            this._maskService.showMaskTyped = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "showTemplate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.showTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maskService.clearIfNotMatch = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        this._inputValue = el.value;
        if (!this._maskValue) {
            return;
        }
        /** @type {?} */
        var position = ((/** @type {?} */ (el.selectionStart))) === 1
            ? ((/** @type {?} */ (el.selectionStart))) + this._maskService.prefix.length
            : ((/** @type {?} */ (el.selectionStart)));
        /** @type {?} */
        var caretShift = 0;
        this._maskService.applyValueChanges(position, function (shift) { return (caretShift = shift); });
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd =
            this._position !== null
                ? this._position
                : position +
                    // tslint:disable-next-line
                    (((/** @type {?} */ (e))).inputType === 'deleteContentBackward' ? 0 : caretShift);
        this._position = null;
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        if (el !== null &&
            el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            ((/** @type {?} */ (e))).keyCode !== 38) {
            return;
        }
        if (this._maskService.showMaskTyped) {
            this._maskService.maskIsShown = this._maskService.maskExpression.replace(/[0-9]/g, '_');
        }
        el.value =
            !el.value || el.value === this._maskService.prefix
                ? this._maskService.prefix + this._maskService.maskIsShown
                : el.value;
        /** fix of cursor position with prefix when mouse click occur */
        if ((((/** @type {?} */ (el.selectionStart))) || ((/** @type {?} */ (el.selectionEnd)))) <=
            this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MaskDirective.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var el = (/** @type {?} */ (e.target));
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8) {
            if (((/** @type {?} */ (el.selectionStart))) <= this._maskService.prefix.length &&
                ((/** @type {?} */ (el.selectionEnd))) <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            this.onFocus(e);
            if (e.keyCode === 8 &&
                el.selectionStart === 0 &&
                el.selectionEnd === el.value.length) {
                el.value = this._maskService.prefix;
                this._position = this._maskService.prefix
                    ? this._maskService.prefix.length
                    : 1;
                this.onInput(e);
            }
        }
    };
    /**
     * @return {?}
     */
    MaskDirective.prototype.onPaste = /**
     * @return {?}
     */
    function () {
        this._position = Number.MAX_SAFE_INTEGER;
    };
    /** It disables the input element */
    /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    MaskDirective.prototype.setDisabledState = /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._maskService.setFormElementProperty('disabled', isDisabled);
    };
    /**
     * @private
     * @param {?} maskExp
     * @return {?}
     */
    MaskDirective.prototype._repeatPatternSymbols = /**
     * @private
     * @param {?} maskExp
     * @return {?}
     */
    function (maskExp) {
        var _this = this;
        return ((maskExp.match(/{[0-9]+}/) &&
            maskExp
                .split('')
                .reduce(function (accum, currval, index) {
                _this._start = currval === '{' ? index : _this._start;
                if (currval !== '}') {
                    return _this._maskService._findSpecialChar(currval)
                        ? accum + currval
                        : accum;
                }
                _this._end = index;
                /** @type {?} */
                var repeatNumber = Number(maskExp.slice(_this._start + 1, _this._end));
                /** @type {?} */
                var repaceWith = new Array(repeatNumber + 1).join(maskExp[_this._start - 1]);
                return accum + repaceWith;
            }, '')) ||
            maskExp);
    };
    /**
     * @private
     * @return {?}
     */
    MaskDirective.prototype._initializeMask = /**
     * @private
     * @return {?}
     */
    function () {
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
        /** @type {?} */
        var m = this._maskService.applyMask(this._inputValue, this._maskService.maskExpression);
        this._maskService.setValue(m);
    };
    MaskDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[mask]',
                    providers: [MaskService]
                },] }
    ];
    /** @nocollapse */
    MaskDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DOCUMENT */],] }] },
        { type: MaskService },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NgControl"] }
    ]; };
    MaskDirective.propDecorators = {
        maskExpression: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mask',] }],
        specialCharacters: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        patterns: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        prefix: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        sufix: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        dropSpecialCharacters: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        showMaskTyped: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        showTemplate: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        clearIfNotMatch: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] }],
        onInput: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['input', ['$event'],] }],
        onBlur: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] }],
        onFocus: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] }],
        onKeyDown: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] }],
        onPaste: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['paste',] }]
    };
    return MaskDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MaskPipe = /** @class */ (function () {
    function MaskPipe(_maskService) {
        this._maskService = _maskService;
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    MaskPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} mask
     * @return {?}
     */
    function (value, mask) {
        if (!value) {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask("" + value, mask);
        }
        return this._maskService.applyMaskWithPattern("" + value, mask);
    };
    MaskPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'mask',
                    pure: true
                },] }
    ];
    /** @nocollapse */
    MaskPipe.ctorParameters = function () { return [
        { type: MaskApplierService }
    ]; };
    return MaskPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxMaskIonicModule = /** @class */ (function () {
    function NgxMaskIonicModule() {
    }
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskIonicModule.forRoot = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskIonicModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG]
                }
            ]
        };
    };
    /**
     * @param {?=} configValue
     * @return {?}
     */
    NgxMaskIonicModule.forChild = /**
     * @param {?=} configValue
     * @return {?}
     */
    function (configValue) {
        return {
            ngModule: NgxMaskIonicModule
        };
    };
    NgxMaskIonicModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [MaskApplierService],
                    exports: [MaskDirective, MaskPipe],
                    declarations: [MaskDirective, MaskPipe]
                },] }
    ];
    return NgxMaskIonicModule;
}());
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
function _configFactory(initConfig, configValue) {
    return typeof configValue === 'function'
        ? configValue()
        : Object(__WEBPACK_IMPORTED_MODULE_1_tslib__["__assign"])({}, initConfig, configValue);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc2staW9uaWMuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXNrLWlvbmljL2xpYi9jb25maWcudHMiLCJuZzovL25neC1tYXNrLWlvbmljL2xpYi9tYXNrLWFwcGxpZXIuc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2staW9uaWMvbGliL21hc2suc2VydmljZS50cyIsIm5nOi8vbmd4LW1hc2staW9uaWMvbGliL21hc2suZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtbWFzay1pb25pYy9saWIvbWFzay5waXBlLnRzIiwibmc6Ly9uZ3gtbWFzay1pb25pYy9saWIvbmd4LW1hc2staW9uaWMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xyXG4gIHN1Zml4OiBzdHJpbmc7XHJcbiAgcHJlZml4OiBzdHJpbmc7XHJcbiAgY2xlYXJJZk5vdE1hdGNoOiBib29sZWFuO1xyXG4gIHNob3dUZW1wbGF0ZTogYm9vbGVhbjtcclxuICBzaG93TWFza1R5cGVkOiBib29sZWFuO1xyXG4gIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogYm9vbGVhbiB8IHN0cmluZ1tdO1xyXG4gIHNwZWNpYWxDaGFyYWN0ZXJzOiBzdHJpbmdbXTtcclxuICBwYXR0ZXJuczoge1xyXG4gICAgW2NoYXJhY3Rlcjogc3RyaW5nXToge1xyXG4gICAgICBwYXR0ZXJuOiBSZWdFeHA7XHJcbiAgICAgIG9wdGlvbmFsPzogYm9vbGVhbjtcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgb3B0aW9uc0NvbmZpZyA9IFBhcnRpYWw8SUNvbmZpZz47XHJcbmV4cG9ydCBjb25zdCBjb25maWc6IEluamVjdGlvblRva2VuPHN0cmluZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2NvbmZpZycpO1xyXG5leHBvcnQgY29uc3QgTkVXX0NPTkZJRzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcclxuICAnTkVXX0NPTkZJRydcclxuKTtcclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfQ09ORklHOiBJbmplY3Rpb25Ub2tlbjxJQ29uZmlnPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcclxuICAnSU5JVElBTF9DT05GSUcnXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbmZpZzogSUNvbmZpZyA9IHtcclxuICBzdWZpeDogJycsXHJcbiAgcHJlZml4OiAnJyxcclxuICBjbGVhcklmTm90TWF0Y2g6IGZhbHNlLFxyXG4gIHNob3dUZW1wbGF0ZTogZmFsc2UsXHJcbiAgc2hvd01hc2tUeXBlZDogZmFsc2UsXHJcbiAgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxyXG4gIHNwZWNpYWxDaGFyYWN0ZXJzOiBbXHJcbiAgICAnLycsXHJcbiAgICAnKCcsXHJcbiAgICAnKScsXHJcbiAgICAnLicsXHJcbiAgICAnOicsXHJcbiAgICAnLScsXHJcbiAgICAnICcsXHJcbiAgICAnKycsXHJcbiAgICAnLCcsXHJcbiAgICAnQCcsXHJcbiAgICAnWycsXHJcbiAgICAnXScsXHJcbiAgICAnXCInLFxyXG4gICAgXCInXCJcclxuICBdLFxyXG4gIHBhdHRlcm5zOiB7XHJcbiAgICAnMCc6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKVxyXG4gICAgfSxcclxuICAgICc5Jzoge1xyXG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxyXG4gICAgICBvcHRpb25hbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIEE6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnW2EtekEtWjAtOV0nKVxyXG4gICAgfSxcclxuICAgIFM6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnW2EtekEtWl0nKVxyXG4gICAgfSxcclxuICAgIGQ6IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKVxyXG4gICAgfSxcclxuICAgIG06IHtcclxuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbmZpZywgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hc2tBcHBsaWVyU2VydmljZSB7XHJcbiAgcHVibGljIGRyb3BTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ107XHJcbiAgcHVibGljIHNob3dUZW1wbGF0ZTogSUNvbmZpZ1snc2hvd1RlbXBsYXRlJ107XHJcbiAgcHVibGljIGNsZWFySWZOb3RNYXRjaDogSUNvbmZpZ1snY2xlYXJJZk5vdE1hdGNoJ107XHJcbiAgcHVibGljIG1hc2tFeHByZXNzaW9uID0gJyc7XHJcbiAgcHVibGljIG1hc2tTcGVjaWFsQ2hhcmFjdGVyczogSUNvbmZpZ1snc3BlY2lhbENoYXJhY3RlcnMnXTtcclxuICBwdWJsaWMgbWFza0F2YWlsYWJsZVBhdHRlcm5zOiBJQ29uZmlnWydwYXR0ZXJucyddO1xyXG4gIHB1YmxpYyBwcmVmaXg6IElDb25maWdbJ3ByZWZpeCddO1xyXG4gIHB1YmxpYyBzdWZpeDogSUNvbmZpZ1snc3VmaXgnXTtcclxuICBwdWJsaWMgY3VzdG9tUGF0dGVybjogSUNvbmZpZ1sncGF0dGVybnMnXTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hpZnQ6IFNldDxudW1iZXI+O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdChjb25maWcpIHByb3RlY3RlZCBfY29uZmlnOiBJQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9zaGlmdCA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5fY29uZmlnIS5zcGVjaWFsQ2hhcmFjdGVycztcclxuICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdGhpcy5fY29uZmlnLnBhdHRlcm5zO1xyXG4gICAgdGhpcy5jbGVhcklmTm90TWF0Y2ggPSB0aGlzLl9jb25maWcuY2xlYXJJZk5vdE1hdGNoO1xyXG4gICAgdGhpcy5kcm9wU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWcuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzO1xyXG4gICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB0aGlzLl9jb25maWchLnNwZWNpYWxDaGFyYWN0ZXJzO1xyXG4gICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnMgPSB0aGlzLl9jb25maWcucGF0dGVybnM7XHJcbiAgICB0aGlzLnByZWZpeCA9IHRoaXMuX2NvbmZpZy5wcmVmaXg7XHJcbiAgICB0aGlzLnN1Zml4ID0gdGhpcy5fY29uZmlnLnN1Zml4O1xyXG4gIH1cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHVibGljIGFwcGx5TWFza1dpdGhQYXR0ZXJuKFxyXG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nLFxyXG4gICAgbWFza0FuZFBhdHRlcm46IFtzdHJpbmcsIElDb25maWdbJ3BhdHRlcm5zJ11dXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IFttYXNrLCBjdXN0b21QYXR0ZXJuXSA9IG1hc2tBbmRQYXR0ZXJuO1xyXG4gICAgdGhpcy5jdXN0b21QYXR0ZXJuID0gY3VzdG9tUGF0dGVybjtcclxuICAgIHJldHVybiB0aGlzLmFwcGx5TWFzayhpbnB1dFZhbHVlLCBtYXNrKTtcclxuICB9XHJcbiAgcHVibGljIGFwcGx5TWFzayhcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcclxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmIChcclxuICAgICAgaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGlucHV0VmFsdWUgPT09IG51bGwgfHxcclxuICAgICAgbWFza0V4cHJlc3Npb24gPT09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3Vyc29yID0gMDtcclxuICAgIGxldCByZXN1bHQgPSBgYDtcclxuICAgIGxldCBtdWx0aSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChpbnB1dFZhbHVlLnNsaWNlKDAsIHRoaXMucHJlZml4Lmxlbmd0aCkgPT09IHRoaXMucHJlZml4KSB7XHJcbiAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKHRoaXMucHJlZml4Lmxlbmd0aCwgaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlucHV0QXJyYXk6IHN0cmluZ1tdID0gaW5wdXRWYWx1ZS50b1N0cmluZygpLnNwbGl0KCcnKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBpOiBudW1iZXIgPSAwLCBpbnB1dFN5bWJvbDogc3RyaW5nID0gaW5wdXRBcnJheVswXTtcclxuICAgICAgaSA8IGlucHV0QXJyYXkubGVuZ3RoO1xyXG4gICAgICBpKyssIGlucHV0U3ltYm9sID0gaW5wdXRBcnJheVtpXVxyXG4gICAgKSB7XHJcbiAgICAgIGlmIChjdXJzb3IgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLl9jaGVja1N5bWJvbE1hc2soaW5wdXRTeW1ib2wsIG1hc2tFeHByZXNzaW9uW2N1cnNvcl0pICYmXHJcbiAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09ICc/J1xyXG4gICAgICApIHtcclxuICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgICAgY3Vyc29yICs9IDI7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgbWFza0V4cHJlc3Npb25bY3Vyc29yICsgMV0gPT09ICcqJyAmJlxyXG4gICAgICAgIG11bHRpICYmXHJcbiAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIGN1cnNvciArPSAzO1xyXG4gICAgICAgIG11bHRpID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3JdKSAmJlxyXG4gICAgICAgIG1hc2tFeHByZXNzaW9uW2N1cnNvciArIDFdID09PSAnKidcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIG11bHRpID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gJz8nICYmXHJcbiAgICAgICAgdGhpcy5fY2hlY2tTeW1ib2xNYXNrKGlucHV0U3ltYm9sLCBtYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIGN1cnNvciArPSAzO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbCwgbWFza0V4cHJlc3Npb25bY3Vyc29yXSkpIHtcclxuICAgICAgICBpZiAobWFza0V4cHJlc3Npb25bY3Vyc29yXSA9PT0gJ2QnKSB7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0U3ltYm9sKSA+IDMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IDA7XHJcbiAgICAgICAgICAgIGN1cnNvciArPSAxO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlmdFN0ZXA6IG51bWJlciA9IC9cXCp8XFw/L2cudGVzdChcclxuICAgICAgICAgICAgICBtYXNrRXhwcmVzc2lvbi5zbGljZSgwLCBjdXJzb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgOiBjdXJzb3I7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoaWZ0LmFkZChzaGlmdFN0ZXAgKyB0aGlzLnByZWZpeC5sZW5ndGggfHwgMCk7XHJcbiAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3IgLSAxXSA9PT0gJ2QnKSB7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKGlucHV0VmFsdWUuc2xpY2UoY3Vyc29yIC0gMSwgY3Vyc29yICsgMSkpID4gMzEpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXNrRXhwcmVzc2lvbltjdXJzb3JdID09PSAnbScpIHtcclxuICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRTeW1ib2wpID4gMSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gMDtcclxuICAgICAgICAgICAgY3Vyc29yICs9IDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KFxyXG4gICAgICAgICAgICAgIG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgID8gaW5wdXRBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICAgICAgdGhpcy5fc2hpZnQuYWRkKHNoaWZ0U3RlcCArIHRoaXMucHJlZml4Lmxlbmd0aCB8fCAwKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hc2tFeHByZXNzaW9uW2N1cnNvciAtIDFdID09PSAnbScpIHtcclxuICAgICAgICAgIGlmIChOdW1iZXIoaW5wdXRWYWx1ZS5zbGljZShjdXJzb3IgLSAxLCBjdXJzb3IgKyAxKSkgPiAxMikge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0U3ltYm9sO1xyXG4gICAgICAgIGN1cnNvcisrO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzLmluZGV4T2YobWFza0V4cHJlc3Npb25bY3Vyc29yXSkgIT09IC0xXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvbltjdXJzb3JdO1xyXG4gICAgICAgIGN1cnNvcisrO1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0U3RlcDogbnVtYmVyID0gL1xcKnxcXD8vZy50ZXN0KG1hc2tFeHByZXNzaW9uLnNsaWNlKDAsIGN1cnNvcikpXHJcbiAgICAgICAgICA/IGlucHV0QXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICA6IGN1cnNvcjtcclxuICAgICAgICB0aGlzLl9zaGlmdC5hZGQoc2hpZnRTdGVwICsgdGhpcy5wcmVmaXgubGVuZ3RoIHx8IDApO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycy5pbmRleE9mKGlucHV0U3ltYm9sKSA+IC0xICYmXHJcbiAgICAgICAgdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnNbbWFza0V4cHJlc3Npb25bY3Vyc29yXV0gJiZcclxuICAgICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrRXhwcmVzc2lvbltjdXJzb3JdXS5vcHRpb25hbFxyXG4gICAgICApIHtcclxuICAgICAgICBjdXJzb3IrKztcclxuICAgICAgICBpLS07XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5tYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAxXSA9PT0gJyonICYmXHJcbiAgICAgICAgdGhpcy5fZmluZFNwZWNpYWxDaGFyKHRoaXMubWFza0V4cHJlc3Npb25bY3Vyc29yICsgMl0pICYmXHJcbiAgICAgICAgdGhpcy5fZmluZFNwZWNpYWxDaGFyKGlucHV0U3ltYm9sKSA9PT0gdGhpcy5tYXNrRXhwcmVzc2lvbltjdXJzb3IgKyAyXVxyXG4gICAgICApIHtcclxuICAgICAgICBjdXJzb3IgKz0gMztcclxuICAgICAgICByZXN1bHQgKz0gaW5wdXRTeW1ib2w7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHJlc3VsdC5sZW5ndGggKyAxID09PSBtYXNrRXhwcmVzc2lvbi5sZW5ndGggJiZcclxuICAgICAgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuaW5kZXhPZihcclxuICAgICAgICBtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXVxyXG4gICAgICApICE9PSAtMVxyXG4gICAgKSB7XHJcbiAgICAgIHJlc3VsdCArPSBtYXNrRXhwcmVzc2lvblttYXNrRXhwcmVzc2lvbi5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2hpZnQgPSAxO1xyXG4gICAgbGV0IG5ld1Bvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvbiArIDE7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMuX3NoaWZ0LmhhcyhuZXdQb3NpdGlvbikpIHtcclxuICAgICAgc2hpZnQrKztcclxuICAgICAgbmV3UG9zaXRpb24rKztcclxuICAgIH1cclxuXHJcbiAgICBjYih0aGlzLl9zaGlmdC5oYXMocG9zaXRpb24pID8gc2hpZnQgOiAwKTtcclxuICAgIGxldCByZXMgPSBgJHt0aGlzLnByZWZpeH0ke3Jlc3VsdH1gO1xyXG4gICAgcmVzID1cclxuICAgICAgdGhpcy5zdWZpeCAmJiBjdXJzb3IgPT09IG1hc2tFeHByZXNzaW9uLmxlbmd0aFxyXG4gICAgICAgID8gYCR7dGhpcy5wcmVmaXh9JHtyZXN1bHR9JHt0aGlzLnN1Zml4fWBcclxuICAgICAgICA6IGAke3RoaXMucHJlZml4fSR7cmVzdWx0fWA7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuICBwdWJsaWMgX2ZpbmRTcGVjaWFsQ2hhcihpbnB1dFN5bWJvbDogc3RyaW5nKTogdW5kZWZpbmVkIHwgc3RyaW5nIHtcclxuICAgIGNvbnN0IHN5bWJvbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMuZmluZChcclxuICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgPT09IGlucHV0U3ltYm9sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHN5bWJvbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NoZWNrU3ltYm9sTWFzayhpbnB1dFN5bWJvbDogc3RyaW5nLCBtYXNrU3ltYm9sOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdGhpcy5jdXN0b21QYXR0ZXJuXHJcbiAgICAgID8gdGhpcy5jdXN0b21QYXR0ZXJuXHJcbiAgICAgIDogdGhpcy5tYXNrQXZhaWxhYmxlUGF0dGVybnM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXSAmJlxyXG4gICAgICB0aGlzLm1hc2tBdmFpbGFibGVQYXR0ZXJuc1ttYXNrU3ltYm9sXS5wYXR0ZXJuICYmXHJcbiAgICAgIHRoaXMubWFza0F2YWlsYWJsZVBhdHRlcm5zW21hc2tTeW1ib2xdLnBhdHRlcm4udGVzdChpbnB1dFN5bWJvbClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGNvbmZpZywgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXNrQXBwbGllclNlcnZpY2UgfSBmcm9tICcuL21hc2stYXBwbGllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFza1NlcnZpY2UgZXh0ZW5kcyBNYXNrQXBwbGllclNlcnZpY2Uge1xyXG4gIHB1YmxpYyBtYXNrRXhwcmVzc2lvbiA9ICcnO1xyXG4gIHB1YmxpYyBpc051bWJlclZhbHVlID0gZmFsc2U7XHJcbiAgcHVibGljIHNob3dNYXNrVHlwZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbWFza0lzU2hvd24gPSAnJztcclxuICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHVubWFza2VkVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcclxuICBwdWJsaWMgb25Ub3VjaCA9ICgpID0+IHt9O1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgQEluamVjdChjb25maWcpIHByb3RlY3RlZCBfY29uZmlnOiBJQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9uZ0NvbnRyb2w6IE5nQ29udHJvbFxyXG4gICkge1xyXG4gICAgc3VwZXIoX2NvbmZpZyk7XHJcbiAgICB0aGlzLnNldEZvcm1FbGVtZW50KF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZm9ybUVsZW1lbnQubG9jYWxOYW1lICE9PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgIGlmIChpbnB1dEVsICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuc2V0Rm9ybUVsZW1lbnQoaW5wdXRFbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgJ21hc2stc2VydmljZTogQ291bGQgbm90IGZpbmQgSW5wdXQgRWxlbWVudC4gIFBsZWFzZSBtYWtlIHN1cmUgb25lIGlzIHByZXNlbnQuJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fb25Db250cm9sVmFsdWVDaGFuZ2UodmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvcm1FbGVtZW50KGVsOiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFwcGx5TWFzayhcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcclxuICAgIG1hc2tFeHByZXNzaW9uOiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcclxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHRoaXMubWFza0lzU2hvd24gPSB0aGlzLnNob3dNYXNrVHlwZWRcclxuICAgICAgPyB0aGlzLm1hc2tFeHByZXNzaW9uLnJlcGxhY2UoL1swLTldL2csICdfJylcclxuICAgICAgOiAnJztcclxuICAgIGlmICghaW5wdXRWYWx1ZSAmJiB0aGlzLnNob3dNYXNrVHlwZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlZml4ICsgdGhpcy5tYXNrSXNTaG93bjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBzdXBlci5hcHBseU1hc2soaW5wdXRWYWx1ZSwgbWFza0V4cHJlc3Npb24sIHBvc2l0aW9uLCBjYik7XHJcbiAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB0aGlzLmdldFVubWFza2VkVmFsdWUocmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYXBwbHlNYXNrUmVzdWx0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwbHlWYWx1ZUNoYW5nZXMoXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMCxcclxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYXNrZWRJbnB1dDogc3RyaW5nIHwgbnVtYmVyID0gdGhpcy5hcHBseU1hc2soXHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLFxyXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgY2JcclxuICAgICk7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC52YWx1ZSA9IG1hc2tlZElucHV0O1xyXG4gICAgaWYgKHRoaXMuX2Zvcm1FbGVtZW50ID09PSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGVhcklmTm90TWF0Y2hGbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dNYXNrSW5JbnB1dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNob3dNYXNrVHlwZWQpIHtcclxuICAgICAgdGhpcy5tYXNrSXNTaG93biA9IHRoaXMubWFza0V4cHJlc3Npb24ucmVwbGFjZSgvWzAtOV0vZywgJ18nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcklmTm90TWF0Y2hGbigpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGVhci1pZi1ub3QtbWF0Y2hlZCcpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNsZWFySWZOb3RNYXRjaCA9PT0gdHJ1ZSAmJlxyXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLmxlbmd0aCAhPT0gdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUubGVuZ3RoXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSgnJyk7XHJcbiAgICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMuX2Zvcm1FbGVtZW50LnZhbHVlLCB0aGlzLm1hc2tFeHByZXNzaW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB0aGlzLmdldFVubWFza2VkVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5fbmdDb250cm9sLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxuICBwdWJsaWMgc2V0Rm9ybUVsZW1lbnRQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fZm9ybUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZm9ybUVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVbm1hc2tlZFZhbHVlKHJlc3VsdDogc3RyaW5nKTogc3RyaW5nIHwgbnVtYmVyIHtcclxuICAgIGNvbnN0IHJlc3VsdE5vU3VmZml4T3JQcmVmaXggPSB0aGlzLl9yZW1vdmVTdWZpeChcclxuICAgICAgdGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdClcclxuICAgICk7XHJcbiAgICBsZXQgY2hhbmdlVmFsdWU6IHN0cmluZyB8IG51bWJlciA9IHJlc3VsdE5vU3VmZml4T3JQcmVmaXg7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kcm9wU3BlY2lhbENoYXJhY3RlcnMpKSB7XHJcbiAgICAgIGNoYW5nZVZhbHVlID0gdGhpcy5fcmVtb3ZlTWFzayhcclxuICAgICAgICByZXN1bHROb1N1ZmZpeE9yUHJlZml4LFxyXG4gICAgICAgIHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKSB7XHJcbiAgICAgIGNoYW5nZVZhbHVlID0gdGhpcy5fcmVtb3ZlTWFzayhcclxuICAgICAgICByZXN1bHROb1N1ZmZpeE9yUHJlZml4LFxyXG4gICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzXHJcbiAgICAgICk7XHJcbiAgICAgIGNoYW5nZVZhbHVlID0gdGhpcy5pc051bWJlclZhbHVlID8gTnVtYmVyKGNoYW5nZVZhbHVlKSA6IGNoYW5nZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaGFuZ2VWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlbW92ZU1hc2soXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgc3BlY2lhbENoYXJhY3RlcnNGb3JSZW1vdmU6IHN0cmluZ1tdXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICA/IHZhbHVlLnJlcGxhY2UodGhpcy5fcmVnRXhwRm9yUmVtb3ZlKHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlKSwgJycpXHJcbiAgICAgIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW1vdmVQcmVmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMucHJlZml4KSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVtb3ZlU3VmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuc3VmaXgpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUucmVwbGFjZSh0aGlzLnN1Zml4LCAnJykgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlZ0V4cEZvclJlbW92ZShzcGVjaWFsQ2hhcmFjdGVyc0ZvclJlbW92ZTogc3RyaW5nW10pOiBSZWdFeHAge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXHJcbiAgICAgIHNwZWNpYWxDaGFyYWN0ZXJzRm9yUmVtb3ZlLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBgXFxcXCR7aXRlbX1gKS5qb2luKCd8JyksXHJcbiAgICAgICdnaSdcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hcHBseU1hc2tSZXN1bHQocmVzdWx0OiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5zaG93TWFza1R5cGVkKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNMZW46IG51bWJlciA9IHJlc3VsdC5sZW5ndGg7XHJcbiAgICBjb25zdCBwcmVmTm1hc2s6IHN0cmluZyA9IHRoaXMucHJlZml4ICsgdGhpcy5tYXNrSXNTaG93bjtcclxuICAgIGNvbnN0IGlmTWFza0lzU2hvd24gPSBwcmVmTm1hc2suc2xpY2UocmVzTGVuKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0ICsgaWZNYXNrSXNTaG93bjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX29uQ29udHJvbFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIC8qXHJcbiAgICAgIEJlY2F1c2Ugd2UgYXJlIG5vIGxvbmdlciB3b3JraW5nIHdpdGggdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIChzaW5jZSBpdCBkb2Vzbid0IHBsYXkgbmljZSB3aXRoIElvbmljKS5cclxuICAgICAgV2UgbmVlZCBsb2dpYyBoZXJlIHRvIHRyYWNrIGNoYW5nZXMgbWFkZSBwcm9ncmFtbWF0aWNhbGx5IHRvIHRoZSBmb3JtIHZhbHVlLiAgU3BlY2lmaWNhbGx5IGNoYW5nZXNcclxuICAgICAgZG9uZSBPVVRTSURFIG9mIHRoZSBtYXNrLiBTaW5jZSBjaGFuZ2VzIGRvbmUgaW5zaWRlIHRoZSBtYXNrIG1heSBhbHNvIGZpcmUgb2ZmIHRoaXMgbWV0aG9kXHJcbiAgICAgIHdlIG5lZWQgdG8gZG8gc29tZSBqaXUgaml0c3UgdG8gZW5zdXJlIHdlIGFyZSBpZ25vcmluZyB0aG9zZSBjaGFuZ2VzLlxyXG4gICAgKi9cclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRVbm1hc2tlZFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAodGhpcy51bm1hc2tlZFZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVubWFza2VkU3Vic3RyaW5nOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8vIFRoaXMgbWV0aG9kICh2YWx1ZSBjaGFuZ2UpIGZpcmVzIG9mZiBiZWZvcmUgYSBLZXlkb3duIG9yIElucHV0IGV2ZW50LCBzbyB3ZSBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAvLyB0aGUgbGF0ZXN0IGNoYW5nZSBhbmQgY29tcGFyZSB0byBvdXIgcHJldmlvdXMgKGtub3duKSB2YWx1ZS5cclxuICAgIGlmICh0aGlzLnVubWFza2VkVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICBjb25zdCB2ID0gdGhpcy51bm1hc2tlZFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgIHVubWFza2VkU3Vic3RyaW5nID0gdi5zdWJzdHJpbmcoMCwgdi5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3VmFsdWUgIT09IHVubWFza2VkU3Vic3RyaW5nKSB7XHJcbiAgICAgIGNvbnN0IG52ID0gbmV3VmFsdWUgIT0gbnVsbCA/IG5ld1ZhbHVlLnRvU3RyaW5nKCkgOiBudWxsO1xyXG4gICAgICBjb25zdCB2ID0gdGhpcy5hcHBseU1hc2sobnYsIHRoaXMubWFza0V4cHJlc3Npb24pO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWFza1NlcnZpY2UgfSBmcm9tICcuL21hc2suc2VydmljZSc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttYXNrXScsXHJcbiAgcHJvdmlkZXJzOiBbTWFza1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXNrRGlyZWN0aXZlIHtcclxuICBwcml2YXRlIF9tYXNrVmFsdWU6IHN0cmluZztcclxuICBwcml2YXRlIF9pbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHByaXZhdGUgX3N0YXJ0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZW5kOiBudW1iZXI7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgcHVibGljIG9uVG91Y2ggPSAoKSA9PiB7fTtcclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgX21hc2tTZXJ2aWNlOiBNYXNrU2VydmljZSxcclxuICAgIHByaXZhdGUgX25nQ29udHJvbDogTmdDb250cm9sXHJcbiAgKSB7fVxyXG5cclxuICBASW5wdXQoJ21hc2snKVxyXG4gIHB1YmxpYyBzZXQgbWFza0V4cHJlc3Npb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbWFza1ZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICBpZiAoIXRoaXMuX21hc2tWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gdGhpcy5fbmdDb250cm9sLmNvbnRyb2wudmFsdWU7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplTWFzaygpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBJQ29uZmlnWydzcGVjaWFsQ2hhcmFjdGVycyddKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF2YWx1ZSB8fFxyXG4gICAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHxcclxuICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS5sZW5ndGgpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcGF0dGVybnModmFsdWU6IElDb25maWdbJ3BhdHRlcm5zJ10pIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UubWFza0F2YWlsYWJsZVBhdHRlcm5zID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcHJlZml4KHZhbHVlOiBJQ29uZmlnWydwcmVmaXgnXSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzdWZpeCh2YWx1ZTogSUNvbmZpZ1snc3VmaXgnXSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5zdWZpeCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGRyb3BTcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ10pIHtcclxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmRyb3BTcGVjaWFsQ2hhcmFjdGVycyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dNYXNrVHlwZWQodmFsdWU6IElDb25maWdbJ3Nob3dNYXNrVHlwZWQnXSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5zaG93TWFza1R5cGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1RlbXBsYXRlKHZhbHVlOiBJQ29uZmlnWydzaG93VGVtcGxhdGUnXSkge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2Uuc2hvd1RlbXBsYXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgY2xlYXJJZk5vdE1hdGNoKHZhbHVlOiBJQ29uZmlnWydjbGVhcklmTm90TWF0Y2gnXSkge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UuY2xlYXJJZk5vdE1hdGNoID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWw6IEhUTUxJbnB1dEVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IGVsLnZhbHVlO1xyXG5cclxuICAgIGlmICghdGhpcy5fbWFza1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPVxyXG4gICAgICAoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKSA9PT0gMVxyXG4gICAgICAgID8gKGVsLnNlbGVjdGlvblN0YXJ0IGFzIG51bWJlcikgKyB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoXHJcbiAgICAgICAgOiAoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKTtcclxuICAgIGxldCBjYXJldFNoaWZ0ID0gMDtcclxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5VmFsdWVDaGFuZ2VzKFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgKHNoaWZ0OiBudW1iZXIpID0+IChjYXJldFNoaWZ0ID0gc2hpZnQpXHJcbiAgICApO1xyXG4gICAgLy8gb25seSBzZXQgdGhlIHNlbGVjdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhY3RpdmVcclxuICAgIGlmICh0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsLnNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uRW5kID1cclxuICAgICAgdGhpcy5fcG9zaXRpb24gIT09IG51bGxcclxuICAgICAgICA/IHRoaXMuX3Bvc2l0aW9uXHJcbiAgICAgICAgOiBwb3NpdGlvbiArXHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICgoZSBhcyBhbnkpLmlucHV0VHlwZSA9PT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgPyAwIDogY2FyZXRTaGlmdCk7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBwdWJsaWMgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2UuY2xlYXJJZk5vdE1hdGNoRm4oKTtcclxuICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvbkZvY3VzKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBlbCAhPT0gbnVsbCAmJlxyXG4gICAgICBlbC5zZWxlY3Rpb25TdGFydCAhPT0gbnVsbCAmJlxyXG4gICAgICBlbC5zZWxlY3Rpb25TdGFydCA9PT0gZWwuc2VsZWN0aW9uRW5kICYmXHJcbiAgICAgIGVsLnNlbGVjdGlvblN0YXJ0ID4gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aCAmJlxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgKGUgYXMgYW55KS5rZXlDb2RlICE9PSAzOFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9tYXNrU2VydmljZS5zaG93TWFza1R5cGVkKSB7XHJcbiAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tJc1Nob3duID0gdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb24ucmVwbGFjZShcclxuICAgICAgICAvWzAtOV0vZyxcclxuICAgICAgICAnXydcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsLnZhbHVlID1cclxuICAgICAgIWVsLnZhbHVlIHx8IGVsLnZhbHVlID09PSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXhcclxuICAgICAgICA/IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeCArIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tJc1Nob3duXHJcbiAgICAgICAgOiBlbC52YWx1ZTtcclxuICAgIC8qKiBmaXggb2YgY3Vyc29yIHBvc2l0aW9uIHdpdGggcHJlZml4IHdoZW4gbW91c2UgY2xpY2sgb2NjdXIgKi9cclxuICAgIGlmIChcclxuICAgICAgKChlbC5zZWxlY3Rpb25TdGFydCBhcyBudW1iZXIpIHx8IChlbC5zZWxlY3Rpb25FbmQgYXMgbnVtYmVyKSkgPD1cclxuICAgICAgdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgIGVsLnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChlbC5zZWxlY3Rpb25TdGFydCBhcyBudW1iZXIpIDw9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeC5sZW5ndGggJiZcclxuICAgICAgICAoZWwuc2VsZWN0aW9uRW5kIGFzIG51bWJlcikgPD0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbkZvY3VzKGUpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZS5rZXlDb2RlID09PSA4ICYmXHJcbiAgICAgICAgZWwuc2VsZWN0aW9uU3RhcnQgPT09IDAgJiZcclxuICAgICAgICBlbC5zZWxlY3Rpb25FbmQgPT09IGVsLnZhbHVlLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICBlbC52YWx1ZSA9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeDtcclxuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeFxyXG4gICAgICAgICAgPyB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoXHJcbiAgICAgICAgICA6IDE7XHJcbiAgICAgICAgdGhpcy5vbklucHV0KGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScpXHJcbiAgcHVibGljIG9uUGFzdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gIH1cclxuXHJcbiAgLyoqIEl0IGRpc2FibGVzIHRoZSBpbnB1dCBlbGVtZW50ICovXHJcbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5fbWFza1NlcnZpY2Uuc2V0Rm9ybUVsZW1lbnRQcm9wZXJ0eSgnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlcGVhdFBhdHRlcm5TeW1ib2xzKG1hc2tFeHA6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAobWFza0V4cC5tYXRjaCgve1swLTldK30vKSAmJlxyXG4gICAgICAgIG1hc2tFeHBcclxuICAgICAgICAgIC5zcGxpdCgnJylcclxuICAgICAgICAgIC5yZWR1Y2UoKGFjY3VtOiBzdHJpbmcsIGN1cnJ2YWw6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gY3VycnZhbCA9PT0gJ3snID8gaW5kZXggOiB0aGlzLl9zdGFydDtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJydmFsICE9PSAnfScpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFza1NlcnZpY2UuX2ZpbmRTcGVjaWFsQ2hhcihjdXJydmFsKVxyXG4gICAgICAgICAgICAgICAgPyBhY2N1bSArIGN1cnJ2YWxcclxuICAgICAgICAgICAgICAgIDogYWNjdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZW5kID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcGVhdE51bWJlcjogbnVtYmVyID0gTnVtYmVyKFxyXG4gICAgICAgICAgICAgIG1hc2tFeHAuc2xpY2UodGhpcy5fc3RhcnQgKyAxLCB0aGlzLl9lbmQpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcGFjZVdpdGg6IHN0cmluZyA9IG5ldyBBcnJheShyZXBlYXROdW1iZXIgKyAxKS5qb2luKFxyXG4gICAgICAgICAgICAgIG1hc2tFeHBbdGhpcy5fc3RhcnQgLSAxXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjdW0gKyByZXBhY2VXaXRoO1xyXG4gICAgICAgICAgfSwgJycpKSB8fFxyXG4gICAgICBtYXNrRXhwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZU1hc2soKSB7XHJcbiAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrRXhwcmVzc2lvbiA9IHRoaXMuX3JlcGVhdFBhdHRlcm5TeW1ib2xzKFxyXG4gICAgICB0aGlzLl9tYXNrVmFsdWVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbSA9IHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFzayhcclxuICAgICAgdGhpcy5faW5wdXRWYWx1ZSxcclxuICAgICAgdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb25cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fbWFza1NlcnZpY2Uuc2V0VmFsdWUobSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWFza0FwcGxpZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXNrLWFwcGxpZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IElDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ21hc2snLFxyXG4gIHB1cmU6IHRydWVcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hc2tTZXJ2aWNlOiBNYXNrQXBwbGllclNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgbWFzazogc3RyaW5nIHwgW3N0cmluZywgSUNvbmZpZ1sncGF0dGVybnMnXV1cclxuICApOiBzdHJpbmcge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG1hc2sgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9tYXNrU2VydmljZS5hcHBseU1hc2soYCR7dmFsdWV9YCwgbWFzayk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbWFza1NlcnZpY2UuYXBwbHlNYXNrV2l0aFBhdHRlcm4oYCR7dmFsdWV9YCwgbWFzayk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNvbmZpZyxcclxuICBJTklUSUFMX0NPTkZJRyxcclxuICBpbml0aWFsQ29uZmlnLFxyXG4gIE5FV19DT05GSUcsXHJcbiAgb3B0aW9uc0NvbmZpZ1xyXG59IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgTWFza0FwcGxpZXJTZXJ2aWNlIH0gZnJvbSAnLi9tYXNrLWFwcGxpZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hc2tEaXJlY3RpdmUgfSBmcm9tICcuL21hc2suZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWFza1BpcGUgfSBmcm9tICcuL21hc2sucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW01hc2tBcHBsaWVyU2VydmljZV0sXHJcbiAgZXhwb3J0czogW01hc2tEaXJlY3RpdmUsIE1hc2tQaXBlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNYXNrRGlyZWN0aXZlLCBNYXNrUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hc2tJb25pY01vZHVsZSB7XHJcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ1ZhbHVlPzogb3B0aW9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neE1hc2tJb25pY01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkVXX0NPTkZJRyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdWYWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogSU5JVElBTF9DT05GSUcsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogaW5pdGlhbENvbmZpZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogY29uZmlnLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogX2NvbmZpZ0ZhY3RvcnksXHJcbiAgICAgICAgICBkZXBzOiBbSU5JVElBTF9DT05GSUcsIE5FV19DT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuICBwdWJsaWMgc3RhdGljIGZvckNoaWxkKGNvbmZpZ1ZhbHVlPzogb3B0aW9uc0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neE1hc2tJb25pY01vZHVsZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfY29uZmlnRmFjdG9yeShcclxuICBpbml0Q29uZmlnOiBvcHRpb25zQ29uZmlnLFxyXG4gIGNvbmZpZ1ZhbHVlOiBvcHRpb25zQ29uZmlnIHwgKCgpID0+IG9wdGlvbnNDb25maWcpXHJcbik6IEZ1bmN0aW9uIHwgb3B0aW9uc0NvbmZpZyB7XHJcbiAgcmV0dXJuIHR5cGVvZiBjb25maWdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgPyBjb25maWdWYWx1ZSgpXHJcbiAgICA6IHsgLi4uaW5pdENvbmZpZywgLi4uY29uZmlnVmFsdWUgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBbUJBLElBQWEsTUFBTSxHQUEyQixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUM7O0FBQzFFLElBQWEsVUFBVSxHQUEyQixJQUFJLGNBQWMsQ0FDbEUsWUFBWSxDQUNiOztBQUNELElBQWEsY0FBYyxHQUE0QixJQUFJLGNBQWMsQ0FDdkUsZ0JBQWdCLENBQ2pCOztBQUVELElBQWEsYUFBYSxHQUFZO0lBQ3BDLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixlQUFlLEVBQUUsS0FBSztJQUN0QixZQUFZLEVBQUUsS0FBSztJQUNuQixhQUFhLEVBQUUsS0FBSztJQUNwQixxQkFBcUIsRUFBRSxJQUFJO0lBQzNCLGlCQUFpQixFQUFFO1FBQ2pCLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0tBQ0o7SUFDRCxRQUFRLEVBQUU7UUFDUixHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixRQUFRLEVBQUUsSUFBSTtTQUNmO1FBQ0QsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuQztRQUNELENBQUMsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDaEM7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NB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

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loading_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_auth_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_review_service__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReviewPage = /** @class */ (function () {
    function ReviewPage(http, authService, loadingService, toast, modalCtrl, reviewService) {
        this.http = http;
        this.authService = authService;
        this.loadingService = loadingService;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.reviewService = reviewService;
        this.animateItems = [];
        this.firstLoad = true;
        this.filters = {
            limit: 20,
            offset: 0,
            q: '',
            sort: '',
        };
    }
    ReviewPage.prototype.ionViewWillEnter = function () {
        this.authService.canActivate();
    };
    ReviewPage.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ReviewPage.prototype.getReviews = function (infiniteScroll) {
        var _this = this;
        this.loadingService.show();
        if (this.firstLoad == false)
            this.filters.offset++;
        this.reviewService.get(this.filters).subscribe(function (response) {
            _this.reviews = response.data.results;
            if (response.data.paging) {
                _this.totalItems = response.data.paging.total;
                _this.filters.offset = response.data.paging.offset;
            }
            _this.firstLoad = false;
            var self = _this;
            var _loop_1 = function (i) {
                setTimeout(function () {
                    self.animateItems.push(self.reviews[i]);
                }, 200);
            };
            for (var i = 0; i < _this.reviews.length; i++) {
                _loop_1(i);
            }
            if (infiniteScroll)
                infiniteScroll.complete();
            _this.loadingService.hide();
        }, function (error) {
            _this.loadingService.hide();
            _this.toast.presentToast(error.error.error.message);
            if (infiniteScroll)
                infiniteScroll.complete();
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\pages\review\review.html"*/'<!--Fist Screen-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <!---Title-->\n\n        <ion-title>2Step Reviews</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!--Theme Appearance animation (Zoom In)-->\n\n<ion-content>\n\n    <br>\n\n    <ion-col col-12 padding-top>\n\n        <span font-bold span-medium padding-left>Reviews</span>\n\n    </ion-col>\n\n    <ion-grid no-padding >\n\n        <ion-col col-12 padding-top *ngIf="!animateItems?.length">\n\n            <span font-bold span-small="" padding-left>No results found</span>\n\n        </ion-col>\n\n\n\n        <ion-col col-12>\n\n            <ion-list>\n\n                <ion-item box-shadow margin-top no-lines *ngFor="let item of animateItems; let i = index;" [ngClass]="{ \'zoom-in\': true }">\n\n                    <!-- Avatar -->\n\n                    <ion-avatar item-start>\n\n                        <!--<img [src]="item.image">-->\n\n                        <ngx-avatar name="{{ item.customer }}"></ngx-avatar>\n\n                    </ion-avatar>\n\n                    <!-- Title -->\n\n                    <h2 item-title>{{ item.customer }}</h2>\n\n                    <h3 text-wrap margin-top>\n\n                        <ion-icon name="pin"></ion-icon><b>{{ item.office_name }}</b> &nbsp;&nbsp;&nbsp;&nbsp; {{ item.office_address}}\n\n                    </h3>\n\n                    <h3 text-wrap >\n\n                        {{ item.comment }}\n\n                    </h3>\n\n                    <h3 text-wrap >\n\n                        <ion-icon name="calendar"></ion-icon><b>{{  item.created_at | date: \'fullDate\' }}</b>\n\n                    </h3>\n\n                    <!--<ion-col col-12 text-center>-->\n\n                        <!--<ion-icon white *ngFor="let star of [1,2,3,4,5];let i = index">-->\n\n                            <!--<i icon-medium *ngIf="item.isActive" class="icon icon-star"></i>-->\n\n                            <!--<i icon-medium *ngIf="!item.isActive" class="icon icon-star-outline"></i>-->\n\n                        <!--</ion-icon>-->\n\n                    <!--</ion-col>-->\n\n                </ion-item>\n\n                <ion-infinite-scroll (ionInfinite)="getReviews($event)">\n\n                    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n                </ion-infinite-scroll>\n\n            </ion-list>\n\n        </ion-col>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ModalController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_review_service__["a" /* ReviewService */]) === "function" && _f || Object])
    ], ReviewPage);
    return ReviewPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=review.js.map

/***/ })

});
//# sourceMappingURL=0.js.map