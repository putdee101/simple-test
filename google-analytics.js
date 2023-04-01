import { _ as _decorate, s, e, y, a as _taggedTemplateLiteral, b as e$1, c as _inherits, d as _createSuper, f as _createClass, g as _classCallCheck, h as _assertThisInitialized } from './query-assigned-elements-1ac3617b.js';

var _templateObject;
// import { updatePluginValue } from '../../utils/events';

var LillyGoogleAnalytics = _decorate([e$1('lilly-google-analytics')], function (_initialize, _LitElement) {
  var LillyGoogleAnalytics = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillyGoogleAnalytics, _LitElement2);
    var _super = _createSuper(LillyGoogleAnalytics);
    function LillyGoogleAnalytics() {
      var _this;
      _classCallCheck(this, LillyGoogleAnalytics);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillyGoogleAnalytics);
  }(_LitElement);
  return {
    F: LillyGoogleAnalytics,
    d: [{
      kind: "field",
      decorators: [e()],
      key: "titleField",
      value: void 0
    }, {
      kind: "field",
      decorators: [e()],
      key: "src",
      value: function value() {
        return 'https://www.googletagmanager.com/ns.html?id=GTM-PXL5B34';
      }
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
        return import('./google-analytics.config-bb6ef5a5.js').then(function (x) {
          return x.config;
        });
      }

      //   static properties = {
      //     src: 'https://www.googletagmanager.com/ns.html?id=GTM-PXL5B34'
      // }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        // let ele = <HTMLElement>document.getElementById('nwc-form-runtime-root');
        // let gaDiv = document.createElement('div');  
        // gaDiv.innerHTML = `<!-- Google Tag Manager -->
        // <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({‘gtm.start’:
        // new Date().getTime(),event:‘gtm.js’});var f=d.getElementsByTagName(s)[0],
        // j=d.createElement(s),dl=l!=‘dataLayer’?‘&l=‘+l:‘’;j.async=true;j.src=
        // ’https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        // })(window,document,‘script’,‘dataLayer’,‘GTM-PXL5B34’);console.log("GTM Script is Running");</script>
        // <!-- End Google Tag Manager -->`; 
        // gaDiv.innerHTML = `
        // <!-- Google tag (gtag.js) -->
        // <script async src="https://www.googletagmanager.com/gtag/js?id=G-QJCCTSLZYY"></script>
        // <script>
        //   window.dataLayer = window.dataLayer || [];
        //   function gtag(){dataLayer.push(arguments)};
        //   gtag('js', new Date());

        //   gtag('config', 'G-QJCCTSLZYY');
        //   console.log("GTAG-Script is running");
        // </script>
        // `;
        // ele.innerHTML = gaDiv + ele.innerHTML;
        // ele.prepend(gaDiv);
        var head = document.getElementsByTagName('head')[0];
        var gaDiv = document.createElement('div');
        gaDiv.innerHTML = "\n    <!-- Google tag (gtag.js) -->\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=G-QJCCTSLZYY\"></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments)};\n      gtag('js', new Date());\n\n      gtag('config', 'G-QJCCTSLZYY');\n      console.log(\"GTAG-Script is running\");\n    </script>\n    ";
        head.prepend(gaDiv);
      }
    }, {
      kind: "method",
      key: "someFunc",
      value: function someFunc() {
        var gaURL = 'https://www.googletagmanager.com/ns.html?id=GTM-PXL5B34';
        gaURL = gaURL.substring(gaURL.length - 16, gaURL.length);
        return gaURL;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        console.log('Props', {
          src: this.src
        });
        return y(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

        // return html`<head><!-- Google Tag Manager -->
        // <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({‘gtm.start’:
        // new Date().getTime(),event:‘gtm.js’});var f=d.getElementsByTagName(s)[0],
        // j=d.createElement(s),dl=l!=‘dataLayer’?‘&l=‘+l:‘’;j.async=true;j.src=
        // ’https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        // })(window,document,‘script’,‘dataLayer’,‘GTM-PXL5B34’);</script>
        // <!-- End Google Tag Manager --></head>`;
      }
    }]
  };
}, s);

export { LillyGoogleAnalytics };
