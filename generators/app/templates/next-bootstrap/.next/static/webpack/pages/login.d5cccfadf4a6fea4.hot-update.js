"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout/index.jsx\");\n/* harmony import */ var _components_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CustomButton */ \"./components/CustomButton/index.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Login = function() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    var onSubmit = function(data) {\n        return console.log(data);\n    };\n    console.log(watch('example'));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            __source: {\n                fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                onSubmit: handleSubmit(onSubmit),\n                __source: {\n                    fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"registerEmail\",\n                        __source: {\n                            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                __source: {\n                                    fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Email\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, _objectSpread({\n                                type: \"text\",\n                                placeholder: \"Email\"\n                            }, register('Email', {\n                                required: true,\n                                pattern: /^\\S+@\\S+$/i\n                            }), {\n                                __source: {\n                                    fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            }))\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"registerPassword\",\n                        __source: {\n                            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Label, {\n                                __source: {\n                                    fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Password\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Form.Control, _objectSpread({\n                                type: \"password\",\n                                placeholder: \"Password\"\n                            }, register('Password', {\n                                required: true\n                            }), {\n                                __source: {\n                                    fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            }))\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"primary\",\n                        type: \"submit\",\n                        __source: {\n                            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/pages/login.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Login\"\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Login, \"+LcrTzTax1ndAePIwZBfPwbnP68=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDRDtBQUNZO0FBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELEdBQUssQ0FBQ00sS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQzs7SUFDbkIsR0FBSyxDQUtETixHQUFTLEdBQVRBLHdEQUFPLElBSlRPLFFBQVEsR0FJTlAsR0FBUyxDQUpYTyxRQUFRLEVBQ1JDLFlBQVksR0FHVlIsR0FBUyxDQUhYUSxZQUFZLEVBQ1pDLEtBQUssR0FFSFQsR0FBUyxDQUZYUyxLQUFLLEVBQ1FDLE1BQU0sR0FDakJWLEdBQVMsQ0FEWFcsU0FBUyxDQUFJRCxNQUFNO0lBRXJCLEdBQUssQ0FBQ0UsUUFBUSxHQUFHLFFBQVEsQ0FBUEMsSUFBSTtRQUFLQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJOztJQUUzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQyxDQUFTO0lBQzNCLE1BQU0sc0VBQ0hSLDBEQUFNOzs7Ozs7O3VGQUNKRSxzREFBUzs7Ozs7Ozs0RkFDUEMsaURBQUk7Z0JBQUNRLFFBQVEsRUFBRUosWUFBWSxDQUFDSSxRQUFROzs7Ozs7OzswRkFDbENSLHVEQUFVO3dCQUFDYSxTQUFTLEVBQUMsQ0FBTTt3QkFBQ0MsU0FBUyxFQUFDLENBQWU7Ozs7Ozs7O2lHQUNuRGQsdURBQVU7Ozs7Ozs7MENBQUMsQ0FBSzs7aUdBQ2hCQSx5REFBWTtnQ0FDWGlCLElBQUksRUFBQyxDQUFNO2dDQUNYQyxXQUFXLEVBQUMsQ0FBTzsrQkFDZmYsUUFBUSxDQUFDLENBQU8sUUFBRSxDQUFDO2dDQUFDZ0IsUUFBUSxFQUFFLElBQUk7Z0NBQUVDLE9BQU87NEJBQWUsQ0FBQzs7Ozs7Ozs7OzswRkFJbEVwQix1REFBVTt3QkFBQ2EsU0FBUyxFQUFDLENBQU07d0JBQUNDLFNBQVMsRUFBQyxDQUFrQjs7Ozs7Ozs7aUdBQ3REZCx1REFBVTs7Ozs7OzswQ0FBQyxDQUFROztpR0FDbkJBLHlEQUFZO2dDQUNYaUIsSUFBSSxFQUFDLENBQVU7Z0NBQ2ZDLFdBQVcsRUFBQyxDQUFVOytCQUNsQmYsUUFBUSxDQUFDLENBQVUsV0FBRSxDQUFDO2dDQUFDZ0IsUUFBUSxFQUFFLElBQUk7NEJBQUMsQ0FBQzs7Ozs7Ozs7Ozt5RkFHOUNsQixtREFBTTt3QkFBQ29CLE9BQU8sRUFBQyxDQUFTO3dCQUFDSixJQUFJLEVBQUMsQ0FBUTs7Ozs7OztrQ0FBQyxDQUV4Qzs7Ozs7O0FBTVYsQ0FBQztHQXZDS2YsS0FBSzs7UUFNTE4sb0RBQU87OztLQU5QTSxLQUFLO0FBMENYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbidcbmltcG9ydCB7IENvbnRhaW5lciwgRm9ybSwgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtKClcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSlcblxuICBjb25zb2xlLmxvZyh3YXRjaCgnZXhhbXBsZScpKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cInJlZ2lzdGVyRW1haWxcIj5cbiAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ0VtYWlsJywgeyByZXF1aXJlZDogdHJ1ZSwgcGF0dGVybjogL15cXFMrQFxcUyskL2kgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJyZWdpc3RlclBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUGFzc3dvcmQnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgey8qIDxDdXN0b21CdXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9DdXN0b21CdXR0b24+ICovfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJMYXlvdXQiLCJDdXN0b21CdXR0b24iLCJDb250YWluZXIiLCJGb3JtIiwiQnV0dG9uIiwiTG9naW4iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkdyb3VwIiwiY2xhc3NOYW1lIiwiY29udHJvbElkIiwiTGFiZWwiLCJDb250cm9sIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});