import { _ as _decorate, s, i, a as _taggedTemplateLiteral, e, y, b as e$1, c as _inherits, d as _createSuper, f as _createClass, g as _classCallCheck, h as _assertThisInitialized } from './query-assigned-elements-1ac3617b.js';

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
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./header.config-93c9ab20.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        var ele = document.getElementById('nx-form-container');
        var header = document.createElement('div');
        header.innerHTML = "  \n        <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n            <img src=\"https://images.ctfassets.net/di8r7bkyya77/40qWeEqaeKk9a82ZUzWbRQ/687371fe3a0511b4c010b326d3afa8b3/taltz-logo.svg\" style=\"width: 8%;\">\n            <button style=\"display: inline-block; padding: calc(.5rem - 2px) calc(1.5rem - 2px); font-size: 1.125rem; font-weight: 700; line-height: 1.5rem; color: #212121; background-color: #f5f5f5; border: 2px solid transparent; border-radius: 4px; box-shadow: 0 2px 3px rgba(0,0,0,.2); transition: background-color .25s ease,color .25s ease;\"> Contact Us </button>\n        </div>\n        <hr>\n      ";
        header.style.fontFamily = 'Roboto, sans-serif';
        ele.prepend(header);
        // ele.setAttribute('class', 'footer-style');
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
