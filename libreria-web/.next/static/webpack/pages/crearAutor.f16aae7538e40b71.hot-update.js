"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/crearAutor",{

/***/ "./api/autor.js":
/*!**********************!*\
  !*** ./api/autor.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAutores\": function() { return /* binding */ getAutores; },\n/* harmony export */   \"createAutor\": function() { return /* binding */ createAutor; }\n/* harmony export */ });\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction getAutores(logout) {\n    return _getAutores.apply(this, arguments);\n}\nfunction _getAutores() {\n    _getAutores = _asyncToGenerator(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(logout) {\n        var url, result;\n        return _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    url = \"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, \"/autor\");\n                    _ctx.next = 4;\n                    return fetch(url);\n                case 4:\n                    result = _ctx.sent;\n                    return _ctx.abrupt(\"return\", result ? result : null);\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    return _ctx.abrupt(\"return\", null);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                8\n            ]\n        ]);\n    }));\n    return _getAutores.apply(this, arguments);\n}\nfunction createAutor(formData) {\n    return _createAutor.apply(this, arguments);\n}\nfunction _createAutor() {\n    _createAutor = _asyncToGenerator(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {\n        var url, params, response, result;\n        return _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    console.log(\"creando autor\");\n                    console.log(formData);\n                    url = \"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, \"/autor\");\n                    params = {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(formData)\n                    };\n                    _ctx.next = 7;\n                    return fetch(url, params);\n                case 7:\n                    response = _ctx.sent;\n                    _ctx.next = 10;\n                    return response.json();\n                case 10:\n                    result = _ctx.sent;\n                    console.log(\"resultado:\" + result);\n                    return _ctx.abrupt(\"return\", result);\n                case 15:\n                    _ctx.prev = 15;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                    return _ctx.abrupt(\"return\", null);\n                case 19:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                15\n            ]\n        ]);\n    }));\n    return _createAutor.apply(this, arguments);\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYXV0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLFNBQWVDLFVBQVUsQ0FBQ0MsTUFBTTtXQUFqQkQsV0FBVTs7U0FBVkEsV0FBVTtJQUFWQSxXQUFVLDRNQUF6QixRQUFRLFNBQWtCQyxNQUFNLEVBQUUsQ0FBQztZQUU5QkMsR0FBRyxFQUNIQyxNQUFNOzs7OztvQkFETkQsR0FBRyxHQUFJLEdBQVksTUFBTSxDQUFoQkgsdURBQVMsRUFBQyxDQUFNOzsyQkFDVkssS0FBSyxDQUFDRixHQUFHOztvQkFBeEJDLE1BQU07aURBQ0xBLE1BQU0sR0FBR0EsTUFBTSxHQUFHLElBQUk7Ozs7aURBRXRCLElBQUk7Ozs7Ozs7Ozs7O0lBRWpCLENBQUM7V0FScUJILFdBQVU7O0FBV3pCLFNBQWVLLFdBQVcsQ0FBQ0MsUUFBUTtXQUFwQkQsWUFBVzs7U0FBWEEsWUFBVztJQUFYQSxZQUFXLDRNQUExQixRQUFRLFNBQW1CQyxRQUFRLEVBQUUsQ0FBQztZQUlqQ0osR0FBRyxFQUNISyxNQUFNLEVBT05DLFFBQVEsRUFDUkwsTUFBTTs7Ozs7b0JBWFpNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWU7b0JBQzNCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osUUFBUTtvQkFDZEosR0FBRyxHQUFJLEdBQVksTUFBTSxDQUFoQkgsdURBQVMsRUFBQyxDQUFNO29CQUN6QlEsTUFBTSxHQUFHLENBQUM7d0JBQ2RJLE1BQU0sRUFBRSxDQUFNO3dCQUNkQyxPQUFPLEVBQUUsQ0FBQzs0QkFDUixDQUFjLGVBQUUsQ0FBa0I7d0JBQ3BDLENBQUM7d0JBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNULFFBQVE7b0JBQy9CLENBQUM7OzJCQUNzQkYsS0FBSyxDQUFDRixHQUFHLEVBQUVLLE1BQU07O29CQUFsQ0MsUUFBUTs7MkJBQ09BLFFBQVEsQ0FBQ1EsSUFBSTs7b0JBQTVCYixNQUFNO29CQUNaTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFZLGNBQUdQLE1BQU07aURBQzFCQSxNQUFNOzs7O29CQUViTSxPQUFPLENBQUNDLEdBQUc7aURBQ0osSUFBSTs7Ozs7Ozs7Ozs7SUFFakIsQ0FBQztXQXBCcUJMLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2F1dG9yLmpzP2I5MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXV0b3Jlcyhsb2dvdXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gYCR7QkFTRV9QQVRIfS9hdXRvcmA7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdCA6IG51bGw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQXV0b3IoZm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJjcmVhbmRvIGF1dG9yXCIpXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcbiAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfUEFUSH0vYXV0b3JgO1xuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0YWRvOlwiICsgcmVzdWx0KVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJCQVNFX1BBVEgiLCJnZXRBdXRvcmVzIiwibG9nb3V0IiwidXJsIiwicmVzdWx0IiwiZmV0Y2giLCJjcmVhdGVBdXRvciIsImZvcm1EYXRhIiwicGFyYW1zIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/autor.js\n");

/***/ })

});