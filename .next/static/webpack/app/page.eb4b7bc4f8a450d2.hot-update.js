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

/***/ "(app-pages-browser)/./src/app/scripts/minHeight.tsx":
/*!***************************************!*\
  !*** ./src/app/scripts/minHeight.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useToggleClassOnResize = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const toggleClassBasedOnWidth = ()=>{\n            const body = document.querySelector(\".heroPage-Container\");\n            const viewportWidth = window.innerWidth;\n            var screenWidth = window.screen.width * 0.9;\n            console.log(screenWidth * 0.1);\n            // If the viewport Width is less than the screen Width, remove the min-Width class\n            if (viewportWidth < screenWidth - 100) {\n                body === null || body === void 0 ? void 0 : body.classList.add(\"small-window\");\n            } else {\n                body === null || body === void 0 ? void 0 : body.classList.remove(\"small-window\");\n            }\n        };\n        // Initial check\n        toggleClassBasedOnWidth();\n        window.addEventListener(\"resize\", toggleClassBasedOnWidth);\n        return ()=>{\n            window.removeEventListener(\"resize\", toggleClassBasedOnWidth);\n        };\n    }, []);\n};\n_s(useToggleClassOnResize, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useToggleClassOnResize);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyaXB0cy9taW5IZWlnaHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFDa0M7QUFFbEMsTUFBTUMseUJBQXlCOztJQUM3QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNRSwwQkFBMEI7WUFDOUIsTUFBTUMsT0FBT0MsU0FBU0MsYUFBYSxDQUFDO1lBQ3BDLE1BQU1DLGdCQUFnQkMsT0FBT0MsVUFBVTtZQUN2QyxJQUFJQyxjQUFjRixPQUFPRyxNQUFNLENBQUNDLEtBQUssR0FBQztZQUN0Q0MsUUFBUUMsR0FBRyxDQUFDSixjQUFZO1lBRXhCLGtGQUFrRjtZQUNsRixJQUFJSCxnQkFBZ0JHLGNBQWMsS0FBSztnQkFDckNOLGlCQUFBQSwyQkFBQUEsS0FBTVcsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDdEIsT0FBTztnQkFDTFosaUJBQUFBLDJCQUFBQSxLQUFNVyxTQUFTLENBQUNFLE1BQU0sQ0FBQztZQUN6QjtRQUNGO1FBRUEsZ0JBQWdCO1FBQ2hCZDtRQUVBSyxPQUFPVSxnQkFBZ0IsQ0FBQyxVQUFVZjtRQUVsQyxPQUFPO1lBQ0xLLE9BQU9XLG1CQUFtQixDQUFDLFVBQVVoQjtRQUN2QztJQUNGLEdBQUcsRUFBRTtBQUNQO0dBekJNRDtBQTJCTiwrREFBZUEsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NyaXB0cy9taW5IZWlnaHQudHN4PzU4ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZVRvZ2dsZUNsYXNzT25SZXNpemUgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzQmFzZWRPbldpZHRoID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9QYWdlLUNvbnRhaW5lcicpO1xyXG4gICAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIHZhciBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGgqMC45O1xyXG4gICAgICBjb25zb2xlLmxvZyhzY3JlZW5XaWR0aCowLjEpXHJcblxyXG4gICAgICAvLyBJZiB0aGUgdmlld3BvcnQgV2lkdGggaXMgbGVzcyB0aGFuIHRoZSBzY3JlZW4gV2lkdGgsIHJlbW92ZSB0aGUgbWluLVdpZHRoIGNsYXNzXHJcbiAgICAgIGlmICh2aWV3cG9ydFdpZHRoIDwgc2NyZWVuV2lkdGggLSAxMDApIHtcclxuICAgICAgICBib2R5Py5jbGFzc0xpc3QuYWRkKCdzbWFsbC13aW5kb3cnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBib2R5Py5jbGFzc0xpc3QucmVtb3ZlKCdzbWFsbC13aW5kb3cnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJbml0aWFsIGNoZWNrXHJcbiAgICB0b2dnbGVDbGFzc0Jhc2VkT25XaWR0aCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0b2dnbGVDbGFzc0Jhc2VkT25XaWR0aCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRvZ2dsZUNsYXNzQmFzZWRPbldpZHRoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlQ2xhc3NPblJlc2l6ZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVRvZ2dsZUNsYXNzT25SZXNpemUiLCJ0b2dnbGVDbGFzc0Jhc2VkT25XaWR0aCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2aWV3cG9ydFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcmVlbldpZHRoIiwic2NyZWVuIiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scripts/minHeight.tsx\n"));

/***/ })

});