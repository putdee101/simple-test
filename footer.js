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
        var ele = document.getElementById('nx-form-container');
        var footer = document.createElement('div');
        footer.innerHTML = "\n    <hr><br>\n    <div style=\"display: flex; justify-content: space-between;\">\n        <div>\n            <a href=\"#\" style=\"margin-right: 5px;\">Prescribing Information</a>\n            <a href=\"#\" style=\"margin-right: 5px;\">Instructions for use</a>\n            <a href=\"#\" style=\"margin-right: 5px;\">Medication Guide</a>\n        </div>\n        <div>\n            <b>To speak to customer support:</b><br>\n            <b>Call (XXX) XXX-XXXX</b>\n        </div>\n    </div>\n    <div style=\"display: flex; justify-content: start;\">\n        <div>\n            <small>This site is intended for US residents ages 18 and older.</small><br>\n            <small>ProductTM is a trademark owned or licensed by Eli Lilly and Company, Its subsidiaries, or affiliates.</small><br>\n            <small>XX-XX-XX-XXXX MM/YYYY<a href=\"#\">&copy;Lilly USA, LLC 2022. All rights reserved.</a></small>\n        </div>\n    </div>\n    <div style=\"display: flex; justify-content: space-between;\">\n        <div>\n            <img src=\"https://logos-download.com/wp-content/uploads/2016/11/Lilly_logo_logotype.png\" style=\"width: 10%\">\n        </div>\n        <div>\n            <small><a href=\"#\">Cookie Settings</a></small><br><br>\n            <small>fb&nbsp;insta&nbsp;linkedin&nbsp;youtube&nbsp;twitter</small><br><br>\n            <i class=\"fa-brands fa-facebook\"></i>\n            <small><a href=\"#\">Privacy Policy</a>&nbsp;&nbsp;<a href=\"#\">Terms of Use</a>&nbsp;&nbsp;<a href=\"#\">Accessibility Statement</a>&nbsp;&nbsp;<a href=\"#\">Site Map</a>&nbsp;&nbsp;</small><br><br>\n        </div>\n    </div>\n    ";
        footer.style.margin = '5%';
        footer.style.padding = '5%';
        ele.appendChild(footer);
        // ele.setAttribute('class', 'footer-style');
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<script src=\"https://kit.fontawesome.com/2dcb26fd11.js\" crossorigin=\"anonymous\"></script>"])));
      }
    }]
  };
}, s);

export { LillyFooter };