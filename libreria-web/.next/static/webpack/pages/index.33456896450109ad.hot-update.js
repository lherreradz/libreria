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

/***/ "./components/Autor/Autor.js":
/*!***********************************!*\
  !*** ./components/Autor/Autor.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Autor; }\n/* harmony export */ });\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Autor() {\n    var autores = getAutores();\n    console.log(\"autores: \" + autores);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Autores\"\n            }, void 0, false, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                celled: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    children: \"Nacionalidad\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Body, {}, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                colSpan: \"3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                    floated: \"right\",\n                                    pagination: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"chevron left\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"chevron right\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this));\n};\n_c = Autor;\nfunction getAutores() {\n    return _getAutores.apply(this, arguments);\n}\nfunction _getAutores() {\n    _getAutores = _asyncToGenerator(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var url;\n        return _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    url = \"$http://localhost:3001/autor\";\n                    console.log(url);\n                    return _ctx.abrupt(\"return\", fetch(url).then(function(response) {\n                        return response.json();\n                    }).then(function(data) {\n                        return console.log(data);\n                    }).catch(function(error) {\n                        return console.error(error);\n                    }));\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getAutores.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Autor\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dG9yL0F1dG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUM0QjtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsUUFBUSxDQUFDSyxLQUFLLEdBQUcsQ0FBQztJQUU3QixHQUFLLENBQUNDLE9BQU8sR0FBR0MsVUFBVTtJQUUxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxhQUFHSCxPQUFPO0lBRWpDLE1BQU0sNkVBQ0RJLENBQUc7O3dGQUNDQyxDQUFFOzBCQUFDLENBQU87Ozs7Ozt3RkFDVlIsb0RBQUs7Z0JBQUNTLE1BQU07O2dHQUNSVCwyREFBWTs4R0FDWkEsd0RBQVM7OzRHQUNMQSwrREFBZ0I7OENBQUMsQ0FBTTs7Ozs7OzRHQUN2QkEsK0RBQWdCOzhDQUFDLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUlqQ0EseURBQVU7Ozs7O2dHQUlWQSwyREFBWTs4R0FDWkEsd0RBQVM7a0hBQ0xBLCtEQUFnQjtnQ0FBQ2UsT0FBTyxFQUFDLENBQUc7c0hBQzVCaEIsbURBQUk7b0NBQUNpQixPQUFPLEVBQUMsQ0FBTztvQ0FBQ0MsVUFBVTs7b0hBQzNCbEIsd0RBQVM7NENBQUNvQixFQUFFLEVBQUMsQ0FBRzs0Q0FBQ0MsSUFBSTtrSUFDckJ0QixtREFBSTtnREFBQ3VCLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7OztvSEFFeEJ0Qix3REFBUzs0Q0FBQ29CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJwQix3REFBUzs0Q0FBQ29CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJwQix3REFBUzs0Q0FBQ29CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJwQix3REFBUzs0Q0FBQ29CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJwQix3REFBUzs0Q0FBQ29CLEVBQUUsRUFBQyxDQUFHOzRDQUFDQyxJQUFJO2tJQUNyQnRCLG1EQUFJO2dEQUFDdUIsSUFBSSxFQUFDLENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xELENBQUM7S0ExQ3VCbkIsS0FBSztTQTZDZEUsVUFBVTtXQUFWQSxXQUFVOztTQUFWQSxXQUFVO0lBQVZBLFdBQVUsNE1BQXpCLFFBQVEsV0FBb0IsQ0FBQztZQUVuQmtCLEdBQUc7Ozs7b0JBQUhBLEdBQUcsR0FBSSxDQUE0QjtvQkFDekNqQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2dCLEdBQUc7aURBQ1JDLEtBQUssQ0FBQ0QsR0FBRyxFQUNYRSxJQUFJLENBQUMsUUFBUSxDQUFQQyxRQUFRO3dCQUFLQSxNQUFNLENBQU5BLFFBQVEsQ0FBQ0MsSUFBSTt1QkFDaENGLElBQUksQ0FBQyxRQUFRLENBQVBHLElBQUk7d0JBQUt0QixNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUIsSUFBSTt1QkFDL0JDLEtBQUssQ0FBRSxRQUFRLENBQVBDLEtBQUs7d0JBQUt4QixNQUFNLENBQU5BLE9BQU8sQ0FBQ3dCLEtBQUssQ0FBQ0EsS0FBSzs7Ozs7OztJQUM5QyxDQUFDO1dBUmN6QixXQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0b3IvQXV0b3IuanM/MDc5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJY29uLCBNZW51LCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IEJBU0VfUEFUSCBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0b3IoKSB7XG5cbiAgICBjb25zdCBhdXRvcmVzID0gZ2V0QXV0b3JlcygpO1xuXG4gICAgY29uc29sZS5sb2coXCJhdXRvcmVzOiBcIiArIGF1dG9yZXMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkF1dG9yZXM8L2gxPlxuICAgICAgICAgICAgPFRhYmxlIGNlbGxlZD5cbiAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPk5vbWJyZTwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+TmFjaW9uYWxpZGFkPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Cb2R5PlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBjb2xTcGFuPSczJz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmxvYXRlZD0ncmlnaHQnIHBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2hldnJvbiBsZWZ0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz4xPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz4yPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz4zPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz40PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2hldnJvbiByaWdodCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRBdXRvcmVzKCkge1xuXG4gICAgY29uc3QgdXJsID0gYCRodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0b3JgO1xuICAgIGNvbnNvbGUubG9nKHVybClcbiAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgICAgICAuY2F0Y2ggKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSWNvbiIsIk1lbnUiLCJUYWJsZSIsIkJBU0VfUEFUSCIsIkF1dG9yIiwiYXV0b3JlcyIsImdldEF1dG9yZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJjZWxsZWQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIkZvb3RlciIsImNvbFNwYW4iLCJmbG9hdGVkIiwicGFnaW5hdGlvbiIsIkl0ZW0iLCJhcyIsImljb24iLCJuYW1lIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Autor/Autor.js\n");

/***/ })

});