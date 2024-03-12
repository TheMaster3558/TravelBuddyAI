"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-math";
exports.ids = ["vendor-chunks/mdast-util-math"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-math/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/mdast-util-math/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mathFromMarkdown: () => (/* binding */ mathFromMarkdown),\n/* harmony export */   mathToMarkdown: () => (/* binding */ mathToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var longest_streak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! longest-streak */ \"(ssr)/./node_modules/longest-streak/index.js\");\n/**\n * @typedef {import('hast').Element} HastElement\n * @typedef {import('hast').ElementContent} HastElementContent\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('../index.js').InlineMath} InlineMath\n * @typedef {import('../index.js').Math} Math\n *\n * @typedef ToOptions\n *   Configuration.\n * @property {boolean | null | undefined} [singleDollarTextMath=true]\n *   Whether to support math (text) with a single dollar (default: `true`).\n *\n *   Single dollars work in Pandoc and many other places, but often interfere\n *   with “normal” dollars in text.\n *   If you turn this off, you can still use two or more dollars for text math.\n */ \n\n/**\n * Create an extension for `mdast-util-from-markdown`.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */ function mathFromMarkdown() {\n    return {\n        enter: {\n            mathFlow: enterMathFlow,\n            mathFlowFenceMeta: enterMathFlowMeta,\n            mathText: enterMathText\n        },\n        exit: {\n            mathFlow: exitMathFlow,\n            mathFlowFence: exitMathFlowFence,\n            mathFlowFenceMeta: exitMathFlowMeta,\n            mathFlowValue: exitMathData,\n            mathText: exitMathText,\n            mathTextData: exitMathData\n        }\n    };\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function enterMathFlow(token) {\n        /** @type {HastElement} */ const code = {\n            type: \"element\",\n            tagName: \"code\",\n            properties: {\n                className: [\n                    \"language-math\",\n                    \"math-display\"\n                ]\n            },\n            children: []\n        };\n        this.enter({\n            type: \"math\",\n            meta: null,\n            value: \"\",\n            data: {\n                hName: \"pre\",\n                hChildren: [\n                    code\n                ]\n            }\n        }, token);\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function enterMathFlowMeta() {\n        this.buffer();\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathFlowMeta() {\n        const data = this.resume();\n        const node = this.stack[this.stack.length - 1];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"math\");\n        node.meta = data;\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathFlowFence() {\n        // Exit if this is the closing fence.\n        if (this.data.mathFlowInside) return;\n        this.buffer();\n        this.data.mathFlowInside = true;\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathFlow(token) {\n        const data = this.resume().replace(/^(\\r?\\n|\\r)|(\\r?\\n|\\r)$/g, \"\");\n        const node = this.stack[this.stack.length - 1];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"math\");\n        this.exit(token);\n        node.value = data;\n        // @ts-expect-error: we defined it in `enterMathFlow`.\n        const code = /** @type {HastElement} */ node.data.hChildren[0];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code.type === \"element\");\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code.tagName === \"code\");\n        code.children.push({\n            type: \"text\",\n            value: data\n        });\n        this.data.mathFlowInside = undefined;\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function enterMathText(token) {\n        this.enter({\n            type: \"inlineMath\",\n            value: \"\",\n            data: {\n                hName: \"code\",\n                hProperties: {\n                    className: [\n                        \"language-math\",\n                        \"math-inline\"\n                    ]\n                },\n                hChildren: []\n            }\n        }, token);\n        this.buffer();\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathText(token) {\n        const data = this.resume();\n        const node = this.stack[this.stack.length - 1];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"inlineMath\");\n        this.exit(token);\n        node.value = data;\n        const children = /** @type {Array<HastElementContent>} */ // @ts-expect-error: we defined it in `enterMathFlow`.\n        node.data.hChildren;\n        children.push({\n            type: \"text\",\n            value: data\n        });\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathData(token) {\n        this.config.enter.data.call(this, token);\n        this.config.exit.data.call(this, token);\n    }\n}\n/**\n * Create an extension for `mdast-util-to-markdown`.\n *\n * @param {ToOptions | null | undefined} [options]\n *   Configuration (optional).\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */ function mathToMarkdown(options) {\n    let single = (options || {}).singleDollarTextMath;\n    if (single === null || single === undefined) {\n        single = true;\n    }\n    inlineMath.peek = inlineMathPeek;\n    return {\n        unsafe: [\n            {\n                character: \"\\r\",\n                inConstruct: \"mathFlowMeta\"\n            },\n            {\n                character: \"\\n\",\n                inConstruct: \"mathFlowMeta\"\n            },\n            {\n                character: \"$\",\n                after: single ? undefined : \"\\\\$\",\n                inConstruct: \"phrasing\"\n            },\n            {\n                character: \"$\",\n                inConstruct: \"mathFlowMeta\"\n            },\n            {\n                atBreak: true,\n                character: \"$\",\n                after: \"\\\\$\"\n            }\n        ],\n        handlers: {\n            math,\n            inlineMath\n        }\n    };\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {Math} node\n   */ // Note: fixing this code? Please also fix the similar code for code:\n    // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/code.js>\n    function math(node, _, state, info) {\n        const raw = node.value || \"\";\n        const tracker = state.createTracker(info);\n        const sequence = \"$\".repeat(Math.max((0,longest_streak__WEBPACK_IMPORTED_MODULE_1__.longestStreak)(raw, \"$\") + 1, 2));\n        const exit = state.enter(\"mathFlow\");\n        let value = tracker.move(sequence);\n        if (node.meta) {\n            const subexit = state.enter(\"mathFlowMeta\");\n            value += tracker.move(state.safe(node.meta, {\n                after: \"\\n\",\n                before: value,\n                encode: [\n                    \"$\"\n                ],\n                ...tracker.current()\n            }));\n            subexit();\n        }\n        value += tracker.move(\"\\n\");\n        if (raw) {\n            value += tracker.move(raw + \"\\n\");\n        }\n        value += tracker.move(sequence);\n        exit();\n        return value;\n    }\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {InlineMath} node\n   */ // Note: fixing this code? Please also fix the similar code for inline code:\n    // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/inline-code.js>\n    function inlineMath(node, _, state) {\n        let value = node.value || \"\";\n        let size = 1;\n        if (!single) size++;\n        // If there is a single dollar sign on its own in the math, use a fence of\n        // two.\n        // If there are two in a row, use one.\n        while(new RegExp(\"(^|[^$])\" + \"\\\\$\".repeat(size) + \"([^$]|$)\").test(value)){\n            size++;\n        }\n        const sequence = \"$\".repeat(size);\n        // If this is not just spaces or eols (tabs don’t count), and either the\n        // first and last character are a space or eol, or the first or last\n        // character are dollar signs, then pad with spaces.\n        if (// Contains non-space.\n        /[^ \\r\\n]/.test(value) && // Starts with space and ends with space.\n        (/^[ \\r\\n]/.test(value) && /[ \\r\\n]$/.test(value) || // Starts or ends with dollar.\n        /^\\$|\\$$/.test(value))) {\n            value = \" \" + value + \" \";\n        }\n        let index = -1;\n        // We have a potential problem: certain characters after eols could result in\n        // blocks being seen.\n        // For example, if someone injected the string `'\\n# b'`, then that would\n        // result in an ATX heading.\n        // We can’t escape characters in `inlineMath`, but because eols are\n        // transformed to spaces when going from markdown to HTML anyway, we can swap\n        // them out.\n        while(++index < state.unsafe.length){\n            const pattern = state.unsafe[index];\n            // Only look for `atBreak`s.\n            // Btw: note that `atBreak` patterns will always start the regex at LF or\n            // CR.\n            if (!pattern.atBreak) continue;\n            const expression = state.compilePattern(pattern);\n            /** @type {RegExpExecArray | null} */ let match;\n            while(match = expression.exec(value)){\n                let position = match.index;\n                // Support CRLF (patterns only look for one of the characters).\n                if (value.codePointAt(position) === 10 /* `\\n` */  && value.codePointAt(position - 1) === 13 /* `\\r` */ ) {\n                    position--;\n                }\n                value = value.slice(0, position) + \" \" + value.slice(match.index + 1);\n            }\n        }\n        return sequence + value + sequence;\n    }\n    /**\n   * @returns {string}\n   */ function inlineMathPeek() {\n        return \"$\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1tYXRoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQkMsR0FFa0M7QUFDUztBQUU1Qzs7Ozs7Q0FLQyxHQUNNLFNBQVNHO0lBQ2QsT0FBTztRQUNMQyxPQUFPO1lBQ0xDLFVBQVVDO1lBQ1ZDLG1CQUFtQkM7WUFDbkJDLFVBQVVDO1FBQ1o7UUFDQUMsTUFBTTtZQUNKTixVQUFVTztZQUNWQyxlQUFlQztZQUNmUCxtQkFBbUJRO1lBQ25CQyxlQUFlQztZQUNmUixVQUFVUztZQUNWQyxjQUFjRjtRQUNoQjtJQUNGO0lBRUE7OztHQUdDLEdBQ0QsU0FBU1gsY0FBY2MsS0FBSztRQUMxQix3QkFBd0IsR0FDeEIsTUFBTUMsT0FBTztZQUNYQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsWUFBWTtnQkFBQ0MsV0FBVztvQkFBQztvQkFBaUI7aUJBQWU7WUFBQTtZQUN6REMsVUFBVSxFQUFFO1FBQ2Q7UUFDQSxJQUFJLENBQUN0QixLQUFLLENBQ1I7WUFDRWtCLE1BQU07WUFDTkssTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07Z0JBQUNDLE9BQU87Z0JBQU9DLFdBQVc7b0JBQUNWO2lCQUFLO1lBQUE7UUFDeEMsR0FDQUQ7SUFFSjtJQUVBOzs7R0FHQyxHQUNELFNBQVNaO1FBQ1AsSUFBSSxDQUFDd0IsTUFBTTtJQUNiO0lBRUE7OztHQUdDLEdBQ0QsU0FBU2pCO1FBQ1AsTUFBTWMsT0FBTyxJQUFJLENBQUNJLE1BQU07UUFDeEIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNBLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7UUFDOUNuQywwQ0FBTUEsQ0FBQ2lDLEtBQUtaLElBQUksS0FBSztRQUNyQlksS0FBS1AsSUFBSSxHQUFHRTtJQUNkO0lBRUE7OztHQUdDLEdBQ0QsU0FBU2Y7UUFDUCxxQ0FBcUM7UUFDckMsSUFBSSxJ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QyxHQUFHRixZQUFZLE1BQU12RCxNQUFNeUQsS0FBSyxDQUFDSixNQUFNSixLQUFLLEdBQUc7WUFDckU7UUFDRjtRQUVBLE9BQU9iLFdBQVdwQyxRQUFRb0M7SUFDNUI7SUFFQTs7R0FFQyxHQUNELFNBQVNkO1FBQ1AsT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1tYXRoL2xpYi9pbmRleC5qcz8wZmEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEhhc3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudENvbnRlbnR9IEhhc3RFbGVtZW50Q29udGVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuQ29tcGlsZUNvbnRleHR9IENvbXBpbGVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5FeHRlbnNpb259IEZyb21NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuSGFuZGxlfSBGcm9tTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5IYW5kbGV9IFRvTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbmRleC5qcycpLklubGluZU1hdGh9IElubGluZU1hdGhcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2luZGV4LmpzJykuTWF0aH0gTWF0aFxuICpcbiAqIEB0eXBlZGVmIFRvT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3NpbmdsZURvbGxhclRleHRNYXRoPXRydWVdXG4gKiAgIFdoZXRoZXIgdG8gc3VwcG9ydCBtYXRoICh0ZXh0KSB3aXRoIGEgc2luZ2xlIGRvbGxhciAoZGVmYXVsdDogYHRydWVgKS5cbiAqXG4gKiAgIFNpbmdsZSBkb2xsYXJzIHdvcmsgaW4gUGFuZG9jIGFuZCBtYW55IG90aGVyIHBsYWNlcywgYnV0IG9mdGVuIGludGVyZmVyZVxuICogICB3aXRoIOKAnG5vcm1hbOKAnSBkb2xsYXJzIGluIHRleHQuXG4gKiAgIElmIHlvdSB0dXJuIHRoaXMgb2ZmLCB5b3UgY2FuIHN0aWxsIHVzZSB0d28gb3IgbW9yZSBkb2xsYXJzIGZvciB0ZXh0IG1hdGguXG4gKi9cblxuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7bG9uZ2VzdFN0cmVha30gZnJvbSAnbG9uZ2VzdC1zdHJlYWsnXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAuXG4gKlxuICogQHJldHVybnMge0Zyb21NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGhGcm9tTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IHtcbiAgICAgIG1hdGhGbG93OiBlbnRlck1hdGhGbG93LFxuICAgICAgbWF0aEZsb3dGZW5jZU1ldGE6IGVudGVyTWF0aEZsb3dNZXRhLFxuICAgICAgbWF0aFRleHQ6IGVudGVyTWF0aFRleHRcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgIG1hdGhGbG93OiBleGl0TWF0aEZsb3csXG4gICAgICBtYXRoRmxvd0ZlbmNlOiBleGl0TWF0aEZsb3dGZW5jZSxcbiAgICAgIG1hdGhGbG93RmVuY2VNZXRhOiBleGl0TWF0aEZsb3dNZXRhLFxuICAgICAgbWF0aEZsb3dWYWx1ZTogZXhpdE1hdGhEYXRhLFxuICAgICAgbWF0aFRleHQ6IGV4aXRNYXRoVGV4dCxcbiAgICAgIG1hdGhUZXh0RGF0YTogZXhpdE1hdGhEYXRhXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGVudGVyTWF0aEZsb3codG9rZW4pIHtcbiAgICAvKiogQHR5cGUge0hhc3RFbGVtZW50fSAqL1xuICAgIGNvbnN0IGNvZGUgPSB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiAnY29kZScsXG4gICAgICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2xhbmd1YWdlLW1hdGgnLCAnbWF0aC1kaXNwbGF5J119LFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICAgIHRoaXMuZW50ZXIoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdtYXRoJyxcbiAgICAgICAgbWV0YTogbnVsbCxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBkYXRhOiB7aE5hbWU6ICdwcmUnLCBoQ2hpbGRyZW46IFtjb2RlXX1cbiAgICAgIH0sXG4gICAgICB0b2tlblxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbnRlck1hdGhGbG93TWV0YSgpIHtcbiAgICB0aGlzLmJ1ZmZlcigpXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZXhpdE1hdGhGbG93TWV0YSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBhc3NlcnQobm9kZS50eXBlID09PSAnbWF0aCcpXG4gICAgbm9kZS5tZXRhID0gZGF0YVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoRmxvd0ZlbmNlKCkge1xuICAgIC8vIEV4aXQgaWYgdGhpcyBpcyB0aGUgY2xvc2luZyBmZW5jZS5cbiAgICBpZiAodGhpcy5kYXRhLm1hdGhGbG93SW5zaWRlKSByZXR1cm5cbiAgICB0aGlzLmJ1ZmZlcigpXG4gICAgdGhpcy5kYXRhLm1hdGhGbG93SW5zaWRlID0gdHJ1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoRmxvdyh0b2tlbikge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpLnJlcGxhY2UoL14oXFxyP1xcbnxcXHIpfChcXHI/XFxufFxccikkL2csICcnKVxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBhc3NlcnQobm9kZS50eXBlID09PSAnbWF0aCcpXG4gICAgdGhpcy5leGl0KHRva2VuKVxuICAgIG5vZGUudmFsdWUgPSBkYXRhXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogd2UgZGVmaW5lZCBpdCBpbiBgZW50ZXJNYXRoRmxvd2AuXG4gICAgY29uc3QgY29kZSA9IC8qKiBAdHlwZSB7SGFzdEVsZW1lbnR9ICovIChub2RlLmRhdGEuaENoaWxkcmVuWzBdKVxuICAgIGFzc2VydChjb2RlLnR5cGUgPT09ICdlbGVtZW50JylcbiAgICBhc3NlcnQoY29kZS50YWdOYW1lID09PSAnY29kZScpXG4gICAgY29kZS5jaGlsZHJlbi5wdXNoKHt0eXBlOiAndGV4dCcsIHZhbHVlOiBkYXRhfSlcbiAgICB0aGlzLmRhdGEubWF0aEZsb3dJbnNpZGUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbnRlck1hdGhUZXh0KHRva2VuKSB7XG4gICAgdGhpcy5lbnRlcihcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2lubGluZU1hdGgnLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBoTmFtZTogJ2NvZGUnLFxuICAgICAgICAgIGhQcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2xhbmd1YWdlLW1hdGgnLCAnbWF0aC1pbmxpbmUnXX0sXG4gICAgICAgICAgaENoaWxkcmVuOiBbXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5cbiAgICApXG4gICAgdGhpcy5idWZmZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoVGV4dCh0b2tlbikge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIGFzc2VydChub2RlLnR5cGUgPT09ICdpbmxpbmVNYXRoJylcbiAgICB0aGlzLmV4aXQodG9rZW4pXG4gICAgbm9kZS52YWx1ZSA9IGRhdGFcbiAgICBjb25zdCBjaGlsZHJlbiA9IC8qKiBAdHlwZSB7QXJyYXk8SGFzdEVsZW1lbnRDb250ZW50Pn0gKi8gKFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogd2UgZGVmaW5lZCBpdCBpbiBgZW50ZXJNYXRoRmxvd2AuXG4gICAgICBub2RlLmRhdGEuaENoaWxkcmVuXG4gICAgKVxuICAgIGNoaWxkcmVuLnB1c2goe3R5cGU6ICd0ZXh0JywgdmFsdWU6IGRhdGF9KVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoRGF0YSh0b2tlbikge1xuICAgIHRoaXMuY29uZmlnLmVudGVyLmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB0aGlzLmNvbmZpZy5leGl0LmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYC5cbiAqXG4gKiBAcGFyYW0ge1RvT3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRoVG9NYXJrZG93bihvcHRpb25zKSB7XG4gIGxldCBzaW5nbGUgPSAob3B0aW9ucyB8fCB7fSkuc2luZ2xlRG9sbGFyVGV4dE1hdGhcblxuICBpZiAoc2luZ2xlID09PSBudWxsIHx8IHNpbmdsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2luZ2xlID0gdHJ1ZVxuICB9XG5cbiAgaW5saW5lTWF0aC5wZWVrID0gaW5saW5lTWF0aFBlZWtcblxuICByZXR1cm4ge1xuICAgIHVuc2FmZTogW1xuICAgICAge2NoYXJhY3RlcjogJ1xccicsIGluQ29uc3RydWN0OiAnbWF0aEZsb3dNZXRhJ30sXG4gICAgICB7Y2hhcmFjdGVyOiAnXFxuJywgaW5Db25zdHJ1Y3Q6ICdtYXRoRmxvd01ldGEnfSxcbiAgICAgIHtcbiAgICAgICAgY2hhcmFjdGVyOiAnJCcsXG4gICAgICAgIGFmdGVyOiBzaW5nbGUgPyB1bmRlZmluZWQgOiAnXFxcXCQnLFxuICAgICAgICBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ1xuICAgICAgfSxcbiAgICAgIHtjaGFyYWN0ZXI6ICckJywgaW5Db25zdHJ1Y3Q6ICdtYXRoRmxvd01ldGEnfSxcbiAgICAgIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICckJywgYWZ0ZXI6ICdcXFxcJCd9XG4gICAgXSxcbiAgICBoYW5kbGVyczoge21hdGgsIGlubGluZU1hdGh9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7TWF0aH0gbm9kZVxuICAgKi9cbiAgLy8gTm90ZTogZml4aW5nIHRoaXMgY29kZT8gUGxlYXNlIGFsc28gZml4IHRoZSBzaW1pbGFyIGNvZGUgZm9yIGNvZGU6XG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC10by1tYXJrZG93bi9ibG9iL21haW4vbGliL2hhbmRsZS9jb2RlLmpzPlxuICBmdW5jdGlvbiBtYXRoKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgcmF3ID0gbm9kZS52YWx1ZSB8fCAnJ1xuICAgIGNvbnN0IHRyYWNrZXIgPSBzdGF0ZS5jcmVhdGVUcmFja2VyKGluZm8pXG4gICAgY29uc3Qgc2VxdWVuY2UgPSAnJCcucmVwZWF0KE1hdGgubWF4KGxvbmdlc3RTdHJlYWsocmF3LCAnJCcpICsgMSwgMikpXG4gICAgY29uc3QgZXhpdCA9IHN0YXRlLmVudGVyKCdtYXRoRmxvdycpXG4gICAgbGV0IHZhbHVlID0gdHJhY2tlci5tb3ZlKHNlcXVlbmNlKVxuXG4gICAgaWYgKG5vZGUubWV0YSkge1xuICAgICAgY29uc3Qgc3ViZXhpdCA9IHN0YXRlLmVudGVyKCdtYXRoRmxvd01ldGEnKVxuICAgICAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKFxuICAgICAgICBzdGF0ZS5zYWZlKG5vZGUubWV0YSwge1xuICAgICAgICAgIGFmdGVyOiAnXFxuJyxcbiAgICAgICAgICBiZWZvcmU6IHZhbHVlLFxuICAgICAgICAgIGVuY29kZTogWyckJ10sXG4gICAgICAgICAgLi4udHJhY2tlci5jdXJyZW50KClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIHN1YmV4aXQoKVxuICAgIH1cblxuICAgIHZhbHVlICs9IHRyYWNrZXIubW92ZSgnXFxuJylcblxuICAgIGlmIChyYXcpIHtcbiAgICAgIHZhbHVlICs9IHRyYWNrZXIubW92ZShyYXcgKyAnXFxuJylcbiAgICB9XG5cbiAgICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoc2VxdWVuY2UpXG4gICAgZXhpdCgpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7SW5saW5lTWF0aH0gbm9kZVxuICAgKi9cbiAgLy8gTm90ZTogZml4aW5nIHRoaXMgY29kZT8gUGxlYXNlIGFsc28gZml4IHRoZSBzaW1pbGFyIGNvZGUgZm9yIGlubGluZSBjb2RlOlxuICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vYmxvYi9tYWluL2xpYi9oYW5kbGUvaW5saW5lLWNvZGUuanM+XG4gIGZ1bmN0aW9uIGlubGluZU1hdGgobm9kZSwgXywgc3RhdGUpIHtcbiAgICBsZXQgdmFsdWUgPSBub2RlLnZhbHVlIHx8ICcnXG4gICAgbGV0IHNpemUgPSAxXG5cbiAgICBpZiAoIXNpbmdsZSkgc2l6ZSsrXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNpbmdsZSBkb2xsYXIgc2lnbiBvbiBpdHMgb3duIGluIHRoZSBtYXRoLCB1c2UgYSBmZW5jZSBvZlxuICAgIC8vIHR3by5cbiAgICAvLyBJZiB0aGVyZSBhcmUgdHdvIGluIGEgcm93LCB1c2Ugb25lLlxuICAgIHdoaWxlIChcbiAgICAgIG5ldyBSZWdFeHAoJyhefFteJF0pJyArICdcXFxcJCcucmVwZWF0KHNpemUpICsgJyhbXiRdfCQpJykudGVzdCh2YWx1ZSlcbiAgICApIHtcbiAgICAgIHNpemUrK1xuICAgIH1cblxuICAgIGNvbnN0IHNlcXVlbmNlID0gJyQnLnJlcGVhdChzaXplKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBub3QganVzdCBzcGFjZXMgb3IgZW9scyAodGFicyBkb27igJl0IGNvdW50KSwgYW5kIGVpdGhlciB0aGVcbiAgICAvLyBmaXJzdCBhbmQgbGFzdCBjaGFyYWN0ZXIgYXJlIGEgc3BhY2Ugb3IgZW9sLCBvciB0aGUgZmlyc3Qgb3IgbGFzdFxuICAgIC8vIGNoYXJhY3RlciBhcmUgZG9sbGFyIHNpZ25zLCB0aGVuIHBhZCB3aXRoIHNwYWNlcy5cbiAgICBpZiAoXG4gICAgICAvLyBDb250YWlucyBub24tc3BhY2UuXG4gICAgICAvW14gXFxyXFxuXS8udGVzdCh2YWx1ZSkgJiZcbiAgICAgIC8vIFN0YXJ0cyB3aXRoIHNwYWNlIGFuZCBlbmRzIHdpdGggc3BhY2UuXG4gICAgICAoKC9eWyBcXHJcXG5dLy50ZXN0KHZhbHVlKSAmJiAvWyBcXHJcXG5dJC8udGVzdCh2YWx1ZSkpIHx8XG4gICAgICAgIC8vIFN0YXJ0cyBvciBlbmRzIHdpdGggZG9sbGFyLlxuICAgICAgICAvXlxcJHxcXCQkLy50ZXN0KHZhbHVlKSlcbiAgICApIHtcbiAgICAgIHZhbHVlID0gJyAnICsgdmFsdWUgKyAnICdcbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSAtMVxuXG4gICAgLy8gV2UgaGF2ZSBhIHBvdGVudGlhbCBwcm9ibGVtOiBjZXJ0YWluIGNoYXJhY3RlcnMgYWZ0ZXIgZW9scyBjb3VsZCByZXN1bHQgaW5cbiAgICAvLyBibG9ja3MgYmVpbmcgc2Vlbi5cbiAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZW9uZSBpbmplY3RlZCB0aGUgc3RyaW5nIGAnXFxuIyBiJ2AsIHRoZW4gdGhhdCB3b3VsZFxuICAgIC8vIHJlc3VsdCBpbiBhbiBBVFggaGVhZGluZy5cbiAgICAvLyBXZSBjYW7igJl0IGVzY2FwZSBjaGFyYWN0ZXJzIGluIGBpbmxpbmVNYXRoYCwgYnV0IGJlY2F1c2UgZW9scyBhcmVcbiAgICAvLyB0cmFuc2Zvcm1lZCB0byBzcGFjZXMgd2hlbiBnb2luZyBmcm9tIG1hcmtkb3duIHRvIEhUTUwgYW55d2F5LCB3ZSBjYW4gc3dhcFxuICAgIC8vIHRoZW0gb3V0LlxuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhdGUudW5zYWZlLmxlbmd0aCkge1xuICAgICAgY29uc3QgcGF0dGVybiA9IHN0YXRlLnVuc2FmZVtpbmRleF1cblxuICAgICAgLy8gT25seSBsb29rIGZvciBgYXRCcmVha2BzLlxuICAgICAgLy8gQnR3OiBub3RlIHRoYXQgYGF0QnJlYWtgIHBhdHRlcm5zIHdpbGwgYWx3YXlzIHN0YXJ0IHRoZSByZWdleCBhdCBMRiBvclxuICAgICAgLy8gQ1IuXG4gICAgICBpZiAoIXBhdHRlcm4uYXRCcmVhaykgY29udGludWVcblxuICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IHN0YXRlLmNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pXG4gICAgICAvKiogQHR5cGUge1JlZ0V4cEV4ZWNBcnJheSB8IG51bGx9ICovXG4gICAgICBsZXQgbWF0Y2hcblxuICAgICAgd2hpbGUgKChtYXRjaCA9IGV4cHJlc3Npb24uZXhlYyh2YWx1ZSkpKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IG1hdGNoLmluZGV4XG5cbiAgICAgICAgLy8gU3VwcG9ydCBDUkxGIChwYXR0ZXJucyBvbmx5IGxvb2sgZm9yIG9uZSBvZiB0aGUgY2hhcmFjdGVycykuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWx1ZS5jb2RlUG9pbnRBdChwb3NpdGlvbikgPT09IDEwIC8qIGBcXG5gICovICYmXG4gICAgICAgICAgdmFsdWUuY29kZVBvaW50QXQocG9zaXRpb24gLSAxKSA9PT0gMTMgLyogYFxccmAgKi9cbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24tLVxuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBwb3NpdGlvbikgKyAnICcgKyB2YWx1ZS5zbGljZShtYXRjaC5pbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcXVlbmNlICsgdmFsdWUgKyBzZXF1ZW5jZVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBpbmxpbmVNYXRoUGVlaygpIHtcbiAgICByZXR1cm4gJyQnXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJvayIsImFzc2VydCIsImxvbmdlc3RTdHJlYWsiLCJtYXRoRnJvbU1hcmtkb3duIiwiZW50ZXIiLCJtYXRoRmxvdyIsImVudGVyTWF0aEZsb3ciLCJtYXRoRmxvd0ZlbmNlTWV0YSIsImVudGVyTWF0aEZsb3dNZXRhIiwibWF0aFRleHQiLCJlbnRlck1hdGhUZXh0IiwiZXhpdCIsImV4aXRNYXRoRmxvdyIsIm1hdGhGbG93RmVuY2UiLCJleGl0TWF0aEZsb3dGZW5jZSIsImV4aXRNYXRoRmxvd01ldGEiLCJtYXRoRmxvd1ZhbHVlIiwiZXhpdE1hdGhEYXRhIiwiZXhpdE1hdGhUZXh0IiwibWF0aFRleHREYXRhIiwidG9rZW4iLCJjb2RlIiwidHlwZSIsInRhZ05hbWUiLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidmFsdWUiLCJkYXRhIiwiaE5hbWUiLCJoQ2hpbGRyZW4iLCJidWZmZXIiLCJyZXN1bWUiLCJub2RlIiwic3RhY2siLCJsZW5ndGgiLCJtYXRoRmxvd0luc2lkZSIsInJlcGxhY2UiLCJwdXNoIiwidW5kZWZpbmVkIiwiaFByb3BlcnRpZXMiLCJjb25maWciLCJjYWxsIiwibWF0aFRvTWFya2Rvd24iLCJvcHRpb25zIiwic2luZ2xlIiwic2luZ2xlRG9sbGFyVGV4dE1hdGgiLCJpbmxpbmVNYXRoIiwicGVlayIsImlubGluZU1hdGhQZWVrIiwidW5zYWZlIiwiY2hhcmFjdGVyIiwiaW5Db25zdHJ1Y3QiLCJhZnRlciIsImF0QnJlYWsiLCJoYW5kbGVycyIsIm1hdGgiLCJfIiwic3RhdGUiLCJpbmZvIiwicmF3IiwidHJhY2tlciIsImNyZWF0ZVRyYWNrZXIiLCJzZXF1ZW5jZSIsInJlcGVhdCIsIk1hdGgiLCJtYXgiLCJtb3ZlIiwic3ViZXhpdCIsInNhZmUiLCJiZWZvcmUiLCJlbmNvZGUiLCJjdXJyZW50Iiwic2l6ZSIsIlJlZ0V4cCIsInRlc3QiLCJpbmRleCIsInBhdHRlcm4iLCJleHByZXNzaW9uIiwiY29tcGlsZVBhdHRlcm4iLCJtYXRjaCIsImV4ZWMiLCJwb3NpdGlvbiIsImNvZGVQb2ludEF0Iiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-math/lib/index.js\n");

/***/ })

};
;