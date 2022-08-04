/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/AuthProvider.jsx":
/*!*****************************************!*\
  !*** ./src/components/AuthProvider.jsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var _redux_reducers_types_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/types/auth */ \"./src/redux/reducers/types/auth.js\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ \"./src/lib/api.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction AuthProvider({ children  }) {\n    const { 0: isAuthChecked , 1: setIsAuthChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function fetch() {\n            // const savedUserData = localStorage.getItem(\"user_data\")\n            const authorization = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"auth_token\");\n            if (authorization) {\n                // const parsedUserData = JSON.parse(savedUserData);\n                const parsedUserData = await _lib_api__WEBPACK_IMPORTED_MODULE_5__.axiosInstance.get(\"/users/refresh-token\", {\n                    headers: {\n                        authorization\n                    }\n                });\n                console.log(parsedUserData);\n                if (parsedUserData) {\n                    dispatch({\n                        type: _redux_reducers_types_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"].AUTH_LOGIN,\n                        payload: parsedUserData.data.result.user\n                    });\n                } else {\n                    dispatch({\n                        type: _redux_reducers_types_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"].AUTH_LOGOUT\n                    });\n                }\n            }\n            setIsAuthChecked(true);\n        }\n        fetch();\n    }, []);\n    if (!isAuthChecked) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/components/AuthProvider.jsx\",\n        lineNumber: 41,\n        columnNumber: 30\n    }, this);\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoUHJvdmlkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ0U7QUFDWDtBQUNxQjtBQUNYO0FBQ2hCO0FBQzNCLFNBQVNPLFlBQVksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUNsQyxNQUFNLEVBUFIsR0FPU0MsYUFBYSxHQVB0QixHQU93QkMsZ0JBQWdCLE1BQUlSLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRXpELE1BQU1TLFFBQVEsR0FBR1gsd0RBQVcsRUFBRTtJQUU5QkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsZUFBZVcsS0FBSyxHQUFHO1lBQ3JCLDBEQUEwRDtZQUMxRCxNQUFNQyxhQUFhLEdBQUdWLHFEQUFZLENBQUMsWUFBWSxDQUFDO1lBQ2hELElBQUlVLGFBQWEsRUFBRTtnQkFDakIsb0RBQW9EO2dCQUNwRCxNQUFNRSxjQUFjLEdBQUcsTUFBTVYsdURBQWlCLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3JFVyxPQUFPLEVBQUU7d0JBQ1BILGFBQWE7cUJBQ2Q7aUJBQ0YsQ0FBQztnQkFFRkksT0FBTyxDQUFDQyxHQUFHLENBQUNILGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJQSxjQUFjLEVBQUU7b0JBQ2xCSixRQUFRLENBQUM7d0JBQ1BRLElBQUksRUFBRWYsNkVBQXFCO3dCQUMzQmlCLE9BQU8sRUFBRU4sY0FBYyxDQUFDTyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSTtxQkFDekMsQ0FBQyxDQUFDO2lCQUNKLE1BQU07b0JBQ0xiLFFBQVEsQ0FBQzt3QkFDUFEsSUFBSSxFQUFFZiw4RUFBc0I7cUJBQzdCLENBQUMsQ0FBQztpQkFDSjthQUNGO1lBQ0RNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO1FBQ0RFLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUksQ0FBQ0gsYUFBYSxFQUFFLHFCQUFPLDhEQUFDaUIsS0FBRztrQkFBQyxZQUFVOzs7OztZQUFNLENBQUM7SUFFakQsT0FBT2xCLFFBQVEsQ0FBQztDQUNqQjtBQUVELGlFQUFlRCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvbW1lcmNlLy4vc3JjL2NvbXBvbmVudHMvQXV0aFByb3ZpZGVyLmpzeD9jNDMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQganNDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IGF1dGhfdHlwZXMgZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL3R5cGVzL2F1dGhcIjtcbmltcG9ydCB7IGF4aW9zSW5zdGFuY2UgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwicXNcIjtcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2lzQXV0aENoZWNrZWQsIHNldElzQXV0aENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoKCkge1xuICAgICAgLy8gY29uc3Qgc2F2ZWRVc2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9kYXRhXCIpXG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uID0ganNDb29raWUuZ2V0KFwiYXV0aF90b2tlblwiKTtcbiAgICAgIGlmIChhdXRob3JpemF0aW9uKSB7XG4gICAgICAgIC8vIGNvbnN0IHBhcnNlZFVzZXJEYXRhID0gSlNPTi5wYXJzZShzYXZlZFVzZXJEYXRhKTtcbiAgICAgICAgY29uc3QgcGFyc2VkVXNlckRhdGEgPSBhd2FpdCBheGlvc0luc3RhbmNlLmdldChcIi91c2Vycy9yZWZyZXNoLXRva2VuXCIsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcnNlZFVzZXJEYXRhKTtcbiAgICAgICAgaWYgKHBhcnNlZFVzZXJEYXRhKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogYXV0aF90eXBlcy5BVVRIX0xPR0lOLFxuICAgICAgICAgICAgcGF5bG9hZDogcGFyc2VkVXNlckRhdGEuZGF0YS5yZXN1bHQudXNlcixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBhdXRoX3R5cGVzLkFVVEhfTE9HT1VULFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRJc0F1dGhDaGVja2VkKHRydWUpO1xuICAgIH1cbiAgICBmZXRjaCgpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFpc0F1dGhDaGVja2VkKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJqc0Nvb2tpZSIsImF1dGhfdHlwZXMiLCJheGlvc0luc3RhbmNlIiwicGFyc2UiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzQXV0aENoZWNrZWQiLCJzZXRJc0F1dGhDaGVja2VkIiwiZGlzcGF0Y2giLCJmZXRjaCIsImF1dGhvcml6YXRpb24iLCJnZXQiLCJwYXJzZWRVc2VyRGF0YSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkFVVEhfTE9HSU4iLCJwYXlsb2FkIiwiZGF0YSIsInJlc3VsdCIsInVzZXIiLCJBVVRIX0xPR09VVCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AuthProvider.jsx\n");

/***/ }),

/***/ "./src/lib/api.js":
/*!************************!*\
  !*** ./src/lib/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axiosInstance\": () => (/* binding */ axiosInstance)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:2000\",\n    headers: {\n        \"x-secret-key\": \"abc\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDbkIsTUFBTUMsYUFBYSxHQUFHRCxtREFBWSxDQUFDO0lBQ3hDRyxPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDQyxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsS0FBSztLQUN0QjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY29tbWVyY2UvLi9zcmMvbGliL2FwaS5qcz9mY2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjIwMDBcIixcbiAgaGVhZGVyczoge1xuICAgIFwieC1zZWNyZXQta2V5XCI6IFwiYWJjXCIsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImF4aW9zSW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/api.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _components_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AuthProvider */ \"./src/components/AuthProvider.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AuthProvider__WEBPACK_IMPORTED_MODULE_6__]);\n_components_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthProvider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDbUI7QUFDWDtBQUNXO0FBQ0w7QUFDVjtBQUNtQjtBQUV0RCxTQUFTTSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ1AsaURBQVE7UUFBQ0csS0FBSyxFQUFFQSxvREFBSztrQkFDcEIsNEVBQUNDLGdFQUFZO3NCQUNYLDRFQUFDTCw0REFBYzs7a0NBQ2IsOERBQUNPLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7b0JBQUEsR0FDOUI7Ozs7OztvQkFBaUI7Ozs7O2dCQUNKOzs7OztZQUNOLENBQ1g7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvbW1lcmNlLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IEF1dGhQcm92aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BdXRoUHJvdmlkZXJcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJjb25maWd1cmVTdG9yZSIsInJvb3RSZWR1Y2VyIiwic3RvcmUiLCJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/redux/reducers/auth.js":
/*!************************************!*\
  !*** ./src/redux/reducers/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/auth */ \"./src/redux/reducers/types/auth.js\");\nconst init_state = {\n    id: \"\",\n    username: \"\",\n    email: \"\",\n    full_name: \"\",\n    bio: \"\",\n    avatar_url: \"\"\n};\n\nfunction auth_reducer(state = init_state, action) {\n    if (action.type === _types_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AUTH_LOGIN) {\n        // payload ditambah avatar url\n        console.log(action.payload);\n        return {\n            ...state,\n            id: action.payload.id,\n            username: action.payload.username,\n            email: action.payload.email,\n            full_name: action.payload.full_name,\n            bio: action.payload.bio,\n            avatar_url: \"http://localhost:2000/users/avatar/\" + action.payload.id\n        };\n    } else if (action.type === _types_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AUTH_LOGOUT) {\n        return init_state;\n    }\n    return state;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth_reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLFVBQVUsR0FBRztJQUNqQkMsRUFBRSxFQUFFLEVBQUU7SUFDTkMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsU0FBUyxFQUFFLEVBQUU7SUFDYkMsR0FBRyxFQUFFLEVBQUU7SUFDUEMsVUFBVSxFQUFFLEVBQUU7Q0FDZjtBQUNxQztBQUN0QyxTQUFTRSxZQUFZLENBQUNDLEtBQUssR0FBR1QsVUFBVSxFQUFFVSxNQUFNLEVBQUU7SUFDaEQsSUFBSUEsTUFBTSxDQUFDQyxJQUFJLEtBQUtKLDhEQUFxQixFQUFFO1FBQ3pDLDhCQUE4QjtRQUM5Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTztZQUNMLEdBQUdOLEtBQUs7WUFDUlIsRUFBRSxFQUFFUyxNQUFNLENBQUNLLE9BQU8sQ0FBQ2QsRUFBRTtZQUNyQkMsUUFBUSxFQUFFUSxNQUFNLENBQUNLLE9BQU8sQ0FBQ2IsUUFBUTtZQUNqQ0MsS0FBSyxFQUFFTyxNQUFNLENBQUNLLE9BQU8sQ0FBQ1osS0FBSztZQUMzQkMsU0FBUyxFQUFFTSxNQUFNLENBQUNLLE9BQU8sQ0FBQ1gsU0FBUztZQUNuQ0MsR0FBRyxFQUFFSyxNQUFNLENBQUNLLE9BQU8sQ0FBQ1YsR0FBRztZQUN2QkMsVUFBVSxFQUFFLHFDQUFxQyxHQUFHSSxNQUFNLENBQUNLLE9BQU8sQ0FBQ2QsRUFBRTtTQUN0RSxDQUFDO0tBQ0gsTUFBTSxJQUFJUyxNQUFNLENBQUNDLElBQUksS0FBS0osK0RBQXNCLEVBQUU7UUFDakQsT0FBT1AsVUFBVSxDQUFDO0tBQ25CO0lBRUQsT0FBT1MsS0FBSyxDQUFDO0NBQ2Q7QUFFRCxpRUFBZUQsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jb21tZXJjZS8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoLmpzP2I3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdF9zdGF0ZSA9IHtcbiAgaWQ6IFwiXCIsXG4gIHVzZXJuYW1lOiBcIlwiLFxuICBlbWFpbDogXCJcIixcbiAgZnVsbF9uYW1lOiBcIlwiLFxuICBiaW86IFwiXCIsXG4gIGF2YXRhcl91cmw6IFwiXCIsIC8vIGRpdGFtYmFoaW4gYXZhdGFyIHVybCBzZXN1YWkgZGF0YWJhc2Vcbn07XG5pbXBvcnQgYXV0aF90eXBlcyBmcm9tIFwiLi90eXBlcy9hdXRoXCI7XG5mdW5jdGlvbiBhdXRoX3JlZHVjZXIoc3RhdGUgPSBpbml0X3N0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSBhdXRoX3R5cGVzLkFVVEhfTE9HSU4pIHtcbiAgICAvLyBwYXlsb2FkIGRpdGFtYmFoIGF2YXRhciB1cmxcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgdXNlcm5hbWU6IGFjdGlvbi5wYXlsb2FkLnVzZXJuYW1lLFxuICAgICAgZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsLFxuICAgICAgZnVsbF9uYW1lOiBhY3Rpb24ucGF5bG9hZC5mdWxsX25hbWUsXG4gICAgICBiaW86IGFjdGlvbi5wYXlsb2FkLmJpbyxcbiAgICAgIGF2YXRhcl91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDoyMDAwL3VzZXJzL2F2YXRhci9cIiArIGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgIH07XG4gIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IGF1dGhfdHlwZXMuQVVUSF9MT0dPVVQpIHtcbiAgICByZXR1cm4gaW5pdF9zdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0aF9yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImluaXRfc3RhdGUiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJmdWxsX25hbWUiLCJiaW8iLCJhdmF0YXJfdXJsIiwiYXV0aF90eXBlcyIsImF1dGhfcmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFVVEhfTE9HSU4iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsIkFVVEhfTE9HT1VUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducers/auth.js\n");

/***/ }),

/***/ "./src/redux/reducers/types/auth.js":
/*!******************************************!*\
  !*** ./src/redux/reducers/types/auth.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth_types = {\n    AUTH_LOGIN: \"AUTH_LOGIN\",\n    AUTH_LOGOUT: \"AUTH_LOGOUT\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth_types);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvdHlwZXMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxHQUFHO0lBQ2pCQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsV0FBVyxFQUFFLGFBQWE7Q0FDM0I7QUFFRCxpRUFBZUYsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jb21tZXJjZS8uL3NyYy9yZWR1eC9yZWR1Y2Vycy90eXBlcy9hdXRoLmpzPzc3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aF90eXBlcyA9IHtcbiAgQVVUSF9MT0dJTjogXCJBVVRIX0xPR0lOXCIsXG4gIEFVVEhfTE9HT1VUOiBcIkFVVEhfTE9HT1VUXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoX3R5cGVzO1xuIl0sIm5hbWVzIjpbImF1dGhfdHlwZXMiLCJBVVRIX0xPR0lOIiwiQVVUSF9MT0dPVVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducers/types/auth.js\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/auth */ \"./src/redux/reducers/auth.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n    reducer: rootReducer,\n    middleware: [\n        (redux_thunk__WEBPACK_IMPORTED_MODULE_3___default())\n    ]\n});\n//middleware ? action => reducer. action => function\n// action => dispatch => mengubah state\n// const store = configureStore({\n//   reducer: rootReducer,\n// });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDUDtBQUNQO0FBQ1g7QUFFaEMsTUFBTUssV0FBVyxHQUFHTCxzREFBZSxDQUFDO0lBQ2xDTSxJQUFJLEVBQUVILHNEQUFZO0NBQ25CLENBQUM7QUFFRixNQUFNSSxLQUFLLEdBQUdMLGdFQUFjLENBQUM7SUFDM0JNLE9BQU8sRUFBRUgsV0FBVztJQUNwQkksVUFBVSxFQUFFO1FBQUNMLG9EQUFLO0tBQUM7Q0FDcEIsQ0FBQztBQUVGLG9EQUFvRDtBQUNwRCx1Q0FBdUM7QUFFdkMsaUNBQWlDO0FBQ2pDLDBCQUEwQjtBQUMxQixNQUFNO0FBRU4saUVBQWVHLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY29tbWVyY2UvLi9zcmMvcmVkdXgvc3RvcmUuanM/ZGQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF1dGhfcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9hdXRoXCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aDogYXV0aF9yZWR1Y2VyLFxufSk7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiByb290UmVkdWNlcixcbiAgbWlkZGxld2FyZTogW3RodW5rXSxcbn0pO1xuXG4vL21pZGRsZXdhcmUgPyBhY3Rpb24gPT4gcmVkdWNlci4gYWN0aW9uID0+IGZ1bmN0aW9uXG4vLyBhY3Rpb24gPT4gZGlzcGF0Y2ggPT4gbWVuZ3ViYWggc3RhdGVcblxuLy8gY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4vLyAgIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsImNvbmZpZ3VyZVN0b3JlIiwiYXV0aF9yZWR1Y2VyIiwidGh1bmsiLCJyb290UmVkdWNlciIsImF1dGgiLCJzdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();