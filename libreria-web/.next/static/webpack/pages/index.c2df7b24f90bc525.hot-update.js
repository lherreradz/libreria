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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Autor; }\n/* harmony export */ });\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Autor() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), autores = ref[0], setAutores = ref[1];\n    var url = \"$http://localhost:3001/autor\";\n    var fetchAutores = function() {\n        var _ref = _asyncToGenerator(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(url);\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        setAutores(data);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchAutores() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(\"autores: \" + autores);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Autores\"\n            }, void 0, false, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                celled: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    children: \"Nacionalidad\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Body, {\n                        children: autores.map(function(autor) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {\n                                            children: autor.nombre\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell, {\n                                            children: autor.nacionalidad\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, _this)\n                            }, autor.id, false, {\n                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                colSpan: \"3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                    floated: \"right\",\n                                    pagination: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"chevron left\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"chevron right\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this));\n};\n_s(Autor, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = Autor;\nvar _c;\n$RefreshReg$(_c, \"Autor\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dG9yL0F1dG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNnQjtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLFFBQVEsQ0FBQ00sS0FBSyxHQUFHLENBQUM7OztJQUU3QixHQUFLLENBQXlCTCxHQUFVLEdBQVZBLCtDQUFRLElBQS9CTSxPQUFPLEdBQWdCTixHQUFVLEtBQXhCTyxVQUFVLEdBQUlQLEdBQVU7SUFFeEMsR0FBSyxDQUFDUSxHQUFHLEdBQUksQ0FBNEI7SUFFekMsR0FBSyxDQUFDQyxZQUFZOzROQUFHLFFBQVEsV0FBRSxDQUFDO2dCQUN0QkMsUUFBUSxFQUNSQyxJQUFJOzs7OzsrQkFEYUMsS0FBSyxDQUFDSixHQUFHOzt3QkFBMUJFLFFBQVE7OytCQUNLQSxRQUFRLENBQUNHLElBQUk7O3dCQUExQkYsSUFBSTt3QkFDVkosVUFBVSxDQUFDSSxJQUFJOzs7Ozs7UUFDbkIsQ0FBQzt3QkFKS0YsWUFBWTs7OztJQU1sQkssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxhQUFHVCxPQUFPO0lBRWpDLE1BQU0sNkVBQ0RVLENBQUc7O3dGQUNDQyxDQUFFOzBCQUFDLENBQU87Ozs7Ozt3RkFDVmQsb0RBQUs7Z0JBQUNlLE1BQU07O2dHQUNSZiwyREFBWTs4R0FDWkEsd0RBQVM7OzRHQUNMQSwrREFBZ0I7OENBQUMsQ0FBTTs7Ozs7OzRHQUN2QkEsK0RBQWdCOzhDQUFDLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUlqQ0EseURBQVU7a0NBQ1ZHLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxLQUFLLEVBQUksQ0FBQzs0QkFDbkIsTUFBTSw2RUFDRFIsQ0FBRztzSEFDQ2Isd0RBQVM7O29IQUNUQSx5REFBVTtzREFBRXFCLEtBQUssQ0FBQ0UsTUFBTTs7Ozs7O29IQUN4QnZCLHlEQUFVO3NEQUFFcUIsS0FBSyxDQUFDRyxZQUFZOzs7Ozs7Ozs7Ozs7K0JBSHpCSCxLQUFLLENBQUNJLEVBQUU7Ozs7O3dCQU8xQixDQUFDOzs7Ozs7Z0dBS0F6QiwyREFBWTs4R0FDWkEsd0RBQVM7a0hBQ0xBLCtEQUFnQjtnQ0FBQzJCLE9BQU8sRUFBQyxDQUFHO3NIQUM1QjVCLG1EQUFJO29DQUFDNkIsT0FBTyxFQUFDLENBQU87b0NBQUNDLFVBQVU7O29IQUMzQjlCLHdEQUFTOzRDQUFDZ0MsRUFBRSxFQUFDLENBQUc7NENBQUNDLElBQUk7a0lBQ3JCbEMsbURBQUk7Z0RBQUNtQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7b0hBRXhCbEMsd0RBQVM7NENBQUNnQyxFQUFFLEVBQUMsQ0FBRztzREFBQyxDQUFDOzs7Ozs7b0hBQ2xCaEMsd0RBQVM7NENBQUNnQyxFQUFFLEVBQUMsQ0FBRztzREFBQyxDQUFDOzs7Ozs7b0hBQ2xCaEMsd0RBQVM7NENBQUNnQyxFQUFFLEVBQUMsQ0FBRztzREFBQyxDQUFDOzs7Ozs7b0hBQ2xCaEMsd0RBQVM7NENBQUNnQyxFQUFFLEVBQUMsQ0FBRztzREFBQyxDQUFDOzs7Ozs7b0hBQ2xCaEMsd0RBQVM7NENBQUNnQyxFQUFFLEVBQUMsQ0FBRzs0Q0FBQ0MsSUFBSTtrSUFDckJsQyxtREFBSTtnREFBQ21DLElBQUksRUFBQyxDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNsRCxDQUFDO0dBN0R1Qi9CLEtBQUs7S0FBTEEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dG9yL0F1dG9yLmpzPzA3OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbiwgTWVudSwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBCQVNFX1BBVEggZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dG9yKCkge1xuXG4gICAgY29uc3QgW2F1dG9yZXMsIHNldEF1dG9yZXNdID0gdXNlU3RhdGUoKVxuICAgIFxuICAgIGNvbnN0IHVybCA9IGAkaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dG9yYDtcblxuICAgIGNvbnN0IGZldGNoQXV0b3JlcyA9IGFzeW5jKCkgPT57XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIHNldEF1dG9yZXMoZGF0YSlcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImF1dG9yZXM6IFwiICsgYXV0b3JlcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+QXV0b3JlczwvaDE+XG4gICAgICAgICAgICA8VGFibGUgY2VsbGVkPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+Tm9tYnJlPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5OYWNpb25hbGlkYWQ8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICB7YXV0b3Jlcy5tYXAoYXV0b3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXV0b3IuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2F1dG9yLm5vbWJyZX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2F1dG9yLm5hY2lvbmFsaWRhZH08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvVGFibGUuQm9keT5cblxuXG4gICAgICAgICAgICAgICAgPFRhYmxlLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBjb2xTcGFuPSczJz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgZmxvYXRlZD0ncmlnaHQnIHBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2hldnJvbiBsZWZ0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz4xPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz4yPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz4zPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz40PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2hldnJvbiByaWdodCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkljb24iLCJNZW51IiwiVGFibGUiLCJCQVNFX1BBVEgiLCJBdXRvciIsImF1dG9yZXMiLCJzZXRBdXRvcmVzIiwidXJsIiwiZmV0Y2hBdXRvcmVzIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiY2VsbGVkIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXAiLCJhdXRvciIsIkNlbGwiLCJub21icmUiLCJuYWNpb25hbGlkYWQiLCJpZCIsIkZvb3RlciIsImNvbFNwYW4iLCJmbG9hdGVkIiwicGFnaW5hdGlvbiIsIkl0ZW0iLCJhcyIsImljb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Autor/Autor.js\n");

/***/ })

});