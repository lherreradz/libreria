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

/***/ "./api/autor.js":
/*!**********************!*\
  !*** ./api/autor.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAutores\": function() { return /* binding */ getAutores; },\n/* harmony export */   \"createAutor\": function() { return /* binding */ createAutor; }\n/* harmony export */ });\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction getAutores() {\n    return _getAutores.apply(this, arguments);\n}\nfunction _getAutores() {\n    _getAutores = _asyncToGenerator(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var setAutores, url, result;\n        return _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _s();\n                    setAutores = useAutores().setAutores;\n                    _ctx.prev = 2;\n                    console.log(\"getAutores\");\n                    url = \"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, \"/autor\");\n                    _ctx.next = 7;\n                    return fetch(url);\n                case 7:\n                    result = _ctx.sent;\n                    setAutores(result.body);\n                    return _ctx.abrupt(\"return\", true);\n                case 12:\n                    _ctx.prev = 12;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    return _ctx.abrupt(\"return\", null);\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                12\n            ]\n        ]);\n    }));\n    return _getAutores.apply(this, arguments);\n}\n_s(getAutores, \"Ee/Rk2kHxjak0UrMxN6tLpqbgFI=\", true);\nfunction createAutor(formData) {\n    return _createAutor.apply(this, arguments);\n}\nfunction _createAutor() {\n    _createAutor = _asyncToGenerator(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {\n        var url, params, response, result;\n        return _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    console.log(\"creando autor\");\n                    console.log(formData);\n                    url = \"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, \"/autor\");\n                    params = {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(formData)\n                    };\n                    console.log(params.body);\n                    _ctx.next = 8;\n                    return fetch(url, params);\n                case 8:\n                    response = _ctx.sent;\n                    _ctx.next = 11;\n                    return response.json();\n                case 11:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result);\n                case 15:\n                    _ctx.prev = 15;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 19:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                15\n            ]\n        ]);\n    }));\n    return _createAutor.apply(this, arguments);\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYXV0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxTQUFlQyxVQUFVO1dBQVZBLFdBQVU7O1NBQVZBLFdBQVU7SUFBVkEsV0FBVSw0TUFBekIsUUFBUSxXQUFvQixDQUFDO1lBRXhCQyxVQUFVLEVBSVJDLEdBQUcsRUFDSEMsTUFBTTs7Ozs7b0JBTFJGLFVBQVUsR0FBS0csVUFBVSxHQUF6QkgsVUFBVTs7b0JBR2RJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVk7b0JBQ2xCSixHQUFHLEdBQUksR0FBWSxNQUFNLENBQWhCSCx1REFBUyxFQUFDLENBQU07OzJCQUNWUSxLQUFLLENBQUNMLEdBQUc7O29CQUF4QkMsTUFBTTtvQkFDWkYsVUFBVSxDQUFDRSxNQUFNLENBQUNLLElBQUk7aURBQ2YsSUFBSTs7OztpREFFSixJQUFJOzs7Ozs7Ozs7OztJQUVuQixDQUFDO1dBYnFCUixXQUFVOztHQUFWQSxVQUFVO0FBZ0J6QixTQUFlUyxXQUFXLENBQUNDLFFBQVE7V0FBcEJELFlBQVc7O1NBQVhBLFlBQVc7SUFBWEEsWUFBVyw0TUFBMUIsUUFBUSxTQUFtQkMsUUFBUSxFQUFFLENBQUM7WUFJakNSLEdBQUcsRUFDSFMsTUFBTSxFQVFOQyxRQUFRLEVBQ1JULE1BQU07Ozs7O29CQVpaRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFlO29CQUMzQkQsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFFBQVE7b0JBQ2RSLEdBQUcsR0FBSSxHQUFZLE1BQU0sQ0FBaEJILHVEQUFTLEVBQUMsQ0FBTTtvQkFDekJZLE1BQU0sR0FBRyxDQUFDO3dCQUNkRSxNQUFNLEVBQUUsQ0FBTTt3QkFDZEMsT0FBTyxFQUFFLENBQUM7NEJBQ1IsQ0FBYyxlQUFFLENBQWtCO3dCQUNwQyxDQUFDO3dCQUNETixJQUFJLEVBQUVPLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixRQUFRO29CQUMvQixDQUFDO29CQUNETCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDSCxJQUFJOzsyQkFDQUQsS0FBSyxDQUFDTCxHQUFHLEVBQUVTLE1BQU07O29CQUFsQ0MsUUFBUTs7MkJBQ09BLFFBQVEsQ0FBQ0ssSUFBSTs7b0JBQTVCZCxNQUFNO2lEQUNMQSxNQUFNOzs7O29CQUViRSxPQUFPLENBQUNDLEdBQUc7aURBQ0osSUFBSTs7Ozs7Ozs7Ozs7SUFFakIsQ0FBQztXQXBCcUJHLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2F1dG9yLmpzP2I5MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXV0b3JlcygpIHtcblxuICAgIGNvbnN0IHsgc2V0QXV0b3JlcyB9ID0gdXNlQXV0b3JlcygpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRBdXRvcmVzXCIpXG4gICAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfUEFUSH0vYXV0b3JgO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBzZXRBdXRvcmVzKHJlc3VsdC5ib2R5KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBdXRvcihmb3JtRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNyZWFuZG8gYXV0b3JcIilcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuICAgICAgY29uc3QgdXJsID0gYCR7QkFTRV9QQVRIfS9hdXRvcmA7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtcy5ib2R5KVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHBhcmFtcyk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkJBU0VfUEFUSCIsImdldEF1dG9yZXMiLCJzZXRBdXRvcmVzIiwidXJsIiwicmVzdWx0IiwidXNlQXV0b3JlcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImJvZHkiLCJjcmVhdGVBdXRvciIsImZvcm1EYXRhIiwicGFyYW1zIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/autor.js\n");

/***/ })

});