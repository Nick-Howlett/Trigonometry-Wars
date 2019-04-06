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

/***/ "./src/collisions.js":
/*!***************************!*\
  !*** ./src/collisions.js ***!
  \***************************/
/*! exports provided: samePoint, lineCircleCollision, lineLineCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"samePoint\", function() { return samePoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineCircleCollision\", function() { return lineCircleCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineLineCollision\", function() { return lineLineCollision; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\nvar samePoint = function samePoint(p1, p2) {\n  return p1.x === p2.x && p1.y === p2.y;\n}; //https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm\n\nvar lineCircleCollision = function lineCircleCollision(line, center, radius) {\n  var lineVec = line.vectorize();\n  var startToCenter = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](center, line.p);\n  var a = lineVec.dot(lineVec);\n  var b = 2 * startToCenter.dot(lineVec);\n  var c = startToCenter.dot(startToCenter) - radius * radius;\n  var discrim = b * b - 4 * a * c;\n\n  if (discrim > 0) {\n    discrim = Math.sqrt(discrim);\n    var t1 = (-b - discrim) / (2 * a);\n    var t2 = (-b + discrim) / (2 * a);\n\n    if (t1 >= 0 && t1 <= 1) {\n      return true;\n    } else if (t2 >= 0 && t2 <= 1) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  return false;\n}; //https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect\n\nvar lineLineCollision = function lineLineCollision(line1, line2) {\n  var r = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](line1.q, line1.p);\n  var s = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](line2.q, line2.p);\n  var startVec = new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](line2.p, line1.p);\n  var num = startVec.cross(r);\n  var denom = r.cross(s);\n\n  if (num === 0 && denom === 0) {\n    if (samePoint(line1.p, line2.p) || samePoint(line1.p, line2.q) || samePoint(line1.q, line2.p) || samePoint(line1.q, line2.q)) {\n      //lines literally start or end at same point\n      return 0.1;\n    } else {\n      if (line1.p.x - line2.p.x < 0 && line1.p.x - line2.q.x < 0 && line1.q.x - line2.p.x < 0 && line1.q.x - line2.q.x < 0 || line1.p.y - line2.p.y < 0 && line1.p.y - line2.q.y < 0 && line1.q.y - line2.p.y < 0 && line1.q.y - line2.q.y < 0) {\n        //Do lines overlap?\n        return 0.1;\n      }\n    }\n  } else if (denom === 0) {\n    //parallel\n    return false;\n  } else {\n    var u = num / denom;\n    var t = startVec.cross(s) / denom;\n\n    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {\n      return t;\n    } else {\n      return false;\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/collisions.js?");

/***/ }),

/***/ "./src/cursor.js":
/*!***********************!*\
  !*** ./src/cursor.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cursor =\n/*#__PURE__*/\nfunction () {\n  function Cursor() {\n    _classCallCheck(this, Cursor);\n\n    this.pos = {\n      x: 0,\n      y: 0\n    };\n  }\n\n  _createClass(Cursor, [{\n    key: \"updatePos\",\n    value: function updatePos(x, y) {\n      this.pos = {\n        x: x,\n        y: y\n      };\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.strokeStyle = \"white\";\n      ctx.translate(this.pos.x, this.pos.y);\n      ctx.beginPath();\n      ctx.lineTo(0, -5);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(0, 5);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(-5, 0);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(5, 0);\n      ctx.stroke();\n      ctx.restore();\n    }\n  }]);\n\n  return Cursor;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\n\n//# sourceURL=webpack:///./src/cursor.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object */ \"./src/moving-object.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Enemy =\n/*#__PURE__*/\nfunction (_MovingObject) {\n  _inherits(Enemy, _MovingObject);\n\n  function Enemy(id, pos, vel, direc) {\n    var _this;\n\n    _classCallCheck(this, Enemy);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Enemy).call(this, pos, vel, direc));\n    _this.id = id;\n    _this.radius = 10;\n    setInterval(function () {\n      return _this.vel += 0.5;\n    }, 5000);\n    return _this;\n  }\n\n  _createClass(Enemy, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.beginPath();\n      ctx.fillStyle = \"#11e023\";\n      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);\n      ctx.fill();\n    }\n  }]);\n\n  return Enemy;\n}(_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collisions */ \"./src/collisions.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ \"./src/line.js\");\n/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cursor */ \"./src/cursor.js\");\n/* harmony import */ var _intervals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intervals */ \"./src/intervals.js\");\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inputs */ \"./src/inputs.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(canvas, ctx, finishOverlay, scoreOverlay) {\n    _classCallCheck(this, Game);\n\n    this.finishOverlay = finishOverlay;\n    this.scoreOverlay = scoreOverlay;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.dims = [canvas.width, canvas.height];\n    this.edges = [new _line__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      x: 0,\n      y: 0\n    }, {\n      x: canvas.width,\n      y: 0\n    }), new _line__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      x: 0,\n      y: 0\n    }, {\n      x: 0,\n      y: canvas.width\n    }), new _line__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      x: canvas.width,\n      y: 0\n    }, {\n      x: canvas.width,\n      y: canvas.height\n    }), new _line__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      x: 0,\n      y: canvas.height\n    }, {\n      x: canvas.width,\n      y: canvas.height\n    })];\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      x: canvas.width / 2,\n      y: canvas.height / 2\n    }, 0, 0);\n    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    this.score = 0;\n    this.laser = null;\n    this.enemySpeed = 1;\n    this.entities = [this.player];\n  }\n\n  _createClass(Game, [{\n    key: \"start\",\n    value: function start() {\n      this.intervals = _intervals__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bind(this)();\n      _inputs__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bind(this)();\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      this.intervals.forEach(function (interval) {\n        return clearInterval(interval);\n      });\n      this.canvas.className = \"inactive\";\n      this.finishOverlay.className = \"overlay game-over\";\n      var scoreSpan = document.getElementById('score');\n      scoreSpan.innerHTML = \"\";\n      var score = document.createTextNode(\"Your Score was: \".concat(this.score));\n      scoreSpan.appendChild(score);\n    }\n  }, {\n    key: \"check_collisions\",\n    value: function check_collisions() {\n      var _this = this;\n\n      this.entities.slice(1).forEach(function (enemy) {\n        if (_this.laser) {\n          var pos = _this.laser.pos;\n\n          _this.laser.vecs.forEach(function (vector, i) {\n            if (Object(_collisions__WEBPACK_IMPORTED_MODULE_2__[\"lineCircleCollision\"])(vector, enemy.pos, enemy.radius)) {\n              delete _this.entities[_this.entities.indexOf(enemy)];\n              _this.score += 100 * i + 1;\n            }\n\n            pos = vector;\n          });\n        }\n\n        if (_this.player.is_collided(enemy)) _this.gameOver();\n      });\n\n      if (this.laser) {\n        var min = 10;\n        var min_edge = null;\n\n        for (var i = 0; i < this.edges.length; i++) {\n          var laser = this.laser.vecs[this.laser.vecs.length - 1];\n          var edge = this.edges[i];\n          var t = Object(_collisions__WEBPACK_IMPORTED_MODULE_2__[\"lineLineCollision\"])(laser, edge);\n\n          if (typeof t === \"number\" && t < min) {\n            min = t;\n            min_edge = edge;\n          }\n        }\n\n        if (min_edge) {\n          var _laser = this.laser.grow(min);\n\n          this.laser.reflect(_laser, min_edge);\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      this.scoreOverlay.innerHTML = \"\".concat(this.score);\n      this.ctx.clearRect(0, 0, this.dims[0], this.dims[1]);\n      if (this.laser) this.laser.draw(this.ctx);\n      this.cursor.draw(this.ctx);\n      this.entities.forEach(function (entity) {\n        return entity.draw(_this2.ctx);\n      });\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      var _this3 = this;\n\n      if (this.laser) {\n        this.laser.grow(3);\n        this.laser.fade();\n        if (this.laser.is_finished()) this.laser = null;\n      }\n\n      this.entities.forEach(function (entity) {\n        if (entity === _this3.player) entity.rotate(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(_this3.player.pos, _this3.cursor.pos));else entity.rotate(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(_this3.player.pos, entity.pos));\n        entity.move();\n      });\n      this.player.calculateLines();\n      if (this.w) this.player.accelerate(-3);else this.player.decelerate();\n      this.check_collisions();\n      this.score++;\n      this.render();\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var background = document.getElementById(\"background-canvas\");\n  drawBackground(background);\n  var ctx = canvas.getContext('2d');\n  var overlays = Array.from(document.getElementsByClassName('overlay'));\n  var gameOver = document.getElementById('game-over');\n  var scoreOverlay = document.getElementById('score-overlay');\n  var play = Array.from(document.getElementsByClassName('play-button'));\n  play.forEach(function (button) {\n    button.addEventListener(\"click\", function () {\n      var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, gameOver, scoreOverlay);\n      game.start();\n      overlays.forEach(function (overlay) {\n        return overlay.className = \"overlay hidden\";\n      });\n      canvas.className = \"active\";\n    });\n  });\n});\n\nvar drawBackground = function drawBackground(canvas) {\n  var width = canvas.width;\n  var height = canvas.height;\n  var ctx = canvas.getContext('2d');\n  ctx.fillRect(0, 0, width, height);\n  ctx.strokeStyle = \"#00ff00\";\n  ctx.lineWidth = .1;\n\n  for (var i = 0; i < canvas.width; i += Math.floor(canvas.width / 12)) {\n    ctx.moveTo(i, 0);\n    ctx.lineTo(i, height);\n    ctx.stroke();\n  }\n\n  for (var _i = 0; _i < canvas.height; _i += Math.floor(canvas.height / 8)) {\n    ctx.moveTo(0, _i);\n    ctx.lineTo(width, _i);\n    ctx.stroke();\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/inputs.js":
/*!***********************!*\
  !*** ./src/inputs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nfunction startInputs() {\n  var _this = this;\n\n  //moving the cursor\n  this.canvas.addEventListener(\"mousemove\", function (e) {\n    // from https://codepen.io/chrisjaime/pen/lcEpn\n    var rect = _this.canvas.getBoundingClientRect();\n\n    _this.cursor.updatePos(e.clientX - rect.left, e.clientY - rect.top);\n  }); //listeners for charging and firing laser\n\n  this.clickListener = document.addEventListener(\"mousedown\", function (e) {\n    var chargeTime = 500;\n    var i = 0;\n    _this.chargeInterval = setInterval(function () {\n      _this.player.chargeLaser(i / chargeTime);\n\n      i += 10;\n    }, 10);\n  });\n  this.mouseUpListener = document.addEventListener(\"mouseup\", function (e) {\n    if (_this.chargeInterval) {\n      clearInterval(_this.chargeInterval);\n    }\n\n    if (_this.player.charged()) {\n      var theta = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(_this.player.pos, _this.cursor.pos);\n      var offsetVec = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateVector\"])(theta, -30);\n      _this.laser = new _laser__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        x: _this.player.pos.x + offsetVec.x,\n        y: _this.player.pos.y + offsetVec.y\n      }, theta);\n    }\n\n    _this.player.discharge();\n  }); //forward movement toggle\n\n  document.addEventListener(\"keydown\", function (e) {\n    if (e.key === \"w\") _this.w = true;\n  });\n  document.addEventListener(\"keyup\", function (e) {\n    if (e.key === \"w\") _this.w = false;\n  });\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (startInputs);\n\n//# sourceURL=webpack:///./src/inputs.js?");

/***/ }),

/***/ "./src/intervals.js":
/*!**************************!*\
  !*** ./src/intervals.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\nfunction runIntervals() {\n  var _this = this;\n\n  var intervals = [];\n  intervals.push(setInterval(this.tick.bind(this), 20));\n  intervals.push(setInterval(function () {\n    var startPos = _utils__WEBPACK_IMPORTED_MODULE_1__[\"randomEdgePos\"].apply(void 0, _toConsumableArray(_this.dims));\n\n    _this.entities.push(new _enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.eid, startPos, _this.enemySpeed, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(startPos, _this.player.pos)));\n  }, 1000));\n  intervals.push(setInterval(function () {\n    return _this.enemySpeed += 0.2;\n  }, 4000));\n  return intervals;\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (runIntervals);\n\n//# sourceURL=webpack:///./src/intervals.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ \"./src/line.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Laser =\n/*#__PURE__*/\nfunction () {\n  function Laser(pos, theta) {\n    _classCallCheck(this, Laser);\n\n    this.pos = pos;\n    this.duration = 15;\n    this.theta = theta;\n    this.reflections = 4;\n    var vec = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"calculateVector\"])(theta, -100);\n    this.vecs = [new _line__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.pos, {\n      x: this.pos.x + vec.x,\n      y: this.pos.y + vec.y\n    })];\n  }\n\n  _createClass(Laser, [{\n    key: \"is_finished\",\n    value: function is_finished() {\n      return this.duration <= 0;\n    }\n  }, {\n    key: \"fade\",\n    value: function fade() {\n      this.duration--;\n    }\n  }, {\n    key: \"reflect\",\n    value: function reflect(laserLine, reflectLine) {\n      if (this.reflections === 0) {\n        this.duration = Math.min(this.duration, 6);\n        return; //stop if we are out of reflections\n      }\n\n      var laserVec = laserLine.vectorize();\n      var norm = reflectLine.normalVec().normalize();\n      var reflectVec = laserVec.subtract(norm.scale(2 * laserVec.dot(norm)));\n      var currentVec = this.vecs[this.vecs.length - 1];\n      var newLine = reflectVec.createLine(currentVec.q);\n      var laserNormalized = reflectVec.normalize();\n      newLine.p.x += laserNormalized.x;\n      newLine.p.y += laserNormalized.y;\n      this.vecs.push(newLine);\n      this.reflections--;\n    }\n  }, {\n    key: \"grow\",\n    value: function grow(factor) {\n      var current = this.vecs[this.vecs.length - 1];\n      var point = current.p;\n      this.vecs[this.vecs.length - 1] = current.vectorize().scale(factor).createLine(point);\n      return this.vecs[this.vecs.length - 1];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.beginPath();\n      ctx.lineWidth = 3;\n      ctx.strokeStyle = \"#1aff1a\";\n      ctx.shadowColor = \"#1aff1a\";\n      ctx.shadowOffsetX = 0;\n      ctx.shadowOffsetY = 0;\n      ctx.shadowBlur = 5;\n      this.vecs.forEach(function (vector) {\n        ctx.moveTo(vector.p.x, vector.p.y);\n        ctx.lineTo(vector.q.x, vector.q.y);\n      });\n      ctx.stroke();\n      ctx.restore();\n    }\n  }]);\n\n  return Laser;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laser);\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/line.js":
/*!*********************!*\
  !*** ./src/line.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return line; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar line =\n/*#__PURE__*/\nfunction () {\n  function line(p, q) {\n    _classCallCheck(this, line);\n\n    this.p = p;\n    this.q = q;\n  }\n\n  _createClass(line, [{\n    key: \"len\",\n    value: function len() {\n      return Math.sqrt(Math.pow(this.p.x - this.q.x, 2) + Math.pow(this.p.y - this.q.y, 2));\n    }\n  }, {\n    key: \"normalVec\",\n    value: function normalVec() {\n      return new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        x: 0,\n        y: 0\n      }, {\n        x: -(this.q.y - this.p.y),\n        y: this.q.x - this.p.x\n      });\n    }\n  }, {\n    key: \"vectorize\",\n    value: function vectorize() {\n      return new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.p, this.q);\n    }\n  }]);\n\n  return line;\n}();\n\n\n\n//# sourceURL=webpack:///./src/line.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar MovingObject =\n/*#__PURE__*/\nfunction () {\n  function MovingObject(pos, vel, direc) {\n    _classCallCheck(this, MovingObject);\n\n    this.pos = pos;\n    this.vel = vel;\n    this.direc = direc;\n  }\n\n  _createClass(MovingObject, [{\n    key: \"accelerate\",\n    value: function accelerate(accel) {\n      this.vel = accel;\n    }\n  }, {\n    key: \"decelerate\",\n    value: function decelerate() {\n      this.vel = 0;\n    }\n  }, {\n    key: \"rotate\",\n    value: function rotate(rot) {\n      this.direc = rot;\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var vec = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"calculateVector\"])(this.direc, this.vel);\n      this.pos.x += vec.x;\n      this.pos.y += vec.y;\n    }\n  }]);\n\n  return MovingObject;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving-object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object */ \"./src/moving-object.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ \"./src/line.js\");\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collisions */ \"./src/collisions.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction (_MovingObject) {\n  _inherits(Player, _MovingObject);\n\n  function Player(pos, vel, direc) {\n    var _this;\n\n    _classCallCheck(this, Player);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, pos, vel, direc));\n    _this.radius = 10;\n    _this.points = [{\n      x: -10,\n      y: 4\n    }, {\n      x: 0,\n      y: -22\n    }, {\n      x: 10,\n      y: 4\n    }];\n    _this.charge = 0;\n\n    _this.calculateLines();\n\n    return _this;\n  }\n\n  _createClass(Player, [{\n    key: \"is_collided\",\n    value: function is_collided(enemy) {\n      for (var i = 0; i < this.lines.length; i++) {\n        if (Object(_collisions__WEBPACK_IMPORTED_MODULE_4__[\"lineCircleCollision\"])(this.lines[i], enemy.pos, enemy.radius)) return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"laserCollision\",\n    value: function laserCollision(laser) {\n      for (var i = 0; i < this.lines.length; i++) {\n        var t = Object(_collisions__WEBPACK_IMPORTED_MODULE_4__[\"lineLineCollision\"])(laser, this.lines[i]);\n        if (typeof t === \"number\") return t;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"chargeLaser\",\n    value: function chargeLaser(percent) {\n      if (percent > 1) percent = 1;\n      this.charge = percent;\n    }\n  }, {\n    key: \"charged\",\n    value: function charged() {\n      return this.charge === 1;\n    }\n  }, {\n    key: \"discharge\",\n    value: function discharge() {\n      this.charge = 0;\n    }\n  }, {\n    key: \"calculateLines\",\n    value: function calculateLines() {\n      var _this2 = this;\n\n      var x = this.pos.x;\n      var y = this.pos.y;\n      var points = this.points.map(function (point) {\n        var newPoint = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"rotatePoint\"])(point, _this2.direc - Math.PI / 2);\n        newPoint.x += x;\n        newPoint.y += y;\n        return newPoint;\n      });\n      points.unshift({\n        x: x,\n        y: y\n      });\n      points.push({\n        x: x,\n        y: y\n      });\n      this.lines = [];\n\n      for (var i = 0; i < points.length - 1; i++) {\n        this.lines.push(new _line__WEBPACK_IMPORTED_MODULE_1__[\"default\"](points[i], points[i + 1]));\n      }\n\n      var charge1 = new _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](points[1], points[2]);\n      var charge2 = new _vector__WEBPACK_IMPORTED_MODULE_2__[\"default\"](points[3], points[2]);\n      this.chargeLines = [charge1.scale(this.charge).createLine(points[1]), charge2.scale(this.charge).createLine(points[3])];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.fillStyle = \"#D0D0D0\";\n      ctx.beginPath();\n      ctx.moveTo(this.pos.x, this.pos.y);\n      this.lines.forEach(function (line) {\n        ctx.lineTo(line.q.x, line.q.y);\n      });\n      ctx.fill();\n      ctx.restore();\n      ctx.save();\n      ctx.strokeStyle = \"#1aff1a\";\n      ctx.shadowColor = \"#1aff1a\";\n      ctx.shadowOffsetX = 0;\n      ctx.shadowOffsetY = 0;\n      ctx.shadowBlur = 4;\n      ctx.lineWidth = 3;\n      this.chargeLines.forEach(function (line) {\n        ctx.beginPath();\n        ctx.moveTo(line.p.x, line.p.y);\n        ctx.lineTo(line.q.x, line.q.y);\n        ctx.stroke();\n      });\n      ctx.restore();\n    }\n  }]);\n\n  return Player;\n}(_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: calculateTheta, calculateVector, rotatePoint, randomEdgePos, randInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateTheta\", function() { return calculateTheta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateVector\", function() { return calculateVector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotatePoint\", function() { return rotatePoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomEdgePos\", function() { return randomEdgePos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randInt\", function() { return randInt; });\n/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ \"./src/vector.js\");\n\nvar calculateTheta = function calculateTheta(pos1, pos2) {\n  var diffX = pos1.x - pos2.x;\n  var diffY = pos1.y - pos2.y;\n  return Math.atan2(diffY, diffX);\n};\nvar calculateVector = function calculateVector(theta, vel) {\n  return new _vector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 0,\n    y: 0\n  }, {\n    x: Math.cos(theta) * vel,\n    y: Math.sin(theta) * vel\n  });\n};\nvar rotatePoint = function rotatePoint(point, rot) {\n  var ret = {};\n  ret.x = point.x * Math.cos(rot) - point.y * Math.sin(rot);\n  ret.y = point.y * Math.cos(rot) + point.x * Math.sin(rot);\n  return ret;\n};\nvar randomEdgePos = function randomEdgePos(width, height) {\n  var edges = ['top', 'bottom', 'left', 'right'];\n  var edge = edges[randInt(4)];\n\n  switch (edge) {\n    case 'top':\n      return {\n        x: randInt(width),\n        y: 0\n      };\n\n    case 'bottom':\n      return {\n        x: randInt(width),\n        y: height\n      };\n\n    case 'left':\n      return {\n        x: 0,\n        y: randInt(height)\n      };\n\n    case 'right':\n      return {\n        x: width,\n        y: randInt(height)\n      };\n  }\n};\nvar randInt = function randInt(max) {\n  return Math.floor(Math.random() * max);\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line */ \"./src/line.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Vector =\n/*#__PURE__*/\nfunction () {\n  function Vector(p, q) {\n    _classCallCheck(this, Vector);\n\n    this.x = q.x - p.x;\n    this.y = q.y - p.y;\n    this.coords = [this.x, this.y];\n  }\n\n  _createClass(Vector, [{\n    key: \"createLine\",\n    value: function createLine(point) {\n      return new _line__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        x: point.x,\n        y: point.y\n      }, {\n        x: point.x + this.x,\n        y: point.y + this.y\n      });\n    }\n  }, {\n    key: \"dot\",\n    value: function dot(vec) {\n      return this.x * vec.x + this.y * vec.y;\n    }\n  }, {\n    key: \"scale\",\n    value: function scale(scalar) {\n      this.x *= scalar;\n      this.y *= scalar;\n      return this;\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize() {\n      var mag = this.magnitude();\n      this.x /= mag;\n      this.y /= mag;\n      return this;\n    }\n  }, {\n    key: \"subtract\",\n    value: function subtract(vec) {\n      this.x -= vec.x;\n      this.y -= vec.y;\n      return this;\n    }\n  }, {\n    key: \"cross\",\n    value: function cross(vec) {\n      return this.x * vec.y - this.y * vec.x;\n    }\n  }, {\n    key: \"magnitude\",\n    value: function magnitude() {\n      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    }\n  }]);\n\n  return Vector;\n}();\n\n\n\n//# sourceURL=webpack:///./src/vector.js?");

/***/ })

/******/ });