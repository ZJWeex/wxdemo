// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    //定义属性
    props: {
        goodsImgURLs: {
            default: function _default() {
                return ['https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'];
            }
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        onImgClick: function onImgClick(index) {
            console.log('index =' + index);
            this.$emit('sliderSelectIndex', index);
        }
    }
};

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(this.goodsImgURLs.length > 1) ? _c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "3000"
    }
  }, [_vm._l((_vm.goodsImgURLs), function(img, index) {
    return _c('div', {
      key: index
    }, [_c('image', {
      staticClass: ["img"],
      attrs: {
        "src": img,
        "resize": "stretch"
      },
      on: {
        "click": function($event) {
          _vm.onImgClick(index)
        }
      }
    })])
  }), _c('indicator', {
    staticClass: ["Indicator"]
  })], 2)]) : _c('div', _vm._l((_vm.goodsImgURLs), function(img, index) {
    return _c('image', {
      key: index,
      staticClass: ["img"],
      attrs: {
        "src": img,
        "resize": "stretch"
      },
      on: {
        "click": function($event) {
          _vm.onImgClick(index)
        }
      }
    })
  }))])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    attrs: {
      "[[match]]": "this.goodsImgURLs.length>1"
    }
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "3000"
    }
  }, [_c('div', {
    key: {
      "@binding": "index"
    },
    attrs: {
      "[[repeat]]": {
        "@expression": "goodsImgURLs",
        "@alias": "img",
        "@index": "index"
      }
    }
  }, [_c('image', {
    staticClass: ["img"],
    attrs: {
      "resize": "stretch",
      "src": {
        "@binding": "img"
      }
    },
    on: {
      "click": function($event) {
        this.onImgClick(_vm.index)
      }
    }
  })]), _c('indicator', {
    staticClass: ["Indicator"]
  })])]), _c('div', {
    attrs: {
      "[[match]]": "!(this.goodsImgURLs.length>1)"
    }
  }, [_c('image', {
    key: {
      "@binding": "index"
    },
    staticClass: ["img"],
    attrs: {
      "resize": "stretch",
      "src": {
        "@binding": "img"
      },
      "[[repeat]]": {
        "@expression": "goodsImgURLs",
        "@alias": "img",
        "@index": "index"
      }
    },
    on: {
      "click": function($event) {
        this.onImgClick(_vm.index)
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DeitailBanner = __webpack_require__(8);

var _DeitailBanner2 = _interopRequireDefault(_DeitailBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_DeitailBanner2.default.el = '#root';
new Vue(_DeitailBanner2.default);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/jion/Desktop/Weex2018/wxdemo/src/components/DeitailBanner.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-33fe60b8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "marginTop": "5",
    "height": "450"
  },
  "Indicator": {
    "width": "730",
    "height": "30",
    "itemColor": "#808080",
    "itemSelectedColor": "#FFFFFF",
    "itemSize": "15",
    "position": "absolute",
    "bottom": "30"
  },
  "img": {
    "width": "750",
    "height": "450"
  }
}

/***/ })

/******/ });