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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Autor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _api_autor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/autor */ \"./api/autor.js\");\n/* harmony import */ var _context_AutorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AutorContext */ \"./context/AutorContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Autor() {\n    _s();\n    var ref = (0,_context_AutorContext__WEBPACK_IMPORTED_MODULE_3__.useAutores)(), autores = ref.autores, serAutores = ref.serAutores;\n    console.log(autores);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Autores\"\n            }, void 0, false, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                celled: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                    children: \"Nacionalidad\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 17,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Body, {}, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.HeaderCell, {\n                                colSpan: \"3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                    floated: \"right\",\n                                    pagination: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"chevron left\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            children: \"4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                            as: \"a\",\n                                            icon: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                                name: \"chevron right\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 25\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/components/Autor/Autor.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this));\n};\n_s(Autor, \"u/iEmxd4fZ7Qh/R6hmMxhAEnG00=\", false, function() {\n    return [\n        _context_AutorContext__WEBPACK_IMPORTED_MODULE_3__.useAutores\n    ];\n});\n_c = Autor;\nvar _c;\n$RefreshReg$(_c, \"Autor\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dG9yL0F1dG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDNEI7QUFDVDtBQUNXOztBQUVwQyxRQUFRLENBQUNNLEtBQUssR0FBRyxDQUFDOztJQUVqQyxHQUFLLENBQXlCRCxHQUFZLEdBQVpBLGlFQUFVLElBQWpDRSxPQUFPLEdBQWdCRixHQUFZLENBQW5DRSxPQUFPLEVBQUVDLFVBQVUsR0FBSUgsR0FBWSxDQUExQkcsVUFBVTtJQUUxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU87SUFFbkIsTUFBTSw2RUFDREksQ0FBRzs7d0ZBQ0NDLENBQUU7MEJBQUMsQ0FBTzs7Ozs7O3dGQUNWVCxvREFBSztnQkFBQ1UsTUFBTTs7Z0dBQ1JWLDJEQUFZOzhHQUNaQSx3REFBUzs7NEdBQ0xBLCtEQUFnQjs4Q0FBQyxDQUFNOzs7Ozs7NEdBQ3ZCQSwrREFBZ0I7OENBQUMsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBSWpDQSx5REFBVTs7Ozs7Z0dBSVZBLDJEQUFZOzhHQUNaQSx3REFBUztrSEFDTEEsK0RBQWdCO2dDQUFDZ0IsT0FBTyxFQUFDLENBQUc7c0hBQzVCakIsbURBQUk7b0NBQUNrQixPQUFPLEVBQUMsQ0FBTztvQ0FBQ0MsVUFBVTs7b0hBQzNCbkIsd0RBQVM7NENBQUNxQixFQUFFLEVBQUMsQ0FBRzs0Q0FBQ0MsSUFBSTtrSUFDckJ2QixtREFBSTtnREFBQ3dCLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7OztvSEFFeEJ2Qix3REFBUzs0Q0FBQ3FCLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJyQix3REFBUzs0Q0FBQ3FCLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJyQix3REFBUzs0Q0FBQ3FCLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJyQix3REFBUzs0Q0FBQ3FCLEVBQUUsRUFBQyxDQUFHO3NEQUFDLENBQUM7Ozs7OztvSEFDbEJyQix3REFBUzs0Q0FBQ3FCLEVBQUUsRUFBQyxDQUFHOzRDQUFDQyxJQUFJO2tJQUNyQnZCLG1EQUFJO2dEQUFDd0IsSUFBSSxFQUFDLENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xELENBQUM7R0ExQzJCbkIsS0FBSzs7UUFFQ0QsNkRBQVU7OztLQUZoQkMsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dG9yL0F1dG9yLmpzPzA3OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbiwgTWVudSwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IGdldEF1dG9yZXMgfSBmcm9tICcuLi8uLi9hcGkvYXV0b3InXG5pbXBvcnQgeyB1c2VBdXRvcmVzIH0gZnJvbSAnLi4vLi4vY29udGV4dC9BdXRvckNvbnRleHQnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0b3IoKSB7XG5cbiAgICBjb25zdCB7YXV0b3Jlcywgc2VyQXV0b3Jlc30gPSB1c2VBdXRvcmVzKCk7XG5cbiAgICBjb25zb2xlLmxvZyhhdXRvcmVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5BdXRvcmVzPC9oMT5cbiAgICAgICAgICAgIDxUYWJsZSBjZWxsZWQ+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5Ob21icmU8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPk5hY2lvbmFsaWRhZDwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkhlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvVGFibGUuQm9keT5cblxuICAgICAgICAgICAgICAgIDxUYWJsZS5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgY29sU3Bhbj0nMyc+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51IGZsb2F0ZWQ9J3JpZ2h0JyBwYWdpbmF0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2NoZXZyb24gbGVmdCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+MTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+MjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+MzwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+NDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2NoZXZyb24gcmlnaHQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPC9UYWJsZS5Gb290ZXI+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uIiwiTWVudSIsIlRhYmxlIiwiZ2V0QXV0b3JlcyIsInVzZUF1dG9yZXMiLCJBdXRvciIsImF1dG9yZXMiLCJzZXJBdXRvcmVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiY2VsbGVkIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJGb290ZXIiLCJjb2xTcGFuIiwiZmxvYXRlZCIsInBhZ2luYXRpb24iLCJJdGVtIiwiYXMiLCJpY29uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Autor/Autor.js\n");

/***/ })

});