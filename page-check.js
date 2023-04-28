import { _ as _decorate, s, y, a as _taggedTemplateLiteral, e, b as _inherits, c as _createSuper, d as _createClass, f as _classCallCheck, g as _assertThisInitialized } from './query-assigned-elements-40f0bdfe.js';

var _templateObject;
var LillyPageCheck = _decorate([e('lilly-page-check')], function (_initialize, _LitElement) {
  var LillyPageCheck = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillyPageCheck, _LitElement2);
    var _super = _createSuper(LillyPageCheck);
    function LillyPageCheck() {
      var _this;
      _classCallCheck(this, LillyPageCheck);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillyPageCheck);
  }(_LitElement);
  return {
    F: LillyPageCheck,
    d: [{
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./page-check.config-c6effa57.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var flag = false;
        var inputList = document.querySelectorAll('.lilly-multiple-choice input');
        inputList.forEach(function (item) {
          if (item.checked) {
            flag = true;
          }
        });
        if (flag === false) {
          document.querySelectorAll('#actionpanel1-group-control button').forEach(function (item) {
            if (item.innerHTML.trim().toLowerCase() === 'continue') {
              item.click();
            }
          });
        }
        return y(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      }
    }]
  };
}, s);

export { LillyPageCheck };
