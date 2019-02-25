(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["penetrate"] = factory();
	else
		root["penetrate"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./source/index.js
/* harmony default export */ var source = ({
  inserted: function inserted(bindEl) {
    var lastY = -1,
        findEl = function findEl(el) {
      // 查找滚动元素，取第一个overflow是auto或者scroll的元素
      if (el.nodeType !== 1) return null;
      var overflowAttrs = ['scroll', 'auto'],
          check = overflowAttrs.indexOf(window.getComputedStyle(el).overflow.toLowerCase()) > -1;
      if (check) return el;
      if (!el.hasChildNodes()) return null;

      for (var i = 0; i < el.childNodes.length; i++) {
        var result = findEl(el.childNodes[i]);

        if (result) {
          return result;
        }
      }

      return null;
    },
        el = null,
        isChildOfEl = function isChildOfEl(el, node) {
      if (el === node) return true;
      if (el.nodeType !== 1) return false;

      for (var i = 0, nodes = el.childNodes; i < nodes.length; i++) {
        if (node === nodes[i]) {
          return true;
        }

        if (isChildOfEl(nodes[i], node)) {
          return true;
        }
      }

      return false;
    };

    bindEl.addEventListener('touchmove', function (e) {
      // 如果触发touchmove的元素不是el，直接阻止，主要是处理滚动区域不是全屏的情况
      if (!el) {
        el = findEl(bindEl) || bindEl;
      }

      if (!isChildOfEl(el, e.target)) {
        e.preventDefault();
        return;
      }

      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight;

      if (scrollHeight === offsetHeight) {
        e.preventDefault();
        return;
      }

      var scrollTop = el.scrollTop,
          touchY = e.changedTouches[0].screenY,
          up = touchY <= lastY,
          // 手势往上滑动
      down = touchY >= lastY,
          arrivedTop = scrollTop <= 0,
          arrivedBottom = scrollHeight - scrollTop <= offsetHeight;

      if (lastY === -1) {
        lastY = touchY;
        return;
      }

      lastY = touchY;

      if (up && arrivedBottom) {
        e.preventDefault();
        return;
      }

      if (down && arrivedTop) {
        e.preventDefault();
        return;
      }
    });
    bindEl.addEventListener('touchend', function () {
      lastY = -1;
    });
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (source);



/***/ })

/******/ });
});
//# sourceMappingURL=penetrate.umd.js.map