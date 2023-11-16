(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('#rs-menu-root {\r\n  max-width: 1280px;\r\n  margin: 0 auto;\r\n  padding: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.logo {\r\n  height: 6em;\r\n  padding: 1.5em;\r\n  will-change: filter;\r\n  transition: filter 300ms;\r\n}\r\n.logo:hover {\r\n  filter: drop-shadow(0 0 2em #646cffaa);\r\n}\r\n.logo.react:hover {\r\n  filter: drop-shadow(0 0 2em #61dafbaa);\r\n}\r\n\r\n@keyframes logo-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  a:nth-of-type(2) .logo {\r\n    animation: logo-spin infinite 20s linear;\r\n  }\r\n}\r\n\r\n.card {\r\n  padding: 2em;\r\n}\r\n\r\n.read-the-docs {\r\n  color: #888;\r\n}\r\n/*\n! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.bg-orange-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 215 170 / var(--tw-bg-opacity));\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-1000 {\n  transition-duration: 1000ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n.hover\\:bg-orange-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\n}\r\n.hover\\:text-orange-100:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 237 213 / var(--tw-text-opacity));\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(require("react"), require("jquery"), require("react-dom")) : typeof define === "function" && define.amd ? define(["react", "jquery", "react-dom"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.React, global.$, global.ReactDOM));
})(this, function(require$$0, $, require$$0$1) {
  "use strict";
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_development = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    (function() {
      var React = require$$0;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self2) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self2, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self2
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self2) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self2);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i2 = 0; i2 < node.length; i2++) {
              var child = node[i2];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i2 = 0; i2 < keys.length; i2++) {
            var key = keys[i2];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self2);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i2 = 0; i2 < children.length; i2++) {
                    validateChildKeys(children[i2], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  {
    jsxRuntime.exports = reactJsxRuntime_development;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m = require$$0$1;
  {
    var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    client.createRoot = function(c, o) {
      i.usingClientEntryPoint = true;
      try {
        return m.createRoot(c, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
    client.hydrateRoot = function(c, h, o) {
      i.usingClientEntryPoint = true;
      try {
        return m.hydrateRoot(c, h, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
  }
  const App$1 = "";
  const MyButton$1 = "";
  function MyButton() {
    const str = "Hello!";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-200 hover:bg-orange-600 text-orange-600 font-bold hover:text-orange-100 py-2 px-4 rounded transition duration-1000 ease-in-out", children: str });
  }
  const objects = [
    {
      key: "Невский вывод,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ14,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ15,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ17,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ21,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ22,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ5,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ7,тэц",
      parentKey: null
    },
    {
      key: "ЭС-1,тэц",
      parentKey: null
    },
    {
      key: "ЭС-2,тэц",
      parentKey: null
    },
    {
      key: "ТЭЦ14 Автовская,магистраль",
      parentKey: "ТЭЦ14,тэц"
    },
    {
      key: "ТЭЦ14 Северная,магистраль",
      parentKey: "ТЭЦ14,тэц"
    },
    {
      key: "ТЭЦ15 1я южная,магистраль",
      parentKey: "ТЭЦ15,тэц"
    },
    {
      key: "ТЭЦ15 2я южная,магистраль",
      parentKey: "ТЭЦ15,тэц"
    },
    {
      key: "ТЭЦ15 3я южная,магистраль",
      parentKey: "ТЭЦ15,тэц"
    },
    {
      key: "ТЭЦ15 Приморская,магистраль",
      parentKey: "ТЭЦ15,тэц"
    },
    {
      key: "ТЭЦ15 Северная,магистраль",
      parentKey: "ТЭЦ15,тэц"
    },
    {
      key: "ТЭЦ17 1я западная,магистраль",
      parentKey: "ТЭЦ17,тэц"
    },
    {
      key: "ТЭЦ17 2я западная,магистраль",
      parentKey: "ТЭЦ17,тэц"
    },
    {
      key: "ТЭЦ17 2я Полюстровская,магистраль",
      parentKey: "ТЭЦ17,тэц"
    },
    {
      key: "ТЭЦ17 Заводская,магистраль",
      parentKey: "ТЭЦ17,тэц"
    },
    {
      key: "ТЭЦ21 Ново-девяткино,магистраль",
      parentKey: "ТЭЦ21,тэц"
    },
    {
      key: "ТЭЦ21 Суздальская,магистраль",
      parentKey: "ТЭЦ21,тэц"
    },
    {
      key: "ТЭЦ21 Турбатомгаз,магистраль",
      parentKey: "ТЭЦ21,тэц"
    },
    {
      key: "ТЭЦ22 Московская,магистраль",
      parentKey: "ТЭЦ22,тэц"
    },
    {
      key: "ТЭЦ22 Софийская,магистраль",
      parentKey: "ТЭЦ22,тэц"
    },
    {
      key: "ТЭЦ22 Фрунзенская,магистраль",
      parentKey: "ТЭЦ22,тэц"
    },
    {
      key: "ТЭЦ5 Мурманская,магистраль",
      parentKey: "ТЭЦ5,тэц"
    },
    {
      key: "ТЭЦ5 Невская,магистраль",
      parentKey: "ТЭЦ5,тэц"
    },
    {
      key: "ТЭЦ5 Пороховская,магистраль",
      parentKey: "ТЭЦ5,тэц"
    },
    {
      key: "ТЭЦ7 Восточная,магистраль",
      parentKey: "ТЭЦ7,тэц"
    },
    {
      key: "ТЭЦ7 Наличная,магистраль",
      parentKey: "ТЭЦ7,тэц"
    },
    {
      key: "ЭС-1 Верейская,магистраль",
      parentKey: "ЭС-1,тэц"
    },
    {
      key: "ЭС-1 Куйбышевская,магистраль",
      parentKey: "ЭС-1,тэц"
    },
    {
      key: "ЭС-2 1я главная,магистраль",
      parentKey: "ЭС-2,тэц"
    },
    {
      key: "ЭС-2 Рылеевская,магистраль",
      parentKey: "ЭС-2,тэц"
    },
    {
      key: "ЭС-2 Синопская,магистраль",
      parentKey: "ЭС-2,тэц"
    },
    {
      key: "УСЗ-1-1 Южная,нпс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 1я южная,магистраль"
    },
    {
      key: "Костюшко д86,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 2я южная,магистраль"
    },
    {
      key: "Краснопутиловская д105,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 2я южная,магистраль"
    },
    {
      key: "Пав 1-3 Южная,нпс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль"
    },
    {
      key: "Пав 2 Приморская-Дачная,нпс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль"
    },
    {
      key: "Кубинская д7,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль"
    },
    {
      key: "Павильон 153,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль"
    },
    {
      key: "ПТО,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль"
    },
    {
      key: "УСЗ-1-1 Южная,нпс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль"
    },
    {
      key: "р%2Fс Благодатная,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 1я южная,магистраль\\УСЗ-1-1 Южная,нпс"
    },
    {
      key: "р%2Fс Варшавская,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 1я южная,магистраль\\УСЗ-1-1 Южная,нпс"
    },
    {
      key: "Дачная,нпс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс"
    },
    {
      key: "р%2Fс Десантников,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс"
    },
    {
      key: "р%2Fс кв 7-12 Юго-Запад,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс"
    },
    {
      key: "р%2Fс Марш.Жукова,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс"
    },
    {
      key: "р%2Fс Марш.Захарова,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс"
    },
    {
      key: "р%2Fс Рихарда Зорге,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс"
    },
    {
      key: "р%2Fс 1я Красноармейская,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль\\УСЗ-1-1 Южная,нпс"
    },
    {
      key: "р%2Fс Герцена,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль\\УСЗ-1-1 Южная,нпс"
    },
    {
      key: "Варшавская д63 к3 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 1я южная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Варшавская,папка"
    },
    {
      key: "ГТП Варшавская д9,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 1я южная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Варшавская,папка"
    },
    {
      key: "р%2Fс Афанасьева,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс"
    },
    {
      key: "р%2Fс Ветеранов,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс"
    },
    {
      key: "р%2Fс кв.1 Ульянка,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс"
    },
    {
      key: "р%2Fс Маршала Казакова,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс"
    },
    {
      key: "р%2Fс Новопроложенная,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс"
    },
    {
      key: "р%2Fс Стойкости,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс"
    },
    {
      key: "Южная перемычка,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс"
    },
    {
      key: "Десантников д28 к2 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Десантников,папка"
    },
    {
      key: "Десантников д12 к2 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс кв 7-12 Юго-Запад,папка"
    },
    {
      key: "пр Маршала Жукова д31 к2 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Марш.Жукова,папка"
    },
    {
      key: "Ленинский пр д93 к4 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Марш.Захарова,папка"
    },
    {
      key: "Маршала Захарова д22 к2 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Марш.Захарова,папка"
    },
    {
      key: "Маршала Захарова д32 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Марш.Захарова,папка"
    },
    {
      key: "Маршала Захарова д33 к2 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Марш.Захарова,папка"
    },
    {
      key: "Доблести д28 к3 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Рихарда Зорге,папка"
    },
    {
      key: "Р_Зорге д11 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Рихарда Зорге,папка"
    },
    {
      key: "Р_Зорге д12 к2 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Рихарда Зорге,папка"
    },
    {
      key: "Р_Зорге д5 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Приморская,магистраль\\Пав 2 Приморская-Дачная,нпс\\р%2Fс Рихарда Зорге,папка"
    },
    {
      key: "Варшавская д63 к3 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Герцена,папка"
    },
    {
      key: "ГТП Варшавская д9,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Герцена,папка"
    },
    {
      key: "р%2Fс Фрунзе,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 1я южная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Варшавская,папка\\Варшавская д63 к3 литА,цтп"
    },
    {
      key: "Дачный пр 6 к3 литБ,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Ветеранов,папка"
    },
    {
      key: "Ленинский пр д117 к3 литБ,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Ветеранов,папка"
    },
    {
      key: "Ленинский пр д123 литБ,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Ветеранов,папка"
    },
    {
      key: "р%2Fс Генерала Симоняка,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Ветеранов,папка"
    },
    {
      key: "Дачный пр 3 к8 литБ,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс кв.1 Ульянка,папка"
    },
    {
      key: "Лени Голикова д2 к2 литБ,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс кв.1 Ульянка,папка"
    },
    {
      key: "НСС Маршала Казакова 12,нпс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Маршала Казакова,папка"
    },
    {
      key: "НСС Маршала Казакова 5,нпс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Маршала Казакова,папка"
    },
    {
      key: "Лени Голикова 98 к2 литБ,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Новопроложенная,папка"
    },
    {
      key: "пр Ветеранов д109 к2 литА,цтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\Южная перемычка,папка"
    },
    {
      key: "р%2Fс Фрунзе,папка",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Герцена,папка\\Варшавская д63 к3 литА,цтп"
    },
    {
      key: "ГТП Фрунзе д12,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 1я южная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Варшавская,папка\\Варшавская д63 к3 литА,цтп\\р%2Fс Фрунзе,папка"
    },
    {
      key: "Генерала Симоняка д10к2,нсс",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 3я южная,магистраль\\Пав 1-3 Южная,нпс\\Дачная,нпс\\р%2Fс Ветеранов,папка\\р%2Fс Генерала Симоняка,папка"
    },
    {
      key: "ГТП Фрунзе д12,гтп",
      parentKey: "ТЭЦ15,тэц\\ТЭЦ15 Северная,магистраль\\УСЗ-1-1 Южная,нпс\\р%2Fс Герцена,папка\\Варшавская д63 к3 литА,цтп\\р%2Fс Фрунзе,папка"
    }
  ];
  const viewMenu = {
    objects
  };
  function App() {
    require$$0.useState(0);
    const list = viewMenu.objects.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: x.key }));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, {}),
      list
    ] });
  }
  $(onReady);
  function onReady($2) {
    $2("#Main_divViewExplorer").prepend('<div id="rs-menu-root"></div>');
    client.createRoot($2("#rs-menu-root").get(0)).render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
    );
  }
});
