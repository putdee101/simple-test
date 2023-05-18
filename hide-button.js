import { _ as _decorate, s, y, a as _taggedTemplateLiteral, e, b as _inherits, c as _createSuper, d as _createClass, f as _classCallCheck, g as _assertThisInitialized } from './query-assigned-elements-370d3bd1.js';

var _templateObject;
var LillyHideButton = _decorate([e("lilly-hide-button")], function (_initialize, _LitElement) {
  var LillyHideButton = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillyHideButton, _LitElement2);
    var _super = _createSuper(LillyHideButton);
    function LillyHideButton() {
      var _this;
      _classCallCheck(this, LillyHideButton);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillyHideButton);
  }(_LitElement);
  return {
    F: LillyHideButton,
    d: [{
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value:
      // @property({ type: Number })
      // skipCount = 0;

      function getMetaConfig() {
        return import('./hide-button.config-f9d84c88.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        setInterval(function () {
          document.querySelectorAll("#appcontainer button").forEach(function (button) {
            if (button) {
              document.querySelectorAll("#actionpanel1-group-control button").forEach(function (actButton) {
                if (actButton.innerHTML.trim().toLowerCase() === "continue" && actButton.style.visibility != 'hidden') {
                  actButton.style.visibility = 'hidden';
                }
              });
            }
            if (button.innerText.trim().toLowerCase().includes("download document taltz lt patient hipaa authorization")) {
              document.querySelectorAll("#actionpanel1-group-control button").forEach(function (actButton) {
                if (actButton.innerHTML.trim().toLowerCase() === "continue") {
                  actButton.style.visibility = '';
                }
              });
            }
          });
        }, 10);
        return y(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      }
    }]
  };
}, s);

export { LillyHideButton };
