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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cursor =\n/*#__PURE__*/\nfunction () {\n  function Cursor() {\n    _classCallCheck(this, Cursor);\n\n    this.pos = [0, 0];\n  }\n\n  _createClass(Cursor, [{\n    key: \"updatePos\",\n    value: function updatePos(x, y) {\n      this.pos = [x, y];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx, mid) {\n      ctx.save();\n      ctx.translate(mid[0] + this.pos[0], mid[1] + this.pos[1]);\n      ctx.beginPath();\n      ctx.lineTo(0, -5);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(0, 5);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(-5, 0);\n      ctx.lineTo(0, 0);\n      ctx.lineTo(5, 0);\n      ctx.stroke();\n      ctx.restore();\n    }\n  }]);\n\n  return Cursor;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\n\n//# sourceURL=webpack:///./src/cursor.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Enemy =\n/*#__PURE__*/\nfunction () {\n  function Enemy(id, dims) {\n    _classCallCheck(this, Enemy);\n\n    this.id = id;\n    this.radius = 10;\n    this.pos = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"relPosition\"])([dims[0] / 2, dims[1] / 2], Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"randomEdgePos\"])(dims[0], dims[1]));\n    var theta = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"calculateTheta\"])(this.pos);\n    this.vec = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"calculateVector\"])(theta, -4);\n  }\n\n  _createClass(Enemy, [{\n    key: \"move\",\n    value: function move() {\n      this.pos[0] += this.vec[0];\n      this.pos[1] += this.vec[1];\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx, mid) {\n      ctx.save();\n      ctx.translate(mid[0], mid[1]);\n      ctx.beginPath();\n      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n      ctx.fill();\n      ctx.restore();\n    }\n  }]);\n\n  return Enemy;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursor */ \"./src/cursor.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(canvas, ctx, finishOverlay, scoreOverlay) {\n    _classCallCheck(this, Game);\n\n    this.finishOverlay = finishOverlay;\n    this.scoreOverlay = scoreOverlay;\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.dims = [canvas.width, canvas.height];\n    this.mid = [canvas.width / 2, canvas.height / 2];\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.mid);\n    this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.score = 0;\n    this.laser = null;\n    this.enemies = [];\n  }\n\n  _createClass(Game, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      this.tickInterval = setInterval(this.tick.bind(this), 20);\n      this.canvas.addEventListener(\"mousemove\", function (e) {\n        // from https://codepen.io/chrisjaime/pen/lcEpn\n        var rect = _this.canvas.getBoundingClientRect();\n\n        _this.cursor.updatePos(e.clientX - rect.left - _this.canvas.width / 2, e.clientY - rect.top - _this.canvas.height / 2); //position relative to player position.\n\n      });\n      this.clickListener = this.canvas.addEventListener(\"click\", function (e) {\n        _this.laser = new _laser__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_this.mid, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(_this.cursor.pos));\n      });\n      this.spawnInterval = setInterval(function () {\n        _this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_this.eid, _this.dims, 20));\n      }, 1000);\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      clearInterval(this.tickInterval);\n      clearInterval(this.spawnInterval);\n      this.canvas.className = \"inactive\";\n      this.finishOverlay.className = \"overlay\";\n      this.finishOverlay.innerHTML += \"Your Score is: \".concat(this.score);\n    }\n  }, {\n    key: \"check_collisions\",\n    value: function check_collisions() {\n      var _this2 = this;\n\n      this.enemies.forEach(function (enemy) {\n        if (_this2.laser && Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"lineCircleCollision\"])([_this2.laser.pos, _this2.laser.vec], enemy.pos, enemy.radius)) {\n          delete _this2.enemies[_this2.enemies.indexOf(enemy)];\n          _this2.score += 100;\n        }\n\n        if (_this2.player.is_collided(enemy)) _this2.gameOver();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      this.scoreOverlay.innerHTML = \"\".concat(this.score);\n      this.ctx.clearRect(0, 0, this.dims[0], this.dims[1]);\n      var rot = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateTheta\"])(this.cursor.pos) + Math.PI / 2;\n      this.player.draw(this.ctx, rot);\n      if (this.laser) this.laser.draw(this.ctx);\n      this.cursor.draw(this.ctx, this.mid);\n      this.enemies.forEach(function (enemy) {\n        return enemy.draw(_this3.ctx, _this3.mid);\n      });\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      if (this.laser) {\n        this.laser.grow();\n        if (this.laser.is_finished()) this.laser = null;\n      }\n\n      this.enemies.forEach(function (enemy) {\n        return enemy.move();\n      });\n      this.check_collisions();\n      this.score++;\n      this.render();\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext('2d');\n  var overlays = Array.from(document.getElementsByClassName('overlay'));\n  var gameOver = document.getElementById('game-over');\n  var scoreOverlay = document.getElementById('score-overlay');\n  var play = Array.from(document.getElementsByClassName('play-button'));\n  play.forEach(function (button) {\n    button.addEventListener(\"click\", function () {\n      var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, gameOver, scoreOverlay);\n      game.start();\n      overlays.forEach(function (overlay) {\n        return overlay.className = \"overlay hidden\";\n      });\n      canvas.className = \"active\";\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Laser =\n/*#__PURE__*/\nfunction () {\n  function Laser(pos, theta) {\n    _classCallCheck(this, Laser);\n\n    this.pos = pos;\n    this.duration = 10;\n    this.vec = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"calculateVector\"])(theta, 100);\n  }\n\n  _createClass(Laser, [{\n    key: \"is_finished\",\n    value: function is_finished() {\n      return this.duration === 0;\n    }\n  }, {\n    key: \"grow\",\n    value: function grow() {\n      this.vec = this.vec.map(function (component) {\n        return component * 2;\n      });\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.beginPath();\n      ctx.moveTo(this.pos[0], this.pos[1]);\n      ctx.lineWidth = 3;\n      ctx.strokeStyle = \"#11e023\";\n      ctx.lineTo(this.pos[0] + this.vec[0], this.pos[1] + this.vec[1]);\n      ctx.stroke();\n      ctx.restore();\n    }\n  }]);\n\n  return Laser;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laser);\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(pos) {\n    _classCallCheck(this, Player);\n\n    this.pos = pos;\n    this.lines = [[-10, 4], [0, -22], [10, 4], [0, 0]];\n  }\n\n  _createClass(Player, [{\n    key: \"is_collided\",\n    value: function is_collided(enemy) {\n      var maxDist = enemy.radius + 10; //max distance at which the two are not colliding, enemy's radius and cricle of radius 20 around player.\n\n      var dist = Math.sqrt(enemy.pos[0] * enemy.pos[0] + enemy.pos[1] * enemy.pos[1]);\n\n      if (dist < maxDist) {\n        return true;\n      } // const lines = [[0, 0], ...this.lines];\n      // for(let i = 0; i < lines.length - 1; i++){\n      //     if(lineCircleCollision([lines[i], lines[i + 1]], enemy.pos, enemy.radius)){\n      //         return true;\n      //     }\n      // }\n\n\n      return false;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx, rot) {\n      ctx.fillstyle = \"#dee4ed\";\n      ctx.save();\n      ctx.translate(this.pos[0], this.pos[1]);\n      ctx.rotate(rot);\n      ctx.beginPath();\n      this.lines.forEach(function (pos) {\n        ctx.lineTo(pos[0], pos[1]);\n      });\n      ctx.fill();\n      ctx.restore();\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: calculateTheta, randomEdgePos, relPosition, randInt, calculateVector, dotProduct, lineCircleCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateTheta\", function() { return calculateTheta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomEdgePos\", function() { return randomEdgePos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"relPosition\", function() { return relPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randInt\", function() { return randInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateVector\", function() { return calculateVector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dotProduct\", function() { return dotProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineCircleCollision\", function() { return lineCircleCollision; });\nvar calculateTheta = function calculateTheta(pos) {\n  return Math.atan2(pos[1], pos[0]);\n};\nvar randomEdgePos = function randomEdgePos(width, height) {\n  var edges = ['top', 'bottom', 'left', 'right'];\n  var edge = edges[randInt(4)];\n\n  switch (edge) {\n    case 'top':\n      return [randInt(width), 0];\n\n    case 'bottom':\n      return [randInt(width), height];\n\n    case 'left':\n      return [0, randInt(height)];\n\n    case 'right':\n      return [width, randInt(height)];\n  }\n};\nvar relPosition = function relPosition(mid, pos) {\n  // make coordinates relative to midpoint\n  return [pos[0] - mid[0], pos[1] - mid[1]];\n};\nvar randInt = function randInt(max) {\n  return Math.floor(Math.random() * max);\n};\nvar calculateVector = function calculateVector(theta, vel) {\n  return [Math.cos(theta) * vel, Math.sin(theta) * vel];\n};\nvar dotProduct = function dotProduct(vec1, vec2) {\n  if (vec1.length != vec2.length) {\n    return null;\n  } else {\n    var sum = 0;\n\n    for (var i = 0; i < vec1.length; i++) {\n      sum += vec1[i] * vec2[i];\n    }\n\n    return sum;\n  }\n}; //https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm\n\nvar lineCircleCollision = function lineCircleCollision(line, center, radius) {\n  //line is of the form [[x1, y1], [x2, y2]]\n  var linePos = relPosition(line[0], line[0]);\n  var lineVec = [linePos[0] - line[1][0], linePos[1] - line[1][1]];\n  var posDiff = [linePos[0] - center[0], linePos[1] - center[1]];\n  var a = dotProduct(lineVec, lineVec);\n  var b = 2 * dotProduct(posDiff, lineVec);\n  var c = dotProduct(posDiff, posDiff) - radius * radius;\n  var discrim = b * b - 4 * a * c;\n  return discrim > 0;\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });