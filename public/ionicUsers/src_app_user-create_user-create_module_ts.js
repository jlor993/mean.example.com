(self["webpackChunkionicUsers"] = self["webpackChunkionicUsers"] || []).push([["src_app_user-create_user-create_module_ts"],{

/***/ 8557:
/*!***********************************************************!*\
  !*** ./src/app/user-create/user-create-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePageRoutingModule": () => (/* binding */ UserCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-create.page */ 6273);




const routes = [
    {
        path: '',
        component: _user_create_page__WEBPACK_IMPORTED_MODULE_0__.UserCreatePage
    }
];
let UserCreatePageRoutingModule = class UserCreatePageRoutingModule {
};
UserCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserCreatePageRoutingModule);



/***/ }),

/***/ 3270:
/*!***************************************************!*\
  !*** ./src/app/user-create/user-create.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePageModule": () => (/* binding */ UserCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _user_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-create-routing.module */ 8557);
/* harmony import */ var _user_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.page */ 6273);







let UserCreatePageModule = class UserCreatePageModule {
};
UserCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserCreatePageRoutingModule
        ],
        declarations: [_user_create_page__WEBPACK_IMPORTED_MODULE_1__.UserCreatePage]
    })
], UserCreatePageModule);



/***/ }),

/***/ 6273:
/*!*************************************************!*\
  !*** ./src/app/user-create/user-create.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreatePage": () => (/* binding */ UserCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-create.page.html */ 2546);
/* harmony import */ var _user_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.page.scss */ 2051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.model */ 1813);







let UserCreatePage = class UserCreatePage {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_3__.User();
        this.errors = {};
    }
    ngOnInit() {
    }
    response(response) {
        if (response.success === false) {
            if (response.errors.name == 'MissingUsernameError') {
                this.errors.username = 'Please enter a username';
            }
            if (response.errors.name == 'UserExistsError') {
                this.errors.username = 'A user with the given username is already registered';
            }
            if (response.errors.email) {
                this.errors.email = response.errors.errors.email.message;
            }
        }
        if (response.success === true) {
            this.router.navigate(['/users']);
        }
    }
    onSubmit() {
        this.usersService.createUser(this.user).subscribe((response) => {
            this.response(response);
        });
    }
};
UserCreatePage.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UserCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-create',
        template: _raw_loader_user_create_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_create_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserCreatePage);



/***/ }),

/***/ 2051:
/*!***************************************************!*\
  !*** ./src/app/user-create/user-create.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNyZWF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2546:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-create/user-create.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>userCreate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\"></ion-input>\n    <div *ngIf=\"errors.email\"> {{ errors.email }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Username</ion-label>\n    <ion-input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\"></ion-input>\n    <div *ngIf=\"errors.username\"> {{ errors.username }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>First Name</ion-label>\n    <ion-input [(ngModel)]=\"user.first_name\" name=\"first_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Last Name</ion-label>\n    <ion-input [(ngModel)]=\"user.last_name\" name=\"last_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"onSubmit()\">Submit</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_user-create_user-create_module_ts.js.map