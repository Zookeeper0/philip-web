"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./src/components/molecules/PostListBox/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/molecules/PostListBox/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostListBox\": function() { return /* binding */ PostListBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _lib_hooks_useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/hooks/useObserver */ \"./src/lib/hooks/useObserver.ts\");\n/* harmony import */ var _data_dummy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/dummy */ \"./src/data/dummy.ts\");\n/* harmony import */ var _postListBox_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postListBox.style */ \"./src/components/molecules/PostListBox/postListBox.style.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostListBox = ()=>{\n    _s();\n    const posts = _data_dummy__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Post;\n    const OFFSET = 4;\n    const { data , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage , status  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery)(\"getAllPostList\", (param)=>{\n        let { pageParam =0  } = param;\n        return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://jsonplaceholder.typicode.com/photos\", {\n            params: {\n                limit: OFFSET,\n                offset: pageParam\n            }\n        });\n    }, {\n        getNextPageParam: (lastPage)=>{\n            const { nextOffset , hasMore  } = lastPage === null || lastPage === void 0 ? void 0 : lastPage.data;\n            if (!hasMore) return false;\n            else {\n                return Number(nextOffset);\n            }\n        }\n    });\n    const changeBtnText = (hasMore)=>{\n        return hasMore ? \"불러오는 중...\" : \"\";\n    };\n    const loadMore = ()=>{\n        if (hasNextPage) {\n            fetchNextPage();\n        }\n    };\n    const onIntersect = (param)=>{\n        let [{ inIntersection  }] = param;\n        fetchNextPage();\n    };\n    const { setTarget  } = (0,_lib_hooks_useObserver__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        onIntersect\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_postListBox_style__WEBPACK_IMPORTED_MODULE_4__.PostListBox, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_postListBox_style__WEBPACK_IMPORTED_MODULE_4__.PostCountSpan, {\n                    children: [\n                        \"검색결과 총 \",\n                        _data_dummy__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Post.length,\n                        \"건\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aeromuisoar/Desktop/insys_src/philip/src/components/molecules/PostListBox/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                status === \"loading\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"로딩중\"\n                }, void 0, false, {\n                    fileName: \"/Users/aeromuisoar/Desktop/insys_src/philip/src/components/molecules/PostListBox/index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 34\n                }, undefined),\n                status === \"error\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"불러오기 실패\"\n                }, void 0, false, {\n                    fileName: \"/Users/aeromuisoar/Desktop/insys_src/philip/src/components/molecules/PostListBox/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 32\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_postListBox_style__WEBPACK_IMPORTED_MODULE_4__.PostList, {}, void 0, false, {\n                    fileName: \"/Users/aeromuisoar/Desktop/insys_src/philip/src/components/molecules/PostListBox/index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/aeromuisoar/Desktop/insys_src/philip/src/components/molecules/PostListBox/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(PostListBox, \"3hRlNu0DeoTIX3KAZlZZGrR0AaU=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery,\n        _lib_hooks_useObserver__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = PostListBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostListBox);\nvar _c;\n$RefreshReg$(_c, \"PostListBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUG9zdExpc3RCb3gvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDcUI7QUFFZTtBQUM5QjtBQUNTO0FBRWxDLE1BQU1LLGNBQWMsSUFBTTs7SUFDL0IsTUFBTUMsUUFBUUgsd0RBQVM7SUFDdkIsTUFBTUssU0FBUztJQUNmLE1BQU0sRUFDSkMsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLGNBQWEsRUFDYkMsWUFBVyxFQUNYQyxXQUFVLEVBQ1ZDLG1CQUFrQixFQUNsQkMsT0FBTSxFQUNQLEdBQUdkLDZEQUFnQkEsQ0FDbEIsa0JBQ0EsU0FDRUQ7WUFERCxFQUFFZ0IsV0FBWSxFQUFDLEVBQUU7ZUFDaEJoQixpREFBUyxDQUFFLCtDQUE4QztZQUN2RGtCLFFBQVE7Z0JBQ05DLE9BQU9YO2dCQUNQWSxRQUFRSjtZQUNWO1FBQ0Y7SUFBQyxHQUNIO1FBQ0VLLGtCQUFrQixDQUFDQyxXQUFhO1lBQzlCLE1BQU0sRUFBRUMsV0FBVSxFQUFFQyxRQUFPLEVBQUUsR0FBR0YscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVYixJQUFJO1lBQzlDLElBQUksQ0FBQ2UsU0FBUyxPQUFPLEtBQUs7aUJBQ3JCO2dCQUNILE9BQU9DLE9BQU9GO1lBQ2hCLENBQUM7UUFDSDtJQUNGO0lBR0YsTUFBTUcsZ0JBQWdCLENBQUNGLFVBQXFCO1FBQzFDLE9BQU9BLFVBQVUsY0FBYyxFQUFFO0lBQ25DO0lBRUEsTUFBTUcsV0FBVyxJQUFNO1FBQ3JCLElBQUlmLGFBQWE7WUFDZkQ7UUFDRixDQUFDO0lBQ0g7SUFFQSxNQUFNaUIsY0FBNEMsU0FFdkM7WUFGd0MsQ0FDakQsRUFBRUMsZUFBYyxFQUFFLENBQ2Q7UUFDSmxCO0lBQ0Y7SUFFQSxNQUFNLEVBQUVtQixVQUFTLEVBQUUsR0FBRzVCLGtFQUF1QkEsQ0FBQztRQUFFMEI7SUFBWTtJQUU1RCxxQkFDRTtrQkFDRSw0RUFBQ3hCLDJEQUFhOzs4QkFDWiw4REFBQ0EsNkRBQWU7O3dCQUFDO3dCQUFRRCwrREFBZ0I7d0JBQUM7Ozs7Ozs7Z0JBQ3pDWSxXQUFXLDJCQUFhLDhEQUFDa0I7OEJBQUk7Ozs7OztnQkFDN0JsQixXQUFXLHlCQUFXLDhEQUFDa0I7OEJBQUk7Ozs7Ozs4QkFDNUIsOERBQUM3Qix3REFBVTs7Ozs7Ozs7Ozs7O0FBWW5CLEVBQUU7R0FuRVdDOztRQVdQSix5REFBZ0JBO1FBb0NFQyw4REFBdUJBOzs7S0EvQ2xDRztBQXFFYiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvUG9zdExpc3RCb3gvaW5kZXgudHN4PzAyYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlSW5maW5pdGVRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzL2F0b21zL1Bvc3RJdGVtXCI7XG5pbXBvcnQgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSBcIkAvbGliL2hvb2tzL3VzZU9ic2VydmVyXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiQC9kYXRhL2R1bW15XCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3Bvc3RMaXN0Qm94LnN0eWxlXCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0TGlzdEJveCA9ICgpID0+IHtcbiAgY29uc3QgcG9zdHMgPSBEYXRhLlBvc3Q7XG4gIGNvbnN0IE9GRlNFVCA9IDQ7XG4gIGNvbnN0IHtcbiAgICBkYXRhLFxuICAgIGVycm9yLFxuICAgIGZldGNoTmV4dFBhZ2UsXG4gICAgaGFzTmV4dFBhZ2UsXG4gICAgaXNGZXRjaGluZyxcbiAgICBpc0ZldGNoaW5nTmV4dFBhZ2UsXG4gICAgc3RhdHVzLFxuICB9ID0gdXNlSW5maW5pdGVRdWVyeShcbiAgICBcImdldEFsbFBvc3RMaXN0XCIsXG4gICAgKHsgcGFnZVBhcmFtID0gMCB9KSA9PlxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zYCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBsaW1pdDogT0ZGU0VULFxuICAgICAgICAgIG9mZnNldDogcGFnZVBhcmFtLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAge1xuICAgICAgZ2V0TmV4dFBhZ2VQYXJhbTogKGxhc3RQYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmV4dE9mZnNldCwgaGFzTW9yZSB9ID0gbGFzdFBhZ2U/LmRhdGE7XG4gICAgICAgIGlmICghaGFzTW9yZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKG5leHRPZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBjaGFuZ2VCdG5UZXh0ID0gKGhhc01vcmU6IGJvb2xlYW4pID0+IHtcbiAgICByZXR1cm4gaGFzTW9yZSA/IFwi67aI65+s7Jik64qUIOykkS4uLlwiIDogXCJcIjtcbiAgfTtcblxuICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcbiAgICBpZiAoaGFzTmV4dFBhZ2UpIHtcbiAgICAgIGZldGNoTmV4dFBhZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25JbnRlcnNlY3Q6IEludGVyc2VjdGlvbk9ic2VydmVyQ2FsbGJhY2sgPSAoW1xuICAgIHsgaW5JbnRlcnNlY3Rpb24gfSxcbiAgXTogYW55KSA9PiB7XG4gICAgZmV0Y2hOZXh0UGFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IHsgc2V0VGFyZ2V0IH0gPSB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcih7IG9uSW50ZXJzZWN0IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTLlBvc3RMaXN0Qm94PlxuICAgICAgICA8Uy5Qb3N0Q291bnRTcGFuPuqygOyDieqysOqzvCDstJ0ge0RhdGEuUG9zdC5sZW5ndGh96rG0PC9TLlBvc3RDb3VudFNwYW4+XG4gICAgICAgIHtzdGF0dXMgPT09IFwibG9hZGluZ1wiICYmIDxkaXY+66Gc65Sp7KSRPC9kaXY+fVxuICAgICAgICB7c3RhdHVzID09PSBcImVycm9yXCIgJiYgPGRpdj7rtojrn6zsmKTquLAg7Iuk7YyoPC9kaXY+fVxuICAgICAgICA8Uy5Qb3N0TGlzdD5cbiAgICAgICAgICB7Lyoge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiZcbiAgICAgICAgICAgIGRhdGE/LnBhZ2VzWzBdLmRhdGEubWFwKChpdGVtOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UG9zdEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpZHh9IC8+O1xuICAgICAgICAgICAgfSl9ICovfVxuICAgICAgICAgIHsvKiB7cG9zdHMubWFwKChpdGVtOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFBvc3RJdGVtIGl0ZW09e2l0ZW19IGtleT17aWR4fSAvPjtcbiAgICAgICAgICB9KX0gKi99XG4gICAgICAgIDwvUy5Qb3N0TGlzdD5cbiAgICAgIDwvUy5Qb3N0TGlzdEJveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0Qm94O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlSW5maW5pdGVRdWVyeSIsInVzZUludGVyc2VjdGlvbk9ic2VydmVyIiwiRGF0YSIsIlMiLCJQb3N0TGlzdEJveCIsInBvc3RzIiwiUG9zdCIsIk9GRlNFVCIsImRhdGEiLCJlcnJvciIsImZldGNoTmV4dFBhZ2UiLCJoYXNOZXh0UGFnZSIsImlzRmV0Y2hpbmciLCJpc0ZldGNoaW5nTmV4dFBhZ2UiLCJzdGF0dXMiLCJwYWdlUGFyYW0iLCJnZXQiLCJwYXJhbXMiLCJsaW1pdCIsIm9mZnNldCIsImdldE5leHRQYWdlUGFyYW0iLCJsYXN0UGFnZSIsIm5leHRPZmZzZXQiLCJoYXNNb3JlIiwiTnVtYmVyIiwiY2hhbmdlQnRuVGV4dCIsImxvYWRNb3JlIiwib25JbnRlcnNlY3QiLCJpbkludGVyc2VjdGlvbiIsInNldFRhcmdldCIsIlBvc3RDb3VudFNwYW4iLCJsZW5ndGgiLCJkaXYiLCJQb3N0TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/PostListBox/index.tsx\n"));

/***/ })

});