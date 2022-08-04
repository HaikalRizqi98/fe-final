"use strict";
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
exports.id = "pages/auth/verify/[verifytoken]";
exports.ids = ["pages/auth/verify/[verifytoken]"];
exports.modules = {

/***/ "./src/lib/api.js":
/*!************************!*\
  !*** ./src/lib/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axiosInstance\": () => (/* binding */ axiosInstance)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:2000\",\n    headers: {\n        \"x-secret-key\": \"abc\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2FwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDbkIsTUFBTUMsYUFBYSxHQUFHRCxtREFBWSxDQUFDO0lBQ3hDRyxPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDQyxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsS0FBSztLQUN0QjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY29tbWVyY2UvLi9zcmMvbGliL2FwaS5qcz9mY2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjIwMDBcIixcbiAgaGVhZGVyczoge1xuICAgIFwieC1zZWNyZXQta2V5XCI6IFwiYWJjXCIsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImF4aW9zSW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/api.js\n");

/***/ }),

/***/ "./src/pages/auth/verify/[verifytoken].js":
/*!************************************************!*\
  !*** ./src/pages/auth/verify/[verifytoken].js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ verifyAccount)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/api */ \"./src/lib/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction verifyAccount() {\n    const { 0: verified , 1: setVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { verifytoken  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function updateVer() {\n            const res = await _lib_api__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.patch(\"/user/verify/\" + verifytoken);\n            if (res.data) {\n                const success = res.data.success;\n                console.log(success);\n                setVerified(success);\n            }\n        }\n        if (verifytoken) {\n            updateVer();\n        }\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: router.isReady ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n            minH: \"100vh\",\n            align: \"center\",\n            justify: \"center\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"gray.50\", \"gray.800\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                spacing: 4,\n                // w={'full'}\n                maxW: \"2xl\",\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"white\", \"gray.700\"),\n                rounded: \"xl\",\n                boxShadow: \"lg\",\n                p: 6,\n                my: 12,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: verified ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \" \",\n                            \"Your Account Has Been Verified\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                                paddingLeft: 2,\n                                boxSize: 7,\n                                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCheck\n                            }, void 0, false, {\n                                fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/auth/verify/[verifytoken].js\",\n                                lineNumber: 63,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Invalid Token\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                                paddingLeft: 2,\n                                boxSize: 7,\n                                as: react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiError\n                            }, void 0, false, {\n                                fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/auth/verify/[verifytoken].js\",\n                                lineNumber: 68,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/auth/verify/[verifytoken].js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/auth/verify/[verifytoken].js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/auth/verify/[verifytoken].js\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}, void 0, false, {\n            fileName: \"/Users/haikalrizqiramadhan/Documents/project/frontend/next-commerce/src/pages/auth/verify/[verifytoken].js\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC92ZXJpZnkvW3ZlcmlmeXRva2VuXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVzBCO0FBQ2U7QUFDUTtBQUNUO0FBQ0k7QUFDSDtBQUUxQixTQUFTZ0IsYUFBYSxHQUFHO0lBQ3RDLE1BQU0sRUFuQlIsR0FtQlNDLFFBQVEsR0FuQmpCLEdBbUJtQkMsV0FBVyxNQUFJSiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUUvQyxNQUFNSyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFUSxXQUFXLEdBQUUsR0FBR0QsTUFBTSxDQUFDRSxLQUFLO0lBRXBDUixnREFBUyxDQUFDLElBQU07UUFDZCxlQUFlUyxTQUFTLEdBQUc7WUFDekIsTUFBTUMsR0FBRyxHQUFHLE1BQU1aLHlEQUFtQixDQUFDLGVBQWUsR0FBR1MsV0FBVyxDQUFDO1lBQ3BFLElBQUlHLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO2dCQUNaLE1BQU1DLE9BQU8sR0FBR0gsR0FBRyxDQUFDRSxJQUFJLENBQUNDLE9BQU87Z0JBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCUixXQUFXLENBQUNRLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJTixXQUFXLEVBQUU7WUFDZkUsU0FBUyxFQUFFLENBQUM7U0FDYjtLQUNGLEVBQUU7UUFBQ0gsTUFBTSxDQUFDVSxPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRXJCLHFCQUNFO2tCQUNHVixNQUFNLENBQUNVLE9BQU8saUJBQ2IsOERBQUMzQixrREFBSTtZQUNINEIsSUFBSSxFQUFFLE9BQU87WUFDYkMsS0FBSyxFQUFFLFFBQVE7WUFDZkMsT0FBTyxFQUFFLFFBQVE7WUFDakJDLEVBQUUsRUFBRTFCLG1FQUFpQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7c0JBRTVDLDRFQUFDRixtREFBSztnQkFDSjZCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLGFBQWE7Z0JBQ2JDLElBQUksRUFBRSxLQUFLO2dCQUNYRixFQUFFLEVBQUUxQixtRUFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO2dCQUMxQzZCLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxTQUFTLEVBQUUsSUFBSTtnQkFDZkMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0pDLEVBQUUsRUFBRSxFQUFFOzBCQUVOLDRFQUFDcEMscURBQU87b0JBQUNxQyxVQUFVLEVBQUUsR0FBRztvQkFBRUMsUUFBUSxFQUFFO3dCQUFFQyxJQUFJLEVBQUUsS0FBSzt3QkFBRUMsRUFBRSxFQUFFLEtBQUs7cUJBQUU7OEJBQzNEMUIsUUFBUSxpQkFDUDs7NEJBQ0csR0FBRzs0QkFBQyxnQ0FFTDswQ0FBQSw4REFBQ1Qsa0RBQUk7Z0NBQUNvQyxXQUFXLEVBQUUsQ0FBQztnQ0FBRUMsT0FBTyxFQUFFLENBQUM7Z0NBQUVDLEVBQUUsRUFBRXBDLG1EQUFPOzs7OztvQ0FBSTs7b0NBQ2hELGlCQUVIOzs0QkFBRSxlQUVBOzBDQUFBLDhEQUFDRixrREFBSTtnQ0FBQ29DLFdBQVcsRUFBRSxDQUFDO2dDQUFFQyxPQUFPLEVBQUUsQ0FBQztnQ0FBRUMsRUFBRSxFQUFFL0IsbURBQU87Ozs7O29DQUFJOztvQ0FDaEQ7Ozs7O3dCQUVHOzs7OztvQkFDSjs7Ozs7Z0JBQ0gsaUJBRVAsOERBQUNOLHFEQUFPOzs7O2dCQUFXO3FCQUVwQixDQUNIO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNvbW1lcmNlLy4vc3JjL3BhZ2VzL2F1dGgvdmVyaWZ5L1t2ZXJpZnl0b2tlbl0uanM/YjBjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBGbGV4LFxuICBIZWFkaW5nLFxuICBJbnB1dCxcbiAgU3RhY2ssXG4gIFRleHQsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBJY29uLFxuICBTcGlubmVyLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRmFDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJpRXJyb3IgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5QWNjb3VudCgpIHtcbiAgY29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdmVyaWZ5dG9rZW4gfSA9IHJvdXRlci5xdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVZlcigpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucGF0Y2goXCIvdXNlci92ZXJpZnkvXCIgKyB2ZXJpZnl0b2tlbik7XG4gICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJlcy5kYXRhLnN1Y2Nlc3M7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgICBzZXRWZXJpZmllZChzdWNjZXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZlcmlmeXRva2VuKSB7XG4gICAgICB1cGRhdGVWZXIoKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyb3V0ZXIuaXNSZWFkeSA/IChcbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBtaW5IPXtcIjEwMHZoXCJ9XG4gICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XG4gICAgICAgICAganVzdGlmeT17XCJjZW50ZXJcIn1cbiAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjUwXCIsIFwiZ3JheS44MDBcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIHNwYWNpbmc9ezR9XG4gICAgICAgICAgICAvLyB3PXsnZnVsbCd9XG4gICAgICAgICAgICBtYXhXPXtcIjJ4bFwifVxuICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjcwMFwiKX1cbiAgICAgICAgICAgIHJvdW5kZWQ9e1wieGxcIn1cbiAgICAgICAgICAgIGJveFNoYWRvdz17XCJsZ1wifVxuICAgICAgICAgICAgcD17Nn1cbiAgICAgICAgICAgIG15PXsxMn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZyBsaW5lSGVpZ2h0PXsxLjF9IGZvbnRTaXplPXt7IGJhc2U6IFwiMnhsXCIsIG1kOiBcIjN4bFwiIH19PlxuICAgICAgICAgICAgICB7dmVyaWZpZWQgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIFlvdXIgQWNjb3VudCBIYXMgQmVlbiBWZXJpZmllZFxuICAgICAgICAgICAgICAgICAgPEljb24gcGFkZGluZ0xlZnQ9ezJ9IGJveFNpemU9ezd9IGFzPXtGYUNoZWNrfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICBJbnZhbGlkIFRva2VuXG4gICAgICAgICAgICAgICAgICA8SWNvbiBwYWRkaW5nTGVmdD17Mn0gYm94U2l6ZT17N30gYXM9e0JpRXJyb3J9IC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKSA6IChcbiAgICAgICAgPFNwaW5uZXI+PC9TcGlubmVyPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZsZXgiLCJIZWFkaW5nIiwiSW5wdXQiLCJTdGFjayIsIlRleHQiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkljb24iLCJTcGlubmVyIiwiRmFDaGVjayIsImF4aW9zSW5zdGFuY2UiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJpRXJyb3IiLCJ2ZXJpZnlBY2NvdW50IiwidmVyaWZpZWQiLCJzZXRWZXJpZmllZCIsInJvdXRlciIsInZlcmlmeXRva2VuIiwicXVlcnkiLCJ1cGRhdGVWZXIiLCJyZXMiLCJwYXRjaCIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiLCJtaW5IIiwiYWxpZ24iLCJqdXN0aWZ5IiwiYmciLCJzcGFjaW5nIiwibWF4VyIsInJvdW5kZWQiLCJib3hTaGFkb3ciLCJwIiwibXkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJiYXNlIiwibWQiLCJwYWRkaW5nTGVmdCIsImJveFNpemUiLCJhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/auth/verify/[verifytoken].js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/auth/verify/[verifytoken].js"));
module.exports = __webpack_exports__;

})();