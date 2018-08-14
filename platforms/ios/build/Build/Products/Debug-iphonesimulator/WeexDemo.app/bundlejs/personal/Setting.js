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


var _Setting = __webpack_require__(36);

var _Setting2 = _interopRequireDefault(_Setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Setting2.default.el = '#root';
new Vue(_Setting2.default);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(39)
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
__vue_options__.__file = "/Users/jion/Desktop/Weex2018/wxdemo/src/personal/Setting.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-234518ba"
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

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "750",
    "height": "600"
  },
  "row": {
    "height": "100",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  "content": {
    "height": "100",
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingLeft": "20"
  },
  "iconImg": {
    "width": "36",
    "height": "36"
  },
  "text": {
    "marginLeft": "20",
    "fontSize": "32",
    "color": "#333333"
  },
  "arrowImg": {
    "width": "20",
    "height": "30",
    "marginRight": "20"
  },
  "loginOut": {
    "fontSize": "50",
    "width": "550",
    "textAlign": "center",
    "marginTop": "30",
    "marginLeft": "100",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderWidth": "2",
    "borderStyle": "solid",
    "color": "#ffffff",
    "borderColor": "#dddddd",
    "backgroundColor": "rgb(226,35,35)"
  }
}

/***/ }),

/***/ 38:
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

var modal = weex.requireModule("modal");

exports.default = {
  // name: "设置",
  data: function data() {
    return {
      arrow: 'https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_return.png',
      rows: [{
        icon: "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_notice.png",
        name: "推送通知设置",
        type: 1
      }, {
        icon: "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_cache.png",
        name: "清除缓存",
        type: 2
      }, {
        icon: "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_us.png",
        name: "关于我们",
        type: 0
      }, {
        icon: "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/setup_xing.png",
        name: "欢迎评分",
        type: '0'
      }, {
        icon: "https://s3.cn-north-1.amazonaws.com.cn/h5.taocai.mobi/down/debug.IPA/weexIcon/seticon/explain.png",
        name: "特别声明",
        type: '0'
      }]
    };
  },

  created: function created() {},
  methods: {
    //点击cell
    onclick: function onclick(index) {
      console.log("点击" + index);
      switch (index) {
        case 0:
          break;
        case 1:
          modal.confirm({
            message: '确定清楚本地缓存 ?',
            okTitle: '确定',
            cancelTitle: '取消'
          }, function (vaule) {
            if (vaule === '确定') {
              console.log("清楚缓存");
            }
          });
          break;
        case 2:
        case 3:
        case 4:
          var msg = this.rows[index].name;
          console.log(msg + 'xxx');
          modal.toast({
            message: msg
          });
          break;

      }
    },
    //退出
    loginOut: function loginOut() {
      modal.alert({
        message: "退出登录",
        okTitle: "确定"
      }, function (value) {});
    },
    //switch切换
    onchange: function onchange(e) {
      var message;
      if (e.checked) {
        message = '通知开启';
      } else {
        message = '通知关闭';
      }
      modal.toast({
        message: message
      });
    }
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroller', {
    staticClass: ["scroller"]
  }, _vm._l((_vm.rows), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["row"],
      on: {
        "click": function($event) {
          _vm.onclick(index)
        }
      }
    }, [_c('div', {
      staticClass: ["content"]
    }, [_c('image', {
      staticClass: ["iconImg"],
      attrs: {
        "src": item.icon,
        "resize": "contain"
      }
    }), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item.name))])]), (item.type === 1) ? _c('div', [_c('div', {
      staticStyle: {
        paddingRight: "20px"
      }
    }, [_c('switch', {
      attrs: {
        "checked": "true"
      },
      on: {
        "change": _vm.onchange
      }
    })])]) : (item.type === 2) ? _c('div', [_c('text', {
      staticStyle: {
        paddingRight: "20px"
      }
    }, [_vm._v("0.36M")])]) : _c('div', [_c('image', {
      staticClass: ["arrowImg"],
      attrs: {
        "src": _vm.arrow,
        "resize": "contain"
      }
    })])])
  })), _c('text', {
    staticClass: ["loginOut"],
    on: {
      "click": _vm.loginOut
    }
  }, [_vm._v("退出登录")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });