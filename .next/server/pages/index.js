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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');\n            return;\n        }\n        if (session.activeSubscription) {\n            router.push('/posts');\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post('/subscribe');\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n        onClick: handleSubscribe,\n        __source: {\n            fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/components/SubscribeButton/index.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: this,\n        children: \"Subscribe now\"\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNiO0FBQ0M7QUFDYztBQUNiO0FBTWxDLFNBQVNNLGVBQWUsQ0FBQyxDQUFDLENBQUNDLE9BQU8sRUFBdUIsQ0FBQyxFQUFDLENBQUM7SUFDakUsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHUiwyREFBVTtJQUNwQyxLQUFLLENBQUNTLE1BQU0sR0FBR1Isc0RBQVM7bUJBRVRTLGVBQWUsR0FBRyxDQUFDO1FBQ2hDLEVBQUUsR0FBR0YsT0FBTyxFQUFDLENBQUM7WUFDWlQsdURBQU0sQ0FBQyxDQUFRO1lBQ2YsTUFBTTtRQUNSLENBQUM7UUFFRCxFQUFFLEVBQUVTLE9BQU8sQ0FBQ0csa0JBQWtCLEVBQUMsQ0FBQztZQUM5QkYsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBUTtZQUNwQixNQUFNO1FBQ1IsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDWCxtREFBUSxDQUFDLENBQVk7WUFFNUMsS0FBSyxDQUFDLENBQUMsQ0FBQ2EsU0FBUyxFQUFDLENBQUMsR0FBR0YsUUFBUSxDQUFDTixJQUFJO1lBRW5DLEtBQUssQ0FBQ1MsTUFBTSxHQUFHLEtBQUssQ0FBQ2IsZ0VBQVc7WUFFaEMsS0FBSyxDQUFDYSxNQUFNLENBQUNDLGtCQUFrQixDQUFDLENBQUM7Z0JBQUNGLFNBQVM7WUFBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxLQUFLLEVBQUVHLEdBQUcsRUFBRSxDQUFDO1lBQ2JDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFPO1FBQ25CLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxzRUFDSEMsQ0FBTTtRQUNMQyxJQUFJLEVBQUMsQ0FBUTtRQUNiQyxTQUFTLEVBQUVuQiw0RUFBc0I7UUFDakNxQixPQUFPLEVBQUVmLGVBQWU7Ozs7Ozs7a0JBQ3pCLENBRUQ7O0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/OTBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyBnZXRTdHJpcGVKcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHJpcGUtanNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBTdWJzY3JpYmVCdXR0b25Qcm9wcyB7XG4gIHByaWNlSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbih7IHByaWNlSWQgfTogU3Vic2NyaWJlQnV0dG9uUHJvcHMpe1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJzY3JpYmUoKSB7XG4gICAgaWYgKCFzZXNzaW9uKXtcbiAgICAgIHNpZ25JbignZ2l0aHViJylcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2Vzc2lvbi5hY3RpdmVTdWJzY3JpcHRpb24pe1xuICAgICAgcm91dGVyLnB1c2goJy9wb3N0cycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc3Vic2NyaWJlJylcblxuICAgICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZUpzKClcblxuICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZCB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgICBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9XG4gICAgPiBcbiAgICAgIFN1YnNjcmliZSBub3dcbiAgICA8L2J1dHRvbj5cbiAgKVxufSJdLCJuYW1lcyI6WyJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiYXBpIiwiZ2V0U3RyaXBlSnMiLCJzdHlsZXMiLCJTdWJzY3JpYmVCdXR0b24iLCJwcmljZUlkIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJoYW5kbGVTdWJzY3JpYmUiLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJwdXNoIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwic3RyaXBlIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInN1YnNjcmliZUJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Home | IgNews\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                __source: {\n                    fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        __source: {\n                            fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 7\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 9\n                                },\n                                __self: this,\n                                children: \"👏 Hey, welcome\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                                __source: {\n                                    fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 9\n                                },\n                                __self: this,\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 28\n                                        },\n                                        __self: this,\n                                        children: \"React\"\n                                    }),\n                                    \" world.\"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                __source: {\n                                    fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 9\n                                },\n                                __self: this,\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                        __source: {\n                                            fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 46\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        __source: {\n                                            fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 11\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId,\n                                __source: {\n                                    fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 9\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\",\n                        __source: {\n                            fileName: \"/home/mercatorio/Estudo/IGNTE-DESAFIOS/Ignite-IgNews/src/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve('price_1K33ZlBzBbMw3a36rATHtfeB');\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat('en-US', {\n            style: 'currency',\n            currency: 'USD'\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzRCO0FBQ21DO0FBQ3BCO0FBRUo7QUFReEIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQ0MsQ0FBQUEsT0FBTyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sdUVBQUM7O2lGQUVKTCxrREFBSTs7Ozs7OzsrRkFDQU0sQ0FBSzs7Ozs7Ozs4QkFBQyxDQUFhOzs7a0ZBR3ZCQyxDQUFJO2dCQUFDQyxTQUFTLEVBQUVMLDJFQUF1Qjs7Ozs7Ozs7MEZBQ3JDTyxDQUFPO3dCQUFDRixTQUFTLEVBQUVMLCtEQUFXOzs7Ozs7OztpR0FDNUJTLENBQUk7Ozs7Ozs7MENBQUMsQ0FBYzs7a0dBQ25CQyxDQUFFOzs7Ozs7OztvQ0FBQyxDQUFlO3lHQUFDRCxDQUFJOzs7Ozs7O2tEQUFDLENBQUs7O29DQUFPLENBQU87OztrR0FDM0NFLENBQUM7Ozs7Ozs7O29DQUFDLENBQ2tDO3lHQUFDQyxDQUFFOzs7Ozs7OzswR0FDckNILENBQUk7Ozs7Ozs7OzRDQUFDLENBQUk7NENBQUNQLE9BQU8sQ0FBQ1csTUFBTTs0Q0FBQyxDQUFNOzs7OztpR0FFakNmLHdFQUFlO2dDQUFDZ0IsT0FBTyxFQUFFWixPQUFPLENBQUNZLE9BQU87Ozs7Ozs7Ozs7eUZBRzFDQyxDQUFHO3dCQUFDQyxHQUFHLEVBQUMsQ0FBb0I7d0JBQUNDLEdBQUcsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7QUFJckQsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsY0FBYyxhQUErQixDQUFDO0lBQ3pELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ3BCLG9FQUFzQixDQUFDLENBQWdDO0lBRTNFLEtBQUssQ0FBQ0csT0FBTyxHQUFHLENBQUM7UUFDZlksT0FBTyxFQUFFSyxLQUFLLENBQUNHLEVBQUU7UUFDakJULE1BQU0sRUFBRSxHQUFHLENBQUNVLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQU8sUUFBRSxDQUFDO1lBQ3RDQyxLQUFLLEVBQUUsQ0FBVTtZQUNqQkMsUUFBUSxFQUFFLENBQUs7UUFDakIsQ0FBQyxFQUFFQyxNQUFNLENBQUNSLEtBQUssQ0FBQ1MsV0FBVyxHQUFHLEdBQUc7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ05DLEtBQUssRUFBRSxDQUFDO1lBQ04zQixPQUFPO1FBQ1QsQ0FBQztRQUNENEIsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe3Byb2R1Y3R9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgSWdOZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgIDxzcGFuPvCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICA8aDE+TmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkLjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgPHNwYW4+Zm9yIHtwcm9kdWN0LmFtb3VudH0gbW9udGg8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9IC8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiR2lybCBjb2RpbmdcIiAvPlxuICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoJ3ByaWNlXzFLMzNabEJ6QmJNdzNhMzZyQVRIdGZlQicpXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuICB9O1xuICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8gPT0+IDI0IGhvdXJzXG4gIH1cbn0iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwicCIsImJyIiwiYW1vdW50IiwicHJpY2VJZCIsImltZyIsInNyYyIsImFsdCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

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

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst version = process.env.npm_package_version;\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: \"Ignews\",\n        version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUMzQixLQUFLLENBQUNDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG1CQUFtQjtBQUV4QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNMLCtDQUFNLENBQzlCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csY0FBYyxFQUMxQixDQUFDO0lBQ0NDLFVBQVUsRUFBRSxDQUFZO0lBQ3hCQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxJQUFJLEVBQUUsQ0FBUTtRQUNkUixPQUFPO0lBQ1QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXG5jb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYubnBtX3BhY2thZ2VfdmVyc2lvbjtcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxuICB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgIGFwcEluZm86IHtcbiAgICAgIG5hbWU6IFwiSWduZXdzXCIsXG4gICAgICB2ZXJzaW9uXG4gICAgfVxuICB9XG4pXG4iXSwibmFtZXMiOlsiU3RyaXBlIiwidmVyc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJucG1fcGFja2FnZV92ZXJzaW9uIiwic3RyaXBlIiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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