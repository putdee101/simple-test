function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _decorate(decorators, factory, superClass, mixins) {
  var api = _getDecoratorsApi();
  if (mixins) {
    for (var i = 0; i < mixins.length; i++) {
      api = mixins[i](api);
    }
  }
  var r = factory(function initialize(O) {
    api.initializeInstanceElements(O, decorated.elements);
  }, superClass);
  var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
  api.initializeClassElements(r.F, decorated.elements);
  return api.runClassFinishers(r.F, decorated.finishers);
}
function _getDecoratorsApi() {
  _getDecoratorsApi = function () {
    return api;
  };
  var api = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function (O, elements) {
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === "own") {
            this.defineClassElement(O, element);
          }
        }, this);
      }, this);
    },
    initializeClassElements: function (F, elements) {
      var proto = F.prototype;
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;
          if (element.kind === kind && (placement === "static" || placement === "prototype")) {
            var receiver = placement === "static" ? F : proto;
            this.defineClassElement(receiver, element);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (receiver, element) {
      var descriptor = element.descriptor;
      if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }
      Object.defineProperty(receiver, element.key, descriptor);
    },
    decorateClass: function (elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {
        static: [],
        prototype: [],
        own: []
      };
      elements.forEach(function (element) {
        this.addElementPlacement(element, placements);
      }, this);
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = this.decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      }, this);
      if (!decorators) {
        return {
          elements: newElements,
          finishers: finishers
        };
      }
      var result = this.decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    },
    addElementPlacement: function (element, placements, silent) {
      var keys = placements[element.placement];
      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError("Duplicated element (" + element.key + ")");
      }
      keys.push(element.key);
    },
    decorateElement: function (element, placements) {
      var extras = [];
      var finishers = [];
      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = this.fromElementDescriptor(element);
        var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        this.addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            this.addElementPlacement(newExtras[j], placements);
          }
          extras.push.apply(extras, newExtras);
        }
      }
      return {
        element: element,
        finishers: finishers,
        extras: extras
      };
    },
    decorateConstructor: function (elements, decorators) {
      var finishers = [];
      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = this.fromClassDescriptor(elements);
        var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }
        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;
          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                throw new TypeError("Duplicated element (" + elements[j].key + ")");
              }
            }
          }
        }
      }
      return {
        elements: elements,
        finishers: finishers
      };
    },
    fromElementDescriptor: function (element) {
      var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === "field") obj.initializer = element.initializer;
      return obj;
    },
    toElementDescriptors: function (elementObjects) {
      if (elementObjects === undefined) return;
      return _toArray(elementObjects).map(function (elementObject) {
        var element = this.toElementDescriptor(elementObject);
        this.disallowProperty(elementObject, "finisher", "An element descriptor");
        this.disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
      }, this);
    },
    toElementDescriptor: function (elementObject) {
      var kind = String(elementObject.kind);
      if (kind !== "method" && kind !== "field") {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }
      var key = _toPropertyKey(elementObject.key);
      var placement = String(elementObject.placement);
      if (placement !== "static" && placement !== "prototype" && placement !== "own") {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }
      var descriptor = elementObject.descriptor;
      this.disallowProperty(elementObject, "elements", "An element descriptor");
      var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
      };
      if (kind !== "field") {
        this.disallowProperty(elementObject, "initializer", "A method descriptor");
      } else {
        this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
      }
      return element;
    },
    toElementFinisherExtras: function (elementObject) {
      var element = this.toElementDescriptor(elementObject);
      var finisher = _optionalCallableProperty(elementObject, "finisher");
      var extras = this.toElementDescriptors(elementObject.extras);
      return {
        element: element,
        finisher: finisher,
        extras: extras
      };
    },
    fromClassDescriptor: function (elements) {
      var obj = {
        kind: "class",
        elements: elements.map(this.fromElementDescriptor, this)
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    },
    toClassDescriptor: function (obj) {
      var kind = String(obj.kind);
      if (kind !== "class") {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }
      this.disallowProperty(obj, "key", "A class descriptor");
      this.disallowProperty(obj, "placement", "A class descriptor");
      this.disallowProperty(obj, "descriptor", "A class descriptor");
      this.disallowProperty(obj, "initializer", "A class descriptor");
      this.disallowProperty(obj, "extras", "A class descriptor");
      var finisher = _optionalCallableProperty(obj, "finisher");
      var elements = this.toElementDescriptors(obj.elements);
      return {
        elements: elements,
        finisher: finisher
      };
    },
    runClassFinishers: function (constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
          if (typeof newConstructor !== "function") {
            throw new TypeError("Finishers must return a constructor.");
          }
          constructor = newConstructor;
        }
      }
      return constructor;
    },
    disallowProperty: function (obj, name, objectType) {
      if (obj[name] !== undefined) {
        throw new TypeError(objectType + " can't have a ." + name + " property.");
      }
    }
  };
  return api;
}
function _createElementDescriptor(def) {
  var key = _toPropertyKey(def.key);
  var descriptor;
  if (def.kind === "method") {
    descriptor = {
      value: def.value,
      writable: true,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "get") {
    descriptor = {
      get: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "set") {
    descriptor = {
      set: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "field") {
    descriptor = {
      configurable: true,
      writable: true,
      enumerable: true
    };
  }
  var element = {
    kind: def.kind === "field" ? "field" : "method",
    key: key,
    placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
    descriptor: descriptor
  };
  if (def.decorators) element.decorators = def.decorators;
  if (def.kind === "field") element.initializer = def.value;
  return element;
}
function _coalesceGetterSetter(element, other) {
  if (element.descriptor.get !== undefined) {
    other.descriptor.get = element.descriptor.get;
  } else {
    other.descriptor.set = element.descriptor.set;
  }
}
function _coalesceClassElements(elements) {
  var newElements = [];
  var isSameElement = function (other) {
    return other.kind === "method" && other.key === element.key && other.placement === element.placement;
  };
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var other;
    if (element.kind === "method" && (other = newElements.find(isSameElement))) {
      if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
        if (_hasDecorators(element) || _hasDecorators(other)) {
          throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
        }
        other.descriptor = element.descriptor;
      } else {
        if (_hasDecorators(element)) {
          if (_hasDecorators(other)) {
            throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
          }
          other.decorators = element.decorators;
        }
        _coalesceGetterSetter(element, other);
      }
    } else {
      newElements.push(element);
    }
  }
  return newElements;
}
function _hasDecorators(element) {
  return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
  return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _optionalCallableProperty(obj, name) {
  var value = obj[name];
  if (value !== undefined && typeof value !== "function") {
    throw new TypeError("Expected '" + name + "' to be a function");
  }
  return value;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$6=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$4=new WeakMap;let o$5 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$6&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$4.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$5("string"==typeof t?t:t+"",void 0,s$3),i$5=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$5(n,t,s$3)},S$1=(s,n)=>{e$6?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$5=window,r$1=e$5.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$4=e$5.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a$1};let d$1 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$4||o$4({ReactiveElement:d$1}),(null!==(s$2=e$5.reactiveElementVersions)&&void 0!==s$2?s$2:e$5.reactiveElementVersions=[]).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$4=window,s$1=i$4.trustedTypes,e$4=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$3=`lit$${(Math.random()+"").slice(9)}$`,n$2="?"+o$3,l$2=`<${n$2}>`,h=document,r=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=h.createTreeWalker(h,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$2:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$3+y):s+o$3+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$4?e$4.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$3)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$3),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$3),i=t.length-1;if(i>0){l.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],r());}}}else if(8===l.nodeType)if(l.data===n$2)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$3,t+1));)c.push({type:7,index:h}),t+=o$3.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++);}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):c(t)?this.k(t):this.g(t);}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}g(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t;}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else {const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new C(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(r()),this.O(r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===b?void 0:t;}}const R=s$1?s$1.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==b?this.element.setAttribute(this.name,R):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=i$4.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(t$2=i$4.litHtmlVersions)&&void 0!==t$2?t$2:i$4.litHtmlVersions=[]).push("2.6.1");const Z=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(r(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$2;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Z(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$3=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$2(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$3(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return e$2({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$2(i,n){return o$1({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$1(e){return o$1({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = i$5 `.mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{height:4px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{border-radius:3px;height:6px;overflow:hidden;top:-1px}.mdc-slider .mdc-slider__track--active_fill{border-top:6px solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{border-radius:2px;height:4px;left:0;top:0}.mdc-slider .mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider .mdc-slider__track--active_fill{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider .mdc-slider__track--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.24}.mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.24}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;left:var(--slider-value-indicator-container-left, 50%);pointer-events:none;position:absolute;right:var(--slider-value-indicator-container-right);transform:translateX(-50%);transform:var(--slider-value-indicator-container-transform, translateX(-50%))}.mdc-slider .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator::before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;left:var(--slider-value-indicator-caret-left, 50%);position:absolute;right:var(--slider-value-indicator-caret-right);transform:translateX(-50%);transform:var(--slider-value-indicator-caret-transform, translateX(-50%));width:0}.mdc-slider .mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}@media(prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__value-indicator-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-slider .mdc-slider__value-indicator{background-color:#000;opacity:.6}.mdc-slider .mdc-slider__value-indicator::before{border-top-color:#000}.mdc-slider .mdc-slider__value-indicator{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider .mdc-slider__thumb{display:flex;height:48px;left:-24px;outline:none;position:absolute;user-select:none;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);border:10px solid;border-radius:50%;box-sizing:border-box;height:20px;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);width:20px}.mdc-slider .mdc-slider__thumb-knob{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider .mdc-slider__thumb::before,.mdc-slider .mdc-slider__thumb::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider .mdc-slider__thumb:hover::before,.mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider .mdc-slider__tick-mark--inactive{border-radius:50%;height:2px;width:2px}.mdc-slider .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider .mdc-slider__tick-mark--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.6}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media(prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider--disabled{opacity:.38;cursor:auto}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__input{cursor:pointer;left:0;margin:0;height:100%;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}:host{outline:none;display:block;-webkit-tap-highlight-color:transparent}.ripple{--mdc-ripple-color:#6200ee;--mdc-ripple-color:var(--mdc-theme-primary, #6200ee)}`;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const fn = () => { };
const optionsBlock = {
    get passive() {
        return false;
    }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
const deepActiveElementPath = (doc = window.document) => {
    let activeElement = doc.activeElement;
    const path = [];
    if (!activeElement) {
        return path;
    }
    while (activeElement) {
        path.push(activeElement);
        if (activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
        }
        else {
            break;
        }
    }
    return path;
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class BaseElement extends s {
    click() {
        if (this.mdcRoot) {
            this.mdcRoot.focus();
            this.mdcRoot.click();
            return;
        }
        super.click();
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        if (this.mdcFoundationClass) {
            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
        }
    }
    firstUpdated() {
        this.createFoundation();
    }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings$1 = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers$1 = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function () {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function (e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function () {
            _this.deactivateImpl();
        };
        _this.focusHandler = function () {
            _this.handleFocus();
        };
        _this.blurHandler = function () {
            _this.handleBlur();
        };
        _this.resizeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame) {
            cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function () {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
        var e_2, _a;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        }
        else {
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
        var e_3, _a;
        try {
            for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState = _this.defaultActivationState();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function () {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame.width / 2,
                y: this.frame.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        var endPoint = {
            x: (this.frame.width / 2) - (this.initialSize / 2),
            y: (this.frame.height / 2) - (this.initialSize / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, numbers$1.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function () {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function () {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        }
        else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function () {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal = function () {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize = initialSize - 1;
        }
        else {
            this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRippleFoundation$1 = MDCRippleFoundation;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=e(class extends i$1{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.nt){this.nt=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(s)}const e=i.element.classList;this.nt.forEach((t=>{t in s||(e.remove(t),this.nt.delete(t));}));for(const t in s){const i=!!s[t];i===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.nt.add(t)):(e.remove(t),this.nt.delete(t)));}return x}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=e(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.vt){this.vt=new Set;for(const t in r)this.vt.add(t);return this.render(r)}this.vt.forEach((t=>{null==r[t]&&(this.vt.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.vt.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return x}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class RippleBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.accent = false;
        this.unbounded = false;
        this.disabled = false;
        this.activated = false;
        this.selected = false;
        this.internalUseStateLayerCustomProperties = false;
        this.hovering = false;
        this.bgFocused = false;
        this.fgActivation = false;
        this.fgDeactivation = false;
        this.fgScale = '';
        this.fgSize = '';
        this.translateStart = '';
        this.translateEnd = '';
        this.leftPos = '';
        this.topPos = '';
        this.mdcFoundationClass = MDCRippleFoundation$1;
    }
    get isActive() {
        return matches(this.parentElement || this, ':active');
    }
    createAdapter() {
        return {
            browserSupportsCssVars: () => true,
            isUnbounded: () => this.unbounded,
            isSurfaceActive: () => this.isActive,
            isSurfaceDisabled: () => this.disabled,
            addClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = true;
                        break;
                }
            },
            removeClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = false;
                        break;
                }
            },
            containsEventTarget: () => true,
            registerInteractionHandler: () => undefined,
            deregisterInteractionHandler: () => undefined,
            registerDocumentInteractionHandler: () => undefined,
            deregisterDocumentInteractionHandler: () => undefined,
            registerResizeHandler: () => undefined,
            deregisterResizeHandler: () => undefined,
            updateCssVariable: (varName, value) => {
                switch (varName) {
                    case '--mdc-ripple-fg-scale':
                        this.fgScale = value;
                        break;
                    case '--mdc-ripple-fg-size':
                        this.fgSize = value;
                        break;
                    case '--mdc-ripple-fg-translate-end':
                        this.translateEnd = value;
                        break;
                    case '--mdc-ripple-fg-translate-start':
                        this.translateStart = value;
                        break;
                    case '--mdc-ripple-left':
                        this.leftPos = value;
                        break;
                    case '--mdc-ripple-top':
                        this.topPos = value;
                        break;
                }
            },
            computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
            getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        };
    }
    startPress(ev) {
        this.waitForFoundation(() => {
            this.mdcFoundation.activate(ev);
        });
    }
    endPress() {
        this.waitForFoundation(() => {
            this.mdcFoundation.deactivate();
        });
    }
    startFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleFocus();
        });
    }
    endFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleBlur();
        });
    }
    startHover() {
        this.hovering = true;
    }
    endHover() {
        this.hovering = false;
    }
    /**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */
    waitForFoundation(fn) {
        if (this.mdcFoundation) {
            fn();
        }
        else {
            this.updateComplete.then(fn);
        }
    }
    update(changedProperties) {
        if (changedProperties.has('disabled')) {
            // stop hovering when ripple is disabled to prevent a stuck "hover" state
            // When re-enabled, the outer component will get a `mouseenter` event on
            // the first movement, which will call `startHover()`
            if (this.disabled) {
                this.endHover();
            }
        }
        super.update(changedProperties);
    }
    /** @soyTemplate */
    render() {
        const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
        const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
        /** @classMap */
        const classes = {
            'mdc-ripple-surface--accent': this.accent,
            'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
            'mdc-ripple-surface--accent--activated': this.accent && this.activated,
            'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
            'mdc-ripple-surface--accent--selected': this.accent && this.selected,
            'mdc-ripple-surface--disabled': this.disabled,
            'mdc-ripple-surface--hover': this.hovering,
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--selected': this.selected,
            'mdc-ripple-upgraded--background-focused': this.bgFocused,
            'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
            'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
            'mdc-ripple-upgraded--unbounded': this.unbounded,
            'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties,
        };
        return y `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o(classes)}"
          style="${i({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
        })}"></div>`;
    }
}
__decorate([
    i$2('.mdc-ripple-surface')
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
    e$2({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
    e$2({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
    e$2({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
    e$2({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
    e$2({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
    e$2({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
    e$2({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "hovering", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "topPos", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = i$5 `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Ripple = class Ripple extends RippleBase {
};
Ripple.styles = [styles];
Ripple = __decorate([
    e$3('mwc-ripple')
], Ripple);

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** Tick mark enum, for discrete sliders. */
var TickMark;
(function (TickMark) {
    TickMark[TickMark["ACTIVE"] = 0] = "ACTIVE";
    TickMark[TickMark["INACTIVE"] = 1] = "INACTIVE";
})(TickMark || (TickMark = {}));
/**
 * Thumb types: range slider has two thumbs (START, END) whereas single point
 * slider only has one thumb (END).
 */
var Thumb;
(function (Thumb) {
    // Thumb at start of slider (e.g. in LTR mode, left thumb on range slider).
    Thumb[Thumb["START"] = 1] = "START";
    // Thumb at end of slider (e.g. in LTR mode, right thumb on range slider,
    // or only thumb on single point slider).
    Thumb[Thumb["END"] = 2] = "END";
})(Thumb || (Thumb = {}));

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TypeScript version of the decorator
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
function tsDecorator(prototype, name, descriptor) {
    const constructor = prototype.constructor;
    if (!descriptor) {
        /**
         * lit uses internal properties with two leading underscores to
         * provide storage for accessors
         */
        const litInternalPropertyKey = `__${name}`;
        descriptor =
            constructor.getPropertyDescriptor(name, litInternalPropertyKey);
        if (!descriptor) {
            throw new Error('@ariaProperty must be used after a @property decorator');
        }
    }
    // descriptor must exist at this point, reassign so typescript understands
    const propDescriptor = descriptor;
    let attribute = '';
    if (!propDescriptor.set) {
        throw new Error(`@ariaProperty requires a setter for ${name}`);
    }
    // TODO(b/202853219): Remove this check when internal tooling is
    // compatible
    // tslint:disable-next-line:no-any bail if applied to internal generated class
    if (prototype.dispatchWizEvent) {
        return descriptor;
    }
    const wrappedDescriptor = {
        configurable: true,
        enumerable: true,
        set(value) {
            if (attribute === '') {
                const options = constructor.getPropertyOptions(name);
                // if attribute is not a string, use `name` instead
                attribute =
                    typeof options.attribute === 'string' ? options.attribute : name;
            }
            if (this.hasAttribute(attribute)) {
                this.removeAttribute(attribute);
            }
            propDescriptor.set.call(this, value);
        }
    };
    if (propDescriptor.get) {
        wrappedDescriptor.get = function () {
            return propDescriptor.get.call(this);
        };
    }
    return wrappedDescriptor;
}
/**
 * A property decorator proxies an aria attribute to an internal node
 *
 * This decorator is only intended for use with ARIA attributes, such as `role`
 * and `aria-label` due to screenreader needs.
 *
 * Upon first render, `@ariaProperty` will remove the attribute from the host
 * element to prevent screenreaders from reading the host instead of the
 * internal node.
 *
 * This decorator should only be used for non-Symbol public fields decorated
 * with `@property`, or on a setter with an optional getter.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @ariaProperty
 *   @property({ type: String, attribute: 'aria-label' })
 *   ariaLabel!: string;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function ariaProperty(protoOrDescriptor, name, 
// tslint:disable-next-line:no-any any is required as a return type from decorators
descriptor) {
    if (name !== undefined) {
        return tsDecorator(protoOrDescriptor, name, descriptor);
    }
    else {
        throw new Error('@ariaProperty only supports TypeScript Decorators');
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a, _b;
// ShadyDOM should submit <input> elements in component internals
const USING_SHADY_DOM = (_b = (_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) !== null && _b !== void 0 ? _b : false;
/** @soyCompatible */
class FormElement extends BaseElement {
    constructor() {
        super(...arguments);
        /**
         * Disabled state for the component. When `disabled` is set to `true`, the
         * component will not be added to form submission.
         */
        this.disabled = false;
        /**
         * Form element that contains this element
         */
        this.containingForm = null;
        this.formDataListener = (ev) => {
            if (!this.disabled) {
                this.setFormData(ev.formData);
            }
        };
    }
    findFormElement() {
        // If the component internals are not in Shadow DOM, subscribing to form
        // data events could lead to duplicated data, which may not work correctly
        // on the server side.
        if (!this.shadowRoot || USING_SHADY_DOM) {
            return null;
        }
        const root = this.getRootNode();
        const forms = root.querySelectorAll('form');
        for (const form of Array.from(forms)) {
            if (form.contains(this)) {
                return form;
            }
        }
        return null;
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        this.containingForm = this.findFormElement();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.addEventListener('formdata', this.formDataListener);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
        this.containingForm = null;
    }
    click() {
        if (this.formElement && !this.disabled) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    firstUpdated() {
        super.firstUpdated();
        if (this.shadowRoot) {
            this.mdcRoot.addEventListener('change', (e) => {
                this.dispatchEvent(new Event('change', e));
            });
        }
    }
}
FormElement.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    e$2({ type: Boolean })
], FormElement.prototype, "disabled", void 0);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */
class RippleHandlers {
    constructor(
    /** Function that returns a `mwc-ripple` */
    rippleFn) {
        this.startPress = (ev) => {
            rippleFn().then((r) => {
                r && r.startPress(ev);
            });
        };
        this.endPress = () => {
            rippleFn().then((r) => {
                r && r.endPress();
            });
        };
        this.startFocus = () => {
            rippleFn().then((r) => {
                r && r.startFocus();
            });
        };
        this.endFocus = () => {
            rippleFn().then((r) => {
                r && r.endFocus();
            });
        };
        this.startHover = () => {
            rippleFn().then((r) => {
                r && r.startHover();
            });
        };
        this.endHover = () => {
            rippleFn().then((r) => {
                r && r.endHover();
            });
        };
    }
}

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
var AnimationFrame = /** @class */ (function () {
    function AnimationFrame() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    AnimationFrame.prototype.request = function (key, callback) {
        var _this = this;
        this.cancel(key);
        var frameID = requestAnimationFrame(function (frame) {
            _this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    };
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    AnimationFrame.prototype.cancel = function (key) {
        var rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    };
    /**
     * Cancels all queued callback.
     */
    AnimationFrame.prototype.cancelAll = function () {
        var _this = this;
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            _this.cancel(key);
        });
    };
    /**
     * Returns the queue of unexecuted callback keys.
     */
    AnimationFrame.prototype.getQueue = function () {
        var queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            queue.push(key);
        });
        return queue;
    };
    return AnimationFrame;
}());

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation',
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform',
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** Slider element classes. */
var cssClasses = {
    DISABLED: 'mdc-slider--disabled',
    DISCRETE: 'mdc-slider--discrete',
    INPUT: 'mdc-slider__input',
    RANGE: 'mdc-slider--range',
    THUMB: 'mdc-slider__thumb',
    // Applied when thumb is in the focused state.
    THUMB_FOCUSED: 'mdc-slider__thumb--focused',
    THUMB_KNOB: 'mdc-slider__thumb-knob',
    // Class added to the top thumb (for overlapping thumbs in range slider).
    THUMB_TOP: 'mdc-slider__thumb--top',
    THUMB_WITH_INDICATOR: 'mdc-slider__thumb--with-indicator',
    TICK_MARKS: 'mdc-slider--tick-marks',
    TICK_MARKS_CONTAINER: 'mdc-slider__tick-marks',
    TICK_MARK_ACTIVE: 'mdc-slider__tick-mark--active',
    TICK_MARK_INACTIVE: 'mdc-slider__tick-mark--inactive',
    TRACK: 'mdc-slider__track',
    // The active track fill element that will be scaled as the value changes.
    TRACK_ACTIVE: 'mdc-slider__track--active_fill',
    VALUE_INDICATOR_CONTAINER: 'mdc-slider__value-indicator-container',
    VALUE_INDICATOR_TEXT: 'mdc-slider__value-indicator-text',
};
/** Slider numbers. */
var numbers = {
    // Default step size.
    STEP_SIZE: 1,
    // Default minimum difference between the start and end values.
    MIN_RANGE: 0,
    // Minimum absolute difference between clientX of move event / down event
    // for which to update thumb, in the case of overlapping thumbs.
    // This is needed to reduce chances of choosing the thumb based on
    // pointer jitter.
    THUMB_UPDATE_MIN_PX: 5,
};
/** Slider attributes. */
var attributes = {
    ARIA_VALUETEXT: 'aria-valuetext',
    INPUT_DISABLED: 'disabled',
    INPUT_MIN: 'min',
    INPUT_MAX: 'max',
    INPUT_VALUE: 'value',
    INPUT_STEP: 'step',
    DATA_MIN_RANGE: 'data-min-range',
};
/** Slider strings. */
var strings = {
    VAR_VALUE_INDICATOR_CARET_LEFT: '--slider-value-indicator-caret-left',
    VAR_VALUE_INDICATOR_CARET_RIGHT: '--slider-value-indicator-caret-right',
    VAR_VALUE_INDICATOR_CARET_TRANSFORM: '--slider-value-indicator-caret-transform',
    VAR_VALUE_INDICATOR_CONTAINER_LEFT: '--slider-value-indicator-container-left',
    VAR_VALUE_INDICATOR_CONTAINER_RIGHT: '--slider-value-indicator-container-right',
    VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM: '--slider-value-indicator-container-transform',
};

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["SLIDER_UPDATE"] = "slider_update";
})(AnimationKeys || (AnimationKeys = {}));
// Accessing `window` without a `typeof` check will throw on Node environments.
var HAS_WINDOW = typeof window !== 'undefined';
/**
 * Foundation class for slider. Responsibilities include:
 * - Updating slider values (internal state and DOM updates) based on client
 *   'x' position.
 * - Updating DOM after slider property updates (e.g. min, max).
 */
var MDCSliderFoundation = /** @class */ (function (_super) {
    __extends(MDCSliderFoundation, _super);
    function MDCSliderFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSliderFoundation.defaultAdapter), adapter)) || this;
        // Whether the initial styles (to position the thumb, before component
        // initialization) have been removed.
        _this.initialStylesRemoved = false;
        _this.isDisabled = false;
        _this.isDiscrete = false;
        _this.step = numbers.STEP_SIZE;
        _this.minRange = numbers.MIN_RANGE;
        _this.hasTickMarks = false;
        // The following properties are only set for range sliders.
        _this.isRange = false;
        // Tracks the thumb being moved across a slider pointer interaction (down,
        // move event).
        _this.thumb = null;
        // `clientX` from the most recent down event. Used in subsequent move
        // events to determine which thumb to move (in the case of
        // overlapping thumbs).
        _this.downEventClientX = null;
        // Width of the start thumb knob.
        _this.startThumbKnobWidth = 0;
        // Width of the end thumb knob.
        _this.endThumbKnobWidth = 0;
        _this.animFrame = new AnimationFrame();
        return _this;
    }
    Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same
            // order as the adapter interface.
            return {
                hasClass: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addThumbClass: function () { return undefined; },
                removeThumbClass: function () { return undefined; },
                getAttribute: function () { return null; },
                getInputValue: function () { return ''; },
                setInputValue: function () { return undefined; },
                getInputAttribute: function () { return null; },
                setInputAttribute: function () { return null; },
                removeInputAttribute: function () { return null; },
                focusInput: function () { return undefined; },
                isInputFocused: function () { return false; },
                shouldHideFocusStylesForPointerEvents: function () { return false; },
                getThumbKnobWidth: function () { return 0; },
                getValueIndicatorContainerWidth: function () { return 0; },
                getThumbBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                isRTL: function () { return false; },
                setThumbStyleProperty: function () { return undefined; },
                removeThumbStyleProperty: function () { return undefined; },
                setTrackActiveStyleProperty: function () { return undefined; },
                removeTrackActiveStyleProperty: function () { return undefined; },
                setValueIndicatorText: function () { return undefined; },
                getValueToAriaValueTextFn: function () { return null; },
                updateTickMarks: function () { return undefined; },
                setPointerCapture: function () { return undefined; },
                emitChangeEvent: function () { return undefined; },
                emitInputEvent: function () { return undefined; },
                emitDragStartEvent: function () { return undefined; },
                emitDragEndEvent: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
                registerThumbEventHandler: function () { return undefined; },
                deregisterThumbEventHandler: function () { return undefined; },
                registerInputEventHandler: function () { return undefined; },
                deregisterInputEventHandler: function () { return undefined; },
                registerBodyEventHandler: function () { return undefined; },
                deregisterBodyEventHandler: function () { return undefined; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCSliderFoundation.prototype.init = function () {
        var _this = this;
        this.isDisabled = this.adapter.hasClass(cssClasses.DISABLED);
        this.isDiscrete = this.adapter.hasClass(cssClasses.DISCRETE);
        this.hasTickMarks = this.adapter.hasClass(cssClasses.TICK_MARKS);
        this.isRange = this.adapter.hasClass(cssClasses.RANGE);
        var min = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_MIN, this.isRange ? Thumb.START : Thumb.END), attributes.INPUT_MIN);
        var max = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_MAX, Thumb.END), attributes.INPUT_MAX);
        var value = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_VALUE, Thumb.END), attributes.INPUT_VALUE);
        var valueStart = this.isRange ?
            this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_VALUE, Thumb.START), attributes.INPUT_VALUE) :
            min;
        var stepAttr = this.adapter.getInputAttribute(attributes.INPUT_STEP, Thumb.END);
        var step = stepAttr ?
            this.convertAttributeValueToNumber(stepAttr, attributes.INPUT_STEP) :
            this.step;
        var minRangeAttr = this.adapter.getAttribute(attributes.DATA_MIN_RANGE);
        var minRange = minRangeAttr ?
            this.convertAttributeValueToNumber(minRangeAttr, attributes.DATA_MIN_RANGE) :
            this.minRange;
        this.validateProperties({ min: min, max: max, value: value, valueStart: valueStart, step: step, minRange: minRange });
        this.min = min;
        this.max = max;
        this.value = value;
        this.valueStart = valueStart;
        this.step = step;
        this.minRange = minRange;
        this.numDecimalPlaces = getNumDecimalPlaces(this.step);
        this.valueBeforeDownEvent = value;
        this.valueStartBeforeDownEvent = valueStart;
        this.mousedownOrTouchstartListener =
            this.handleMousedownOrTouchstart.bind(this);
        this.moveListener = this.handleMove.bind(this);
        this.pointerdownListener = this.handlePointerdown.bind(this);
        this.pointerupListener = this.handlePointerup.bind(this);
        this.thumbMouseenterListener = this.handleThumbMouseenter.bind(this);
        this.thumbMouseleaveListener = this.handleThumbMouseleave.bind(this);
        this.inputStartChangeListener = function () {
            _this.handleInputChange(Thumb.START);
        };
        this.inputEndChangeListener = function () {
            _this.handleInputChange(Thumb.END);
        };
        this.inputStartFocusListener = function () {
            _this.handleInputFocus(Thumb.START);
        };
        this.inputEndFocusListener = function () {
            _this.handleInputFocus(Thumb.END);
        };
        this.inputStartBlurListener = function () {
            _this.handleInputBlur(Thumb.START);
        };
        this.inputEndBlurListener = function () {
            _this.handleInputBlur(Thumb.END);
        };
        this.resizeListener = this.handleResize.bind(this);
        this.registerEventHandlers();
    };
    MDCSliderFoundation.prototype.destroy = function () {
        this.deregisterEventHandlers();
    };
    MDCSliderFoundation.prototype.setMin = function (value) {
        this.min = value;
        if (!this.isRange) {
            this.valueStart = value;
        }
        this.updateUI();
    };
    MDCSliderFoundation.prototype.setMax = function (value) {
        this.max = value;
        this.updateUI();
    };
    MDCSliderFoundation.prototype.getMin = function () {
        return this.min;
    };
    MDCSliderFoundation.prototype.getMax = function () {
        return this.max;
    };
    /**
     * - For single point sliders, returns the thumb value.
     * - For range (two-thumb) sliders, returns the end thumb's value.
     */
    MDCSliderFoundation.prototype.getValue = function () {
        return this.value;
    };
    /**
     * - For single point sliders, sets the thumb value.
     * - For range (two-thumb) sliders, sets the end thumb's value.
     */
    MDCSliderFoundation.prototype.setValue = function (value) {
        if (this.isRange && value < this.valueStart + this.minRange) {
            throw new Error("end thumb value (" + value + ") must be >= start thumb " +
                ("value (" + this.valueStart + ") + min range (" + this.minRange + ")"));
        }
        this.updateValue(value, Thumb.END);
    };
    /**
     * Only applicable for range sliders.
     * @return The start thumb's value.
     */
    MDCSliderFoundation.prototype.getValueStart = function () {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        return this.valueStart;
    };
    /**
     * Only applicable for range sliders. Sets the start thumb's value.
     */
    MDCSliderFoundation.prototype.setValueStart = function (valueStart) {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        if (this.isRange && valueStart > this.value - this.minRange) {
            throw new Error("start thumb value (" + valueStart + ") must be <= end thumb " +
                ("value (" + this.value + ") - min range (" + this.minRange + ")"));
        }
        this.updateValue(valueStart, Thumb.START);
    };
    MDCSliderFoundation.prototype.setStep = function (value) {
        this.step = value;
        this.numDecimalPlaces = getNumDecimalPlaces(value);
        this.updateUI();
    };
    /**
     * Only applicable for range sliders. Sets the minimum difference between the
     * start and end values.
     */
    MDCSliderFoundation.prototype.setMinRange = function (value) {
        if (!this.isRange) {
            throw new Error('`minRange` is only applicable for range sliders.');
        }
        if (value < 0) {
            throw new Error('`minRange` must be non-negative. ' +
                ("Current value: " + value));
        }
        if (this.value - this.valueStart < value) {
            throw new Error("start thumb value (" + this.valueStart + ") and end thumb value " +
                ("(" + this.value + ") must differ by at least " + value + "."));
        }
        this.minRange = value;
    };
    MDCSliderFoundation.prototype.setIsDiscrete = function (value) {
        this.isDiscrete = value;
        this.updateValueIndicatorUI();
        this.updateTickMarksUI();
    };
    MDCSliderFoundation.prototype.getStep = function () {
        return this.step;
    };
    MDCSliderFoundation.prototype.getMinRange = function () {
        if (!this.isRange) {
            throw new Error('`minRange` is only applicable for range sliders.');
        }
        return this.minRange;
    };
    MDCSliderFoundation.prototype.setHasTickMarks = function (value) {
        this.hasTickMarks = value;
        this.updateTickMarksUI();
    };
    MDCSliderFoundation.prototype.getDisabled = function () {
        return this.isDisabled;
    };
    /**
     * Sets disabled state, including updating styles and thumb tabindex.
     */
    MDCSliderFoundation.prototype.setDisabled = function (disabled) {
        this.isDisabled = disabled;
        if (disabled) {
            this.adapter.addClass(cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.setInputAttribute(attributes.INPUT_DISABLED, '', Thumb.START);
            }
            this.adapter.setInputAttribute(attributes.INPUT_DISABLED, '', Thumb.END);
        }
        else {
            this.adapter.removeClass(cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.removeInputAttribute(attributes.INPUT_DISABLED, Thumb.START);
            }
            this.adapter.removeInputAttribute(attributes.INPUT_DISABLED, Thumb.END);
        }
    };
    /** @return Whether the slider is a range slider. */
    MDCSliderFoundation.prototype.getIsRange = function () {
        return this.isRange;
    };
    /**
     * - Syncs slider boundingClientRect with the current DOM.
     * - Updates UI based on internal state.
     */
    MDCSliderFoundation.prototype.layout = function (_a) {
        var _b = _a === void 0 ? {} : _a, skipUpdateUI = _b.skipUpdateUI;
        this.rect = this.adapter.getBoundingClientRect();
        if (this.isRange) {
            this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.START);
            this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.END);
        }
        if (!skipUpdateUI) {
            this.updateUI();
        }
    };
    /** Handles resize events on the window. */
    MDCSliderFoundation.prototype.handleResize = function () {
        this.layout();
    };
    /**
     * Handles pointer down events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleDown = function (event) {
        if (this.isDisabled)
            return;
        this.valueStartBeforeDownEvent = this.valueStart;
        this.valueBeforeDownEvent = this.value;
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        this.downEventClientX = clientX;
        var value = this.mapClientXOnSliderScale(clientX);
        this.thumb = this.getThumbFromDownEvent(clientX, value);
        if (this.thumb === null)
            return;
        this.handleDragStart(event, value, this.thumb);
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer move events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleMove = function (event) {
        if (this.isDisabled)
            return;
        // Prevent scrolling.
        event.preventDefault();
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        var dragAlreadyStarted = this.thumb != null;
        this.thumb = this.getThumbFromMoveEvent(clientX);
        if (this.thumb === null)
            return;
        var value = this.mapClientXOnSliderScale(clientX);
        if (!dragAlreadyStarted) {
            this.handleDragStart(event, value, this.thumb);
            this.adapter.emitDragStartEvent(value, this.thumb);
        }
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer up events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleUp = function () {
        var _a, _b;
        if (this.isDisabled || this.thumb === null)
            return;
        // Remove the focused state and hide the value indicator(s) (if present)
        // if focus state is meant to be hidden.
        if ((_b = (_a = this.adapter).shouldHideFocusStylesForPointerEvents) === null || _b === void 0 ? void 0 : _b.call(_a)) {
            this.handleInputBlur(this.thumb);
        }
        var oldValue = this.thumb === Thumb.START ?
            this.valueStartBeforeDownEvent :
            this.valueBeforeDownEvent;
        var newValue = this.thumb === Thumb.START ? this.valueStart : this.value;
        if (oldValue !== newValue) {
            this.adapter.emitChangeEvent(newValue, this.thumb);
        }
        this.adapter.emitDragEndEvent(newValue, this.thumb);
        this.thumb = null;
    };
    /**
     * For range, discrete slider, shows the value indicator on both thumbs.
     */
    MDCSliderFoundation.prototype.handleThumbMouseenter = function () {
        if (!this.isDiscrete || !this.isRange)
            return;
        this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
        this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
    };
    /**
     * For range, discrete slider, hides the value indicator on both thumbs.
     */
    MDCSliderFoundation.prototype.handleThumbMouseleave = function () {
        var _a, _b;
        if (!this.isDiscrete || !this.isRange)
            return;
        if ((!((_b = (_a = this.adapter).shouldHideFocusStylesForPointerEvents) === null || _b === void 0 ? void 0 : _b.call(_a)) &&
            (this.adapter.isInputFocused(Thumb.START) ||
                this.adapter.isInputFocused(Thumb.END))) ||
            this.thumb) {
            // Leave value indicator shown if either input is focused or the thumb is
            // being dragged.
            return;
        }
        this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
        this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
    };
    MDCSliderFoundation.prototype.handleMousedownOrTouchstart = function (event) {
        var _this = this;
        var moveEventType = event.type === 'mousedown' ? 'mousemove' : 'touchmove';
        // After a down event on the slider root, listen for move events on
        // body (so the slider value is updated for events outside of the
        // slider root).
        this.adapter.registerBodyEventHandler(moveEventType, this.moveListener);
        var upHandler = function () {
            _this.handleUp();
            // Once the drag is finished (up event on body), remove the move
            // handler.
            _this.adapter.deregisterBodyEventHandler(moveEventType, _this.moveListener);
            // Also stop listening for subsequent up events.
            _this.adapter.deregisterEventHandler('mouseup', upHandler);
            _this.adapter.deregisterEventHandler('touchend', upHandler);
        };
        this.adapter.registerBodyEventHandler('mouseup', upHandler);
        this.adapter.registerBodyEventHandler('touchend', upHandler);
        this.handleDown(event);
    };
    MDCSliderFoundation.prototype.handlePointerdown = function (event) {
        var isPrimaryButton = event.button === 0;
        if (!isPrimaryButton)
            return;
        if (event.pointerId != null) {
            this.adapter.setPointerCapture(event.pointerId);
        }
        this.adapter.registerEventHandler('pointermove', this.moveListener);
        this.handleDown(event);
    };
    /**
     * Handles input `change` event by setting internal slider value to match
     * input's new value.
     */
    MDCSliderFoundation.prototype.handleInputChange = function (thumb) {
        var value = Number(this.adapter.getInputValue(thumb));
        if (thumb === Thumb.START) {
            this.setValueStart(value);
        }
        else {
            this.setValue(value);
        }
        this.adapter.emitChangeEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
        this.adapter.emitInputEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
    };
    /** Shows activated state and value indicator on thumb(s). */
    MDCSliderFoundation.prototype.handleInputFocus = function (thumb) {
        this.adapter.addThumbClass(cssClasses.THUMB_FOCUSED, thumb);
        if (!this.isDiscrete)
            return;
        this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, thumb);
        if (this.isRange) {
            var otherThumb = thumb === Thumb.START ? Thumb.END : Thumb.START;
            this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, otherThumb);
        }
    };
    /** Removes activated state and value indicator from thumb(s). */
    MDCSliderFoundation.prototype.handleInputBlur = function (thumb) {
        this.adapter.removeThumbClass(cssClasses.THUMB_FOCUSED, thumb);
        if (!this.isDiscrete)
            return;
        this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, thumb);
        if (this.isRange) {
            var otherThumb = thumb === Thumb.START ? Thumb.END : Thumb.START;
            this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, otherThumb);
        }
    };
    /**
     * Emits custom dragStart event, along with focusing the underlying input.
     */
    MDCSliderFoundation.prototype.handleDragStart = function (event, value, thumb) {
        var _a, _b;
        this.adapter.emitDragStartEvent(value, thumb);
        this.adapter.focusInput(thumb);
        // Restore focused state and show the value indicator(s) (if present)
        // in case they were previously hidden on dragEnd.
        // This is needed if the input is already focused, in which case
        // #focusInput above wouldn't actually trigger #handleInputFocus,
        // which is why we need to invoke it manually here.
        if ((_b = (_a = this.adapter).shouldHideFocusStylesForPointerEvents) === null || _b === void 0 ? void 0 : _b.call(_a)) {
            this.handleInputFocus(thumb);
        }
        // Prevent the input (that we just focused) from losing focus.
        event.preventDefault();
    };
    /**
     * @return The thumb to be moved based on initial down event.
     */
    MDCSliderFoundation.prototype.getThumbFromDownEvent = function (clientX, value) {
        // For single point slider, thumb to be moved is always the END (only)
        // thumb.
        if (!this.isRange)
            return Thumb.END;
        // Check if event press point is in the bounds of any thumb.
        var thumbStartRect = this.adapter.getThumbBoundingClientRect(Thumb.START);
        var thumbEndRect = this.adapter.getThumbBoundingClientRect(Thumb.END);
        var inThumbStartBounds = clientX >= thumbStartRect.left && clientX <= thumbStartRect.right;
        var inThumbEndBounds = clientX >= thumbEndRect.left && clientX <= thumbEndRect.right;
        if (inThumbStartBounds && inThumbEndBounds) {
            // Thumbs overlapping. Thumb to be moved cannot be determined yet.
            return null;
        }
        // If press is in bounds for either thumb on down event, that's the thumb
        // to be moved.
        if (inThumbStartBounds) {
            return Thumb.START;
        }
        if (inThumbEndBounds) {
            return Thumb.END;
        }
        // For presses outside the range, return whichever thumb is closer.
        if (value < this.valueStart) {
            return Thumb.START;
        }
        if (value > this.value) {
            return Thumb.END;
        }
        // For presses inside the range, return whichever thumb is closer.
        return (value - this.valueStart <= this.value - value) ? Thumb.START :
            Thumb.END;
    };
    /**
     * @return The thumb to be moved based on move event (based on drag
     *     direction from original down event). Only applicable if thumbs
     *     were overlapping in the down event.
     */
    MDCSliderFoundation.prototype.getThumbFromMoveEvent = function (clientX) {
        // Thumb has already been chosen.
        if (this.thumb !== null)
            return this.thumb;
        if (this.downEventClientX === null) {
            throw new Error('`downEventClientX` is null after move event.');
        }
        var moveDistanceUnderThreshold = Math.abs(this.downEventClientX - clientX) < numbers.THUMB_UPDATE_MIN_PX;
        if (moveDistanceUnderThreshold)
            return this.thumb;
        var draggedThumbToLeft = clientX < this.downEventClientX;
        if (draggedThumbToLeft) {
            return this.adapter.isRTL() ? Thumb.END : Thumb.START;
        }
        else {
            return this.adapter.isRTL() ? Thumb.START : Thumb.END;
        }
    };
    /**
     * Updates UI based on internal state.
     * @param thumb Thumb whose value is being updated. If undefined, UI is
     *     updated for both thumbs based on current internal state.
     */
    MDCSliderFoundation.prototype.updateUI = function (thumb) {
        if (thumb) {
            this.updateThumbAndInputAttributes(thumb);
        }
        else {
            this.updateThumbAndInputAttributes(Thumb.START);
            this.updateThumbAndInputAttributes(Thumb.END);
        }
        this.updateThumbAndTrackUI(thumb);
        this.updateValueIndicatorUI(thumb);
        this.updateTickMarksUI();
    };
    /**
     * Updates thumb and input attributes based on current value.
     * @param thumb Thumb whose aria attributes to update.
     */
    MDCSliderFoundation.prototype.updateThumbAndInputAttributes = function (thumb) {
        if (!thumb)
            return;
        var value = this.isRange && thumb === Thumb.START ? this.valueStart : this.value;
        var valueStr = String(value);
        this.adapter.setInputAttribute(attributes.INPUT_VALUE, valueStr, thumb);
        if (this.isRange && thumb === Thumb.START) {
            this.adapter.setInputAttribute(attributes.INPUT_MIN, String(value + this.minRange), Thumb.END);
        }
        else if (this.isRange && thumb === Thumb.END) {
            this.adapter.setInputAttribute(attributes.INPUT_MAX, String(value - this.minRange), Thumb.START);
        }
        // Sync attribute with property.
        if (this.adapter.getInputValue(thumb) !== valueStr) {
            this.adapter.setInputValue(valueStr, thumb);
        }
        var valueToAriaValueTextFn = this.adapter.getValueToAriaValueTextFn();
        if (valueToAriaValueTextFn) {
            this.adapter.setInputAttribute(attributes.ARIA_VALUETEXT, valueToAriaValueTextFn(value, thumb), thumb);
        }
    };
    /**
     * Updates value indicator UI based on current value.
     * @param thumb Thumb whose value indicator to update. If undefined, all
     *     thumbs' value indicators are updated.
     */
    MDCSliderFoundation.prototype.updateValueIndicatorUI = function (thumb) {
        if (!this.isDiscrete)
            return;
        var value = this.isRange && thumb === Thumb.START ? this.valueStart : this.value;
        this.adapter.setValueIndicatorText(value, thumb === Thumb.START ? Thumb.START : Thumb.END);
        if (!thumb && this.isRange) {
            this.adapter.setValueIndicatorText(this.valueStart, Thumb.START);
        }
    };
    /**
     * Updates tick marks UI within slider, based on current min, max, and step.
     */
    MDCSliderFoundation.prototype.updateTickMarksUI = function () {
        if (!this.isDiscrete || !this.hasTickMarks)
            return;
        var numTickMarksInactiveStart = (this.valueStart - this.min) / this.step;
        var numTickMarksActive = (this.value - this.valueStart) / this.step + 1;
        var numTickMarksInactiveEnd = (this.max - this.value) / this.step;
        var tickMarksInactiveStart = Array.from({ length: numTickMarksInactiveStart })
            .fill(TickMark.INACTIVE);
        var tickMarksActive = Array.from({ length: numTickMarksActive })
            .fill(TickMark.ACTIVE);
        var tickMarksInactiveEnd = Array.from({ length: numTickMarksInactiveEnd })
            .fill(TickMark.INACTIVE);
        this.adapter.updateTickMarks(tickMarksInactiveStart.concat(tickMarksActive)
            .concat(tickMarksInactiveEnd));
    };
    /** Maps clientX to a value on the slider scale. */
    MDCSliderFoundation.prototype.mapClientXOnSliderScale = function (clientX) {
        var xPos = clientX - this.rect.left;
        var pctComplete = xPos / this.rect.width;
        if (this.adapter.isRTL()) {
            pctComplete = 1 - pctComplete;
        }
        // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].
        var value = this.min + pctComplete * (this.max - this.min);
        if (value === this.max || value === this.min) {
            return value;
        }
        return Number(this.quantize(value).toFixed(this.numDecimalPlaces));
    };
    /** Calculates the quantized value based on step value. */
    MDCSliderFoundation.prototype.quantize = function (value) {
        var numSteps = Math.round((value - this.min) / this.step);
        return this.min + numSteps * this.step;
    };
    /**
     * Updates slider value (internal state and UI) based on the given value.
     */
    MDCSliderFoundation.prototype.updateValue = function (value, thumb, _a) {
        var _b = _a === void 0 ? {} : _a, emitInputEvent = _b.emitInputEvent;
        value = this.clampValue(value, thumb);
        if (this.isRange && thumb === Thumb.START) {
            // Exit early if current value is the same as the new value.
            if (this.valueStart === value)
                return;
            this.valueStart = value;
        }
        else {
            // Exit early if current value is the same as the new value.
            if (this.value === value)
                return;
            this.value = value;
        }
        this.updateUI(thumb);
        if (emitInputEvent) {
            this.adapter.emitInputEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
        }
    };
    /**
     * Clamps the given value for the given thumb based on slider properties:
     * - Restricts value within [min, max].
     * - If range slider, clamp start value <= end value - min range, and
     *   end value >= start value + min range.
     */
    MDCSliderFoundation.prototype.clampValue = function (value, thumb) {
        // Clamp value to [min, max] range.
        value = Math.min(Math.max(value, this.min), this.max);
        var thumbStartMovedPastThumbEnd = this.isRange && thumb === Thumb.START &&
            value > this.value - this.minRange;
        if (thumbStartMovedPastThumbEnd) {
            return this.value - this.minRange;
        }
        var thumbEndMovedPastThumbStart = this.isRange && thumb === Thumb.END &&
            value < this.valueStart + this.minRange;
        if (thumbEndMovedPastThumbStart) {
            return this.valueStart + this.minRange;
        }
        return value;
    };
    /**
     * Updates the active track and thumb style properties to reflect current
     * value.
     */
    MDCSliderFoundation.prototype.updateThumbAndTrackUI = function (thumb) {
        var _this = this;
        var _a = this, max = _a.max, min = _a.min;
        var pctComplete = (this.value - this.valueStart) / (max - min);
        var rangePx = pctComplete * this.rect.width;
        var isRtl = this.adapter.isRTL();
        var transformProp = HAS_WINDOW ? getCorrectPropertyName(window, 'transform') : 'transform';
        if (this.isRange) {
            var thumbLeftPos_1 = this.adapter.isRTL() ?
                (max - this.value) / (max - min) * this.rect.width :
                (this.valueStart - min) / (max - min) * this.rect.width;
            var thumbRightPos_1 = thumbLeftPos_1 + rangePx;
            this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function () {
                // Set active track styles, accounting for animation direction by
                // setting `transform-origin`.
                var trackAnimatesFromRight = (!isRtl && thumb === Thumb.START) ||
                    (isRtl && thumb !== Thumb.START);
                if (trackAnimatesFromRight) {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'right');
                    _this.adapter.setTrackActiveStyleProperty('left', 'auto');
                    _this.adapter.setTrackActiveStyleProperty('right', _this.rect.width - thumbRightPos_1 + "px");
                }
                else {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'left');
                    _this.adapter.setTrackActiveStyleProperty('right', 'auto');
                    _this.adapter.setTrackActiveStyleProperty('left', thumbLeftPos_1 + "px");
                }
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                // Set thumb styles.
                var thumbStartPos = isRtl ? thumbRightPos_1 : thumbLeftPos_1;
                var thumbEndPos = _this.adapter.isRTL() ? thumbLeftPos_1 : thumbRightPos_1;
                if (thumb === Thumb.START || !thumb || !_this.initialStylesRemoved) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.START);
                    _this.alignValueIndicator(Thumb.START, thumbStartPos);
                }
                if (thumb === Thumb.END || !thumb || !_this.initialStylesRemoved) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbEndPos + "px)", Thumb.END);
                    _this.alignValueIndicator(Thumb.END, thumbEndPos);
                }
                _this.removeInitialStyles(isRtl);
                _this.updateOverlappingThumbsUI(thumbStartPos, thumbEndPos, thumb);
            });
        }
        else {
            this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function () {
                var thumbStartPos = isRtl ? _this.rect.width - rangePx : rangePx;
                _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.END);
                _this.alignValueIndicator(Thumb.END, thumbStartPos);
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                _this.removeInitialStyles(isRtl);
            });
        }
    };
    /**
     * Shifts the value indicator to either side if it would otherwise stick
     * beyond the slider's length while keeping the caret above the knob.
     */
    MDCSliderFoundation.prototype.alignValueIndicator = function (thumb, thumbPos) {
        if (!this.isDiscrete)
            return;
        var thumbHalfWidth = this.adapter.getThumbBoundingClientRect(thumb).width / 2;
        var containerWidth = this.adapter.getValueIndicatorContainerWidth(thumb);
        var sliderWidth = this.adapter.getBoundingClientRect().width;
        if (containerWidth / 2 > thumbPos + thumbHalfWidth) {
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_LEFT, thumbHalfWidth + "px", thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM, 'translateX(-50%)', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT, '0', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM, 'none', thumb);
        }
        else if (containerWidth / 2 > sliderWidth - thumbPos + thumbHalfWidth) {
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_LEFT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_RIGHT, thumbHalfWidth + "px", thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM, 'translateX(50%)', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT, '0', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM, 'none', thumb);
        }
        else {
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_LEFT, '50%', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM, 'translateX(-50%)', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT, '50%', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM, 'translateX(-50%)', thumb);
        }
    };
    /**
     * Removes initial inline styles if not already removed. `left:<...>%`
     * inline styles can be added to position the thumb correctly before JS
     * initialization. However, they need to be removed before the JS starts
     * positioning the thumb. This is because the JS uses
     * `transform:translateX(<...>)px` (for performance reasons) to position
     * the thumb (which is not possible for initial styles since we need the
     * bounding rect measurements).
     */
    MDCSliderFoundation.prototype.removeInitialStyles = function (isRtl) {
        if (this.initialStylesRemoved)
            return;
        // Remove thumb position properties that were added for initial render.
        var position = isRtl ? 'right' : 'left';
        this.adapter.removeThumbStyleProperty(position, Thumb.END);
        if (this.isRange) {
            this.adapter.removeThumbStyleProperty(position, Thumb.START);
        }
        this.initialStylesRemoved = true;
        this.resetTrackAndThumbAnimation();
    };
    /**
     * Resets track/thumb animation to prevent animation when adding
     * `transform` styles to thumb initially.
     */
    MDCSliderFoundation.prototype.resetTrackAndThumbAnimation = function () {
        var _this = this;
        if (!this.isDiscrete)
            return;
        // Set transition properties to default (no animation), so that the
        // newly added `transform` styles do not animate thumb/track from
        // their default positions.
        var transitionProp = HAS_WINDOW ?
            getCorrectPropertyName(window, 'transition') :
            'transition';
        var transitionDefault = 'none 0s ease 0s';
        this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, Thumb.END);
        if (this.isRange) {
            this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, Thumb.START);
        }
        this.adapter.setTrackActiveStyleProperty(transitionProp, transitionDefault);
        // In the next frame, remove the transition inline styles we just
        // added, such that any animations added in the CSS can now take effect.
        requestAnimationFrame(function () {
            _this.adapter.removeThumbStyleProperty(transitionProp, Thumb.END);
            _this.adapter.removeTrackActiveStyleProperty(transitionProp);
            if (_this.isRange) {
                _this.adapter.removeThumbStyleProperty(transitionProp, Thumb.START);
            }
        });
    };
    /**
     * Adds THUMB_TOP class to active thumb if thumb knobs overlap; otherwise
     * removes THUMB_TOP class from both thumbs.
     * @param thumb Thumb that is active (being moved).
     */
    MDCSliderFoundation.prototype.updateOverlappingThumbsUI = function (thumbStartPos, thumbEndPos, thumb) {
        var thumbsOverlap = false;
        if (this.adapter.isRTL()) {
            var startThumbLeftEdge = thumbStartPos - this.startThumbKnobWidth / 2;
            var endThumbRightEdge = thumbEndPos + this.endThumbKnobWidth / 2;
            thumbsOverlap = endThumbRightEdge >= startThumbLeftEdge;
        }
        else {
            var startThumbRightEdge = thumbStartPos + this.startThumbKnobWidth / 2;
            var endThumbLeftEdge = thumbEndPos - this.endThumbKnobWidth / 2;
            thumbsOverlap = startThumbRightEdge >= endThumbLeftEdge;
        }
        if (thumbsOverlap) {
            this.adapter.addThumbClass(cssClasses.THUMB_TOP, 
            // If no thumb was dragged (in the case of initial layout), end
            // thumb is on top by default.
            thumb || Thumb.END);
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, thumb === Thumb.START ? Thumb.END : Thumb.START);
        }
        else {
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.START);
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.END);
        }
    };
    /**
     * Converts attribute value to a number, e.g. '100' => 100. Throws errors
     * for invalid values.
     * @param attributeValue Attribute value, e.g. 100.
     * @param attributeName Attribute name, e.g. `aria-valuemax`.
     */
    MDCSliderFoundation.prototype.convertAttributeValueToNumber = function (attributeValue, attributeName) {
        if (attributeValue === null) {
            throw new Error('MDCSliderFoundation: `' + attributeName + '` must be non-null.');
        }
        var value = Number(attributeValue);
        if (isNaN(value)) {
            throw new Error('MDCSliderFoundation: `' + attributeName + '` value is `' +
                attributeValue + '`, but must be a number.');
        }
        return value;
    };
    /** Checks that the given properties are valid slider values. */
    MDCSliderFoundation.prototype.validateProperties = function (_a) {
        var min = _a.min, max = _a.max, value = _a.value, valueStart = _a.valueStart, step = _a.step, minRange = _a.minRange;
        if (min >= max) {
            throw new Error("MDCSliderFoundation: min must be strictly less than max. " +
                ("Current: [min: " + min + ", max: " + max + "]"));
        }
        if (step <= 0) {
            throw new Error("MDCSliderFoundation: step must be a positive number. " +
                ("Current step: " + step));
        }
        if (this.isRange) {
            if (value < min || value > max || valueStart < min || valueStart > max) {
                throw new Error("MDCSliderFoundation: values must be in [min, max] range. " +
                    ("Current values: [start value: " + valueStart + ", end value: ") +
                    (value + ", min: " + min + ", max: " + max + "]"));
            }
            if (valueStart > value) {
                throw new Error("MDCSliderFoundation: start value must be <= end value. " +
                    ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
            }
            if (minRange < 0) {
                throw new Error("MDCSliderFoundation: minimum range must be non-negative. " +
                    ("Current min range: " + minRange));
            }
            if (value - valueStart < minRange) {
                throw new Error("MDCSliderFoundation: start value and end value must differ by at least " +
                    (minRange + ". Current values: [start value: " + valueStart + ", ") +
                    ("end value: " + value + "]"));
            }
            var numStepsValueStartFromMin = (valueStart - min) / step;
            var numStepsValueFromMin = (value - min) / step;
            if (!Number.isInteger(parseFloat(numStepsValueStartFromMin.toFixed(6))) ||
                !Number.isInteger(parseFloat(numStepsValueFromMin.toFixed(6)))) {
                throw new Error("MDCSliderFoundation: Slider values must be valid based on the " +
                    ("step value (" + step + "). Current values: [start value: ") +
                    (valueStart + ", end value: " + value + ", min: " + min + "]"));
            }
        }
        else { // Single point slider.
            if (value < min || value > max) {
                throw new Error("MDCSliderFoundation: value must be in [min, max] range. " +
                    ("Current values: [value: " + value + ", min: " + min + ", max: " + max + "]"));
            }
            var numStepsValueFromMin = (value - min) / step;
            if (!Number.isInteger(parseFloat(numStepsValueFromMin.toFixed(6)))) {
                throw new Error("MDCSliderFoundation: Slider value must be valid based on the " +
                    ("step value (" + step + "). Current value: " + value));
            }
        }
    };
    MDCSliderFoundation.prototype.registerEventHandlers = function () {
        this.adapter.registerWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            // If supported, use pointer events API with #setPointerCapture.
            this.adapter.registerEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.registerEventHandler('pointerup', this.pointerupListener);
        }
        else {
            // Otherwise, fall back to mousedown/touchstart events.
            this.adapter.registerEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.registerEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.registerThumbEventHandler(Thumb.START, 'mouseenter', this.thumbMouseenterListener);
            this.adapter.registerThumbEventHandler(Thumb.START, 'mouseleave', this.thumbMouseleaveListener);
            this.adapter.registerInputEventHandler(Thumb.START, 'change', this.inputStartChangeListener);
            this.adapter.registerInputEventHandler(Thumb.START, 'focus', this.inputStartFocusListener);
            this.adapter.registerInputEventHandler(Thumb.START, 'blur', this.inputStartBlurListener);
        }
        this.adapter.registerThumbEventHandler(Thumb.END, 'mouseenter', this.thumbMouseenterListener);
        this.adapter.registerThumbEventHandler(Thumb.END, 'mouseleave', this.thumbMouseleaveListener);
        this.adapter.registerInputEventHandler(Thumb.END, 'change', this.inputEndChangeListener);
        this.adapter.registerInputEventHandler(Thumb.END, 'focus', this.inputEndFocusListener);
        this.adapter.registerInputEventHandler(Thumb.END, 'blur', this.inputEndBlurListener);
    };
    MDCSliderFoundation.prototype.deregisterEventHandlers = function () {
        this.adapter.deregisterWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            this.adapter.deregisterEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.deregisterEventHandler('pointerup', this.pointerupListener);
        }
        else {
            this.adapter.deregisterEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.deregisterEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'mouseenter', this.thumbMouseenterListener);
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'mouseleave', this.thumbMouseleaveListener);
            this.adapter.deregisterInputEventHandler(Thumb.START, 'change', this.inputStartChangeListener);
            this.adapter.deregisterInputEventHandler(Thumb.START, 'focus', this.inputStartFocusListener);
            this.adapter.deregisterInputEventHandler(Thumb.START, 'blur', this.inputStartBlurListener);
        }
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'mouseenter', this.thumbMouseenterListener);
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'mouseleave', this.thumbMouseleaveListener);
        this.adapter.deregisterInputEventHandler(Thumb.END, 'change', this.inputEndChangeListener);
        this.adapter.deregisterInputEventHandler(Thumb.END, 'focus', this.inputEndFocusListener);
        this.adapter.deregisterInputEventHandler(Thumb.END, 'blur', this.inputEndBlurListener);
    };
    MDCSliderFoundation.prototype.handlePointerup = function () {
        this.handleUp();
        this.adapter.deregisterEventHandler('pointermove', this.moveListener);
    };
    MDCSliderFoundation.SUPPORTS_POINTER_EVENTS = HAS_WINDOW && Boolean(window.PointerEvent) &&
        // #setPointerCapture is buggy on iOS, so we can't use pointer events
        // until the following bug is fixed:
        // https://bugs.webkit.org/show_bug.cgi?id=220196
        !isIOS();
    return MDCSliderFoundation;
}(MDCFoundation));
function isIOS() {
    // Source:
    // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
    return [
        'iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}
/**
 * Given a number, returns the number of digits that appear after the
 * decimal point.
 * See
 * https://stackoverflow.com/questions/9539513/is-there-a-reliable-way-in-javascript-to-obtain-the-number-of-decimal-places-of
 */
function getNumDecimalPlaces(n) {
    // Pull out the fraction and the exponent.
    var match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));
    // NaN or Infinity or integer.
    // We arbitrarily decide that Infinity is integral.
    if (!match)
        return 0;
    var fraction = match[1] || ''; // E.g. 1.234e-2 => 234
    var exponent = match[2] || 0; // E.g. 1.234e-2 => -2
    // Count the number of digits in the fraction and subtract the
    // exponent to simulate moving the decimal point left by exponent places.
    // 1.234e+2 has 1 fraction digit and '234'.length -  2 == 1
    // 1.234e-2 has 5 fraction digit and '234'.length - -2 == 5
    return Math.max(0, // lower limit
    (fraction === '0' ? 0 : fraction.length) - Number(exponent));
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=l=>null!=l?l:b;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class SliderBase extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSliderFoundation;
        this.disabled = false;
        this.min = 0;
        this.max = 100;
        this.valueEnd = 0;
        this.name = '';
        this.step = 1;
        this.withTickMarks = false;
        this.discrete = false;
        this.tickMarks = [];
        this.trackTransformOriginStyle = '';
        this.trackLeftStyle = '';
        this.trackRightStyle = '';
        this.trackTransitionStyle = '';
        this.endThumbWithIndicator = false;
        this.endThumbTop = false;
        this.shouldRenderEndRipple = false;
        this.endThumbTransformStyle = '';
        this.endThumbTransitionStyle = '';
        this.endThumbCssProperties = {};
        this.valueToAriaTextTransform = null;
        this.valueToValueIndicatorTransform = (value) => {
            return `${value}`;
        };
        this.boundMoveListener = null;
        this.endRippleHandlers = new RippleHandlers(() => {
            this.shouldRenderEndRipple = true;
            return this.endRipple;
        });
    }
    update(changed) {
        if (changed.has('valueEnd') && this.mdcFoundation) {
            this.mdcFoundation.setValue(this.valueEnd);
            const validVal = this.mdcFoundation.getValue();
            if (validVal !== this.valueEnd) {
                this.valueEnd = validVal;
            }
        }
        if (changed.has('discrete')) {
            if (!this.discrete) {
                this.tickMarks = [];
            }
        }
        super.update(changed);
    }
    render() {
        return this.renderRootEl(y `
      ${this.renderStartInput()}
      ${this.renderEndInput()}
      ${this.renderTrack()}
      ${this.renderTickMarks()}
      ${this.renderStartThumb()}
      ${this.renderEndThumb()}`);
    }
    renderRootEl(content) {
        const rootClasses = o({
            'mdc-slider--disabled': this.disabled,
            'mdc-slider--discrete': this.discrete,
        });
        return y `
    <div
        class="mdc-slider ${rootClasses}"
        @pointerdown=${this.onPointerdown}
        @pointerup=${this.onPointerup}
        @contextmenu=${this.onContextmenu}>
      ${content}
    </div>`;
    }
    renderStartInput() {
        return b;
    }
    renderEndInput() {
        var _a;
        return y `
      <input
          class="mdc-slider__input end"
          type="range"
          step=${this.step}
          min=${this.min}
          max=${this.max}
          .value=${this.valueEnd}
          @change=${this.onEndChange}
          @focus=${this.onEndFocus}
          @blur=${this.onEndBlur}
          ?disabled=${this.disabled}
          name=${this.name}
          aria-label=${l(this.ariaLabel)}
          aria-labelledby=${l(this.ariaLabelledBy)}
          aria-describedby=${l(this.ariaDescribedBy)}
          aria-valuetext=${l((_a = this.valueToAriaTextTransform) === null || _a === void 0 ? void 0 : _a.call(this, this.valueEnd))}>
    `;
    }
    renderTrack() {
        return b;
    }
    renderTickMarks() {
        return !this.withTickMarks ? b : y `
      <div class="mdc-slider__tick-marks">
        ${this.tickMarks.map((tickMark) => {
            const isActive = tickMark === TickMark.ACTIVE;
            return y `<div class="${isActive ? 'mdc-slider__tick-mark--active' :
                'mdc-slider__tick-mark--inactive'}"></div>`;
        })}
      </div>`;
    }
    renderStartThumb() {
        return b;
    }
    renderEndThumb() {
        const endThumbClasses = o({
            'mdc-slider__thumb--with-indicator': this.endThumbWithIndicator,
            'mdc-slider__thumb--top': this.endThumbTop,
        });
        const endThumbStyles = i(Object.assign({ '-webkit-transform': this.endThumbTransformStyle, 'transform': this.endThumbTransformStyle, '-webkit-transition': this.endThumbTransitionStyle, 'transition': this.endThumbTransitionStyle, 'left': this.endThumbTransformStyle ?
                '' :
                getComputedStyle(this).direction === 'rtl' ?
                    '' :
                    `calc(${(this.valueEnd - this.min) / (this.max - this.min) *
                        100}% - 24px)`, 'right': this.endThumbTransformStyle ?
                '' :
                getComputedStyle(this).direction !== 'rtl' ?
                    '' :
                    `calc(${(this.valueEnd - this.min) / (this.max - this.min) *
                        100}% - 24px)` }, this.endThumbCssProperties));
        const ripple = !this.shouldRenderEndRipple ?
            b :
            y `<mwc-ripple class="ripple" unbounded></mwc-ripple>`;
        return y `
      <div
          class="mdc-slider__thumb end ${endThumbClasses}"
          style=${endThumbStyles}
          @mouseenter=${this.onEndMouseenter}
          @mouseleave=${this.onEndMouseleave}>
        ${ripple}
        ${this.renderValueIndicator(this.valueToValueIndicatorTransform(this.valueEnd))}
        <div class="mdc-slider__thumb-knob"></div>
      </div>
    `;
    }
    renderValueIndicator(text) {
        return this.discrete ? y `
    <div class="mdc-slider__value-indicator-container" aria-hidden="true">
      <div class="mdc-slider__value-indicator">
        <span class="mdc-slider__value-indicator-text">
          ${text}
        </span>
      </div>
    </div>` :
            b;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.mdcFoundation) {
            this.mdcFoundation.destroy();
        }
    }
    createAdapter() { }
    async firstUpdated() {
        super.firstUpdated();
        await this.layout(true);
    }
    updated(changed) {
        super.updated(changed);
        if (!this.mdcFoundation) {
            return;
        }
        if (changed.has('disabled')) {
            this.mdcFoundation.setDisabled(this.disabled);
        }
        if (changed.has('min')) {
            this.mdcFoundation.setMin(this.min);
        }
        if (changed.has('max')) {
            this.mdcFoundation.setMax(this.max);
        }
        if (changed.has('step')) {
            this.mdcFoundation.setStep(this.step);
        }
        if (changed.has('discrete')) {
            this.mdcFoundation.setIsDiscrete(this.discrete);
        }
        if (changed.has('withTickMarks')) {
            this.mdcFoundation.setHasTickMarks(this.withTickMarks);
        }
    }
    async layout(skipUpdateUI = false) {
        var _a;
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.layout({ skipUpdateUI });
        this.requestUpdate();
        await this.updateComplete;
    }
    onEndChange(e) {
        var _a;
        this.valueEnd = Number(e.target.value);
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.handleInputChange(Thumb.END);
    }
    onEndFocus() {
        var _a;
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.handleInputFocus(Thumb.END);
        this.endRippleHandlers.startFocus();
    }
    onEndBlur() {
        var _a;
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.handleInputBlur(Thumb.END);
        this.endRippleHandlers.endFocus();
    }
    onEndMouseenter() {
        var _a;
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.handleThumbMouseenter();
        this.endRippleHandlers.startHover();
    }
    onEndMouseleave() {
        var _a;
        (_a = this.mdcFoundation) === null || _a === void 0 ? void 0 : _a.handleThumbMouseleave();
        this.endRippleHandlers.endHover();
    }
    onPointerdown(e) {
        this.layout();
        if (this.mdcFoundation) {
            this.mdcFoundation.handlePointerdown(e);
            this.boundMoveListener =
                this.mdcFoundation.handleMove.bind(this.mdcFoundation);
            this.mdcRoot.addEventListener('pointermove', this.boundMoveListener);
        }
    }
    onPointerup() {
        if (this.mdcFoundation) {
            this.mdcFoundation.handleUp();
            if (this.boundMoveListener) {
                this.mdcRoot.removeEventListener('pointermove', this.boundMoveListener);
                this.boundMoveListener = null;
            }
        }
    }
    onContextmenu(e) {
        // prevents context menu otherwise pointerdown will fire but not pointerup
        e.preventDefault();
    }
    setFormData(formData) {
        if (this.name) {
            formData.append(this.name, `${this.valueEnd}`);
        }
    }
}
__decorate([
    i$2('input.end')
], SliderBase.prototype, "formElement", void 0);
__decorate([
    i$2('.mdc-slider')
], SliderBase.prototype, "mdcRoot", void 0);
__decorate([
    i$2('.end.mdc-slider__thumb')
], SliderBase.prototype, "endThumb", void 0);
__decorate([
    i$2('.end.mdc-slider__thumb .mdc-slider__thumb-knob')
], SliderBase.prototype, "endThumbKnob", void 0);
__decorate([
    i$2('.end.mdc-slider__thumb .mdc-slider__value-indicator-container')
], SliderBase.prototype, "endValueIndicatorContainer", void 0);
__decorate([
    e$1('.end .ripple')
], SliderBase.prototype, "endRipple", void 0);
__decorate([
    e$2({ type: Boolean, reflect: true })
], SliderBase.prototype, "disabled", void 0);
__decorate([
    e$2({ type: Number })
], SliderBase.prototype, "min", void 0);
__decorate([
    e$2({ type: Number })
], SliderBase.prototype, "max", void 0);
__decorate([
    e$2({ type: Number })
], SliderBase.prototype, "valueEnd", void 0);
__decorate([
    e$2({ type: String })
], SliderBase.prototype, "name", void 0);
__decorate([
    e$2({ type: Number })
], SliderBase.prototype, "step", void 0);
__decorate([
    e$2({ type: Boolean })
], SliderBase.prototype, "withTickMarks", void 0);
__decorate([
    e$2({ type: Boolean })
], SliderBase.prototype, "discrete", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "tickMarks", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "trackTransformOriginStyle", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "trackLeftStyle", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "trackRightStyle", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "trackTransitionStyle", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "endThumbWithIndicator", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "endThumbTop", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "shouldRenderEndRipple", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "endThumbTransformStyle", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "endThumbTransitionStyle", void 0);
__decorate([
    t$1()
], SliderBase.prototype, "endThumbCssProperties", void 0);
__decorate([
    ariaProperty,
    e$2({ type: String, attribute: 'aria-label' })
], SliderBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$2({ type: String, attribute: 'aria-labelledby' })
], SliderBase.prototype, "ariaLabelledBy", void 0);
__decorate([
    ariaProperty,
    e$2({ type: String, attribute: 'aria-describedby' })
], SliderBase.prototype, "ariaDescribedBy", void 0);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class SliderSingleBase extends SliderBase {
    get value() {
        return this.valueEnd;
    }
    set value(newVal) {
        this.valueEnd = newVal;
    }
    renderTrack() {
        const trackStyles = i({
            'transform-origin': this.trackTransformOriginStyle,
            'left': this.trackLeftStyle,
            'right': this.trackRightStyle,
            '-webkit-transform': `scaleX(${(this.valueEnd - this.min) / (this.max - this.min)})`,
            'transform': `scaleX(${(this.valueEnd - this.min) / (this.max - this.min)})`,
            '-webkit-transition': this.trackTransitionStyle,
            'transition': this.trackTransitionStyle,
        });
        return y `
      <div class="mdc-slider__track">
        <div class="mdc-slider__track--inactive"></div>
        <div class="mdc-slider__track--active">
          <div
              class="mdc-slider__track--active_fill"
              style=${trackStyles}>
          </div>
        </div>
      </div>`;
    }
    createAdapter() {
        return {
            addClass: (className) => {
                switch (className) {
                    case 'mdc-slider--disabled':
                        this.disabled = true;
                        break;
                }
            },
            removeClass: (className) => {
                switch (className) {
                    case 'mdc-slider--disabled':
                        this.disabled = false;
                        break;
                }
            },
            hasClass: (className) => {
                switch (className) {
                    case 'mdc-slider--disabled':
                        return this.disabled;
                    case 'mdc-slider--discrete':
                        return this.discrete;
                    default:
                        return false;
                }
            },
            addThumbClass: (className, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                switch (className) {
                    case 'mdc-slider__thumb--with-indicator':
                        this.endThumbWithIndicator = true;
                        break;
                }
            },
            removeThumbClass: (className, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                switch (className) {
                    case 'mdc-slider__thumb--with-indicator':
                        this.endThumbWithIndicator = false;
                        break;
                }
            },
            registerEventHandler: () => {
                // handled in bindings
            },
            deregisterEventHandler: () => {
                // handled in bindings
            },
            registerBodyEventHandler: (eventName, handler) => {
                document.body.addEventListener(eventName, handler);
            },
            deregisterBodyEventHandler: (eventName, handler) => {
                document.body.removeEventListener(eventName, handler);
            },
            registerInputEventHandler: (thumb, eventName, handler) => {
                if (thumb === Thumb.START) {
                    return;
                }
                this.formElement.addEventListener(eventName, handler);
            },
            deregisterInputEventHandler: (thumb, eventName, handler) => {
                if (thumb === Thumb.START) {
                    return;
                }
                this.formElement.removeEventListener(eventName, handler);
            },
            registerThumbEventHandler: () => {
                // handled by bindings
            },
            deregisterThumbEventHandler: () => {
                // handled by bindings
            },
            registerWindowEventHandler: (eventName, handler) => {
                window.addEventListener(eventName, handler);
            },
            deregisterWindowEventHandler: (eventName, handler) => {
                window.addEventListener(eventName, handler);
            },
            emitChangeEvent: (value, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                const event = new CustomEvent('change', { bubbles: true, composed: true, detail: { value, thumb } });
                this.dispatchEvent(event);
            },
            emitDragEndEvent: (_value, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                // Emitting event is not yet implemented. See issue:
                // https://github.com/material-components/material-components-web/issues/6448
                this.endRippleHandlers.endPress();
            },
            emitDragStartEvent: (_value, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                // Emitting event is not yet implemented. See issue:
                // https://github.com/material-components/material-components-web/issues/6448
                this.endRippleHandlers.startPress();
            },
            emitInputEvent: (value, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                const event = new CustomEvent('input', { bubbles: true, composed: true, detail: { value, thumb } });
                this.dispatchEvent(event);
            },
            focusInput: (thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                this.formElement.focus();
            },
            getAttribute: () => {
                // never seems to actually be used
                return '';
            },
            getBoundingClientRect: () => {
                return this.mdcRoot.getBoundingClientRect();
            },
            getInputAttribute: (attrName, thumb) => {
                if (thumb === Thumb.START) {
                    return null;
                }
                switch (attrName) {
                    case 'min':
                        return this.min.toString();
                    case 'max':
                        return this.max.toString();
                    case 'value':
                        return this.valueEnd.toString();
                    case 'step':
                        return this.step.toString();
                    default:
                        return null;
                }
            },
            getInputValue: (thumb) => {
                if (thumb === Thumb.START) {
                    return '';
                }
                return this.valueEnd.toString();
            },
            getThumbBoundingClientRect: (thumb) => {
                if (thumb === Thumb.START) {
                    return this.getBoundingClientRect();
                }
                return this.endThumb.getBoundingClientRect();
            },
            getThumbKnobWidth: (thumb) => {
                if (thumb === Thumb.START) {
                    return 0;
                }
                return this.endThumbKnob.getBoundingClientRect().width;
            },
            getValueIndicatorContainerWidth: (thumb) => {
                if (thumb === Thumb.START) {
                    return 0;
                }
                return this.endValueIndicatorContainer.getBoundingClientRect().width;
            },
            getValueToAriaValueTextFn: () => {
                return this.valueToAriaTextTransform;
            },
            isInputFocused: (thumb) => {
                if (thumb === Thumb.START) {
                    return false;
                }
                const activeElements = deepActiveElementPath();
                return activeElements[activeElements.length - 1] === this.formElement;
            },
            isRTL: () => {
                return getComputedStyle(this).direction === 'rtl';
            },
            setInputAttribute: (attribute, _value, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
            },
            removeInputAttribute: (attribute) => {
            },
            setThumbStyleProperty: (name, value, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                switch (name) {
                    case 'transform':
                    case '-webkit-transform':
                        this.endThumbTransformStyle = value;
                        break;
                    case 'transition':
                    case '-webkit-transition':
                        this.endThumbTransitionStyle = value;
                        break;
                    default:
                        if (name.startsWith('--')) {
                            this.endThumbCssProperties[name] = value;
                        }
                }
            },
            removeThumbStyleProperty: (name, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                switch (name) {
                    case 'left':
                    case 'right':
                        // handled by bindings
                        break;
                    case 'transition':
                    case '-webkit-transition':
                        this.endThumbTransitionStyle = '';
                        break;
                }
            },
            setTrackActiveStyleProperty: (name, value) => {
                switch (name) {
                    case 'transform-origin':
                        this.trackTransformOriginStyle = value;
                        break;
                    case 'left':
                        this.trackLeftStyle = value;
                        break;
                    case 'right':
                        this.trackRightStyle = value;
                        break;
                    case 'transform':
                    case '-webkit-transform':
                        // handled by bindings
                        break;
                    case 'transition':
                    case '-webkit-transition':
                        this.trackTransitionStyle = value;
                        break;
                }
            },
            removeTrackActiveStyleProperty: (name) => {
                switch (name) {
                    case 'transition':
                    case '-webkit-transition':
                        this.trackTransitionStyle = '';
                        break;
                }
            },
            setInputValue: (value, thumb) => {
                if (thumb === Thumb.START) {
                    return;
                }
                this.valueEnd = Number(value);
            },
            setPointerCapture: (pointerId) => {
                this.mdcRoot.setPointerCapture(pointerId);
            },
            setValueIndicatorText: () => {
                // handled by bindings
            },
            updateTickMarks: (tickMarks) => {
                this.tickMarks = tickMarks;
            },
        };
    }
}
__decorate([
    e$2({ type: Number })
], SliderSingleBase.prototype, "value", null);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Slider = class Slider extends SliderSingleBase {
};
Slider.styles = [styles$1];
Slider = __decorate([
    e$3('mwc-slider')
], Slider);

var updatePluginValue = function updatePluginValue(element, data) {
  var args = _objectSpread2({
    bubbles: true,
    cancelable: false,
    composed: true
  }, data);
  var event = new CustomEvent('ntx-value-change', args);
  element.dispatchEvent(event);
  return event;
};

var _templateObject, _templateObject2;
var NintexSampleSlider = _decorate([e$3('nintex-sample-slider')], function (_initialize, _LitElement) {
  var NintexSampleSlider = /*#__PURE__*/function (_LitElement2) {
    _inherits(NintexSampleSlider, _LitElement2);
    var _super = _createSuper(NintexSampleSlider);
    function NintexSampleSlider() {
      var _this;
      _classCallCheck(this, NintexSampleSlider);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(NintexSampleSlider);
  }(_LitElement);
  return {
    F: NintexSampleSlider,
    d: [{
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i$5(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    :host {\n      /* height: 100%; */\n      width: 100%;\n      display: block;\n\n      --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);\n    }\n  "])));
      }
    }, {
      kind: "field",
      decorators: [e$2()],
      key: "titleField",
      value: void 0
    }, {
      kind: "field",
      decorators: [e$2({
        type: Boolean
      })],
      key: "disabled",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [e$2({
        type: Number
      })],
      key: "min",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [e$2({
        type: Number
      })],
      key: "max",
      value: function value() {
        return 100;
      }
    }, {
      kind: "field",
      decorators: [e$2({
        type: Number,
        reflect: true
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
        return import('./material-slider.config-86c26ac4.js').then(function (x) {
          return x.config;
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;
        var min = this.min || 0;
        var max = this.max || 100;
        var value = this.value || this.min || 0;
        if (value < min) {
          value = min;
        } else if (value > max) {
          value = max;
        }
        return y(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<label for=\"slider1\">", "</label>\n      <mwc-slider\n        id=\"slider1\"\n        .min=", "\n        .max=", "\n        .value=", "\n        ?disabled=", "\n        discrete\n        @change=", "\n      ></mwc-slider> "])), this.titleField, min, max, value, this.disabled, function (e) {
          _this2.value = e.detail.value;
          updatePluginValue(_this2, {
            detail: e.detail.value
          });
        });
      }
    }]
  };
}, s);

export { NintexSampleSlider };
