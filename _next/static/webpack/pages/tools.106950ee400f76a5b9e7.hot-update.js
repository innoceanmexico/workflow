webpackHotUpdate_N_E("pages/tools",{

/***/ "./components/charts/bubble.js":
/*!*************************************!*\
  !*** ./components/charts/bubble.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nivo/circle-packing */ \"./node_modules/@nivo/circle-packing/dist/nivo-circle-packing.es.js\");\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root */ \"./components/charts/root.json\");\nvar _root__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./root */ \"./components/charts/root.json\", 1);\nvar _jsxFileName = \"/Users/IMCYC/Desktop/INNOCEANMEXICO/gh-pages-app/components/charts/bubble.js\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar MyResponsiveBubble = function MyResponsiveBubble(_ref) {\n  var data = _ref.data;\n  return __jsx(_nivo_circle_packing__WEBPACK_IMPORTED_MODULE_1__[\"ResponsiveBubble\"], {\n    root: data,\n    margin: {\n      top: 20,\n      right: 20,\n      bottom: 20,\n      left: 20\n    },\n    identity: \"name\",\n    value: \"loc\",\n    colors: {\n      scheme: 'nivo'\n    },\n    padding: 6,\n    labelTextColor: {\n      from: 'color',\n      modifiers: [['darker', 0.8]]\n    },\n    borderWidth: 2,\n    borderColor: {\n      from: 'color'\n    },\n    defs: [{\n      id: 'lines',\n      type: 'patternLines',\n      background: 'none',\n      color: 'inherit',\n      rotation: -45,\n      lineWidth: 5,\n      spacing: 8\n    }],\n    fill: [{\n      match: {\n        depth: 1\n      },\n      id: 'lines'\n    }],\n    animate: true,\n    motionStiffness: 90,\n    motionDamping: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  });\n};\n\n_c = MyResponsiveBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyResponsiveBubble);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyResponsiveBubble\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydHMvYnViYmxlLmpzPzI1MmMiXSwibmFtZXMiOlsiTXlSZXNwb25zaXZlQnViYmxlIiwiZGF0YSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInNjaGVtZSIsImZyb20iLCJtb2RpZmllcnMiLCJpZCIsInR5cGUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJyb3RhdGlvbiIsImxpbmVXaWR0aCIsInNwYWNpbmciLCJtYXRjaCIsImRlcHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxTQUN2QixNQUFDLHFFQUFEO0FBQ0ksUUFBSSxFQUFFQSxJQURWO0FBRUksVUFBTSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxFQUFQO0FBQVdDLFdBQUssRUFBRSxFQUFsQjtBQUFzQkMsWUFBTSxFQUFFLEVBQTlCO0FBQWtDQyxVQUFJLEVBQUU7QUFBeEMsS0FGWjtBQUdJLFlBQVEsRUFBQyxNQUhiO0FBSUksU0FBSyxFQUFDLEtBSlY7QUFLSSxVQUFNLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FMWjtBQU1JLFdBQU8sRUFBRSxDQU5iO0FBT0ksa0JBQWMsRUFBRTtBQUFFQyxVQUFJLEVBQUUsT0FBUjtBQUFpQkMsZUFBUyxFQUFFLENBQUUsQ0FBRSxRQUFGLEVBQVksR0FBWixDQUFGO0FBQTVCLEtBUHBCO0FBUUksZUFBVyxFQUFFLENBUmpCO0FBU0ksZUFBVyxFQUFFO0FBQUVELFVBQUksRUFBRTtBQUFSLEtBVGpCO0FBVUksUUFBSSxFQUFFLENBQ0Y7QUFDSUUsUUFBRSxFQUFFLE9BRFI7QUFFSUMsVUFBSSxFQUFFLGNBRlY7QUFHSUMsZ0JBQVUsRUFBRSxNQUhoQjtBQUlJQyxXQUFLLEVBQUUsU0FKWDtBQUtJQyxjQUFRLEVBQUUsQ0FBQyxFQUxmO0FBTUlDLGVBQVMsRUFBRSxDQU5mO0FBT0lDLGFBQU8sRUFBRTtBQVBiLEtBREUsQ0FWVjtBQXFCSSxRQUFJLEVBQUUsQ0FBRTtBQUFFQyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBVDtBQUF1QlIsUUFBRSxFQUFFO0FBQTNCLEtBQUYsQ0FyQlY7QUFzQkksV0FBTyxFQUFFLElBdEJiO0FBdUJJLG1CQUFlLEVBQUUsRUF2QnJCO0FBd0JJLGlCQUFhLEVBQUUsRUF4Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEdUI7QUFBQSxDQUEzQjs7S0FBTVQsa0I7QUE2QlNBLGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jaGFydHMvYnViYmxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlc3BvbnNpdmVCdWJibGUgfSBmcm9tICdAbml2by9jaXJjbGUtcGFja2luZydcbmltcG9ydCBkYXRhIGZyb20gJy4vcm9vdCc7XG5cbmNvbnN0IE15UmVzcG9uc2l2ZUJ1YmJsZSA9ICh7ZGF0YX0pID0+IChcbiAgICA8UmVzcG9uc2l2ZUJ1YmJsZVxuICAgICAgICByb290PXtkYXRhfVxuICAgICAgICBtYXJnaW49e3sgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDIwLCBsZWZ0OiAyMCB9fVxuICAgICAgICBpZGVudGl0eT1cIm5hbWVcIlxuICAgICAgICB2YWx1ZT1cImxvY1wiXG4gICAgICAgIGNvbG9ycz17eyBzY2hlbWU6ICduaXZvJyB9fVxuICAgICAgICBwYWRkaW5nPXs2fVxuICAgICAgICBsYWJlbFRleHRDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMC44IF0gXSB9fVxuICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJyB9fVxuICAgICAgICBkZWZzPXtbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdsaW5lcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhdHRlcm5MaW5lcycsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgICAgcm90YXRpb246IC00NSxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDUsXG4gICAgICAgICAgICAgICAgc3BhY2luZzogOFxuICAgICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgICBmaWxsPXtbIHsgbWF0Y2g6IHsgZGVwdGg6IDEgfSwgaWQ6ICdsaW5lcycgfSBdfVxuICAgICAgICBhbmltYXRlPXt0cnVlfVxuICAgICAgICBtb3Rpb25TdGlmZm5lc3M9ezkwfVxuICAgICAgICBtb3Rpb25EYW1waW5nPXsxMn1cbiAgICAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNeVJlc3BvbnNpdmVCdWJibGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/charts/bubble.js\n");

/***/ })

})