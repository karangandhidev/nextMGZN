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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useToggleClassOnResize = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const toggleClassBasedOnHeight = ()=>{\n            const body = document.querySelector(\".heroPage-Container\");\n            const viewportHeight = window.innerHeight;\n            const screenHeight = window.screen.height;\n            console.log(viewportHeight);\n            console.log(window);\n            // If the viewport height is less than the screen height, remove the min-height class\n            if (viewportHeight < screenHeight) {\n                body.classList.add(\"small-window\");\n            } else {\n                console.log(\"remove kar bsdk\");\n                body.classList.remove(\"small-window\");\n            }\n        };\n        // Initial check\n        toggleClassBasedOnHeight();\n        // Add event listener to monitor resize events\n        window.addEventListener(\"resize\", toggleClassBasedOnHeight);\n        // Cleanup event listener on component unmount\n        return ()=>{\n            window.removeEventListener(\"resize\", toggleClassBasedOnHeight);\n        };\n    }, []);\n};\n_s(useToggleClassOnResize, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useToggleClassOnResize);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NyaXB0cy9taW5IZWlnaHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFDa0M7QUFFbEMsTUFBTUMseUJBQXlCOztJQUM3QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNRSwyQkFBMkI7WUFDL0IsTUFBTUMsT0FBT0MsU0FBU0MsYUFBYSxDQUFDO1lBQ3BDLE1BQU1DLGlCQUFpQkMsT0FBT0MsV0FBVztZQUN6QyxNQUFNQyxlQUFlRixPQUFPRyxNQUFNLENBQUNDLE1BQU07WUFDdkNDLFFBQVFDLEdBQUcsQ0FBQ1A7WUFDWk0sUUFBUUMsR0FBRyxDQUFDTjtZQUVkLHFGQUFxRjtZQUNyRixJQUFJRCxpQkFBaUJHLGNBQWM7Z0JBQ2pDTixLQUFLVyxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUNyQixPQUFPO2dCQUNMSCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pWLEtBQUtXLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1lBQ3hCO1FBQ0Y7UUFFQSxnQkFBZ0I7UUFDaEJkO1FBRUEsOENBQThDO1FBQzlDSyxPQUFPVSxnQkFBZ0IsQ0FBQyxVQUFVZjtRQUVsQyw4Q0FBOEM7UUFDOUMsT0FBTztZQUNMSyxPQUFPVyxtQkFBbUIsQ0FBQyxVQUFVaEI7UUFDdkM7SUFDRixHQUFHLEVBQUU7QUFDUDtHQTdCTUQ7QUErQk4sK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NjcmlwdHMvbWluSGVpZ2h0LnRzeD81OGY2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VUb2dnbGVDbGFzc09uUmVzaXplID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVDbGFzc0Jhc2VkT25IZWlnaHQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb1BhZ2UtQ29udGFpbmVyJyk7XHJcbiAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZyh2aWV3cG9ydEhlaWdodClcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpXHJcblxyXG4gICAgICAvLyBJZiB0aGUgdmlld3BvcnQgaGVpZ2h0IGlzIGxlc3MgdGhhbiB0aGUgc2NyZWVuIGhlaWdodCwgcmVtb3ZlIHRoZSBtaW4taGVpZ2h0IGNsYXNzXHJcbiAgICAgIGlmICh2aWV3cG9ydEhlaWdodCA8IHNjcmVlbkhlaWdodCkge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tbWluLWhlaWdodCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmUga2FyIGJzZGsnKVxyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tbWluLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEluaXRpYWwgY2hlY2tcclxuICAgIHRvZ2dsZUNsYXNzQmFzZWRPbkhlaWdodCgpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBtb25pdG9yIHJlc2l6ZSBldmVudHNcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0b2dnbGVDbGFzc0Jhc2VkT25IZWlnaHQpO1xyXG5cclxuICAgIC8vIENsZWFudXAgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0b2dnbGVDbGFzc0Jhc2VkT25IZWlnaHQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUb2dnbGVDbGFzc09uUmVzaXplO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlVG9nZ2xlQ2xhc3NPblJlc2l6ZSIsInRvZ2dsZUNsYXNzQmFzZWRPbkhlaWdodCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2aWV3cG9ydEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scripts/minHeight.tsx\n"));

/***/ })

});