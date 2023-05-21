import { _ as _decorate, s, y, a as _taggedTemplateLiteral, e, b as _inherits, c as _createSuper, d as _createClass, f as _classCallCheck, g as _assertThisInitialized } from './query-assigned-elements-370d3bd1.js';

var _templateObject;
var LillySkipPage = _decorate([e('lilly-skip-page')], function (_initialize, _LitElement) {
  var LillySkipPage = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillySkipPage, _LitElement2);
    var _super = _createSuper(LillySkipPage);
    function LillySkipPage() {
      var _this;
      _classCallCheck(this, LillySkipPage);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillySkipPage);
  }(_LitElement);
  return {
    F: LillySkipPage,
    d: [{
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./skip-page.config-32a40bdb.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var timer = setInterval(function () {
          var labelFlag = false;
          document.querySelectorAll('.needed-label').forEach(function (label) {
            if (label.offsetParent !== null) {
              labelFlag = true;
            }
          });
          if (labelFlag) {
            var flag = false;
            var inputList = document.querySelectorAll('.lilly-multiple-choice input');
            inputList.forEach(function (item) {
              if (item.checked) {
                flag = true;
              }
            });
            if (flag === false) {
              document.querySelectorAll('#actionpanel1-group-control button').forEach(function (item) {
                if (item.innerHTML.trim().toLowerCase() === 'continue' || item.innerHTML.trim().toLowerCase() === 'submit') {
                  item.click();
                }
              });
            } else {
              clearInterval(timer);
            }
          }
        }, 10);
        return y(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      }
    }]
  };
}, s);

export { LillySkipPage };
