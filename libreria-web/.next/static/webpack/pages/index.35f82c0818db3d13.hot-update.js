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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Autor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Autor() {\n    var autores = getAutores();\n    console.log(\"autores: \" + autores);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Autores\"\n            }, void 0, false, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                celled: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {\n                                    children: \"Nacionalidad\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Body, {}, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table.HeaderCell, {\n                                colSpan: \"3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                                    floated: \"right\",\n                                    pagination: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                                                name: \"chevron left\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                                                name: \"chevron right\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n};\n_c = Autor;\nfunction getAutores() {\n    try {\n        var url = \"\".concat(BASE_PATH, \"/autor\");\n        var result = fetch(url);\n        console.log(result.body);\n        return result.body;\n    } catch (error) {\n        return null;\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"Autor\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dG9yL0F1dG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQzRCO0FBQ2xDLFFBQVEsQ0FBQ0ksS0FBSyxHQUFHLENBQUM7SUFFakMsR0FBSyxDQUFDQyxPQUFPLEdBQUdDLFVBQVU7SUFFMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVcsYUFBR0gsT0FBTztJQUVqQyxNQUFNLDZFQUNESSxDQUFHOzt3RkFDQ0MsQ0FBRTswQkFBQyxDQUFPOzs7Ozs7d0ZBQ1ZQLG9EQUFLO2dCQUFDUSxNQUFNOztnR0FDUlIsMkRBQVk7OEdBQ1pBLHdEQUFTOzs0R0FDTEEsK0RBQWdCOzhDQUFDLENBQU07Ozs7Ozs0R0FDdkJBLCtEQUFnQjs4Q0FBQyxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztnR0FJakNBLHlEQUFVOzs7OztnR0FJVkEsMkRBQVk7OEdBQ1pBLHdEQUFTO2tIQUNMQSwrREFBZ0I7Z0NBQUNjLE9BQU8sRUFBQyxDQUFHO3NIQUM1QmYsbURBQUk7b0NBQUNnQixPQUFPLEVBQUMsQ0FBTztvQ0FBQ0MsVUFBVTs7b0hBQzNCakIsd0RBQVM7NENBQUNtQixFQUFFLEVBQUMsQ0FBRzs0Q0FBQ0MsSUFBSTtrSUFDckJyQixtREFBSTtnREFBQ3NCLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7OztvSEFFeEJyQix3REFBUzs0Q0FBQ21CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJuQix3REFBUzs0Q0FBQ21CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJuQix3REFBUzs0Q0FBQ21CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJuQix3REFBUzs0Q0FBQ21CLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJuQix3REFBUzs0Q0FBQ21CLEVBQUUsRUFBQyxDQUFHOzRDQUFDQyxJQUFJO2tJQUNyQnJCLG1EQUFJO2dEQUFDc0IsSUFBSSxFQUFDLENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xELENBQUM7S0ExQzJCbkIsS0FBSztTQTZDeEJFLFVBQVUsR0FBRyxDQUFDO0lBRW5CLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsR0FBSyxDQUFDa0IsR0FBRyxHQUFJLEdBQVksTUFBTSxDQUFoQkMsU0FBUyxFQUFDLENBQU07UUFDL0IsR0FBSyxDQUFDQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0gsR0FBRztRQUN4QmpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa0IsTUFBTSxDQUFDRSxJQUFJO1FBQ3ZCLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDRSxJQUFJO0lBQ3RCLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLElBQUk7SUFDZixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dG9yL0F1dG9yLmpzPzA3OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbiwgTWVudSwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbiAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRvcigpIHtcblxuICAgIGNvbnN0IGF1dG9yZXMgPSBnZXRBdXRvcmVzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImF1dG9yZXM6IFwiICsgYXV0b3JlcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+QXV0b3JlczwvaDE+XG4gICAgICAgICAgICA8VGFibGUgY2VsbGVkPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+Tm9tYnJlPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5OYWNpb25hbGlkYWQ8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L1RhYmxlLkJvZHk+XG5cbiAgICAgICAgICAgICAgICA8VGFibGUuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsIGNvbFNwYW49JzMnPlxuICAgICAgICAgICAgICAgICAgICA8TWVudSBmbG9hdGVkPSdyaWdodCcgcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIGljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdjaGV2cm9uIGxlZnQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPjE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPjI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPjM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPjQ8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIGljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdjaGV2cm9uIHJpZ2h0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgICAgIDwvVGFibGUuRm9vdGVyPlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmZ1bmN0aW9uIGdldEF1dG9yZXMoKSB7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L2F1dG9yYDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmV0Y2godXJsKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmJvZHkpXG4gICAgICAgIHJldHVybiByZXN1bHQuYm9keTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uIiwiTWVudSIsIlRhYmxlIiwiQXV0b3IiLCJhdXRvcmVzIiwiZ2V0QXV0b3JlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImNlbGxlZCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiRm9vdGVyIiwiY29sU3BhbiIsImZsb2F0ZWQiLCJwYWdpbmF0aW9uIiwiSXRlbSIsImFzIiwiaWNvbiIsIm5hbWUiLCJ1cmwiLCJCQVNFX1BBVEgiLCJyZXN1bHQiLCJmZXRjaCIsImJvZHkiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Autor/Autor.js\n");

/***/ })

});