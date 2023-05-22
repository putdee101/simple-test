import { _ as _decorate, s, e, y, a as _taggedTemplateLiteral, b as e$1, c as _inherits, d as _createSuper, f as _createClass, g as _classCallCheck, h as _assertThisInitialized } from './query-assigned-elements-03038c04.js';

var _templateObject;
var LillySkipPage = _decorate([e$1("lilly-skip-page")], function (_initialize, _LitElement) {
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
      kind: "field",
      decorators: [e({
        type: Number
      })],
      key: "skipCount",
      value: function value() {
        return 0;
      }
    }, {
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./skip-page.config-092cefb0.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;
        var labelSeenCount = 0;
        var clickCount = 0;
        var timer = setInterval(function () {
          var labelFlag = false;
          document.querySelectorAll(".needed-label").forEach(function (label) {
            if (label.offsetParent !== null && labelSeenCount == 0) {
              labelFlag = true;
              labelSeenCount++;
            } else if (labelSeenCount > 0) {
              labelFlag = true;
              labelSeenCount++;
            }
          });
          if (labelFlag) {
            var flag = false;
            var inputList = document.querySelectorAll(".lilly-multiple-choice input");
            inputList.forEach(function (item) {
              if (item.checked) {
                flag = true;
              }
            });
            if (flag === false) {
              document.querySelectorAll("#actionpanel1-group-control button").forEach(function (item) {
                if (item.innerHTML.trim().toLowerCase() === "continue" || item.innerHTML.trim().toLowerCase() === "submit") {
                  var view = document.getElementById("ntxHostContent");
                  view.style.visibility = "hidden";
                  if (clickCount < parseInt(_this2.skipCount.toString())) {
                    item.click();
                    clickCount++;
                  }
                }
              });
            } else {
              clearInterval(timer);
              _this2.skipCount = 0;
            }
          }
        }, 10);
        return y(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      }
    }]
  };
}, s);

export { LillySkipPage };
