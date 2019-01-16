(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-drone-hud", ["react"], factory);
	else if(typeof exports === 'object')
		exports["react-drone-hud"] = factory(require("react"));
	else
		root["react-drone-hud"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./src/DroneHud.module.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./src/DroneHud.module.css ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._37atakxf0VOPUMP3H5lpT3 {\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: white;\n}\n\n._1GmeNojv2aKKjuXC1Uvdi6 {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    width: 400px;\n    height: 400px;\n}\n\n.x52VlB1HjxNREbmYnBnNm {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n._2o2kdCVGQu4k-mhQxnlNVl {\n    margin-top: 20px;\n}\n\n._3gXiBB3b_rCNFCLcqk2m_t {\n    position: absolute;\n    width: 400%;\n    height: 400%;\n    top: -150%;\n    left: -150%;\n}\n\n._6kapAJgiETWHMYNLNJh6h {\n    position: absolute;\n    overflow: hidden;\n    top: 20%;\n    height: 80%;\n    left: 30%;\n    width: 40%;\n}\n\n._1aLFnqWnC8x279D15LFA7h {\n    position: absolute;\n    width: 125%;\n    height: 125%;\n    top: -25%;\n    left: -12.5%;\n}\n\n.nPapnQr7ooWM3rmREZ1Ae {\n    position: absolute;\n    top: 25%;\n    height: 50%;\n    left: 0;\n    width: 50px;\n    transform: scaleX(1.5);\n}\n\n._1i3MmmQlMNVd730FyMJiBs {\n    transform: scaleX(-1.5);\n    right: 0;\n    left: auto;\n}\n\n._18mXx4CzE-tvPw2LyyV00m {\n    font-weight: bold;\n\n    position: absolute;\n    height: 20px;\n    line-height: 20px;\n    margin-top: -10px;\n    background-color: #333;\n    width: 45px;\n    z-index: 10;\n    text-align: right;\n    top: 50%;\n}\n\n._1ZCPhP6jt2JanuW5A2MGGv {\n    right: 0;\n    left: auto;\n    width: 45px;\n    text-align: left;\n}\n\n._3sOjtLO0u8jyJoDcKaVgQs {\n    height: 200px;\n    /* line-height: 200px;\n    margin-top: -100px; */\n\n    position: absolute;\n    top: calc(50% - 100px);\n}\n\n._3X26mfC_0HSb9KgoFq6wGU {\n    right: 0;\n    left: auto;\n}\n\n._1dVvcI8E4gfUH8X1m0YbL9 {\n    margin-top: 20px;\n    height: 20px;\n    width: 40px;\n    text-align: right;\n}\n\n._3o9funiR9_uuvhpXrrV12R {\n    text-align: left;\n}\n\n._2Vi84XcV_OamwP3OTZ3-dx {\n    position: relative;\n    top: 0;\n    width: 400px;\n    margin: 0 auto;\n    overflow: hidden;\n    height: 30px;\n}\n\n.HNQrZ5Lc1GKpRojBeNzTD {\n    position: absolute;\n    display: inline-block;\n    transform: scaleX(2);\n    height: 30px;\n}\n\n._1bOUHrkTlFdj3JGyD45t6i {\n    font-weight: bold;\n    text-align: center;\n\n    position: relative;\n    margin: 0 auto;\n    width: 50px;\n\n    background-color: rgba(51, 51, 51, 0.7);\n}\n", ""]);

// exports
exports.locals = {
	"font": "_37atakxf0VOPUMP3H5lpT3",
	"container": "_1GmeNojv2aKKjuXC1Uvdi6",
	"absolute": "x52VlB1HjxNREbmYnBnNm",
	"fullWrap": "_2o2kdCVGQu4k-mhQxnlNVl x52VlB1HjxNREbmYnBnNm",
	"horizon": "_3gXiBB3b_rCNFCLcqk2m_t",
	"horizonHider": "_6kapAJgiETWHMYNLNJh6h",
	"horizonInner": "_1aLFnqWnC8x279D15LFA7h",
	"verticalGauge": "nPapnQr7ooWM3rmREZ1Ae",
	"verticalGaugeRight": "_1i3MmmQlMNVd730FyMJiBs nPapnQr7ooWM3rmREZ1Ae",
	"airspeedIndication": "_18mXx4CzE-tvPw2LyyV00m _37atakxf0VOPUMP3H5lpT3",
	"altitudeIndication": "_1ZCPhP6jt2JanuW5A2MGGv _18mXx4CzE-tvPw2LyyV00m _37atakxf0VOPUMP3H5lpT3",
	"verticalTickContainer": "_3sOjtLO0u8jyJoDcKaVgQs _37atakxf0VOPUMP3H5lpT3",
	"verticalTickContainerRight": "_3X26mfC_0HSb9KgoFq6wGU _3sOjtLO0u8jyJoDcKaVgQs _37atakxf0VOPUMP3H5lpT3",
	"verticalTick": "_1dVvcI8E4gfUH8X1m0YbL9",
	"verticalTickRight": "_3o9funiR9_uuvhpXrrV12R _1dVvcI8E4gfUH8X1m0YbL9",
	"headingBar": "_2Vi84XcV_OamwP3OTZ3-dx",
	"headingImg": "HNQrZ5Lc1GKpRojBeNzTD",
	"headingIndication": "_1bOUHrkTlFdj3JGyD45t6i _37atakxf0VOPUMP3H5lpT3"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = _interopDefault(__webpack_require__(/*! react */ "react")),
    classCallCheck = function (e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
},
    inherits = function (e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
},
    possibleConstructorReturn = function (e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t || "object" != typeof t && "function" != typeof t ? e : t;
},
    AppContainer = function (e) {
  function t() {
    return classCallCheck(this, t), possibleConstructorReturn(this, e.apply(this, arguments));
  }

  return inherits(t, e), t.prototype.render = function () {
    return React.Children.only(this.props.children);
  }, t;
}(React.Component),
    hot_prod = function () {
  return function (e) {
    return e;
  };
},
    areComponentsEqual = function (e, t) {
  return e === t;
},
    setConfig = function () {},
    cold = function (e) {
  return e;
},
    configureComponent = function () {};

exports.AppContainer = AppContainer, exports.hot = hot_prod, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold, exports.configureComponent = configureComponent;

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalAllowed = false;

try {
  eval('evalAllowed = true');
} catch (e) {} // eval not allowed due to CSP
// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods


var platformSupported = !!Object.setPrototypeOf && evalAllowed;

if (true) {
  if (false) {}

  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/DroneHud.module.css":
/*!*********************************!*\
  !*** ./src/DroneHud.module.css ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-1!./DroneHud.module.css */ "./node_modules/css-loader/index.js?!./src/DroneHud.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/DroneHud.tsx":
/*!**************************!*\
  !*** ./src/DroneHud.tsx ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __webpack_require__(/*! react */ "react");

var pitchRing = __webpack_require__(/*! ./svg/pitch-ring.svg */ "./src/svg/pitch-ring.svg");

var planeIndicator = __webpack_require__(/*! ./svg/plane-indicator.svg */ "./src/svg/plane-indicator.svg");

var horizon = __webpack_require__(/*! ./svg/horizon-bg.svg */ "./src/svg/horizon-bg.svg");

var horizonTicks = __webpack_require__(/*! ./svg/horizon-ticks.svg */ "./src/svg/horizon-ticks.svg");

var verticalGauge = __webpack_require__(/*! ./svg/vertical-gauge.svg */ "./src/svg/vertical-gauge.svg");

var headingBar = __webpack_require__(/*! ./svg/heading-bar.svg */ "./src/svg/heading-bar.svg");

var styles = __webpack_require__(/*! ./DroneHud.module.css */ "./src/DroneHud.module.css");

var VerticalTicks = function VerticalTicks(_a) {
  var n = _a.n,
      _b = _a.right,
      right = _b === void 0 ? false : _b,
      _c = _a.tickSize,
      tickSize = _c === void 0 ? 10 : _c;
  var closestTick = Math.round(n / tickSize) * tickSize;
  var ticks = [React.createElement("div", {
    className: right ? styles.verticalTickRight : styles.verticalTick,
    style: {
      marginTop: 4 * (10 / tickSize) * (n - closestTick) + 10
    }
  }, closestTick + 2 * tickSize)];

  for (var i = closestTick + tickSize; i >= closestTick - 2 * tickSize; i -= tickSize) {
    ticks.push(React.createElement("div", {
      className: right ? styles.verticalTickRight : styles.verticalTick
    }, i));
  }

  return React.createElement("div", {
    className: right ? styles.verticalTickContainerRight : styles.verticalTickContainer
  }, ticks);
};

var headingLeft = function headingLeft(n) {
  n %= 360;

  if (n >= 0 && n < 270) {
    return -160 - 2 * n;
  }

  return -160 + 2 * (360 - n);
};

var DroneHud = function DroneHud(_a) {
  var pitch = _a.pitch,
      roll = _a.roll,
      airspeed = _a.airspeed,
      altitude = _a.altitude,
      heading = _a.heading,
      _b = _a.height,
      height = _b === void 0 ? 400 : _b,
      _c = _a.width,
      width = _c === void 0 ? 400 : _c;
  return React.createElement("div", {
    className: styles.container,
    style: {
      height: height,
      width: width
    }
  }, React.createElement("div", {
    className: styles.fullWrap,
    style: {
      transform: "rotate(" + -roll + "deg)"
    }
  }, React.createElement("img", {
    src: horizon,
    className: styles.horizon,
    style: {
      top: pitch * 2 - 150 + "%"
    }
  }), React.createElement("div", {
    className: styles.horizonHider
  }, React.createElement("div", {
    className: styles.horizonInner
  }, React.createElement("img", {
    src: horizonTicks,
    className: styles.horizon,
    style: {
      top: pitch * 2 - 150 + "%",
      objectFit: "cover"
    }
  }))), React.createElement("img", {
    className: styles.absolute,
    src: pitchRing
  })), React.createElement("img", {
    className: styles.fullWrap,
    src: planeIndicator
  }), typeof airspeed === "number" && React.createElement(React.Fragment, null, React.createElement("img", {
    src: verticalGauge,
    className: styles.verticalGauge
  }), React.createElement("div", {
    className: styles.airspeedIndication
  }, Math.round(airspeed)), React.createElement(VerticalTicks, {
    n: airspeed
  })), typeof altitude === "number" && React.createElement(React.Fragment, null, React.createElement("img", {
    src: verticalGauge,
    className: styles.verticalGaugeRight
  }), React.createElement("div", {
    className: styles.altitudeIndication
  }, Math.round(altitude)), React.createElement(VerticalTicks, {
    n: altitude,
    right: true,
    tickSize: 5
  })), typeof heading == "number" && React.createElement("div", {
    className: styles.headingBar
  }, React.createElement("img", {
    src: headingBar,
    className: styles.headingImg,
    style: {
      left: headingLeft(heading)
    }
  }), React.createElement("div", {
    className: styles.headingIndication
  }, Math.round(heading))));
};

exports.default = DroneHud;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VerticalTicks, "VerticalTicks", "/home/matt/aiaa/react-drone-hud/src/DroneHud.tsx");
  reactHotLoader.register(headingLeft, "headingLeft", "/home/matt/aiaa/react-drone-hud/src/DroneHud.tsx");
  reactHotLoader.register(DroneHud, "DroneHud", "/home/matt/aiaa/react-drone-hud/src/DroneHud.tsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var DroneHud_1 = __webpack_require__(/*! ./DroneHud */ "./src/DroneHud.tsx");

exports.default = DroneHud_1.default;

/***/ }),

/***/ "./src/svg/heading-bar.svg":
/*!*********************************!*\
  !*** ./src/svg/heading-bar.svg ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNzIwIgogICBoZWlnaHQ9IjMwIgogICB2aWV3Qm94PSIwIDAgNzIwIDMwLjAwMDAwMSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNTEzNSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iaGVhZGluZy1iYXIuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNTEyOSIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMS45Nzk4OTkiCiAgICAgaW5rc2NhcGU6Y3g9IjQ0MS4yNjUwNiIKICAgICBpbmtzY2FwZTpjeT0iODYuNjU4MzM5IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgdW5pdHM9InB4IgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9InRydWUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMzIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI5IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNTY4MCIKICAgICAgIHNwYWNpbmd4PSIxMCIKICAgICAgIHNwYWNpbmd5PSIxMCIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1MTMyIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMDkyLjUxOTYpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICBkPSJtIDAsMTExMi41MTk2IHYgMTAgaCAzNjAgdiAtMTAiCiAgICAgICBpZD0icGF0aDU2ODIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICAgIGQ9Im0gMzAsMTExNy41MTk2IHYgNSIKICAgICAgIGlkPSJwYXRoNTY4OCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIgogICAgICAgZD0ibSA2MCwxMTE3LjUxOTYgdiA1IgogICAgICAgaWQ9InBhdGg1NjkwIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICBkPSJtIDkwLDExMTIuNTE5NiB2IDEwIgogICAgICAgaWQ9InBhdGg1NjkyIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICBkPSJtIDEyMCwxMTE3LjUxOTYgdiA1IgogICAgICAgaWQ9InBhdGg1Njk0IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICBkPSJtIDE1MCwxMTE3LjUxOTYgdiA1IgogICAgICAgaWQ9InBhdGg1Njk2IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgICBkPSJtIDE4MCwxMTEyLjUxOTYgdiAxMCIKICAgICAgIGlkPSJwYXRoNTY5OCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIgogICAgICAgZD0ibSAyMTAsMTExNy41MTk2IHYgNSIKICAgICAgIGlkPSJwYXRoNTcwMCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIgogICAgICAgZD0ibSAyNDAsMTExNy41MTk2IHYgNSIKICAgICAgIGlkPSJwYXRoNTcwMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIgogICAgICAgZD0ibSAyNzAsMTExMi41MTk2IHYgMTAiCiAgICAgICBpZD0icGF0aDU3MDQiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICAgIGQ9Im0gMzAwLDExMTcuNTE5NiB2IDUiCiAgICAgICBpZD0icGF0aDU3MDYiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIKICAgICAgIGQ9Im0gMzMwLDExMTcuNTE5NiB2IDUiCiAgICAgICBpZD0icGF0aDU3MDgiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICB4PSIzNTYuMjExOTEiCiAgICAgICB5PSIxMTA2LjYwMDgiCiAgICAgICBpZD0idGV4dDU3MTIiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW41NzEwIgogICAgICAgICB4PSIzNTYuMjExOTEiCiAgICAgICAgIHk9IjExMDYuNjAwOCIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMC42NjY2NjY5OHB4O2ZpbGw6I2ZmZmZmZiI+TjwvdHNwYW4+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIHg9IjM1Ni4yMTE5MSIKICAgICAgICAgeT0iMTE1Ni42MDA4IgogICAgICAgICBpZD0idHNwYW41NzE0IiAvPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICBpZD0idGV4dDU3MjAiCiAgICAgICB5PSIxMTA2LjYwMDgiCiAgICAgICB4PSI4Ni4yMTE5MjkiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4KICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMC42NjY2NjY5OHB4O2ZpbGw6I2ZmZmZmZiIKICAgICAgICAgeT0iMTEwNi42MDA4IgogICAgICAgICB4PSI4Ni4yMTE5MjkiCiAgICAgICAgIGlkPSJ0c3BhbjU3MTYiCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiPkU8L3RzcGFuPjx0c3BhbgogICAgICAgICBpZD0idHNwYW41NzE4IgogICAgICAgICB5PSIxMTU2LjYwMDgiCiAgICAgICAgIHg9Ijg2LjIxMTkyOSIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIgLz48L3RleHQ+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIHg9IjE3Ni4yMTE5MyIKICAgICAgIHk9IjExMDYuNjAwOCIKICAgICAgIGlkPSJ0ZXh0NTcyNiI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjU3MjIiCiAgICAgICAgIHg9IjE3Ni4yMTE5MyIKICAgICAgICAgeT0iMTEwNi42MDA4IgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjEwLjY2NjY2Njk4cHg7ZmlsbDojZmZmZmZmIj5TPC90c3Bhbj48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgeD0iMTc2LjIxMTkzIgogICAgICAgICB5PSIxMTU2LjYwMDgiCiAgICAgICAgIGlkPSJ0c3BhbjU3MjQiIC8+PC90ZXh0PgogICAgPHRleHQKICAgICAgIGlkPSJ0ZXh0NTczMiIKICAgICAgIHk9IjExMDYuNjAwOCIKICAgICAgIHg9IjI2NC43ODMyOSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjEwLjY2NjY2Njk4cHg7ZmlsbDojZmZmZmZmIgogICAgICAgICB5PSIxMTA2LjYwMDgiCiAgICAgICAgIHg9IjI2NC43ODMyOSIKICAgICAgICAgaWQ9InRzcGFuNTcyOCIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+VzwvdHNwYW4+PHRzcGFuCiAgICAgICAgIGlkPSJ0c3BhbjU3MzAiCiAgICAgICAgIHk9IjExNTYuNjAwOCIKICAgICAgICAgeD0iMjY0Ljc4MzI5IgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIiAvPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICBpZD0idGV4dDU3MzgiCiAgICAgICB5PSIxMTA2LjYwMDgiCiAgICAgICB4PSItMy43ODgwODU5IgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6MTAuNjY2NjY2OThweDtmaWxsOiNmZmZmZmYiCiAgICAgICAgIHk9IjExMDYuNjAwOCIKICAgICAgICAgeD0iLTMuNzg4MDg1OSIKICAgICAgICAgaWQ9InRzcGFuNTczNCIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+TjwvdHNwYW4+PHRzcGFuCiAgICAgICAgIGlkPSJ0c3BhbjU3MzYiCiAgICAgICAgIHk9IjExNTYuNjAwOCIKICAgICAgICAgeD0iLTMuNzg4MDg1OSIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIgLz48L3RleHQ+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTc1OSIKICAgICAgIGQ9Im0gMzYwLDExMTIuNTE5NiB2IDEwIGggMzYwIHYgLTEwIgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU3NjEiCiAgICAgICBkPSJtIDM5MCwxMTE3LjUxOTYgdiA1IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU3NjMiCiAgICAgICBkPSJtIDQyMCwxMTE3LjUxOTYgdiA1IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU3NjUiCiAgICAgICBkPSJtIDQ1MCwxMTEyLjUxOTYgdiAxMCIKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg1NzY3IgogICAgICAgZD0ibSA0ODAsMTExNy41MTk2IHYgNSIKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg1NzY5IgogICAgICAgZD0ibSA1MTAsMTExNy41MTk2IHYgNSIKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg1NzcxIgogICAgICAgZD0ibSA1NDAsMTExMi41MTk2IHYgMTAiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTc3MyIKICAgICAgIGQ9Im0gNTcwLDExMTcuNTE5NiB2IDUiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTc3NSIKICAgICAgIGQ9Im0gNjAwLDExMTcuNTE5NiB2IDUiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNTc3NyIKICAgICAgIGQ9Im0gNjMwLDExMTIuNTE5NiB2IDEwIgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU3NzkiCiAgICAgICBkPSJtIDY2MCwxMTE3LjUxOTYgdiA1IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDU3ODEiCiAgICAgICBkPSJtIDY5MCwxMTE3LjUxOTYgdiA1IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lIiAvPgogICAgPHRleHQKICAgICAgIGlkPSJ0ZXh0NTc4NyIKICAgICAgIHk9IjExMDYuNjAwOCIKICAgICAgIHg9IjcxNi4yMTE5MSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjEwLjY2NjY2Njk4cHg7ZmlsbDojZmZmZmZmIgogICAgICAgICB5PSIxMTA2LjYwMDgiCiAgICAgICAgIHg9IjcxNi4yMTE5MSIKICAgICAgICAgaWQ9InRzcGFuNTc4MyIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+TjwvdHNwYW4+PHRzcGFuCiAgICAgICAgIGlkPSJ0c3BhbjU3ODUiCiAgICAgICAgIHk9IjExNTYuNjAwOCIKICAgICAgICAgeD0iNzE2LjIxMTkxIgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIiAvPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgeD0iNDQ2LjIxMTkxIgogICAgICAgeT0iMTEwNi42MDA4IgogICAgICAgaWQ9InRleHQ1NzkzIj48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuNTc4OSIKICAgICAgICAgeD0iNDQ2LjIxMTkxIgogICAgICAgICB5PSIxMTA2LjYwMDgiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6MTAuNjY2NjY2OThweDtmaWxsOiNmZmZmZmYiPkU8L3RzcGFuPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICB4PSI0NDYuMjExOTEiCiAgICAgICAgIHk9IjExNTYuNjAwOCIKICAgICAgICAgaWQ9InRzcGFuNTc5MSIgLz48L3RleHQ+CiAgICA8dGV4dAogICAgICAgaWQ9InRleHQ1Nzk5IgogICAgICAgeT0iMTEwNi42MDA4IgogICAgICAgeD0iNTM2LjIxMTkxIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6MTAuNjY2NjY2OThweDtmaWxsOiNmZmZmZmYiCiAgICAgICAgIHk9IjExMDYuNjAwOCIKICAgICAgICAgeD0iNTM2LjIxMTkxIgogICAgICAgICBpZD0idHNwYW41Nzk1IgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIj5TPC90c3Bhbj48dHNwYW4KICAgICAgICAgaWQ9InRzcGFuNTc5NyIKICAgICAgICAgeT0iMTE1Ni42MDA4IgogICAgICAgICB4PSI1MzYuMjExOTEiCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiIC8+PC90ZXh0PgogICAgPHRleHQKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICB4PSI2MjQuNzgzMzMiCiAgICAgICB5PSIxMTA2LjYwMDgiCiAgICAgICBpZD0idGV4dDU4MDUiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW41ODAxIgogICAgICAgICB4PSI2MjQuNzgzMzMiCiAgICAgICAgIHk9IjExMDYuNjAwOCIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToxMC42NjY2NjY5OHB4O2ZpbGw6I2ZmZmZmZiI+VzwvdHNwYW4+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIHg9IjYyNC43ODMzMyIKICAgICAgICAgeT0iMTE1Ni42MDA4IgogICAgICAgICBpZD0idHNwYW41ODAzIiAvPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/svg/horizon-bg.svg":
/*!********************************!*\
  !*** ./src/svg/horizon-bg.svg ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjgwMCIKICAgaGVpZ2h0PSI4MDAiCiAgIHZpZXdCb3g9IjAgMCAyMTEuNjY2NjYgMjExLjY2NjY4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJob3Jpem9uLWJnLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpbmtzY2FwZTpjb2xsZWN0PSJhbHdheXMiCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQ0NDkzIj4KICAgICAgPHN0b3AKICAgICAgICAgc3R5bGU9InN0b3AtY29sb3I6IzAwYTllMztzdG9wLW9wYWNpdHk6MSIKICAgICAgICAgb2Zmc2V0PSIwIgogICAgICAgICBpZD0ic3RvcDQ0ODkiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwZmY7c3RvcC1vcGFjaXR5OjEiCiAgICAgICAgIG9mZnNldD0iMSIKICAgICAgICAgaWQ9InN0b3A0NDkxIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaW5rc2NhcGU6Y29sbGVjdD0iYWx3YXlzIgogICAgICAgeGxpbms6aHJlZj0iI2xpbmVhckdyYWRpZW50NDQ5MyIKICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ0OTUiCiAgICAgICB4MT0iMjYuNDU4MzMyIgogICAgICAgeTE9IjI3MC41NDE2NiIKICAgICAgIHgyPSIyNi40NTgzMzIiCiAgICAgICB5Mj0iMjQ0LjA4MzMxIgogICAgICAgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiCiAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuMDAwMDAwMiwwLDAsNC4wMDAwMDA1LC02LjYwNDg5MTJlLTYsLTg5MS4wMDAwNikiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIxLjQxNDIxMzYiCiAgICAgaW5rc2NhcGU6Y3g9IjQ1NC4wMjA2OCIKICAgICBpbmtzY2FwZTpjeT0iNTAxLjM3NDkyIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDMyIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIj4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDQ0ODUiCiAgICAgICBzcGFjaW5neD0iMi42NDU4MzMzIgogICAgICAgc3BhY2luZ3k9IjIuNjQ1ODMzMyIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZSAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC04NS4zMzMzMDUpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDQ0OTUpO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyLjAwMDI1MDE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGlkPSJyZWN0NDQ4NyIKICAgICAgIHdpZHRoPSIyMTEuNjY2NjciCiAgICAgICBoZWlnaHQ9IjEwNS44MzMzNCIKICAgICAgIHg9IjAiCiAgICAgICB5PSI4NS4zMzMzMDUiCiAgICAgICByeT0iNS42ODQzNDA4ZS0xMyIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzdiMDAwNDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6Mi4wMDAyNDk2MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InJlY3Q0NDk3IgogICAgICAgd2lkdGg9IjIxMS42NjY2NyIKICAgICAgIGhlaWdodD0iMTA1LjgzMzMiCiAgICAgICB4PSIwIgogICAgICAgeT0iMTkxLjE2NjY3IgogICAgICAgcnk9IjUuNjg0MzM4NmUtMTMiIC8+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/svg/horizon-ticks.svg":
/*!***********************************!*\
  !*** ./src/svg/horizon-ticks.svg ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iODAwIgogICBoZWlnaHQ9IjgwMCIKICAgdmlld0JveD0iMCAwIDIxMS42NjY2NiAyMTEuNjY2NjgiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiCiAgIHNvZGlwb2RpOmRvY25hbWU9Imhvcml6b24tdGlja3Muc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMS40MTQyMTM2IgogICAgIGlua3NjYXBlOmN4PSIzNjQuNzEwNDEiCiAgICAgaW5rc2NhcGU6Y3k9IjM4OC43ODY1OCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJ0cnVlIgogICAgIHVuaXRzPSJweCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAzMiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjkiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJ0cnVlIj4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDQ0ODUiCiAgICAgICBzcGFjaW5neD0iMi42NDU4MzMzIgogICAgICAgc3BhY2luZ3k9IjIuNjQ1ODMzMyIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC04NS4zMzMzMDUpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjc5Mzc1MDAxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDAsMTkxLjE2NjY0IEggMjExLjY2NjY3IgogICAgICAgaWQ9InBhdGg0NDk5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzM1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMTAwLjU0MTY3LDE4NS44NzQ5NyBIIDExMS4xMjUiCiAgICAgICBpZD0icGF0aDQ1MjAiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSA5NS4yNTAwMDEsMTgwLjU4MzMgSCAxMTYuNDE2NjciCiAgICAgICBpZD0icGF0aDQ1MjIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAxMDAuNTQxNjcsMTc1LjI5MTY0IEggMTExLjEyNSIKICAgICAgIGlkPSJwYXRoNDUyNCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzNXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDk1LjI1MDAwMSwxNjkuOTk5OTcgSCAxMTYuNDE2NjciCiAgICAgICBpZD0icGF0aDQ1MjYiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAxMDAuNTQxNjcsMTk2LjQ1ODMgSCAxMTEuMTI1IgogICAgICAgaWQ9InBhdGg0NTI4IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzM1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gOTUuMjUwMDAxLDIwMS43NDk5NyBIIDExNi40MTY2NyIKICAgICAgIGlkPSJwYXRoNDUzMCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAxMDAuNTQxNjcsMjA3LjA0MTY0IEggMTExLjEyNSIKICAgICAgIGlkPSJwYXRoNDUzMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4yNjQ1ODMzNXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDk1LjI1MDAwMSwyMTIuMzMzMzEgMjEuMTY2NjY5LC0xZS01IgogICAgICAgaWQ9InBhdGg0NTM0IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjcuODY5MTc1NDNweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjE5NjcyOTM4OyIKICAgICAgIHg9IjkxLjI4NjI1NSIKICAgICAgIHk9IjE4MS4zMzY1MiIKICAgICAgIGlkPSJ0ZXh0NDUzOCI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjQ1MzYiCiAgICAgICAgIHg9IjkxLjI4NjI1NSIKICAgICAgICAgeT0iMTgxLjMzNjUyIgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjIuMDk4NDQ2NjFweDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4xOTY3MjkzODtmb250LXdlaWdodDpib2xkO2ZpbGw6I2ZmZmZmZjsiPjEwPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dAogICAgICAgaWQ9InRleHQ0NTYwIgogICAgICAgeT0iMTcwLjc1MzE5IgogICAgICAgeD0iOTEuMjg2MjU1IgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6Ny44NjkxNzU0M3B4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTk2NzI5Mzg7IgogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHRzcGFuCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6Mi4wOTg0NDY2MXB4O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjE5NjcyOTM4O2ZpbGw6I2ZmZmZmZjtmb250LXdlaWdodDpib2xkIgogICAgICAgICB5PSIxNzAuNzUzMTkiCiAgICAgICAgIHg9IjkxLjI4NjI1NSIKICAgICAgICAgaWQ9InRzcGFuNDU1OCIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+MjA8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICBpZD0idGV4dDQ1NjQiCiAgICAgICB5PSIyMDIuNTAzMTkiCiAgICAgICB4PSI5MS4yODYyNTUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo3Ljg2OTE3NTQzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4xOTY3MjkzODsiCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4KICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyLjA5ODQ0NjYxcHg7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTk2NzI5Mzg7Zm9udC13ZWlnaHQ6Ym9sZDtmaWxsOiNmZmZmZmY7IgogICAgICAgICB5PSIyMDIuNTAzMTkiCiAgICAgICAgIHg9IjkxLjI4NjI1NSIKICAgICAgICAgaWQ9InRzcGFuNDU2MiIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+MTA8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6Ny44NjkxNzU0M3B4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTk2NzI5Mzg7IgogICAgICAgeD0iOTEuMjg2MjU1IgogICAgICAgeT0iMjEzLjA4NjUzIgogICAgICAgaWQ9InRleHQ0NTY4Ij48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuNDU2NiIKICAgICAgICAgeD0iOTEuMjg2MjU1IgogICAgICAgICB5PSIyMTMuMDg2NTMiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6Mi4wOTg0NDY2MXB4O3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjE5NjcyOTM4O2ZvbnQtd2VpZ2h0OmJvbGQ7ZmlsbDojZmZmZmZmOyI+MjA8L3RzcGFuPjwvdGV4dD4KICAgIDxwYXRoCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg2Mzg5IgogICAgICAgZD0iTSAxMDAuNTQxNjcsMTY0LjcwODMxIEggMTExLjEyNSIKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzVweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDYzOTEiCiAgICAgICBkPSJNIDk1LjI1MDAwMSwxNTkuNDE2NjQgSCAxMTYuNDE2NjciCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzM1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6Ny44NjkxNzU0M3B4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTk2NzI5MzgiCiAgICAgICB4PSI5MS4yODYyNTUiCiAgICAgICB5PSIxNjAuMTY5ODYiCiAgICAgICBpZD0idGV4dDYzOTUiPjx0c3BhbgogICAgICAgICBzb2RpcG9kaTpyb2xlPSJsaW5lIgogICAgICAgICBpZD0idHNwYW42MzkzIgogICAgICAgICB4PSI5MS4yODYyNTUiCiAgICAgICAgIHk9IjE2MC4xNjk4NiIKICAgICAgICAgc3R5bGU9ImZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjIuMDk4NDQ2NjFweDtmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTk2NzI5MzgiPjMwPC90c3Bhbj48L3RleHQ+CiAgICA8cGF0aAogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNjM5NyIKICAgICAgIGQ9Ik0gMTAwLjU0MTY3LDIxNy42MjQ5NyBIIDExMS4xMjUiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzM1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNjM5OSIKICAgICAgIGQ9Im0gOTUuMjUwMDAxLDIyMi45MTY2NCAyMS4xNjY2NjksLTFlLTUiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjI2NDU4MzM1cHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDx0ZXh0CiAgICAgICBpZD0idGV4dDY0MDMiCiAgICAgICB5PSIyMjMuNjY5ODYiCiAgICAgICB4PSI5MS4yODYyNTUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo3Ljg2OTE3NTQzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4xOTY3MjkzOCIKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbgogICAgICAgICBzdHlsZT0iZm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6Mi4wOTg0NDY2MXB4O2ZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4xOTY3MjkzOCIKICAgICAgICAgeT0iMjIzLjY2OTg2IgogICAgICAgICB4PSI5MS4yODYyNTUiCiAgICAgICAgIGlkPSJ0c3BhbjY0MDEiCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiPjMwPC90c3Bhbj48L3RleHQ+CiAgPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/svg/pitch-ring.svg":
/*!********************************!*\
  !*** ./src/svg/pitch-ring.svg ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjIwMCIKICAgaGVpZ2h0PSIyMDAiCiAgIHZpZXdCb3g9IjAgMCAyMDAgMjAwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc3OTE4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjEgcjE1MzcxIgogICBzb2RpcG9kaTpkb2NuYW1lPSJwaXRjaC1yaW5nLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczc5MTIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjUuNiIKICAgICBpbmtzY2FwZTpjeD0iODcuODg2ODg2IgogICAgIGlua3NjYXBlOmN5PSIxNTguMTI3ODIiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6bWVhc3VyZS1zdGFydD0iMTAwLDEwMCIKICAgICBpbmtzY2FwZTptZWFzdXJlLWVuZD0iMTg2LjYwMiwxNTAiCiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpndWlkZS1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOnNuYXAtZ2xvYmFsPSJ0cnVlIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDMyIgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyOSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9InRydWUiPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iMTg2LjYwMiwxNTAiCiAgICAgICBvcmllbnRhdGlvbj0iMSwwIgogICAgICAgaWQ9Imd1aWRlNzkzMiIKICAgICAgIGlua3NjYXBlOmxvY2tlZD0iZmFsc2UiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iIgogICAgICAgaW5rc2NhcGU6Y29sb3I9InJnYigwLDAsMjU1KSIgLz4KICAgIDxzb2RpcG9kaTpndWlkZQogICAgICAgcG9zaXRpb249IjEzLjM5NywxNTAiCiAgICAgICBvcmllbnRhdGlvbj0iMSwwIgogICAgICAgaWQ9Imd1aWRlNzkzNCIKICAgICAgIGlua3NjYXBlOmxvY2tlZD0iZmFsc2UiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iIgogICAgICAgaW5rc2NhcGU6Y29sb3I9InJnYigwLDAsMjU1KSIgLz4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDg1MTkiCiAgICAgICBzcGFjaW5neD0iMi41IgogICAgICAgc3BhY2luZ3k9IjIuNSIKICAgICAgIGVtcHNwYWNpbmc9IjQiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNzkxNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMjQ0LjA4MzMyKSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuODk7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbGluZWNhcDpyb3VuZCIKICAgICAgIGlkPSJwYXRoODQ5NSIKICAgICAgIHNvZGlwb2RpOnR5cGU9ImFyYyIKICAgICAgIHNvZGlwb2RpOmN4PSIxMDAiCiAgICAgICBzb2RpcG9kaTpjeT0iMzQ0LjA4MzMxIgogICAgICAgc29kaXBvZGk6cng9IjgwIgogICAgICAgc29kaXBvZGk6cnk9IjgwIgogICAgICAgc29kaXBvZGk6c3RhcnQ9IjMuNjY1MTkxNCIKICAgICAgIHNvZGlwb2RpOmVuZD0iNS43NTk1ODY1IgogICAgICAgc29kaXBvZGk6b3Blbj0idHJ1ZSIKICAgICAgIGQ9Im0gMzAuNzE3OTY3LDMwNC4wODMzMiBhIDgwLDgwIDAgMCAxIDY5LjI4MjAzMSwtNDAuMDAwMDEgODAsODAgMCAwIDEgNjkuMjgyMDMyLDQwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTAwLDI2NC4wODMzMiB2IC01IgogICAgICAgaWQ9InBhdGg4NDk3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTg1IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDx1c2UKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIgogICAgICAgeGxpbms6aHJlZj0iI3BhdGg4NDk3IgogICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItNzMuNjEyMTU5IgogICAgICAgaWQ9InVzZTg0OTkiCiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSgtMzAsMTAwLDM0NC4wODMzMikiCiAgICAgICB3aWR0aD0iMTAwJSIKICAgICAgIGhlaWdodD0iMTAwJSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iNDIuNSIKICAgICAgIHN0eWxlPSJzdHJva2U6I2ZmZmZmZiIgLz4KICAgIDx1c2UKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIgogICAgICAgeGxpbms6aHJlZj0iI3VzZTg0OTkiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjczLjYxMjE1OSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTQyLjUiCiAgICAgICBpZD0idXNlODUwMSIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKC0zMCwxMDAsMzQ0LjA4MzMyKSIKICAgICAgIHdpZHRoPSIxMDAlIgogICAgICAgaGVpZ2h0PSIxMDAlIgogICAgICAgc3R5bGU9InN0cm9rZTojZmZmZmZmIiAvPgogICAgPHVzZQogICAgICAgeD0iMCIKICAgICAgIHk9IjAiCiAgICAgICB4bGluazpocmVmPSIjcGF0aDg0OTciCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii03My42MTIxNTkiCiAgICAgICBpZD0idXNlODUwMyIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKDMwLDEwMCwzNDQuMDgzMzIpIgogICAgICAgd2lkdGg9IjEwMCUiCiAgICAgICBoZWlnaHQ9IjEwMCUiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9Ii00Mi41IgogICAgICAgc3R5bGU9InN0cm9rZTojZmZmZmZmIiAvPgogICAgPHVzZQogICAgICAgeD0iMCIKICAgICAgIHk9IjAiCiAgICAgICB4bGluazpocmVmPSIjdXNlODUwMyIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTczLjYxMjE1OSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTQyLjUiCiAgICAgICBpZD0idXNlODUwNSIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKDMwLDEwMCwzNDQuMDgzMzIpIgogICAgICAgd2lkdGg9IjEwMCUiCiAgICAgICBoZWlnaHQ9IjEwMCUiCiAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmYiIC8+CiAgICA8dXNlCiAgICAgICB4PSIwIgogICAgICAgeT0iMCIKICAgICAgIHhsaW5rOmhyZWY9IiNwYXRoODQ5NyIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTgzLjcwODY1OSIKICAgICAgIGlkPSJ1c2U4NTA3IgogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTAsMTAwLDM0NC4wODMzMikiCiAgICAgICB3aWR0aD0iMTAwJSIKICAgICAgIGhlaWdodD0iMTAwJSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTE0Ljc2MDA5NSIKICAgICAgIHN0eWxlPSJzdHJva2U6I2ZmZmZmZiIgLz4KICAgIDx1c2UKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIgogICAgICAgeGxpbms6aHJlZj0iI3VzZTg1MDciCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9Ii0yOS4wNzE3MTIiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii03OS44NzM4NzMiCiAgICAgICBpZD0idXNlODUwOSIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKDEwLDEwMCwzNDQuMDgzMzIpIgogICAgICAgd2lkdGg9IjEwMCUiCiAgICAgICBoZWlnaHQ9IjEwMCUiCiAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmYiIC8+CiAgICA8dXNlCiAgICAgICB4PSIwIgogICAgICAgeT0iMCIKICAgICAgIHhsaW5rOmhyZWY9IiNwYXRoODQ5NyIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTgzLjcwODY1OSIKICAgICAgIGlkPSJ1c2U4NTExIgogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTEwLDEwMCwzNDQuMDgzMzIpIgogICAgICAgd2lkdGg9IjEwMCUiCiAgICAgICBoZWlnaHQ9IjEwMCUiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjE0Ljc2MDA5NSIKICAgICAgIHN0eWxlPSJzdHJva2U6I2ZmZmZmZiIgLz4KICAgIDx1c2UKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIgogICAgICAgeGxpbms6aHJlZj0iI3VzZTg1MTEiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjI5LjA3MTcxMiIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTc5Ljg3Mzg3MyIKICAgICAgIGlkPSJ1c2U4NTEzIgogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoLTEwLDEwMCwzNDQuMDgzMzIpIgogICAgICAgd2lkdGg9IjEwMCUiCiAgICAgICBoZWlnaHQ9IjEwMCUiCiAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmYiIC8+CiAgICA8dXNlCiAgICAgICB4PSIwIgogICAgICAgeT0iMCIKICAgICAgIHhsaW5rOmhyZWY9IiNwYXRoODQ5NyIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTYwLjEwNDA3NiIKICAgICAgIGlkPSJ1c2U4NTE1IgogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoNDUsMTAwLDM0NC4wODMzMikiCiAgICAgICB3aWR0aD0iMTAwJSIKICAgICAgIGhlaWdodD0iMTAwJSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTYwLjEwNDA3NiIKICAgICAgIHN0eWxlPSJzdHJva2U6I2ZmZmZmZiIgLz4KICAgIDx1c2UKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIgogICAgICAgeGxpbms6aHJlZj0iI3VzZTg1MTUiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii02MC4xMDQwNzYiCiAgICAgICBpZD0idXNlODUxNyIKICAgICAgIHRyYW5zZm9ybT0icm90YXRlKC05MCwxMDAsMzQ0LjA4MzMyKSIKICAgICAgIHdpZHRoPSIxMDAlIgogICAgICAgaGVpZ2h0PSIxMDAlIgogICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSI2MC4xMDQwNzYiCiAgICAgICBzdHlsZT0ic3Ryb2tlOiNmZmZmZmYiIC8+CiAgICA8dGV4dAogICAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjIyLjQzNjU3MzAzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NjA5MTQzNCIKICAgICAgIHg9Ii04OS42NjQwMjQiCiAgICAgICB5PSIyNjEuMDA1NjgiCiAgICAgICBpZD0idGV4dDU3MTMiCiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSgtMzApIgogICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSI0NSIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTc2Ljk2NDI4NSI+PHRzcGFuCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICAgIGlkPSJ0c3BhbjU3MTEiCiAgICAgICAgIHg9Ii04OS42NjQwMjQiCiAgICAgICAgIHk9IjI2MS4wMDU2OCIKICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZTo1Ljk4MzA4NjExcHg7ZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU2MDkxNDM0Ij4zMDwvdHNwYW4+PC90ZXh0PgogICAgPHRleHQKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iLTg5LjE1MzAyNyIKICAgICAgIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iMC40ODg5OTk1NyIKICAgICAgIGlkPSJ0ZXh0NTcxNyIKICAgICAgIHk9IjI1Ny4wNTM5NiIKICAgICAgIHg9Ijk4LjExNjYiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToyMi40MzY1NzMwM3B4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTYwOTE0MzQiCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4KICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZTo1Ljk4MzA4NjExcHg7ZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU2MDkxNDM0IgogICAgICAgICB5PSIyNTcuMDUzOTYiCiAgICAgICAgIHg9Ijk4LjExNjYiCiAgICAgICAgIGlkPSJ0c3BhbjU3MTUiCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiPjA8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MjIuNDM2NTczMDNweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU2MDkxNDM0IgogICAgICAgeD0iMjU0LjM2NTA0IgogICAgICAgeT0iMTYwLjkxOTkyIgogICAgICAgaWQ9InRleHQ1NzIxIgogICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSItNDQuMTUzMDMyIgogICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItNzcuNDUzMjg5IgogICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMzApIj48dHNwYW4KICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSIKICAgICAgICAgaWQ9InRzcGFuNTcxOSIKICAgICAgICAgeD0iMjU0LjM2NTA0IgogICAgICAgICB5PSIxNjAuOTE5OTIiCiAgICAgICAgIHN0eWxlPSJmb250LXNpemU6NS45ODMwODYxMXB4O2ZpbGw6I2ZmZmZmZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NjA5MTQzNCI+MzA8L3RzcGFuPjwvdGV4dD4KICAgIDx0ZXh0CiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSg2MCkiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii00NS4wMDAwMDMiCiAgICAgICBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9Ii03Ni45NjQyOSIKICAgICAgIGlkPSJ0ZXh0NTcyNSIKICAgICAgIHk9Ii0xLjYzNzM3OTQiCiAgICAgICB4PSIzNDMuNjU0NDgiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToyMi40MzY1NzMwM3B4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTYwOTE0MzQiCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4KICAgICAgICAgc3R5bGU9ImZvbnQtc2l6ZTo1Ljk4MzA4NjExcHg7ZmlsbDojZmZmZmZmO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjU2MDkxNDM0IgogICAgICAgICB5PSItMS42MzczNzk0IgogICAgICAgICB4PSIzNDMuNjU0NDgiCiAgICAgICAgIGlkPSJ0c3BhbjU3MjMiCiAgICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiPjYwPC90c3Bhbj48L3RleHQ+CiAgICA8dGV4dAogICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItNDQuMTUzMDIxIgogICAgICAgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSI3Ny40NTMyODQiCiAgICAgICB0cmFuc2Zvcm09InJvdGF0ZSgtNjApIgogICAgICAgaWQ9InRleHQ1NzI5IgogICAgICAgeT0iMTcxLjcxNjIzIgogICAgICAgeD0iLTI1Mi4yMjEzMyIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjIyLjQzNjU3MzAzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC41NjA5MTQzNCIKICAgICAgIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbgogICAgICAgICBzdHlsZT0iZm9udC1zaXplOjUuOTgzMDg2MTFweDtmaWxsOiNmZmZmZmY7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTYwOTE0MzQiCiAgICAgICAgIHk9IjE3MS43MTYyMyIKICAgICAgICAgeD0iLTI1Mi4yMjEzMyIKICAgICAgICAgaWQ9InRzcGFuNTcyNyIKICAgICAgICAgc29kaXBvZGk6cm9sZT0ibGluZSI+NjA8L3RzcGFuPjwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/svg/plane-indicator.svg":
/*!*************************************!*\
  !*** ./src/svg/plane-indicator.svg ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMjAwIgogICBoZWlnaHQ9IjIwMCIKICAgdmlld0JveD0iMCAwIDIwMCAyMDAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzc2NDIiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMSByMTUzNzEiCiAgIHNvZGlwb2RpOmRvY25hbWU9InBsYW5lLWluZGljYXRvci5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM3NjM2IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIzLjk1OTc5OCIKICAgICBpbmtzY2FwZTpjeD0iMTExLjE0NDExIgogICAgIGlua3NjYXBlOmN5PSIxMjEuODkxNzYiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6c25hcC1nbG9iYWw9InRydWUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMzIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI5IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNzY0NCIKICAgICAgIHNwYWNpbmd4PSIxMCIKICAgICAgIHNwYWNpbmd5PSIxMCIgLz4KICA8L3NvZGlwb2RpOm5hbWVkdmlldz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3NjM5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZSAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yNDQuMDgzMzIpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmYwMDAwO3N0cm9rZS13aWR0aDozLjc3OTUyNzU2O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDcwLDM1NC4wODMzMiAzMCwtMTAgMzAsMTAiCiAgICAgICBpZD0icGF0aDc2NDYiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZjAwMDA7c3Ryb2tlLXdpZHRoOjMuNzc5NTI3NTY7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMCwzNDQuMDgzMzIgSCAzMCIKICAgICAgIGlkPSJwYXRoNzY0OCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmMDAwMDtzdHJva2Utd2lkdGg6My43Nzk1Mjc1NjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxNzAsMzQ0LjA4MzMyIGggMzAiCiAgICAgICBpZD0icGF0aDc2NTAiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZjAwMDA7c3Ryb2tlLXdpZHRoOjEuMzM2MjY0ODU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTAwLDI2NC4wODMzMiAtMTAsMTAgaCAyMCB6IgogICAgICAgaWQ9InBhdGg3Njc3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/svg/vertical-gauge.svg":
/*!************************************!*\
  !*** ./src/svg/vertical-gauge.svg ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iNTAiCiAgIGhlaWdodD0iMjAwIgogICB2aWV3Qm94PSIwIDAgMTMuMjI5MTY2IDUyLjkxNjY2OCIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNDU1OSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi4xIHIxNTM3MSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idmVydGljYWwtZ2F1Z2Uuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNDU1MyIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMy45NTk3OTgiCiAgICAgaW5rc2NhcGU6Y3g9IjM4Ljk4MDc3MiIKICAgICBpbmtzY2FwZTpjeT0iOTcuODA1MjQ4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgdW5pdHM9InB4IgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9InRydWUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMzIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI5IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNTEwNCIKICAgICAgIHNwYWNpbmd4PSIyLjY0NTgzMzMiCiAgICAgICBzcGFjaW5neT0iMi42NDU4MzMzIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTQ1NTYiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI0NC4wODMzMSkiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNjY2NjY2M7c3Ryb2tlOiM4MDgwODA7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxO2ZpbGwtb3BhY2l0eTowLjYyNzQ1MSIKICAgICAgIGQ9Im0gMCwyNDQuMDgzMzEgaCAxMy4yMjkxNjcgdiA1Mi45MTY2NyBIIDAiCiAgICAgICBpZD0icGF0aDUxMDYiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMzMzMzMzM7c3Ryb2tlOiMzMzMzMzM7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAwLDI2Ny44OTU4MSBoIDEwLjU4MzMzMyBsIDIuNjQ1ODM0LDIuNjQ1ODMgLTIuNjQ1ODM0LDIuNjQ1ODQgSCAwIgogICAgICAgaWQ9InBhdGg1MTA4IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/matt/aiaa/react-drone-hud/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map