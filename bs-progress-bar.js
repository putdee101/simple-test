import { _ as _decorate, s, i, a as _taggedTemplateLiteral, e, y, b as e$1, c as _inherits, d as _createSuper, f as _createClass, g as _classCallCheck, h as _assertThisInitialized } from './query-assigned-elements-1ac3617b.js';

var _templateObject, _templateObject2;
var LillyBsProgressBar = _decorate([e$1('lilly-bs-progress-bar')], function (_initialize, _LitElement) {
  var LillyBsProgressBar = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillyBsProgressBar, _LitElement2);
    var _super = _createSuper(LillyBsProgressBar);
    function LillyBsProgressBar() {
      var _this;
      _classCallCheck(this, LillyBsProgressBar);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillyBsProgressBar);
  }(_LitElement);
  return {
    F: LillyBsProgressBar,
    d: [{
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    :host {\n      --mdc-theme-primary: #3F62D4;\n    }\n  "])));
      }
    }, {
      kind: "field",
      decorators: [e()],
      key: "titleField",
      value: void 0
    }, {
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "disabled",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Number
      })],
      key: "value",
      value: function value() {
        return 0;
      }
    }, {
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./bs-progress-bar.config-a486dd37.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        var headTag = document.getElementsByTagName('head')[0];
        var linkTag = document.createElement('link');
        linkTag.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
        linkTag.rel = "stylesheet";
        // linkTag.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
        // linkTag.crossOrigin = "anonymous";
        headTag.append(linkTag);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        // let value = this.value || 0.2;
        return y(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    <div style=\"display: flex; text-align: center;\">\n        <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"", "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"", "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <div class=\"progress\" style=\"height: 5px;\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%;\" aria-valuenow=\"", "\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n    </div>\n    "])), this.value, this.value, this.value);
      }
    }]
  };
}, s);

export { LillyBsProgressBar };
