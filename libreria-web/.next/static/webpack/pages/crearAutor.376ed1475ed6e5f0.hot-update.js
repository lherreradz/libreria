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

/***/ "./pages/crearAutor.js":
/*!*****************************!*\
  !*** ./pages/crearAutor.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ crearAutor; }\n/* harmony export */ });\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/BasicLayout/BasicLayout */ \"./layouts/BasicLayout/BasicLayout.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction crearAutor(props) {\n    _s();\n    var showLoginForm = props.showLoginForm;\n    var formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({\n        initialValues: initialValues(),\n        //validationSchema: Yup.object(validationSchema()),\n        onSubmit: function() {\n            var _ref = _asyncToGenerator(_Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {\n                return _Users_luisherrera_Documents_Alejo_Solid_libreria_libreria_web_libreria_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(formData);\n                        case 1:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            /*const response = await crearAutor(formData);\n            if (response?.jwt) {\n                showLoginForm();\n            } else {\n            alert(\"Error al registrar el autor, inténtelo mas tarde\");\n            }*/ }));\n            return function(formData) {\n                return _ref.apply(this, arguments);\n            };\n        }()\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Crear Autor\"\n            }, void 0, false, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/pages/crearAutor.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                className: \"login-form\",\n                onSubmit: formik.handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Input, {\n                        name: \"nombre\",\n                        type: \"text\",\n                        placeholder: \"Nombre\",\n                        onChange: formik.handleChange,\n                        error: formik.errors.nombre\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/pages/crearAutor.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Input, {\n                        name: \"bacionalidad\",\n                        type: \"text\",\n                        placeholder: \"Nacionalidad\",\n                        onChange: formik.handleChange,\n                        error: formik.errors.nacionalidad\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/pages/crearAutor.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        className: \"submit\",\n                        children: \"Crear\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/pages/crearAutor.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/pages/crearAutor.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luisherrera/Documents/Alejo/Solid/libreria/libreria-web/libreria-web/pages/crearAutor.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this));\n};\n_s(crearAutor, \"B/4rI4IXClQ7sG7psKj+pOuRe5Q=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_3__.useFormik\n    ];\n});\nfunction initialValues() {\n    return {\n        nombre: \"\",\n        nacionalidad: \"\"\n    };\n}\nfunction validationSchema() {\n    return {\n        nombre: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(true),\n        nacionalidad: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"La nacionalidad es obligatoria\")\n    };\n}\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhckF1dG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1M7QUFDUjtBQUNzQjtBQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLFFBQVEsQ0FBQ00sVUFBVSxDQUFDQyxLQUFLLEVBQUUsQ0FBQzs7SUFDdkMsR0FBSyxDQUFHQyxhQUFhLEdBQUtELEtBQUssQ0FBdkJDLGFBQWE7SUFFckIsR0FBSyxDQUFDQyxNQUFNLEdBQUdSLGlEQUFTLENBQUMsQ0FBQztRQUN0QlMsYUFBYSxFQUFFQSxhQUFhO1FBQzVCLEVBQW1EO1FBRW5EQyxRQUFRO2dPQUFFLFFBQVEsU0FBREMsUUFBUSxFQUFLLENBQUM7Ozs7NEJBQzNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUTs7Ozs7O1lBQ3BCLEVBS0c7Ozs7O2FBQUEsR0FDUCxDQUFDOzRCQVJnQkEsUUFBUTs7OztJQVM3QixDQUFDO0lBRUQsTUFBTSw2RUFDRFAsd0VBQVc7O3dGQUNQVSxDQUFFOzBCQUFDLENBQVc7Ozs7Ozt3RkFFZFosbURBQUk7Z0JBQUNhLFNBQVMsRUFBQyxDQUFZO2dCQUFDTCxRQUFRLEVBQUVGLE1BQU0sQ0FBQ1EsWUFBWTs7Z0dBQ3pEZCx5REFBVTt3QkFDUGdCLElBQUksRUFBQyxDQUFRO3dCQUNiQyxJQUFJLEVBQUMsQ0FBTTt3QkFDWEMsV0FBVyxFQUFDLENBQVE7d0JBQ3BCQyxRQUFRLEVBQUViLE1BQU0sQ0FBQ2MsWUFBWTt3QkFDN0JDLEtBQUssRUFBRWYsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDQyxNQUFNOzs7Ozs7Z0dBRTlCdkIseURBQVU7d0JBQ1BnQixJQUFJLEVBQUMsQ0FBYzt3QkFDbkJDLElBQUksRUFBQyxDQUFNO3dCQUNYQyxXQUFXLEVBQUMsQ0FBYzt3QkFDMUJDLFFBQVEsRUFBRWIsTUFBTSxDQUFDYyxZQUFZO3dCQUM3QkMsS0FBSyxFQUFFZixNQUFNLENBQUNnQixNQUFNLENBQUNFLFlBQVk7Ozs7OztnR0FHcEN2QixxREFBTTt3QkFBQ2dCLElBQUksRUFBQyxDQUFRO3dCQUFDSixTQUFTLEVBQUMsQ0FBUTtrQ0FBRSxDQUUxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVosQ0FBQztHQTVDdUJWLFVBQVU7O1FBR2ZMLDZDQUFTOzs7U0EyQ25CUyxhQUFhLEdBQUcsQ0FBQztJQUN0QixNQUFNLENBQUMsQ0FBQztRQUNKZ0IsTUFBTSxFQUFFLENBQUU7UUFDVkMsWUFBWSxFQUFFLENBQUU7SUFDcEIsQ0FBQztBQUNMLENBQUM7U0FFUUMsZ0JBQWdCLEdBQUcsQ0FBQztJQUN6QixNQUFNLENBQUMsQ0FBQztRQUNKRixNQUFNLEVBQUV4Qix1Q0FBVSxHQUFHNEIsUUFBUSxDQUFDLElBQUk7UUFDbENILFlBQVksRUFBRXpCLHVDQUFVLEdBQUc0QixRQUFRLENBQUMsQ0FBZ0M7SUFDeEUsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXJBdXRvci5qcz83NGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBCYXNpY0xheW91dCBmcm9tICcuLi9sYXlvdXRzL0Jhc2ljTGF5b3V0L0Jhc2ljTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXJBdXRvcihwcm9wcykge1xuICAgIGNvbnN0IHsgc2hvd0xvZ2luRm9ybSB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgICAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzKCksXG4gICAgICAgIC8vdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh2YWxpZGF0aW9uU2NoZW1hKCkpLFxuXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuICAgICAgICAgICAgLypjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWFyQXV0b3IoZm9ybURhdGEpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5qd3QpIHtcbiAgICAgICAgICAgICAgICBzaG93TG9naW5Gb3JtKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBhbCByZWdpc3RyYXIgZWwgYXV0b3IsIGludMOpbnRlbG8gbWFzIHRhcmRlXCIpO1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QmFzaWNMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+Q3JlYXIgQXV0b3I8L2gxPlxuXG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwibm9tYnJlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGVycm9yPXtmb3JtaWsuZXJyb3JzLm5vbWJyZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYWNpb25hbGlkYWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hY2lvbmFsaWRhZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1pay5lcnJvcnMubmFjaW9uYWxpZGFkfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0XCIgPlxuICAgICAgICAgICAgICAgIENyZWFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9CYXNpY0xheW91dD5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbm9tYnJlOiBcIlwiLFxuICAgICAgICBuYWNpb25hbGlkYWQ6IFwiXCIsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGlvblNjaGVtYSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBub21icmU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCh0cnVlKSxcbiAgICAgICAgbmFjaW9uYWxpZGFkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJMYSBuYWNpb25hbGlkYWQgZXMgb2JsaWdhdG9yaWFcIiksXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUZvcm1payIsIll1cCIsIkZvcm0iLCJCdXR0b24iLCJCYXNpY0xheW91dCIsImNyZWFyQXV0b3IiLCJwcm9wcyIsInNob3dMb2dpbkZvcm0iLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImNsYXNzTmFtZSIsImhhbmRsZVN1Ym1pdCIsIklucHV0IiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3IiLCJlcnJvcnMiLCJub21icmUiLCJuYWNpb25hbGlkYWQiLCJ2YWxpZGF0aW9uU2NoZW1hIiwic3RyaW5nIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/crearAutor.js\n");

/***/ })

});