"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserCenter = function (_Taro$Component) {
  _inherits(UserCenter, _Taro$Component);

  function UserCenter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserCenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserCenter.__proto__ || Object.getPrototypeOf(UserCenter)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["infos", "name", "code", "currentTab"], _this.config = {
      navigationBarTitleText: '个人中心',
      backgroundTextStyle: '#EEEFF1'
    }, _this.handleClick = function (name) {
      console.log(name);
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserCenter, [{
    key: "_constructor",
    value: function _constructor() {
      _get(UserCenter.prototype.__proto__ || Object.getPrototypeOf(UserCenter.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        code: '',
        currentTab: 3,
        infos: ''
      };
    }
  }, {
    key: "showSettings",
    value: function showSettings() {
      _index2.default.navigateTo({
        url: "/pages/user-setting/index"
      });
    }

    //获取用户信息

  }, {
    key: "getUserinfo",
    value: function getUserinfo() {
      _index2.default.getUserInfo({
        success: function success(res) {
          console.log(res.userInfo);
          this.state.infos = res.userInfo;
        },
        fail: function fail(res) {
          console.log('获取用户信息失败');
          console.log(res);
        }
      });
    }
  }, {
    key: "showMessages",
    value: function showMessages() {
      _index2.default.navigateTo({
        url: "/pages/user-message/index"
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _index2.default.login().then(function (res) {
        if (res.errMsg == "login:ok") {
          _this2.setState({
            code: res.code
          });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserinfo();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var infos = this.__state.infos;
      var name = infos.nickName ? infos.nickName : '点击登录';
      Object.assign(this.__state, {
        name: name
      });
      return this.__state;
    }
  }]);

  return UserCenter;
}(_index2.default.Component);

UserCenter.properties = {};
UserCenter.$$events = ["showMessages", "showSettings", "handleClick"];
exports.default = UserCenter;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(UserCenter, true));