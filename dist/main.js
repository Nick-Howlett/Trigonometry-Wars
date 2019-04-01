/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\src\\\\game.js: Unexpected token (69:20)\\n\\n\\u001b[0m \\u001b[90m 67 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mscoreOverlay\\u001b[33m.\\u001b[39minnerHTML \\u001b[33m=\\u001b[39m \\u001b[32m`${this.score}`\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 68 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mctx\\u001b[33m.\\u001b[39mclearRect(\\u001b[35m0\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mdims[\\u001b[35m0\\u001b[39m]\\u001b[33m,\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mdims[\\u001b[35m1\\u001b[39m])\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 69 | \\u001b[39m        \\u001b[36mconst\\u001b[39m rot \\u001b[33m=\\u001b[39m \\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 70 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mplayer\\u001b[33m.\\u001b[39mdraw(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mctx\\u001b[33m,\\u001b[39m rot)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 71 | \\u001b[39m        \\u001b[36mif\\u001b[39m(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mlaser) \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mlaser\\u001b[33m.\\u001b[39mdraw(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mctx)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 72 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcursor\\u001b[33m.\\u001b[39mdraw(\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mctx\\u001b[33m,\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mmid)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3831:17)\\n    at Parser.unexpected (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5143:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6283:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5862:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseVar (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7880:26)\\n    at Parser.parseVarStatement (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7714:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7310:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7786:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6876:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6860:10)\\n    at Parser.parseMethod (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6804:10)\\n    at Parser.pushClassMethod (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8200:30)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8125:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8067:10)\\n    at withTopicForbiddingContext (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8022:14)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7150:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7999:10)\\n    at Parser.parseClass (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7973:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7289:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\Nick\\\\Vagrant\\\\trigonometry-wars\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7181:10)\");\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext('2d');\n  var overlays = Array.from(document.getElementsByClassName('overlay'));\n  var gameOver = document.getElementById('game-over');\n  var scoreOverlay = document.getElementById('score-overlay');\n  var play = Array.from(document.getElementsByClassName('play-button'));\n  play.forEach(function (button) {\n    button.addEventListener(\"click\", function () {\n      var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, gameOver, scoreOverlay);\n      game.start();\n      overlays.forEach(function (overlay) {\n        return overlay.className = \"overlay hidden\";\n      });\n      canvas.className = \"active\";\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });