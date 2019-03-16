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

/***/ "./src/cursor.js":
/*!***********************!*\
  !*** ./src/cursor.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cursor =\n/*#__PURE__*/\nfunction () {\n  function Cursor() {\n    _classCallCheck(this, Cursor);\n\n    this.x = 0;\n    this.y = 0;\n  }\n\n  _createClass(Cursor, [{\n    key: \"draw\",\n    value: function draw(ctx, mid) {\n      ctx.save();\n      ctx.translate(mid.x + this.x, mid.y + this.y);\n      ctx.beginPath();\n      ctx.lineTo(0, -5);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(0, 5);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(-5, 0);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(5, 0);\n      ctx.stroke();\n      ctx.restore();\n    }\n  }]);\n\n  return Cursor;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\n\n//# sourceURL=webpack:///./src/cursor.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Enemy =\n/*#__PURE__*/\nfunction () {\n  function Enemy(id, vec) {\n    _classCallCheck(this, Enemy);\n\n    this.pos = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomEdgePos\"])();\n    this.vec = vec;\n  }\n\n  _createClass(Enemy, [{\n    key: \"move\",\n    value: function move() {\n      this.pos[0] += this.vec[0];\n      this.pos[1] += this.vec[1];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.beginPath();\n      ctx.arc(pos[0], pos[1], 10, 0, 2 * Math.PI);\n      ctx.fill();\n    }\n  }]);\n\n  return Enemy;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursor */ \"./src/cursor.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(canvas, ctx) {\n    _classCallCheck(this, Game);\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.width = canvas.width;\n    this.height = canvas.height;\n    this.mid = {\n      x: Math.floor(canvas.width / 2),\n      y: Math.floor(canvas.height / 2)\n    };\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.mid);\n    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.score = 0;\n    this.lasers = null;\n    this.enemies = [];\n    this.eid = 1;\n  }\n\n  _createClass(Game, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      setInterval(this.tick.bind(this), 20);\n      this.canvas.addEventListener(\"mousemove\", function (e) {\n        // from https://codepen.io/chrisjaime/pen/lcEpn\n        var rect = _this.canvas.getBoundingClientRect();\n\n        _this.cursor.x = e.clientX - rect.left - _this.canvas.width / 2;\n        _this.cursor.y = e.clientY - rect.top - _this.canvas.height / 2;\n      });\n      this.canvas.addEventListener(\"click\", function (e) {\n        var laser = new _laser__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_this.mid, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(_this.cursor));\n        _this.laser = laser;\n      });\n      setTimeout(function () {\n        enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_4__[\"default\"]());\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.ctx.clearRect(0, 0, this.width, this.height);\n      var rot = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(this.cursor) + Math.PI / 2;\n      this.player.draw(this.ctx, rot);\n      this.cursor.draw(this.ctx, this.mid);\n      if (this.laser) this.laser.draw(this.ctx);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      if (this.laser) {\n        this.laser.len += this.laser.vel;\n        this.laser.duration--;\n        if (this.laser.duration === 0) this.laser = null;\n      }\n\n      this.render();\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext('2d');\n  var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n  game.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Laser =\n/*#__PURE__*/\nfunction () {\n  function Laser(pos, direc) {\n    _classCallCheck(this, Laser);\n\n    this.len = 0;\n    this.vel = 100;\n    this.direc = direc;\n    this.duration = 10;\n    this.pos = {\n      x: pos.x + Math.cos(this.direc) * 22,\n      y: pos.y + Math.sin(this.direc) * 22\n    };\n  }\n\n  _createClass(Laser, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.beginPath();\n      ctx.moveTo(this.pos.x, this.pos.y);\n      ctx.lineWidth = 3;\n      ctx.strokeStyle = \"#11e023\";\n      var diffY = Math.sin(this.direc) * this.len;\n      var diffX = Math.cos(this.direc) * this.len;\n      ctx.lineTo(this.pos.x + diffX, this.pos.y + diffY);\n      ctx.stroke();\n      ctx.restore();\n    }\n  }]);\n\n  return Laser;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laser);\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(pos) {\n    _classCallCheck(this, Player);\n\n    this.pos = pos;\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw(ctx, rot) {\n      ctx.fillstyle = \"#dee4ed\";\n      ctx.save();\n      ctx.translate(this.pos.x, this.pos.y);\n      ctx.rotate(rot);\n      ctx.beginPath();\n      ctx.lineTo(-10, 4);\n      ctx.lineTo(0, -22);\n      ctx.lineTo(10, 4);\n      ctx.lineTo(0, 0);\n      ctx.fill();\n      ctx.restore();\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: calculateTheta, randomEdgePos, randInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateTheta\", function() { return calculateTheta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomEdgePos\", function() { return randomEdgePos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randInt\", function() { return randInt; });\nvar calculateTheta = function calculateTheta(_ref) {\n  var x = _ref.x,\n      y = _ref.y;\n  return Math.atan2(y, x);\n};\nvar randomEdgePos = function randomEdgePos(width, height) {\n  var edges = ['top', 'bottom', 'left', 'right'];\n  var edge = edges[randInt(4)];\n\n  switch (edge) {\n    case 'top':\n      return [randInt(width), 0];\n\n    case 'bottom':\n      return [randInt(width), height];\n\n    case 'left':\n      return [0, randInt(height)];\n\n    case 'right':\n      return [width, randInt(height)];\n  }\n};\nvar randInt = function randInt(max) {\n  return Math.floor(Math.random() * max);\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });