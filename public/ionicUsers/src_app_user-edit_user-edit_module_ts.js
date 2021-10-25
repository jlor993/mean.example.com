(self["webpackChunkionicUsers"] = self["webpackChunkionicUsers"] || []).push([["src_app_user-edit_user-edit_module_ts"],{

/***/ 8642:
/*!*******************************************************!*\
  !*** ./src/app/user-edit/user-edit-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPageRoutingModule": () => (/* binding */ UserEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-edit.page */ 3281);




const routes = [
    {
        path: '',
        component: _user_edit_page__WEBPACK_IMPORTED_MODULE_0__.UserEditPage
    }
];
let UserEditPageRoutingModule = class UserEditPageRoutingModule {
};
UserEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserEditPageRoutingModule);



/***/ }),

/***/ 3322:
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPageModule": () => (/* binding */ UserEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-edit-routing.module */ 8642);
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-edit.page */ 3281);







let UserEditPageModule = class UserEditPageModule {
};
UserEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserEditPageRoutingModule
        ],
        declarations: [_user_edit_page__WEBPACK_IMPORTED_MODULE_1__.UserEditPage]
    })
], UserEditPageModule);



/***/ }),

/***/ 3281:
/*!*********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPage": () => (/* binding */ UserEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-edit.page.html */ 7755);
/* harmony import */ var _user_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-edit.page.scss */ 3875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);






let UserEditPage = class UserEditPage {
    constructor(usersService, activatedRoute, router) {
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.errors = {};
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.getUser(params['userId']);
        });
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
        this.usersService.updateUser(this.user).subscribe((response) => {
            this.response(response);
        });
    }
    getUser(id) {
        this.usersService.getUser(id).subscribe((response) => {
            this.user = response.user;
        });
    }
};
UserEditPage.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-edit',
        template: _raw_loader_user_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserEditPage);



/***/ }),

/***/ 3875:
/*!***********************************************!*\
  !*** ./src/app/user-edit/user-edit.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7755:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-edit/user-edit.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>userEdit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!user\">\n  <ion-label ion-text-center>\n    <ion-spinner></ion-spinner>\n  </ion-label>\n</ion-content>\n\n<ion-content *ngIf=\"user\">\n\n  <ion-input [(ngModel)]=\"user._id\" name=\"_id\" type=\"hidden\"></ion-input>\n\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\"></ion-input>\n    <div *ngIf=\"errors.email\"> {{ errors.email }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Username</ion-label>\n    <ion-input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\"></ion-input>\n    <div *ngIf=\"errors.username\"> {{ errors.username }} </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>First Name</ion-label>\n    <ion-input [(ngModel)]=\"user.first_name\" name=\"first_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Last Name</ion-label>\n    <ion-input [(ngModel)]=\"user.last_name\" name=\"last_name\" type=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"onSubmit()\">Submit</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_user-edit_user-edit_module_ts.js.map