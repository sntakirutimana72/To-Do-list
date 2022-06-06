/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://use.fontawesome.com/releases/v6.1.1/css/all.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Here you apply all kinds of styling to your app UIs */\\r\\n\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: #272727cc;\\r\\n  font-family: 'Inter', sans-serif;\\r\\n}\\r\\n\\r\\n.no-spacing {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.d-flex-align-center {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.d-flex-column {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* section */\\r\\n\\r\\nsection {\\r\\n  justify-content: center;\\r\\n  min-height: 100vh;\\r\\n  max-width: 400px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nsection > div {\\r\\n  background: #fff;\\r\\n  box-shadow: 0 1px 4px black;\\r\\n}\\r\\n\\r\\n/* form */\\r\\n\\r\\nform {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* form heading && field-wrap */\\r\\n\\r\\n.heading-wrapper,\\r\\n.field-wrap {\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.heading-wrapper h1 {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.heading-wrapper i {\\r\\n  transform: rotate(90deg);\\r\\n}\\r\\n\\r\\n.field-wrap span {\\r\\n  font-size: 12px;\\r\\n  color: #27272757;\\r\\n}\\r\\n\\r\\n/* to-do-list-container */\\r\\n\\r\\n.to-do-list {\\r\\n  width: 100%;\\r\\n  gap: 2px;\\r\\n}\\r\\n\\r\\n.to-do-list li {\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.status-completed {\\r\\n  color: #3f383875;\\r\\n}\\r\\n\\r\\n.task-selected {\\r\\n  background: #101030;\\r\\n  color: grey !important;\\r\\n}\\r\\n\\r\\n.task-selected .task-desc::placeholder {\\r\\n  color: inherit;\\r\\n}\\r\\n\\r\\n.task-desc {\\r\\n  color: inherit;\\r\\n  font-family: inherit;\\r\\n  font-size: 15px;\\r\\n  line-height: 24px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.status-completed .task-desc {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nli button {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.to-do-refresh-btn,\\r\\nli button {\\r\\n  background: none;\\r\\n}\\r\\n\\r\\nbutton:focus {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\nbutton.fa-trash {\\r\\n  cursor: pointer;\\r\\n  color: grey;\\r\\n}\\r\\n\\r\\n.to-do-clear-btn {\\r\\n  padding: 15px 5px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.to-do-clear-btn:disabled {\\r\\n  cursor: not-allowed;\\r\\n}\\r\\n\\r\\ninput[type='text'] {\\r\\n  box-sizing: border-box;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  padding: 5px;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\ninput[type='text']:focus {\\r\\n  outline: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\ninput[name='desc']::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  padding: 10px 15px;\\r\\n  border-bottom: 1px solid #20202025;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CRUD.js */ \"./src/modules/CRUD.js\");\n/* harmony import */ var _modules_set_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/set-state.js */ \"./src/modules/set-state.js\");\n/* harmony import */ var _modules_selectors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.populateTasks)().then(() => {});\n\n  document.forms[0].onsubmit = _modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask;\n\n  (0,_modules_selectors_js__WEBPACK_IMPORTED_MODULE_2__.$select)('.to-do-clear-btn').onclick = _modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.removeCompletedTasks;\n\n  document.body.addEventListener('click', ({ target }) => {\n    if (target.classList.contains('task-trash')) {\n      (0,_modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.removeTask)(target);\n    } else if (target.classList.contains('task-desc')) {\n      (0,_modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.onTaskSelect)(target);\n    } else if (target.classList.contains('task-item')) {\n      (0,_modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.onTaskSelect)({ parentElement: target });\n    }\n  });\n\n  document.body.addEventListener('change', ({ target }) => {\n    if (target.classList.contains('task-desc')) {\n      (0,_modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.setTaskDescription)(target);\n    } else if (target.classList.contains('task-stat')) {\n      (0,_modules_CRUD_js__WEBPACK_IMPORTED_MODULE_0__.onTaskSelect)(target);\n      (0,_modules_set_state_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/CRUD.js":
/*!*****************************!*\
  !*** ./src/modules/CRUD.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewTask\": () => (/* binding */ createNewTask),\n/* harmony export */   \"onTaskSelect\": () => (/* binding */ onTaskSelect),\n/* harmony export */   \"populateTasks\": () => (/* binding */ populateTasks),\n/* harmony export */   \"removeCompletedTasks\": () => (/* binding */ removeCompletedTasks),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"setTaskDescription\": () => (/* binding */ setTaskDescription)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.js */ \"./src/modules/actions.js\");\n\n\n\n\nconst listView = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.$select)('.to-do-list');\n\nconst renderTaskTemplate = ({ index, description, completed }) => {\n  const component = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('li');\n\n  component.id = index;\n  component.classList.add('d-flex-align-center', 'row', 'task-item');\n\n  if (completed) component.classList.add('status-completed');\n\n  component.innerHTML = `\n    <input type='checkbox'${completed ? ' checked' : ''} class='task-stat'>\n    <input type='text' class='task-desc' placeholder='${description}'>\n    <button type='button' class='task-opt task-drag fa-solid fa-ellipsis-vertical'></button>\n  `;\n\n  return component;\n};\n\nconst reorderTasks = (index = 0) => {\n  for (index; index < _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.size; index += 1) {\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.setIndex(index);\n    listView.children[index].id = index;\n  }\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.commitTasks)();\n};\n\nconst alterTaskOptionButton = (element) => {\n  const [, , button] = element.children;\n\n  if (button.classList.contains('task-drag')) {\n    button.classList.remove('task-drag', 'fa-ellipsis-vertical');\n    button.classList.add('task-trash', 'fa-trash');\n  } else {\n    button.classList.remove('task-trash', 'fa-trash');\n    button.classList.add('task-drag', 'fa-ellipsis-vertical');\n  }\n};\n\nconst onTaskSelect = ({ parentElement }) => {\n  const currentSelection = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.$select)('.task-selected', listView);\n\n  if (parentElement === currentSelection) return;\n\n  if (currentSelection !== null) {\n    currentSelection.classList.remove('task-selected');\n    alterTaskOptionButton(currentSelection);\n  }\n\n  parentElement.classList.add('task-selected');\n  alterTaskOptionButton(parentElement);\n};\n\nconst removeTask = ({ parentElement }) => {\n  const index = parseInt(parentElement.id, 10);\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.remove(index);\n  listView.removeChild(parentElement);\n  reorderTasks(index);\n\n  if (parentElement.children[0].checked && !_storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.hasDisabled) (0,_actions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\nfunction createNewTask(event) {\n  event.preventDefault();\n\n  const newTask = {\n    index: _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.size,\n    description: this.elements.desc.value,\n    completed: false,\n  };\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.assign(newTask);\n  listView.appendChild(renderTaskTemplate(newTask));\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.commitTasks)();\n\n  this.reset();\n}\n\nfunction populateTasks() {\n  return new Promise((resolve, reject) => {\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.queryTasks)();\n\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.tasks.forEach((taskObj) => listView.appendChild(renderTaskTemplate(taskObj)));\n\n    if (_storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.hasDisabled) (0,_actions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    resolve();\n  });\n}\n\nconst setTaskDescription = (field) => {\n  const { parentElement } = field;\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.setDescription(parentElement.id, field.value);\n\n  field.placeholder = field.value;\n  field.value = '';\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.commitTasks)();\n};\n\nconst removeCompletedTasks = () => {\n  (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.$selectAll)(':checked', listView).forEach(({ parentElement }) => {\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.setShadow(parentElement.id);\n    listView.removeChild(parentElement);\n  });\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.filter();\n  (0,_actions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  reorderTasks();\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/CRUD.js?");

/***/ }),

/***/ "./src/modules/actions.js":
/*!********************************!*\
  !*** ./src/modules/actions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./src/modules/selectors.js\");\n\n\nconst propClearTaskTrigger = (enforce) => {\n  const trigger = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_0__.$select)('.to-do-clear-btn');\n  const isDisabled = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_0__.$is)(trigger, 'disabled');\n\n  if (isDisabled) {\n    (0,_selectors_js__WEBPACK_IMPORTED_MODULE_0__.$prop)(trigger, 'disabled');\n  } else if (!enforce) (0,_selectors_js__WEBPACK_IMPORTED_MODULE_0__.$attrib)(trigger, 'disabled', true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (propClearTaskTrigger);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/actions.js?");

/***/ }),

/***/ "./src/modules/selectors.js":
/*!**********************************!*\
  !*** ./src/modules/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$attrib\": () => (/* binding */ $attrib),\n/* harmony export */   \"$is\": () => (/* binding */ $is),\n/* harmony export */   \"$prop\": () => (/* binding */ $prop),\n/* harmony export */   \"$select\": () => (/* binding */ $select),\n/* harmony export */   \"$selectAll\": () => (/* binding */ $selectAll),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\n/**\n *\n * @param {String} selector\n * @param {HTMLElement} parentTree\n * @returns\n */\nconst $select = (selector, tree = document.body) => tree.querySelector(selector);\n\n/**\n *\n * @param {String} selector\n * @param {HTMLElement} parentTree\n * @returns\n */\nconst $selectAll = (selector, tree = document.body) => tree.querySelectorAll(selector);\n\n/**\n *\n * @param {HTMLElement} element\n * @param {String} attribute\n * @param {String | Boolean | undefined} value\n * @returns\n */\nconst $attrib = (element, attribute, value) => {\n  if (value === undefined) return element.getAttribute(attribute);\n\n  element.setAttribute(attribute, value);\n};\n\n/**\n *\n * @param {HTMLElement} element\n * @param {String} attribute\n * @returns\n */\nconst $is = (element, attribute) => element.hasAttribute(attribute);\n\n/**\n *\n * @param {HTMLElement} element\n * @param {String} attribute\n * @returns\n */\nconst $prop = (element, attribute) => element.removeAttribute(attribute);\n\n/**\n *\n * @param {String} tagName\n * @returns\n */\nconst createElement = (tagName) => document.createElement(tagName);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/selectors.js?");

/***/ }),

/***/ "./src/modules/set-state.js":
/*!**********************************!*\
  !*** ./src/modules/set-state.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ \"./src/modules/actions.js\");\n\n\n\nconst setTaskState = ({ parentElement }) => {\n  parentElement.classList.toggle('status-completed');\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.setState(parseInt(parentElement.id, 10));\n\n  (0,_actions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_storage_js__WEBPACK_IMPORTED_MODULE_0__.TManager.hasDisabled);\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.commitTasks)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTaskState);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/set-state.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TManager\": () => (/* binding */ TManager),\n/* harmony export */   \"commitTasks\": () => (/* binding */ commitTasks),\n/* harmony export */   \"queryTasks\": () => (/* binding */ queryTasks)\n/* harmony export */ });\nconst dataKey = 'to-do-list';\n\nclass TasksManager {\n  allTasks = [];\n\n  get tasks() {\n    return this.allTasks;\n  }\n\n  get size() {\n    return this.allTasks.length;\n  }\n\n  set tasks(tasks) {\n    this.allTasks = tasks;\n\n    return this;\n  }\n\n  assign(task) {\n    this.allTasks.push(task);\n\n    return this;\n  }\n\n  setDescription(index, description) {\n    this.allTasks[parseInt(index, 10)].description = description;\n\n    return this;\n  }\n\n  setState(index) {\n    const state = this.allTasks[index].completed;\n    this.allTasks[index].completed = !state;\n\n    return this;\n  }\n\n  get hasDisabled() {\n    return this.allTasks.find(({ completed }) => completed === true) !== undefined;\n  }\n\n  setIndex(index) {\n    this.allTasks[index].index = index;\n\n    return this;\n  }\n\n  setShadow(index) {\n    delete this.allTasks[parseInt(index, 10)];\n\n    return this;\n  }\n\n  filter() {\n    this.allTasks = this.allTasks.filter((task) => task !== undefined);\n\n    return this;\n  }\n\n  remove(index) {\n    this.allTasks.splice(index, 1);\n\n    return this;\n  }\n}\n\nconst TManager = new TasksManager();\n\nconst queryTasks = () => {\n  const temp = localStorage.getItem(dataKey);\n\n  if (temp !== null) TManager.tasks = JSON.parse(temp);\n};\n\nconst commitTasks = () => localStorage.setItem(dataKey, JSON.stringify(TManager.tasks));\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;