(self["webpackChunkionicUsers"] = self["webpackChunkionicUsers"] || []).push([["src_app_user-delete_user-delete_module_ts"],{

/***/ 2785:
/*!***********************************************************!*\
  !*** ./src/app/user-delete/user-delete-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeletePageRoutingModule": () => (/* binding */ UserDeletePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-delete.page */ 2506);




const routes = [
    {
        path: '',
        component: _user_delete_page__WEBPACK_IMPORTED_MODULE_0__.UserDeletePage
    }
];
let UserDeletePageRoutingModule = class UserDeletePageRoutingModule {
};
UserDeletePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserDeletePageRoutingModule);



/***/ }),

/***/ 6524:
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeletePageModule": () => (/* binding */ UserDeletePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-delete-routing.module */ 2785);
/* harmony import */ var _user_delete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-delete.page */ 2506);







let UserDeletePageModule = class UserDeletePageModule {
};
UserDeletePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_delete_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDeletePageRoutingModule
        ],
        declarations: [_user_delete_page__WEBPACK_IMPORTED_MODULE_1__.UserDeletePage]
    })
], UserDeletePageModule);



/***/ }),

/***/ 2506:
/*!*************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDeletePage": () => (/* binding */ UserDeletePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_delete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-delete.page.html */ 8004);
/* harmony import */ var _user_delete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-delete.page.scss */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);






let UserDeletePage = class UserDeletePage {
    constructor(usersService, activatedRoute, router) {
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.getUser(params['userId']);
        });
    }
    deleteUser(id) {
        this.usersService.deleteUser(id).subscribe((response) => {
            if (response.success == true) {
                this.router.navigate(['/users']);
            }
        });
    }
    getUser(id) {
        this.usersService.getUser(id).subscribe((response) => {
            this.user = response.user;
        });
    }
};
UserDeletePage.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UserDeletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-delete',
        template: _raw_loader_user_delete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_delete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserDeletePage);



/***/ }),

/***/ 7292:
/*!***************************************************!*\
  !*** ./src/app/user-delete/user-delete.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRlbGV0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8004:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-delete/user-delete.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>userDelete</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"user\">\n\n    <ion-card-header>\n      <ion-card-title color=\"danger\">\n        Are you sure you want to delete {{user.username}}?\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-button color=\"danger\" expand=\"full\" (click)=\"deleteUser(user._id)\">\n        Delete {{user.username}}\n      </ion-button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_user-delete_user-delete_module_ts.js.map