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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9hMGQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/MjhhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('/subscribe');\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        __source: {\n            fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/components/SubscribeButton/index.tsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: this,\n        children: \"Subscribe now\"\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDWjtBQUNjO0FBQ2I7QUFLbEMsU0FBU0ssZUFBZSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxFQUF1QixDQUFDLEVBQUMsQ0FBQztJQUNqRSxLQUFLLENBQUNDLE9BQU8sR0FBR1AsMkRBQVU7bUJBRVhRLGVBQWUsR0FBRyxDQUFDO1FBQ2hDLEVBQUUsR0FBR0QsT0FBTyxFQUFDLENBQUM7WUFDWk4sdURBQU0sQ0FBQyxDQUFRO1lBQ2YsTUFBTTtRQUNSLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ1EsUUFBUSxHQUFHLEtBQUssQ0FBQ1AsbURBQVEsQ0FBQyxDQUFZO1lBRTVDLEtBQUssQ0FBQyxDQUFDLENBQUNTLFNBQVMsRUFBQyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0csSUFBSTtZQUVuQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNWLGdFQUFXO1lBRWhDLEtBQUssQ0FBQ1UsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUFDSCxTQUFTO1lBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsS0FBSyxFQUFFSSxHQUFHLEVBQUUsQ0FBQztZQUNiQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sc0VBQ0hDLENBQU07UUFDTEMsSUFBSSxFQUFDLENBQVE7UUFDYkMsU0FBUyxFQUFFaEIsNEVBQXNCO1FBQ2pDa0IsT0FBTyxFQUFFZCxlQUFlOzs7Ozs7O2tCQUN6QixDQUVEOztBQUVKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4PzkwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgZ2V0U3RyaXBlSnMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHMge1xuICBwcmljZUlkOiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHsgcHJpY2VJZCB9OiBTdWJzY3JpYmVCdXR0b25Qcm9wcyl7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xuICAgIGlmICghc2Vzc2lvbil7XG4gICAgICBzaWduSW4oJ2dpdGh1YicpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zdWJzY3JpYmUnKVxuXG4gICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlSnMoKVxuXG4gICAgICBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZUJ1dHRvbn1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnNjcmliZX1cbiAgICA+IFxuICAgICAgU3Vic2NyaWJlIG5vd1xuICAgIDwvYnV0dG9uPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJzaWduSW4iLCJhcGkiLCJnZXRTdHJpcGVKcyIsInN0eWxlcyIsIlN1YnNjcmliZUJ1dHRvbiIsInByaWNlSWQiLCJzZXNzaW9uIiwiaGFuZGxlU3Vic2NyaWJlIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwiZGF0YSIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzdWJzY3JpYmVCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts?7118\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home | IgNews\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                __source: {\n                    fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        __source: {\n                            fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 7\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 9\n                                },\n                                __self: this,\n                                children: \"👏 Hey, welcome\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                                __source: {\n                                    fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 9\n                                },\n                                __self: this,\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 28\n                                        },\n                                        __self: this,\n                                        children: \"React\"\n                                    }),\n                                    \" world.\"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 9\n                                },\n                                __self: this,\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 46\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 11\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId,\n                                __source: {\n                                    fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 9\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\",\n                        __source: {\n                            fileName: \"/home/thiago/ROCKETSEAT/REACT/ignews/src/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve('price_1K33ZlBzBbMw3a36rATHtfeB');\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat('en-US', {\n            style: 'currency',\n            currency: 'USD'\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRCO0FBQ21DO0FBQ3BCO0FBRUo7QUFReEIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQ0MsQ0FBQUEsT0FBTyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sdUVBQUM7O2lGQUVKTCxrREFBSTs7Ozs7OzsrRkFDQU0sQ0FBSzs7Ozs7Ozs4QkFBQyxDQUFhOzs7a0ZBR3ZCQyxDQUFJO2dCQUFDQyxTQUFTLEVBQUVMLDJFQUF1Qjs7Ozs7Ozs7MEZBQ3JDTyxDQUFPO3dCQUFDRixTQUFTLEVBQUVMLCtEQUFXOzs7Ozs7OztpR0FDNUJTLENBQUk7Ozs7Ozs7MENBQUMsQ0FBYzs7a0dBQ25CQyxDQUFFOzs7Ozs7OztvQ0FBQyxDQUFlO3lHQUFDRCxDQUFJOzs7Ozs7O2tEQUFDLENBQUs7O29DQUFPLENBQU87OztrR0FDM0NFLENBQUM7Ozs7Ozs7O29DQUFDLENBQ2tDO3lHQUFDQyxDQUFFOzs7Ozs7OzswR0FDckNILENBQUk7Ozs7Ozs7OzRDQUFDLENBQUk7NENBQUNQLE9BQU8sQ0FBQ1csTUFBTTs0Q0FBQyxDQUFNOzs7OztpR0FFakNmLHdFQUFlO2dDQUFDZ0IsT0FBTyxFQUFFWixPQUFPLENBQUNZLE9BQU87Ozs7Ozs7Ozs7eUZBRzFDQyxDQUFHO3dCQUFDQyxHQUFHLEVBQUMsQ0FBb0I7d0JBQUNDLEdBQUcsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7QUFJckQsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsY0FBYyxhQUErQixDQUFDO0lBQ3pELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ3BCLG9FQUFzQixDQUFDLENBQWdDO0lBRTNFLEtBQUssQ0FBQ0csT0FBTyxHQUFHLENBQUM7UUFDZlksT0FBTyxFQUFFSyxLQUFLLENBQUNHLEVBQUU7UUFDakJULE1BQU0sRUFBRSxHQUFHLENBQUNVLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQU8sUUFBRSxDQUFDO1lBQ3RDQyxLQUFLLEVBQUUsQ0FBVTtZQUNqQkMsUUFBUSxFQUFFLENBQUs7UUFDakIsQ0FBQyxFQUFFQyxNQUFNLENBQUNSLEtBQUssQ0FBQ1MsV0FBVyxHQUFHLEdBQUc7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ05DLEtBQUssRUFBRSxDQUFDO1lBQ04zQixPQUFPO1FBQ1QsQ0FBQztRQUNENEIsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3Byb2R1Y3R9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgSWdOZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIDxzcGFuPvCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICA8aDE+TmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkLjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgPHNwYW4+Zm9yIHtwcm9kdWN0LmFtb3VudH0gbW9udGg8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9IC8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiR2lybCBjb2RpbmdcIiAvPlxuICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoJ3ByaWNlXzFLMzNabEJ6QmJNdzNhMzZyQVRIdGZlQicpXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuICB9O1xuICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8gPT0+IDI0IGhvdXJzXG4gIH1cbn0iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwicCIsImJyIiwiYW1vdW50IiwicHJpY2VJZCIsImltZyIsInNyYyIsImFsdCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: '/api'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUVsQixLQUFLLENBQUNDLEdBQUcsR0FBR0QsbURBQVksQ0FBQyxDQUFDO0lBQy9CRyxPQUFPLEVBQUUsQ0FBTTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICcvYXBpJ1xufSkiXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51K33KUBzBbMw3a36aQd6haRnrx7U8YH69O9Sc3AEle0vQ9wX8BBtiZyYDCrum9FgQd2AuyKhN3Vi8pUHd4NvQHH100qk7KiDxK\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxlQUFlQyxXQUFXLEdBQUcsQ0FBQztJQUNuQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNGLDZEQUFVLENBQUNHLDZHQUF5QztJQUMzRSxNQUFNLENBQUNELFFBQVE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9zdHJpcGUtanMudHM/NTk4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJpcGVKcygpIHtcbiAgY29uc3Qgc3RyaXBlSnMgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKVxuICByZXR1cm4gc3RyaXBlSnNcbn0iXSwibmFtZXMiOlsibG9hZFN0cmlwZSIsImdldFN0cmlwZUpzIiwic3RyaXBlSnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts?7118":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json?4942\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzPzcxMTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLCtDQUFNLENBQzlCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQixDQUFDO0lBQ0NDLFVBQVUsRUFBRSxDQUFZO0lBQ3hCQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxJQUFJLEVBQUUsQ0FBUTtRQUNkUCxPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxuICB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgIGFwcEluZm86IHtcbiAgICAgIG5hbWU6IFwiSWduZXdzXCIsXG4gICAgICB2ZXJzaW9uXG4gICAgfVxuICB9XG4pXG4iXSwibmFtZXMiOlsiU3RyaXBlIiwidmVyc2lvbiIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts?7118\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "./package.json?4942":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.22.0","axios":"^0.24.0","faunadb":"^4.4.1","next":"12.0.6","next-auth":"^4.0.5","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.3.1","sass":"^1.44.0","stripe":"^8.191.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^16.11.11","@types/react":"^17.0.37","typescript":"^4.5.2"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();