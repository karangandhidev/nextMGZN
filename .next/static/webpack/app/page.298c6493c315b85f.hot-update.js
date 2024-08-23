"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/_components/whatWeDo.tsx":
/*!******************************************!*\
  !*** ./src/app/_components/whatWeDo.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst data = [\n    {\n        title: \"Product-Market Fit\",\n        desc: \"We continuously refine our offerings to ensure they meet market needs and deliver real value.\"\n    },\n    {\n        title: \"Scalability Mindset\",\n        desc: \"We identify and optimize processes that can drive sustainable growth over time.\"\n    },\n    {\n        title: \"Churn Reduction\",\n        desc: \"We analyze churn rates and develop targeted strategies to improve customer retention.\"\n    },\n    {\n        title: \"Campaign Management\",\n        desc: \"Comprehensive campaign management to elevate your brand's presence and drive impactful results.\"\n    },\n    {\n        title: \"Data-Driven Decisions\",\n        desc: \"We use analytics to guide our strategies and measure our impact.\"\n    },\n    {\n        title: \"Rapid Experimentation\",\n        desc: \"We test ideas quickly, learn from the results, and iterate fast.\"\n    },\n    {\n        title: \"Customer Retention\",\n        desc: \"By understanding our customers, we enhance their experience and drive retention.\"\n    },\n    {\n        title: \"Innovative Solutions\",\n        desc: \"Creativity and outside-the-box thinking drive our pursuit of new growth opportunities.\"\n    }\n];\nconst WhatWeDo = ()=>{\n    _s();\n    const [mobileShowState, setMobileShowState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const [desktopShowState, setDesktopShowState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8);\n    const handleMobileSeeMore = ()=>{\n        if (mobileShowState + 4 <= data.length) {\n            setMobileShowState(mobileShowState + 4);\n        } else {\n            setMobileShowState(data.length);\n        }\n    };\n    const handleDesktopSeeMore = ()=>{\n        if (desktopShowState + 4 <= data.length) {\n            setDesktopShowState(desktopShowState + 4);\n        } else {\n            setDesktopShowState(data.length);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"whatWeDoContainer section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"wwd-title\",\n                children: \"What We Do\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wwdContent-Container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wwd-desktopView wwd-Content\",\n                        children: data.slice(0, desktopShowState).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wwd-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"wwd-icon\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"wwd-heading\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"wwd-info\",\n                                        children: item.desc\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"wwd-mobileView wwd-Content\",\n                        children: data.slice(0, mobileShowState).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wwd-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"wwd-icon\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"wwd-heading\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"wwd-info\",\n                                        children: item.desc\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            mobileShowState < data.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"seeMore-Button mobile-Button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: handleMobileSeeMore,\n                    className: \"seeMore\",\n                    children: \"See More (Mobile)\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined),\n            desktopShowState < data.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"seeMore-Button desktop-Button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: handleDesktopSeeMore,\n                    className: \"seeMore\",\n                    children: \"See More (Desktop)\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Work\\\\test\\\\scroller\\\\src\\\\app\\\\_components\\\\whatWeDo.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(WhatWeDo, \"HFWkv7XLT+A2Oict/Qt6r11q1lE=\");\n_c = WhatWeDo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhatWeDo);\nvar _c;\n$RefreshReg$(_c, \"WhatWeDo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvd2hhdFdlRG8udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUVqQyxNQUFNQyxPQUFPO0lBQ1Q7UUFBRUMsT0FBTztRQUFzQkMsTUFBTTtJQUFnRztJQUNySTtRQUFFRCxPQUFPO1FBQXVCQyxNQUFNO0lBQWtGO0lBQ3hIO1FBQUVELE9BQU87UUFBbUJDLE1BQU07SUFBd0Y7SUFDMUg7UUFBRUQsT0FBTztRQUF1QkMsTUFBTTtJQUFrRztJQUN4STtRQUFFRCxPQUFPO1FBQXlCQyxNQUFNO0lBQW1FO0lBQzNHO1FBQUVELE9BQU87UUFBeUJDLE1BQU07SUFBbUU7SUFDM0c7UUFBRUQsT0FBTztRQUFzQkMsTUFBTTtJQUFtRjtJQUN4SDtRQUFFRCxPQUFPO1FBQXdCQyxNQUFNO0lBQXlGO0NBRW5JO0FBRUQsTUFBTUMsV0FBVzs7SUFDYixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQUM7SUFFekQsTUFBTVMsc0JBQXNCO1FBQ3hCLElBQUlKLGtCQUFrQixLQUFLSixLQUFLUyxNQUFNLEVBQUU7WUFDcENKLG1CQUFtQkQsa0JBQWtCO1FBQ3pDLE9BQU87WUFDSEMsbUJBQW1CTCxLQUFLUyxNQUFNO1FBQ2xDO0lBQ0o7SUFFQSxNQUFNQyx1QkFBdUI7UUFDekIsSUFBSUosbUJBQW1CLEtBQUtOLEtBQUtTLE1BQU0sRUFBRTtZQUNyQ0Ysb0JBQW9CRCxtQkFBbUI7UUFDM0MsT0FBTztZQUNIQyxvQkFBb0JQLEtBQUtTLE1BQU07UUFDbkM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVk7Ozs7OzswQkFDMUIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1ZaLEtBQUtjLEtBQUssQ0FBQyxHQUFHUixrQkFBa0JTLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDeEMsOERBQUNOO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlDLFdBQVU7Ozs7OztrREFDZiw4REFBQ007d0NBQUdOLFdBQVU7a0RBQWVJLEtBQUtmLEtBQUs7Ozs7OztrREFDdkMsOERBQUNrQjt3Q0FBRVAsV0FBVTtrREFBWUksS0FBS2QsSUFBSTs7Ozs7OzsrQkFIUGU7Ozs7Ozs7Ozs7a0NBT3ZDLDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDVlosS0FBS2MsS0FBSyxDQUFDLEdBQUdWLGlCQUFpQlcsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2Qyw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSUMsV0FBVTs7Ozs7O2tEQUNmLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBZUksS0FBS2YsS0FBSzs7Ozs7O2tEQUN2Qyw4REFBQ2tCO3dDQUFFUCxXQUFVO2tEQUFZSSxLQUFLZCxJQUFJOzs7Ozs7OytCQUhQZTs7Ozs7Ozs7Ozs7Ozs7OztZQVExQ2Isa0JBQWtCSixLQUFLUyxNQUFNLGtCQUMxQiw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNRO29CQUNHQyxNQUFLO29CQUNMQyxTQUFTZDtvQkFDVEksV0FBVTs4QkFDYjs7Ozs7Ozs7Ozs7WUFLUk4sbUJBQW1CTixLQUFLUyxNQUFNLGtCQUMzQiw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNRO29CQUNHQyxNQUFLO29CQUNMQyxTQUFTWjtvQkFDVEUsV0FBVTs4QkFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0FuRU1UO0tBQUFBO0FBcUVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvd2hhdFdlRG8udHN4P2FlOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gICAgeyB0aXRsZTogJ1Byb2R1Y3QtTWFya2V0IEZpdCcsIGRlc2M6ICdXZSBjb250aW51b3VzbHkgcmVmaW5lIG91ciBvZmZlcmluZ3MgdG8gZW5zdXJlIHRoZXkgbWVldCBtYXJrZXQgbmVlZHMgYW5kIGRlbGl2ZXIgcmVhbCB2YWx1ZS4nIH0sXHJcbiAgICB7IHRpdGxlOiAnU2NhbGFiaWxpdHkgTWluZHNldCcsIGRlc2M6ICdXZSBpZGVudGlmeSBhbmQgb3B0aW1pemUgcHJvY2Vzc2VzIHRoYXQgY2FuIGRyaXZlIHN1c3RhaW5hYmxlIGdyb3d0aCBvdmVyIHRpbWUuJyB9LFxyXG4gICAgeyB0aXRsZTogJ0NodXJuIFJlZHVjdGlvbicsIGRlc2M6ICdXZSBhbmFseXplIGNodXJuIHJhdGVzIGFuZCBkZXZlbG9wIHRhcmdldGVkIHN0cmF0ZWdpZXMgdG8gaW1wcm92ZSBjdXN0b21lciByZXRlbnRpb24uJyB9LFxyXG4gICAgeyB0aXRsZTogJ0NhbXBhaWduIE1hbmFnZW1lbnQnLCBkZXNjOiBcIkNvbXByZWhlbnNpdmUgY2FtcGFpZ24gbWFuYWdlbWVudCB0byBlbGV2YXRlIHlvdXIgYnJhbmQncyBwcmVzZW5jZSBhbmQgZHJpdmUgaW1wYWN0ZnVsIHJlc3VsdHMuXCIgfSxcclxuICAgIHsgdGl0bGU6ICdEYXRhLURyaXZlbiBEZWNpc2lvbnMnLCBkZXNjOiAnV2UgdXNlIGFuYWx5dGljcyB0byBndWlkZSBvdXIgc3RyYXRlZ2llcyBhbmQgbWVhc3VyZSBvdXIgaW1wYWN0LicgfSxcclxuICAgIHsgdGl0bGU6ICdSYXBpZCBFeHBlcmltZW50YXRpb24nLCBkZXNjOiAnV2UgdGVzdCBpZGVhcyBxdWlja2x5LCBsZWFybiBmcm9tIHRoZSByZXN1bHRzLCBhbmQgaXRlcmF0ZSBmYXN0LicgfSxcclxuICAgIHsgdGl0bGU6ICdDdXN0b21lciBSZXRlbnRpb24nLCBkZXNjOiAnQnkgdW5kZXJzdGFuZGluZyBvdXIgY3VzdG9tZXJzLCB3ZSBlbmhhbmNlIHRoZWlyIGV4cGVyaWVuY2UgYW5kIGRyaXZlIHJldGVudGlvbi4nIH0sXHJcbiAgICB7IHRpdGxlOiAnSW5ub3ZhdGl2ZSBTb2x1dGlvbnMnLCBkZXNjOiAnQ3JlYXRpdml0eSBhbmQgb3V0c2lkZS10aGUtYm94IHRoaW5raW5nIGRyaXZlIG91ciBwdXJzdWl0IG9mIG5ldyBncm93dGggb3Bwb3J0dW5pdGllcy4nIH0sXHJcbiAgIFxyXG5dO1xyXG5cclxuY29uc3QgV2hhdFdlRG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbW9iaWxlU2hvd1N0YXRlLCBzZXRNb2JpbGVTaG93U3RhdGVdID0gdXNlU3RhdGUoNCk7XHJcbiAgICBjb25zdCBbZGVza3RvcFNob3dTdGF0ZSwgc2V0RGVza3RvcFNob3dTdGF0ZV0gPSB1c2VTdGF0ZSg4KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb2JpbGVTZWVNb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtb2JpbGVTaG93U3RhdGUgKyA0IDw9IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldE1vYmlsZVNob3dTdGF0ZShtb2JpbGVTaG93U3RhdGUgKyA0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRNb2JpbGVTaG93U3RhdGUoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVza3RvcFNlZU1vcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRlc2t0b3BTaG93U3RhdGUgKyA0IDw9IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldERlc2t0b3BTaG93U3RhdGUoZGVza3RvcFNob3dTdGF0ZSArIDQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldERlc2t0b3BTaG93U3RhdGUoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXRXZURvQ29udGFpbmVyIHNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInd3ZC10aXRsZVwiPldoYXQgV2UgRG88L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd3ZENvbnRlbnQtQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd3ZC1kZXNrdG9wVmlldyB3d2QtQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnNsaWNlKDAsIGRlc2t0b3BTaG93U3RhdGUpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3d2QtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3d2QtaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInd3ZC1oZWFkaW5nXCI+e2l0ZW0udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInd3ZC1pbmZvXCI+e2l0ZW0uZGVzY308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd3ZC1tb2JpbGVWaWV3IHd3ZC1Db250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuc2xpY2UoMCwgbW9iaWxlU2hvd1N0YXRlKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3dkLWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3dkLWljb25cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3d2QtaGVhZGluZ1wiPntpdGVtLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3d2QtaW5mb1wiPntpdGVtLmRlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vYmlsZVNob3dTdGF0ZSA8IGRhdGEubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlTW9yZS1CdXR0b24gbW9iaWxlLUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vYmlsZVNlZU1vcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlZU1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VlIE1vcmUgKE1vYmlsZSlcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZGVza3RvcFNob3dTdGF0ZSA8IGRhdGEubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlTW9yZS1CdXR0b24gZGVza3RvcC1CdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZXNrdG9wU2VlTW9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VlTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWUgTW9yZSAoRGVza3RvcClcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoYXRXZURvO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJkYXRhIiwidGl0bGUiLCJkZXNjIiwiV2hhdFdlRG8iLCJtb2JpbGVTaG93U3RhdGUiLCJzZXRNb2JpbGVTaG93U3RhdGUiLCJkZXNrdG9wU2hvd1N0YXRlIiwic2V0RGVza3RvcFNob3dTdGF0ZSIsImhhbmRsZU1vYmlsZVNlZU1vcmUiLCJsZW5ndGgiLCJoYW5kbGVEZXNrdG9wU2VlTW9yZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJoMiIsInAiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/whatWeDo.tsx\n"));

/***/ })

});