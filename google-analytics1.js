import { _ as _decorate, s, e, y, a as _taggedTemplateLiteral, b as e$1, c as _inherits, d as _createSuper, f as _createClass, g as _classCallCheck, h as _assertThisInitialized } from './query-assigned-elements-1ac3617b.js';

var _templateObject;
// import { updatePluginValue } from '../../utils/events';

var NintexGoogleAnalytics = _decorate([e$1('lilly-google-analytics')], function (_initialize, _LitElement) {
  var NintexGoogleAnalytics = /*#__PURE__*/function (_LitElement2) {
    _inherits(NintexGoogleAnalytics, _LitElement2);
    var _super = _createSuper(NintexGoogleAnalytics);
    function NintexGoogleAnalytics() {
      var _this;
      _classCallCheck(this, NintexGoogleAnalytics);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(NintexGoogleAnalytics);
  }(_LitElement);
  return {
    F: NintexGoogleAnalytics,
    d: [{
      kind: "field",
      decorators: [e()],
      key: "titleField",
      value: void 0
    }, {
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value:
      //   static styles = css`
      //     :host {
      //       /* height: 100%; */
      //       width: 100%;
      //       display: block;

      //       --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);
      //     }
      //   `;

      function getMetaConfig() {
        return import('./google-analytics.config-a8a23ab9.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        var ele = document.getElementById('nx-form-container');
        var gaDiv = document.createElement('div');
        gaDiv.innerHTML = "<head><!-- Google Tag Manager -->\n    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\u2018gtm.start\u2019:\n    new Date().getTime(),event:\u2018gtm.js\u2019});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!=\u2018dataLayer\u2019?\u2018&l=\u2018+l:\u2018\u2019;j.async=true;j.src=\n    \u2019https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,\u2018script\u2019,\u2018dataLayer\u2019,\u2018GTM-PXL5B34\u2019);</script>\n    <!-- End Google Tag Manager --></head><body><!-- Google Tag Manager (noscript) -->\n    <noscript><iframe src=\u201Chttps://www.googletagmanager.com/ns.html?id=GTM-PXL5B34\u201D\n    height=\u201C0\" width=\u201C0\u201D style=\u201Cdisplay:none;visibility:hidden\u201D></iframe></noscript>\n    <!-- End Google Tag Manager (noscript) --></body>";
        ele.appendChild(gaDiv);
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

export { NintexGoogleAnalytics };
