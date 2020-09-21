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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/canvas/canvas.js":
/*!**********************************!*\
  !*** ./src/app/canvas/canvas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game.js */ \"./src/app/game/game.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ \"./src/app/utils.js\");\n/* harmony import */ var _snake_tail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake/tail.js */ \"./src/app/canvas/snake/tail.js\");\n/* harmony import */ var _snake_head_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snake/head.js */ \"./src/app/canvas/snake/head.js\");\n/* harmony import */ var _snake_body_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snake/body.js */ \"./src/app/canvas/snake/body.js\");\n\n\n\n\n\n\nvar printSnake = function printSnake() {\n  _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].body.forEach(function (piece, index) {\n    var xCoord = piece.x / _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"boardSize\"].x * _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width;\n    var yCoord = piece.y / _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"boardSize\"].y * _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height;\n    var color = index === 0 || index % 2 ? 'rgb(0, 102, 0)' : 'rgb(204, 204, 36)';\n\n    if (!piece.isFood || index === 0) {\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].beginPath();\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillStyle = color;\n\n      switch (index) {\n        case 0:\n          Object(_snake_head_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(xCoord, yCoord);\n          break;\n\n        case _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].body.length - 1:\n          Object(_snake_tail_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(xCoord, yCoord);\n          break;\n\n        default:\n          Object(_snake_body_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(xCoord, yCoord);\n          break;\n      }\n\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fill();\n    } else {\n      Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"printCircle\"])(xCoord, yCoord, color, _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] / 1.25);\n    }\n  });\n};\n\nvar printFood = function printFood() {\n  var xCoord = _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"foodPiece\"].coords.x / _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"boardSize\"].x * _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width;\n  var yCoord = _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"foodPiece\"].coords.y / _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"boardSize\"].y * _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height;\n  Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"printCircle\"])(xCoord, yCoord, 'red', _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] / 1.5);\n};\n\nvar draw = function draw() {\n  _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].clearRect(0, 0, _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width, _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height);\n  printSnake();\n  printFood();\n  window.requestAnimationFrame(draw);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (draw);\n\n//# sourceURL=webpack:///./src/app/canvas/canvas.js?");

/***/ }),

/***/ "./src/app/canvas/snake/body.js":
/*!**************************************!*\
  !*** ./src/app/canvas/snake/body.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils.js */ \"./src/app/utils.js\");\n\n\nvar printBody = function printBody(x, y) {\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x - _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"rectCorrection\"], y - _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"rectCorrection\"], _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"pixelSize\"], _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"pixelSize\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (printBody);\n\n//# sourceURL=webpack:///./src/app/canvas/snake/body.js?");

/***/ }),

/***/ "./src/app/canvas/snake/head.js":
/*!**************************************!*\
  !*** ./src/app/canvas/snake/head.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game/game.js */ \"./src/app/game/game.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ \"./src/app/utils.js\");\n\n\n\nvar printEye = function printEye(x, y) {\n  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"printCircle\"])(x, y, 'black', _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] / 5);\n};\n\nvar printHead = function printHead(x, y) {\n  var headSize = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] * 1.5;\n  var headCorrection = headSize / 2;\n  _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillRect(x - headCorrection, y - headCorrection, headSize, headSize);\n\n  switch (_game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].direction) {\n    case 'right':\n      printEye(x + headSize * (1 / 3), y + (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]));\n      printEye(x + headSize * (1 / 3), y - (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]));\n      break;\n\n    case 'left':\n      printEye(x - headSize * (1 / 3), y + (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]));\n      printEye(x - headSize * (1 / 3), y - (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]));\n      break;\n\n    case 'top':\n      printEye(x + (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]), y - headSize * (1 / 3));\n      printEye(x - (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]), y - headSize * (1 / 3));\n      break;\n\n    case 'bottom':\n      printEye(x + (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]), y + headSize * (1 / 3));\n      printEye(x - (headSize * (1 / 10) - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]), y + headSize * (1 / 3));\n      break;\n\n    default:\n      break;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (printHead);\n\n//# sourceURL=webpack:///./src/app/canvas/snake/head.js?");

/***/ }),

/***/ "./src/app/canvas/snake/tail.js":
/*!**************************************!*\
  !*** ./src/app/canvas/snake/tail.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game/game.js */ \"./src/app/game/game.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils.js */ \"./src/app/utils.js\");\n\n\n\nvar getTailDirection = function getTailDirection() {\n  var index = _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].body.length - 1;\n  var tailVector = [_game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].body[index - 1].x - _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].body[index].x, _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].body[index - 1].y - _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].body[index].y];\n  var directionArr = Object.keys(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"directionInfo\"]).map(function (direction) {\n    return _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"directionInfo\"][direction];\n  });\n  var matchIndex = directionArr.indexOf(directionArr.find(function (direction) {\n    return direction.vector[0] === tailVector[0] && direction.vector[1] === tailVector[1];\n  }));\n  var tailDirection = Object.keys(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"directionInfo\"])[matchIndex];\n  return tailDirection;\n};\n\nvar printTail = function printTail(x, y) {\n  switch (getTailDirection()) {\n    case 'right':\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].moveTo(x + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"] + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] / 2);\n      break;\n\n    case 'left':\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].moveTo(x - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"] + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] / 2);\n      break;\n\n    case 'top':\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].moveTo(x - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"] + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] / 2, y + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      break;\n\n    case 'bottom':\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].moveTo(x - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"], y + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].lineTo(x - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"] + _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"pixelSize\"] / 2, y - _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"rectCorrection\"]);\n      break;\n\n    default:\n      break;\n  }\n\n  _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].closePath();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (printTail);\n\n//# sourceURL=webpack:///./src/app/canvas/snake/tail.js?");

/***/ }),

/***/ "./src/app/game/food.js":
/*!******************************!*\
  !*** ./src/app/game/food.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./src/app/utils.js\");\n\nvar foodPiece = {\n  coords: {},\n  replace: function replace(snake) {\n    foodPiece.coords.x = Math.floor(Math.random() * _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"].x);\n    foodPiece.coords.y = Math.floor(Math.random() * _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"].y);\n\n    if (snake.body.some(function (bodyPiece) {\n      return bodyPiece.x === foodPiece.coords.x && bodyPiece.y === foodPiece.coords.y;\n    }) || foodPiece.coords.x === 0 || foodPiece.coords.y === 0) {\n      foodPiece.replace(snake);\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (foodPiece);\n\n//# sourceURL=webpack:///./src/app/game/food.js?");

/***/ }),

/***/ "./src/app/game/game.js":
/*!******************************!*\
  !*** ./src/app/game/game.js ***!
  \******************************/
/*! exports provided: newGame, snake, foodPiece, restartGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newGame\", function() { return newGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snake\", function() { return snake; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restartGame\", function() { return restartGame; });\n/* harmony import */ var _snake_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-animation.js */ \"./src/app/game/snake-animation.js\");\n/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.js */ \"./src/app/game/food.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"foodPiece\", function() { return _food_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar snake = {};\nvar frameInterval;\n\nvar resetSnake = function resetSnake() {\n  snake.direction = 'right';\n  snake.body = [{\n    x: 15,\n    y: 8,\n    isFood: false\n  }, {\n    x: 14,\n    y: 8,\n    isFood: false\n  }, {\n    x: 13,\n    y: 8,\n    isFood: false\n  }, {\n    x: 12,\n    y: 8,\n    isFood: false\n  }];\n  snake.isAlive = true;\n  Object(_snake_animation_js__WEBPACK_IMPORTED_MODULE_0__[\"changeDirection\"])('right');\n};\n\nvar endGame = function endGame() {\n  clearInterval(frameInterval);\n\n  var snakeBodyCopy = _toConsumableArray(snake.body);\n\n  var blinkNumber = 0;\n  var blinkInterval = setInterval(function () {\n    snake.body = blinkNumber % 2 ? snakeBodyCopy : [];\n\n    if (blinkNumber < 7) {\n      blinkNumber += 1;\n    } else {\n      clearInterval(blinkInterval);\n      document.getElementById('playground').style.opacity = 0.5;\n      document.getElementById('restartBtn').style.display = 'block';\n    }\n  }, 175);\n};\n\nvar newGame = function newGame() {\n  document.getElementById('points').innerHTML = 0;\n  resetSnake();\n  _food_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].replace(snake);\n  frameInterval = setInterval(function () {\n    snake.isAlive = Object(_snake_animation_js__WEBPACK_IMPORTED_MODULE_0__[\"move\"])(snake, _food_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    if (!snake.isAlive) endGame();\n  }, 175);\n\n  window.onkeydown = function (key) {\n    return Object(_snake_animation_js__WEBPACK_IMPORTED_MODULE_0__[\"changeDirection\"])(key.keyCode);\n  };\n};\n\nvar restartGame = function restartGame() {\n  document.getElementById('restartBtn').style.display = 'none';\n  document.getElementById('playground').style.opacity = 1;\n  newGame();\n};\n\n\n\n//# sourceURL=webpack:///./src/app/game/game.js?");

/***/ }),

/***/ "./src/app/game/snake-animation.js":
/*!*****************************************!*\
  !*** ./src/app/game/snake-animation.js ***!
  \*****************************************/
/*! exports provided: move, changeDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"move\", function() { return move; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeDirection\", function() { return changeDirection; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./src/app/utils.js\");\n\nvar futureDirection;\n\nvar turnSnake = function turnSnake(snake, newDirection) {\n  if (newDirection !== _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"directionInfo\"][snake.direction].oposite) {\n    snake.direction = newDirection;\n  }\n};\n\nvar changeDirection = function changeDirection(direction) {\n  if (typeof direction === 'number') {\n    switch (direction) {\n      case 37:\n        futureDirection = 'left';\n        break;\n\n      case 38:\n        futureDirection = 'top';\n        break;\n\n      case 39:\n        futureDirection = 'right';\n        break;\n\n      case 40:\n        futureDirection = 'bottom';\n        break;\n\n      default:\n        break;\n    }\n  } else {\n    futureDirection = direction;\n  }\n}; // Move to the oposite side of the board if snake is in the border\n\n\nvar checkBorders = function checkBorders(position) {\n  var correctedPosition = {};\n  Object.keys(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"]).forEach(function (axis) {\n    if (position[axis] === _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"][axis]) {\n      correctedPosition[axis] = 1;\n    } else if (position[axis] === 0) {\n      correctedPosition[axis] = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"][axis] - 1;\n    } else {\n      correctedPosition[axis] = position[axis];\n    }\n  });\n  return correctedPosition;\n};\n\nvar move = function move(snake, foodPiece) {\n  var possiblePosition = {\n    x: snake.body[0].x + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"directionInfo\"][snake.direction].vector[0],\n    y: snake.body[0].y + _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"directionInfo\"][snake.direction].vector[1]\n  };\n  var newPosition = checkBorders(possiblePosition);\n  newPosition.isFood = false;\n\n  if (!snake.body.some(function (position) {\n    return position.x === newPosition.x && position.y === newPosition.y;\n  })) {\n    if (newPosition.x === foodPiece.coords.x && newPosition.y === foodPiece.coords.y) {\n      newPosition.isFood = true;\n      document.getElementById('points').innerHTML = snake.body.length - 3;\n      foodPiece.replace(snake);\n    }\n\n    if (!snake.body[snake.body.length - 1].isFood) {\n      snake.body.splice(-1, 1);\n    } else {\n      snake.body[snake.body.length - 1].isFood = false;\n    }\n\n    snake.body.unshift(newPosition);\n  } else {\n    return false;\n  }\n\n  if (futureDirection && futureDirection !== snake.direction) {\n    turnSnake(snake, futureDirection);\n  }\n\n  return true;\n};\n\n\n\n//# sourceURL=webpack:///./src/app/game/snake-animation.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/styles/styles.css */ \"./src/public/styles/styles.css\");\n/* harmony import */ var _public_styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.js */ \"./src/app/game/game.js\");\n/* harmony import */ var _canvas_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas/canvas.js */ \"./src/app/canvas/canvas.js\");\n\n\n\nObject(_game_game_js__WEBPACK_IMPORTED_MODULE_1__[\"newGame\"])();\ndocument.getElementById('restartBtn').onclick = _game_game_js__WEBPACK_IMPORTED_MODULE_1__[\"restartGame\"];\ndocument.body.onload = Object(_canvas_canvas_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ }),

/***/ "./src/app/utils.js":
/*!**************************!*\
  !*** ./src/app/utils.js ***!
  \**************************/
/*! exports provided: canvas, ctx, pixelSize, boardSize, rectCorrection, printCircle, directionInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pixelSize\", function() { return pixelSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardSize\", function() { return boardSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rectCorrection\", function() { return rectCorrection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printCircle\", function() { return printCircle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directionInfo\", function() { return directionInfo; });\nvar canvas = document.getElementById('playground');\nvar ctx = canvas.getContext('2d');\nvar boardSize = {\n  x: 30,\n  y: 15\n};\nvar pixelSize = 1 / boardSize.x * canvas.width;\nvar rectCorrection = pixelSize / 2;\n\nvar printCircle = function printCircle(x, y, color, size) {\n  ctx.beginPath();\n  ctx.arc(x, y, size, 0, 2 * Math.PI);\n  ctx.fillStyle = color;\n  ctx.fill();\n};\n\nvar directionInfo = {\n  right: {\n    oposite: 'left',\n    vector: [1, 0]\n  },\n  left: {\n    oposite: 'right',\n    vector: [-1, 0]\n  },\n  top: {\n    oposite: 'bottom',\n    vector: [0, -1]\n  },\n  bottom: {\n    oposite: 'top',\n    vector: [0, 1]\n  }\n};\n\n\n//# sourceURL=webpack:///./src/app/utils.js?");

/***/ }),

/***/ "./src/public/styles/styles.css":
/*!**************************************!*\
  !*** ./src/public/styles/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/styles/styles.css?");

/***/ })

/******/ });