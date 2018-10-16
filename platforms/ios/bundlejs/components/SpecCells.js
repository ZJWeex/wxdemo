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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
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

/***/ 21:
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

/***/ 22:
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

/***/ 23:
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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SpecCells = __webpack_require__(20);

var _SpecCells2 = _interopRequireDefault(_SpecCells);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_SpecCells2.default.el = '#root';
new Vue(_SpecCells2.default);

/***/ })

/******/ });