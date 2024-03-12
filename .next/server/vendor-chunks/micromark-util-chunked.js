"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-chunked";
exports.ids = ["vendor-chunks/micromark-util-chunked"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-chunked/dev/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-chunked/dev/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   push: () => (/* binding */ push),\n/* harmony export */   splice: () => (/* binding */ splice)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"(ssr)/./node_modules/micromark-util-symbol/constants.js\");\n\n/**\n * Like `Array#splice`, but smarter for giant arrays.\n *\n * `Array#splice` takes all items to be inserted as individual argument which\n * causes a stack overflow in V8 when trying to insert 100k items for instance.\n *\n * Otherwise, this does not return the removed items, and takes `items` as an\n * array instead of rest parameters.\n *\n * @template {unknown} T\n *   Item type.\n * @param {Array<T>} list\n *   List to operate on.\n * @param {number} start\n *   Index to remove/insert at (can be negative).\n * @param {number} remove\n *   Number of items to remove.\n * @param {Array<T>} items\n *   Items to inject into `list`.\n * @returns {void}\n *   Nothing.\n */ function splice(list, start, remove, items) {\n    const end = list.length;\n    let chunkStart = 0;\n    /** @type {Array<unknown>} */ let parameters;\n    // Make start between zero and `end` (included).\n    if (start < 0) {\n        start = -start > end ? 0 : end + start;\n    } else {\n        start = start > end ? end : start;\n    }\n    remove = remove > 0 ? remove : 0;\n    // No need to chunk the items if there’s only a couple (10k) items.\n    if (items.length < micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize) {\n        parameters = Array.from(items);\n        parameters.unshift(start, remove);\n        // @ts-expect-error Hush, it’s fine.\n        list.splice(...parameters);\n    } else {\n        // Delete `remove` items starting from `start`\n        if (remove) list.splice(start, remove);\n        // Insert the items in chunks to not cause stack overflows.\n        while(chunkStart < items.length){\n            parameters = items.slice(chunkStart, chunkStart + micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize);\n            parameters.unshift(start, 0);\n            // @ts-expect-error Hush, it’s fine.\n            list.splice(...parameters);\n            chunkStart += micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize;\n            start += micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.v8MaxSafeChunkSize;\n        }\n    }\n}\n/**\n * Append `items` (an array) at the end of `list` (another array).\n * When `list` was empty, returns `items` instead.\n *\n * This prevents a potentially expensive operation when `list` is empty,\n * and adds items in batches to prevent V8 from hanging.\n *\n * @template {unknown} T\n *   Item type.\n * @param {Array<T>} list\n *   List to operate on.\n * @param {Array<T>} items\n *   Items to add to `list`.\n * @returns {Array<T>}\n *   Either `list` or `items`.\n */ function push(list, items) {\n    if (list.length > 0) {\n        splice(list, list.length, 0, items);\n        return list;\n    }\n    return items;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2h1bmtlZC9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTREO0FBRTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQkMsR0FDTSxTQUFTQyxPQUFPQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxLQUFLO0lBQy9DLE1BQU1DLE1BQU1KLEtBQUtLLE1BQU07SUFDdkIsSUFBSUMsYUFBYTtJQUNqQiwyQkFBMkIsR0FDM0IsSUFBSUM7SUFFSixnREFBZ0Q7SUFDaEQsSUFBSU4sUUFBUSxHQUFHO1FBQ2JBLFFBQVEsQ0FBQ0EsUUFBUUcsTUFBTSxJQUFJQSxNQUFNSDtJQUNuQyxPQUFPO1FBQ0xBLFFBQVFBLFFBQVFHLE1BQU1BLE1BQU1IO0lBQzlCO0lBRUFDLFNBQVNBLFNBQVMsSUFBSUEsU0FBUztJQUUvQixtRUFBbUU7SUFDbkUsSUFBSUMsTUFBTUUsTUFBTSxHQUFHUCx5RUFBU0EsQ0FBQ1Usa0JBQWtCLEVBQUU7UUFDL0NELGFBQWFFLE1BQU1DLElBQUksQ0FBQ1A7UUFDeEJJLFdBQVdJLE9BQU8sQ0FBQ1YsT0FBT0M7UUFDMUIsb0NBQW9DO1FBQ3BDRixLQUFLRCxNQUFNLElBQUlRO0lBQ2pCLE9BQU87UUFDTCw4Q0FBOEM7UUFDOUMsSUFBSUwsUUFBUUYsS0FBS0QsTUFBTSxDQUFDRSxPQUFPQztRQUUvQiwyREFBMkQ7UUFDM0QsTUFBT0ksYUFBYUgsTUFBTUUsTUFBTSxDQUFFO1lBQ2hDRSxhQUFhSixNQUFNUyxLQUFLLENBQ3RCTixZQUNBQSxhQUFhUix5RUFBU0EsQ0FBQ1Usa0JBQWtCO1lBRTNDRCxXQUFXSSxPQUFPLENBQUNWLE9BQU87WUFDMUIsb0NBQW9DO1lBQ3BDRCxLQUFLRCxNQUFNLElBQUlRO1lBRWZELGNBQWNSLHlFQUFTQSxDQUFDVSxrQkFBa0I7WUFDMUNQLFNBQVNILHlFQUFTQSxDQUFDVSxrQkFBa0I7UUFDdkM7SUFDRjtBQUNGO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBQ00sU0FBU0ssS0FBS2IsSUFBSSxFQUFFRyxLQUFLO0lBQzlCLElBQUlILEtBQUtLLE1BQU0sR0FBRyxHQUFHO1FBQ25CTixPQUFPQyxNQUFNQSxLQUFLSyxNQUFNLEVBQUUsR0FBR0Y7UUFDN0IsT0FBT0g7SUFDVDtJQUVBLE9BQU9HO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2h1bmtlZC9kZXYvaW5kZXguanM/ODRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbnN0YW50c30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvbnN0YW50cy5qcydcblxuLyoqXG4gKiBMaWtlIGBBcnJheSNzcGxpY2VgLCBidXQgc21hcnRlciBmb3IgZ2lhbnQgYXJyYXlzLlxuICpcbiAqIGBBcnJheSNzcGxpY2VgIHRha2VzIGFsbCBpdGVtcyB0byBiZSBpbnNlcnRlZCBhcyBpbmRpdmlkdWFsIGFyZ3VtZW50IHdoaWNoXG4gKiBjYXVzZXMgYSBzdGFjayBvdmVyZmxvdyBpbiBWOCB3aGVuIHRyeWluZyB0byBpbnNlcnQgMTAwayBpdGVtcyBmb3IgaW5zdGFuY2UuXG4gKlxuICogT3RoZXJ3aXNlLCB0aGlzIGRvZXMgbm90IHJldHVybiB0aGUgcmVtb3ZlZCBpdGVtcywgYW5kIHRha2VzIGBpdGVtc2AgYXMgYW5cbiAqIGFycmF5IGluc3RlYWQgb2YgcmVzdCBwYXJhbWV0ZXJzLlxuICpcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogICBJdGVtIHR5cGUuXG4gKiBAcGFyYW0ge0FycmF5PFQ+fSBsaXN0XG4gKiAgIExpc3QgdG8gb3BlcmF0ZSBvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFxuICogICBJbmRleCB0byByZW1vdmUvaW5zZXJ0IGF0IChjYW4gYmUgbmVnYXRpdmUpLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZVxuICogICBOdW1iZXIgb2YgaXRlbXMgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtBcnJheTxUPn0gaXRlbXNcbiAqICAgSXRlbXMgdG8gaW5qZWN0IGludG8gYGxpc3RgLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UobGlzdCwgc3RhcnQsIHJlbW92ZSwgaXRlbXMpIHtcbiAgY29uc3QgZW5kID0gbGlzdC5sZW5ndGhcbiAgbGV0IGNodW5rU3RhcnQgPSAwXG4gIC8qKiBAdHlwZSB7QXJyYXk8dW5rbm93bj59ICovXG4gIGxldCBwYXJhbWV0ZXJzXG5cbiAgLy8gTWFrZSBzdGFydCBiZXR3ZWVuIHplcm8gYW5kIGBlbmRgIChpbmNsdWRlZCkuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGVuZCA/IDAgOiBlbmQgKyBzdGFydFxuICB9IGVsc2Uge1xuICAgIHN0YXJ0ID0gc3RhcnQgPiBlbmQgPyBlbmQgOiBzdGFydFxuICB9XG5cbiAgcmVtb3ZlID0gcmVtb3ZlID4gMCA/IHJlbW92ZSA6IDBcblxuICAvLyBObyBuZWVkIHRvIGNodW5rIHRoZSBpdGVtcyBpZiB0aGVyZeKAmXMgb25seSBhIGNvdXBsZSAoMTBrKSBpdGVtcy5cbiAgaWYgKGl0ZW1zLmxlbmd0aCA8IGNvbnN0YW50cy52OE1heFNhZmVDaHVua1NpemUpIHtcbiAgICBwYXJhbWV0ZXJzID0gQXJyYXkuZnJvbShpdGVtcylcbiAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoc3RhcnQsIHJlbW92ZSlcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIEh1c2gsIGl04oCZcyBmaW5lLlxuICAgIGxpc3Quc3BsaWNlKC4uLnBhcmFtZXRlcnMpXG4gIH0gZWxzZSB7XG4gICAgLy8gRGVsZXRlIGByZW1vdmVgIGl0ZW1zIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YFxuICAgIGlmIChyZW1vdmUpIGxpc3Quc3BsaWNlKHN0YXJ0LCByZW1vdmUpXG5cbiAgICAvLyBJbnNlcnQgdGhlIGl0ZW1zIGluIGNodW5rcyB0byBub3QgY2F1c2Ugc3RhY2sgb3ZlcmZsb3dzLlxuICAgIHdoaWxlIChjaHVua1N0YXJ0IDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICBwYXJhbWV0ZXJzID0gaXRlbXMuc2xpY2UoXG4gICAgICAgIGNodW5rU3RhcnQsXG4gICAgICAgIGNodW5rU3RhcnQgKyBjb25zdGFudHMudjhNYXhTYWZlQ2h1bmtTaXplXG4gICAgICApXG4gICAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoc3RhcnQsIDApXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIEh1c2gsIGl04oCZcyBmaW5lLlxuICAgICAgbGlzdC5zcGxpY2UoLi4ucGFyYW1ldGVycylcblxuICAgICAgY2h1bmtTdGFydCArPSBjb25zdGFudHMudjhNYXhTYWZlQ2h1bmtTaXplXG4gICAgICBzdGFydCArPSBjb25zdGFudHMudjhNYXhTYWZlQ2h1bmtTaXplXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXBwZW5kIGBpdGVtc2AgKGFuIGFycmF5KSBhdCB0aGUgZW5kIG9mIGBsaXN0YCAoYW5vdGhlciBhcnJheSkuXG4gKiBXaGVuIGBsaXN0YCB3YXMgZW1wdHksIHJldHVybnMgYGl0ZW1zYCBpbnN0ZWFkLlxuICpcbiAqIFRoaXMgcHJldmVudHMgYSBwb3RlbnRpYWxseSBleHBlbnNpdmUgb3BlcmF0aW9uIHdoZW4gYGxpc3RgIGlzIGVtcHR5LFxuICogYW5kIGFkZHMgaXRlbXMgaW4gYmF0Y2hlcyB0byBwcmV2ZW50IFY4IGZyb20gaGFuZ2luZy5cbiAqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqICAgSXRlbSB0eXBlLlxuICogQHBhcmFtIHtBcnJheTxUPn0gbGlzdFxuICogICBMaXN0IHRvIG9wZXJhdGUgb24uXG4gKiBAcGFyYW0ge0FycmF5PFQ+fSBpdGVtc1xuICogICBJdGVtcyB0byBhZGQgdG8gYGxpc3RgLlxuICogQHJldHVybnMge0FycmF5PFQ+fVxuICogICBFaXRoZXIgYGxpc3RgIG9yIGBpdGVtc2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGxpc3QsIGl0ZW1zKSB7XG4gIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICBzcGxpY2UobGlzdCwgbGlzdC5sZW5ndGgsIDAsIGl0ZW1zKVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICByZXR1cm4gaXRlbXNcbn1cbiJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJzcGxpY2UiLCJsaXN0Iiwic3RhcnQiLCJyZW1vdmUiLCJpdGVtcyIsImVuZCIsImxlbmd0aCIsImNodW5rU3RhcnQiLCJwYXJhbWV0ZXJzIiwidjhNYXhTYWZlQ2h1bmtTaXplIiwiQXJyYXkiLCJmcm9tIiwidW5zaGlmdCIsInNsaWNlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-chunked/dev/index.js\n");

/***/ })

};
;