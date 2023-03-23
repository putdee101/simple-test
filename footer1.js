import { _ as _decorate, s, i, a as _taggedTemplateLiteral, e, y, b as e$1, c as _inherits, d as _createSuper, f as _createClass, g as _classCallCheck, h as _assertThisInitialized } from './query-assigned-elements-1ac3617b.js';

var _templateObject, _templateObject2;
// import { updatePluginValue } from '../../utils/events';

var LillyFooter = _decorate([e$1('lilly-footer')], function (_initialize, _LitElement) {
  var LillyFooter = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillyFooter, _LitElement2);
    var _super = _createSuper(LillyFooter);
    function LillyFooter() {
      var _this;
      _classCallCheck(this, LillyFooter);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillyFooter);
  }(_LitElement);
  return {
    F: LillyFooter,
    d: [{
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .footer-style {\n        background-color: red;\n        color: red;\n    }\n  "])));
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
        return import('./footer.config-0627f07c.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        var ele = document.getElementsByClassName('nx-form-footing')[0];
        ele.innerHTML = '<p class="footer-style">Yoyo!</p>';
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

export { LillyFooter };
