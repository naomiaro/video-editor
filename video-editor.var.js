var VideoEditor =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.init = init;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar VideoGreenScreen = function () {\n    function VideoGreenScreen() {\n        var _this = this;\n\n        _classCallCheck(this, VideoGreenScreen);\n\n        this.video = document.getElementById(\"video\");\n        this.c1 = document.getElementById(\"c1\");\n        this.ctx1 = this.c1.getContext(\"2d\");\n        this.c2 = document.getElementById(\"c2\");\n        this.ctx2 = this.c2.getContext(\"2d\");\n\n        this.video.addEventListener(\"play\", function () {\n            _this.timerCallback();\n        }, false);\n\n        this.video.addEventListener(\"seeked\", function () {\n            _this.computeFrame();\n        }, false);\n    }\n\n    _createClass(VideoGreenScreen, [{\n        key: \"timerCallback\",\n        value: function timerCallback() {\n            var _this2 = this;\n\n            if (this.video.paused || this.video.ended) {\n                return;\n            }\n\n            this.computeFrame();\n\n            setTimeout(function () {\n                _this2.timerCallback();\n            }, 0);\n        }\n\n        //rgb(43,213,66) - green screen\n\n    }, {\n        key: \"computeFrame\",\n        value: function computeFrame() {\n            this.ctx1.drawImage(this.video, 0, 0, 320, 192);\n            var frame = this.ctx1.getImageData(0, 0, 320, 192);\n            var l = frame.data.length / 4;\n            var i = void 0,\n                r = void 0,\n                g = void 0,\n                b = void 0;\n\n            for (i = 0; i < l; i++) {\n                r = frame.data[i * 4 + 0];\n                g = frame.data[i * 4 + 1];\n                b = frame.data[i * 4 + 2];\n\n                if (r > 39 && r < 128 && g > 130 && b < 175) {\n                    frame.data[i * 4 + 3] = 0;\n                }\n            }\n\n            this.ctx2.putImageData(frame, 0, 0);\n        }\n    }]);\n\n    return VideoGreenScreen;\n}();\n\n;\n\nfunction init() {\n    var videoScreen = new VideoGreenScreen();\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9tYWluLmpzPzdhOTAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVmlkZW9HcmVlblNjcmVlbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIik7XG4gICAgICAgIHRoaXMuYzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImMxXCIpO1xuICAgICAgICB0aGlzLmN0eDEgPSB0aGlzLmMxLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYzJcIik7XG4gICAgICAgIHRoaXMuY3R4MiA9IHRoaXMuYzIuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lckNhbGxiYWNrKCk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWVrZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlRnJhbWUoKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHRpbWVyQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvLnBhdXNlZCB8fCB0aGlzLnZpZGVvLmVuZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXB1dGVGcmFtZSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lckNhbGxiYWNrKCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIC8vcmdiKDQzLDIxMyw2NikgLSBncmVlbiBzY3JlZW5cbiAgICBjb21wdXRlRnJhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4MS5kcmF3SW1hZ2UodGhpcy52aWRlbywgMCwgMCwgMzIwLCAxOTIpO1xuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLmN0eDEuZ2V0SW1hZ2VEYXRhKDAsIDAsIDMyMCwgMTkyKTtcbiAgICAgICAgbGV0IGwgPSBmcmFtZS5kYXRhLmxlbmd0aCAvIDQ7XG4gICAgICAgIGxldCBpLCByLCBnLCBiO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHIgPSBmcmFtZS5kYXRhW2kgKiA0ICsgMF07XG4gICAgICAgICAgICBnID0gZnJhbWUuZGF0YVtpICogNCArIDFdO1xuICAgICAgICAgICAgYiA9IGZyYW1lLmRhdGFbaSAqIDQgKyAyXTtcblxuICAgICAgICAgICAgaWYgKHIgPiAzOSAmJiByIDwgMTI4ICYmIGcgPiAxMzAgJiYgYiA8IDE3NSkge1xuICAgICAgICAgICAgICAgIGZyYW1lLmRhdGFbaSAqIDQgKyAzXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eDIucHV0SW1hZ2VEYXRhKGZyYW1lLCAwLCAwKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsZXQgdmlkZW9TY3JlZW4gPSBuZXcgVmlkZW9HcmVlblNjcmVlbigpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1haW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBbURBO0FBQ0E7OztBQXBEQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);