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

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar navItems = [\n    {\n        id: 1,\n        title: 'Home',\n        link: '/'\n    },\n    {\n        id: 2,\n        title: 'About',\n        link: '/about'\n    },\n    {\n        id: 3,\n        title: 'Contact',\n        link: '/contact'\n    },\n    {\n        id: 4,\n        title: 'Login',\n        link: '/login'\n    },\n    {\n        id: 5,\n        title: 'Register',\n        link: '/register'\n    }, \n];\nvar Header = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var renderNavItems = function() {\n        return navItems.map(function(param) {\n            var id = param.id, title = param.title, link = param.link;\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {\n                onClick: function() {\n                    return router.push(\"/\".concat(link));\n                },\n                __source: {\n                    fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                },\n                __self: _this1,\n                children: title\n            }, id);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n        bg: \"light\",\n        expand: \"lg\",\n        __source: {\n            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            __source: {\n                fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Brand, {\n                    onClick: function() {\n                        return router.push('/');\n                    },\n                    __source: {\n                        fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Next-Bootstrap Starter\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Toggle, {\n                    \"aria-controls\": \"basic-navbar-nav\",\n                    __source: {\n                        fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar.Collapse, {\n                    id: \"basic-navbar-nav\",\n                    __source: {\n                        fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                        className: \"me-auto\",\n                        __source: {\n                            fileName: \"/Volumes/Samsung_T5/web/yeoman/first/generator-scaffold/generators/app/templates/next-bootstrap/components/Header/index.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: renderNavItems()\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUNXO0FBQzhCO0FBQzVCOzs7QUFHekMsR0FBSyxDQUFDTyxRQUFRLEdBQUcsQ0FBQztJQUNoQixDQUFDO1FBQ0NDLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLElBQUksRUFBRSxDQUFHO0lBQ1gsQ0FBQztJQUNELENBQUM7UUFDQ0YsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQU87UUFDZEMsSUFBSSxFQUFFLENBQVE7SUFDaEIsQ0FBQztJQUNELENBQUM7UUFDQ0YsRUFBRSxFQUFFLENBQUM7UUFDTEMsS0FBSyxFQUFFLENBQVM7UUFDaEJDLElBQUksRUFBRSxDQUFVO0lBQ2xCLENBQUM7SUFDRCxDQUFDO1FBQ0NGLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFPO1FBQ2RDLElBQUksRUFBRSxDQUFRO0lBQ2hCLENBQUM7SUFDRCxDQUFDO1FBQ0NGLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLEtBQUssRUFBRSxDQUFVO1FBQ2pCQyxJQUFJLEVBQUUsQ0FBVztJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQzs7O0lBQ3BCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHWCxzREFBUztJQUN4QixHQUFLLENBQUNZLGNBQWMsR0FBRyxRQUN6QjtRQUQrQixNQUMzQk4sQ0FBQUEsUUFBUSxDQUFDTyxHQUFHLENBQUMsUUFBUTtnQkFBTE4sRUFBRSxTQUFGQSxFQUFFLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUk7MEJBQzdCLE1BQU0sd0RBQUxQLHFEQUFRO2dCQUFVWSxPQUFPLEVBQUUsUUFBUTtvQkFBRkgsTUFBTSxDQUFOQSxNQUFNLENBQUNJLElBQUksQ0FBRSxDQUFDLEdBQU8sT0FBTE4sSUFBSTs7Ozs7Ozs7MEJBQ25ERCxLQUFLO2VBRE9ELEVBQUU7OztJQUtyQixNQUFNLHNFQUNITixtREFBTTtRQUFDZSxFQUFFLEVBQUMsQ0FBTztRQUFDQyxNQUFNLEVBQUMsQ0FBSTs7Ozs7Ozt3RkFDM0JiLHNEQUFTOzs7Ozs7OztxRkFDUEgseURBQVk7b0JBQUNhLE9BQU8sRUFBRSxRQUFRO3dCQUFGSCxNQUFNLENBQU5BLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQUc7Ozs7Ozs7OzhCQUFHLENBRS9DOztxRkFDQ2QsMERBQWE7b0JBQUNtQixDQUFhLGdCQUFDLENBQWtCOzs7Ozs7OztxRkFDOUNuQiw0REFBZTtvQkFBQ00sRUFBRSxFQUFDLENBQWtCOzs7Ozs7O21HQUNuQ0wsZ0RBQUc7d0JBQUNvQixTQUFTLEVBQUMsQ0FBUzs7Ozs7OztrQ0FDckJWLGNBQWM7Ozs7OztBQU0zQixDQUFDO0dBeEJLRixNQUFNOztRQUNLVixrREFBUzs7O0tBRHBCVSxNQUFNO0FBMEJaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeD9lMzBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkRyb3Bkb3duLCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJ1xuXG5cbmNvbnN0IG5hdkl0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdIb21lJyxcbiAgICBsaW5rOiAnLycsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Fib3V0JyxcbiAgICBsaW5rOiAnL2Fib3V0JyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnQ29udGFjdCcsXG4gICAgbGluazogJy9jb250YWN0JyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnTG9naW4nLFxuICAgIGxpbms6ICcvbG9naW4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6ICdSZWdpc3RlcicsXG4gICAgbGluazogJy9yZWdpc3RlcicsXG4gIH0sXG5dXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVuZGVyTmF2SXRlbXMgPSAoKSA9PiAoXG4gICAgbmF2SXRlbXMubWFwKCh7IGlkLCB0aXRsZSwgbGluayB9KSA9PiAoXG4gICAgICA8TmF2Lkxpbmsga2V5PXtpZH0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8ke2xpbmt9YCl9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L05hdi5MaW5rPlxuICAgICkpXG4gIClcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGJnPVwibGlnaHRcIiBleHBhbmQ9XCJsZ1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPE5hdmJhci5CcmFuZCBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5cbiAgICAgICAgICBOZXh0LUJvb3RzdHJhcCBTdGFydGVyXG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICB7cmVuZGVyTmF2SXRlbXMoKX1cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L05hdmJhcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIk5hdmJhciIsIk5hdiIsIk5hdkRyb3Bkb3duIiwiQ29udGFpbmVyIiwic3R5bGVzIiwibmF2SXRlbXMiLCJpZCIsInRpdGxlIiwibGluayIsIkhlYWRlciIsInJvdXRlciIsInJlbmRlck5hdkl0ZW1zIiwibWFwIiwib25DbGljayIsInB1c2giLCJiZyIsImV4cGFuZCIsIkJyYW5kIiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.jsx\n");

/***/ })

});