"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/node-domexception";
exports.ids = ["vendor-chunks/node-domexception"];
exports.modules = {

/***/ "(action-browser)/./node_modules/node-domexception/index.js":
/*!*************************************************!*\
  !*** ./node_modules/node-domexception/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ \nif (!globalThis.DOMException) {\n    try {\n        const { MessageChannel } = __webpack_require__(/*! worker_threads */ \"worker_threads\"), port = new MessageChannel().port1, ab = new ArrayBuffer();\n        port.postMessage(ab, [\n            ab,\n            ab\n        ]);\n    } catch (err) {\n        err.constructor.name === \"DOMException\" && (globalThis.DOMException = err.constructor);\n    }\n}\nmodule.exports = globalThis.DOMException;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9ub2RlLWRvbWV4Y2VwdGlvbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7QUFFeEYsSUFBSSxDQUFDQSxXQUFXQyxZQUFZLEVBQUU7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsY0FBYyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLHlDQUNuQ0MsT0FBTyxJQUFJRixpQkFBaUJHLEtBQUssRUFDakNDLEtBQUssSUFBSUM7UUFDVEgsS0FBS0ksV0FBVyxDQUFDRixJQUFJO1lBQUNBO1lBQUlBO1NBQUc7SUFDL0IsRUFBRSxPQUFPRyxLQUFLO1FBQ1pBLElBQUlDLFdBQVcsQ0FBQ0MsSUFBSSxLQUFLLGtCQUN2QlgsQ0FBQUEsV0FBV0MsWUFBWSxHQUFHUSxJQUFJQyxXQUFXO0lBRTdDO0FBQ0Y7QUFFQUUsT0FBT0MsT0FBTyxHQUFHYixXQUFXQyxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtZG9tZXhjZXB0aW9uL2luZGV4LmpzP2FlMGEiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIG5vZGUtZG9tZXhjZXB0aW9uLiBNSVQgTGljZW5zZS4gSmltbXkgV8OkcnRpbmcgPGh0dHBzOi8vamltbXkud2FydGluZy5zZS9vcGVuc291cmNlPiAqL1xuXG5pZiAoIWdsb2JhbFRoaXMuRE9NRXhjZXB0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBNZXNzYWdlQ2hhbm5lbCB9ID0gcmVxdWlyZSgnd29ya2VyX3RocmVhZHMnKSxcbiAgICBwb3J0ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCkucG9ydDEsXG4gICAgYWIgPSBuZXcgQXJyYXlCdWZmZXIoKVxuICAgIHBvcnQucG9zdE1lc3NhZ2UoYWIsIFthYiwgYWJdKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBlcnIuY29uc3RydWN0b3IubmFtZSA9PT0gJ0RPTUV4Y2VwdGlvbicgJiYgKFxuICAgICAgZ2xvYmFsVGhpcy5ET01FeGNlcHRpb24gPSBlcnIuY29uc3RydWN0b3JcbiAgICApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvblxuIl0sIm5hbWVzIjpbImdsb2JhbFRoaXMiLCJET01FeGNlcHRpb24iLCJNZXNzYWdlQ2hhbm5lbCIsInJlcXVpcmUiLCJwb3J0IiwicG9ydDEiLCJhYiIsIkFycmF5QnVmZmVyIiwicG9zdE1lc3NhZ2UiLCJlcnIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/node-domexception/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/node-domexception/index.js":
/*!*************************************************!*\
  !*** ./node_modules/node-domexception/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ \nif (!globalThis.DOMException) {\n    try {\n        const { MessageChannel } = __webpack_require__(/*! worker_threads */ \"worker_threads\"), port = new MessageChannel().port1, ab = new ArrayBuffer();\n        port.postMessage(ab, [\n            ab,\n            ab\n        ]);\n    } catch (err) {\n        err.constructor.name === \"DOMException\" && (globalThis.DOMException = err.constructor);\n    }\n}\nmodule.exports = globalThis.DOMException;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbm9kZS1kb21leGNlcHRpb24vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGO0FBRXhGLElBQUksQ0FBQ0EsV0FBV0MsWUFBWSxFQUFFO0lBQzVCLElBQUk7UUFDRixNQUFNLEVBQUVDLGNBQWMsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyx5Q0FDbkNDLE9BQU8sSUFBSUYsaUJBQWlCRyxLQUFLLEVBQ2pDQyxLQUFLLElBQUlDO1FBQ1RILEtBQUtJLFdBQVcsQ0FBQ0YsSUFBSTtZQUFDQTtZQUFJQTtTQUFHO0lBQy9CLEVBQUUsT0FBT0csS0FBSztRQUNaQSxJQUFJQyxXQUFXLENBQUNDLElBQUksS0FBSyxrQkFDdkJYLENBQUFBLFdBQVdDLFlBQVksR0FBR1EsSUFBSUMsV0FBVztJQUU3QztBQUNGO0FBRUFFLE9BQU9DLE9BQU8sR0FBR2IsV0FBV0MsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub2RlLWRvbWV4Y2VwdGlvbi9pbmRleC5qcz9hZTBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBub2RlLWRvbWV4Y2VwdGlvbi4gTUlUIExpY2Vuc2UuIEppbW15IFfDpHJ0aW5nIDxodHRwczovL2ppbW15LndhcnRpbmcuc2Uvb3BlbnNvdXJjZT4gKi9cblxuaWYgKCFnbG9iYWxUaGlzLkRPTUV4Y2VwdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHsgTWVzc2FnZUNoYW5uZWwgfSA9IHJlcXVpcmUoJ3dvcmtlcl90aHJlYWRzJyksXG4gICAgcG9ydCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpLnBvcnQxLFxuICAgIGFiID0gbmV3IEFycmF5QnVmZmVyKClcbiAgICBwb3J0LnBvc3RNZXNzYWdlKGFiLCBbYWIsIGFiXSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdET01FeGNlcHRpb24nICYmIChcbiAgICAgIGdsb2JhbFRoaXMuRE9NRXhjZXB0aW9uID0gZXJyLmNvbnN0cnVjdG9yXG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5ET01FeGNlcHRpb25cbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiRE9NRXhjZXB0aW9uIiwiTWVzc2FnZUNoYW5uZWwiLCJyZXF1aXJlIiwicG9ydCIsInBvcnQxIiwiYWIiLCJBcnJheUJ1ZmZlciIsInBvc3RNZXNzYWdlIiwiZXJyIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/node-domexception/index.js\n");

/***/ })

};
;