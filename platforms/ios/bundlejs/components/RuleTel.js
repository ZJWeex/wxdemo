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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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

/***/ 11:
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RuleTel = __webpack_require__(8);

var _RuleTel2 = _interopRequireDefault(_RuleTel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_RuleTel2.default.el = '#root';
new Vue(_RuleTel2.default);

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

/***/ 9:
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

/***/ })

/******/ });