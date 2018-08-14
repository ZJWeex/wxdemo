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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
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
/* 1 */
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
/* 2 */
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
/* 3 */
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

/***/ }),
/* 4 */
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
/* 5 */
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

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
__vue_options__.__file = "/Users/jion/Desktop/Weex2018/wxdemo/src/components/RuleTel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1ff9d9ff"
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "height": "110",
    "flexDirection": "row"
  },
  "separator": {
    "height": "20",
    "width": "750",
    "backgroundColor": "#f5f5f5"
  },
  "subItem": {
    "width": "370",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "aItem": {
    "width": "370",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "line": {
    "width": "2",
    "marginTop": "20",
    "marginBottom": "20",
    "backgroundColor": "#d9d9d9"
  }
}

/***/ }),
/* 10 */
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
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");
var Superior = weex.requireModule('Superior');

exports.default = {
  props: ['dataModel'],
  data: function data() {
    return {
      isWeb: WXEnvironment.platform === 'Web'
    };
  },

  methods: {
    ruleClick: function ruleClick() {
      modal.toast({ message: '服务规则' });
    },
    telClick: function telClick() {
      var that = this;
      modal.confirm({
        message: '联系客服:' + this.dataModel.servicePhone,
        okTitle: '确定',
        cancelTitle: '取消'
      }, function (value) {
        if (value === '确定') {
          if (WXEnvironment.platform === 'Web') {
            //web 获取属性getAttribute
            // modal.toast({message:'web页不支持拨打电话'})
            var webEl = that.$refs['webview'];
            console.log('web = ' + webEl.$el);
            webEl.$el.setAttribute('src', "tel:10086");
            var webview = weex.requireModule('webview');
            webview.reload(webEl.$el);
          } else if (WXEnvironment.platform === 'iOS') {
            //使用定义的that,不要使用this
            var webEl = that.$refs.webview;
            //设置两次，否则弹出框取消后就不会再弹出
            webEl.setAttr('src', "");
            webEl.setAttr('src', "tel:" + that.dataModel.servicePhone);
            var webview = weex.requireModule('webview');
            webview.reload(webEl);
            setTimeout(function () {
              //重置，否则滑动iOS还会弹出拨打电话弹框
              webEl.setAttr('src', "");
            }, 500);
          } else if (WXEnvironment.platform === 'android') {
            //android使用上述方法无效
            //采用原生交互
            Superior.telCall(that.dataModel.servicePhone);
          }
        }
      });
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["separator"]
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["subItem"],
    on: {
      "click": _vm.ruleClick
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_notice.png"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("服务规则")])]), _c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["subItem"]
  }, [(_vm.isWeb) ? _c('div', [_vm._m(0)]) : _c('div', [_c('div', {
    staticClass: ["subItem"],
    on: {
      "click": _vm.telClick
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_us.png"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("联系客服")]), _c('web', {
    ref: "webview",
    staticStyle: {
      width: "1px",
      height: "20px"
    },
    attrs: {
      "src": ""
    }
  })])])])])])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["separator"]
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["subItem"],
    on: {
      "click": function($event) {
        this.ruleClick()
      }
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_notice.png"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    },
    attrs: {
      "value": "服务规则"
    }
  })]), _c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["subItem"]
  }, [_c('div', {
    attrs: {
      "[[match]]": "isWeb"
    }
  }, [_c('a', {
    staticClass: ["aItem"],
    attrs: {
      "href": "tel:10086"
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_us.png"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    },
    attrs: {
      "value": "联系客服"
    }
  })])]), _c('div', {
    attrs: {
      "[[match]]": "!(isWeb)"
    }
  }, [_c('div', {
    staticClass: ["subItem"],
    on: {
      "click": function($event) {
        this.telClick()
      }
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_us.png"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    },
    attrs: {
      "value": "联系客服"
    }
  }), _c('web', {
    staticStyle: {
      width: "1px",
      height: "20px"
    },
    attrs: {
      "src": "",
      "ref": "webview"
    }
  })])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: ["aItem"],
    attrs: {
      "href": "tel:10086"
    }
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "40px"
    },
    attrs: {
      "src": "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_us.png"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("联系客服")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "/Users/jion/Desktop/Weex2018/wxdemo/src/components/SpecCells.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-67193556"
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
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "flexDirection": "row"
  },
  "wrap": {
    "width": "630",
    "flex": 1,
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF"
  },
  "items": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "borderRadius": "20"
  },
  "item": {
    "backgroundColor": "#A52A2A",
    "fontSize": "30",
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "paddingRight": "10",
    "border": "5",
    "borderRadius": "5"
  },
  "item-select": {
    "backgroundColor": "#A52A2A",
    "fontSize": "30",
    "textAlign": "center",
    "color": "#FFFFFF",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "paddingRight": "10",
    "border": "5",
    "borderRadius": "5"
  },
  "item-none": {
    "backgroundColor": "#f5f5f5",
    "fontSize": "30",
    "textAlign": "center",
    "color": "#666666",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "paddingRight": "10",
    "border": "5",
    "borderRadius": "5"
  }
}

/***/ }),
/* 14 */
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

var modal = weex.requireModule("modal");

exports.default = {
    //定义属性,移动端不可设置type,且prop定义的属性在当前组件中不可修改
    props: { specs: {
            //  type: Array,
            default: function _default() {
                return [{ supGoodsAliasName: '默认值', supGoodsId: '780949458800914432' }, { supGoodsAliasName: '默认值1', supGoodsId: '764587003762225152' }];
            }
        },
        selectId: ''
    },

    data: function data() {
        return {
            select_id: ''
        };
    },

    mounted: function mounted() {
        console.log('selectid' + this.selectId);
    },
    methods: {
        itemClick: function itemClick(sender) {
            var that = this;
            if (sender.supGoodsId === that.select_id) {
                console.log('当前选中');
            } else {
                console.log('改变选中' + sender.supGoodsId);
                //若直接使用selectId则会报错
                //[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "selectId"
                that.select_id = sender.supGoodsId;
                //自定义事件
                that.$emit('changeItem', sender.supGoodsId);
            }
        }
    }

};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "30px",
      margin: "10px",
      paddingTop: "10px"
    }
  }, [_vm._v("规格：")]), _c('div', {
    staticClass: ["wrap"]
  }, _vm._l((_vm.specs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["items"]
    }, [(item.supGoodsId === _vm.selectId) ? _c('div', [_c('text', {
      staticClass: ["item-select"],
      on: {
        "click": function($event) {
          _vm.itemClick(item)
        }
      }
    }, [_vm._v(_vm._s(item.supGoodsAliasName))])]) : _c('div', [_c('text', {
      staticClass: ["item-none"],
      on: {
        "click": function($event) {
          _vm.itemClick(item)
        }
      }
    }, [_vm._v(_vm._s(item.supGoodsAliasName))])])])
  }))])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "30px",
      margin: "10px",
      paddingTop: "10px"
    },
    attrs: {
      "value": "规格："
    }
  }), _c('div', {
    staticClass: ["wrap"]
  }, [_c('div', {
    key: {
      "@binding": "index"
    },
    staticClass: ["items"],
    attrs: {
      "[[repeat]]": {
        "@expression": "specs",
        "@alias": "item",
        "@index": "index"
      }
    }
  }, [_c('div', {
    attrs: {
      "[[match]]": "item.supGoodsId === selectId"
    }
  }, [_c('text', {
    staticClass: ["item-select"],
    attrs: {
      "value": {
        "@binding": "item.supGoodsAliasName"
      }
    },
    on: {
      "click": function($event) {
        this.itemClick(_vm.item)
      }
    }
  })]), _c('div', {
    attrs: {
      "[[match]]": "!(item.supGoodsId === selectId)"
    }
  }, [_c('text', {
    staticClass: ["item-none"],
    attrs: {
      "value": {
        "@binding": "item.supGoodsAliasName"
      }
    },
    on: {
      "click": function($event) {
        this.itemClick(_vm.item)
      }
    }
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Define = {
  /**
   * 用于跨界面传参，定义统一键值
   * 全局常量命名以k开头
   */
  kSuperior_goods_id: 'superior_goods_id' //优选商品id

};

exports.default = Define;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get$get$post;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 配置API接口地址
var baseUrl = 'http://app.taocaimall.com/taocaimall/';
// 引入 弹窗组件
var modal = weex.requireModule('modal');

// 自定义判断元素类型JS
function toType(obj) {
  return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 参数过滤函数
function filterNull(objc) {
  for (var key in objc) {
    if (objc[key] === null) {
      delete objc[key];
    }
    if (toType(objc[key]) === 'string') {
      objc[key] = objc[key].trim();
    } else if (toType(objc[key]) === 'object') {
      objc[key] = filterNull(objc[key]);
    } else if (toType(objc[key]) === 'array') {
      objc[key] = filterNull(objc[key]);
    }
  }
  return objc;
}

// 工具方法
function toParams(obj) {
  var param = "";
  if (!obj) return param;

  for (var name in obj) {
    if (typeof obj[name] != 'function') {
      param += "&" + name + "=" + encodeURI(obj[name]);
    }
  }
  return param.substring(1);
};

function getRequest(url, params, success, failure) {
  // 引入请求数据组件
  var stream = weex.requireModule('stream');
  var resultURL = url;
  if (url.indexOf('http') == -1) {
    resultURL = baseUrl + url;
  }

  stream.fetch({
    method: 'GET',
    url: resultURL + '?' + toParams(params),
    type: 'jsonp'
  }, function (ret) {
    if (!ret.ok) {
      modal.toast({
        message: 'request failed',
        duration: 0.3
      });
      failure('请求失败');
    } else {
      var result = JSON.stringify(ret.data);
      console.log('get:' + result);
      success(result);
    }
  }, function (response) {
    console.log('get in progress:' + response.length);
  });
}
//params为对象类型
function postRequest(url, params, success, failure) {
  // 引入请求数据组件
  var stream = weex.requireModule('stream');
  var resultURL = url;
  if (url.indexOf('http') == -1) {
    resultURL = baseUrl + url;
  }
  // 过滤参数
  if (params) {
    params = filterNull(params);
  }

  var HTTPHeader = {};
  var jsonType = '';
  if (WXEnvironment.platform.toLowerCase() === 'web') {
    HTTPHeader = { 'Content-Type': 'application/json' };
    jsonType = 'jsonp';
  } else if (WXEnvironment.platform.toLowerCase() === 'ios') {
    HTTPHeader = { 'Content-Type': 'application/json;charset=utf-8' };
    jsonType = 'text';
  } else if (WXEnvironment.platform.toLowerCase() === 'android') {
    HTTPHeader = { 'Content-Type': 'application/json' };
    jsonType = 'text';
  }
  console.log('参数：' + toParams(params));
  stream.fetch({
    method: 'POST',
    // timeout: 30000,//30s
    url: resultURL + '?' + toParams(params),
    type: jsonType,
    headers: HTTPHeader
    // body: JSON.stringify(params)
  }, function (ret) {
    // console.log(JSON.stringify(ret))
    if (!ret.ok) {
      failure('请求失败\n' + JSON.stringify(ret));
    } else {
      var jsonString = JSON.stringify(ret.data);
      // console.log('post:'+jsonString);
      if (WXEnvironment.platform === 'android' || WXEnvironment.platform === 'iOS') {
        jsonString = JSON.parse(jsonString);
      }
      success(jsonString);
    }
  }, function (response) {
    console.log('post in progress:' + response.length);
  });
}

// 返回在vue模板中的调用接口
exports.default = (_get$get$post = {
  get: function get(url, params, success, failure) {
    return getRequest(url, params, success, failure);
  }
}, _defineProperty(_get$get$post, 'get', function get(url, success, failure) {
  return getRequest(url, {}, success, failure);
}), _defineProperty(_get$get$post, 'post', function post(url, params, success, failure) {
  return postRequest(url, { requestmodel: JSON.stringify(params) }, success, failure);
}), _get$get$post);

//使用
/*
import Fetch from '@/Fetch.js'
//请求
Fetch.post('uri',{key:'vaule'},function(data){
     },function(err){
      
    })
*/

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(21)
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
__vue_options__.__file = "/Users/jion/Desktop/Weex2018/wxdemo/src/homepage/GoodsDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1ebf6242"
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
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "100"
  },
  "info": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "shoppingName": {
    "fontSize": "36",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "shoppingDes": {
    "fontSize": "28",
    "color": "#999999",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "price": {
    "fontSize": "40",
    "color": "#FF0000",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "priceInfo": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "originalPrice": {
    "fontSize": "24",
    "color": "#999999",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "deleline": {
    "textDecoration": "line-through"
  },
  "base64": {
    "display": "inline-block",
    "color": "#999999",
    "fontSize": "24",
    "backgroundImage": "url(data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAABAAEAAAICVAEAOw==)",
    "backgroundRepeat": "repeat-x",
    "backgroundPosition": "left center",
    "height": "32",
    "lineHeight": "32"
  },
  "spec": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "marginLeft": "20",
    "marginRight": "40"
  },
  "singeImg": {
    "width": 750,
    "height": 600
  },
  "bottomCart": {
    "bottom": "0",
    "height": "100",
    "position": "fixed",
    "left": "0",
    "right": "0"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DeitailBanner = __webpack_require__(4);

var _DeitailBanner2 = _interopRequireDefault(_DeitailBanner);

var _SpecCells = __webpack_require__(12);

var _SpecCells2 = _interopRequireDefault(_SpecCells);

var _RuleTel = __webpack_require__(8);

var _RuleTel2 = _interopRequireDefault(_RuleTel);

var _BottomCart = __webpack_require__(0);

var _BottomCart2 = _interopRequireDefault(_BottomCart);

var _Define = __webpack_require__(16);

var _Define2 = _interopRequireDefault(_Define);

var _Fetch = __webpack_require__(17);

var _Fetch2 = _interopRequireDefault(_Fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var animation = weex.requireModule("animation");
var storage = weex.requireModule('storage');
var globalEvent = weex.requireModule("globalEvent");

exports.default = {
  components: { DeitailBanner: _DeitailBanner2.default, SpecCells: _SpecCells2.default, RuleTel: _RuleTel2.default, BottomCart: _BottomCart2.default },
  name: "商品详情",
  data: function data() {
    return {
      supGoodsId: '',
      dataList: [],
      isWeb: WXEnvironment.platform === 'Web'
    };
  },

  created: function created() {
    var that = this;
    //key确定唯一性，防止误删
    storage.getItem(_Define2.default.kSuperior_goods_id, function (event) {
      console.log(_Define2.default.kSuperior_goods_id + ' ===' + event.data);
      that.supGoodsId = event.data === 'undefined' ? '676877695078371328' : event.data;
      storage.removeItem(_Define2.default.kSuperior_goods_id, function (event) {});
      console.log(_Define2.default.kSuperior_goods_id + '=' + that.supGoodsId);
      that.loadData();
    });
  },

  methods: {
    loadData: function loadData() {
      var param = { supGoodsId: this.supGoodsId };
      var that = this;
      _Fetch2.default.post('superiorGoodsDetail.json', param, function (jsonString) {
        // console.log('请求成功' + jsonString)
        that.resultHandle(JSON.parse(jsonString));
      }, function (err) {
        modal.alert({
          message: err,
          okTitle: '确定'
        }, function (vaule) {});
      });
    },
    resultHandle: function resultHandle(ret) {
      this.dataList = [];
      var result = ret.goodsDetail;
      //banner
      if (result.goodsImgURLs) {
        this.dataList.push({ type: "banner", goodsImgs: result.goodsImgURLs });
      }
      //info
      this.dataList.push({ type: "info", goodsName: result.supGoodsName, goodsDescribe: result.supGoodsDescribe,
        goodsPrice: result.supGoodsPrice, storePrice: result.supStorePrice, saleNum: result.supGoodsSaleNum });
      //spec
      /*
      result.productGoodsList = [{supGoodsAliasName:'腱子肉', supGoodsId:'676877695078371328',selfFlag:'true'},
                              {supGoodsAliasName:'纯真酸奶', supGoodsId:'764587003762225152',selfFlag:'false'}]
                              */
      this.dataList.push({ type: "spec", goodsSpecs: result.productGoodsList, selectGoodsId: result.supGoodsId });
      //ruleTel
      this.dataList.push({ type: "ruleTel", policy: result.policy, shippingInstructions: result.shippingInstructions,
        policyInstructions: result.policyInstructions, scopeInstructions: result.scopeInstructions, servicePhone: result.servicePhone });
      //singeImg
      this.dataList.push({ type: "singeImg", gpImgURLs: result.gpImgURLs, imgHeight: result.gpImgPhotos.height });
    },
    onImageLoad: function onImageLoad(index, event) {
      var that = this;
      console.log('width=' + event.size.naturalWidth + ',height=' + event.size.naturalHeight);
      if (event.success) {
        var imageEl = event.target;
        if (WXEnvironment.platform === 'Web') {
          imageEl.style.width = event.size.naturalWidth + 'px';
          imageEl.style.height = event.size.naturalHeight + 'px';
        } else {
          animation.transition(imageEl, {
            styles: {
              width: event.size.naturalWidth + 'px',
              height: event.size.naturalHeight + 'px'
            },
            duration: 0, //此处需设置为0
            timingFunction: 'ease',
            delay: 0,
            needLayout: true
          }, function (e) {
            console.log('fail' + e.message);
          });
        }
      }
    },
    onChangeItem: function onChangeItem(goodsId) {
      console.log('goodsId' + goodsId);
      this.supGoodsId = goodsId;
      this.loadData();
    }

  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.dataList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "index": index,
        "append": "tree"
      }
    }, [(item.type === 'banner') ? _c('div', [_c('deitail-banner', {
      attrs: {
        "goodsImgURLs": item.goodsImgs
      }
    })], 1) : _vm._e(), (item.type === 'info') ? _c('div', [_c('div', {
      staticClass: ["info"]
    }, [_c('text', {
      staticClass: ["shoppingName"]
    }, [_vm._v(_vm._s(item.goodsName))]), _c('text', {
      staticClass: ["shoppingDes"]
    }, [_vm._v(_vm._s(item.goodsDescribe))]), _c('text', {
      staticClass: ["price"]
    }, [_vm._v("¥" + _vm._s(item.storePrice))]), _c('div', {
      staticClass: ["priceInfo"]
    }, [_c('text', {
      staticClass: ["originalPrice", "deleline"]
    }, [_vm._v("¥" + _vm._s(item.goodsPrice))]), _c('text', {
      staticClass: ["originalPrice"]
    }, [_vm._v(" 已售" + _vm._s(item.saleNum) + "份")])])])]) : _vm._e(), (item.type === 'spec') ? _c('div', [_c('spec-cells', {
      attrs: {
        "selectId": item.selectGoodsId,
        "specs": item.goodsSpecs
      },
      on: {
        "changeItem": _vm.onChangeItem
      }
    })], 1) : _vm._e(), (item.type === 'ruleTel') ? _c('div', [_c('rule-tel', {
      attrs: {
        "dataModel": item
      }
    })], 1) : _vm._e(), (item.type === 'singeImg') ? _c('div', _vm._l((item.gpImgURLs), function(source, i) {
      return _c('div', {
        key: i
      }, [_c('image', {
        staticClass: ["singeImg"],
        style: {
          height: item.imgHeight
        },
        attrs: {
          "src": source
        }
      })])
    })) : _vm._e()])
  })), _c('BottomCart', {
    staticClass: ["bottomCart"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GoodsDetail = __webpack_require__(18);

var _GoodsDetail2 = _interopRequireDefault(_GoodsDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_GoodsDetail2.default.el = '#root';
new Vue(_GoodsDetail2.default);

/***/ })
/******/ ]);