"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this2 = undefined;\nvar _s = $RefreshSig$();\nvar navItems = [\n    {\n        id: 1,\n        title: 'Home',\n        link: '/'\n    },\n    {\n        id: 2,\n        title: 'About',\n        link: '/about'\n    },\n    {\n        id: 3,\n        title: 'Contact',\n        link: '/contact'\n    },\n    {\n        id: 4,\n        title: 'Login',\n        link: '/login'\n    },\n    {\n        id: 5,\n        title: 'Register',\n        link: '/register'\n    }, \n];\nvar Header = function() {\n    var _this1 = _this2;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var renderNavItems = function() {\n        var _this = _this1;\n        navItems.map(function(param) {\n            var id = param.id, title = param.title, link = param.link;\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                onClick: function() {\n                    return router.push(\"/\".concat(link));\n                },\n                __source: {\n                    fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: title\n            }, id);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n        bg: \"light\",\n        expand: \"lg\",\n        __source: {\n            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n            lineNumber: 48,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            __source: {\n                fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            },\n            __self: _this2,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Brand, {\n                    onClick: function() {\n                        return router.push('/');\n                    },\n                    __source: {\n                        fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    },\n                    __self: _this2,\n                    children: \"React-Bootstrap\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                    \"aria-controls\": \"basic-navbar-nav\",\n                    __source: {\n                        fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    },\n                    __self: _this2\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                    id: \"basic-navbar-nav\",\n                    __source: {\n                        fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    },\n                    __self: _this2,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                        className: \"me-auto\",\n                        __source: {\n                            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        },\n                        __self: _this2,\n                        children: renderNavItems()\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBQzhCO0FBQzVCOzs7QUFHekMsR0FBSyxDQUFDTyxRQUFRLEdBQUcsQ0FBQztJQUNoQixDQUFDO1FBQ0NDLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLElBQUksRUFBRSxDQUFHO0lBQ1gsQ0FBQztJQUNELENBQUM7UUFDQ0YsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQU87UUFDZEMsSUFBSSxFQUFFLENBQVE7SUFDaEIsQ0FBQztJQUNELENBQUM7UUFDQ0YsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQVM7UUFDaEJDLElBQUksRUFBRSxDQUFVO0lBQ2xCLENBQUM7SUFDRCxDQUFDO1FBQ0NGLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFPO1FBQ2RDLElBQUksRUFBRSxDQUFRO0lBQ2hCLENBQUM7SUFDRCxDQUFDO1FBQ0NGLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFVO1FBQ2pCQyxJQUFJLEVBQUUsQ0FBVztJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7O0lBQ3BCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHWCxzREFBUztJQUN4QixHQUFLLENBQUNZLGNBQWMsR0FBRyxRQUN6QixHQUQrQixDQUFDOztRQUM1Qk4sUUFBUSxDQUFDTyxHQUFHLENBQUMsUUFBUTtnQkFBTE4sRUFBRSxTQUFGQSxFQUFFLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUk7MEJBQzdCLE1BQU0sd0RBQUxQLHFEQUFRO2dCQUVQWSxPQUFPLEVBQUUsUUFBUTtvQkFBRkgsTUFBTSxDQUFOQSxNQUFNLENBQUNJLElBQUksQ0FBRSxDQUFDLEdBQU8sT0FBTE4sSUFBSTs7Ozs7Ozs7MEJBRWxDRCxLQUFLO2VBSERELEVBQUU7O0lBTWIsQ0FBQztJQUNELE1BQU0sc0VBQ0hOLG1EQUFNO1FBQUNlLEVBQUUsRUFBQyxDQUFPO1FBQUNDLE1BQU0sRUFBQyxDQUFJOzs7Ozs7O3dGQUMzQmIsc0RBQVM7Ozs7Ozs7O3FGQUNQSCx5REFBWTtvQkFBQ2EsT0FBTyxFQUFFLFFBQVE7d0JBQUZILE1BQU0sQ0FBTkEsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRzs7Ozs7Ozs7OEJBQUcsQ0FFL0M7O3FGQUNDZCwwREFBYTtvQkFBQ21CLENBQWEsZ0JBQUMsQ0FBa0I7Ozs7Ozs7O3FGQUM5Q25CLDREQUFlO29CQUFDTSxFQUFFLEVBQUMsQ0FBa0I7Ozs7Ozs7bUdBQ25DTCxnREFBRzt3QkFBQ29CLFNBQVMsRUFBQyxDQUFTOzs7Ozs7O2tDQUNyQlYsY0FBYzs7Ozs7O0FBVzNCLENBQUM7R0FoQ0tGLE1BQU07O1FBQ0tWLGtEQUFTOzs7S0FEcEJVLE1BQU07QUFrQ1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4P2UzMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd24sIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXG5cblxuY29uc3QgbmF2SXRlbXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0hvbWUnLFxuICAgIGxpbms6ICcvJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgIGxpbms6ICcvYWJvdXQnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdDb250YWN0JyxcbiAgICBsaW5rOiAnL2NvbnRhY3QnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdMb2dpbicsXG4gICAgbGluazogJy9sb2dpbicsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICB0aXRsZTogJ1JlZ2lzdGVyJyxcbiAgICBsaW5rOiAnL3JlZ2lzdGVyJyxcbiAgfSxcbl1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCByZW5kZXJOYXZJdGVtcyA9ICgpID0+IHtcbiAgICBuYXZJdGVtcy5tYXAoKHsgaWQsIHRpdGxlLCBsaW5rIH0pID0+IChcbiAgICAgIDxOYXYuTGluayBcbiAgICAgICAga2V5PXtpZH0gXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHtsaW5rfWApfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L05hdi5MaW5rPlxuICAgICkpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBleHBhbmQ9XCJsZ1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPE5hdmJhci5CcmFuZCBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5cbiAgICAgICAgICBSZWFjdC1Cb290c3RyYXBcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cbiAgICAgICAgICAgIHtyZW5kZXJOYXZJdGVtcygpfVxuICAgICAgICAgICAgey8qIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5Ib21lPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2Fib3V0Jyl9PkFib3V0PC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NvbnRhY3QnKX0+Q29udGFjdDwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9sb2dpbicpfT5Mb2dpbjwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2Lkxpbmsgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9yZWdpc3RlcicpfT5SZWdpc3RlcjwvTmF2Lkxpbms+ICovfVxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTmF2YmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiTmF2YmFyIiwiTmF2IiwiTmF2RHJvcGRvd24iLCJDb250YWluZXIiLCJzdHlsZXMiLCJuYXZJdGVtcyIsImlkIiwidGl0bGUiLCJsaW5rIiwiSGVhZGVyIiwicm91dGVyIiwicmVuZGVyTmF2SXRlbXMiLCJtYXAiLCJvbkNsaWNrIiwicHVzaCIsImJnIiwiZXhwYW5kIiwiQnJhbmQiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.jsx\n");

/***/ })

});