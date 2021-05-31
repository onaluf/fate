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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");
/* harmony import */ var _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-mention-dropdown/example-mention-dropdown.component */ "./src/app/example-mention-dropdown/example-mention-dropdown.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fate-ui/fate-ui.component */ "./src/app/fate-ui/fate-ui.component.ts");
/* harmony import */ var _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fate-input/fate-input.component */ "./src/app/fate-input/fate-input.component.ts");
/* harmony import */ var _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fate-bootstrap/fate-bootstrap.component */ "./src/app/fate-bootstrap/fate-bootstrap.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fate-material/fate-material.component */ "./src/app/fate-material/fate-material.component.ts");











var AppComponent = /** @class */ (function () {
    function AppComponent(fateControllerService) {
        this.title = 'app';
        this.aboutFate = "<a class=\"repos custom-block\" tabindex=\"0\" contenteditable=\"false\" href=\"https://github.com/onaluf/fate\" title=\"Flexible Angular Text Editor\"><i class=\"fab fa-github\"></i> Fate</a> is a <strong>rich</strong> <em>text</em> <u>editor</u> (wysiwyg) natively written for angular (>= v2) in typescript with footprint and\n  flexibility in mind. Its goal is to be very easy to customise and be as small as\n  it can thanks to tree shaking.";
        fateControllerService.registerInlineAction('mention', {
            command: 'insertHTML',
            display: 'contextual',
            name: 'Mention',
            regexp: /(@\w*)$/,
            matched: '',
            dropdown: _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_2__["ExampleMentionDropdownComponent"]
        });
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_module__WEBPACK_IMPORTED_MODULE_1__["FateControllerService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 3, consts: [[1, "demo"], [1, "demo-type"], [1, "demo-editor"], [1, "form-group"], ["uiId", "foo"], ["uiId", "foo", "placeholder", "Rich Textarea", "name", "simple", 3, "ngModel", "ngModelChange"], ["name", "bootstrap", "placeholder", "Rich Textarea", 3, "ngModel", "ngModelChange"], [1, "demo", "material"], ["placeholder", "Rich Textarea", "name", "material", 3, "ngModel", "ngModelChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Simple UI");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fate-ui", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fate-input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_fate_input_ngModelChange_6_listener($event) { return ctx.aboutFate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bootstrap4 UI");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fate-bootstrap", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_fate_bootstrap_ngModelChange_12_listener($event) { return ctx.aboutFate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Material UI");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "fate-material", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_fate_material_ngModelChange_19_listener($event) { return ctx.aboutFate = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aboutFate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aboutFate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aboutFate);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"], _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["FateBootstrapComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_8__["FateMaterialComponent"]], styles: ["[_nghost-%COMP%] {\n  margin-top: -80px;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n}\n\n[_nghost-%COMP%]   .demo[_ngcontent-%COMP%] {\n  width: 30%;\n  flex-grow: 0;\n  flex-shrink: 100;\n}\n\n[_nghost-%COMP%]   .demo.material[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  position: relative;\n  background: #FFF;\n  padding: 10px;\n}\n\n[_nghost-%COMP%]   .demo.material[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .demo[_ngcontent-%COMP%]   .demo-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n  color: #FFF;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 10px 0;\n  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);\n}\n\n[_nghost-%COMP%]   .demo[_ngcontent-%COMP%]   .demo-editor[_ngcontent-%COMP%] {\n  text-align: left;\n  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);\n}\n\n  .custom-block {\n  display: inline-block;\n  padding: 1px 5px;\n  border-radius: 3px;\n  border: 1px solid #AAA;\n  outline: 0;\n  cursor: default;\n  -moz-user-select: none;\n  -webkit-user-modify: read-only;\n}\n\n  .custom-block:active,   .custom-block:focus {\n  background: #EEE;\n  border: 1px solid #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vbmFsdWYvZmF0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVMsaUJBQWlCO0VBQ3hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FDQ3BCOztBREpBO0VBTUksVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUNFcEI7O0FEVkE7RUFXTSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUNHbkI7O0FEaEJBO0VBZ0JRLFdBQVc7QUNJbkI7O0FEcEJBO0VBcUJNLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlDQUF5QztBQ0cvQzs7QUQ5QkE7RUE4Qk0sZ0JBQWdCO0VBQ2hCLDJDQUEyQztBQ0lqRDs7QURDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUNFaEM7O0FEVkE7RUFZSSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDRTFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7ICBtYXJnaW4tdG9wOiAtODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuZGVtbyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDEwMDtcblxuICAgICYubWF0ZXJpYWwgLmZvcm0tZ3JvdXAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRlbW8tdHlwZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KVxuICAgIH1cbiAgICAuZGVtby1lZGl0b3Ige1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQUE7XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLW1vZGlmeTogcmVhZC1vbmx5O1xuXG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUVFO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgbWFyZ2luLXRvcDogLTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0IC5kZW1vIHtcbiAgd2lkdGg6IDMwJTtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMTAwO1xufVxuXG46aG9zdCAuZGVtby5tYXRlcmlhbCAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuOmhvc3QgLmRlbW8ubWF0ZXJpYWwgLmZvcm0tZ3JvdXAgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgLmRlbW8gLmRlbW8tdHlwZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG46aG9zdCAuZGVtbyAuZGVtby1lZGl0b3Ige1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDNweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1tb2RpZnk6IHJlYWQtb25seTtcbn1cblxuOjpuZy1kZWVwIC5jdXN0b20tYmxvY2s6YWN0aXZlLCA6Om5nLWRlZXAgLmN1c3RvbS1ibG9jazpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNFRUU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG59XG4iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _fate_module__WEBPACK_IMPORTED_MODULE_1__["FateControllerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example-mention-dropdown/example-mention-dropdown.component */ "./src/app/example-mention-dropdown/example-mention-dropdown.component.ts");
/* harmony import */ var _example_custom_html_parser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example-custom-html-parser.service */ "./src/app/example-custom-html-parser.service.ts");
/* harmony import */ var _example_custom_parser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example-custom-parser.service */ "./src/app/example-custom-parser.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");






// Customization example






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            { provide: _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateHtmlParserService"], useClass: _example_custom_html_parser_service__WEBPACK_IMPORTED_MODULE_7__["ExampleCustomHtmlParserService"] },
            { provide: _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateParserService"], useClass: _example_custom_parser_service__WEBPACK_IMPORTED_MODULE_8__["ExampleCustomParserService"] },
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateModule"],
                _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateMaterialModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["ExampleMentionDropdownComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateModule"],
        _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateMaterialModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _example_mention_dropdown_example_mention_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["ExampleMentionDropdownComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateModule"],
                    _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateMaterialModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                providers: [
                    { provide: _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateHtmlParserService"], useClass: _example_custom_html_parser_service__WEBPACK_IMPORTED_MODULE_7__["ExampleCustomHtmlParserService"] },
                    { provide: _fate_module__WEBPACK_IMPORTED_MODULE_10__["FateParserService"], useClass: _example_custom_parser_service__WEBPACK_IMPORTED_MODULE_8__["ExampleCustomParserService"] },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/example-custom-html-parser.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/example-custom-html-parser.service.ts ***!
  \*******************************************************/
/*! exports provided: ExampleCustomHtmlParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleCustomHtmlParserService", function() { return ExampleCustomHtmlParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ExampleCustomHtmlParserService = /** @class */ (function (_super) {
    __extends(ExampleCustomHtmlParserService, _super);
    function ExampleCustomHtmlParserService() {
        return _super.call(this) || this;
    }
    ExampleCustomHtmlParserService.prototype.parseType = function (element) {
        if (element.nodeName === 'SPAN' && element.classList.contains('repos')) {
            return [new _fate_module__WEBPACK_IMPORTED_MODULE_1__["FateNode"]('mention', {
                    url: element.getAttribute('data-href'),
                    description: element.getAttribute('title'),
                    name: element.textContent
                })];
        }
        else {
            return _super.prototype.parseType.call(this, element);
        }
    };
    ExampleCustomHtmlParserService.prototype.serializeType = function (node) {
        if (node.type === 'mention') {
            return '<span class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + node.value.url + '" title="' + node.value.description + '"><i class="fab fa-github"></i> ' + node.value.name + '</span>';
        }
        else {
            return _super.prototype.serializeType.call(this, node);
        }
    };
    ExampleCustomHtmlParserService.ɵfac = function ExampleCustomHtmlParserService_Factory(t) { return new (t || ExampleCustomHtmlParserService)(); };
    ExampleCustomHtmlParserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExampleCustomHtmlParserService, factory: ExampleCustomHtmlParserService.ɵfac });
    return ExampleCustomHtmlParserService;
}(_fate_module__WEBPACK_IMPORTED_MODULE_1__["FateHtmlParserService"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleCustomHtmlParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/example-custom-parser.service.ts":
/*!**************************************************!*\
  !*** ./src/app/example-custom-parser.service.ts ***!
  \**************************************************/
/*! exports provided: ExampleCustomParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleCustomParserService", function() { return ExampleCustomParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate.module */ "./src/app/fate.module.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ExampleCustomParserService = /** @class */ (function (_super) {
    __extends(ExampleCustomParserService, _super);
    function ExampleCustomParserService() {
        return _super.call(this) || this;
    }
    ExampleCustomParserService.prototype.parseType = function (element) {
        if (element.nodeName === 'A' && element.classList.contains('repos')) {
            return [new _fate_module__WEBPACK_IMPORTED_MODULE_1__["FateNode"]('mention', {
                    url: element.getAttribute('href'),
                    description: element.getAttribute('title'),
                    name: element.textContent
                })];
        }
        else {
            return _super.prototype.parseType.call(this, element);
        }
    };
    ExampleCustomParserService.prototype.serializeType = function (node) {
        if (node.type === 'mention') {
            return '<a class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + node.value.url + '" title="' + node.value.description + '"><i class="fab fa-github"></i> ' + node.value.name + '</a>';
        }
        else {
            return _super.prototype.serializeType.call(this, node);
        }
    };
    ExampleCustomParserService.ɵfac = function ExampleCustomParserService_Factory(t) { return new (t || ExampleCustomParserService)(); };
    ExampleCustomParserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExampleCustomParserService, factory: ExampleCustomParserService.ɵfac });
    return ExampleCustomParserService;
}(_fate_module__WEBPACK_IMPORTED_MODULE_1__["FateParserService"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleCustomParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/example-mention-dropdown/example-mention-dropdown.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/example-mention-dropdown/example-mention-dropdown.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExampleMentionDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleMentionDropdownComponent", function() { return ExampleMentionDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function ExampleMentionDropdownComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleMentionDropdownComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var repos_r17 = ctx.$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changeValue(repos_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var repos_r17 = ctx.$implicit;
    var i_r18 = ctx.index;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r18 === ctx_r16.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repos_r17.name);
} }
var ExampleMentionDropdownComponent = /** @class */ (function () {
    function ExampleMentionDropdownComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reposList = [
            {
                name: 'Fate',
                description: 'Flexible Angular Text Editor',
                url: 'https://github.com/onaluf/fate'
            }, {
                name: 'ngLipsum',
                description: 'Simple Lorem Ipsum based dummy content generator directive and services for Angular',
                url: 'https://github.com/onaluf/ngLipsum'
            }, {
                name: 'RacerJS',
                description: 'A simple racing game inspired by the classic Lotus series on Amiga. This has been made for the 10k Apart contest (http://10k.aneventapart.com).',
                url: 'https://github.com/onaluf/RacerJS'
            }, {
                name: 'voxel',
                description: 'a voxel spacing demo done in javascript',
                url: 'https://github.com/onaluf/voxel'
            }, {
                name: 'gameQuery',
                description: 'a javascript game engine with jQuery',
                url: 'https://github.com/onaluf/gameQuery'
            }, {
                name: 'jQueryGameDevEssentials',
                description: 'This is the source code for the example of the book "jQuery Game Development Essentials" (http://jquerygamedevelopment.com/)',
                url: 'https://github.com/onaluf/jQueryGameDevEssentials'
            }
        ];
        this.selected = 0;
    }
    Object.defineProperty(ExampleMentionDropdownComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.filterList();
        },
        enumerable: true,
        configurable: true
    });
    ExampleMentionDropdownComponent.prototype.filterList = function () {
        this.filteredList = [];
        var criteria = this._value.substr(1);
        for (var _i = 0, _a = this.reposList; _i < _a.length; _i++) {
            var repos = _a[_i];
            if (repos.name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
                this.filteredList.push(repos);
            }
        }
        if (this.selected >= this.filteredList.length) {
            this.selected = Math.max(0, this.filteredList.length - 1);
        }
    };
    ExampleMentionDropdownComponent.prototype.changeValue = function (value) {
        this._value = value;
        this.valueChange.emit('<span class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + value.url + '" title="' + value.description + '"><i class="fab fa-github"></i> ' + value.name + '</span>&nbsp;');
    };
    ExampleMentionDropdownComponent.prototype.selectNext = function () {
        this.selected++;
        if (this.selected >= this.filteredList.length) {
            this.selected = this.filteredList.length - 1;
        }
    };
    ;
    ExampleMentionDropdownComponent.prototype.selectPrevious = function () {
        this.selected--;
        if (this.selected < 0) {
            this.selected = 0;
        }
    };
    ;
    ExampleMentionDropdownComponent.prototype.confirmSelection = function () {
        this.changeValue(this.filteredList[this.selected]);
    };
    ;
    ExampleMentionDropdownComponent.ɵfac = function ExampleMentionDropdownComponent_Factory(t) { return new (t || ExampleMentionDropdownComponent)(); };
    ExampleMentionDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleMentionDropdownComponent, selectors: [["example-fate-mention-dropdown"]], inputs: { value: "value" }, outputs: { valueChange: "valueChange" }, decls: 2, vars: 1, consts: [["class", "repos", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "repos", 3, "click"]], template: function ExampleMentionDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleMentionDropdownComponent_li_1_Template, 2, 3, "li", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredList);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  border-bottom: 1px solid #DDD;\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(200, 200, 200, 0.5);\n}\n\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: rgba(200, 200, 200, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vbmFsdWYvZmF0ZS9zcmMvYXBwL2V4YW1wbGUtbWVudGlvbi1kcm9wZG93bi9leGFtcGxlLW1lbnRpb24tZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4YW1wbGUtbWVudGlvbi1kcm9wZG93bi9leGFtcGxlLW1lbnRpb24tZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FDQ2hCOztBREZBO0VBSUksVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7QUNFcEI7O0FEUkE7RUFTTSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7QUNHckI7O0FEZEE7RUFjUSxnQkFBZ0I7QUNJeEI7O0FEbEJBO0VBaUJRLG9DQUFrQztBQ0sxQzs7QUR0QkE7RUFvQlEsb0NBQWtDO0FDTTFDIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZS1tZW50aW9uLWRyb3Bkb3duL2V4YW1wbGUtbWVudGlvbi1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDAsMjAwLDIwMCwgMC41KTtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDAsMjAwLDIwMCwgMC41KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0IHVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG46aG9zdCB1bCBsaSB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpob3N0IHVsIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG46aG9zdCB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTtcbn1cblxuOmhvc3QgdWwgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpO1xufVxuIl19 */"] });
    return ExampleMentionDropdownComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleMentionDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'example-fate-mention-dropdown',
                templateUrl: './example-mention-dropdown.component.html',
                styleUrls: ['./example-mention-dropdown.component.scss']
            }]
    }], null, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/fate-bootstrap/fate-bootstrap.component.ts":
/*!************************************************************!*\
  !*** ./src/app/fate-bootstrap/fate-bootstrap.component.ts ***!
  \************************************************************/
/*! exports provided: FateBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateBootstrapComponent", function() { return FateBootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fate-ui/fate-ui.component */ "./src/app/fate-ui/fate-ui.component.ts");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fate-icon.service */ "./src/app/fate-icon.service.ts");
/* harmony import */ var _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fate-input/fate-input.component */ "./src/app/fate-input/fate-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");














var _c0 = function (a0) { return { "visible": a0 }; };
var instanceCounter = 0;
var FateBootstrapComponent = /** @class */ (function () {
    function FateBootstrapComponent(el, controller, parser, icon, factoryResolver) {
        this.buttons = _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_2__["defaultButtons"];
        // implentation of ControlValueAccessor:
        this.changed = new Array();
        this.clickOngoing = false;
        this.uiId = 'bootstrap-' + (instanceCounter++);
    }
    FateBootstrapComponent.prototype.blur = function (event) {
        if (!this.clickOngoing) {
            this.uiVisible = false;
        }
    };
    FateBootstrapComponent.prototype.mousedown = function (event) {
        this.clickOngoing = true;
    };
    FateBootstrapComponent.prototype.mouseup = function (event) {
        this.clickOngoing = false;
    };
    FateBootstrapComponent.prototype.focus = function (event) {
        this.uiVisible = true;
        console.info('boostrap focus!');
    };
    FateBootstrapComponent.prototype.writeValue = function (value) {
        this.passthrough = value;
    };
    FateBootstrapComponent.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    FateBootstrapComponent.prototype.registerOnTouched = function (fn) { };
    // change callback
    FateBootstrapComponent.prototype.onChange = function (value) {
        this.passthrough = value;
        this.changed.forEach(function (f) { return f(value); });
    };
    FateBootstrapComponent.ɵfac = function FateBootstrapComponent_Factory(t) { return new (t || FateBootstrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_controller_service__WEBPACK_IMPORTED_MODULE_3__["FateControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_parser_service__WEBPACK_IMPORTED_MODULE_4__["FateParserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_icon_service__WEBPACK_IMPORTED_MODULE_5__["FateIconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
    FateBootstrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FateBootstrapComponent, selectors: [["fate-bootstrap"]], hostBindings: function FateBootstrapComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function FateBootstrapComponent_focusout_HostBindingHandler($event) { return ctx.blur($event); })("mousedown", function FateBootstrapComponent_mousedown_HostBindingHandler($event) { return ctx.mousedown($event); })("mouseup", function FateBootstrapComponent_mouseup_HostBindingHandler($event) { return ctx.mouseup($event); })("focusin", function FateBootstrapComponent_focusin_HostBindingHandler($event) { return ctx.focus($event); });
        } }, inputs: { row: "row", placeholder: "placeholder", buttons: "buttons" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FateBootstrapComponent, multi: true }
            ])], decls: 2, vars: 9, consts: [["customClass", "form-control", 3, "uiId", "row", "placeholder", "ngModel", "ngModelChange"], [1, "tooltip", "tooltip-inner", 3, "uiId", "buttons", "ngClass"]], template: function FateBootstrapComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fate-input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FateBootstrapComponent_Template_fate_input_ngModelChange_0_listener($event) { return ctx.onChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fate-ui", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uiId", ctx.uiId)("row", ctx.row)("placeholder", ctx.placeholder)("ngModel", ctx.passthrough);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uiId", ctx.uiId)("buttons", ctx.buttons)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.uiVisible));
        } }, directives: [_fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_6__["FateInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_2__["FateUiComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  margin-bottom: 10px;\n  display: block;\n  position: relative;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 300ms;\n  text-align: left;\n  background: #222;\n  color: #eee;\n  max-width: 100%;\n}\n\n[_nghost-%COMP%]   fate-ui.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button {\n  color: #eee;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button:active, [_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button.enabled, [_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button.with-dropdown {\n  background-color: #555;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button:hover, [_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button:focus {\n  background-color: #666;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-separator {\n  background-color: #666 !important;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-dropdown {\n  background-color: #555;\n  border-color: #666;\n}\n\n[_nghost-%COMP%]   fate-input[_ngcontent-%COMP%]     .fate-edit-target {\n  resize: vertical;\n  padding: .375rem .75rem;\n}\n\n[_nghost-%COMP%]   fate-input[_ngcontent-%COMP%]     .fate-inline-dropdown {\n  display: block;\n  transition: opacity 300ms;\n  background: #222;\n  color: #eee;\n  border-radius: .25rem;\n  z-index: 1080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vbmFsdWYvZmF0ZS9zcmMvYXBwL2ZhdGUtYm9vdHN0cmFwL2ZhdGUtYm9vdHN0cmFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYXRlLWJvb3RzdHJhcC9mYXRlLWJvb3RzdHJhcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FDQ3BCOztBREpBO0VBTUksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFFWCxlQUFlO0FDQ25COztBRGhCQTtFQWtCTSxVQUFVO0VBQ1YsbUJBQW1CO0FDRXpCOztBRHJCQTtFQXdCUSxXQUFXO0FDQ25COztBRHpCQTtFQTZCVSxzQkFBc0I7QUNBaEM7O0FEN0JBO0VBaUNVLHNCQUFzQjtBQ0FoQzs7QURqQ0E7RUFxQ1EsaUNBQWlDO0FDQXpDOztBRHJDQTtFQXdDUSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FDQzFCOztBRDFDQTtFQWlEUSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FDSC9COztBRC9DQTtFQXFEUSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGFBQWE7QUNGckIiLCJmaWxlIjoic3JjL2FwcC9mYXRlLWJvb3RzdHJhcC9mYXRlLWJvb3RzdHJhcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmYXRlLXVpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICBjb2xvcjogI2VlZTtcblxuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgICYudmlzaWJsZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLmZhdGUtdWktYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNlZWU7XG5cbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICYuZW5hYmxlZCxcbiAgICAgICAgJi53aXRoLWRyb3Bkb3duIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5mYXRlLXVpLXNlcGFyYXRvciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5mYXRlLXVpLWRyb3Bkb3duIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjY2O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZhdGUtaW5wdXQge1xuICAgIDo6bmctZGVlcCB7XG4gICAgICAuZmF0ZS1lZGl0LXRhcmdldCB7XG4gICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xuICAgICAgfVxuICAgICAgLmZhdGUtaW5saW5lLWRyb3Bkb3duIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgICAgIHotaW5kZXg6IDEwODA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbjpob3N0IGZhdGUtdWkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgY29sb3I6ICNlZWU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgZmF0ZS11aS52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuOmhvc3QgZmF0ZS11aSA6Om5nLWRlZXAgLmZhdGUtdWktYnV0dG9uIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbjpob3N0IGZhdGUtdWkgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbjphY3RpdmUsIDpob3N0IGZhdGUtdWkgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbi5lbmFibGVkLCA6aG9zdCBmYXRlLXVpIDo6bmctZGVlcCAuZmF0ZS11aS1idXR0b24ud2l0aC1kcm9wZG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG59XG5cbjpob3N0IGZhdGUtdWkgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbjpob3ZlciwgOmhvc3QgZmF0ZS11aSA6Om5nLWRlZXAgLmZhdGUtdWktYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuOmhvc3QgZmF0ZS11aSA6Om5nLWRlZXAgLmZhdGUtdWktc2VwYXJhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCBmYXRlLXVpIDo6bmctZGVlcCAuZmF0ZS11aS1kcm9wZG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGJvcmRlci1jb2xvcjogIzY2Njtcbn1cblxuOmhvc3QgZmF0ZS1pbnB1dCA6Om5nLWRlZXAgLmZhdGUtZWRpdC10YXJnZXQge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbn1cblxuOmhvc3QgZmF0ZS1pbnB1dCA6Om5nLWRlZXAgLmZhdGUtaW5saW5lLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHotaW5kZXg6IDEwODA7XG59XG4iXX0= */"] });
    return FateBootstrapComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateBootstrapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fate-bootstrap',
                templateUrl: './fate-bootstrap.component.html',
                styleUrls: ['./fate-bootstrap.component.scss'],
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FateBootstrapComponent, multi: true }
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__["FateControllerService"] }, { type: _fate_parser_service__WEBPACK_IMPORTED_MODULE_4__["FateParserService"] }, { type: _fate_icon_service__WEBPACK_IMPORTED_MODULE_5__["FateIconService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusout', ['$event']]
        }], mousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], mouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusin', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/fate-controller.service.ts":
/*!********************************************!*\
  !*** ./src/app/fate-controller.service.ts ***!
  \********************************************/
/*! exports provided: FateControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateControllerService", function() { return FateControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");
/* harmony import */ var _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fate-link-dropdown/fate-link-dropdown.component */ "./src/app/fate-link-dropdown/fate-link-dropdown.component.ts");





var FateControllerService = /** @class */ (function () {
    function FateControllerService() {
        // List of available commands, alphabetically
        // see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
        this.actionMapping = {
            'bold': {
                command: 'bold',
                name: 'Bold',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].BOLD
            },
            'italic': {
                command: 'italic',
                name: 'Italic',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ITALIC
            },
            'underline': {
                command: 'underline',
                name: 'Underlined',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNDERLINE
            },
            'strike': {
                command: 'strikeThrough',
                name: 'Strike Through',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].STRIKETHROUGH
            },
            'subscript': {
                command: 'subscript',
                name: 'Subscript',
                label: 'sub',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUBSCRIPT
            },
            'superscript': {
                command: 'superscript',
                name: 'Superscript',
                label: 'sup',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUPERSCRIPT
            },
            'heading1': {
                command: 'formatBlock',
                value: 'H1',
                name: '1st Header',
                label: 'h1',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER1
            },
            'heading2': {
                command: 'formatBlock',
                value: 'H2',
                name: '2nd Header',
                label: 'h2',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER2
            },
            'heading3': {
                command: 'formatBlock',
                value: 'H3',
                name: '3rd Header',
                label: 'h3',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER3
            },
            'heading4': {
                command: 'formatBlock',
                value: 'H4',
                name: '4th Header',
                label: 'h4',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER4
            },
            'heading5': {
                command: 'formatBlock',
                value: 'H5',
                name: '5th Header',
                label: 'h5',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER5
            },
            'heading6': {
                command: 'formatBlock',
                value: 'H6',
                name: '6th Header',
                label: 'h6',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER6
            },
            'normal': {
                command: 'formatBlock',
                value: 'DIV',
                name: 'Normal',
                label: 'p',
            },
            'indent': {
                command: 'indent',
                name: 'Indent',
            },
            'outdent': {
                command: 'outdent',
                name: 'Outdent',
            },
            'ordered': {
                command: 'insertOrderedList',
                name: 'Ordered List',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ORDERED_LIST
            },
            'unordered': {
                command: 'insertUnorderedList',
                name: 'Unorder List',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNORDERED_LIST
            },
            'center': {
                command: 'justifyCenter',
                name: 'Center',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_CENTER
            },
            'justify': {
                command: 'justifyFull',
                name: 'Justify',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].JUSTIFY
            },
            'left': {
                command: 'justifyLeft',
                name: 'Left',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_LEFT
            },
            'right': {
                command: 'justifyRight',
                name: 'Right',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_RIGHT
            },
            'undo': {
                command: 'undo',
                name: 'Undo',
            },
            'redo': {
                command: 'redo',
                name: 'Redo',
            },
            'clean': {
                command: 'removeFormat',
                name: 'Remove Formating',
            },
            'link': {
                command: 'createLink',
                undo: 'unlink',
                name: 'Link',
                detect: _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LINK,
                dropdown: _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["FateLinkDropdownComponent"]
            }
        };
        this.inlineActionMapping = {};
        this.commandsPipe = {
            default: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]()
        };
        this.enabledActions = {
            default: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]()
        };
    }
    FateControllerService.prototype.registerAction = function (name, action) {
        if (this.actionMapping[name]) {
            throw new Error('An action with the name "' + name + '" already exists!');
        }
        else {
            this.actionMapping[name] = action;
        }
    };
    FateControllerService.prototype.getAction = function (actionName) {
        return this.actionMapping[actionName] || false;
    };
    FateControllerService.prototype.registerInlineAction = function (name, action) {
        if (this.inlineActionMapping[name]) {
            throw new Error('An inline action with the name "' + name + '" already exists!');
        }
        else {
            this.inlineActionMapping[name] = action;
        }
    };
    FateControllerService.prototype.getInlineAction = function (context) {
        for (var _i = 0, _a = Object.keys(this.inlineActionMapping); _i < _a.length; _i++) {
            var action = _a[_i];
            var match = this.inlineActionMapping[action].regexp.exec(context);
            if (match) {
                this.inlineActionMapping[action].matched = match[1];
                return this.inlineActionMapping[action];
            }
        }
        return false;
    };
    FateControllerService.prototype.channel = function (channelId) {
        if (!this.commandsPipe[channelId]) {
            this.commandsPipe[channelId] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        return this.commandsPipe[channelId];
    };
    FateControllerService.prototype.enabled = function (channelId) {
        if (!this.enabledActions[channelId]) {
            this.enabledActions[channelId] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        return this.enabledActions[channelId];
    };
    FateControllerService.prototype.enableActions = function (channelId, nodes) {
        var actions = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            for (var action in this.actionMapping) {
                if (this.actionMapping[action].detect && this.actionMapping[action].detect === node.type) {
                    actions.push({ action: action, value: node.value });
                }
                else if (this.actionMapping[action].detect && typeof this.actionMapping[action].detect === 'function') {
                    var detected = this.actionMapping[action].detect(node);
                    if (detected) {
                        actions.push({ action: action, value: detected.value });
                    }
                }
            }
        }
        this.enabledActions[channelId].next(actions);
    };
    FateControllerService.prototype.do = function (channel, action, value) {
        if (this.actionMapping[action].dropdown && !value) {
            if (this.actionMapping[action].undo) {
                this.commandsPipe[channel].next({ name: this.actionMapping[action].undo, value: this.actionMapping[action].value || value });
            }
            else {
                throw new Error('Action "' + action + '"doesn\'t have a undo command');
            }
        }
        else {
            if (this.actionMapping[action].value && (typeof this.actionMapping[action].value === 'function')) {
                this.commandsPipe[channel].next({ name: this.actionMapping[action].command, value: this.actionMapping[action].value(value) });
            }
            else {
                this.commandsPipe[channel].next({ name: this.actionMapping[action].command, value: this.actionMapping[action].value || value });
            }
        }
    };
    FateControllerService.prototype.doInline = function (channel, action, value) {
        if (action.dropdown && !value) {
            if (action.undo) {
                this.commandsPipe[channel].next({ name: action.undo, value: action.value || value });
            }
            else {
                throw new Error('Action "' + action + '"doesn\'t have a undo command');
            }
        }
        else {
            if (action.value && (typeof action.value === 'function')) {
                this.commandsPipe[channel].next({ name: action.command, value: action.value(value) });
            }
            else {
                this.commandsPipe[channel].next({ name: action.command, value: action.value || value });
            }
        }
    };
    FateControllerService.prototype.undo = function (channel, action, value) {
        var mapping = this.actionMapping[action].undo;
        // TODO
    };
    FateControllerService.ɵfac = function FateControllerService_Factory(t) { return new (t || FateControllerService)(); };
    FateControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FateControllerService, factory: FateControllerService.ɵfac, providedIn: 'root' });
    return FateControllerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateControllerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fate-fontawsome-legacy-icon.service.ts":
/*!********************************************************!*\
  !*** ./src/app/fate-fontawsome-legacy-icon.service.ts ***!
  \********************************************************/
/*! exports provided: FateFontawsomeLegacyIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateFontawsomeLegacyIconService", function() { return FateFontawsomeLegacyIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-icon.service */ "./src/app/fate-icon.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FateFontawsomeLegacyIconService = /** @class */ (function (_super) {
    __extends(FateFontawsomeLegacyIconService, _super);
    function FateFontawsomeLegacyIconService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconMapping = {
            'bold': '<i class="fa fa-bold"></i>',
            'italic': '<i class="fa fa-italic"></i>',
            'underline': '<i class="fa fa-underline"></i>',
            'strike': '<i class="fa fa-strikethrough"></i>',
            'subscript': '<i class="fa fa-subscript"></i>',
            'superscript': '<i class="fa fa-superscript"></i>',
            'indent': '<i class="fa fa-indent"></i>',
            'outdent': '<i class="fa fa-outdent"></i>',
            'ordered': '<i class="fa fa-list-ol"></i>',
            'unordered': '<i class="fa fa-list-ul"></i>',
            'center': '<i class="fa fa-align-center"></i>',
            'justify': '<i class="fa fa-align-justify"></i>',
            'left': '<i class="fa fa-align-left"></i>',
            'right': '<i class="fa fa-align-right"></i>',
            'undo': '<i class="fa fa-undo"></i>',
            'redo': '<i class="fa fa-repeat"></i>',
            'clean': '<i class="fa fa-eraser"></i>',
            'link': '<i class="fa fa-link"></i>',
        };
        return _this;
    }
    FateFontawsomeLegacyIconService.ɵfac = function FateFontawsomeLegacyIconService_Factory(t) { return ɵFateFontawsomeLegacyIconService_BaseFactory(t || FateFontawsomeLegacyIconService); };
    FateFontawsomeLegacyIconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FateFontawsomeLegacyIconService, factory: FateFontawsomeLegacyIconService.ɵfac, providedIn: 'root' });
    return FateFontawsomeLegacyIconService;
}(_fate_icon_service__WEBPACK_IMPORTED_MODULE_1__["FateIconService"]));

var ɵFateFontawsomeLegacyIconService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FateFontawsomeLegacyIconService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateFontawsomeLegacyIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fate-html-parser.service.ts":
/*!*********************************************!*\
  !*** ./src/app/fate-html-parser.service.ts ***!
  \*********************************************/
/*! exports provided: FateHtmlParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateHtmlParserService", function() { return FateHtmlParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-node */ "./src/app/fate-node.ts");
/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};




var FateHtmlParserService = /** @class */ (function () {
    function FateHtmlParserService() {
        this.p = document.createElement('p');
    }
    FateHtmlParserService.prototype.parse = function (html) {
        var div = document.createElement('div');
        div.innerHTML = html;
        return this.parseElement(div);
    };
    ;
    FateHtmlParserService.prototype.parseElement = function (element) {
        var nodes = this.parseType(element);
        var currentNode = nodes[0];
        var isABlock = (currentNode.type === _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH);
        for (var i = 1; i < nodes.length; i++) {
            currentNode.children.push(nodes[i]);
            currentNode = nodes[i];
            if (currentNode.type === _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH) {
                isABlock = true;
            }
        }
        var previousNodeWasText = false;
        for (var i = 0; i < element.childNodes.length; i++) {
            var child = element.childNodes[i];
            // pick ahead to look for <br>
            if ((i < element.childNodes.length - 1) &&
                (this.isLinebreak(element.childNodes[i + 1])) &&
                !(isABlock && i === element.childNodes.length - 2) // The last child is a BR in a block, this can be ignored
            ) {
                previousNodeWasText = false;
                if (child instanceof Text) {
                    // wrap the text in a paragraph
                    var paragraph = new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH);
                    paragraph.children.push(child.data);
                    currentNode.children.push(paragraph);
                }
                else if (child instanceof HTMLElement) {
                    // insert an empty paragraph
                    currentNode.children.push(this.parseElement(child));
                    currentNode.children.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH));
                }
                else {
                    // ignore
                }
            }
            else {
                if (child instanceof Text) {
                    // If two "pure" text node follow one another we can safely merge then as one (for i > 0)
                    if (previousNodeWasText) {
                        currentNode.children[currentNode.children.length - 1] = currentNode.children[currentNode.children.length - 1] + child.data;
                    }
                    else {
                        currentNode.children.push(child.data);
                    }
                    previousNodeWasText = true;
                }
                else if (child instanceof HTMLElement) {
                    currentNode.children.push(this.parseElement(child));
                    previousNodeWasText = false;
                }
                else {
                    // ignore
                }
            }
        }
        return nodes[0];
    };
    FateHtmlParserService.prototype.findParentNodes = function (node, until) {
        var nodes = [];
        var current = (node.nodeType === 1) ? node : (node.parentElement || node.parentNode);
        while (current !== until) {
            if (current instanceof HTMLElement) {
                nodes.push.apply(nodes, this.parseType(current));
            }
            current = current.parentElement || node.parentNode;
        }
        return nodes;
    };
    FateHtmlParserService.prototype.getAdditonalStyle = function (element) {
        var style = element.style;
        var detectedStyleNode = [];
        // Look for alignement
        var align = element.getAttribute('align') || style.textAlign;
        switch (align) {
            case 'left':
                detectedStyleNode.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_LEFT));
                break;
            case 'center':
                detectedStyleNode.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_CENTER));
                break;
            case 'right':
                detectedStyleNode.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_RIGHT));
                break;
            case 'justify':
                detectedStyleNode.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].JUSTIFY));
                break;
        }
        // Look for color
        var color = element.getAttribute('color') || style.color;
        if (color) {
            detectedStyleNode.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].COLOR, color));
        }
        // Look for size
        var size = element.getAttribute('size') || style.fontSize;
        if (size) {
            detectedStyleNode.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SIZE, size));
        }
        // Look for family
        var typeface = element.getAttribute('face') || style.fontFamily;
        if (typeface) {
            detectedStyleNode.push(new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].TYPEFACE, typeface));
        }
        return detectedStyleNode;
    };
    FateHtmlParserService.prototype.parseType = function (element) {
        var additionaStyle = this.getAdditonalStyle(element);
        switch (element.nodeName) {
            case 'H1':
                return __spreadArrays([new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER1)], additionaStyle);
            case 'H2':
                return __spreadArrays([new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER2)], additionaStyle);
            case 'H3':
                return __spreadArrays([new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER3)], additionaStyle);
            case 'H4':
                return __spreadArrays([new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER4)], additionaStyle);
            case 'H5':
                return __spreadArrays([new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER5)], additionaStyle);
            case 'H6':
                return __spreadArrays([new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER6)], additionaStyle);
            case 'B':
            case 'STRONG':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].BOLD)];
            case 'I':
            case 'EM':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ITALIC)];
            case 'U':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNDERLINE)];
            case 'STRIKE':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].STRIKETHROUGH)];
            case 'SUB':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUBSCRIPT)];
            case 'SUP':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUPERSCRIPT)];
            case 'A':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LINK, element.getAttribute('href'))];
            case 'OL':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ORDERED_LIST)];
            case 'UL':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNORDERED_LIST)];
            case 'LI':
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LISTITEM)];
            case 'DIV':
            case 'P':
                if (additionaStyle.length > 0) {
                    return __spreadArrays(additionaStyle);
                }
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH)];
            case 'BLOCKQUOTE':
                // FIXME: this doesn't work on FF
                if (element.style.marginLeft === '40px') {
                    return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].INDENT)];
                }
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].NONE)];
            default:
                if (additionaStyle.length > 0) {
                    return __spreadArrays(additionaStyle);
                }
                return [new _fate_node__WEBPACK_IMPORTED_MODULE_1__["FateNode"](_fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].NONE)];
        }
    };
    FateHtmlParserService.prototype.parseValue = function (element) {
        switch (element.nodeName) {
            case 'A':
                return element.getAttribute('href');
        }
        return undefined;
    };
    FateHtmlParserService.prototype.serializeType = function (node) {
        switch (node.type) {
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].PARAGRAPH:
                return '<div>' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER1:
                return '<h1>' + this.serialize(node, true) + '</h1>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER2:
                return '<h2>' + this.serialize(node, true) + '</h2>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER3:
                return '<h3>' + this.serialize(node, true) + '</h3>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER4:
                return '<h4>' + this.serialize(node, true) + '</h4>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER5:
                return '<h5>' + this.serialize(node, true) + '</h5>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].HEADER6:
                return '<h6>' + this.serialize(node, true) + '</h6>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].QUOTE:
                return '<quote>' + this.serialize(node) + '</quote>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].CODE:
                return '<code>' + this.serialize(node) + '</code>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].BOLD:
                return '<strong>' + this.serialize(node) + '</strong>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ITALIC:
                return '<em>' + this.serialize(node) + '</em>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNDERLINE:
                return '<u>' + this.serialize(node) + '</u>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].STRIKETHROUGH:
                return '<strike>' + this.serialize(node) + '</strike>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUBSCRIPT:
                return '<sub>' + this.serialize(node) + '</sub>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SUPERSCRIPT:
                return '<sup>' + this.serialize(node) + '</sup>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LINK:
                return '<a href="' + node.value + '">' + this.serialize(node) + '</a>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ORDERED_LIST:
                return '<ol>' + this.serialize(node) + '</ol>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].UNORDERED_LIST:
                return '<ul>' + this.serialize(node) + '</ul>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].LISTITEM:
                return '<li>' + this.serialize(node) + '</li>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_LEFT:
                return '<div style="text-align: left;">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_CENTER:
                return '<div style="text-align: center;">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].ALIGN_RIGHT:
                return '<div style="text-align: right">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].JUSTIFY:
                return '<div style="text-align: justify;">' + this.serialize(node, true) + '</div>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].INDENT:
                return '<blockquote style="margin-left: 40px">' + this.serialize(node, true) + '</blockquote>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].COLOR:
                return '<font color="' + node.value + '">' + this.serialize(node) + '</font>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].SIZE:
                return '<font size="' + node.value + '">' + this.serialize(node) + '</font>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].TYPEFACE:
                return '<font face="' + node.value + '">' + this.serialize(node) + '</font>';
            case _fate_type_enum__WEBPACK_IMPORTED_MODULE_2__["FateType"].NONE:
                return this.serialize(node);
        }
    };
    ;
    FateHtmlParserService.prototype.isLinebreak = function (child) {
        return (child instanceof HTMLElement && child.nodeName === 'BR');
    };
    FateHtmlParserService.prototype.encodeHtml = function (text) {
        // From https://stackoverflow.com/a/29482788/829139
        this.p.textContent = text;
        return this.p.innerHTML;
    };
    // Saves a Tree in string representation
    FateHtmlParserService.prototype.serialize = function (node, fallbackToBr) {
        var _this = this;
        if (fallbackToBr === void 0) { fallbackToBr = false; }
        var serialized = '';
        node.children.forEach(function (child) {
            if (typeof child === 'string') {
                serialized += _this.encodeHtml(child);
            }
            else {
                serialized += _this.serializeType(child);
            }
        });
        if (fallbackToBr && !serialized) {
            serialized = '<br>';
        }
        return serialized;
    };
    ;
    FateHtmlParserService.ɵfac = function FateHtmlParserService_Factory(t) { return new (t || FateHtmlParserService)(); };
    FateHtmlParserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FateHtmlParserService, factory: FateHtmlParserService.ɵfac, providedIn: 'root' });
    return FateHtmlParserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateHtmlParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fate-icon.service.ts":
/*!**************************************!*\
  !*** ./src/app/fate-icon.service.ts ***!
  \**************************************/
/*! exports provided: FateIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateIconService", function() { return FateIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FateIconService = /** @class */ (function () {
    function FateIconService() {
        this.iconMapping = {
            'bold': '<i class="fas fa-bold"></i>',
            'italic': '<i class="fas fa-italic"></i>',
            'underline': '<i class="fas fa-underline"></i>',
            'strike': '<i class="fas fa-strikethrough"></i>',
            'subscript': '<i class="fas fa-subscript"></i>',
            'superscript': '<i class="fas fa-superscript"></i>',
            'indent': '<i class="fas fa-indent"></i>',
            'outdent': '<i class="fas fa-outdent"></i>',
            'ordered': '<i class="fas fa-list-ol"></i>',
            'unordered': '<i class="fas fa-list-ul"></i>',
            'center': '<i class="fas fa-align-center"></i>',
            'justify': '<i class="fas fa-align-justify"></i>',
            'left': '<i class="fas fa-align-left"></i>',
            'right': '<i class="fas fa-align-right"></i>',
            'undo': '<i class="fas fa-undo-alt"></i>',
            'redo': '<i class="fas fa-redo-alt"></i>',
            'clean': '<i class="fas fa-eraser"></i>',
            'link': '<i class="fas fa-link"></i>',
        };
    }
    FateIconService.prototype.getIcon = function (actionName) {
        return this.iconMapping[actionName];
    };
    FateIconService.ɵfac = function FateIconService_Factory(t) { return new (t || FateIconService)(); };
    FateIconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FateIconService, factory: FateIconService.ɵfac, providedIn: 'root' });
    return FateIconService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fate-input/fate-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fate-input/fate-input.component.ts ***!
  \****************************************************/
/*! exports provided: FateInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateInputComponent", function() { return FateInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fate-html-parser.service */ "./src/app/fate-html-parser.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony import */ var _fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fate-legacy-browser.service */ "./src/app/fate-legacy-browser.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");














var _c0 = ["dropdown"];
function FateInputComponent_ng_template_1_Template(rf, ctx) { }
var _c1 = function (a0) { return { empty: a0 }; };
var FateInputComponent = /** @class */ (function () {
    function FateInputComponent(el, controller, htmlParser, parser, sanitizer, factoryResolver, legacyBrowser) {
        this.el = el;
        this.controller = controller;
        this.htmlParser = htmlParser;
        this.parser = parser;
        this.sanitizer = sanitizer;
        this.factoryResolver = factoryResolver;
        this.legacyBrowser = legacyBrowser;
        this.uiId = 'default';
        this.placeholder = '';
        this.empty = true;
        this.isFocused = false;
        // implentation of ControlValueAccessor:
        this.changed = new Array();
    }
    FateInputComponent.prototype.reactToChanges = function () {
        var tree = this.htmlParser.parseElement(this.editTarget);
        var serializedTree = this.parser.serialize(tree);
        this.changed.forEach(function (f) { return f(serializedTree); });
    };
    FateInputComponent.prototype.ngOnInit = function () {
        this.subscribeToUi(this.uiId);
    };
    FateInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editTarget = this.el.nativeElement.querySelector('.fate-edit-target');
        if (this.row) {
            this.computeHeight();
        }
        this.editTarget.addEventListener('click', function (event) {
            console.debug('click');
            // On click we save the text Selection
            _this.saveSelection();
            // We check if there is a dropdown matching this context
            _this.checkForDropdownContext();
        });
        this.editTarget.addEventListener('keyup', function (event) {
            console.debug('keypressed');
            // On click we save the text Selection
            _this.saveSelection();
            // We check if there is a dropdown matching this context
            _this.checkForDropdownContext();
        });
        this.editTarget.addEventListener('focus', function (event) {
            console.debug('(' + _this.uiId + ') focus');
            // On focus we restore it
            _this.restoreSelection();
            _this.isFocused = true;
        });
        this.editTarget.addEventListener('blur', function (event) {
            console.debug('(' + _this.uiId + ') blur');
            _this.isFocused = false;
            _this.saveSelection();
            if (_this.dropdownComponent) {
                setTimeout(function () {
                    _this.inlineAction = null;
                    _this.dropdownComponent.destroy();
                }, 300);
                // this.inlineAction = null;
                // this.dropdownComponent.destroy();
            }
        });
        this.editTarget.addEventListener('keydown', function (event) {
            console.debug('keydown', event);
            var stopDefault = function () {
                event.preventDefault();
                event.stopPropagation();
            };
            var stopDefaultAndForceUpdate = function () {
                stopDefault();
                _this.checkEmpty();
                _this.reactToChanges();
            };
            // This is needed because, if the current selection is part
            // of a non-editable child of the input, the default delete won't
            // work.
            // This case can happen if there is a cutom element that
            // was inserted by some custom controller.
            //
            // Some constraints for a custom block to work on top of contenteditable=false:
            // -moz-user-select: none;
            // -webkit-user-modify: read-only;
            //
            // Note: It may make sense to delete the selection for normal text
            // input too but for now we only do it on deletion.
            if ((event.key === 'Backspace' || event.key === 'Delete') && _this.selectionRange) {
                var node = _this.selectionRange.commonAncestorContainer;
                console.debug('Deletion', node);
                if (node instanceof HTMLElement && !node.isContentEditable) {
                    // this is the case on firefox
                    console.debug('deleting inside un-editable block detected');
                    _this.selectionRange.selectNode(node);
                    _this.selectionRange.deleteContents();
                    stopDefaultAndForceUpdate();
                }
                else if (node.nodeName === '#text' && !_this.legacyBrowser.findParentElement(node).isContentEditable) {
                    // this is the case on webkit
                    console.debug('deleting inside un-editable block detected');
                    _this.selectionRange.selectNode(_this.legacyBrowser.findParentElement(node));
                    _this.selectionRange.deleteContents();
                    stopDefaultAndForceUpdate();
                }
            }
            // This is needed because, there is a bug in Firefox that prevent
            // deleting a uneditable element inside an editable element. So we
            // reimplement the whole function for all browsers.
            if (event.key === 'Backspace' && _this.selectionRange) {
                var node = _this.selectionRange.commonAncestorContainer;
                if (_this.selectionRange.collapsed === true &&
                    _this.selectionRange.startOffset === 0 &&
                    node.previousSibling instanceof HTMLElement &&
                    !node.previousSibling.isContentEditable) {
                    node.previousSibling.remove();
                    stopDefaultAndForceUpdate();
                }
            }
            else if (event.key === 'Delete' && _this.selectionRange) {
                var node = _this.selectionRange.commonAncestorContainer;
                if (_this.selectionRange.collapsed === true &&
                    _this.selectionRange.endContainer.nodeName === '#text' &&
                    _this.selectionRange.endOffset === _this.selectionRange.endContainer.length &&
                    node.nextSibling instanceof HTMLElement &&
                    !node.nextSibling.isContentEditable) {
                    node.nextSibling.remove();
                    stopDefaultAndForceUpdate();
                }
            }
            // If a dropdown is currently being displayed we use the up/down
            // key to navigate its content and return to select the selected
            // element
            if (_this.inlineAction) {
                if (event.key === 'Up' || event.key === 'ArrowUp') {
                    stopDefault();
                    _this.dropdownInstance.selectPrevious();
                }
                else if (event.key === 'Down' || event.key === 'ArrowDown') {
                    stopDefault();
                    _this.dropdownInstance.selectNext();
                }
                else if (event.key === 'Enter') {
                    stopDefault();
                    _this.dropdownInstance.confirmSelection();
                }
            }
            // IE11 doesn't support 'input' event
            if (window.document.documentMode) {
                setTimeout(function () {
                    console.debug('input event fallback');
                    _this.checkEmpty();
                    _this.reactToChanges();
                }, 0);
            }
        });
        this.editTarget.addEventListener('input', function (event) {
            console.debug('input event');
            _this.checkEmpty();
            _this.reactToChanges();
        });
        var style = window.getComputedStyle(this.editTarget);
        this.editTarget.style.minHeight = this.getHeight(2);
    };
    FateInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes['uiId']) {
            this.subscribeToUi(this.uiId);
        }
        if (changes['row']) {
            if (this.editTarget) {
                this.computeHeight();
            }
        }
    };
    FateInputComponent.prototype.ngOnDestroy = function () {
        if (this.uiSubscription) {
            this.uiSubscription.unsubscribe();
        }
    };
    FateInputComponent.prototype.computeHeight = function () {
        this.editTarget.style.height = this.getHeight(this.row);
    };
    FateInputComponent.prototype.checkEmpty = function () {
        if (this.editTarget.innerHTML === '') {
            this.editTarget.innerHTML = '<br>';
            this.empty = true;
        }
        else if (this.editTarget.innerHTML === '<br>') {
            this.empty = true;
        }
        else {
            this.empty = false;
        }
    };
    FateInputComponent.prototype.getHeight = function (rowCount) {
        var style = window.getComputedStyle(this.editTarget);
        var height = this.editTarget.style.height = (parseInt(style.lineHeight, 10) * rowCount);
        if (style.boxSizing === 'border-box') {
            height += parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10) + parseInt(style.borderTopWidth, 10) + parseInt(style.borderBottomWidth, 10);
        }
        return height + 'px';
    };
    FateInputComponent.prototype.subscribeToUi = function (uiId) {
        var _this = this;
        console.debug('subscribing to ' + uiId, this.uiSubscription);
        if (this.uiSubscription) {
            this.uiSubscription.unsubscribe();
        }
        this.uiSubscription = this.controller.channel(uiId).subscribe(function (command) {
            // if input is not on focus we save current focus:
            var focus = document.activeElement;
            console.debug('(' + uiId + ') got command ' + command.name + '/' + command.value);
            _this.restoreSelection();
            if (command.name === 'insertHTML' && _this.selectionRange) {
                // If something is selected we assume that the goal is to replace it,
                // so first we delete the content
                _this.selectionRange.deleteContents();
                // insertHtml seems quite broken so we do it ourseleves
                _this.selectionRange.insertNode(document.createRange().createContextualFragment(command.value));
                // move cusor to the end of the newly inserted element
                _this.selectionRange.collapse(false);
                // Force the update of the model
                _this.checkEmpty();
                _this.reactToChanges();
            }
            else {
                document.execCommand(command.name, false, command.value);
            }
            _this.saveSelection();
            focus.focus();
        });
    };
    FateInputComponent.prototype.saveSelection = function () {
        if (this.selectionInEditableTarget()) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.selectionRange = sel.getRangeAt(0);
                console.debug('(' + this.uiId + ') saveSelection', this.selectionRange);
                this.detectStyle();
            }
        }
    };
    // Restors the current text selection
    FateInputComponent.prototype.restoreSelection = function () {
        if (this.selectionInEditableTarget()) {
            return;
        }
        console.debug('(' + this.uiId + ') restoreSelection', this.selectionRange);
        if (this.selectionRange) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(this.selectionRange);
        }
    };
    FateInputComponent.prototype.selectionInEditableTarget = function () {
        var sel = window.getSelection();
        var node = sel.getRangeAt && sel.rangeCount && sel.getRangeAt(0) && sel.getRangeAt(0).commonAncestorContainer;
        return node && (node === this.editTarget || this.legacyBrowser.findParent(node, '.fate-edit-target') === this.editTarget);
    };
    FateInputComponent.prototype.detectStyle = function () {
        var node = this.selectionRange.commonAncestorContainer;
        if (!node || (!(this.legacyBrowser.findParent(node, '.fate-edit-target') && node !== this.editTarget))) {
            // The current selection is not contained in the editable zone.
            // this is most likely due to the input being empty.
            return;
        }
        // special cases for FF when selection is obtained by double click:
        if ((this.selectionRange.endOffset === 0) &&
            (this.selectionRange.startContainer.nodeValue) &&
            (this.selectionRange.startOffset === this.selectionRange.startContainer.nodeValue.length)) {
            node = this.selectionRange.startContainer.nextSibling;
        }
        else if ((this.selectionRange.endOffset === 0) &&
            (this.selectionRange.startOffset === 0)) {
            node = this.selectionRange.startContainer.parentElement;
        }
        else if ((this.selectionRange.commonAncestorContainer === this.editTarget) &&
            (this.selectionRange.startContainer === this.editTarget) &&
            (this.selectionRange.endContainer === this.editTarget)) {
            node = this.selectionRange.commonAncestorContainer.childNodes[this.selectionRange.startOffset];
        }
        if (node && node !== this.editTarget) {
            var nodes = this.htmlParser.findParentNodes(node, this.editTarget);
            console.debug('  -> detected actions: ', nodes);
            this.controller.enableActions(this.uiId, nodes);
        }
    };
    FateInputComponent.prototype.writeValue = function (value) {
        if (value) {
            this.content = this.sanitizer.bypassSecurityTrustHtml(this.htmlParser.serialize(this.parser.parse(value)));
            this.empty = false;
        }
        else {
            this.content = this.sanitizer.bypassSecurityTrustHtml('<br>');
            this.empty = true;
        }
        this.selectionRange = undefined;
    };
    FateInputComponent.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    FateInputComponent.prototype.registerOnTouched = function (fn) { };
    FateInputComponent.prototype.checkForDropdownContext = function () {
        var startPos = Math.max(this.selectionRange.startOffset - 20, 0);
        var length = this.selectionRange.startOffset - startPos;
        var context = this.selectionRange.startContainer.textContent.substr(startPos, length);
        var inlineAction = this.controller.getInlineAction(context);
        if (inlineAction) {
            if (!this.inlineAction || this.inlineAction.dropdown !== inlineAction.dropdown) {
                this.inlineAction = inlineAction;
                this.initDropdown(inlineAction, this.selectionRange.getBoundingClientRect());
            }
            else {
                this.inlineAction = inlineAction;
                this.updateDropdown(inlineAction.matched);
            }
        }
        else if (this.dropdownComponent) {
            this.inlineAction = null;
            this.dropdownComponent.destroy();
        }
    };
    FateInputComponent.prototype.initDropdown = function (actionComponent, position) {
        var _this = this;
        // set the dropdown component
        if (this.dropdownComponent) {
            this.dropdownComponent.destroy();
        }
        var factory = this.factoryResolver.resolveComponentFactory(actionComponent.dropdown);
        var component = factory.create(this.viewContainerRef.parentInjector);
        if (component.instance.valueChange) {
            component.instance.value = actionComponent.matched;
            component.instance.valueChange.subscribe(function (value) {
                _this.editTarget.focus();
                var end = _this.selectionRange.endOffset;
                _this.selectionRange.setStart(_this.selectionRange.endContainer, end - actionComponent.matched.length);
                _this.controller.doInline(_this.uiId, _this.inlineAction, value);
                // delete the dropdown
                _this.inlineAction = null;
                _this.dropdownComponent.destroy();
            });
            this.dropdownComponent = this.viewContainerRef.insert(component.hostView);
            this.dropdownInstance = component.instance;
            this.updateDropdownPosition();
        }
        else {
            throw new Error('The component used as a dropdown doesn\'t contain a valueChange emmiter!');
        }
    };
    FateInputComponent.prototype.updateDropdown = function (value) {
        this.dropdownInstance.value = value;
        this.updateDropdownPosition();
    };
    FateInputComponent.prototype.updateDropdownPosition = function () {
        if (this.inlineAction.display === 'contextual') {
            // create a selection to get the size of the matching text
            var parentOffsetBB = this.el.nativeElement.offsetParent.getBoundingClientRect();
            var range = this.selectionRange.cloneRange();
            var end = range.endOffset;
            range.setStart(range.endContainer, end - this.inlineAction.matched.length);
            var boundingBox = range.getBoundingClientRect();
            this.dropdownPostionTop = (boundingBox.top + boundingBox.height - parentOffsetBB.top) + 'px';
            this.dropdownPostionLeft = (boundingBox.left - parentOffsetBB.left) + 'px';
        }
    };
    FateInputComponent.ɵfac = function FateInputComponent_Factory(t) { return new (t || FateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_controller_service__WEBPACK_IMPORTED_MODULE_3__["FateControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_html_parser_service__WEBPACK_IMPORTED_MODULE_4__["FateHtmlParserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_parser_service__WEBPACK_IMPORTED_MODULE_5__["FateParserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_6__["FateLegacyBrowserService"])); };
    FateInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FateInputComponent, selectors: [["fate-input"]], viewQuery: function FateInputComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewContainerRef = _t.first);
        } }, inputs: { uiId: "uiId", row: "row", customClass: "customClass", placeholder: "placeholder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FateInputComponent, multi: true }
            ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 15, consts: [[1, "fate-inline-dropdown"], ["dropdown", ""], ["contenteditable", "true", 3, "ngClass", "title", "innerHtml"]], template: function FateInputComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateInputComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.dropdownPostionTop)("left", ctx.dropdownPostionLeft);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.inlineAction)("contextual", (ctx.inlineAction == null ? null : ctx.inlineAction.display) === "contextual");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("fate-edit-target " + ctx.customClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.empty))("title", ctx.placeholder)("innerHtml", ctx.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: ["[_nghost-%COMP%]   div.fate-edit-target[_ngcontent-%COMP%] {\n      display: block;\n      padding: 10px;\n      border: 1px solid #DDD;\n      outline: 0;\n      resize: vertical;\n      overflow: auto;\n      background: #FFF;\n      color: #000;\n      overflow: visible;\n    }\n    [_nghost-%COMP%]   div.fate-edit-target.empty[_ngcontent-%COMP%]:not(:focus):before {\n      content:attr(title);\n      color: #636c72;\n    }\n    .fate-inline-dropdown[_ngcontent-%COMP%] {\n      border: 1px solid #DDD;\n      border-bottom: 0;\n    }\n    .fate-inline-dropdown.hidden[_ngcontent-%COMP%] {\n      display: none !important;\n    }\n    .fate-inline-dropdown.contextual[_ngcontent-%COMP%] {\n      position: absolute;\n      background: #FFF;\n      box-shadow: 0 5px 30px -10px rgba(0,0,0,0.4);\n      border-bottom: 1px solid #CCC;\n    }\n    [_nghost-%COMP%] {\n      margin-bottom: 10px;\n      \n    }"] });
    return FateInputComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fate-input',
                template: "\n    <div class=\"fate-inline-dropdown\"\n         [class.hidden]=\"!inlineAction\"\n         [class.contextual]=\"inlineAction?.display === 'contextual'\"\n         [style.top]=\"dropdownPostionTop\"\n         [style.left]=\"dropdownPostionLeft\">\n      <ng-template #dropdown></ng-template>\n    </div>\n    <div [class]=\"'fate-edit-target ' + customClass\"\n         [ngClass]=\"{empty: empty}\"\n         contenteditable=\"true\"\n         [title]=\"placeholder\"\n         [innerHtml]=\"content\"></div>\n  ",
                styles: ["\n    :host div.fate-edit-target {\n      display: block;\n      padding: 10px;\n      border: 1px solid #DDD;\n      outline: 0;\n      resize: vertical;\n      overflow: auto;\n      background: #FFF;\n      color: #000;\n      overflow: visible;\n    }\n    :host div.fate-edit-target.empty:not(:focus):before {\n      content:attr(title);\n      color: #636c72;\n    }\n    .fate-inline-dropdown {\n      border: 1px solid #DDD;\n      border-bottom: 0;\n    }\n    .fate-inline-dropdown.hidden {\n      display: none !important;\n    }\n    .fate-inline-dropdown.contextual {\n      position: absolute;\n      background: #FFF;\n      box-shadow: 0 5px 30px -10px rgba(0,0,0,0.4);\n      border-bottom: 1px solid #CCC;\n    }\n    :host {\n      margin-bottom: 10px;\n      /*position: relative;*/\n    }\n  "],
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: FateInputComponent, multi: true }
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _fate_controller_service__WEBPACK_IMPORTED_MODULE_3__["FateControllerService"] }, { type: _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_4__["FateHtmlParserService"] }, { type: _fate_parser_service__WEBPACK_IMPORTED_MODULE_5__["FateParserService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_6__["FateLegacyBrowserService"] }]; }, { uiId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdown', {
                    read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
                    static: true,
                }]
        }] }); })();


/***/ }),

/***/ "./src/app/fate-legacy-browser.service.ts":
/*!************************************************!*\
  !*** ./src/app/fate-legacy-browser.service.ts ***!
  \************************************************/
/*! exports provided: FateLegacyBrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateLegacyBrowserService", function() { return FateLegacyBrowserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FateLegacyBrowserService = /** @class */ (function () {
    function FateLegacyBrowserService() {
    }
    FateLegacyBrowserService.prototype.findParentElement = function (node) {
        var el = node;
        while (!(el instanceof HTMLElement)) {
            el = el.parentElement || el.parentNode;
        }
        return el;
    };
    FateLegacyBrowserService.prototype.findParent = function (node, parentSelector) {
        if (Element.prototype.closest) {
            return this.findParentElement(node).closest(parentSelector);
        }
        var matchMethod;
        if (Element.prototype.matches) {
            matchMethod = 'matches';
        }
        else if (Element.prototype.msMatchesSelector) {
            matchMethod = 'msMatchesSelector';
        }
        else if (Element.prototype.webkitMatchesSelector) {
            matchMethod = 'webkitMatchesSelector';
        }
        else {
            throw Error('The browser is not supported ("closest" and "mateches" are missing)');
        }
        var el = node;
        do {
            try {
                if (Element.prototype[matchMethod].call(el, parentSelector)) {
                    return el;
                }
            }
            catch (e) {
                console.info('something happend', e);
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
    FateLegacyBrowserService.ɵfac = function FateLegacyBrowserService_Factory(t) { return new (t || FateLegacyBrowserService)(); };
    FateLegacyBrowserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FateLegacyBrowserService, factory: FateLegacyBrowserService.ɵfac, providedIn: 'root' });
    return FateLegacyBrowserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateLegacyBrowserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fate-link-dropdown/fate-link-dropdown.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/fate-link-dropdown/fate-link-dropdown.component.ts ***!
  \********************************************************************/
/*! exports provided: FateLinkDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateLinkDropdownComponent", function() { return FateLinkDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");



var FateLinkDropdownComponent = /** @class */ (function () {
    function FateLinkDropdownComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FateLinkDropdownComponent.prototype.changeValue = function (value) {
        this.value = value;
        this.valueChange.emit(value);
    };
    FateLinkDropdownComponent.prototype.selectNext = function () { };
    ;
    FateLinkDropdownComponent.prototype.selectPrevious = function () { };
    ;
    FateLinkDropdownComponent.prototype.confirmSelection = function () { };
    ;
    FateLinkDropdownComponent.ɵfac = function FateLinkDropdownComponent_Factory(t) { return new (t || FateLinkDropdownComponent)(); };
    FateLinkDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FateLinkDropdownComponent, selectors: [["fate-link-dropdown"]], inputs: { value: "value" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 1, consts: [["type", "text", "placeholder", "http://", 3, "ngModel", "ngModelChange"]], template: function FateLinkDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FateLinkDropdownComponent_Template_input_ngModelChange_0_listener($event) { return ctx.changeValue($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhdGUtbGluay1kcm9wZG93bi9mYXRlLWxpbmstZHJvcGRvd24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return FateLinkDropdownComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateLinkDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fate-link-dropdown',
                templateUrl: './fate-link-dropdown.component.html',
                styleUrls: ['./fate-link-dropdown.component.scss']
            }]
    }], null, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/fate-material-icon.service.ts":
/*!***********************************************!*\
  !*** ./src/app/fate-material-icon.service.ts ***!
  \***********************************************/
/*! exports provided: FateMaterialIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateMaterialIconService", function() { return FateMaterialIconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-icon.service */ "./src/app/fate-icon.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FateMaterialIconService = /** @class */ (function (_super) {
    __extends(FateMaterialIconService, _super);
    function FateMaterialIconService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconMapping = {
            'bold': '<i class="material-icons">format_bold</i>',
            'italic': '<i class="material-icons">format_italic</i>',
            'underline': '<i class="material-icons">format_underlined</i>',
            'strike': '<i class="material-icons">format_strikethrough</i>',
            'subscript': 'x<sub>2</sub>',
            'superscript': 'x<sup>2</sup>',
            'indent': '<i class="material-icons">format_indent_increase</i>',
            'outdent': '<i class="material-icons">format_indent_decrease</i>',
            'ordered': '<i class="material-icons">format_list_numbered</i>',
            'unordered': '<i class="material-icons">format_list_bulleted</i>',
            'center': '<i class="material-icons">format_align_center</i>',
            'justify': '<i class="material-icons">format_align_justify</i>',
            'left': '<i class="material-icons">format_align_left</i>',
            'right': '<i class="material-icons">format_align_right</i>',
            'undo': '<i class="material-icons">undo</i>',
            'redo': '<i class="material-icons">redo</i>',
            'clean': '<i class="material-icons">format_clear</i>',
            'link': '<i class="material-icons">link</i>',
        };
        return _this;
    }
    FateMaterialIconService.ɵfac = function FateMaterialIconService_Factory(t) { return ɵFateMaterialIconService_BaseFactory(t || FateMaterialIconService); };
    FateMaterialIconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FateMaterialIconService, factory: FateMaterialIconService.ɵfac, providedIn: 'root' });
    return FateMaterialIconService;
}(_fate_icon_service__WEBPACK_IMPORTED_MODULE_1__["FateIconService"]));

var ɵFateMaterialIconService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FateMaterialIconService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateMaterialIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fate-material/fate-material.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/fate-material/fate-material.component.ts ***!
  \**********************************************************/
/*! exports provided: FateMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateMaterialComponent", function() { return FateMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm5/coercion.js");
/* harmony import */ var _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fate-ui/fate-ui.component */ "./src/app/fate-ui/fate-ui.component.ts");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fate-icon.service */ "./src/app/fate-icon.service.ts");
/* harmony import */ var _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fate-material-icon.service */ "./src/app/fate-material-icon.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fate-input/fate-input.component */ "./src/app/fate-input/fate-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");


















var _c0 = function (a0) { return { "visible": a0 }; };
var instanceCounter = 0;
var FateMaterialComponent = /** @class */ (function () {
    function FateMaterialComponent(controller, parser, icon, el, ngControl) {
        this.ngControl = ngControl;
        this.buttons = _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["defaultButtons"];
        this.id = "" + this.uiId;
        this.clickOngoing = false;
        this.uiVisible = false;
        this._required = false;
        this._disabled = false;
        this.errorState = false;
        this.controlType = 'fate-material';
        this.describedBy = '';
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.focused = false;
        this.changed = new Array();
        this.uiId = 'material-' + (instanceCounter++);
        // Setting the value accessor directly (instead of using
        // the providers) to avoid running into a circular import.
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(FateMaterialComponent.prototype, "value", {
        get: function () {
            return this.passthrough;
        },
        set: function (value) {
            this.stateChanges.next();
            this.passthrough = value;
            this.changed.forEach(function (f) { return f(value); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    FateMaterialComponent.prototype.blur = function () {
        this.focused = false;
        this.stateChanges.next();
        if (!this.clickOngoing) {
            this.uiVisible = false;
        }
    };
    FateMaterialComponent.prototype.focus = function () {
        this.focused = true;
        this.uiVisible = true;
        this.stateChanges.next();
    };
    FateMaterialComponent.prototype.mousedown = function (event) {
        this.clickOngoing = true;
    };
    FateMaterialComponent.prototype.mouseup = function (event) {
        this.clickOngoing = false;
    };
    Object.defineProperty(FateMaterialComponent.prototype, "empty", {
        get: function () {
            return !this.passthrough || this.passthrough === '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "shouldLabelFloat", {
        get: function () {
            return this.focused || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (req) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FateMaterialComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (dis) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    FateMaterialComponent.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    FateMaterialComponent.prototype.onContainerClick = function (event) { };
    FateMaterialComponent.prototype.onChange = function (value) {
        this.passthrough = value;
        this.changed.forEach(function (f) { return f(value); });
        this.stateChanges.next();
    };
    FateMaterialComponent.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
    };
    FateMaterialComponent.prototype.writeValue = function (value) {
        this.passthrough = value;
        this.stateChanges.next();
    };
    FateMaterialComponent.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    FateMaterialComponent.prototype.registerOnTouched = function (fn) { };
    FateMaterialComponent.ɵfac = function FateMaterialComponent_Factory(t) { return new (t || FateMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_controller_service__WEBPACK_IMPORTED_MODULE_5__["FateControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_parser_service__WEBPACK_IMPORTED_MODULE_6__["FateParserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_icon_service__WEBPACK_IMPORTED_MODULE_7__["FateIconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 10)); };
    FateMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FateMaterialComponent, selectors: [["fate-material"]], hostVars: 2, hostBindings: function FateMaterialComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function FateMaterialComponent_focusout_HostBindingHandler() { return ctx.blur(); })("focusin", function FateMaterialComponent_focusin_HostBindingHandler() { return ctx.focus(); })("mousedown", function FateMaterialComponent_mousedown_HostBindingHandler($event) { return ctx.mousedown($event); })("mouseup", function FateMaterialComponent_mouseup_HostBindingHandler($event) { return ctx.mouseup($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx.describedBy);
        } }, inputs: { row: "row", buttons: "buttons", value: "value", placeholder: "placeholder", required: "required", disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], useExisting: FateMaterialComponent },
                { provide: _fate_icon_service__WEBPACK_IMPORTED_MODULE_7__["FateIconService"], useExisting: _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_8__["FateMaterialIconService"] }
            ])], decls: 2, vars: 8, consts: [["customClass", "", 3, "uiId", "row", "ngModel", "ngModelChange"], [1, "mat-select-panel", 3, "uiId", "buttons", "ngClass"]], template: function FateMaterialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fate-input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FateMaterialComponent_Template_fate_input_ngModelChange_0_listener($event) { return ctx.onChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fate-ui", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uiId", ctx.uiId)("row", ctx.row)("ngModel", ctx.passthrough);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uiId", ctx.uiId)("buttons", ctx.buttons)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.uiVisible));
        } }, directives: [_fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_10__["FateInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 300ms;\n  text-align: left;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: #FFF;\n  z-index: 1;\n  transform: translateY(10px);\n  max-width: 100%;\n  padding: 0;\n}\n\n[_nghost-%COMP%]   fate-ui.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button {\n  height: 40px;\n  line-height: 23px;\n  padding: 7px 0 11px;\n  width: 40px;\n  border-radius: 0;\n  margin-right: -4px;\n  margin-bottom: 0;\n  vertical-align: middle;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button:active, [_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button.enabled, [_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button.with-dropdown {\n  background-color: #EEE;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button:hover, [_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-button:focus {\n  background-color: #DFDFDF;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-dropdown {\n  background-color: #EEE;\n}\n\n[_nghost-%COMP%]   fate-ui[_ngcontent-%COMP%]     .fate-ui-separator {\n  margin-right: -4px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  margin-left: -1px;\n  height: 36px;\n  border-radius: 0;\n  width: 1px;\n  vertical-align: middle;\n  background-color: #DFDFDF;\n}\n\n[_nghost-%COMP%]   fate-input[_ngcontent-%COMP%]     div.fate-edit-target {\n  border: none;\n  background: none;\n  color: inherit;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  resize: vertical;\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]   fate-input[_ngcontent-%COMP%]     .fate-inline-dropdown {\n  display: block;\n  position: absolute;\n  transition: opacity 300ms;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: #FFF;\n  z-index: 2;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vbmFsdWYvZmF0ZS9zcmMvYXBwL2ZhdGUtbWF0ZXJpYWwvZmF0ZS1tYXRlcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmF0ZS1tYXRlcmlhbC9mYXRlLW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQ0NwQjs7QURIQTtFQUtJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBRWhCLHFIQUF5RztFQUN6RyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDJCQUEyQjtFQUczQixlQUFlO0VBT2YsVUFBVTtBQ1BkOztBRGxCQTtFQXFCTSxVQUFVO0VBQ1YsbUJBQW1CO0FDQ3pCOztBRHZCQTtFQTJCTSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBRVgsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDRDVCOztBRGxDQTtFQXdDUSxzQkFBc0I7QUNGOUI7O0FEdENBO0VBNENRLHlCQUF5QjtBQ0ZqQzs7QUQxQ0E7RUFnRE0sc0JBQXNCO0FDRjVCOztBRDlDQTtFQW1ETSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQ0QvQjs7QUQxREE7RUFrRVEsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQ0p4Qjs7QURyRUE7RUE0RVEsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUhBQXFIO0VBQ3JILGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsVUFBVTtBQ0hsQiIsImZpbGUiOiJzcmMvYXBwL2ZhdGUtbWF0ZXJpYWwvZmF0ZS1tYXRlcmlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmYXRlLXVpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcblxuXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgJi52aXNpYmxlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIH1cblxuICAgIHBhZGRpbmc6IDA7XG4gICAgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIHBhZGRpbmc6IDdweCAwIDExcHg7XG4gICAgICB3aWR0aDogNDBweDtcblxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAmOmFjdGl2ZSxcbiAgICAgICYuZW5hYmxlZCxcbiAgICAgICYud2l0aC1kcm9wZG93biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gICAgICB9XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNERkRGREY7XG4gICAgICB9XG4gICAgfVxuICAgIDo6bmctZGVlcCAuZmF0ZS11aS1kcm9wZG93biB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICAgIH1cbiAgICA6Om5nLWRlZXAgLmZhdGUtdWktc2VwYXJhdG9yIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTRweDtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RGREZERjtcbiAgICB9XG4gIH1cblxuICBmYXRlLWlucHV0IHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgZGl2LmZhdGUtZWRpdC10YXJnZXQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgLmZhdGUtaW5saW5lLWRyb3Bkb3duIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcztcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46aG9zdCBmYXRlLXVpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjpob3N0IGZhdGUtdWkudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbjpob3N0IGZhdGUtdWkgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmc6IDdweCAwIDExcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjpob3N0IGZhdGUtdWkgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbjphY3RpdmUsIDpob3N0IGZhdGUtdWkgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbi5lbmFibGVkLCA6aG9zdCBmYXRlLXVpIDo6bmctZGVlcCAuZmF0ZS11aS1idXR0b24ud2l0aC1kcm9wZG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG59XG5cbjpob3N0IGZhdGUtdWkgOjpuZy1kZWVwIC5mYXRlLXVpLWJ1dHRvbjpob3ZlciwgOmhvc3QgZmF0ZS11aSA6Om5nLWRlZXAgLmZhdGUtdWktYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGREZERjtcbn1cblxuOmhvc3QgZmF0ZS11aSA6Om5nLWRlZXAgLmZhdGUtdWktZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xufVxuXG46aG9zdCBmYXRlLXVpIDo6bmctZGVlcCAuZmF0ZS11aS1zZXBhcmF0b3Ige1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tbGVmdDogLTFweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZERkRGO1xufVxuXG46aG9zdCBmYXRlLWlucHV0IDo6bmctZGVlcCBkaXYuZmF0ZS1lZGl0LXRhcmdldCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbjpob3N0IGZhdGUtaW5wdXQgOjpuZy1kZWVwIC5mYXRlLWlubGluZS1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXM7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"] });
    return FateMaterialComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fate-material',
                templateUrl: './fate-material.component.html',
                styleUrls: ['./fate-material.component.scss'],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldControl"], useExisting: FateMaterialComponent },
                    { provide: _fate_icon_service__WEBPACK_IMPORTED_MODULE_7__["FateIconService"], useExisting: _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_8__["FateMaterialIconService"] }
                ],
            }]
    }], function () { return [{ type: _fate_controller_service__WEBPACK_IMPORTED_MODULE_5__["FateControllerService"] }, { type: _fate_parser_service__WEBPACK_IMPORTED_MODULE_6__["FateParserService"] }, { type: _fate_icon_service__WEBPACK_IMPORTED_MODULE_7__["FateIconService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, { row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusout']
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusin']
        }], mousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], mouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], describedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-describedby']
        }] }); })();


/***/ }),

/***/ "./src/app/fate-node.ts":
/*!******************************!*\
  !*** ./src/app/fate-node.ts ***!
  \******************************/
/*! exports provided: FateNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateNode", function() { return FateNode; });
/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");

var FateNode = /** @class */ (function () {
    function FateNode(type, value) {
        if (type === void 0) { type = _fate_type_enum__WEBPACK_IMPORTED_MODULE_0__["FateType"].NONE; }
        this.type = type;
        this.value = value;
        this.children = [];
    }
    return FateNode;
}());



/***/ }),

/***/ "./src/app/fate-parser.service.ts":
/*!****************************************!*\
  !*** ./src/app/fate-parser.service.ts ***!
  \****************************************/
/*! exports provided: FateParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateParserService", function() { return FateParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fate-html-parser.service */ "./src/app/fate-html-parser.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FateParserService = /** @class */ (function (_super) {
    __extends(FateParserService, _super);
    function FateParserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FateParserService.ɵfac = function FateParserService_Factory(t) { return ɵFateParserService_BaseFactory(t || FateParserService); };
    FateParserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FateParserService, factory: FateParserService.ɵfac, providedIn: 'root' });
    return FateParserService;
}(_fate_html_parser_service__WEBPACK_IMPORTED_MODULE_1__["FateHtmlParserService"]));

var ɵFateParserService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FateParserService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/fate-type.enum.ts":
/*!***********************************!*\
  !*** ./src/app/fate-type.enum.ts ***!
  \***********************************/
/*! exports provided: FateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateType", function() { return FateType; });
var FateType;
(function (FateType) {
    FateType["NONE"] = "NONE";
    FateType["PARAGRAPH"] = "PARAGRAPH";
    FateType["HEADER1"] = "HEADER1";
    FateType["HEADER2"] = "HEADER2";
    FateType["HEADER3"] = "HEADER3";
    FateType["HEADER4"] = "HEADER4";
    FateType["HEADER5"] = "HEADER5";
    FateType["HEADER6"] = "HEADER6";
    FateType["QUOTE"] = "QUOTE";
    FateType["CODE"] = "CODE";
    FateType["SIZE"] = "SIZE";
    FateType["BOLD"] = "BOLD";
    FateType["HIGHLIGHT"] = "HIGHLIGHT";
    FateType["SUBSCRIPT"] = "SUBSCRIPT";
    FateType["SUPERSCRIPT"] = "SUPERSCRIPT";
    FateType["STRIKETHROUGH"] = "STRIKETHROUGH";
    FateType["ITALIC"] = "ITALIC";
    FateType["COLOR"] = "COLOR";
    FateType["UNDERLINE"] = "UNDERLINE";
    FateType["LINK"] = "LINK";
    FateType["ALIGN_LEFT"] = "ALIGN_LEFT";
    FateType["ALIGN_CENTER"] = "ALIGN_CENTER";
    FateType["ALIGN_RIGHT"] = "ALIGN_RIGHT";
    FateType["JUSTIFY"] = "JUSTIFY";
    FateType["ORDERED_LIST"] = "ORDERED_LIST";
    FateType["UNORDERED_LIST"] = "UNORDERED_LIST";
    FateType["LISTITEM"] = "LISTITEM";
    FateType["INDENT"] = "INDENT";
    FateType["TYPEFACE"] = "TYPEFACE";
})(FateType || (FateType = {}));


/***/ }),

/***/ "./src/app/fate-ui/fate-ui.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fate-ui/fate-ui.component.ts ***!
  \**********************************************/
/*! exports provided: defaultButtons, FateUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultButtons", function() { return defaultButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateUiComponent", function() { return FateUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fate-icon.service */ "./src/app/fate-icon.service.ts");
/* harmony import */ var _fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fate-legacy-browser.service */ "./src/app/fate-legacy-browser.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");











var _c0 = ["dropdown"];
function FateUiComponent_ng_container_1_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);
} if (rf & 2) {
    var button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r6.icon.getIcon(button_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FateUiComponent_ng_container_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.controller.getAction(button_r3).label);
} }
var _c1 = function (a0, a1) { return { enabled: a0, "with-dropdown": a1 }; };
function FateUiComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FateUiComponent_ng_container_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.do($event, button_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateUiComponent_ng_container_1_a_1_span_1_Template, 1, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateUiComponent_ng_container_1_a_1_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", button_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, ctx_r4.enabled[button_r3], ctx_r4.dropdownAction === button_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.icon.getIcon(button_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.icon.getIcon(button_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.controller.getAction(button_r3).name);
} }
function FateUiComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
} }
function FateUiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateUiComponent_ng_container_1_a_1_Template, 5, 8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FateUiComponent_ng_container_1_div_2_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var button_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", button_r3 !== "separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", button_r3 === "separator");
} }
function FateUiComponent_ng_template_3_Template(rf, ctx) { }
var _c2 = function (a0) { return { visible: a0 }; };
var defaultButtons = [
    'bold',
    'italic',
    'underline',
    'strike',
    'separator',
    'subscript',
    'superscript',
    'link',
    'separator',
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'heading6',
    'normal',
    'separator',
    'indent',
    'outdent',
    'ordered',
    'unordered',
    'separator',
    'center',
    'justify',
    'left',
    'right',
    'separator',
    'undo',
    'redo',
    'clean'
];
var FateUiComponent = /** @class */ (function () {
    function FateUiComponent(el, controller, icon, parser, factoryResolver, legacyBrowser) {
        this.el = el;
        this.controller = controller;
        this.icon = icon;
        this.parser = parser;
        this.factoryResolver = factoryResolver;
        this.legacyBrowser = legacyBrowser;
        this.uiId = 'default';
        this.buttons = defaultButtons;
        this.enabled = {};
        this.dropdownAction = false;
    }
    FateUiComponent.prototype.mouseDown = function (event) {
        if (!this.legacyBrowser.findParent(event.target, '.fate-ui-dropdown')) {
            event.preventDefault();
        }
    };
    FateUiComponent.prototype.keyUp = function (event) {
        if (event.key === 'Enter') {
            var name_1 = event.target.name;
            if (name_1) {
                this.do(event, name_1);
            }
        }
    };
    FateUiComponent.prototype.do = function (event, action) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (this.controller.getAction(action).dropdown) {
            if (action === this.dropdownAction) {
                this.dropdownAction = false;
            }
            else {
                var button_1 = event.target;
                if (!button_1.classList.contains('fate-ui-button')) {
                    button_1 = this.legacyBrowser.findParent(button_1, '.fate-ui-button');
                }
                if (!button_1) {
                    return;
                }
                var dropdown_1 = this.el.nativeElement.querySelector('.fate-ui-dropdown');
                // Enable the dropdown
                this.dropdownValue = this.enabled[action];
                console.debug('action has value', button_1, dropdown_1, this.dropdownValue);
                this.initDropdown(this.controller.getAction(action).dropdown, this.dropdownValue);
                // Postion the dropdown
                setTimeout(function () {
                    var buttonSize = button_1.getBoundingClientRect();
                    var dropdownSize = dropdown_1.getBoundingClientRect();
                    var leftPosition = button_1.offsetLeft + (buttonSize.width / 2) - (dropdownSize.width / 2);
                    // make sure the dropdown is not bleeding out of the viewport
                    if (buttonSize.left + window.pageXOffset + (buttonSize.width / 2) - (dropdownSize.width / 2) < 3) {
                        leftPosition = -buttonSize.left - window.pageXOffset + button_1.offsetLeft + 3;
                    }
                    else if (buttonSize.left + window.pageXOffset + (buttonSize.width / 2) + (dropdownSize.width / 2) > window.innerWidth - 3) {
                        leftPosition = window.innerWidth - buttonSize.left - window.pageXOffset + button_1.offsetLeft - dropdownSize.width - 3;
                    }
                    var topPosition = button_1.offsetTop + buttonSize.height - 3;
                    dropdown_1.style.left = leftPosition + 'px';
                    dropdown_1.style.top = topPosition + 'px';
                    // make the dropdown visible
                    _this.dropdownAction = action;
                }, 0);
            }
        }
        else {
            this.dropdownAction = false;
            this.controller.do(this.uiId, action);
        }
    };
    FateUiComponent.prototype.getOffset = function (element) {
        var top = 0;
        var left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left
        };
    };
    FateUiComponent.prototype.initDropdown = function (actionComponent, value) {
        var _this = this;
        if (this.dropdownComponent) {
            this.dropdownComponent.destroy();
        }
        var factory = this.factoryResolver.resolveComponentFactory(actionComponent);
        var component = factory.create(this.viewContainerRef.parentInjector);
        if (component.instance.valueChange) {
            component.instance.value = value;
            component.instance.valueChange.subscribe(function (newValue) {
                _this.dropdownValue = newValue;
                _this.controller.do(_this.uiId, _this.dropdownAction, newValue);
            });
            this.dropdownComponent = this.viewContainerRef.insert(component.hostView);
        }
        else {
            throw new Error('The component used as a dropdown doesn\'t contain a valueChange emmiter!');
        }
    };
    FateUiComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['uiId']) {
            if (this.inputSubscription) {
                this.inputSubscription.unsubscribe();
            }
            this.inputSubscription = this.controller.enabled(this.uiId).subscribe(function (actions) {
                _this.enabled = {};
                for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
                    var action = actions_1[_i];
                    _this.enabled[action.action] = action.value || true;
                }
            });
        }
    };
    FateUiComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var handle = window.addEventListener('mousedown', function (event) {
            if (!_this.legacyBrowser.findParent(event.target, '.fate-ui-dropdown')) {
                _this.dropdownAction = false;
            }
        });
    };
    FateUiComponent.ɵfac = function FateUiComponent_Factory(t) { return new (t || FateUiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_controller_service__WEBPACK_IMPORTED_MODULE_1__["FateControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_icon_service__WEBPACK_IMPORTED_MODULE_3__["FateIconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_parser_service__WEBPACK_IMPORTED_MODULE_2__["FateParserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_4__["FateLegacyBrowserService"])); };
    FateUiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FateUiComponent, selectors: [["fate-ui"]], viewQuery: function FateUiComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewContainerRef = _t.first);
        } }, hostBindings: function FateUiComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function FateUiComponent_mousedown_HostBindingHandler($event) { return ctx.mouseDown($event); })("keyup", function FateUiComponent_keyup_HostBindingHandler($event) { return ctx.keyUp($event); });
        } }, inputs: { uiId: "uiId", buttons: "buttons" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 4, consts: [[4, "ngFor", "ngForOf"], [1, "fate-ui-dropdown", 3, "ngClass"], ["dropdown", ""], ["tabindex", "0", "class", "fate-ui-button", 3, "name", "ngClass", "click", 4, "ngIf"], ["class", "fate-ui-separator", 4, "ngIf"], ["tabindex", "0", 1, "fate-ui-button", 3, "name", "ngClass", "click"], [3, "innerHtml", 4, "ngIf"], [4, "ngIf"], [1, "reader"], [3, "innerHtml"], [1, "fate-ui-separator"]], template: function FateUiComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FateUiComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FateUiComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx.dropdownAction));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  border: 1px solid #DDD;\n  border-bottom: 0;\n  display: block;\n  box-sizing: border-box;\n  padding: 5px;\n  background: #FFF;\n  color: #333;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  overflow: visible;\n}\n\n.fate-ui-separator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  height: 14px;\n  vertical-align: middle;\n  background-color: #DDD;\n  border-radius: 2px;\n}\n\n.fate-ui-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  line-height: 25px;\n  margin-bottom: 3px;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: 14px;\n  box-sizing: border-box;\n  transition: background 300ms;\n  border-radius: 3px;\n  color: #333;\n}\n\n.fate-ui-button[_ngcontent-%COMP%]:active, .fate-ui-button.enabled[_ngcontent-%COMP%], .fate-ui-button.with-dropdown[_ngcontent-%COMP%] {\n  background-color: #E5E5E5;\n}\n\n.fate-ui-button[_ngcontent-%COMP%]:hover, .fate-ui-button[_ngcontent-%COMP%]:focus {\n  background-color: #CCC;\n}\n\n.fate-ui-button[_ngcontent-%COMP%]   span.reader[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fate-ui-dropdown[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n  z-index: 1;\n  font-size: 14px;\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #E5E5E5;\n  position: absolute;\n  padding: 10px;\n  border-bottom: 1px solid #CCC;\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3);\n}\n\n.fate-ui-dropdown.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vbmFsdWYvZmF0ZS9zcmMvYXBwL2ZhdGUtdWkvZmF0ZS11aS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmF0ZS11aS9mYXRlLXVpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDRm5COztBRElBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQWpCYztFQWtCZCxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQ0RwQjs7QURHQTtFQUNFLHFCQUFxQjtFQUNyQixZQXpCZ0I7RUEwQmhCLFdBMUJnQjtFQTJCaEIsa0JBQWtCO0VBQ2xCLGlCQTVCZ0I7RUE2QmhCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGVBL0JjO0VBZ0NkLHNCQUFzQjtFQUV0Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBRWxCLFdBQVc7QUNGYjs7QURiQTtFQW9CSSx5QkFBeUI7QUNIN0I7O0FEakJBO0VBd0JJLHNCQUFzQjtBQ0gxQjs7QURyQkE7RUE0QkksYUFBYTtBQ0hqQjs7QURNQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGVBQWU7RUFDZix3QkFBZ0I7S0FBaEIscUJBQWdCO01BQWhCLG9CQUFnQjtVQUFoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7RUFFN0IsZ0RBQWdEO0FDTGxEOztBRFRBO0VBaUJJLFVBQVU7RUFDVixtQkFBbUI7QUNKdkIiLCJmaWxlIjoic3JjL2FwcC9mYXRlLXVpL2ZhdGUtdWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnV0dG9uLXNpemU6IDI1cHg7XG4kZm9udC1zaXplOiAxNHB4O1xuXG46aG9zdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiAjMzMzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5mYXRlLXVpLXNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAkZm9udC1zaXplO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uZmF0ZS11aS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogJGJ1dHRvbi1zaXplO1xuICB3aWR0aDogJGJ1dHRvbi1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAkYnV0dG9uLXNpemU7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gIGNvbG9yOiAjMzMzO1xuXG4gICY6YWN0aXZlLFxuICAmLmVuYWJsZWQsXG4gICYud2l0aC1kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgfVxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xuICB9XG5cbiAgc3Bhbi5yZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5mYXRlLXVpLWRyb3Bkb3duIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdXNlci1zZWxlY3Q6IGFsbDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG5cbiAgYm94LXNoYWRvdzogMCAxMHB4IDEwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuXG4gICYudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGNvbG9yOiAjMzMzO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmZhdGUtdWktc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmZhdGUtdWktYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZmF0ZS11aS1idXR0b246YWN0aXZlLCAuZmF0ZS11aS1idXR0b24uZW5hYmxlZCwgLmZhdGUtdWktYnV0dG9uLndpdGgtZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xufVxuXG4uZmF0ZS11aS1idXR0b246aG92ZXIsIC5mYXRlLXVpLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XG59XG5cbi5mYXRlLXVpLWJ1dHRvbiBzcGFuLnJlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYXRlLXVpLWRyb3Bkb3duIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdXNlci1zZWxlY3Q6IGFsbDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTBweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5mYXRlLXVpLWRyb3Bkb3duLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuIl19 */"] });
    return FateUiComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateUiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fate-ui',
                templateUrl: './fate-ui.component.html',
                styleUrls: ['./fate-ui.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _fate_controller_service__WEBPACK_IMPORTED_MODULE_1__["FateControllerService"] }, { type: _fate_icon_service__WEBPACK_IMPORTED_MODULE_3__["FateIconService"] }, { type: _fate_parser_service__WEBPACK_IMPORTED_MODULE_2__["FateParserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_4__["FateLegacyBrowserService"] }]; }, { uiId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], keyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], viewContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdown', {
                    read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
                    static: true,
                }]
        }] }); })();


/***/ }),

/***/ "./src/app/fate.module.ts":
/*!********************************!*\
  !*** ./src/app/fate.module.ts ***!
  \********************************/
/*! exports provided: FateUiComponent, FateInputComponent, FateLinkDropdownComponent, FateIconService, FateMaterialIconService, FateFontawsomeLegacyIconService, FateParserService, FateControllerService, FateHtmlParserService, FateLegacyBrowserService, FateNode, FateType, FateModule, FateMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateModule", function() { return FateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FateMaterialModule", function() { return FateMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fate-ui/fate-ui.component */ "./src/app/fate-ui/fate-ui.component.ts");
/* harmony import */ var _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fate-input/fate-input.component */ "./src/app/fate-input/fate-input.component.ts");
/* harmony import */ var _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fate-bootstrap/fate-bootstrap.component */ "./src/app/fate-bootstrap/fate-bootstrap.component.ts");
/* harmony import */ var _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fate-material/fate-material.component */ "./src/app/fate-material/fate-material.component.ts");
/* harmony import */ var _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fate-link-dropdown/fate-link-dropdown.component */ "./src/app/fate-link-dropdown/fate-link-dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateUiComponent", function() { return _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateInputComponent", function() { return _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateLinkDropdownComponent", function() { return _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"]; });

/* harmony import */ var _fate_icon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fate-icon.service */ "./src/app/fate-icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateIconService", function() { return _fate_icon_service__WEBPACK_IMPORTED_MODULE_9__["FateIconService"]; });

/* harmony import */ var _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fate-material-icon.service */ "./src/app/fate-material-icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateMaterialIconService", function() { return _fate_material_icon_service__WEBPACK_IMPORTED_MODULE_10__["FateMaterialIconService"]; });

/* harmony import */ var _fate_fontawsome_legacy_icon_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fate-fontawsome-legacy-icon.service */ "./src/app/fate-fontawsome-legacy-icon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateFontawsomeLegacyIconService", function() { return _fate_fontawsome_legacy_icon_service__WEBPACK_IMPORTED_MODULE_11__["FateFontawsomeLegacyIconService"]; });

/* harmony import */ var _fate_parser_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fate-parser.service */ "./src/app/fate-parser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateParserService", function() { return _fate_parser_service__WEBPACK_IMPORTED_MODULE_12__["FateParserService"]; });

/* harmony import */ var _fate_controller_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fate-controller.service */ "./src/app/fate-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateControllerService", function() { return _fate_controller_service__WEBPACK_IMPORTED_MODULE_13__["FateControllerService"]; });

/* harmony import */ var _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fate-html-parser.service */ "./src/app/fate-html-parser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateHtmlParserService", function() { return _fate_html_parser_service__WEBPACK_IMPORTED_MODULE_14__["FateHtmlParserService"]; });

/* harmony import */ var _fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fate-legacy-browser.service */ "./src/app/fate-legacy-browser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateLegacyBrowserService", function() { return _fate_legacy_browser_service__WEBPACK_IMPORTED_MODULE_15__["FateLegacyBrowserService"]; });

/* harmony import */ var _fate_node__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fate-node */ "./src/app/fate-node.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateNode", function() { return _fate_node__WEBPACK_IMPORTED_MODULE_16__["FateNode"]; });

/* harmony import */ var _fate_type_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fate-type.enum */ "./src/app/fate-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FateType", function() { return _fate_type_enum__WEBPACK_IMPORTED_MODULE_17__["FateType"]; });























var FateModule = /** @class */ (function () {
    function FateModule() {
    }
    FateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FateModule });
    FateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FateModule_Factory(t) { return new (t || FateModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ]] });
    return FateModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FateModule, { declarations: [_fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"],
        _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"],
        _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["FateBootstrapComponent"],
        _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"],
        _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"],
        _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["FateBootstrapComponent"],
        _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"],
                    _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"],
                    _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["FateBootstrapComponent"],
                    _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                exports: [
                    _fate_ui_fate_ui_component__WEBPACK_IMPORTED_MODULE_4__["FateUiComponent"],
                    _fate_input_fate_input_component__WEBPACK_IMPORTED_MODULE_5__["FateInputComponent"],
                    _fate_bootstrap_fate_bootstrap_component__WEBPACK_IMPORTED_MODULE_6__["FateBootstrapComponent"],
                    _fate_link_dropdown_fate_link_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["FateLinkDropdownComponent"]
                ],
            }]
    }], null, null); })();
var FateMaterialModule = /** @class */ (function () {
    function FateMaterialModule() {
    }
    FateMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FateMaterialModule });
    FateMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FateMaterialModule_Factory(t) { return new (t || FateMaterialModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                FateModule
            ]] });
    return FateMaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FateMaterialModule, { declarations: [_fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__["FateMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        FateModule], exports: [_fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__["FateMaterialComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FateMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__["FateMaterialComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    FateModule
                ],
                exports: [
                    _fate_material_fate_material_component__WEBPACK_IMPORTED_MODULE_7__["FateMaterialComponent"],
                ]
            }]
    }], null, null); })();


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/onaluf/fate/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map