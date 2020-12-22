'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsxRuntime = require('react/jsx-runtime');
var React = _interopDefault(require('react'));

/*! *****************************************************************************
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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "[class*=rbp-],\n[class*=rbp-] *,\n[class*=rbp-] :after,\n[class*=rbp-] :before,\n[class^=rbp-],\n[class^=rbp-] *,\n[class^=rbp-] :after,\n[class^=rbp-] :before {\n  box-sizing: border-box; }\n\n.rbp-icon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  flex-shrink: 0;\n  vertical-align: middle; }\n  .rbp-icon.default-fill svg {\n    fill: currentColor; }\n  .rbp-icon svg {\n    display: inline-block;\n    width: 1em;\n    height: 1em; }\n";
styleInject(css_248z);

function BaseIcon(_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick, style = _a.style, _b = _a.defaultFill, defaultFill = _b === void 0 ? true : _b;
    return (jsxRuntime.jsx("span", __assign({ style: style, className: classnames(['rbp-icon'], className, {
            'default-fill': defaultFill,
        }), onClick: onClick }, { children: children }), void 0));
}

function IconLoading(props) {
    return (jsxRuntime.jsx(BaseIcon, __assign({}, props, { children: jsxRuntime.jsx("svg", __assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M980.752 313.697c-25.789-60.972-62.702-115.725-109.713-162.736-47.012-47.011-101.764-83.924-162.736-109.713C645.161 14.542 578.106 1 509 1c-2.242 0-4.48 0.015-6.715 0.043-16.567 0.211-29.826 13.812-29.615 30.38 0.209 16.438 13.599 29.618 29.99 29.618l0.39-0.002c1.98-0.026 3.963-0.039 5.95-0.039 61.033 0 120.224 11.947 175.93 35.508 53.82 22.764 102.162 55.359 143.683 96.879s74.115 89.862 96.88 143.683C949.054 392.776 961 451.967 961 513c0 16.568 13.432 30 30 30s30-13.432 30-30c0-69.106-13.541-136.162-40.248-199.303z" }, void 0) }), void 0) }), void 0));
}

var css_248z$1 = "[class*=rbp-],\n[class*=rbp-] *,\n[class*=rbp-] :after,\n[class*=rbp-] :before,\n[class^=rbp-],\n[class^=rbp-] *,\n[class^=rbp-] :after,\n[class^=rbp-] :before {\n  box-sizing: border-box; }\n\n.rbp-btn {\n  display: inline-block;\n  text-align: center;\n  border: none;\n  outline: none;\n  height: 32px;\n  font-size: 14px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  border-radius: 2px;\n  white-space: nowrap;\n  padding: 4px 15px;\n  line-height: 1.5; }\n  .rbp-btn > span {\n    display: inline-block; }\n  .rbp-btn > a {\n    text-decoration: none;\n    color: inherit; }\n  .rbp-btn.rbp-btn-theme-default {\n    border-color: #f0f0f0;\n    background-color: #f0f0f0;\n    color: #000; }\n    .rbp-btn.rbp-btn-theme-default .loading-icon {\n      color: #000; }\n  .rbp-btn.rbp-btn-theme-primary {\n    border-color: #13c2c2;\n    background-color: #13c2c2;\n    color: #fff; }\n    .rbp-btn.rbp-btn-theme-primary .loading-icon {\n      color: #fff; }\n  .rbp-btn.rbp-btn-theme-ghost {\n    border-color: #13c2c2;\n    background-color: transparent;\n    color: #13c2c2; }\n    .rbp-btn.rbp-btn-theme-ghost .loading-icon {\n      color: #13c2c2; }\n  .rbp-btn.rbp-btn-theme-danger {\n    border-color: #f5222d;\n    background-color: #f5222d;\n    color: #fff; }\n    .rbp-btn.rbp-btn-theme-danger .loading-icon {\n      color: #fff; }\n\n.rbp-btn.rbp-btn-circle {\n  border-radius: 32px; }\n\n.rbp-btn.rbp-btn-block {\n  display: flex;\n  width: 100%; }\n\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled], .rbp-btn.rbp-btn-loading {\n  position: relative; }\n  .rbp-btn.rbp-btn-disabled::before, .rbp-btn[disabled]::before, .rbp-btn.rbp-btn-loading::before {\n    content: \"\";\n    position: absolute;\n    left: -1px;\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    z-index: 1;\n    opacity: 0.35;\n    background-color: #fff;\n    pointer-events: none; }\n\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled] {\n  cursor: not-allowed; }\n\n.rbp-btn.rbp-btn-loading {\n  cursor: progress; }\n\n.rbp-btn .loading-icon {\n  display: inline-block;\n  margin-right: 8px;\n  background-size: cover;\n  font-size: 18px; }\n  .rbp-btn .loading-icon > svg {\n    animation: loading 1s linear infinite; }\n\n@keyframes loading {\n  form {\n    transform: rotateZ(0); }\n  to {\n    transform: rotateZ(360deg); } }\n";
styleInject(css_248z$1);

var Button = React.forwardRef(function (_a, ref) {
    var children = _a.children, style = _a.style, disabled = _a.disabled, htmlType = _a.htmlType, onClick = _a.onClick, loading = _a.loading, _b = _a.type, type = _b === void 0 ? 'default' : _b, className = _a.className, block = _a.block, circle = _a.circle;
    var buttonClassName = React.useMemo(function () {
        var _a;
        return classnames('rbp-btn', className, (_a = {},
            _a["rbp-btn-theme-" + type] = type,
            _a['rbp-btn-disabled'] = disabled,
            _a['rbp-btn-loading'] = loading,
            _a['rbp-btn-block'] = block,
            _a['rbp-btn-circle'] = circle,
            _a));
    }, [className, disabled, loading, type, block, circle]);
    return (jsxRuntime.jsxs("button", __assign({ style: style, disabled: disabled, type: htmlType, className: buttonClassName, onClick: onClick, ref: ref }, { children: [loading ? jsxRuntime.jsx(IconLoading, { className: "loading-icon" }, void 0) : null,
            jsxRuntime.jsx("span", { children: children }, void 0)] }), void 0));
});

var index = (function () {
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx(IconLoading, {}, void 0) }, void 0));
});

exports.Button = Button;
exports.Icons = index;
//# sourceMappingURL=index.js.map
