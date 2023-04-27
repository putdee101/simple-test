import { _ as _decorate, s, e, y, a as _taggedTemplateLiteral, b as e$1, c as _inherits, d as _createSuper, f as _createClass, g as _classCallCheck, h as _assertThisInitialized } from './query-assigned-elements-941c294d.js';

var footerHtml = "\n<hr><br><div class=\"footerStyle\">\n<div style=\"display: flex; justify-content: space-between;\">\n    <div style=\"width: 70%\">\n        <a href=\"https://google.com\" style=\"margin-right: 5%; text-decoration: underline; color: #00749E;\">link1Text</a>\n        <a href=\"#\" style=\"margin-right: 5%; text-decoration: underline; color: #00749E;\">Instructions for use</a>\n        <a href=\"#\" style=\"margin-right: 5%; text-decoration: underline; color: #00749E;\">Medication Guide</a>\n    </div>\n    <div>\n        <b>Questions? Call Miri:</b><br>\n        <span>Call 1-123-456-7890</span>\n    </div>\n</div>\n<br>\n<div style=\"display: flex; justify-content: start;\">\n    <div>\n        <small>This site is intended for US residents ages 18 and older.</small><br>\n        <small>ProductTM is a trademark owned or licensed by Eli Lilly and Company, Its subsidiaries, or affiliates.</small><br>\n        <small>XX-XX-XX-XXXX MM/YYYY&nbsp;<a href=\"#\" style=\"text-decoration: underline; color: #00749E;\">&copy;Lilly USA, LLC 2022. All rights reserved.</a></small>\n    </div>\n</div>\n<br><br>\n<div style=\"display: flex; justify-content: space-between;\">\n    <div style=\"width: 50%\">\n        <img src=\"https://logos-download.com/wp-content/uploads/2016/11/Lilly_logo_logotype.png\" style=\"width: 18%\">\n    </div>\n    <div style=\"width: 50%; text-align: right;\">\n        <small>\n            <a href=\"#\" style=\"margin-right: 5%; text-decoration: underline; color: #00749E;\">Privacy Policy</a>\n            <a href=\"#\" style=\"margin-right: 5%; text-decoration: underline; color: #00749E;\">Terms of Use</a>\n            <a href=\"#\" style=\"margin-right: 5%; text-decoration: underline; color: #00749E;\">Accessibility Statement</a>\n            <a href=\"#\" style=\"text-decoration: underline; color: #00749E;\">Site Map</a>\n        </small>\n    </div>\n</div></div>\n";

var footerCss = "\n<style>\n.footerStyle {\n    margin: 5%;\n    font-family: Roboto, sans-serif;\n}\n</style>\n";

var _templateObject;
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
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./footer.config-1548935f.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "link1Text",
      value: function value() {
        return '';
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        var ele = document.getElementById('nx-form-container');
        var footer = document.createElement('div');
        footerHtml.replace('link1Text', this.link1Text);
        footer.innerHTML = footerCss + " " + footerHtml;
        ele.appendChild(footer);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      }
    }]
  };
}, s);

export { LillyFooter };
