(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control[_ngcontent-c3]{\r\n    margin: auto;\r\n    width: 400px;\r\n    border: 1px solid blue !important;\r\n}\r\n\r\n.myForm{\r\n    width: 400px;\r\n    margin: auto;\r\n    border: 3px solid #b1ad5c !important;\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    background-color: #b1ad5c;\r\n}\r\n\r\nbutton {\r\n    margin-top: 5px;\r\n    width:200px;\r\n}\r\n\r\ninput , select{\r\n    margin: 5px;  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC10YXNrL2FkZC10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sW19uZ2NvbnRlbnQtYzNde1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlGb3Jte1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2IxYWQ1YyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWFkNWM7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB3aWR0aDoyMDBweDtcclxufVxyXG5cclxuaW5wdXQgLCBzZWxlY3R7XHJcbiAgICBtYXJnaW46IDVweDsgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>ADD TASK</h1>\n\n<!-- <hr> -->\n<div class=\"myForm\">\n  <form class=\"form-group\" #form=\"ngForm\">\n    <div>\n      <!-- <input type=\"text\" value=\"{{task.task}}\"> -->\n      <input #taskValidate=\"ngModel\" required minlength=\"3\" class=\"form-control\" type=\"text\" name=\"task\"\n        placeholder=\"task...\" [(ngModel)]=\"task.task\">\n    </div>\n\n    <span *ngIf=\"taskValidate.errors?.required && taskValidate.touched\">Missing Task.</span>\n    <span *ngIf=\"taskValidate.errors?.minlength && taskValidate.touched\">Task name too short.</span>\n    \n    <div>\n      <input #dateValidate=\"ngModel\" required class=\"form-control\" type=\"date\" name=\"date\" placeholder=\"date...\"\n        [(ngModel)]=\"task.date\">\n      <span *ngIf=\"dateValidate.errors?.invalid && dateValidate.touched\">Missing date.</span>\n    </div>\n\n    <div [class.has-error]=\"familyMemberValidate.touched && familyMemberValidate.invalid\">\n     \n        <select #familyMemberValidate=\"ngModel\" required class=\"form-control\" aria-placeholder=\"family member\"\n        name=\"familyMember\" [(ngModel)]=\"task.familyMember\">\n        <option value=\"-1\">please select family member</option>\n        <option value=\"jack\">jack</option>\n        <option value=\"jenny\">jenny</option>\n        <option value=\"mike\">mike</option>\n        <option value=\"alex\">alex</option>\n      </select>\n      \n      <span class=\"help\" *ngIf=\"familyMemberValidate.errors?.invalid && familyMemberValidate.touched \">Missing .</span>\n   \n    </div>\n    \n    <button [disabled]=\"form.form.invalid\" type=\"submit\" class=\"btn btn-primary\" (click)=\"addAsignment()\">ADD\n      TASK</button>\n\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/task */ "./src/app/models/task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(router) {
        this.router = router;
        this.task = new src_app_models_task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.todayDate = new Date();
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent.prototype.addAsignment = function () {
        var counter = 0;
        var tasksLocalStorage = [];
        var fromLocal = localStorage.getItem("tasks");
        fromLocal = JSON.parse(fromLocal);
        if (fromLocal) {
            for (var i = 0; i < fromLocal.length; i++) {
                counter++;
                tasksLocalStorage.push(fromLocal[i]);
            }
        }
        var currentTesk = this.task;
        currentTesk._id = counter++;
        tasksLocalStorage.push(currentTesk);
        localStorage.setItem("tasks", JSON.stringify(tasksLocalStorage));
        this.router.navigate(["app-home-tasks"]);
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/components/add-task/add-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6:hover{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg2OmhvdmVye1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>ALL RIGHTS RESERVED TO ILAN LEVI &copy; {{time}}</h6>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.time = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    margin-top: 3%;;\r\n    font-size: x-large;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTs7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n\n  <a class=\"nav-link active\" routerLink=\"/app-add-task\">ADD TASK</a> |\n\n  <a class=\"nav-link active\" routerLink=\"/app-home-tasks\">HOME TASKS</a>\n  \n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home-tasks/home-tasks.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/home-tasks/home-tasks.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ntable{\r\n    margin: auto;\r\n    width: 50%;\r\n    background-color: burlywood;\r\n}\r\n\r\ntd, tr, th{\r\n    /* border: 1px solid black; */\r\n    text-align: center;\r\n    border-bottom: none;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n.table>thead>tr>th {\r\n    /* vertical-align: bottom; */\r\n    border-bottom: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXRhc2tzL2hvbWUtdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXRhc2tzL2hvbWUtdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxudGFibGV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG59XHJcblxyXG50ZCwgdHIsIHRoe1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZT50aGVhZD50cj50aCB7XHJcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home-tasks/home-tasks.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-tasks/home-tasks.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>HOME TASKS MANAGMENT</h1>\n\n<div  *ngIf=\" loading \" >\n\n  <table class=\"table\" *ngIf=\"tasks\">\n    <thead>\n      <tr>\n\n        <th scope=\"col\">task</th>\n        <th scope=\"col\">date</th>\n        <th scope=\"col\">familyMember</th>\n        <th scope=\"col\">delete</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let t of tasks\">\n\n        <td>{{t.task}}</td>\n        <td>{{t.date}}</td>\n        <td>{{t.familyMember}}</td>\n        <td (click)=\"deleteTask(t._id)\"><button class=\"btn btn-danger\">delete</button></td>\n\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-tasks/home-tasks.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/home-tasks/home-tasks.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTasksComponent", function() { return HomeTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeTasksComponent = /** @class */ (function () {
    function HomeTasksComponent() {
        this.loading = true;
        this.tasksFromLocal = [];
    }
    HomeTasksComponent.prototype.ngOnInit = function () {
        var homeTasks = localStorage.getItem("tasks");
        if (homeTasks) {
            homeTasks = JSON.parse(homeTasks);
            for (var i = 0; i < homeTasks.length; i++) {
                this.tasksFromLocal.push(homeTasks[i]);
            }
            this.tasks = this.tasksFromLocal;
        }
    };
    HomeTasksComponent.prototype.deleteTask = function (_id) {
        var homeTasks = this.tasks;
        var taskaArr = [];
        if (homeTasks) {
            for (var i = 0; i < homeTasks.length; i++) {
                if (homeTasks[i]._id === _id) {
                    homeTasks.splice(i, 1);
                    console.log(homeTasks);
                    for (var i_1 = 0; i_1 < homeTasks.length; i_1++) {
                        taskaArr.push(homeTasks[i_1]);
                    }
                    localStorage.setItem("tasks", JSON.stringify(taskaArr));
                }
            }
        }
    };
    HomeTasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-tasks',
            template: __webpack_require__(/*! ./home-tasks.component.html */ "./src/app/components/home-tasks/home-tasks.component.html"),
            styles: [__webpack_require__(/*! ./home-tasks.component.css */ "./src/app/components/home-tasks/home-tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeTasksComponent);
    return HomeTasksComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layout/layout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    height: 100%;\r\n    /* border: 2px solid black; */\r\n    background-color: lightgreen;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-columns: repeat(12, 1fr);\r\n    grid-template-rows: 20% 73% 7%;\r\n}\r\n\r\nsection > * {\r\n     /* border: 2px solid black; */\r\n     }\r\n\r\nheader, footer { grid-column: span 12 }\r\n\r\nmain {\r\n    height: 100%;\r\n    grid-column: span 12;\r\n    overflow: auto;\r\n    background-color:#ead08f\r\n}\r\n\r\nheader{\r\n    background-color: goldenrod;\r\n}\r\n\r\nfooter{\r\n    background-color: goldenrod;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsOEJBQThCO0FBQ2xDOztBQUVBO0tBQ0ssNkJBQTZCO0tBQzdCOztBQUVMLGlCQUFpQixxQkFBcUI7O0FBR3RDO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNzMlIDclO1xyXG59XHJcblxyXG5zZWN0aW9uID4gKiB7XHJcbiAgICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgfVxyXG5cclxuaGVhZGVyLCBmb290ZXIgeyBncmlkLWNvbHVtbjogc3BhbiAxMiB9XHJcblxyXG5cclxubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxMjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWFkMDhmXHJcbn1cclxuXHJcbmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG5cclxuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n  <header>\n    <app-header></app-header>\n  </header>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n  <footer>\n    <app-footer></app-footer>\n  </footer>\n\n</section>"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/models/task.ts":
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(task, date, familyMember, _id) {
        if (familyMember === void 0) { familyMember = "-1"; }
        this.task = task;
        this.date = date;
        this.familyMember = familyMember;
        this._id = _id;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _components_home_tasks_home_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home-tasks/home-tasks.component */ "./src/app/components/home-tasks/home-tasks.component.ts");





var routes = [
    { path: "app-add-task", component: _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__["AddTaskComponent"] },
    { path: "app-home-tasks", component: _components_home_tasks_home_tasks_component__WEBPACK_IMPORTED_MODULE_4__["HomeTasksComponent"] },
    { path: "", pathMatch: "full", redirectTo: "app-home-tasks" },
    { path: "**", component: _components_home_tasks_home_tasks_component__WEBPACK_IMPORTED_MODULE_4__["HomeTasksComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/app.module.ts":
/*!***************************************!*\
  !*** ./src/app/modules/app.module.ts ***!
  \***************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _components_home_tasks_home_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home-tasks/home-tasks.component */ "./src/app/components/home-tasks/home-tasks.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_home_tasks_home_tasks_component__WEBPACK_IMPORTED_MODULE_4__["HomeTasksComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_modules_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/modules/app.module */ "./src/app/modules/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_modules_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ANGULAR\tasks\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map