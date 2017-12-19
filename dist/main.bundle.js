webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_material__ = __webpack_require__("../../../../../src/app/components/_app/material.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_app_app__ = __webpack_require__("../../../../../src/app/components/_app/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home__ = __webpack_require__("../../../../../src/app/components/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_about_about__ = __webpack_require__("../../../../../src/app/components/about/about.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_artists_artists__ = __webpack_require__("../../../../../src/app/components/artists/artists.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_artists_artistdetails__ = __webpack_require__("../../../../../src/app/components/artists/artistdetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_events_events__ = __webpack_require__("../../../../../src/app/components/events/events.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_news_news__ = __webpack_require__("../../../../../src/app/components/news/news.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_releases_releases__ = __webpack_require__("../../../../../src/app/components/releases/releases.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_templates_header__ = __webpack_require__("../../../../../src/app/components/_templates/header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_templates_footer__ = __webpack_require__("../../../../../src/app/components/_templates/footer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_templates_gravity__ = __webpack_require__("../../../../../src/app/components/_templates/gravity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















/* Service */

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home__["a" /* HomeComponent */] },
    { path: 'theempire', component: __WEBPACK_IMPORTED_MODULE_13__components_about_about__["a" /* AboutComponent */] },
    { path: 'artists', component: __WEBPACK_IMPORTED_MODULE_14__components_artists_artists__["a" /* ArtistsComponent */] },
    { path: 'artists/:name', component: __WEBPACK_IMPORTED_MODULE_15__components_artists_artistdetails__["a" /* ArtistDetailsComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_16__components_events_events__["a" /* EventsComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_17__components_news_news__["a" /* NewsComponent */] },
    { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_news_news__["a" /* NewsComponent */] },
    { path: 'releases', component: __WEBPACK_IMPORTED_MODULE_18__components_releases_releases__["a" /* ReleasesComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_app_material__["a" /* AGMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_app_app__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_templates_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_templates_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_templates_gravity__["a" /* GravityComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home__["b" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_about_about__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_artists_artists__["a" /* ArtistsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_artists_artistdetails__["a" /* ArtistDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_events_events__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_news_news__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_releases_releases__["a" /* ReleasesComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_mceService__["a" /* MCEService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__components_app_app__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/_app/app.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" class=\"sideNav-container\" align=\"end\" fixedInViewport=\"true\" mode=\"over\" disableClose>\r\n        <div class=\"side-header\">\r\n            <div class=\"nav-link\"><a (click)=\"sidenav.toggle()\"><i class=\"material-icons\">&#xE5CD;</i></a></div>\r\n        </div>\r\n        <div class=\"side-body\">\r\n            <div class=\"nav-link\" *ngFor=\"let item of navitems\"><a [href]=\"item.url\">{{item.name}}</a></div>\r\n        </div>        \r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n        <section class=\"main-content\">\r\n            <!-- Header -->\r\n            <my-app-header (toggleEvent)=\"sidenav.toggle()\" [navitems]=\"navitems\"></my-app-header>\r\n        \r\n            <!-- Body -->\r\n            <div class=\"body-container\">                \r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <!-- Footer -->\r\n            <my-app-footer [navitems]=\"navitems\"></my-app-footer>\r\n        \r\n        </section>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/components/_app/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_navitem__ = __webpack_require__("../../../../../src/app/datamodels/navitem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.navitems = [
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_navitem__["a" /* NavItem */]('Artists', '/artists'),
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_navitem__["a" /* NavItem */]('The Empire', '/theempire'),
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_navitem__["a" /* NavItem */]('Events', '/events'),
            //new NavItem('Media', ''),
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_navitem__["a" /* NavItem */]('News', '/news'),
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_navitem__["a" /* NavItem */]('Releases', '/releases'),
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_navitem__["a" /* NavItem */]('Contact Us', '')
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/_app/app.html"),
            styleUrls: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/_app/material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AGMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AGMaterialModule = /** @class */ (function () {
    function AGMaterialModule() {
    }
    AGMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTooltipModule */],
            ]
        })
    ], AGMaterialModule);
    return AGMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/_templates/footer.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-body\">\r\n    <div class=\"footer-container\">\r\n        <div class=\"footer-item\"><img class=\"footer-logo\" src=\"{{logo}}\"></div>\r\n        <div class=\"footer-item\"><div class=\"footer-title\">Mind Control Empire</div></div>\r\n        <div class=\"footer-item\">\r\n            <div class=\"footer-media\">\r\n                <a href=\"\" target=\"_blank\" class=\"social-link youtube\"><div class=\"link-container\"><i fa [name]=\"'youtube'\"></i></div></a>                \r\n                <a href=\"\" target=\"_blank\" class=\"social-link instagram\"><div class=\"link-container\"><i fa [name]=\"'instagram'\"></i></div></a>\r\n                <a href=\"\" target=\"_blank\" class=\"social-link facebook\"><div class=\"link-container\"><i fa [name]=\"'facebook'\"></i></div></a>\r\n                <a href=\"\" target=\"_blank\" class=\"social-link twitter\"><div class=\"link-container\"><i fa [name]=\"'twitter'\"></i></div></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/_templates/footer.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-body {\n  background: #3c3c3c;\n  color: #ffffff;\n}\n.footer-body .footer-container {\n  padding: 20px 0px;\n}\n.footer-body .footer-container .footer-item {\n  display: block;\n  text-align: center;\n  padding: 10px;\n}\n.footer-body .footer-container .footer-item .footer-logo {\n  width: 150px;\n}\n.footer-body .footer-container .footer-item .footer-title {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.footer-body .footer-container .footer-item .footer-media {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding-bottom: 20px;\n}\n.footer-body .footer-container .footer-item .footer-media .social-link.instagram:hover .link-container {\n  background: #c32aa3;\n}\n.footer-body .footer-container .footer-item .footer-media .social-link.facebook:hover .link-container {\n  background: #3b5998;\n}\n.footer-body .footer-container .footer-item .footer-media .social-link.twitter:hover .link-container {\n  background: #00b6f1;\n}\n.footer-body .footer-container .footer-item .footer-media .social-link.youtube:hover .link-container {\n  background: #ff0000;\n}\n.footer-body .footer-container .footer-item .footer-media .social-link .link-container {\n  color: #000000;\n  background: #ffffff;\n  border-radius: 50%;\n  padding: 7px;\n  position: relative;\n  height: 39px;\n  width: 39px;\n  transition: 0.5s all ease;\n}\n.footer-body .footer-container .footer-item .footer-media .social-link .link-container i {\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.footer-body .footer-container .footer-item .footer-media .social-link + .social-link {\n  margin-left: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_templates/footer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.logo = "assets/images/logos/logoR.png";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FooterComponent.prototype, "navitems", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app-footer',
            template: __webpack_require__("../../../../../src/app/components/_templates/footer.html"),
            styles: [__webpack_require__("../../../../../src/app/components/_templates/footer.less")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/_templates/gravity.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gravity-svg\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" height=\"100%\" viewBox=\"0 0 400 400\" version=\"1.1\">\r\n            <g id=\"container\" fill=\"#000\">\r\n      \r\n          <image class=\"logo\" x=\"155\" y=\"155\" width=\"100\" height=\"100\" xlink:href=\"assets\\images\\logos\\logo.svg\">\r\n            <animate attributeName=\"\" dur=\"3.5s\" begin=\"0s\" repeatCount=\"indefinite\"\t keyTimes=\"0; 0.5; 1\" keySplines=\"0.5  0   0.1  1; 0.5  0   0.1  1\"\t calcMode=\"spline\" values=\"100; 87; 100\" />\r\n          </image>\r\n      \r\n                <path id=\"dots\">\r\n                    <animate attributeName=\"d\"\r\n                                     dur=\"5.5s\"\r\n                                     begin=\"0s\"\r\n                                     fill=\"freeze\"\r\n                                     repeatCount=\"indefinite\"\r\n                                     keyTimes=\"0; 0.5; 1\"\r\n                                     keySplines=\"0.5  0   0.1  1;\r\n                                                             0.5  0   0.1  1\"\r\n                                     calcMode=\"spline\"\r\n                                     values=\"\r\n                                                         M168.9 146.2C171.8 146.2 174.1 143.9 174.1 141 174.1 138.1 171.8 135.8 168.9 135.8 166 135.8 163.7 138.1 163.7 141 163.7 143.9 166 146.2 168.9 146.2ZM168.9 264.7C171.8 264.7 174.1 262.3 174.1 259.5 174.1 256.6 171.8 254.2 168.9 254.2 166 254.2 163.7 256.6 163.7 259.5 163.7 262.3 166 264.7 168.9 264.7ZM147.7 240.6C150.2 240.6 152.2 238.6 152.2 236.1 152.2 233.6 150.2 231.6 147.7 231.6 145.2 231.6 143.2 233.6 143.2 236.1 143.2 238.6 145.2 240.6 147.7 240.6ZM260.2 131.5C262.7 131.5 264.7 129.5 264.7 127 264.7 124.5 262.7 122.5 260.2 122.5 257.7 122.5 255.7 124.5 255.7 127 255.7 129.5 257.7 131.5 260.2 131.5ZM241.1 278.4C243.6 278.4 245.6 276.3 245.6 273.9 245.6 271.4 243.6 269.4 241.1 269.4 238.7 269.4 236.6 271.4 236.6 273.9 236.6 276.3 238.7 278.4 241.1 278.4ZM176.1 286.6C178.6 286.6 180.6 284.6 180.6 282.1 180.6 279.7 178.6 277.6 176.1 277.6 173.6 277.6 171.6 279.7 171.6 282.1 171.6 284.6 173.6 286.6 176.1 286.6ZM132.2 172.9C134.7 172.9 136.7 170.9 136.7 168.4 136.7 165.9 134.7 163.9 132.2 163.9 129.7 163.9 127.7 165.9 127.7 168.4 127.7 170.9 129.7 172.9 132.2 172.9ZM139.1 215.4C141.5 215.4 143.5 213.4 143.5 210.9 143.5 208.4 141.5 206.4 139.1 206.4 136.6 206.4 134.6 208.4 134.6 210.9 134.6 213.4 136.6 215.4 139.1 215.4ZM271.7 199.5C274.2 199.5 276.2 197.5 276.2 195 276.2 192.5 274.2 190.5 271.7 190.5 269.2 190.5 267.2 192.5 267.2 195 267.2 197.5 269.2 199.5 271.7 199.5ZM215.3 272.6C217.7 272.6 219.8 270.6 219.8 268.1 219.8 265.6 217.7 263.6 215.3 263.6 212.8 263.6 210.8 265.6 210.8 268.1 210.8 270.6 212.8 272.6 215.3 272.6ZM207.7 139.4C210.2 139.4 212.2 137.4 212.2 134.9 212.2 132.4 210.2 130.4 207.7 130.4 205.2 130.4 203.2 132.4 203.2 134.9 203.2 137.4 205.2 139.4 207.7 139.4ZM126.5 210.7C129.4 210.7 131.7 208.3 131.7 205.5 131.7 202.6 129.4 200.2 126.5 200.2 123.6 200.2 121.3 202.6 121.3 205.5 121.3 208.3 123.6 210.7 126.5 210.7ZM264.2 240.6C267 240.6 269.4 238.2 269.4 235.3 269.4 232.5 267 230.1 264.2 230.1 261.3 230.1 258.9 232.5 258.9 235.3 258.9 238.2 261.3 240.6 264.2 240.6ZM154.7 142.3C156.9 142.3 158.6 140.5 158.6 138.3 158.6 136.1 156.9 134.4 154.7 134.4 152.5 134.4 150.7 136.1 150.7 138.3 150.7 140.5 152.5 142.3 154.7 142.3ZM269.7 187.6C271.5 187.6 273 186.2 273 184.4 273 182.6 271.5 181.2 269.7 181.2 267.9 181.2 266.5 182.6 266.5 184.4 266.5 186.2 267.9 187.6 269.7 187.6ZM274.8 261.8C276.5 261.8 278 260.4 278 258.6 278 256.8 276.5 255.3 274.8 255.3 273 255.3 271.5 256.8 271.5 258.6 271.5 260.4 273 261.8 274.8 261.8ZM167.6 275.5C169.4 275.5 170.9 274 170.9 272.2 170.9 270.5 169.4 269 167.6 269 165.8 269 164.4 270.5 164.4 272.2 164.4 274 165.8 275.5 167.6 275.5ZM136.4 235.9C138.1 235.9 139.6 234.4 139.6 232.6 139.6 230.9 138.1 229.4 136.4 229.4 134.6 229.4 133.1 230.9 133.1 232.6 133.1 234.4 134.6 235.9 136.4 235.9ZM202.5 125.4C204.3 125.4 205.7 123.9 205.7 122.1 205.7 120.3 204.3 118.9 202.5 118.9 200.7 118.9 199.3 120.3 199.3 122.1 199.3 123.9 200.7 125.4 202.5 125.4ZM255 142.3C257.2 142.3 258.9 140.5 258.9 138.3 258.9 136.1 257.2 134.4 255 134.4 252.8 134.4 251 136.1 251 138.3 251 140.5 252.8 142.3 255 142.3ZM137.8 203.5C140 203.5 141.7 201.7 141.7 199.5 141.7 197.3 140 195.6 137.8 195.6 135.6 195.6 133.8 197.3 133.8 199.5 133.8 201.7 135.6 203.5 137.8 203.5ZM186 277.6C190.5 277.6 194.2 273.9 194.2 269.4 194.2 264.8 190.5 261.1 186 261.1 181.4 261.1 177.7 264.8 177.7 269.4 177.7 273.9 181.4 277.6 186 277.6ZM239.5 149.1C244.1 149.1 247.8 145.4 247.8 140.8 247.8 136.3 244.1 132.6 239.5 132.6 235 132.6 231.3 136.3 231.3 140.8 231.3 145.4 235 149.1 239.5 149.1ZM143.5 248.1C145.1 248.1 146.4 246.8 146.4 245.2 146.4 243.7 145.1 242.4 143.5 242.4 142 242.4 140.7 243.7 140.7 245.2 140.7 246.8 142 248.1 143.5 248.1ZM232 280.2C233.6 280.2 234.9 278.9 234.9 277.3 234.9 275.7 233.6 274.4 232 274.4 230.4 274.4 229.1 275.7 229.1 277.3 229.1 278.9 230.4 280.2 232 280.2ZM285.5 237C287.1 237 288.4 235.7 288.4 234.1 288.4 232.5 287.1 231.2 285.5 231.2 284 231.2 282.7 232.5 282.7 234.1 282.7 235.7 284 237 285.5 237ZM286.6 161C288.2 161 289.5 159.7 289.5 158.1 289.5 156.5 288.2 155.2 286.6 155.2 285 155.2 283.7 156.5 283.7 158.1 283.7 159.7 285 161 286.6 161ZM239.9 130C241.5 130 242.8 128.8 242.8 127.2 242.8 125.6 241.5 124.3 239.9 124.3 238.3 124.3 237 125.6 237 127.2 237 128.8 238.3 130 239.9 130ZM210.4 127.9C212 127.9 213.3 126.6 213.3 125 213.3 123.4 212 122.1 210.4 122.1 208.8 122.1 207.5 123.4 207.5 125 207.5 126.6 208.8 127.9 210.4 127.9ZM152.9 158.5C154.5 158.5 155.8 157.2 155.8 155.6 155.8 154 154.5 152.7 152.9 152.7 151.3 152.7 150 154 150 155.6 150 157.2 151.3 158.5 152.9 158.5ZM165.8 283.8C167.4 283.8 168.7 282.5 168.7 280.9 168.7 279.3 167.4 278 165.8 278 164.2 278 163 279.3 163 280.9 163 282.5 164.2 283.8 165.8 283.8ZM101.2 162.4C102.3 162.4 103.3 161.5 103.3 160.3 103.3 159.1 102.3 158.1 101.2 158.1 100 158.1 99 159.1 99 160.3 99 161.5 100 162.4 101.2 162.4ZM307.5 219.1C308.3 219.1 309 218.4 309 217.5 309 216.7 308.3 216 307.5 216 306.6 216 305.9 216.7 305.9 217.5 305.9 218.4 306.6 219.1 307.5 219.1ZM133.1 100.1C134 100.1 134.7 99.4 134.7 98.5 134.7 97.7 134 97 133.1 97 132.3 97 131.6 97.7 131.6 98.5 131.6 99.4 132.3 100.1 133.1 100.1ZM131.3 300.1C132.2 300.1 132.9 299.4 132.9 298.5 132.9 297.7 132.2 297 131.3 297 130.5 297 129.8 297.7 129.8 298.5 129.8 299.4 130.5 300.1 131.3 300.1ZM218 277.7C218.8 277.7 219.5 277.1 219.5 276.2 219.5 275.4 218.8 274.7 218 274.7 217.1 274.7 216.4 275.4 216.4 276.2 216.4 277.1 217.1 277.7 218 277.7ZM279.8 210.3C280.6 210.3 281.3 209.6 281.3 208.8 281.3 207.9 280.6 207.3 279.8 207.3 278.9 207.3 278.3 207.9 278.3 208.8 278.3 209.6 278.9 210.3 279.8 210.3ZM219.8 114.2C220.6 114.2 221.3 113.5 221.3 112.7 221.3 111.8 220.6 111.1 219.8 111.1 218.9 111.1 218.2 111.8 218.2 112.7 218.2 113.5 218.9 114.2 219.8 114.2ZM122.3 217.9C123.2 217.9 123.9 217.2 123.9 216.3 123.9 215.5 123.2 214.8 122.3 214.8 121.5 214.8 120.8 215.5 120.8 216.3 120.8 217.2 121.5 217.9 122.3 217.9ZM159 261.1C159.9 261.1 160.5 260.4 160.5 259.5 160.5 258.7 159.9 258 159 258 158.2 258 157.5 258.7 157.5 259.5 157.5 260.4 158.2 261.1 159 261.1ZM247.4 301.5C248.3 301.5 249 300.8 249 300 249 299.1 248.3 298.4 247.4 298.4 246.6 298.4 245.9 299.1 245.9 300 245.9 300.8 246.6 301.5 247.4 301.5ZM209 118.9C210.2 118.9 211.1 117.9 211.1 116.7 211.1 115.5 210.2 114.6 209 114.6 207.8 114.6 206.8 115.5 206.8 116.7 206.8 117.9 207.8 118.9 209 118.9ZM296.7 250.3C297.9 250.3 298.8 249.3 298.8 248.1 298.8 246.9 297.9 246 296.7 246 295.5 246 294.5 246.9 294.5 248.1 294.5 249.3 295.5 250.3 296.7 250.3ZM144.6 255C145.8 255 146.8 254 146.8 252.8 146.8 251.6 145.8 250.6 144.6 250.6 143.4 250.6 142.5 251.6 142.5 252.8 142.5 254 143.4 255 144.6 255ZM136 160.3C137.2 160.3 138.2 159.3 138.2 158.1 138.2 156.9 137.2 156 136 156 134.8 156 133.8 156.9 133.8 158.1 133.8 159.3 134.8 160.3 136 160.3ZM218 127.5C219.1 127.5 220.1 126.6 220.1 125.4 220.1 124.2 219.1 123.2 218 123.2 216.8 123.2 215.8 124.2 215.8 125.4 215.8 126.6 216.8 127.5 218 127.5ZM269.7 208.5C270.9 208.5 271.9 207.6 271.9 206.4 271.9 205.2 270.9 204.2 269.7 204.2 268.5 204.2 267.6 205.2 267.6 206.4 267.6 207.6 268.5 208.5 269.7 208.5ZM147.1 267.6C148.3 267.6 149.3 266.6 149.3 265.4 149.3 264.2 148.3 263.2 147.1 263.2 146 263.2 145 264.2 145 265.4 145 266.6 146 267.6 147.1 267.6ZM256.2 161.4C260.1 161.4 263.3 158.2 263.3 154.3 263.3 150.5 260.1 147.3 256.2 147.3 252.4 147.3 249.2 150.5 249.2 154.3 249.2 158.2 252.4 161.4 256.2 161.4ZM165.7 122.5C167.7 122.5 169.4 120.8 169.4 118.7 169.4 116.6 167.7 114.9 165.7 114.9 163.6 114.9 161.9 116.6 161.9 118.7 161.9 120.8 163.6 122.5 165.7 122.5ZM123.2 167.3C124.6 167.3 125.8 166.2 125.8 164.8 125.8 163.4 124.6 162.3 123.2 162.3 121.8 162.3 120.7 163.4 120.7 164.8 120.7 166.2 121.8 167.3 123.2 167.3ZM242.2 291.9C243.6 291.9 244.7 290.7 244.7 289.3 244.7 288 243.6 286.8 242.2 286.8 240.8 286.8 239.7 288 239.7 289.3 239.7 290.7 240.8 291.9 242.2 291.9ZM160.1 152.9C162.2 152.9 163.9 151.2 163.9 149.1 163.9 147 162.2 145.3 160.1 145.3 158 145.3 156.3 147 156.3 149.1 156.3 151.2 158 152.9 160.1 152.9ZM275.8 237.9C277.9 237.9 279.6 236.2 279.6 234.1 279.6 232 277.9 230.3 275.8 230.3 273.7 230.3 272.1 232 272.1 234.1 272.1 236.2 273.7 237.9 275.8 237.9ZM113.7 217.3C115.8 217.3 117.5 215.7 117.5 213.6 117.5 211.5 115.8 209.8 113.7 209.8 111.6 209.8 109.9 211.5 109.9 213.6 109.9 215.7 111.6 217.3 113.7 217.3ZM284.8 175.9C286.3 175.9 287.5 174.7 287.5 173.2 287.5 171.8 286.3 170.5 284.8 170.5 283.3 170.5 282.1 171.8 282.1 173.2 282.1 174.7 283.3 175.9 284.8 175.9ZM261.5 168.4C262.9 168.4 264.2 167.2 264.2 165.7 264.2 164.2 262.9 163 261.5 163 260 163 258.8 164.2 258.8 165.7 258.8 167.2 260 168.4 261.5 168.4ZM281.6 244.7C283.1 244.7 284.3 243.5 284.3 242 284.3 240.5 283.1 239.3 281.6 239.3 280.1 239.3 278.9 240.5 278.9 242 278.9 243.5 280.1 244.7 281.6 244.7ZM194.6 296.5C196.1 296.5 197.3 295.3 197.3 293.8 197.3 292.3 196.1 291.1 194.6 291.1 193.1 291.1 191.9 292.3 191.9 293.8 191.9 295.3 193.1 296.5 194.6 296.5ZM130.2 218.4C131.7 218.4 132.9 217.2 132.9 215.7 132.9 214.2 131.7 213 130.2 213 128.8 213 127.6 214.2 127.6 215.7 127.6 217.2 128.8 218.4 130.2 218.4ZM153.6 130.2C155.1 130.2 156.3 129 156.3 127.5 156.3 126 155.1 124.8 153.6 124.8 152.1 124.8 150.9 126 150.9 127.5 150.9 129 152.1 130.2 153.6 130.2ZM184.2 115.5C185.7 115.5 186.9 114.3 186.9 112.8 186.9 111.3 185.7 110.1 184.2 110.1 182.7 110.1 181.5 111.3 181.5 112.8 181.5 114.3 182.7 115.5 184.2 115.5ZM266.1 178.5C268.2 178.5 269.9 176.8 269.9 174.7 269.9 172.6 268.2 170.9 266.1 170.9 264 170.9 262.4 172.6 262.4 174.7 262.4 176.8 264 178.5 266.1 178.5ZM196 139.2C198.1 139.2 199.8 137.5 199.8 135.4 199.8 133.4 198.1 131.7 196 131.7 193.9 131.7 192.3 133.4 192.3 135.4 192.3 137.5 193.9 139.2 196 139.2ZM124.9 262.2C126.2 262.2 127.4 261 127.4 259.6 127.4 258.3 126.2 257.1 124.9 257.1 123.5 257.1 122.3 258.3 122.3 259.6 122.3 261 123.5 262.2 124.9 262.2ZM145.2 171.1C148.4 171.1 151.1 168.4 151.1 165.1 151.1 161.9 148.4 159.2 145.2 159.2 141.9 159.2 139.2 161.9 139.2 165.1 139.2 168.4 141.9 171.1 145.2 171.1ZM163.3 134C165.7 134 167.6 132.1 167.6 129.7 167.6 127.3 165.7 125.4 163.3 125.4 160.9 125.4 159 127.3 159 129.7 159 132.1 160.9 134 163.3 134ZM209 282.7C211.4 282.7 213.3 280.7 213.3 278.4 213.3 276 211.4 274 209 274 206.6 274 204.7 276 204.7 278.4 204.7 280.7 206.6 282.7 209 282.7ZM122.3 192C124.7 192 126.7 190 126.7 187.6 126.7 185.3 124.7 183.3 122.3 183.3 120 183.3 118 185.3 118 187.6 118 190 120 192 122.3 192ZM274.4 172.2C276.8 172.2 278.7 170.2 278.7 167.8 278.7 165.5 276.8 163.5 274.4 163.5 272 163.5 270.1 165.5 270.1 167.8 270.1 170.2 272 172.2 274.4 172.2ZM229.6 271.5C232.9 271.5 235.6 268.9 235.6 265.6 235.6 262.3 232.9 259.6 229.6 259.6 226.4 259.6 223.7 262.3 223.7 265.6 223.7 268.9 226.4 271.5 229.6 271.5ZM222.1 141.9C225.4 141.9 228 139.3 228 136 228 132.7 225.4 130 222.1 130 218.8 130 216.2 132.7 216.2 136 216.2 139.3 218.8 141.9 222.1 141.9ZM155.2 255.7C159.1 255.7 162.2 252.5 162.2 248.7 162.2 244.8 159.1 241.6 155.2 241.6 151.4 241.6 148.2 244.8 148.2 248.7 148.2 252.5 151.4 255.7 155.2 255.7ZM272.8 226.9C276.6 226.9 279.8 223.7 279.8 219.9 279.8 216 276.6 212.8 272.8 212.8 268.9 212.8 265.8 216 265.8 219.9 265.8 223.7 268.9 226.9 272.8 226.9ZM247.4 267.6C252 267.6 255.7 263.9 255.7 259.3 255.7 254.7 252 251 247.4 251 242.9 251 239.2 254.7 239.2 259.3 239.2 263.9 242.9 267.6 247.4 267.6ZM136.7 191.6C141.3 191.6 145 187.9 145 183.3 145 178.8 141.3 175 136.7 175 132.2 175 128.5 178.8 128.5 183.3 128.5 187.9 132.2 191.6 136.7 191.6ZM234.1 118.9C236.1 118.9 237.7 117.3 237.7 115.3 237.7 113.3 236.1 111.7 234.1 111.7 232.1 111.7 230.5 113.3 230.5 115.3 230.5 117.3 232.1 118.9 234.1 118.9ZM201.8 272.6C203.8 272.6 205.4 271 205.4 269 205.4 267 203.8 265.4 201.8 265.4 199.8 265.4 198.2 267 198.2 269 198.2 271 199.8 272.6 201.8 272.6ZM119.5 136.9C121.4 136.9 123.1 135.3 123.1 133.3 123.1 131.3 121.4 129.7 119.5 129.7 117.5 129.7 115.9 131.3 115.9 133.3 115.9 135.3 117.5 136.9 119.5 136.9ZM175.9 305C177.9 305 179.5 303.4 179.5 301.4 179.5 299.4 177.9 297.8 175.9 297.8 173.9 297.8 172.3 299.4 172.3 301.4 172.3 303.4 173.9 305 175.9 305ZM273.5 179.9C274.6 179.9 275.5 179 275.5 177.9 275.5 176.8 274.6 175.9 273.5 175.9 272.4 175.9 271.5 176.8 271.5 177.9 271.5 179 272.4 179.9 273.5 179.9ZM263.8 145.7C264.9 145.7 265.8 144.8 265.8 143.7 265.8 142.6 264.9 141.7 263.8 141.7 262.7 141.7 261.8 142.6 261.8 143.7 261.8 144.8 262.7 145.7 263.8 145.7ZM272.6 247.8C274.8 247.8 276.6 246 276.6 243.8 276.6 241.6 274.8 239.8 272.6 239.8 270.4 239.8 268.6 241.6 268.6 243.8 268.6 246 270.4 247.8 272.6 247.8ZM281.4 251.2C282.5 251.2 283.4 250.3 283.4 249.2 283.4 248.1 282.5 247.2 281.4 247.2 280.3 247.2 279.4 248.1 279.4 249.2 279.4 250.3 280.3 251.2 281.4 251.2ZM295.2 202.9C296.3 202.9 297.2 202.1 297.2 201 297.2 199.9 296.3 199 295.2 199 294.2 199 293.3 199.9 293.3 201 293.3 202.1 294.2 202.9 295.2 202.9ZM282.3 227.8C283.4 227.8 284.3 226.9 284.3 225.8 284.3 224.7 283.4 223.8 282.3 223.8 281.2 223.8 280.3 224.7 280.3 225.8 280.3 226.9 281.2 227.8 282.3 227.8ZM150.2 148.6C151.3 148.6 152.2 147.7 152.2 146.6 152.2 145.5 151.3 144.6 150.2 144.6 149.1 144.6 148.2 145.5 148.2 146.6 148.2 147.7 149.1 148.6 150.2 148.6ZM196.2 104.5C197.3 104.5 198.2 103.6 198.2 102.5 198.2 101.4 197.3 100.5 196.2 100.5 195.1 100.5 194.2 101.4 194.2 102.5 194.2 103.6 195.1 104.5 196.2 104.5ZM160.8 268.5C161.9 268.5 162.8 267.6 162.8 266.5 162.8 265.4 161.9 264.5 160.8 264.5 159.7 264.5 158.8 265.4 158.8 266.5 158.8 267.6 159.7 268.5 160.8 268.5ZM188.2 291.2C191.1 291.2 193.4 288.9 193.4 286 193.4 283.1 191.1 280.8 188.2 280.8 185.4 280.8 183 283.1 183 286 183 288.9 185.4 291.2 188.2 291.2ZM198.2 281.2C200 281.2 201.5 279.7 201.5 278 201.5 276.2 200 274.7 198.2 274.7 196.5 274.7 195 276.2 195 278 195 279.7 196.5 281.2 198.2 281.2ZM198.9 288.9C200 288.9 200.9 288 200.9 286.9 200.9 285.8 200 284.9 198.9 284.9 197.8 284.9 196.9 285.8 196.9 286.9 196.9 288 197.8 288.9 198.9 288.9ZM247.8 293.3C248.9 293.3 249.8 292.4 249.8 291.3 249.8 290.2 248.9 289.3 247.8 289.3 246.7 289.3 245.8 290.2 245.8 291.3 245.8 292.4 246.7 293.3 247.8 293.3ZM129.2 196.8C130.3 196.8 131.1 195.9 131.1 194.8 131.1 193.8 130.3 192.9 129.2 192.9 128.1 192.9 127.2 193.8 127.2 194.8 127.2 195.9 128.1 196.8 129.2 196.8ZM273 118.2C275.1 118.2 276.9 116.4 276.9 114.2 276.9 112 275.1 110.2 273 110.2 270.8 110.2 269 112 269 114.2 269 116.4 270.8 118.2 273 118.2ZM248.9 132C251 132 252.6 130.3 252.6 128.2 252.6 126.2 251 124.5 248.9 124.5 246.8 124.5 245.1 126.2 245.1 128.2 245.1 130.3 246.8 132 248.9 132ZM264.3 111.5C265.4 111.5 266.3 110.6 266.3 109.5 266.3 108.4 265.4 107.5 264.3 107.5 263.2 107.5 262.4 108.4 262.4 109.5 262.4 110.6 263.2 111.5 264.3 111.5Z\r\n                                                         ;\r\n                                                         M175.2 122.4C178.1 122.4 180.4 120.1 180.4 117.2 180.4 114.3 178.1 112 175.2 112 172.3 112 170 114.3 170 117.2 170 120.1 172.3 122.4 175.2 122.4ZM139.2 316.4C142.1 316.4 144.4 314.1 144.4 311.2 144.4 308.3 142.1 306 139.2 306 136.3 306 134 308.3 134 311.2 134 314.1 136.3 316.4 139.2 316.4ZM129.5 272C132 272 134 270 134 267.5 134 265 132 263 129.5 263 127 263 125 265 125 267.5 125 270 127 272 129.5 272ZM314.5 102C317 102 319 100 319 97.5 319 95 317 93 314.5 93 312 93 310 95 310 97.5 310 100 312 102 314.5 102ZM290.5 307C293 307 295 305 295 302.5 295 300 293 298 290.5 298 288 298 286 300 286 302.5 286 305 288 307 290.5 307ZM177.5 338C180 338 182 336 182 333.5 182 331 180 329 177.5 329 175 329 173 331 173 333.5 173 336 175 338 177.5 338ZM84.5 150C87 150 89 148 89 145.5 89 143 87 141 84.5 141 82 141 80 143 80 145.5 80 148 82 150 84.5 150ZM117.5 227C120 227 122 225 122 222.5 122 220 120 218 117.5 218 115 218 113 220 113 222.5 113 225 115 227 117.5 227ZM320.5 194C323 194 325 192 325 189.5 325 187 323 185 320.5 185 318 185 316 187 316 189.5 316 192 318 194 320.5 194ZM233.5 308C236 308 238 306 238 303.5 238 301 236 299 233.5 299 231 299 229 301 229 303.5 229 306 231 308 233.5 308ZM210.5 110C213 110 215 108 215 105.5 215 103 213 101 210.5 101 208 101 206 103 206 105.5 206 108 208 110 210.5 110ZM87.2 213.4C90.1 213.4 92.4 211.1 92.4 208.2 92.4 205.3 90.1 203 87.2 203 84.3 203 82 205.3 82 208.2 82 211.1 84.3 213.4 87.2 213.4ZM265.2 258.4C268.1 258.4 270.4 256.1 270.4 253.2 270.4 250.3 268.1 248 265.2 248 262.3 248 260 250.3 260 253.2 260 256.1 262.3 258.4 265.2 258.4ZM107 108.9C109.1 108.9 110.9 107.1 110.9 105 110.9 102.8 109.1 101 107 101 104.8 101 103 102.8 103 105 103 107.1 104.8 108.9 107 108.9ZM291.2 190.5C293 190.5 294.5 189 294.5 187.2 294.5 185.5 293 184 291.2 184 289.4 184 288 185.5 288 187.2 288 189 289.4 190.5 291.2 190.5ZM336.2 327.5C338 327.5 339.5 326 339.5 324.2 339.5 322.5 338 321 336.2 321 334.4 321 333 322.5 333 324.2 333 326 334.4 327.5 336.2 327.5ZM163.2 307.5C165 307.5 166.5 306 166.5 304.2 166.5 302.5 165 301 163.2 301 161.4 301 160 302.5 160 304.2 160 306 161.4 307.5 163.2 307.5ZM98.2 260.5C100 260.5 101.5 259 101.5 257.2 101.5 255.5 100 254 98.2 254 96.4 254 95 255.5 95 257.2 95 259 96.4 260.5 98.2 260.5ZM168.2 72.5C170 72.5 171.5 71 171.5 69.2 171.5 67.5 170 66 168.2 66 166.4 66 165 67.5 165 69.2 165 71 166.4 72.5 168.2 72.5ZM275 100.9C277.1 100.9 278.9 99.1 278.9 97 278.9 94.8 277.1 93 275 93 272.8 93 271 94.8 271 97 271 99.1 272.8 100.9 275 100.9ZM117 208.9C119.1 208.9 120.9 207.1 120.9 205 120.9 202.8 119.1 201 117 201 114.8 201 113 202.8 113 205 113 207.1 114.8 208.9 117 208.9ZM186.3 302.6C190.8 302.6 194.5 298.9 194.5 294.3 194.5 289.7 190.8 286 186.3 286 181.7 286 178 289.7 178 294.3 178 298.9 181.7 302.6 186.3 302.6ZM256.3 145.6C260.8 145.6 264.5 141.9 264.5 137.3 264.5 132.7 260.8 129 256.3 129 251.7 129 248 132.7 248 137.3 248 141.9 251.7 145.6 256.3 145.6ZM63.9 265.8C65.5 265.8 66.8 264.5 66.8 262.9 66.8 261.3 65.5 260 63.9 260 62.3 260 61 261.3 61 262.9 61 264.5 62.3 265.8 63.9 265.8ZM256.9 303.8C258.5 303.8 259.8 302.5 259.8 300.9 259.8 299.3 258.5 298 256.9 298 255.3 298 254 299.3 254 300.9 254 302.5 255.3 303.8 256.9 303.8ZM369.9 240.8C371.5 240.8 372.8 239.5 372.8 237.9 372.8 236.3 371.5 235 369.9 235 368.3 235 367 236.3 367 237.9 367 239.5 368.3 240.8 369.9 240.8ZM360.9 124.8C362.5 124.8 363.8 123.5 363.8 121.9 363.8 120.3 362.5 119 360.9 119 359.3 119 358 120.3 358 121.9 358 123.5 359.3 124.8 360.9 124.8ZM244.9 106.8C246.5 106.8 247.8 105.5 247.8 103.9 247.8 102.3 246.5 101 244.9 101 243.3 101 242 102.3 242 103.9 242 105.5 243.3 106.8 244.9 106.8ZM221.9 31.8C223.5 31.8 224.8 30.5 224.8 28.9 224.8 27.3 223.5 26 221.9 26 220.3 26 219 27.3 219 28.9 219 30.5 220.3 31.8 221.9 31.8ZM132.9 143.8C134.5 143.8 135.8 142.5 135.8 140.9 135.8 139.3 134.5 138 132.9 138 131.3 138 130 139.3 130 140.9 130 142.5 131.3 143.8 132.9 143.8ZM147.9 353.8C149.5 353.8 150.8 352.5 150.8 350.9 150.8 349.3 149.5 348 147.9 348 146.3 348 145 349.3 145 350.9 145 352.5 146.3 353.8 147.9 353.8ZM57.2 154.3C58.3 154.3 59.3 153.4 59.3 152.2 59.3 151 58.3 150 57.2 150 56 150 55 151 55 152.2 55 153.4 56 154.3 57.2 154.3ZM362.5 217.1C363.4 217.1 364.1 216.4 364.1 215.5 364.1 214.7 363.4 214 362.5 214 361.7 214 361 214.7 361 215.5 361 216.4 361.7 217.1 362.5 217.1ZM127.5 79.1C128.4 79.1 129.1 78.4 129.1 77.5 129.1 76.7 128.4 76 127.5 76 126.7 76 126 76.7 126 77.5 126 78.4 126.7 79.1 127.5 79.1ZM104.5 339.1C105.4 339.1 106.1 338.4 106.1 337.5 106.1 336.7 105.4 336 104.5 336 103.7 336 103 336.7 103 337.5 103 338.4 103.7 339.1 104.5 339.1ZM251.5 321.1C252.4 321.1 253.1 320.4 253.1 319.5 253.1 318.7 252.4 318 251.5 318 250.7 318 250 318.7 250 319.5 250 320.4 250.7 321.1 251.5 321.1ZM314.5 203.1C315.4 203.1 316.1 202.4 316.1 201.5 316.1 200.7 315.4 200 314.5 200 313.7 200 313 200.7 313 201.5 313 202.4 313.7 203.1 314.5 203.1ZM221.5 75.1C222.4 75.1 223.1 74.4 223.1 73.5 223.1 72.7 222.4 72 221.5 72 220.7 72 220 72.7 220 73.5 220 74.4 220.7 75.1 221.5 75.1ZM88.5 237.1C89.4 237.1 90.1 236.4 90.1 235.5 90.1 234.7 89.4 234 88.5 234 87.7 234 87 234.7 87 235.5 87 236.4 87.7 237.1 88.5 237.1ZM137.5 295.1C138.4 295.1 139.1 294.4 139.1 293.5 139.1 292.7 138.4 292 137.5 292 136.7 292 136 292.7 136 293.5 136 294.4 136.7 295.1 137.5 295.1ZM267.5 338.1C268.4 338.1 269.1 337.4 269.1 336.5 269.1 335.7 268.4 335 267.5 335 266.7 335 266 335.7 266 336.5 266 337.4 266.7 338.1 267.5 338.1ZM194.2 51.3C195.3 51.3 196.3 50.4 196.3 49.2 196.3 48 195.3 47 194.2 47 193 47 192 48 192 49.2 192 50.4 193 51.3 194.2 51.3ZM347.2 269.3C348.3 269.3 349.3 268.4 349.3 267.2 349.3 266 348.3 265 347.2 265 346 265 345 266 345 267.2 345 268.4 346 269.3 347.2 269.3ZM77.2 325.3C78.3 325.3 79.3 324.4 79.3 323.2 79.3 322 78.3 321 77.2 321 76 321 75 322 75 323.2 75 324.4 76 325.3 77.2 325.3ZM100.2 130.3C101.3 130.3 102.3 129.4 102.3 128.2 102.3 127 101.3 126 100.2 126 99 126 98 127 98 128.2 98 129.4 99 130.3 100.2 130.3ZM229.2 87.3C230.3 87.3 231.3 86.4 231.3 85.2 231.3 84 230.3 83 229.2 83 228 83 227 84 227 85.2 227 86.4 228 87.3 229.2 87.3ZM296.2 209.3C297.3 209.3 298.3 208.4 298.3 207.2 298.3 206 297.3 205 296.2 205 295 205 294 206 294 207.2 294 208.4 295 209.3 296.2 209.3ZM118.2 316.3C119.3 316.3 120.3 315.4 120.3 314.2 120.3 313 119.3 312 118.2 312 117 312 116 313 116 314.2 116 315.4 117 316.3 118.2 316.3ZM294 132C297.9 132 301 128.9 301 125 301 121.1 297.9 118 294 118 290.1 118 287 121.1 287 125 287 128.9 290.1 132 294 132ZM135.8 60.6C137.9 60.6 139.5 58.9 139.5 56.8 139.5 54.7 137.9 53 135.8 53 133.7 53 132 54.7 132 56.8 132 58.9 133.7 60.6 135.8 60.6ZM58.5 131C59.9 131 61 129.9 61 128.5 61 127.1 59.9 126 58.5 126 57.1 126 56 127.1 56 128.5 56 129.9 57.1 131 58.5 131ZM257.5 363C258.9 363 260 361.9 260 360.5 260 359.1 258.9 358 257.5 358 256.1 358 255 359.1 255 360.5 255 361.9 256.1 363 257.5 363ZM129.8 125.6C131.9 125.6 133.5 123.9 133.5 121.8 133.5 119.7 131.9 118 129.8 118 127.7 118 126 119.7 126 121.8 126 123.9 127.7 125.6 129.8 125.6ZM292.8 246.6C294.9 246.6 296.5 244.9 296.5 242.8 296.5 240.7 294.9 239 292.8 239 290.7 239 289 240.7 289 242.8 289 244.9 290.7 246.6 292.8 246.6ZM49.8 226.6C51.9 226.6 53.5 224.9 53.5 222.8 53.5 220.7 51.9 219 49.8 219 47.7 219 46 220.7 46 222.8 46 224.9 47.7 226.6 49.8 226.6ZM357.7 152.4C359.2 152.4 360.4 151.2 360.4 149.7 360.4 148.2 359.2 147 357.7 147 356.2 147 355 148.2 355 149.7 355 151.2 356.2 152.4 357.7 152.4ZM285.7 155.4C287.2 155.4 288.4 154.2 288.4 152.7 288.4 151.2 287.2 150 285.7 150 284.2 150 283 151.2 283 152.7 283 154.2 284.2 155.4 285.7 155.4ZM311.7 253.4C313.2 253.4 314.4 252.2 314.4 250.7 314.4 249.2 313.2 248 311.7 248 310.2 248 309 249.2 309 250.7 309 252.2 310.2 253.4 311.7 253.4ZM222.7 348.4C224.2 348.4 225.4 347.2 225.4 345.7 225.4 344.2 224.2 343 222.7 343 221.2 343 220 344.2 220 345.7 220 347.2 221.2 348.4 222.7 348.4ZM109.7 239.4C111.2 239.4 112.4 238.2 112.4 236.7 112.4 235.2 111.2 234 109.7 234 108.2 234 107 235.2 107 236.7 107 238.2 108.2 239.4 109.7 239.4ZM101.7 79.4C103.2 79.4 104.4 78.2 104.4 76.7 104.4 75.2 103.2 74 101.7 74 100.2 74 99 75.2 99 76.7 99 78.2 100.2 79.4 101.7 79.4ZM158.7 38.4C160.2 38.4 161.4 37.2 161.4 35.7 161.4 34.2 160.2 33 158.7 33 157.2 33 156 34.2 156 35.7 156 37.2 157.2 38.4 158.7 38.4ZM298.8 168.6C300.9 168.6 302.5 166.9 302.5 164.8 302.5 162.7 300.9 161 298.8 161 296.7 161 295 162.7 295 164.8 295 166.9 296.7 168.6 298.8 168.6ZM199.8 88.6C201.9 88.6 203.5 86.9 203.5 84.8 203.5 82.7 201.9 81 199.8 81 197.7 81 196 82.7 196 84.8 196 86.9 197.7 88.6 199.8 88.6ZM51.5 283C52.9 283 54 281.9 54 280.5 54 279.1 52.9 278 51.5 278 50.1 278 49 279.1 49 280.5 49 281.9 50.1 283 51.5 283ZM120.9 167.9C124.2 167.9 126.9 165.2 126.9 161.9 126.9 158.7 124.2 156 120.9 156 117.7 156 115 158.7 115 161.9 115 165.2 117.7 167.9 120.9 167.9ZM150.3 108.6C152.7 108.6 154.6 106.7 154.6 104.3 154.6 101.9 152.7 100 150.3 100 147.9 100 146 101.9 146 104.3 146 106.7 147.9 108.6 150.3 108.6ZM223.3 326.6C225.7 326.6 227.6 324.7 227.6 322.3 227.6 319.9 225.7 318 223.3 318 220.9 318 219 319.9 219 322.3 219 324.7 220.9 326.6 223.3 326.6ZM32.3 177.6C34.7 177.6 36.6 175.7 36.6 173.3 36.6 170.9 34.7 169 32.3 169 29.9 169 28 170.9 28 173.3 28 175.7 29.9 177.6 32.3 177.6ZM333.3 145.6C335.7 145.6 337.6 143.7 337.6 141.3 337.6 138.9 335.7 137 333.3 137 330.9 137 329 138.9 329 141.3 329 143.7 330.9 145.6 333.3 145.6ZM259.9 281.9C263.2 281.9 265.9 279.2 265.9 275.9 265.9 272.7 263.2 270 259.9 270 256.7 270 254 272.7 254 275.9 254 279.2 256.7 281.9 259.9 281.9ZM221.9 124.9C225.2 124.9 227.9 122.2 227.9 118.9 227.9 115.7 225.2 113 221.9 113 218.7 113 216 115.7 216 118.9 216 122.2 218.7 124.9 221.9 124.9ZM87 298C90.9 298 94 294.9 94 291 94 287.1 90.9 284 87 284 83.1 284 80 287.1 80 291 80 294.9 83.1 298 87 298ZM322 233C325.9 233 329 229.9 329 226 329 222.1 325.9 219 322 219 318.1 219 315 222.1 315 226 315 229.9 318.1 233 322 233ZM328.3 298.6C332.8 298.6 336.5 294.9 336.5 290.3 336.5 285.7 332.8 282 328.3 282 323.7 282 320 285.7 320 290.3 320 294.9 323.7 298.6 328.3 298.6ZM69.3 188.6C73.8 188.6 77.5 184.9 77.5 180.3 77.5 175.7 73.8 172 69.3 172 64.7 172 61 175.7 61 180.3 61 184.9 64.7 188.6 69.3 188.6ZM235.6 55.2C237.6 55.2 239.2 53.6 239.2 51.6 239.2 49.6 237.6 48 235.6 48 233.6 48 232 49.6 232 51.6 232 53.6 233.6 55.2 235.6 55.2ZM210.6 292.2C212.6 292.2 214.2 290.6 214.2 288.6 214.2 286.6 212.6 285 210.6 285 208.6 285 207 286.6 207 288.6 207 290.6 208.6 292.2 210.6 292.2ZM68.6 78.2C70.6 78.2 72.2 76.6 72.2 74.6 72.2 72.6 70.6 71 68.6 71 66.6 71 65 72.6 65 74.6 65 76.6 66.6 78.2 68.6 78.2ZM170.6 378.2C172.6 378.2 174.2 376.6 174.2 374.6 174.2 372.6 172.6 371 170.6 371 168.6 371 167 372.6 167 374.6 167 376.6 168.6 378.2 170.6 378.2ZM339 180C340.1 180 341 179.1 341 178 341 176.9 340.1 176 339 176 337.9 176 337 176.9 337 178 337 179.1 337.9 180 339 180ZM332 120C333.1 120 334 119.1 334 118 334 116.9 333.1 116 332 116 330.9 116 330 116.9 330 118 330 119.1 330.9 120 332 120ZM282 268.9C284.1 268.9 285.9 267.1 285.9 265 285.9 262.8 284.1 261 282 261 279.8 261 278 262.8 278 265 278 267.1 279.8 268.9 282 268.9ZM296 275C297.1 275 298 274.1 298 273 298 271.9 297.1 271 296 271 294.9 271 294 271.9 294 273 294 274.1 294.9 275 296 275ZM343 195C344.1 195 345 194.1 345 193 345 191.9 344.1 191 343 191 341.9 191 341 191.9 341 193 341 194.1 341.9 195 343 195ZM343 231C344.1 231 345 230.1 345 229 345 227.9 344.1 227 343 227 341.9 227 341 227.9 341 229 341 230.1 341.9 231 343 231ZM86 98C87.1 98 88 97.1 88 96 88 94.9 87.1 94 86 94 84.9 94 84 94.9 84 96 84 97.1 84.9 98 86 98ZM195 25C196.1 25 197 24.1 197 23 197 21.9 196.1 21 195 21 193.9 21 193 21.9 193 23 193 24.1 193.9 25 195 25ZM132 331C133.1 331 134 330.1 134 329 134 327.9 133.1 327 132 327 130.9 327 130 327.9 130 329 130 330.1 130.9 331 132 331ZM191.2 364.4C194.1 364.4 196.4 362.1 196.4 359.2 196.4 356.3 194.1 354 191.2 354 188.3 354 186 356.3 186 359.2 186 362.1 188.3 364.4 191.2 364.4ZM204.2 311.5C206 311.5 207.5 310 207.5 308.2 207.5 306.5 206 305 204.2 305 202.4 305 201 306.5 201 308.2 201 310 202.4 311.5 204.2 311.5ZM206 330C207.1 330 208 329.1 208 328 208 326.9 207.1 326 206 326 204.9 326 204 326.9 204 328 204 329.1 204.9 330 206 330ZM292 331C293.1 331 294 330.1 294 329 294 327.9 293.1 327 292 327 290.9 327 290 327.9 290 329 290 330.1 290.9 331 292 331ZM98 199C99.1 199 100 198.1 100 197 100 195.9 99.1 195 98 195 96.9 195 96 195.9 96 197 96 198.1 96.9 199 98 199ZM314 72.9C316.1 72.9 317.9 71.1 317.9 69 317.9 66.8 316.1 65 314 65 311.8 65 310 66.8 310 69 310 71.1 311.8 72.9 314 72.9ZM265.8 74.6C267.9 74.6 269.5 72.9 269.5 70.8 269.5 68.7 267.9 67 265.8 67 263.7 67 262 68.7 262 70.8 262 72.9 263.7 74.6 265.8 74.6ZM287 61C288.1 61 289 60.1 289 59 289 57.9 288.1 57 287 57 285.9 57 285 57.9 285 59 285 60.1 285.9 61 287 61Z\r\n                                                         ;\r\n                                                         M168.9 146.2C171.8 146.2 174.1 143.9 174.1 141 174.1 138.1 171.8 135.8 168.9 135.8 166 135.8 163.7 138.1 163.7 141 163.7 143.9 166 146.2 168.9 146.2ZM168.9 264.7C171.8 264.7 174.1 262.3 174.1 259.5 174.1 256.6 171.8 254.2 168.9 254.2 166 254.2 163.7 256.6 163.7 259.5 163.7 262.3 166 264.7 168.9 264.7ZM147.7 240.6C150.2 240.6 152.2 238.6 152.2 236.1 152.2 233.6 150.2 231.6 147.7 231.6 145.2 231.6 143.2 233.6 143.2 236.1 143.2 238.6 145.2 240.6 147.7 240.6ZM260.2 131.5C262.7 131.5 264.7 129.5 264.7 127 264.7 124.5 262.7 122.5 260.2 122.5 257.7 122.5 255.7 124.5 255.7 127 255.7 129.5 257.7 131.5 260.2 131.5ZM241.1 278.4C243.6 278.4 245.6 276.3 245.6 273.9 245.6 271.4 243.6 269.4 241.1 269.4 238.7 269.4 236.6 271.4 236.6 273.9 236.6 276.3 238.7 278.4 241.1 278.4ZM176.1 286.6C178.6 286.6 180.6 284.6 180.6 282.1 180.6 279.7 178.6 277.6 176.1 277.6 173.6 277.6 171.6 279.7 171.6 282.1 171.6 284.6 173.6 286.6 176.1 286.6ZM132.2 172.9C134.7 172.9 136.7 170.9 136.7 168.4 136.7 165.9 134.7 163.9 132.2 163.9 129.7 163.9 127.7 165.9 127.7 168.4 127.7 170.9 129.7 172.9 132.2 172.9ZM139.1 215.4C141.5 215.4 143.5 213.4 143.5 210.9 143.5 208.4 141.5 206.4 139.1 206.4 136.6 206.4 134.6 208.4 134.6 210.9 134.6 213.4 136.6 215.4 139.1 215.4ZM271.7 199.5C274.2 199.5 276.2 197.5 276.2 195 276.2 192.5 274.2 190.5 271.7 190.5 269.2 190.5 267.2 192.5 267.2 195 267.2 197.5 269.2 199.5 271.7 199.5ZM215.3 272.6C217.7 272.6 219.8 270.6 219.8 268.1 219.8 265.6 217.7 263.6 215.3 263.6 212.8 263.6 210.8 265.6 210.8 268.1 210.8 270.6 212.8 272.6 215.3 272.6ZM207.7 139.4C210.2 139.4 212.2 137.4 212.2 134.9 212.2 132.4 210.2 130.4 207.7 130.4 205.2 130.4 203.2 132.4 203.2 134.9 203.2 137.4 205.2 139.4 207.7 139.4ZM126.5 210.7C129.4 210.7 131.7 208.3 131.7 205.5 131.7 202.6 129.4 200.2 126.5 200.2 123.6 200.2 121.3 202.6 121.3 205.5 121.3 208.3 123.6 210.7 126.5 210.7ZM264.2 240.6C267 240.6 269.4 238.2 269.4 235.3 269.4 232.5 267 230.1 264.2 230.1 261.3 230.1 258.9 232.5 258.9 235.3 258.9 238.2 261.3 240.6 264.2 240.6ZM154.7 142.3C156.9 142.3 158.6 140.5 158.6 138.3 158.6 136.1 156.9 134.4 154.7 134.4 152.5 134.4 150.7 136.1 150.7 138.3 150.7 140.5 152.5 142.3 154.7 142.3ZM269.7 187.6C271.5 187.6 273 186.2 273 184.4 273 182.6 271.5 181.2 269.7 181.2 267.9 181.2 266.5 182.6 266.5 184.4 266.5 186.2 267.9 187.6 269.7 187.6ZM274.8 261.8C276.5 261.8 278 260.4 278 258.6 278 256.8 276.5 255.3 274.8 255.3 273 255.3 271.5 256.8 271.5 258.6 271.5 260.4 273 261.8 274.8 261.8ZM167.6 275.5C169.4 275.5 170.9 274 170.9 272.2 170.9 270.5 169.4 269 167.6 269 165.8 269 164.4 270.5 164.4 272.2 164.4 274 165.8 275.5 167.6 275.5ZM136.4 235.9C138.1 235.9 139.6 234.4 139.6 232.6 139.6 230.9 138.1 229.4 136.4 229.4 134.6 229.4 133.1 230.9 133.1 232.6 133.1 234.4 134.6 235.9 136.4 235.9ZM202.5 125.4C204.3 125.4 205.7 123.9 205.7 122.1 205.7 120.3 204.3 118.9 202.5 118.9 200.7 118.9 199.3 120.3 199.3 122.1 199.3 123.9 200.7 125.4 202.5 125.4ZM255 142.3C257.2 142.3 258.9 140.5 258.9 138.3 258.9 136.1 257.2 134.4 255 134.4 252.8 134.4 251 136.1 251 138.3 251 140.5 252.8 142.3 255 142.3ZM137.8 203.5C140 203.5 141.7 201.7 141.7 199.5 141.7 197.3 140 195.6 137.8 195.6 135.6 195.6 133.8 197.3 133.8 199.5 133.8 201.7 135.6 203.5 137.8 203.5ZM186 277.6C190.5 277.6 194.2 273.9 194.2 269.4 194.2 264.8 190.5 261.1 186 261.1 181.4 261.1 177.7 264.8 177.7 269.4 177.7 273.9 181.4 277.6 186 277.6ZM239.5 149.1C244.1 149.1 247.8 145.4 247.8 140.8 247.8 136.3 244.1 132.6 239.5 132.6 235 132.6 231.3 136.3 231.3 140.8 231.3 145.4 235 149.1 239.5 149.1ZM143.5 248.1C145.1 248.1 146.4 246.8 146.4 245.2 146.4 243.7 145.1 242.4 143.5 242.4 142 242.4 140.7 243.7 140.7 245.2 140.7 246.8 142 248.1 143.5 248.1ZM232 280.2C233.6 280.2 234.9 278.9 234.9 277.3 234.9 275.7 233.6 274.4 232 274.4 230.4 274.4 229.1 275.7 229.1 277.3 229.1 278.9 230.4 280.2 232 280.2ZM285.5 237C287.1 237 288.4 235.7 288.4 234.1 288.4 232.5 287.1 231.2 285.5 231.2 284 231.2 282.7 232.5 282.7 234.1 282.7 235.7 284 237 285.5 237ZM286.6 161C288.2 161 289.5 159.7 289.5 158.1 289.5 156.5 288.2 155.2 286.6 155.2 285 155.2 283.7 156.5 283.7 158.1 283.7 159.7 285 161 286.6 161ZM239.9 130C241.5 130 242.8 128.8 242.8 127.2 242.8 125.6 241.5 124.3 239.9 124.3 238.3 124.3 237 125.6 237 127.2 237 128.8 238.3 130 239.9 130ZM210.4 127.9C212 127.9 213.3 126.6 213.3 125 213.3 123.4 212 122.1 210.4 122.1 208.8 122.1 207.5 123.4 207.5 125 207.5 126.6 208.8 127.9 210.4 127.9ZM152.9 158.5C154.5 158.5 155.8 157.2 155.8 155.6 155.8 154 154.5 152.7 152.9 152.7 151.3 152.7 150 154 150 155.6 150 157.2 151.3 158.5 152.9 158.5ZM165.8 283.8C167.4 283.8 168.7 282.5 168.7 280.9 168.7 279.3 167.4 278 165.8 278 164.2 278 163 279.3 163 280.9 163 282.5 164.2 283.8 165.8 283.8ZM101.2 162.4C102.3 162.4 103.3 161.5 103.3 160.3 103.3 159.1 102.3 158.1 101.2 158.1 100 158.1 99 159.1 99 160.3 99 161.5 100 162.4 101.2 162.4ZM307.5 219.1C308.3 219.1 309 218.4 309 217.5 309 216.7 308.3 216 307.5 216 306.6 216 305.9 216.7 305.9 217.5 305.9 218.4 306.6 219.1 307.5 219.1ZM133.1 100.1C134 100.1 134.7 99.4 134.7 98.5 134.7 97.7 134 97 133.1 97 132.3 97 131.6 97.7 131.6 98.5 131.6 99.4 132.3 100.1 133.1 100.1ZM131.3 300.1C132.2 300.1 132.9 299.4 132.9 298.5 132.9 297.7 132.2 297 131.3 297 130.5 297 129.8 297.7 129.8 298.5 129.8 299.4 130.5 300.1 131.3 300.1ZM218 277.7C218.8 277.7 219.5 277.1 219.5 276.2 219.5 275.4 218.8 274.7 218 274.7 217.1 274.7 216.4 275.4 216.4 276.2 216.4 277.1 217.1 277.7 218 277.7ZM279.8 210.3C280.6 210.3 281.3 209.6 281.3 208.8 281.3 207.9 280.6 207.3 279.8 207.3 278.9 207.3 278.3 207.9 278.3 208.8 278.3 209.6 278.9 210.3 279.8 210.3ZM219.8 114.2C220.6 114.2 221.3 113.5 221.3 112.7 221.3 111.8 220.6 111.1 219.8 111.1 218.9 111.1 218.2 111.8 218.2 112.7 218.2 113.5 218.9 114.2 219.8 114.2ZM122.3 217.9C123.2 217.9 123.9 217.2 123.9 216.3 123.9 215.5 123.2 214.8 122.3 214.8 121.5 214.8 120.8 215.5 120.8 216.3 120.8 217.2 121.5 217.9 122.3 217.9ZM159 261.1C159.9 261.1 160.5 260.4 160.5 259.5 160.5 258.7 159.9 258 159 258 158.2 258 157.5 258.7 157.5 259.5 157.5 260.4 158.2 261.1 159 261.1ZM247.4 301.5C248.3 301.5 249 300.8 249 300 249 299.1 248.3 298.4 247.4 298.4 246.6 298.4 245.9 299.1 245.9 300 245.9 300.8 246.6 301.5 247.4 301.5ZM209 118.9C210.2 118.9 211.1 117.9 211.1 116.7 211.1 115.5 210.2 114.6 209 114.6 207.8 114.6 206.8 115.5 206.8 116.7 206.8 117.9 207.8 118.9 209 118.9ZM296.7 250.3C297.9 250.3 298.8 249.3 298.8 248.1 298.8 246.9 297.9 246 296.7 246 295.5 246 294.5 246.9 294.5 248.1 294.5 249.3 295.5 250.3 296.7 250.3ZM144.6 255C145.8 255 146.8 254 146.8 252.8 146.8 251.6 145.8 250.6 144.6 250.6 143.4 250.6 142.5 251.6 142.5 252.8 142.5 254 143.4 255 144.6 255ZM136 160.3C137.2 160.3 138.2 159.3 138.2 158.1 138.2 156.9 137.2 156 136 156 134.8 156 133.8 156.9 133.8 158.1 133.8 159.3 134.8 160.3 136 160.3ZM218 127.5C219.1 127.5 220.1 126.6 220.1 125.4 220.1 124.2 219.1 123.2 218 123.2 216.8 123.2 215.8 124.2 215.8 125.4 215.8 126.6 216.8 127.5 218 127.5ZM269.7 208.5C270.9 208.5 271.9 207.6 271.9 206.4 271.9 205.2 270.9 204.2 269.7 204.2 268.5 204.2 267.6 205.2 267.6 206.4 267.6 207.6 268.5 208.5 269.7 208.5ZM147.1 267.6C148.3 267.6 149.3 266.6 149.3 265.4 149.3 264.2 148.3 263.2 147.1 263.2 146 263.2 145 264.2 145 265.4 145 266.6 146 267.6 147.1 267.6ZM256.2 161.4C260.1 161.4 263.3 158.2 263.3 154.3 263.3 150.5 260.1 147.3 256.2 147.3 252.4 147.3 249.2 150.5 249.2 154.3 249.2 158.2 252.4 161.4 256.2 161.4ZM165.7 122.5C167.7 122.5 169.4 120.8 169.4 118.7 169.4 116.6 167.7 114.9 165.7 114.9 163.6 114.9 161.9 116.6 161.9 118.7 161.9 120.8 163.6 122.5 165.7 122.5ZM123.2 167.3C124.6 167.3 125.8 166.2 125.8 164.8 125.8 163.4 124.6 162.3 123.2 162.3 121.8 162.3 120.7 163.4 120.7 164.8 120.7 166.2 121.8 167.3 123.2 167.3ZM242.2 291.9C243.6 291.9 244.7 290.7 244.7 289.3 244.7 288 243.6 286.8 242.2 286.8 240.8 286.8 239.7 288 239.7 289.3 239.7 290.7 240.8 291.9 242.2 291.9ZM160.1 152.9C162.2 152.9 163.9 151.2 163.9 149.1 163.9 147 162.2 145.3 160.1 145.3 158 145.3 156.3 147 156.3 149.1 156.3 151.2 158 152.9 160.1 152.9ZM275.8 237.9C277.9 237.9 279.6 236.2 279.6 234.1 279.6 232 277.9 230.3 275.8 230.3 273.7 230.3 272.1 232 272.1 234.1 272.1 236.2 273.7 237.9 275.8 237.9ZM113.7 217.3C115.8 217.3 117.5 215.7 117.5 213.6 117.5 211.5 115.8 209.8 113.7 209.8 111.6 209.8 109.9 211.5 109.9 213.6 109.9 215.7 111.6 217.3 113.7 217.3ZM284.8 175.9C286.3 175.9 287.5 174.7 287.5 173.2 287.5 171.8 286.3 170.5 284.8 170.5 283.3 170.5 282.1 171.8 282.1 173.2 282.1 174.7 283.3 175.9 284.8 175.9ZM261.5 168.4C262.9 168.4 264.2 167.2 264.2 165.7 264.2 164.2 262.9 163 261.5 163 260 163 258.8 164.2 258.8 165.7 258.8 167.2 260 168.4 261.5 168.4ZM281.6 244.7C283.1 244.7 284.3 243.5 284.3 242 284.3 240.5 283.1 239.3 281.6 239.3 280.1 239.3 278.9 240.5 278.9 242 278.9 243.5 280.1 244.7 281.6 244.7ZM194.6 296.5C196.1 296.5 197.3 295.3 197.3 293.8 197.3 292.3 196.1 291.1 194.6 291.1 193.1 291.1 191.9 292.3 191.9 293.8 191.9 295.3 193.1 296.5 194.6 296.5ZM130.2 218.4C131.7 218.4 132.9 217.2 132.9 215.7 132.9 214.2 131.7 213 130.2 213 128.8 213 127.6 214.2 127.6 215.7 127.6 217.2 128.8 218.4 130.2 218.4ZM153.6 130.2C155.1 130.2 156.3 129 156.3 127.5 156.3 126 155.1 124.8 153.6 124.8 152.1 124.8 150.9 126 150.9 127.5 150.9 129 152.1 130.2 153.6 130.2ZM184.2 115.5C185.7 115.5 186.9 114.3 186.9 112.8 186.9 111.3 185.7 110.1 184.2 110.1 182.7 110.1 181.5 111.3 181.5 112.8 181.5 114.3 182.7 115.5 184.2 115.5ZM266.1 178.5C268.2 178.5 269.9 176.8 269.9 174.7 269.9 172.6 268.2 170.9 266.1 170.9 264 170.9 262.4 172.6 262.4 174.7 262.4 176.8 264 178.5 266.1 178.5ZM196 139.2C198.1 139.2 199.8 137.5 199.8 135.4 199.8 133.4 198.1 131.7 196 131.7 193.9 131.7 192.3 133.4 192.3 135.4 192.3 137.5 193.9 139.2 196 139.2ZM124.9 262.2C126.2 262.2 127.4 261 127.4 259.6 127.4 258.3 126.2 257.1 124.9 257.1 123.5 257.1 122.3 258.3 122.3 259.6 122.3 261 123.5 262.2 124.9 262.2ZM145.2 171.1C148.4 171.1 151.1 168.4 151.1 165.1 151.1 161.9 148.4 159.2 145.2 159.2 141.9 159.2 139.2 161.9 139.2 165.1 139.2 168.4 141.9 171.1 145.2 171.1ZM163.3 134C165.7 134 167.6 132.1 167.6 129.7 167.6 127.3 165.7 125.4 163.3 125.4 160.9 125.4 159 127.3 159 129.7 159 132.1 160.9 134 163.3 134ZM209 282.7C211.4 282.7 213.3 280.7 213.3 278.4 213.3 276 211.4 274 209 274 206.6 274 204.7 276 204.7 278.4 204.7 280.7 206.6 282.7 209 282.7ZM122.3 192C124.7 192 126.7 190 126.7 187.6 126.7 185.3 124.7 183.3 122.3 183.3 120 183.3 118 185.3 118 187.6 118 190 120 192 122.3 192ZM274.4 172.2C276.8 172.2 278.7 170.2 278.7 167.8 278.7 165.5 276.8 163.5 274.4 163.5 272 163.5 270.1 165.5 270.1 167.8 270.1 170.2 272 172.2 274.4 172.2ZM229.6 271.5C232.9 271.5 235.6 268.9 235.6 265.6 235.6 262.3 232.9 259.6 229.6 259.6 226.4 259.6 223.7 262.3 223.7 265.6 223.7 268.9 226.4 271.5 229.6 271.5ZM222.1 141.9C225.4 141.9 228 139.3 228 136 228 132.7 225.4 130 222.1 130 218.8 130 216.2 132.7 216.2 136 216.2 139.3 218.8 141.9 222.1 141.9ZM155.2 255.7C159.1 255.7 162.2 252.5 162.2 248.7 162.2 244.8 159.1 241.6 155.2 241.6 151.4 241.6 148.2 244.8 148.2 248.7 148.2 252.5 151.4 255.7 155.2 255.7ZM272.8 226.9C276.6 226.9 279.8 223.7 279.8 219.9 279.8 216 276.6 212.8 272.8 212.8 268.9 212.8 265.8 216 265.8 219.9 265.8 223.7 268.9 226.9 272.8 226.9ZM247.4 267.6C252 267.6 255.7 263.9 255.7 259.3 255.7 254.7 252 251 247.4 251 242.9 251 239.2 254.7 239.2 259.3 239.2 263.9 242.9 267.6 247.4 267.6ZM136.7 191.6C141.3 191.6 145 187.9 145 183.3 145 178.8 141.3 175 136.7 175 132.2 175 128.5 178.8 128.5 183.3 128.5 187.9 132.2 191.6 136.7 191.6ZM234.1 118.9C236.1 118.9 237.7 117.3 237.7 115.3 237.7 113.3 236.1 111.7 234.1 111.7 232.1 111.7 230.5 113.3 230.5 115.3 230.5 117.3 232.1 118.9 234.1 118.9ZM201.8 272.6C203.8 272.6 205.4 271 205.4 269 205.4 267 203.8 265.4 201.8 265.4 199.8 265.4 198.2 267 198.2 269 198.2 271 199.8 272.6 201.8 272.6ZM119.5 136.9C121.4 136.9 123.1 135.3 123.1 133.3 123.1 131.3 121.4 129.7 119.5 129.7 117.5 129.7 115.9 131.3 115.9 133.3 115.9 135.3 117.5 136.9 119.5 136.9ZM175.9 305C177.9 305 179.5 303.4 179.5 301.4 179.5 299.4 177.9 297.8 175.9 297.8 173.9 297.8 172.3 299.4 172.3 301.4 172.3 303.4 173.9 305 175.9 305ZM273.5 179.9C274.6 179.9 275.5 179 275.5 177.9 275.5 176.8 274.6 175.9 273.5 175.9 272.4 175.9 271.5 176.8 271.5 177.9 271.5 179 272.4 179.9 273.5 179.9ZM263.8 145.7C264.9 145.7 265.8 144.8 265.8 143.7 265.8 142.6 264.9 141.7 263.8 141.7 262.7 141.7 261.8 142.6 261.8 143.7 261.8 144.8 262.7 145.7 263.8 145.7ZM272.6 247.8C274.8 247.8 276.6 246 276.6 243.8 276.6 241.6 274.8 239.8 272.6 239.8 270.4 239.8 268.6 241.6 268.6 243.8 268.6 246 270.4 247.8 272.6 247.8ZM281.4 251.2C282.5 251.2 283.4 250.3 283.4 249.2 283.4 248.1 282.5 247.2 281.4 247.2 280.3 247.2 279.4 248.1 279.4 249.2 279.4 250.3 280.3 251.2 281.4 251.2ZM295.2 202.9C296.3 202.9 297.2 202.1 297.2 201 297.2 199.9 296.3 199 295.2 199 294.2 199 293.3 199.9 293.3 201 293.3 202.1 294.2 202.9 295.2 202.9ZM282.3 227.8C283.4 227.8 284.3 226.9 284.3 225.8 284.3 224.7 283.4 223.8 282.3 223.8 281.2 223.8 280.3 224.7 280.3 225.8 280.3 226.9 281.2 227.8 282.3 227.8ZM150.2 148.6C151.3 148.6 152.2 147.7 152.2 146.6 152.2 145.5 151.3 144.6 150.2 144.6 149.1 144.6 148.2 145.5 148.2 146.6 148.2 147.7 149.1 148.6 150.2 148.6ZM196.2 104.5C197.3 104.5 198.2 103.6 198.2 102.5 198.2 101.4 197.3 100.5 196.2 100.5 195.1 100.5 194.2 101.4 194.2 102.5 194.2 103.6 195.1 104.5 196.2 104.5ZM160.8 268.5C161.9 268.5 162.8 267.6 162.8 266.5 162.8 265.4 161.9 264.5 160.8 264.5 159.7 264.5 158.8 265.4 158.8 266.5 158.8 267.6 159.7 268.5 160.8 268.5ZM188.2 291.2C191.1 291.2 193.4 288.9 193.4 286 193.4 283.1 191.1 280.8 188.2 280.8 185.4 280.8 183 283.1 183 286 183 288.9 185.4 291.2 188.2 291.2ZM198.2 281.2C200 281.2 201.5 279.7 201.5 278 201.5 276.2 200 274.7 198.2 274.7 196.5 274.7 195 276.2 195 278 195 279.7 196.5 281.2 198.2 281.2ZM198.9 288.9C200 288.9 200.9 288 200.9 286.9 200.9 285.8 200 284.9 198.9 284.9 197.8 284.9 196.9 285.8 196.9 286.9 196.9 288 197.8 288.9 198.9 288.9ZM247.8 293.3C248.9 293.3 249.8 292.4 249.8 291.3 249.8 290.2 248.9 289.3 247.8 289.3 246.7 289.3 245.8 290.2 245.8 291.3 245.8 292.4 246.7 293.3 247.8 293.3ZM129.2 196.8C130.3 196.8 131.1 195.9 131.1 194.8 131.1 193.8 130.3 192.9 129.2 192.9 128.1 192.9 127.2 193.8 127.2 194.8 127.2 195.9 128.1 196.8 129.2 196.8ZM273 118.2C275.1 118.2 276.9 116.4 276.9 114.2 276.9 112 275.1 110.2 273 110.2 270.8 110.2 269 112 269 114.2 269 116.4 270.8 118.2 273 118.2ZM248.9 132C251 132 252.6 130.3 252.6 128.2 252.6 126.2 251 124.5 248.9 124.5 246.8 124.5 245.1 126.2 245.1 128.2 245.1 130.3 246.8 132 248.9 132ZM264.3 111.5C265.4 111.5 266.3 110.6 266.3 109.5 266.3 108.4 265.4 107.5 264.3 107.5 263.2 107.5 262.4 108.4 262.4 109.5 262.4 110.6 263.2 111.5 264.3 111.5Z\r\n                                                         \"\r\n      \r\n                                     />\r\n      \r\n                </path>\r\n      \r\n            </g>\r\n        </svg>\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/components/_templates/gravity.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gravity-svg {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n}\n.gravity-svg svg {\n  display: block;\n  margin: 0 auto;\n  max-width: 100vw;\n  max-height: 100vw;\n  -webkit-animation: rotate 20s infinite linear;\n  animation: rotate 20s infinite linear;\n}\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_templates/gravity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GravityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GravityComponent = /** @class */ (function () {
    function GravityComponent() {
    }
    GravityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'gravity-template',
            template: __webpack_require__("../../../../../src/app/components/_templates/gravity.html"),
            styles: [__webpack_require__("../../../../../src/app/components/_templates/gravity.less")]
        })
    ], GravityComponent);
    return GravityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/_templates/header.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-header fixed-header\" #mceHeader>\r\n    <div class=\"nav-container\">\r\n        <!-- Logo -->\r\n        <div class=\"navbar-header\">\r\n            <a href=\"/\" class=\"navbar-brand\"><img src=\"assets/images/logos/logoW_text.png\" class=\"logo\" alt=\"Mind Control Empire Logo\"></a>\r\n        </div>\r\n\r\n        <!-- Full Menu -->\r\n        <div class=\"navbar-items full\">\r\n            <div class=\"nav-link\" *ngFor=\"let item of navitems\"><a [href]=\"item.url\">{{item.name}}</a></div>\r\n            <!-- Social Media -->\r\n            <div class=\"social-links-container\">\r\n                <a href=\"\" class=\"social-link youtube\"><i fa [name]=\"'youtube-play'\"></i></a>\r\n                <a href=\"\" class=\"social-link instagram\"><i fa [name]=\"'instagram'\"></i></a>\r\n                <a href=\"\" class=\"social-link facebook\"><i fa [name]=\"'facebook'\"></i></a>\r\n                <a href=\"\" target=\"_blank\" class=\"social-link twitter\"><i fa [name]=\"'twitter'\"></i></a>\r\n            </div>            \r\n        </div>\r\n\r\n        <!-- Sidebar Menu -->\r\n        <div class=\"navbar-items sidebar\">            \r\n            <div class=\"nav-link\"><a (click)=\"toggleSideNav()\"><i class=\"material-icons\">&#xE5D2;</i></a></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/_templates/header.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-header {\n  width: 100%;\n  color: #ffffff;\n  min-height: 90px;\n  transition: 0.4s all ease;\n}\n.nav-header.fixed-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n.nav-header.dark {\n  background: rgba(0, 0, 0, 0.5);\n}\n.nav-header.dark .nav-container .navbar-items .nav-link a:hover,\n.nav-header.dark .nav-container .navbar-items .nav-link a:focus {\n  color: #b82601;\n}\n.nav-header.dark .nav-container .navbar-items .social-links-container .social-link.youtube:hover {\n  color: #ff0000;\n}\n.nav-header.dark .nav-container .navbar-items .social-links-container .social-link.instagram:hover {\n  color: #c32aa3;\n}\n.nav-header.dark .nav-container .navbar-items .social-links-container .social-link.facebook:hover {\n  color: #3b5998;\n}\n.nav-header.dark .nav-container .navbar-items .social-links-container .social-link.twitter:hover {\n  color: #00b6f1;\n}\n.nav-header .nav-container {\n  padding: 5px 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  max-width: 1350px;\n  margin: 0px auto;\n}\n@media (max-width: 770px) {\n  .nav-header .nav-container {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n}\n.nav-header .nav-container .navbar-header {\n  max-width: 80px;\n  position: relative;\n  display: inline-block;\n  margin-right: 30px;\n}\n.nav-header .nav-container .navbar-header .navbar-brand {\n  padding: 5px;\n  position: relative;\n  overflow: hidden;\n  width: 75px;\n}\n.nav-header .nav-container .navbar-header .navbar-brand img {\n  width: 100%;\n}\n.nav-header .nav-container .navbar-items.full {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n}\n@media (max-width: 770px) {\n  .nav-header .nav-container .navbar-items.full {\n    display: none;\n  }\n}\n.nav-header .nav-container .navbar-items.sidebar {\n  display: none;\n}\n@media (max-width: 770px) {\n  .nav-header .nav-container .navbar-items.sidebar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.nav-header .nav-container .navbar-items .nav-link {\n  font-size: 1.3rem;\n  padding: 0px 10px;\n  position: relative;\n  margin: auto 0px;\n  transition: 0.5s all ease;\n  cursor: pointer;\n}\n.nav-header .nav-container .navbar-items .nav-link:hover {\n  color: #b82601;\n}\n.nav-header .nav-container .navbar-items .nav-link + .nav-link {\n  margin-left: 30px;\n}\n.nav-header .nav-container .navbar-items .nav-link a {\n  color: #ffffff;\n  transition: 0.5s all ease;\n}\n.nav-header .nav-container .navbar-items .nav-link a:hover,\n.nav-header .nav-container .navbar-items .nav-link a:focus {\n  color: #000000;\n  text-decoration: none;\n}\n.nav-header .nav-container .navbar-items .social-links-container {\n  margin: auto 0px auto 50px;\n}\n.nav-header .nav-container .navbar-items .social-links-container .social-link {\n  color: #ffffff;\n  transition: 0.5s all ease;\n}\n.nav-header .nav-container .navbar-items .social-links-container .social-link i {\n  border-radius: 50%;\n  font-size: 1.4rem;\n}\n.nav-header .nav-container .navbar-items .social-links-container .social-link + .social-link {\n  margin-left: 20px;\n}\n.nav-header .nav-container .navbar-items .social-links-container .social-link:hover {\n  color: #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_templates/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(renderer) {
        this.renderer = renderer;
        this.toggleEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HeaderComponent.prototype.toggleSideNav = function () {
        this.toggleEvent.next();
    };
    HeaderComponent.prototype.onWindowScroll = function ($event) {
        if (this.el != undefined) {
            if (window.pageYOffset > 20) {
                if (!this.el.nativeElement.classList.contains('dark')) {
                    console.log("add Dark Class");
                    this.el.nativeElement.classList.add("dark");
                }
            }
            else {
                if (this.el.nativeElement.classList.contains('dark')) {
                    console.log('remove Dark Class');
                    this.el.nativeElement.classList.remove("dark");
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], HeaderComponent.prototype, "navitems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mceHeader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HeaderComponent.prototype, "el", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app-header',
            template: __webpack_require__("../../../../../src/app/components/_templates/header.html"),
            styles: [__webpack_require__("../../../../../src/app/components/_templates/header.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-body innerpage empire\">    \r\n    <div class=\"inner-banner\">\r\n        <div class=\"banner-background\">\r\n            <div class=\"color-overlay\"></div>\r\n            <div class=\"back-img\" [ngStyle]=\"{ 'background-image':'url('+backimg+')'}\"></div>\r\n        </div>\r\n        <h1 class=\"banner-title\">The Empire</h1>        \r\n    </div>\r\n\r\n    <div class=\"inner-section\">\r\n        <div class=\"inner-container\">\r\n            <div class=\"staff-member\" *ngFor=\"let member of staff\">\r\n                <div class=\"img-container\">\r\n                    <img class=\"member-img\" [src]=\"member.img\">\r\n                    <img class=\"member-trail-img\" [src]=\"member.img\">\r\n                </div>\r\n                <div class=\"member-info\">\r\n                    <div class=\"member-name\">{{ member.name }}</div>\r\n                    <div class=\"member-title\">{{ member.title }}</div>\r\n                    <div class=\"divider\"></div>\r\n                    <div class=\"member-social-container\">\r\n                        <a *ngFor=\"let social of member.social\" [href]=\"returnSocialUrl(social)\" target=\"_blank\" class=\"social-link {{social.site}}\"><i fa [name]=\"social.site\"></i></a>                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/about/about.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".empire .inner-section .inner-container {\n  padding: 30px 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n@media (max-width: 770px) {\n  .empire .inner-section .inner-container {\n    display: block;\n    padding: 30px 4%;\n  }\n}\n.empire .inner-section .inner-container .staff-member {\n  position: relative;\n  padding: 40px;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n@media (max-width: 770px) {\n  .empire .inner-section .inner-container .staff-member {\n    padding: 40px 20px;\n  }\n}\n.empire .inner-section .inner-container .staff-member .img-container {\n  position: relative;\n  height: 350px;\n  overflow: hidden;\n  text-align: center;\n}\n.empire .inner-section .inner-container .staff-member .img-container .member-img {\n  height: 100%;\n  position: relative;\n  z-index: 2;\n}\n.empire .inner-section .inner-container .staff-member .img-container .member-trail-img {\n  z-index: 1;\n  height: 400%;\n  width: 400%;\n  position: absolute;\n  top: -200%;\n  left: -200%;\n  -webkit-filter: blur(20px);\n  filter: blur(20px);\n}\n.empire .inner-section .inner-container .staff-member .member-info {\n  padding: 10px;\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-name {\n  font-size: 2.5rem;\n  color: #000000;\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-title {\n  margin-left: 10px;\n  display: block;\n  color: #b82601;\n}\n.empire .inner-section .inner-container .staff-member .member-info .divider {\n  height: 5px;\n  width: 100%;\n  display: block;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-social-container .social-link {\n  display: inline-block;\n  padding: 0px 5px;\n  color: #000000;\n  font-size: 30px;\n  transition: 0.5s all ease;\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-social-container .social-link.instagram:hover {\n  color: #c32aa3;\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-social-container .social-link.facebook:hover {\n  color: #3b5998;\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-social-container .social-link.twitter:hover {\n  color: #00b6f1;\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-social-container .social-link.spotify:hover {\n  color: #1db954;\n}\n.empire .inner-section .inner-container .staff-member .member-info .member-social-container .social-link.soundcloud:hover {\n  color: #ff5500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datamodels_artistItem__ = __webpack_require__("../../../../../src/app/datamodels/artistItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datamodels_socialItem__ = __webpack_require__("../../../../../src/app/datamodels/socialItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Data Models */


/* Service */

var AboutComponent = /** @class */ (function () {
    function AboutComponent(mceService) {
        this.mceService = mceService;
        this.backimg = "assets/images/site/empire.jpg";
        this.staff = [
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_artistItem__["a" /* ArtistItem */]('G', 'CEO', 'assets/images/site/empire/GField.jpg', [new __WEBPACK_IMPORTED_MODULE_2__datamodels_socialItem__["a" /* SocialItem */]('twitter', 'Sir_CEO'), new __WEBPACK_IMPORTED_MODULE_2__datamodels_socialItem__["a" /* SocialItem */]('instagram', 'CEO_KING_FIELDMOB')]),
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_artistItem__["a" /* ArtistItem */]('Dwayne', 'Videographer & Photographer', 'assets/images/site/empire/Dwayne.jpg', [new __WEBPACK_IMPORTED_MODULE_2__datamodels_socialItem__["a" /* SocialItem */]('twitter', 'DWJproduction'), new __WEBPACK_IMPORTED_MODULE_2__datamodels_socialItem__["a" /* SocialItem */]('instagram', 'DWJproduction')]),
            new __WEBPACK_IMPORTED_MODULE_1__datamodels_artistItem__["a" /* ArtistItem */]('Drty Warhol', 'Producer', 'assets/images/site/empire/Fields.jpg', [new __WEBPACK_IMPORTED_MODULE_2__datamodels_socialItem__["a" /* SocialItem */]('twitter', 'inspiredmindz'), new __WEBPACK_IMPORTED_MODULE_2__datamodels_socialItem__["a" /* SocialItem */]('soundcloud', 'inspiredmindz')])
        ];
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent.prototype.returnSocialUrl = function (social) {
        return this.mceService.socialLink(social.site, social.handle);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/about/about.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_mceService__["a" /* MCEService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/artists/artistDetails.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-body innerpage artistDetails\" *ngIf=\"artist != undefined\">    \r\n    <div class=\"inner-banner\">\r\n        <div class=\"banner-background\">\r\n            <div class=\"color-overlay\"></div>\r\n            <div class=\"back-img\" [ngStyle]=\"{ 'background-image':'url('+artist.bannerImg+')'}\"></div>\r\n        </div>\r\n        <h1 class=\"banner-title\">{{artist.name}}</h1>\r\n        <p class=\"banner-text\">{{artist.bio}}</p>        \r\n    </div>\r\n    <!-- Artist Image Gallery -->\r\n    <div class=\"gallery-section\">\r\n        <div class=\"gallery-ctrl prev\" (mouseenter)=\"scrollActivate(-1, 'artistGallery')\" (mouseleave)=\"scrollDeactivate()\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n        <div class=\"gallery-ctrl next\" (mouseenter)=\"scrollActivate(1, 'artistGallery')\" (mouseleave)=\"scrollDeactivate()\"><i class=\"material-icons\">&#xE5CC;</i></div>                \r\n        <div class=\"gallery-containers\" id=\"artistGallery\">\r\n            <div class=\"img-container\" *ngFor=\"let img of artist.addImg\">\r\n                <img [src]=\"img\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"artist-body\">        \r\n        <div class=\"body-info\">\r\n            <!-- Artist Social Media -->\r\n            <div class=\"artist-media\">                \r\n                <a *ngFor=\"let social of artist.social\" [href]=\"returnSocialUrl(social)\" target=\"_blank\" class=\"social-link reverse {{social.site}}\"><div class=\"link-container\"><i fa [name]=\"social.site\"></i></div></a>\r\n            </div>\r\n            <!-- Content Bio -->\r\n            <p class=\"content-bio\">\r\n                Check out the latest music, mixtapes, and video releases from {{ artist.name }} along with any future events.  \r\n                Return to this page for everything {{artist.name}} and much more.\r\n            </p>\r\n        </div>\r\n\r\n        <!-- Music Releases -->\r\n        <div class=\"artist-music content-carousel\">\r\n            <h1 class=\"section-title\">Music</h1>\r\n            <ngx-carousel [inputs]=\"musicCarousel\" class=\"mc-carousels tile-carousel c4 music-carousel\">        \r\n                <ngx-item *ngFor=\"let song of music\" NgxCarouselItem>\r\n                    <div class=\"song-page\">\r\n                        <div class=\"song-img\"><img [src]=\"checkimg(song.img)\"></div>\r\n                        <div class=\"song-info\">\r\n                            <div class=\"song-title\">{{song.title}}</div>\r\n                            <div class=\"song-link\">\r\n                                <a [href]=\"song.url\" target=\"_blank\">\r\n                                    <div class=\"link-container {{ getIcon(song.type) }}\">\r\n                                        <i fa [name]=\"getIcon(song.type)\"></i>\r\n                                        <div class=\"link-txt\">{{ getTypeString(song.type) }}</div>\r\n                                    </div>\r\n                                </a>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </ngx-item>\r\n\r\n                <div NgxCarouselPrev class=\"carousel-ctrl prev c4\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n                <div NgxCarouselNext class=\"carousel-ctrl next c4\"><i class=\"material-icons\">&#xE5CC;</i></div>\r\n            </ngx-carousel>            \r\n        </div>\r\n\r\n        <!-- MixTape Release -->\r\n        <div class=\"mixtape-music content-carousel\">\r\n            <h1 class=\"section-title\">Mixtapes</h1>\r\n            <ngx-carousel [inputs]=\"mixtapeCarousel\" class=\"mc-carousels tile-carousel c4 mixtape-carousel\">        \r\n                <ngx-item *ngFor=\"let mix of mixtapes\" NgxCarouselItem>\r\n                    <div class=\"mix-page\">\r\n                        <div class=\"mix-content\"><iframe [src]=\"mix.url | safe\" frameborder=\"0\" height=\"450px\" allowtransparency='true'></iframe></div>\r\n                        <div class=\"mix-info\">\r\n                            <div class=\"mix-title\">{{mix.title}}</div>                                                     \r\n                        </div>\r\n                    </div>\r\n                </ngx-item>\r\n\r\n                <div NgxCarouselPrev class=\"carousel-ctrl prev c4\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n                <div NgxCarouselNext class=\"carousel-ctrl next c4\"><i class=\"material-icons\">&#xE5CC;</i></div>\r\n            </ngx-carousel>            \r\n        </div>\r\n\r\n        <!-- Video Release -->\r\n        <div class=\"video-music content-carousel\">\r\n            <h1 class=\"section-title\">Videos</h1>\r\n            <ngx-carousel [inputs]=\"videoCarousel\" class=\"mc-carousels tile-carousel c4 video-carousel\">        \r\n                <ngx-item *ngFor=\"let video of artist.videos\" NgxCarouselItem>\r\n                    <div class=\"video-page\">\r\n                        <div class=\"video-content\"><iframe [src]=\"returnTypeUrl('video', video.urlcode) | safe\" frameborder=\"0\" allowfullscreen></iframe></div>\r\n                        <div class=\"video-info\">\r\n                            <div class=\"video-title\">{{video.title}}</div>                                                     \r\n                        </div>\r\n                    </div>\r\n                </ngx-item>\r\n\r\n                <div NgxCarouselPrev class=\"carousel-ctrl prev c4\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n                <div NgxCarouselNext class=\"carousel-ctrl next c4\"><i class=\"material-icons\">&#xE5CC;</i></div>\r\n            </ngx-carousel>            \r\n        </div>\r\n\r\n        <!-- Events -->\r\n        <div class=\"events content-carousel\">\r\n            <h1 class=\"section-title\">Events</h1>\r\n            <div class=\"event-container\">\r\n                <div class=\"artist-eventimg\"><img [src]=\"artist.specialImg\"></div>\r\n                <div class=\"mc-carousels c4 event-carousel\">        \r\n                    <div class=\"mc-item {{ checkDate(event.date) }}\" *ngFor=\"let event of events\">\r\n                        <div class=\"event-page\">\r\n                            <div class=\"event-date\">\r\n                                <div class=\"day\">{{event.date | date: 'dd'}}</div>\r\n                                <div class=\"month\">{{event.date | date: 'MMM'}}</div>\r\n                                <div class=\"time\">{{event.date | date: 'h a'}}</div>\r\n                            </div>\r\n                            <div class=\"event-info\">\r\n                                <div class=\"event-title\">{{event.name}}</div>\r\n                                <div class=\"event-details\">                                \r\n                                    <span class=\"location\">{{event.location}}</span>\r\n                                </div>                                                    \r\n                            </div>\r\n                        </div>\r\n                    </div>                 \r\n                </div> \r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/artists/artistdetails.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Service */

var ArtistDetailsComponent = /** @class */ (function () {
    function ArtistDetailsComponent(mceService, route) {
        this.mceService = mceService;
        this.route = route;
        this.backimg = "assets/images/site/empire.jpg";
        this.artist = null;
        this.music = [];
        this.mixtapes = [];
        this.events = [];
        this.intervalId = null;
        this.mobileCheck = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
    }
    /* Get Events Data */
    ArtistDetailsComponent.prototype.getEvents = function (name) {
        /*const iDate = new Date(Date.now());
        iDate.setDate(iDate.getDate() -30);
        iDate.toString()*/
        var _this = this;
        this.mceService.getEventsTotal(5, name).subscribe(function (res) {
            if (res.error == null) {
                _this.events = res.response.events;
            }
            else {
                console.log(res.error);
            }
        });
    };
    /* Check expiration date */
    ArtistDetailsComponent.prototype.checkDate = function (date) {
        var status = "";
        var iDate = new Date(Date.now());
        var cDate = new Date(date);
        if (iDate > cDate) {
            status = "expired";
        }
        return status;
    };
    /* Get Artist Data */
    ArtistDetailsComponent.prototype.getArtist = function (name) {
        var _this = this;
        this.mceService.getArtist(name).subscribe(function (res) {
            if (res.error == null) {
                _this.artist = res.response.artist;
                // split music types
                for (var i = 0; i < _this.artist.releases.length; i++) {
                    var release = _this.artist.releases[i];
                    if (release.type.includes('mixtape')) {
                        _this.mixtapes.push(release);
                    }
                    else {
                        _this.music.push(release);
                    }
                }
                if (_this.artist != null && _this.artist.name != null) {
                    _this.getEvents(_this.artist.name);
                }
            }
            else {
                console.log(res.error);
            }
        });
    };
    /* Horizontal Scroll Controls */
    ArtistDetailsComponent.prototype.scrollActivate = function (direction, container) {
        var containerObj = document.getElementById(container);
        var scrollSpace = 15;
        if (containerObj != null && !this.mobileCheck.test(navigator.userAgent)) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(function () {
                var scrollLoc = containerObj.scrollLeft + (scrollSpace * direction);
                containerObj.scrollLeft = scrollLoc;
            }, 25);
        }
    };
    ArtistDetailsComponent.prototype.scrollDeactivate = function () {
        clearInterval(this.intervalId);
    };
    /* Service Methods  */
    ArtistDetailsComponent.prototype.returnSocialUrl = function (social) {
        return this.mceService.socialLink(social.site, social.handle);
    };
    ArtistDetailsComponent.prototype.checkimg = function (imgUrl) {
        return this.mceService.checkLocalImg(imgUrl);
    };
    ArtistDetailsComponent.prototype.getIcon = function (type) {
        return this.mceService.getMusicIcon(type);
    };
    ArtistDetailsComponent.prototype.returnTypeUrl = function (type, urlcode) {
        return this.mceService.returnTypeUrl(type, urlcode);
    };
    ArtistDetailsComponent.prototype.getTypeString = function (type) {
        var retVal = "";
        if (type != undefined) {
            var typeStr = type.split("-");
            retVal = typeStr[0];
        }
        return retVal;
    };
    /* On Initialize */
    ArtistDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['name'] !== undefined) {
                var name_1 = params['name'];
                _this.getArtist(name_1);
            }
            else {
                console.log("Invalid Artist Name");
            }
        });
        this.musicCarousel = {
            grid: { xs: 2, sm: 3, md: 3, lg: 3, all: 0 },
            slide: 3, speed: 0, interval: 0,
            point: { visible: true },
            load: 3, touch: true, loop: false, custom: 'banner'
        };
        this.mixtapeCarousel = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 3, speed: 0, interval: 0,
            point: { visible: true },
            load: 1, touch: true, loop: false, custom: 'banner'
        };
        this.videoCarousel = {
            grid: { xs: 1, sm: 2, md: 2, lg: 2, all: 0 },
            slide: 3, speed: 0, interval: 0,
            point: { visible: true },
            load: 2, touch: true, loop: false, custom: 'banner'
        };
    };
    ArtistDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/artists/artistDetails.html"),
            styles: [__webpack_require__("../../../../../src/app/components/artists/artists.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_mceService__["a" /* MCEService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ArtistDetailsComponent);
    return ArtistDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/artists/artists.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-body innerpage artists\">  \r\n    <div class=\"inner-banner\">\r\n        <div class=\"banner-background\">\r\n            <div class=\"color-overlay\"></div>\r\n            <div class=\"back-img\" [ngStyle]=\"{ 'background-image':'url('+backimg+')'}\"></div>\r\n        </div>\r\n        <h1 class=\"banner-title\">Artists</h1>        \r\n    </div>\r\n\r\n    <div class=\"artist-list-container\">\r\n        <a [href]=\"returnArtistUrl(artist.name)\" class=\"artist-item\" *ngFor=\"let artist of allArtists\">\r\n            <img class=\"artist-img\" [src]=\"artist.specialImg\">\r\n            <div class=\"img-cover\"></div>\r\n            <div class=\"artist-name\">{{ artist.name }}</div>\r\n        </a>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/artists/artists.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".artists .artist-list-container {\n  padding: 0px 50px 30px;\n  margin-top: -75px;\n}\n.artists .artist-list-container .artist-item {\n  position: relative;\n  display: block;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  border: 1px solid #3c3c3c;\n  overflow: hidden;\n  height: 300px;\n}\n.artists .artist-list-container .artist-item:hover .img-cover {\n  opacity: 0.8;\n}\n.artists .artist-list-container .artist-item .artist-img {\n  position: absolute;\n  z-index: 0;\n  bottom: -70%;\n  left: 0;\n  min-height: 100%;\n  min-width: 100%;\n  -webkit-filter: grayscale(70%);\n          filter: grayscale(70%);\n}\n.artists .artist-list-container .artist-item .img-cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: linear-gradient(to right, #3c3c3c, #c94b4b 80%);\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  transition: 0.5s all ease;\n}\n.artists .artist-list-container .artist-item .artist-name {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 2;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 3rem;\n  font-weight: bold;\n  color: #ffffff;\n}\n.artistDetails .inner-banner {\n  min-height: 280px;\n}\n.artistDetails .inner-banner .banner-background .back-img {\n  height: 100%;\n  background-position: 0px 0px;\n  background-attachment: initial;\n}\n.artistDetails .gallery-section {\n  position: relative;\n}\n.artistDetails .gallery-section .gallery-ctrl {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 50px;\n  background-color: #ffffff;\n  text-align: center;\n  color: #000000;\n  opacity: 0.3;\n  transition: 0.5s all ease;\n  z-index: 5;\n  cursor: pointer;\n}\n@media (max-width: 770px) {\n  .artistDetails .gallery-section .gallery-ctrl {\n    display: none !important;\n  }\n}\n.artistDetails .gallery-section .gallery-ctrl.prev {\n  left: 0;\n}\n.artistDetails .gallery-section .gallery-ctrl.next {\n  right: 0;\n}\n.artistDetails .gallery-section .gallery-ctrl:hover {\n  opacity: 0.8;\n}\n.artistDetails .gallery-section .gallery-ctrl i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 50px;\n}\n.artistDetails .gallery-section .gallery-containers {\n  height: 250px;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n}\n@media (max-width: 770px) {\n  .artistDetails .gallery-section .gallery-containers {\n    overflow-x: auto;\n  }\n}\n.artistDetails .gallery-section .gallery-containers .img-container {\n  height: 100%;\n  display: inline-block;\n}\n.artistDetails .gallery-section .gallery-containers .img-container img {\n  height: 100%;\n}\n.artistDetails .artist-body .body-info {\n  padding: 50px;\n}\n.artistDetails .artist-body .body-info .content-bio {\n  font-size: 1.7rem;\n}\n.artistDetails .artist-body .event-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.artistDetails .artist-body .content-carousel {\n  margin: 20px 0px;\n  padding: 30px 50px;\n}\n.artistDetails .artist-body .content-carousel .section-title {\n  color: #4b134f;\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.artistDetails .artist-body .content-carousel.artist-music,\n.artistDetails .artist-body .content-carousel.video-music {\n  background: rgba(75, 19, 79, 0.5);\n}\n@media (max-width: 770px) {\n  .artistDetails .artist-body .content-carousel {\n    padding: 30px 5%;\n  }\n}\n.artistDetails .artist-body .content-carousel .artist-eventimg {\n  width: 45%;\n  display: inline-block;\n  margin-top: 20px;\n}\n@media (max-width: 770px) {\n  .artistDetails .artist-body .content-carousel .artist-eventimg {\n    width: 100%;\n  }\n}\n.artistDetails .artist-body .content-carousel .artist-eventimg img {\n  width: 100%;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  margin-top: 20px;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page {\n  text-align: center;\n  padding: 10px;\n}\n@media (max-width: 770px) {\n  .artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page {\n    overflow: hidden;\n  }\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page .song-img {\n  height: 200px;\n  margin-bottom: 20px;\n}\n@media (max-width: 770px) {\n  .artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page .song-img {\n    height: initial;\n  }\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page .song-img img {\n  height: 100%;\n}\n@media (max-width: 770px) {\n  .artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page .song-img img {\n    width: 100%;\n    height: initial;\n  }\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page .song-info {\n  color: #4b134f;\n  text-align: center;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.music-carousel .song-page .song-info .song-title {\n  color: #4b134f;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.mixtape-carousel .mix-page {\n  text-align: center;\n  padding: 10px;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.mixtape-carousel .mix-page .mix-content {\n  position: relative;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.mixtape-carousel .mix-page .mix-content iframe {\n  min-width: 70%;\n}\n@media (max-width: 770px) {\n  .artistDetails .artist-body .content-carousel .mc-carousels.mixtape-carousel .mix-page .mix-content iframe {\n    min-width: initial;\n    width: 100%;\n  }\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.mixtape-carousel .mix-page .mix-info {\n  color: #4b134f;\n  text-align: center;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.mixtape-carousel .mix-page .mix-info .mix-title {\n  color: #4b134f;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.video-carousel .video-page {\n  text-align: center;\n  padding: 10px;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.video-carousel .video-page .video-content {\n  position: relative;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.video-carousel .video-page .video-content iframe {\n  height: 200px;\n}\n@media (max-width: 770px) {\n  .artistDetails .artist-body .content-carousel .mc-carousels.video-carousel .video-page .video-content iframe {\n    height: initial;\n    width: 100%;\n  }\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.video-carousel .video-page .video-info {\n  color: #4b134f;\n  text-align: center;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.video-carousel .video-page .video-info .video-title {\n  color: #4b134f;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel {\n  display: inline-block;\n  padding: 0px 30px;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 7px;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item + .mc-item {\n  padding-top: 7px;\n  border-top: 1px solid rgba(50, 50, 50, 0.2);\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item.expired .event-date .month {\n  background: #3c3c3c !important;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item.expired .event-info .event-title {\n  color: #3c3c3c !important;\n  text-decoration: line-through;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item .event-page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item .event-page .event-date {\n  min-width: 35px;\n  text-align: center;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item .event-page .event-date .day {\n  font-size: 1.5rem;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item .event-page .event-date .month {\n  background: #4b134f;\n  color: #ffffff;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item .event-page .event-info {\n  margin-left: 10px;\n  padding: 0px 5px;\n}\n.artistDetails .artist-body .content-carousel .mc-carousels.event-carousel .mc-item .event-page .event-info .event-title {\n  font-size: 1.5rem;\n  color: #4b134f;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artists/artists.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Service */

var ArtistsComponent = /** @class */ (function () {
    function ArtistsComponent(mceService) {
        this.mceService = mceService;
        this.backimg = "assets/images/site/people.jpg";
        this.allArtists = [];
    }
    ArtistsComponent.prototype.getArtists = function () {
        var _this = this;
        this.mceService.getAllArtists().subscribe(function (res) {
            if (res.error == null) {
                _this.allArtists = res.response.artists;
            }
            else {
                console.log(res.error);
            }
        });
    };
    ArtistsComponent.prototype.returnArtistUrl = function (name) {
        return this.mceService.artistUrl(name);
    };
    ArtistsComponent.prototype.ngOnInit = function () {
        this.getArtists();
    };
    ArtistsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/artists/artists.html"),
            styles: [__webpack_require__("../../../../../src/app/components/artists/artists.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_mceService__["a" /* MCEService */]])
    ], ArtistsComponent);
    return ArtistsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/events/events.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-body innerpage events\">    \r\n    <div class=\"inner-banner\">\r\n        <div class=\"banner-background\">\r\n            <div class=\"color-overlay\"></div>\r\n            <div class=\"back-img\" [ngStyle]=\"{ 'background-image':'url('+backimg+')'}\"></div>\r\n        </div>\r\n        <h1 class=\"banner-title\">Events</h1>        \r\n    </div>\r\n\r\n    <div class=\"inner-section\">\r\n        <div class=\"inner-back\" [ngStyle]=\"{ 'background-image':'url('+coverimg+')'}\"></div>\r\n        <div class=\"event-container\">\r\n            <div class=\"event-header\">\r\n                <p>Mind Control Empire Events</p>\r\n            </div>\r\n            <div class=\"event-list\">        \r\n                <div class=\"mc-item {{ checkDate(event.date) }}\" *ngFor=\"let event of events; let i = index\">\r\n                    <div class=\"date-year\" *ngIf=\"displayYear(i)\">{{event.date | date: 'yyyy'}}</div>\r\n                    <div class=\"event-page\">\r\n                        <div class=\"event-date\">\r\n                            <div class=\"day\">{{event.date | date: 'dd'}}</div>\r\n                            <div class=\"month\">{{event.date | date: 'MMM'}}</div>\r\n                            <div class=\"time\">{{event.date | date: 'h a'}}</div>\r\n                        </div>\r\n                        <div class=\"event-info\">\r\n                            <div class=\"event-title\">{{event.name}}</div>\r\n                            <div class=\"event-details\">                                \r\n                                <span class=\"location\">{{event.location}}</span>\r\n                            </div>\r\n                            <div class=\"artist-name\">{{event.artistname}}</div>                                                    \r\n                        </div>\r\n                    </div>\r\n                </div>                 \r\n            </div> \r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/events/events.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".events .inner-section {\n  position: relative;\n  text-align: center;\n  padding: 50px;\n}\n@media (max-width: 770px) {\n  .events .inner-section {\n    padding: 50px 7%;\n  }\n}\n.events .inner-section .inner-back {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-y: bottom;\n  background-position-x: center;\n  opacity: 0.5;\n}\n.events .inner-section .event-container {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n  max-width: 70%;\n  min-width: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n@media (max-width: 770px) {\n  .events .inner-section .event-container {\n    max-width: inherit;\n  }\n}\n.events .inner-section .event-container .event-header {\n  background-color: #4b134f;\n  color: #ffffff;\n  padding: 20px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n}\n.events .inner-section .event-container .event-list {\n  padding: 10px 30px 0px;\n  height: 500px;\n  overflow-y: auto;\n  background: #ffffff;\n}\n@media (max-width: 770px) {\n  .events .inner-section .event-container .event-list {\n    height: 350px;\n  }\n}\n.events .inner-section .event-container .event-list .mc-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 7px;\n}\n.events .inner-section .event-container .event-list .mc-item + .mc-item {\n  padding-top: 7px;\n  border-top: 1px solid rgba(50, 50, 50, 0.2);\n}\n.events .inner-section .event-container .event-list .mc-item.expired .event-date .month {\n  background: #3c3c3c !important;\n}\n.events .inner-section .event-container .event-list .mc-item.expired .event-info .event-title {\n  color: #3c3c3c !important;\n  text-decoration: line-through;\n}\n.events .inner-section .event-container .event-list .mc-item .date-year {\n  text-align: center;\n  display: block;\n  width: 100%;\n  background: linear-gradient(to right, #4b134f, #c94b4b);\n  color: #ffffff;\n  font-size: 1.2rem;\n}\n.events .inner-section .event-container .event-list .mc-item .event-page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.events .inner-section .event-container .event-list .mc-item .event-page .event-date {\n  min-width: 35px;\n  text-align: center;\n}\n.events .inner-section .event-container .event-list .mc-item .event-page .event-date .day {\n  font-size: 1.5rem;\n}\n.events .inner-section .event-container .event-list .mc-item .event-page .event-date .month {\n  background: #4b134f;\n  color: #ffffff;\n}\n.events .inner-section .event-container .event-list .mc-item .event-page .event-info {\n  margin-left: 10px;\n  padding: 0px 5px;\n  text-align: left;\n}\n.events .inner-section .event-container .event-list .mc-item .event-page .event-info .event-title {\n  font-size: 1.5rem;\n  color: #4b134f;\n}\n.events .inner-section .event-container .event-list .mc-item .event-page .event-info .artist-name {\n  color: #c94b4b;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/events/events.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Service */

var EventsComponent = /** @class */ (function () {
    function EventsComponent(mceService) {
        this.mceService = mceService;
        this.backimg = "assets/images/site/events.jpg";
        this.coverimg = "assets/images/site/chords.jpg";
        this.events = [];
    }
    /* Check expiration date */
    EventsComponent.prototype.checkDate = function (date) {
        var status = "";
        var iDate = new Date(Date.now());
        var cDate = new Date(date);
        if (iDate > cDate) {
            status = "expired";
        }
        return status;
    };
    /* Get Events Data */
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.mceService.getEventsByDate("ALL", "ALL").subscribe(function (res) {
            if (res.error == null) {
                _this.events = res.response.events;
            }
            else {
                console.log(res.error);
            }
        });
    };
    EventsComponent.prototype.displayYear = function (index) {
        var display = false;
        var currentEvent = this.events[index];
        var prevEvent = null;
        if (index == 0) {
            display = true;
        }
        else {
            prevEvent = this.events[index - 1];
            var dc = new Date(currentEvent.date);
            var dp = new Date(prevEvent.date);
            if (dp.getFullYear() > dc.getFullYear()) {
                display = true;
            }
        }
        return display;
    };
    EventsComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/events/events.html"),
            styles: [__webpack_require__("../../../../../src/app/components/events/events.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_mceService__["a" /* MCEService */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-body home\">    \r\n    <div class=\"carousel-container home-section header-section dark-gradient\">\r\n        <div class=\"carousel-background\">\r\n            <div class=\"color-overlay\"></div>\r\n            <gravity-template></gravity-template>\r\n        </div>\r\n\r\n        <ngx-carousel [inputs]=\"carouselOne\" (carouselLoad)=\"loadCarousel('home', $event)\" class=\"mc-carousels home-carousel\">\r\n            \r\n            <ngx-item *ngFor=\"let item of carouselItems\" NgxCarouselItem>\r\n                <div class=\"carousel-page\">\r\n                    <div class=\"carousel-card\">\r\n                        <img src=\"{{item.img}}\" class=\"carousel-card-img\" alt=\"\">\r\n                        <img src=\"{{item.img}}\" class=\"special-card-img\" alt=\"\">\r\n                        <div class=\"card-caption\">\r\n                            <h1>{{item.title}}</h1>\r\n                            <p>{{item.text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ngx-item>\r\n\r\n            <ngx-item NgxCarouselItem>\r\n                <div class=\"carousel-page empty-page\"></div>\r\n            </ngx-item>\r\n\r\n            <div NgxCarouselPrev class=\"carousel-ctrl prev\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n            <div NgxCarouselNext class=\"carousel-ctrl next\"><i class=\"material-icons\">&#xE5CC;</i></div>\r\n        </ngx-carousel>\r\n    </div>\r\n\r\n    <!-- Spotlight Videos -->\r\n    <div class=\"home-section level2\">\r\n        <h1 class=\"section-title\">Spotlight Videos</h1>\r\n        <ngx-carousel [inputs]=\"carouselTwo\" class=\"mc-carousels tile-carousel c1 spotlight-carousel\">        \r\n            <ngx-item *ngFor=\"let spotlight of spotlightVideos\" NgxCarouselItem>\r\n                <div class=\"spotlight-page\">\r\n                    <div class=\"spotlight-video\"><iframe [src]=\"returnTypeUrl('video', spotlight.urlcode) | safe\" frameborder=\"0\" allowfullscreen></iframe></div>\r\n                    <div class=\"spotlight-info\">\r\n                        <div class=\"spotlight-title\">{{spotlight.title}}</div>\r\n                        <div class=\"spotlight-artist\">{{spotlight.artist}}</div>\r\n                    </div>\r\n                </div>\r\n            </ngx-item>\r\n\r\n            <div NgxCarouselPrev class=\"carousel-ctrl prev c1\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n            <div NgxCarouselNext class=\"carousel-ctrl next c1\"><i class=\"material-icons\">&#xE5CC;</i></div>\r\n        </ngx-carousel>\r\n    </div>\r\n\r\n    <!-- Word On The Street -->\r\n    <div class=\"news-section\">        \r\n        <div class=\"news-ctrl prev\" (click)=\"horizontalScroll(-1, 'wordOnTheStreet')\" (mouseenter)=\"scrollActivate(-1, 'wordOnTheStreet')\" (mouseleave)=\"scrollDeactivate()\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n        <div class=\"news-ctrl next\" (click)=\"horizontalScroll(1, 'wordOnTheStreet')\" (mouseenter)=\"scrollActivate(1, 'wordOnTheStreet')\" (mouseleave)=\"scrollDeactivate()\"><i class=\"material-icons\">&#xE5CC;</i></div>        \r\n        <div class=\"news-container\" id=\"wordOnTheStreet\">            \r\n            <a [href]=\"returnNewsUrl(news.title)\" class=\"news-item-container\" *ngFor=\"let news of newsItems\">\r\n                <div class=\"color-overlay\"></div>\r\n                <img [src]=\"checkimg(news.img)\" class=\"back-img main-img\">\r\n\r\n                <div class=\"news-item-content\">\r\n                    <div class=\"section-type\">News</div>\r\n                    <div class=\"item-title\">{{news.title}}</div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Featured Artist -->\r\n    <div class=\"featured-artist-section\" *ngIf=\"featuredArtist != null\">\r\n        <h1 class=\"section-title\">Featured Artist</h1>\r\n\r\n        <div class=\"feature-banner\">\r\n            <div class=\"color-overlay\"></div>\r\n            <img src=\"{{featuredArtist.bannerImg}}\" class=\"banner-img\">\r\n        </div>\r\n        \r\n        <div class=\"artist-content\">\r\n            <h2 class=\"artist-name\">{{ featuredArtist.name }}</h2>\r\n            <div class=\"artist-media\">                \r\n                <a *ngFor=\"let social of featuredArtist.social\" [href]=\"returnSocialUrl(social) | safe\" target=\"_blank\" class=\"social-link {{social.site}}\"><div class=\"link-container\"><i fa [name]=\"social.site\"></i></div></a>\r\n            </div>\r\n            <div class=\"artist-bio\">{{ featuredArtist.bio }} Get to know {{featuredArtist.name}} and see where you can check em out next.</div>\r\n\r\n            <a [href]=\"returnArtistUrl(featuredArtist.name)\" class=\"more-info-btn\">More Info</a>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Follow Us -->\r\n    <div class=\"follow-us-section\">\r\n        <h1 class=\"section-title\">Follow Mind Control Empire</h1>\r\n\r\n        <!-- Social Media -->\r\n        <div class=\"social-links-container\">\r\n            <a href=\"\" target=\"_blank\" class=\"social-link youtube\"><i fa [name]=\"'youtube-play'\"></i></a>\r\n            <a href=\"\" target=\"_blank\" class=\"social-link instagram\"><i fa [name]=\"'instagram'\"></i></a>\r\n            <a href=\"\" target=\"_blank\" class=\"social-link facebook\"><i fa [name]=\"'facebook'\"></i></a>\r\n            <a href=\"\" target=\"_blank\" target=\"_blank\" class=\"social-link twitter\"><i fa [name]=\"'twitter'\"></i></a>\r\n        </div>  \r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home .carousel-container {\n  height: 100vh;\n  position: relative;\n}\n.home .carousel-container .carousel-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 0;\n  overflow: hidden;\n  width: 100%;\n}\n.home .carousel-container .carousel-background .color-overlay {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  background: linear-gradient(to right, #4b134f, #c94b4b);\n}\n.home .home-section.level2 {\n  padding: 40px 10px;\n}\n.home .home-section .section-title {\n  color: #b82601;\n  text-align: center;\n}\n.home .home-section .mc-carousels {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n}\n.home .home-section .mc-carousels.home-carousel .carousel-page {\n  height: 100%;\n  width: 100%;\n  padding: 50px 20% 10px;\n}\n@media (max-width: 770px) {\n  .home .home-section .mc-carousels.home-carousel .carousel-page {\n    padding: 50px 5% 10px;\n  }\n}\n.home .home-section .mc-carousels.home-carousel .carousel-page .carousel-card {\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  border-radius: 10px;\n  position: relative;\n  text-align: center;\n  overflow: hidden;\n}\n.home .home-section .mc-carousels.home-carousel .carousel-page .carousel-card .carousel-card-img {\n  position: relative;\n  height: 100%;\n}\n@media (max-width: 770px) {\n  .home .home-section .mc-carousels.home-carousel .carousel-page .carousel-card .carousel-card-img {\n    height: initial;\n    width: 100%;\n    -webkit-transform: translateY(-40%);\n            transform: translateY(-40%);\n    top: 40%;\n  }\n}\n.home .home-section .mc-carousels.home-carousel .carousel-page .carousel-card .special-card-img {\n  z-index: -1;\n  height: 400%;\n  width: 400%;\n  position: absolute;\n  top: -200%;\n  left: -200%;\n  -webkit-filter: blur(20px);\n  filter: blur(20px);\n}\n.home .home-section .mc-carousels.home-carousel .carousel-page .carousel-card .card-caption {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  color: #ffffff;\n  padding: 10px;\n  text-align: center;\n}\n@media (max-width: 770px) {\n  .home .home-section .mc-carousels.home-carousel .carousel-page .carousel-card .card-caption {\n    padding: 10px 20px;\n  }\n}\n.home .home-section .mc-carousels.spotlight-carousel {\n  margin-top: 20px;\n}\n.home .home-section .mc-carousels.spotlight-carousel .spotlight-page {\n  text-align: center;\n  padding: 10px;\n}\n.home .home-section .mc-carousels.spotlight-carousel .spotlight-page .spotlight-video {\n  height: 200px;\n  margin-bottom: 20px;\n}\n.home .home-section .mc-carousels.spotlight-carousel .spotlight-page .spotlight-video iframe {\n  height: 100%;\n  width: 100%;\n}\n.home .home-section .mc-carousels.spotlight-carousel .spotlight-page .spotlight-info {\n  color: #b82601;\n  text-align: center;\n}\n.home .home-section .mc-carousels.spotlight-carousel .spotlight-page .spotlight-info .spotlight-title {\n  color: #b82601;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.home .home-section .mc-carousels.spotlight-carousel .spotlight-page .spotlight-info .spotlight-artist {\n  font-size: 1.1rem;\n}\n.home .news-section {\n  position: relative;\n  background-color: #000000;\n}\n.home .news-section .news-ctrl {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 50px;\n  background-color: #ffffff;\n  text-align: center;\n  color: #000000;\n  opacity: 0.3;\n  transition: 0.5s all ease;\n  z-index: 5;\n  cursor: pointer;\n}\n@media (max-width: 770px) {\n  .home .news-section .news-ctrl {\n    display: none !important;\n  }\n}\n.home .news-section .news-ctrl.prev {\n  left: 0;\n}\n.home .news-section .news-ctrl.next {\n  right: 0;\n}\n.home .news-section .news-ctrl:hover {\n  opacity: 0.8;\n}\n.home .news-section .news-ctrl i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 50px;\n}\n.home .news-section .news-container {\n  position: relative;\n  z-index: 3;\n  height: 350px;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n@media (max-width: 770px) {\n  .home .news-section .news-container {\n    height: 250px;\n    overflow-x: auto;\n  }\n}\n.home .news-section .news-container .news-item-container {\n  width: 450px;\n  height: 100%;\n  margin-left: -75px;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  transform: skew(20deg);\n  -webkit-transform: skew(20deg);\n  -moz-transform: skew(20deg);\n  -o-transform: skew(20deg);\n}\n@media (max-width: 770px) {\n  .home .news-section .news-container .news-item-container {\n    width: 200px;\n    margin-left: 0px;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n.home .news-section .news-container .news-item-container:hover .color-overlay {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.home .news-section .news-container .news-item-container + .news-item-container {\n  margin-left: 0px;\n}\n.home .news-section .news-container .news-item-container .color-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  transition: 0.5s all ease;\n}\n.home .news-section .news-container .news-item-container .back-img {\n  position: absolute;\n  opacity: 0.7;\n}\n.home .news-section .news-container .news-item-container .back-img.main-img {\n  z-index: 1;\n  top: 0;\n  left: -75px;\n  width: calc(100% + 150px);\n  height: 100%;\n  transform: skew(-20deg);\n  -webkit-transform: skew(-20deg);\n  -moz-transform: skew(-20deg);\n  -o-transform: skew(-20deg);\n}\n@media (max-width: 770px) {\n  .home .news-section .news-container .news-item-container .back-img.main-img {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n.home .news-section .news-container .news-item-container .back-img.special-img {\n  z-index: 0;\n  height: 200%;\n  width: 200%;\n  top: -50%;\n  left: -50%;\n  -webkit-filter: blur(20px);\n  filter: blur(20px);\n  transform: skew(-20deg);\n  -webkit-transform: skew(-20deg);\n  -moz-transform: skew(-20deg);\n  -o-transform: skew(-20deg);\n}\n.home .news-section .news-container .news-item-container .news-item-content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: skew(-20deg);\n  -webkit-transform: skew(-20deg);\n  -moz-transform: skew(-20deg);\n  -o-transform: skew(-20deg);\n  z-index: 5;\n  text-align: center;\n  padding: 20px 10px;\n  width: 100%;\n  white-space: normal;\n}\n.home .news-section .news-container .news-item-container .news-item-content .section-type {\n  color: #ffcc00;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n.home .news-section .news-container .news-item-container .news-item-content .item-title {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 1.7rem;\n}\n@media (max-width: 770px) {\n  .home .news-section .news-container .news-item-container .news-item-content {\n    -webkit-transform: none;\n            transform: none;\n  }\n  .home .news-section .news-container .news-item-container .news-item-content .item-title {\n    font-size: 1rem;\n  }\n}\n.home .featured-artist-section {\n  position: relative;\n  width: 100%;\n  min-height: 500px;\n  padding: 20px 30px;\n  background: #3c3c3c;\n}\n@media (max-width: 770px) {\n  .home .featured-artist-section {\n    min-height: initial;\n  }\n}\n.home .featured-artist-section .section-title {\n  position: relative;\n  font-weight: bold;\n  color: #ffcc00;\n  text-align: center;\n  z-index: 5;\n}\n.home .featured-artist-section .feature-banner {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n  top: 0;\n  left: 0;\n}\n.home .featured-artist-section .feature-banner .color-overlay {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.home .featured-artist-section .feature-banner .banner-img {\n  width: 100%;\n  height: 100%;\n}\n.home .featured-artist-section .artist-content {\n  position: relative;\n  z-index: 2;\n  margin-top: 50px;\n  max-width: 50%;\n}\n.home .featured-artist-section .artist-content .artist-name {\n  color: #ffffff;\n  margin-bottom: 20px;\n}\n.home .featured-artist-section .artist-content .artist-bio {\n  color: #ffffff;\n  font-size: 1.5rem;\n}\n@media (max-width: 770px) {\n  .home .featured-artist-section .artist-content .artist-bio {\n    font-size: 1rem;\n  }\n}\n.home .featured-artist-section .artist-content .more-info-btn {\n  padding: 10px 30px;\n  border: 3px solid #ffcc00;\n  color: #ffcc00;\n  transition: 0.5s all ease;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 50px 0px 10px;\n  cursor: pointer;\n}\n.home .featured-artist-section .artist-content .more-info-btn:hover {\n  color: #000000;\n  background: #ffcc00;\n}\n@media (max-width: 770px) {\n  .home .featured-artist-section .artist-content .more-info-btn {\n    font-size: 1rem;\n  }\n}\n.home .follow-us-section {\n  padding: 50px 30px;\n}\n.home .follow-us-section .section-title {\n  font-weight: bold;\n  color: #000000;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.home .follow-us-section .social-links-container {\n  text-align: center;\n  padding: 10px;\n}\n.home .follow-us-section .social-links-container .social-link {\n  color: #000000;\n  transition: 0.5s all ease;\n}\n.home .follow-us-section .social-links-container .social-link i {\n  border-radius: 50%;\n  font-size: 30px;\n}\n.home .follow-us-section .social-links-container .social-link + .social-link {\n  margin-left: 20px;\n}\n.home .follow-us-section .social-links-container .social-link.youtube:hover {\n  color: #ff0000;\n}\n.home .follow-us-section .social-links-container .social-link.instagram:hover {\n  color: #c32aa3;\n}\n.home .follow-us-section .social-links-container .social-link.facebook:hover {\n  color: #3b5998;\n}\n.home .follow-us-section .social-links-container .social-link.twitter:hover {\n  color: #00b6f1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Service */

var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

var HomeComponent = /** @class */ (function () {
    function HomeComponent(mceService) {
        this.mceService = mceService;
        this.intervalId = null;
        this.mobileCheck = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
        this.carouselItems = [];
        this.spotlightVideos = [];
        this.newsItems = [];
        this.featuredArtist = null;
    }
    HomeComponent.prototype.getSpotlightItems = function () {
        var _this = this;
        var allSpotlights = null;
        this.mceService.getSpotlightContent()
            .subscribe(function (res) {
            if (res.error == null) {
                _this.carouselItems = res.response.news;
                _this.spotlightVideos = res.response.videos;
                _this.newsItems = res.response.recentNews;
                var tst = 0;
            }
            else {
                console.log(res.error);
            }
        }, function (error) {
            console.log("Error retrieving spotlight data: %s", error.message);
        });
        this.mceService.getArtist("Gandhi Ali").subscribe(function (res) {
            if (res.error == null) {
                _this.featuredArtist = res.response.artist;
            }
            else {
                console.log(res.error);
            }
        });
    };
    HomeComponent.prototype.returnTypeUrl = function (type, urlcode) {
        return this.mceService.returnTypeUrl(type, urlcode);
    };
    HomeComponent.prototype.checkimg = function (imgUrl) {
        return this.mceService.checkLocalImg(imgUrl);
    };
    HomeComponent.prototype.returnSocialUrl = function (social) {
        return this.mceService.socialLink(social.site, social.handle);
    };
    HomeComponent.prototype.returnArtistUrl = function (name) {
        return this.mceService.artistUrl(name);
    };
    HomeComponent.prototype.returnNewsUrl = function (name) {
        return this.mceService.newsUrl(name);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1, speed: 400, interval: 5000,
            point: { visible: true },
            load: 2, touch: true, loop: true, custom: 'banner'
        };
        this.carouselTwo = {
            grid: { xs: 1, sm: 3, md: 3, lg: 3, all: 0 },
            slide: 1, speed: 400, interval: 10000,
            point: { visible: true },
            load: 2, touch: true, loop: false, easing: 'ease'
        };
        this.getSpotlightItems();
    };
    HomeComponent.prototype.loadCarousel = function (loadType, event) { };
    HomeComponent.prototype.horizontalScroll = function (direction, container) {
        var containerObj = __WEBPACK_IMPORTED_MODULE_2_jquery__("#" + container);
        var scrollSpace = 350;
        if (containerObj != null) {
            if (containerObj[0].scrollLeft < 350 && direction > 0) {
                scrollSpace -= containerObj[0].scrollLeft;
            }
            var scrollLoc = containerObj[0].scrollLeft + (scrollSpace * direction);
            containerObj.animate({ scrollLeft: scrollLoc }, "slow");
        }
    };
    HomeComponent.prototype.scrollActivate = function (direction, container) {
        var containerObj = document.getElementById(container);
        var scrollSpace = 15;
        if (containerObj != null && !this.mobileCheck.test(navigator.userAgent)) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(function () {
                var scrollLoc = containerObj.scrollLeft + (scrollSpace * direction);
                containerObj.scrollLeft = scrollLoc;
            }, 25);
        }
    };
    HomeComponent.prototype.scrollDeactivate = function () {
        clearInterval(this.intervalId);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/home/home.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_mceService__["a" /* MCEService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/news/news.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-body innerpage news\">    \r\n    <div class=\"inner-banner\">\r\n        <div class=\"banner-background\">\r\n            <div class=\"color-overlay\"></div>\r\n            <div class=\"back-img\" [ngStyle]=\"{ 'background-image':'url('+backimg+')'}\"></div>\r\n        </div>\r\n        <h1 class=\"banner-title\">News</h1>        \r\n    </div>\r\n    \r\n    <div class=\"inner-section\">\r\n        <div class=\"close-news\" *ngIf=\"selectedId != null\" (click)=\"closeSelected()\"><div class=\"inner-txt\">Close Story</div></div>\r\n        \r\n        <div class=\"news-container\" id=\"allNews\">\r\n            <div class=\"news-list\">\r\n                <div class=\"news-item {{ idIsSelected(item.title) }}\" *ngFor=\"let item of news\" [attr.id]=\"buildId(item.title)\" >\r\n                    <div class=\"item-content-container\" (click)=\"selectNews(item.title, false)\" >\r\n                        <div class=\"item-img\"><img [src]=\"checkimg(item.img)\"></div>\r\n                        <div class=\"item-info\">\r\n                            <div class=\"item-title\">{{ item.title }}</div>\r\n                            <div class=\"item-date\">{{ item.date | date: 'MMM dd yyyy' }}</div>\r\n                            <div class=\"item-content\">\r\n                                <span>{{ item.content }}</span>\r\n                                <span *ngIf=\"item.link != null\"><br><a [href]=\"item.link.url\" target=\"_blank\">{{ item.link.text}}</a></span>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/news/news.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news .inner-section {\n  padding: 50px;\n  text-align: center;\n}\n.news .inner-section .close-news {\n  display: inline-block;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #c94b4b;\n  text-align: center;\n  opacity: 0.7;\n  color: #ffffff;\n  transition: 0.5s all ease;\n  padding: 20px;\n  border-top-left-radius: 50%;\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n}\n.news .inner-section .close-news .inner-txt {\n  width: 100%;\n}\n.news .inner-section .close-news:hover {\n  opacity: 1;\n}\n.news .inner-section .news-container {\n  max-width: 80%;\n  display: inline-block;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 700px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.news .inner-section .news-container .news-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.news .inner-section .news-container .news-list .news-item {\n  width: 50%;\n  padding: 10px;\n  transition: 0.5s all ease;\n}\n.news .inner-section .news-container .news-list .news-item .item-content-container {\n  background: rgba(75, 19, 79, 0.5);\n  color: #ffffff;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 20px;\n  width: 100%;\n  height: 100%;\n  transition: 0.5s all ease;\n  cursor: pointer;\n}\n.news .inner-section .news-container .news-list .news-item .item-content-container:hover {\n  background: rgba(184, 38, 1, 0.5);\n}\n.news .inner-section .news-container .news-list .news-item .item-content-container .item-img {\n  display: inline-block;\n  width: 40%;\n  position: relative;\n  overflow: hidden;\n}\n.news .inner-section .news-container .news-list .news-item .item-content-container .item-img img {\n  width: 100%;\n}\n.news .inner-section .news-container .news-list .news-item .item-content-container .item-info {\n  padding-left: 20px;\n  width: 60%;\n  text-align: left;\n}\n.news .inner-section .news-container .news-list .news-item .item-content-container .item-info .item-title {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.news .inner-section .news-container .news-list .news-item .item-content-container .item-info .item-content {\n  overflow: hidden;\n  position: relative;\n  max-height: 50px;\n}\n.news .inner-section .news-container .news-list .news-item.selected {\n  width: 100%;\n}\n.news .inner-section .news-container .news-list .news-item.selected .item-content-container .item-info .item-title {\n  font-size: 2rem;\n}\n.news .inner-section .news-container .news-list .news-item.selected .item-content-container .item-info .item-content {\n  max-height: initial;\n  font-size: 1.3rem;\n}\n.news .inner-section .news-container::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n.news .inner-section .news-container::-webkit-scrollbar {\n  width: 7px;\n  background-color: #F5F5F5;\n}\n.news .inner-section .news-container::-webkit-scrollbar-thumb {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/news/news.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Service */

var NewsComponent = /** @class */ (function () {
    function NewsComponent(mceService, renderer, route) {
        this.mceService = mceService;
        this.renderer = renderer;
        this.route = route;
        this.backimg = "assets/images/site/release.jpg";
        this.news = [];
        this.selectedId = null;
        this.intervalId = null;
    }
    NewsComponent.prototype.checkimg = function (imgUrl) {
        return this.mceService.checkLocalImg(imgUrl);
    };
    /* Scroll */
    NewsComponent.prototype.scrollDeactivate = function () {
        clearInterval(this.intervalId);
    };
    NewsComponent.prototype.scrollContainer = function (container, item, recursive) {
        var containerObj = __WEBPACK_IMPORTED_MODULE_2_jquery__("#" + container);
        var itemObj = __WEBPACK_IMPORTED_MODULE_2_jquery__("#" + item);
        var that = this;
        if (containerObj != null && containerObj.length > 0 && itemObj != null && itemObj.length > 0) {
            clearInterval(this.intervalId);
            if (!itemObj[0].classList.contains("selected")) {
                this.intervalId = setTimeout(function () {
                    that.scrollContainer(container, item, false);
                }, 400);
            }
            else {
                this.intervalId = setTimeout(function () {
                    var scrollLoc = itemObj[0].offsetTop - itemObj[0].clientHeight;
                    if (scrollLoc > 0) {
                        containerObj.animate({ scrollTop: scrollLoc }, "slow");
                    }
                    else {
                        containerObj.animate({ scrollTop: 0 }, "slow");
                    }
                }, 500);
            }
        }
        else if (recursive) {
            this.intervalId = setTimeout(function () {
                that.scrollContainer(container, item, recursive);
            }, 400);
        }
    };
    /* Build Article ID */
    NewsComponent.prototype.buildId = function (title) {
        var idVal = (title == undefined || title == null ? "NA" : title.replace(/\W/gi, '_'));
        return idVal;
    };
    NewsComponent.prototype.idIsSelected = function (title) {
        var idVal = this.buildId(title);
        if (idVal == this.selectedId) {
            return 'selected';
        }
        return '';
    };
    /* choose selected */
    NewsComponent.prototype.selectNews = function (title, recursive) {
        var id = this.buildId(title);
        if (id != this.selectedId) {
            // set selectedID
            this.selectedId = id;
            // scroll news to top
            this.scrollContainer('allNews', id, recursive);
        }
    };
    /* Close Selected */
    NewsComponent.prototype.closeSelected = function () {
        this.selectedId = null;
    };
    /* Get News Data */
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.mceService.getNews("ALL").subscribe(function (res) {
            if (res.error == null) {
                _this.news = res.response.news;
                _this.getParameters();
            }
            else {
                console.log(res.error);
            }
        });
    };
    NewsComponent.prototype.getParameters = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = params['id'];
                _this.selectNews(id, true);
            }
            else {
                console.log("Invalid News Id");
            }
        });
    };
    NewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/news/news.html"),
            styles: [__webpack_require__("../../../../../src/app/components/news/news.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_mceService__["a" /* MCEService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/releases/releases.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-body innerpage releases\">    \r\n    <div class=\"inner-banner\">\r\n        <div class=\"banner-background\">\r\n            <div class=\"color-overlay\"></div>\r\n            <div class=\"back-img\" [ngStyle]=\"{ 'background-image':'url('+backimg+')'}\"></div>\r\n        </div>\r\n        <h1 class=\"banner-title\">Releases</h1>        \r\n    </div>\r\n\r\n    <div class=\"content-list music\">\r\n        <h1 class=\"section-title\">Music</h1>\r\n        <div class=\"list-container\">\r\n            <mat-table #musicTable [dataSource]=\"musicDataSource\" matSort>\r\n                <!-- Icon Column -->\r\n                <ng-container matColumnDef=\"icon\">\r\n                    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"><div class=\"allrelease-img-container\"><img [src]=\"checkimg(element.img)\"></div></mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Title Column -->\r\n                <ng-container matColumnDef=\"title\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">{{element.title}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Artist Column -->\r\n                <ng-container matColumnDef=\"artist\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Artist</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">{{element.artist}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">{{element.date | date: 'MMM dd, yy'}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Download Btn Column -->\r\n                <ng-container matColumnDef=\"source\">\r\n                    <mat-header-cell *matHeaderCellDef>Listen</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">\r\n                        <div class=\"song-icon-link\">\r\n                            <div class=\"song-container\">\r\n                                <a [href]=\"element.url\" target=\"_blank\" [class]=\"getIcon(element.type)\"><i fa [name]=\"getIcon(element.type)\"></i></a>                            \r\n                            </div>\r\n                        </div>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n        </div>\r\n    </div>\r\n    <!-- Mixtapes -->\r\n    <div class=\"content-list mixtapes\">\r\n        <h1 class=\"section-title\">Mixtapes</h1>\r\n        <ngx-carousel [inputs]=\"mixtapeCarousel\" class=\"mc-carousels tile-carousel mixtape-carousel\">        \r\n            <ngx-item *ngFor=\"let mix of mixtapes\" NgxCarouselItem>\r\n                <div class=\"mix-page\">\r\n                    <div class=\"mix-content\"><iframe [src]=\"mix.url | safe\" frameborder=\"0\" height=\"450px\" allowtransparency='true'></iframe></div>\r\n                    <div class=\"mix-info\">\r\n                        <div class=\"mix-title\">{{mix.title}}</div>                                                     \r\n                    </div>\r\n                </div>\r\n            </ngx-item>\r\n\r\n            <div NgxCarouselPrev class=\"carousel-ctrl prev\"><i class=\"material-icons\">&#xE5CB;</i></div>\r\n            <div NgxCarouselNext class=\"carousel-ctrl next\"><i class=\"material-icons\">&#xE5CC;</i></div>\r\n        </ngx-carousel>    \r\n    </div>\r\n\r\n    <!-- Videos -->\r\n    <div class=\"content-list videos\">\r\n        <h1 class=\"section-title\">Videos</h1>\r\n        <div class=\"list-container\">\r\n            <mat-table #musicTable [dataSource]=\"videoDataSource\" matSort>\r\n                <!-- Icon Column -->\r\n                <ng-container matColumnDef=\"icon\">\r\n                    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"><div class=\"allrelease-img-container\"><img [src]=\"returnTypeUrl('image', element.urlcode)\"></div></mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Title Column -->\r\n                <ng-container matColumnDef=\"title\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">{{element.title}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Artist Column -->\r\n                <ng-container matColumnDef=\"artist\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Artist</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">{{element.artist}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Date Column -->\r\n                <ng-container matColumnDef=\"date\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">{{element.date | date: 'MMM dd, yy'}}</mat-cell>\r\n                </ng-container>\r\n\r\n                <!-- Download Btn Column -->\r\n                <ng-container matColumnDef=\"source\">\r\n                    <mat-header-cell *matHeaderCellDef>Watch</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\">\r\n                        <div class=\"video-link\">                        \r\n                            <a [href]=\"'https://www.youtube.com/watch?v='+element.urlcode\" target=\"_blank\"><i fa name=\"youtube-play\"></i></a>\r\n                        </div>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/releases/releases.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".releases .content-list {\n  padding: 20px 10%;\n  background: #181818;\n}\n.releases .content-list.mixtapes {\n  background: linear-gradient(to right, #c94b4b, #4b134f);\n}\n.releases .content-list.mixtapes .mix-content {\n  position: relative;\n  text-align: center;\n}\n.releases .content-list.mixtapes .mix-content iframe {\n  min-width: 70%;\n}\n@media (max-width: 770px) {\n  .releases .content-list.mixtapes .mix-content iframe {\n    min-width: initial;\n    width: 100%;\n  }\n}\n.releases .content-list.mixtapes .mix-info {\n  color: #ffffff;\n  text-align: center;\n  padding: 20px 0px;\n}\n.releases .content-list.mixtapes .mix-info .mix-title {\n  color: #ffffff;\n  font-size: 2rem;\n  font-weight: bold;\n}\n.releases .content-list .section-title {\n  text-align: center;\n  color: #ffffff;\n  margin: 20px 0px;\n}\n.releases .content-list .list-container {\n  color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  height: 500px;\n  overflow-y: auto;\n  padding-bottom: 20px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);\n}\n.releases .content-list .list-container .link-container {\n  width: 150px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.releases .content-list .list-container::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n.releases .content-list .list-container::-webkit-scrollbar {\n  width: 7px;\n  background-color: #F5F5F5;\n}\n.releases .content-list .list-container::-webkit-scrollbar-thumb {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/releases/releases.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleasesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mceService__ = __webpack_require__("../../../../../src/app/services/mceService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Service */

var ReleasesComponent = /** @class */ (function () {
    function ReleasesComponent(mceService) {
        this.mceService = mceService;
        this.backimg = "assets/images/site/album.jpg";
        this.allArtists = [];
        this.music = [];
        this.mixtapes = [];
        this.videos = [];
        this.displayedColumns = ['icon', 'title', 'artist', 'date', 'source'];
    }
    ReleasesComponent.prototype.getReleases = function () {
        var _this = this;
        this.mceService.getAllReleases().subscribe(function (res) {
            if (res.error == null) {
                _this.mixtapes = res.response.mixtapes;
                _this.musicDataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */](res.response.music);
                _this.videoDataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */](res.response.videos);
            }
            else {
                console.log(res.error);
            }
        });
    };
    ReleasesComponent.prototype.getIcon = function (type) {
        return this.mceService.getMusicIcon(type);
    };
    ReleasesComponent.prototype.returnTypeUrl = function (type, urlcode) {
        return this.mceService.returnTypeUrl(type, urlcode);
    };
    ReleasesComponent.prototype.checkimg = function (imgUrl) {
        return this.mceService.checkLocalImg(imgUrl);
    };
    ReleasesComponent.prototype.getTypeString = function (type) {
        var retVal = "";
        if (type != undefined) {
            var typeStr = type.split("-");
            retVal = typeStr[0];
        }
        return retVal;
    };
    ReleasesComponent.prototype.ngOnInit = function () {
        this.getReleases();
        this.mixtapeCarousel = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 3, speed: 0, interval: 0,
            point: { visible: true },
            load: 1, touch: true, loop: false, custom: 'banner'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSort */])
    ], ReleasesComponent.prototype, "sort", void 0);
    ReleasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/components/releases/releases.html"),
            styles: [__webpack_require__("../../../../../src/app/components/releases/releases.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_mceService__["a" /* MCEService */]])
    ], ReleasesComponent);
    return ReleasesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/datamodels/artistItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistItem; });
var ArtistItem = /** @class */ (function () {
    function ArtistItem(Name, Title, Img, socialList) {
        this.name = Name;
        this.title = Title;
        this.img = Img;
        this.social = socialList;
    }
    return ArtistItem;
}());



/***/ }),

/***/ "../../../../../src/app/datamodels/navitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItem; });
var NavItem = /** @class */ (function () {
    function NavItem(Name, Url) {
        this.name = Name;
        this.url = Url;
    }
    return NavItem;
}());



/***/ }),

/***/ "../../../../../src/app/datamodels/socialItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialItem; });
var SocialItem = /** @class */ (function () {
    function SocialItem(Site, Handle) {
        this.site = Site;
        this.handle = Handle;
    }
    return SocialItem;
}());



/***/ }),

/***/ "../../../../../src/app/services/mceService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MCEService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MCEService = /** @class */ (function () {
    function MCEService(http) {
        this.http = http;
        this.urlBase = 'http://localhost:1738';
    }
    MCEService.prototype.checkLocalImg = function (img) {
        if (img == undefined || img == null) {
            return 'assets/images/logos/logoR_text.png';
        }
        return img;
    };
    MCEService.prototype.returnTypeUrl = function (type, urlcode) {
        var retUrl = (type == "video" ? "https://www.youtube.com/embed/" + urlcode : "http://img.youtube.com/vi/" + urlcode + "/default.jpg");
        return retUrl;
    };
    MCEService.prototype.socialLink = function (type, id) {
        var retUrl = null;
        switch (type) {
            case "twitter":
                retUrl = "https://twitter.com/" + id;
                break;
            case "instagram":
                retUrl = "https://www.instagram.com/" + id;
                break;
            case "facebook":
                break;
            case "snapchat":
                break;
            case "soundcloud":
                retUrl = "https://soundcloud.com/" + id;
                break;
            case "spotify":
                retUrl = "https://open.spotify.com/artist/" + id;
                break;
            default:
                retUrl = null;
        }
        return retUrl;
    };
    MCEService.prototype.artistUrl = function (name) {
        var cleanName = name.split(' ').join("%20");
        return "/artists/" + cleanName;
    };
    MCEService.prototype.newsUrl = function (name) {
        var cleanName = name.split(' ').join("%20");
        return "/news/" + cleanName;
    };
    MCEService.prototype.getMusicIcon = function (type) {
        if (type.includes("itunes")) {
            return "apple";
        }
        else if (type.includes("soundcloud")) {
            return "soundcloud";
        }
        return "music";
    };
    /* API Calls */
    MCEService.prototype.getSpotlightContent = function () {
        return this.http.get(this.urlBase + '/api/spotlight');
    };
    MCEService.prototype.getNews = function (ntotal) {
        return this.http.post(this.urlBase + '/api/news', { query: { total: ntotal } });
    };
    MCEService.prototype.getArtist = function (name) {
        return this.http.post(this.urlBase + '/api/artist', { artistname: name });
    };
    MCEService.prototype.getAllArtists = function () {
        return this.http.get(this.urlBase + '/api/allArtists');
    };
    MCEService.prototype.getEventsByDate = function (edate, aname) {
        return this.http.post(this.urlBase + '/api/events', { query: { date: edate, artistname: aname } });
    };
    MCEService.prototype.getEventsTotal = function (etotal, aname) {
        return this.http.post(this.urlBase + '/api/events', { query: { total: etotal, artistname: aname } });
    };
    MCEService.prototype.getAllReleases = function () {
        return this.http.get(this.urlBase + '/api/allReleases');
    };
    MCEService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MCEService);
    return MCEService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map