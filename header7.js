import { _ as _decorate, s, i, a as _taggedTemplateLiteral, y, e as e$1, b as _inherits, c as _createSuper, d as _createClass, f as _classCallCheck, g as _assertThisInitialized } from './query-assigned-elements-370d3bd1.js';
import { e } from './property-3bc85059.js';

var _templateObject, _templateObject2;
var LillyHeader = _decorate([e$1('lilly-header')], function (_initialize, _LitElement) {
  var LillyHeader = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillyHeader, _LitElement2);
    var _super = _createSuper(LillyHeader);
    function LillyHeader() {
      var _this;
      _classCallCheck(this, LillyHeader);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillyHeader);
  }(_LitElement);
  return {
    F: LillyHeader,
    d: [{
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  "])));
      }
    }, {
      kind: "field",
      decorators: [e()],
      key: "titleField",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "height",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "width",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "imgUrl",
      value: void 0
    }, {
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./header.config-dbae31a6.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        var ele = document.getElementById('nx-form-container');
        var header = document.createElement('div');
        header.innerHTML = "\n        <style>\n            .imgWidth {\n                height: ".concat(this.height, "px,\n                width: ").concat(this.width, "px\n            }\n\n            @media only screen and (max-width: 768px) {\n                .imgWidth {\n                    height: ").concat(this.height * 1.5, "px,\n                    width: ").concat(this.width * 1.5, "px\n                }\n            }\n        </style>\n        <div style=\"display: flex; justify-content: start; align-items: center;\">\n            <img src=\"").concat(this.imgUrl, "\" class=\"imgWidth\">\n        </div>\n        <hr>\n      ");
        header.style.fontFamily = 'Roboto, sans-serif';
        ele.prepend(header);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
      }
    }]
  };
}, s);

export { LillyHeader };
