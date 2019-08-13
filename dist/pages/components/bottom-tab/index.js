"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/prop-types/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomTab = function (_BaseComponent) {
  _inherits(BottomTab, _BaseComponent);

  function BottomTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BottomTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BottomTab.__proto__ || Object.getPrototypeOf(BottomTab)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["tabList", "tab"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BottomTab, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BottomTab.prototype.__proto__ || Object.getPrototypeOf(BottomTab.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "showTab",
    value: function showTab(index) {
      if (index == this.props) {
        return;
      }
      switch (index) {
        case 0:
          _index2.default.redirectTo({
            url: "/pages/index/index"
          });
          break;
        case 1:
          _index2.default.redirectTo({
            url: "/pages/coming-soon/index"
          });
          break;
        case 2:
          _index2.default.redirectTo({
            url: "/pages/my-music/index"
          });
          break;
        case 3:
          _index2.default.redirectTo({
            url: "/pages/user-center/index"
          });
          break;
        default:
          break;
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var tabList = [{ title: '正在热映', iconType: 'video' }, { title: '即将上映', iconType: 'calendar' }, { title: '我的音乐', iconType: 'music' }, { title: '个人中心', iconType: 'user' }];

      Object.assign(this.__state, {
        tabList: tabList
      });
      return this.__state;
    }
  }]);

  return BottomTab;
}(_index.Component);

BottomTab.properties = {
  "tab": {
    "type": null,
    "value": null
  }
};
BottomTab.$$events = ["showTab"];


BottomTab.propTypes = {
  tab: _index4.default.number
};
exports.default = BottomTab;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(BottomTab));