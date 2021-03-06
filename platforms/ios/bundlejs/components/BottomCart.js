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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BottomCart = __webpack_require__(4);

var _BottomCart2 = _interopRequireDefault(_BottomCart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BottomCart2.default.el = '#root';
new Vue(_BottomCart2.default);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/jion/Desktop/Weex2018/wxdemo/src/components/BottomCart.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c788aeca"
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

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
  "inCart": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "backgroundColor": "#41b883"
  },
  "right-content": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "settlementunable": {
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "30",
    "paddingBottom": "30",
    "textAlign": "center",
    "color": "#FFFFFF",
    "backgroundColor": "#cccccc"
  },
  "settlementselect": {
    "paddingLeft": "40",
    "paddingRight": "40",
    "paddingTop": "30",
    "paddingBottom": "30",
    "textAlign": "center",
    "color": "#FFFFFF",
    "backgroundColor": "#ff0033"
  },
  "textadd": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "paddingTop": "30",
    "paddingBottom": "30",
    "color": "#FFFFFF",
    "backgroundColor": "#FFA500"
  },
  "infoLabel": {
    "color": "#FFFFFF",
    "fontSize": "26"
  },
  "addreduce": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "addimg": {
    "width": "44",
    "height": "44",
    "marginLeft": "10",
    "marginRight": "10"
  },
  "reduceimg": {
    "width": "44",
    "height": "44",
    "marginLeft": "10",
    "marginRight": "10"
  },
  "goodsCount": {
    "fontSize": "30",
    "color": "#cccccc",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  }
}

/***/ }),

/***/ 6:
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
//
//

var modal = weex.requireModule("modal");

exports.default = {
  data: function data() {
    return {
      infoLabel: "购物车是空的",
      goodsCount: 0
    };
  },

  methods: {
    addToCart: function addToCart(e) {
      this.goodsCount++;
      this.infoLabel = "商品数量：" + this.goodsCount;
    },
    onReduceClick: function onReduceClick(e) {
      this.goodsCount--;
      if (this.goodsCount <= 0) {
        this.infoLabel = "购物车是空的";
      } else {
        this.infoLabel = "商品数量：" + this.goodsCount;
      }
    },
    finishClick: function finishClick(e) {
      modal.toast({
        message: "结算",
        duration: 0.5
      });
    }
  }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["inCart"]
  }, [_c('div', {
    staticStyle: {
      justifyContent: "center",
      marginLeft: "20px"
    }
  }, [_c('text', {
    staticClass: ["infoLabel"]
  }, [_vm._v(_vm._s(_vm.infoLabel))])]), _c('div', {
    staticClass: ["right-content"]
  }, [(_vm.goodsCount <= 0) ? _c('div', [_c('text', {
    staticClass: ["textadd"],
    on: {
      "click": _vm.addToCart
    }
  }, [_vm._v("加入购物车")])]) : _c('div', [_c('div', {
    staticClass: ["addreduce"]
  }, [_c('image', {
    staticClass: ["addimg"],
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/goodsIcon/cart_add.png"
    },
    on: {
      "click": _vm.addToCart
    }
  }), _c('text', {
    staticClass: ["goodsCount"]
  }, [_vm._v(_vm._s(_vm.goodsCount))]), _c('image', {
    staticClass: ["reduceimg"],
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/goodsIcon/cart_reduce.png"
    },
    on: {
      "click": _vm.onReduceClick
    }
  })])]), _c('text', {
    class: [_vm.goodsCount <= 0 ? 'settlementunable' : 'settlementselect'],
    on: {
      "click": _vm.finishClick
    }
  }, [_vm._v("结算")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });