import { _ as _decorate, s, y, a as _taggedTemplateLiteral, e as e$1, b as _inherits, c as _createSuper, d as _createClass, f as _classCallCheck, g as _assertThisInitialized, j as _asyncToGenerator, k as _regeneratorRuntime } from './query-assigned-elements-370d3bd1.js';
import { e } from './property-3bc85059.js';

var _templateObject;
var LillyZipCheck = _decorate([e$1('lilly-zip-check')], function (_initialize, _LitElement) {
  var LillyZipCheck = /*#__PURE__*/function (_LitElement2) {
    _inherits(LillyZipCheck, _LitElement2);
    var _super = _createSuper(LillyZipCheck);
    function LillyZipCheck() {
      var _this;
      _classCallCheck(this, LillyZipCheck);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(LillyZipCheck);
  }(_LitElement);
  return {
    F: LillyZipCheck,
    d: [{
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./zip-check.config-68295a11.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "apiKey",
      value: void 0
    }, {
      kind: "field",
      key: "city",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      key: "state",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      key: "zipcode",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      key: "smartyResponse",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this,
          _document$querySelect,
          _document$querySelect2,
          _document$querySelect3;
        var eventMethod = function eventMethod() {
          var city = document.querySelector('.practice-user-city');
          var state = document.querySelector('.practice-user-state');
          var zip = document.querySelector('.practice-user-zip');
          if ((city === null || city === void 0 ? void 0 : city.value) != '' && (state === null || state === void 0 ? void 0 : state.value) != '' && (zip === null || zip === void 0 ? void 0 : zip.value) != '') {
            _this2.city = city === null || city === void 0 ? void 0 : city.value;
            _this2.state = state === null || state === void 0 ? void 0 : state.value;
            _this2.zipcode = zip === null || zip === void 0 ? void 0 : zip.value;
            _this2.getSmartyStreets();
          }
        };
        (_document$querySelect = document.querySelector('.practice-user-city')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('blur', eventMethod);
        (_document$querySelect2 = document.querySelector('.practice-user-state')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.addEventListener('blur', eventMethod);
        (_document$querySelect3 = document.querySelector('.practice-user-zip')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.addEventListener('blur', eventMethod);
        return y(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      }
    }, {
      kind: "method",
      key: "getSmartyStreets",
      value: function () {
        var _getSmartyStreets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var response, result;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://us-zipcode.api.smartystreets.com/lookup?key=' + this.apiKey + '&city=' + this.city + '&state=' + this.state + '&zipcode=' + this.zipcode, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();
              case 5:
                result = _context.sent;
                this.smartyResponse = result;
                console.log(this.smartyResponse);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function getSmartyStreets() {
          return _getSmartyStreets.apply(this, arguments);
        }
        return getSmartyStreets;
      }()
    }]
  };
}, s);

export { LillyZipCheck };
