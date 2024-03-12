"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm";
exports.ids = ["vendor-chunks/mdast-util-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mdast-util-gfm/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmFromMarkdown: () => (/* binding */ gfmFromMarkdown),\n/* harmony export */   gfmToMarkdown: () => (/* binding */ gfmToMarkdown)\n/* harmony export */ });\n/* harmony import */ var mdast_util_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-gfm-autolink-literal */ \"(ssr)/./node_modules/mdast-util-gfm-autolink-literal/lib/index.js\");\n/* harmony import */ var mdast_util_gfm_footnote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-gfm-footnote */ \"(ssr)/./node_modules/mdast-util-gfm-footnote/lib/index.js\");\n/* harmony import */ var mdast_util_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdast-util-gfm-strikethrough */ \"(ssr)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js\");\n/* harmony import */ var mdast_util_gfm_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdast-util-gfm-table */ \"(ssr)/./node_modules/mdast-util-gfm-table/lib/index.js\");\n/* harmony import */ var mdast_util_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdast-util-gfm-task-list-item */ \"(ssr)/./node_modules/mdast-util-gfm-task-list-item/lib/index.js\");\n/**\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n */ /**\n * @typedef {import('mdast-util-gfm-table').Options} Options\n *   Configuration.\n */ \n\n\n\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM (autolink\n * literals, footnotes, strikethrough, tables, tasklists).\n *\n * @returns {Array<FromMarkdownExtension>}\n *   Extension for `mdast-util-from-markdown` to enable GFM (autolink literals,\n *   footnotes, strikethrough, tables, tasklists).\n */ function gfmFromMarkdown() {\n    return [\n        mdast_util_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_0__.gfmAutolinkLiteralFromMarkdown,\n        (0,mdast_util_gfm_footnote__WEBPACK_IMPORTED_MODULE_1__.gfmFootnoteFromMarkdown)(),\n        mdast_util_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_2__.gfmStrikethroughFromMarkdown,\n        mdast_util_gfm_table__WEBPACK_IMPORTED_MODULE_3__.gfmTableFromMarkdown,\n        mdast_util_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_4__.gfmTaskListItemFromMarkdown\n    ];\n}\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM (autolink\n * literals, footnotes, strikethrough, tables, tasklists).\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM (autolink literals,\n *   footnotes, strikethrough, tables, tasklists).\n */ function gfmToMarkdown(options) {\n    return {\n        extensions: [\n            mdast_util_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_0__.gfmAutolinkLiteralToMarkdown,\n            (0,mdast_util_gfm_footnote__WEBPACK_IMPORTED_MODULE_1__.gfmFootnoteToMarkdown)(),\n            mdast_util_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_2__.gfmStrikethroughToMarkdown,\n            (0,mdast_util_gfm_table__WEBPACK_IMPORTED_MODULE_3__.gfmTableToMarkdown)(options),\n            mdast_util_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_4__.gfmTaskListItemToMarkdown\n        ]\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0NBR0MsR0FFRDs7O0NBR0MsR0FLdUM7QUFJUjtBQUlLO0FBQ3dDO0FBSXZDO0FBRXRDOzs7Ozs7O0NBT0MsR0FDTSxTQUFTVTtJQUNkLE9BQU87UUFDTFYsMkZBQThCQTtRQUM5QkUsZ0ZBQXVCQTtRQUN2QkUsc0ZBQTRCQTtRQUM1QkUsc0VBQW9CQTtRQUNwQkUsc0ZBQTJCQTtLQUM1QjtBQUNIO0FBRUE7Ozs7Ozs7OztDQVNDLEdBQ00sU0FBU0csY0FBY0MsT0FBTztJQUNuQyxPQUFPO1FBQ0xDLFlBQVk7WUFDVloseUZBQTRCQTtZQUM1QkUsOEVBQXFCQTtZQUNyQkUsb0ZBQTBCQTtZQUMxQkUsd0VBQWtCQSxDQUFDSztZQUNuQkgsb0ZBQXlCQTtTQUMxQjtJQUNIO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0vbGliL2luZGV4LmpzP2FjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5FeHRlbnNpb259IEZyb21NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLk9wdGlvbnN9IFRvTWFya2Rvd25FeHRlbnNpb25cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZ2ZtLXRhYmxlJykuT3B0aW9uc30gT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIGdmbUF1dG9saW5rTGl0ZXJhbEZyb21NYXJrZG93bixcbiAgZ2ZtQXV0b2xpbmtMaXRlcmFsVG9NYXJrZG93blxufSBmcm9tICdtZGFzdC11dGlsLWdmbS1hdXRvbGluay1saXRlcmFsJ1xuaW1wb3J0IHtcbiAgZ2ZtRm9vdG5vdGVGcm9tTWFya2Rvd24sXG4gIGdmbUZvb3Rub3RlVG9NYXJrZG93blxufSBmcm9tICdtZGFzdC11dGlsLWdmbS1mb290bm90ZSdcbmltcG9ydCB7XG4gIGdmbVN0cmlrZXRocm91Z2hGcm9tTWFya2Rvd24sXG4gIGdmbVN0cmlrZXRocm91Z2hUb01hcmtkb3duXG59IGZyb20gJ21kYXN0LXV0aWwtZ2ZtLXN0cmlrZXRocm91Z2gnXG5pbXBvcnQge2dmbVRhYmxlRnJvbU1hcmtkb3duLCBnZm1UYWJsZVRvTWFya2Rvd259IGZyb20gJ21kYXN0LXV0aWwtZ2ZtLXRhYmxlJ1xuaW1wb3J0IHtcbiAgZ2ZtVGFza0xpc3RJdGVtRnJvbU1hcmtkb3duLFxuICBnZm1UYXNrTGlzdEl0ZW1Ub01hcmtkb3duXG59IGZyb20gJ21kYXN0LXV0aWwtZ2ZtLXRhc2stbGlzdC1pdGVtJ1xuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gKGF1dG9saW5rXG4gKiBsaXRlcmFscywgZm9vdG5vdGVzLCBzdHJpa2V0aHJvdWdoLCB0YWJsZXMsIHRhc2tsaXN0cykuXG4gKlxuICogQHJldHVybnMge0FycmF5PEZyb21NYXJrZG93bkV4dGVuc2lvbj59XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSAoYXV0b2xpbmsgbGl0ZXJhbHMsXG4gKiAgIGZvb3Rub3Rlcywgc3RyaWtldGhyb3VnaCwgdGFibGVzLCB0YXNrbGlzdHMpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtRnJvbU1hcmtkb3duKCkge1xuICByZXR1cm4gW1xuICAgIGdmbUF1dG9saW5rTGl0ZXJhbEZyb21NYXJrZG93bixcbiAgICBnZm1Gb290bm90ZUZyb21NYXJrZG93bigpLFxuICAgIGdmbVN0cmlrZXRocm91Z2hGcm9tTWFya2Rvd24sXG4gICAgZ2ZtVGFibGVGcm9tTWFya2Rvd24sXG4gICAgZ2ZtVGFza0xpc3RJdGVtRnJvbU1hcmtkb3duXG4gIF1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSAoYXV0b2xpbmtcbiAqIGxpdGVyYWxzLCBmb290bm90ZXMsIHN0cmlrZXRocm91Z2gsIHRhYmxlcywgdGFza2xpc3RzKS5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIHtUb01hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIChhdXRvbGluayBsaXRlcmFscyxcbiAqICAgZm9vdG5vdGVzLCBzdHJpa2V0aHJvdWdoLCB0YWJsZXMsIHRhc2tsaXN0cykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1Ub01hcmtkb3duKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBleHRlbnNpb25zOiBbXG4gICAgICBnZm1BdXRvbGlua0xpdGVyYWxUb01hcmtkb3duLFxuICAgICAgZ2ZtRm9vdG5vdGVUb01hcmtkb3duKCksXG4gICAgICBnZm1TdHJpa2V0aHJvdWdoVG9NYXJrZG93bixcbiAgICAgIGdmbVRhYmxlVG9NYXJrZG93bihvcHRpb25zKSxcbiAgICAgIGdmbVRhc2tMaXN0SXRlbVRvTWFya2Rvd25cbiAgICBdXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZm1BdXRvbGlua0xpdGVyYWxGcm9tTWFya2Rvd24iLCJnZm1BdXRvbGlua0xpdGVyYWxUb01hcmtkb3duIiwiZ2ZtRm9vdG5vdGVGcm9tTWFya2Rvd24iLCJnZm1Gb290bm90ZVRvTWFya2Rvd24iLCJnZm1TdHJpa2V0aHJvdWdoRnJvbU1hcmtkb3duIiwiZ2ZtU3RyaWtldGhyb3VnaFRvTWFya2Rvd24iLCJnZm1UYWJsZUZyb21NYXJrZG93biIsImdmbVRhYmxlVG9NYXJrZG93biIsImdmbVRhc2tMaXN0SXRlbUZyb21NYXJrZG93biIsImdmbVRhc2tMaXN0SXRlbVRvTWFya2Rvd24iLCJnZm1Gcm9tTWFya2Rvd24iLCJnZm1Ub01hcmtkb3duIiwib3B0aW9ucyIsImV4dGVuc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm/lib/index.js\n");

/***/ })

};
;