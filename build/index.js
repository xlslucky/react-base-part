'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));

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

function IconCheckCircleFilled(props) {
    return (jsxRuntime.jsx(BaseIcon, __assign({}, props, { children: jsxRuntime.jsx("svg", __assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M512 8c278.36307647 0 504 225.63692353 504 504s-225.63692353 504-504 504S8 790.36307647 8 512 233.63692353 8 512 8z m288.75323039 321.51323039a38.76923039 38.76923039 0 0 0-54.85846078 0l-312.984 312.984-164.88553922-164.84676862-3.64430686-3.25661569a38.76923039 38.76923039 0 0 0-51.1753853 58.07630784l192.2953853 192.29538431 3.64430686 3.21784608a38.76923039 38.76923039 0 0 0 51.1753853-3.21784608l340.39384608-340.39384607 3.2566147-3.68307647a38.76923039 38.76923039 0 0 0-3.21784608-51.1753853z" }, void 0) }), void 0) }), void 0));
}

function IconCloseCircleFilled(props) {
    return (jsxRuntime.jsx(BaseIcon, __assign({}, props, { children: jsxRuntime.jsx("svg", __assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M512 8c278.36307647 0 504 225.63692353 504 504s-225.63692353 504-504 504S8 790.36307647 8 512 233.63692353 8 512 8zM347.50215392 292.68246177a38.76923039 38.76923039 0 0 0-54.81969215 54.81969215L457.18030784 512l-164.49784607 164.49784608a38.76923039 38.76923039 0 0 0-3.21784608 51.17538431l3.21784608 3.64430784a38.76923039 38.76923039 0 0 0 54.81969215 0L512 566.81969216l164.49784608 164.49784607a38.76923039 38.76923039 0 0 0 51.17538431 3.21784608l3.64430784-3.21784608a38.76923039 38.76923039 0 0 0 0-54.81969215L566.81969216 512l164.49784607-164.49784608a38.76923039 38.76923039 0 0 0 3.21784608-51.17538431l-3.21784608-3.64430784a38.76923039 38.76923039 0 0 0-54.81969215 0L512 457.18030784z" }, void 0) }), void 0) }), void 0));
}

function IconExclamationCircleFilled(props) {
    return (jsxRuntime.jsx(BaseIcon, __assign({}, props, { children: jsxRuntime.jsx("svg", __assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M512 8c278.36307647 0 504 225.63692353 504 504s-225.63692353 504-504 504S8 790.36307647 8 512 233.63692353 8 512 8z m0 736.61538431a38.76923039 38.76923039 0 1 0 0 77.53846177 38.76923039 38.76923039 0 0 0 0-77.53846177z m0-542.76923039a38.76923039 38.76923039 0 0 0-38.76923039 38.76923039v387.69230785a38.76923039 38.76923039 0 0 0 77.53846078 0V240.61538431a38.76923039 38.76923039 0 0 0-38.76923039-38.76923039z" }, void 0) }), void 0) }), void 0));
}



var icons = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IconLoading: IconLoading,
    IconCheckCircleFilled: IconCheckCircleFilled,
    IconCloseCircleFilled: IconCloseCircleFilled,
    IconExclamationCircleFilled: IconExclamationCircleFilled
});

var css_248z$1 = "[class*=rbp-],\n[class*=rbp-] *,\n[class*=rbp-] :after,\n[class*=rbp-] :before,\n[class^=rbp-],\n[class^=rbp-] *,\n[class^=rbp-] :after,\n[class^=rbp-] :before {\n  box-sizing: border-box; }\n\n.rbp-btn {\n  display: inline-block;\n  text-align: center;\n  border: none;\n  outline: none;\n  height: 32px;\n  font-size: 14px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  border-radius: 2px;\n  white-space: nowrap;\n  padding: 4px 15px;\n  line-height: 1.5; }\n  .rbp-btn > span {\n    display: inline-block; }\n  .rbp-btn > a {\n    text-decoration: none;\n    color: inherit; }\n  .rbp-btn.rbp-btn-theme-default {\n    border-color: #f0f0f0;\n    background-color: #f0f0f0;\n    color: #000; }\n    .rbp-btn.rbp-btn-theme-default .loading-icon {\n      color: #000; }\n  .rbp-btn.rbp-btn-theme-primary {\n    border-color: #13c2c2;\n    background-color: #13c2c2;\n    color: #fff; }\n    .rbp-btn.rbp-btn-theme-primary .loading-icon {\n      color: #fff; }\n  .rbp-btn.rbp-btn-theme-ghost {\n    border-color: #13c2c2;\n    background-color: transparent;\n    color: #13c2c2; }\n    .rbp-btn.rbp-btn-theme-ghost .loading-icon {\n      color: #13c2c2; }\n  .rbp-btn.rbp-btn-theme-danger {\n    border-color: #f5222d;\n    background-color: #f5222d;\n    color: #fff; }\n    .rbp-btn.rbp-btn-theme-danger .loading-icon {\n      color: #fff; }\n\n.rbp-btn.rbp-btn-circle {\n  border-radius: 32px; }\n\n.rbp-btn.rbp-btn-block {\n  display: flex;\n  width: 100%; }\n\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled], .rbp-btn.rbp-btn-loading {\n  position: relative; }\n  .rbp-btn.rbp-btn-disabled::before, .rbp-btn[disabled]::before, .rbp-btn.rbp-btn-loading::before {\n    content: \"\";\n    position: absolute;\n    left: -1px;\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    z-index: 1;\n    opacity: 0.35;\n    background-color: #fff;\n    pointer-events: none; }\n\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled] {\n  cursor: not-allowed; }\n\n.rbp-btn.rbp-btn-loading {\n  cursor: progress; }\n\n.rbp-btn .loading-icon {\n  display: inline-block;\n  margin-right: 8px;\n  background-size: cover;\n  font-size: 18px; }\n  .rbp-btn .loading-icon > svg {\n    animation: loading 1s linear infinite; }\n\n@keyframes loading {\n  form {\n    transform: rotateZ(0); }\n  to {\n    transform: rotateZ(360deg); } }\n";
styleInject(css_248z$1);

var Button = React__default.forwardRef(function (_a, ref) {
    var children = _a.children, style = _a.style, disabled = _a.disabled, htmlType = _a.htmlType, onClick = _a.onClick, loading = _a.loading, _b = _a.type, type = _b === void 0 ? 'default' : _b, className = _a.className, block = _a.block, circle = _a.circle;
    var buttonClassName = React__default.useMemo(function () {
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

function guid() {
    return Date.now() + "_" + Math.random().toString(32).substr(2, 8);
}

var MessageType;
(function (MessageType) {
    MessageType["Success"] = "success";
    MessageType["Warn"] = "warn";
    MessageType["Error"] = "error";
    MessageType["Info"] = "info";
})(MessageType || (MessageType = {}));

var _a, _b;
var MESSAGE_TYPE_CLASSNAME = (_a = {},
    _a[MessageType.Success] = 'rbp-message-success',
    _a[MessageType.Warn] = 'rbp-message-warn',
    _a[MessageType.Error] = 'rbp-message-error',
    _a[MessageType.Info] = 'rbp-message-info',
    _a);
var MESSAGE_TYPE_ICON = (_b = {},
    _b[MessageType.Success] = IconCheckCircleFilled,
    _b[MessageType.Warn] = IconExclamationCircleFilled,
    _b[MessageType.Error] = IconCloseCircleFilled,
    _b[MessageType.Info] = IconExclamationCircleFilled,
    _b);
var DURATION = 3000;

var css_248z$2 = "[class*=rbp-],\n[class*=rbp-] *,\n[class*=rbp-] :after,\n[class*=rbp-] :before,\n[class^=rbp-],\n[class^=rbp-] *,\n[class^=rbp-] :after,\n[class^=rbp-] :before {\n  box-sizing: border-box; }\n\n.rbp-message-container {\n  position: fixed;\n  left: 0;\n  top: 8px;\n  z-index: 1001;\n  font-size: 14px;\n  width: 100%;\n  pointer-events: none; }\n\n.rbp-message-notice {\n  padding: 8px;\n  text-align: center;\n  pointer-events: none; }\n  .rbp-message-notice.rbp-message-move-appear {\n    animation: showMove .1s ease-out; }\n  .rbp-message-notice.rbp-message-move-leave {\n    animation: hideMove .25s ease-out; }\n\n.rbp-message-notice-content {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 22px;\n  background: #fff;\n  border-radius: 1px;\n  pointer-events: all; }\n  .rbp-message-notice-content .rbp-message-icon {\n    margin-right: 12px;\n    font-size: 22px; }\n  .rbp-message-notice-content.rbp-message-info {\n    background-color: rgba(19, 194, 194, 0.1);\n    border: 1px solid #13c2c2; }\n    .rbp-message-notice-content.rbp-message-info .rbp-message-icon {\n      color: #13c2c2; }\n  .rbp-message-notice-content.rbp-message-success {\n    background-color: rgba(82, 196, 26, 0.1);\n    border: 1px solid #52c41a; }\n    .rbp-message-notice-content.rbp-message-success .rbp-message-icon {\n      color: #52c41a; }\n  .rbp-message-notice-content.rbp-message-error {\n    background-color: rgba(245, 34, 45, 0.1);\n    border: 1px solid #f5222d; }\n    .rbp-message-notice-content.rbp-message-error .rbp-message-icon {\n      color: #f5222d; }\n  .rbp-message-notice-content.rbp-message-warn {\n    background-color: rgba(250, 219, 20, 0.1);\n    border: 1px solid #fadb14; }\n    .rbp-message-notice-content.rbp-message-warn .rbp-message-icon {\n      color: #fadb14; }\n  .rbp-message-notice-content .rbp-message-content {\n    text-align: left; }\n\n@keyframes showMove {\n  0% {\n    transform: translateY(-50%);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n\n@keyframes hideMove {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-50%);\n    opacity: 0; } }\n";
styleInject(css_248z$2);

function Message(_a) {
    var option = _a.option, type = _a.type, onClose = _a.onClose;
    var thisRef = React__default.useRef(null);
    React__default.useEffect(function () {
        setTimeout(function () {
            var notice = thisRef.current;
            notice === null || notice === void 0 ? void 0 : notice.classList.add('rbp-message-move-leave');
        }, option.duration);
    }, [option.duration]);
    React__default.useEffect(function () {
        var notice = thisRef.current;
        notice === null || notice === void 0 ? void 0 : notice.addEventListener('animationend', function () {
            if (notice.classList.contains('rbp-message-move-appear')) {
                notice.classList.remove('rbp-message-move-appear');
            }
            else if (notice.classList.contains('rbp-message-move-leave')) {
                notice.classList.remove('rbp-message-move-leave');
                onClose();
                if (typeof option.onClose === 'function') {
                    option.onClose();
                }
            }
        });
    }, [onClose, option, option.onClose]);
    return (jsxRuntime.jsx("div", __assign({ className: classnames('rbp-message-notice', 'rbp-message-move-appear'), ref: thisRef }, { children: jsxRuntime.jsxs("div", __assign({ className: classnames('rbp-message-notice-content', MESSAGE_TYPE_CLASSNAME[type], option.className) }, { children: [option.icon
                    ? option.icon
                    : React__default.createElement(MESSAGE_TYPE_ICON[type], {
                        className: classnames('rbp-message-icon'),
                    }), jsxRuntime.jsx("span", __assign({ className: "rbp-message-content" }, { children: option.content }), void 0)] }), void 0) }), void 0));
}
var message = (function () {
    var container = document.createElement('div');
    var queue = [];
    function renderMessage() {
        ReactDOM.render(jsxRuntime.jsx(jsxRuntime.Fragment, { children: queue.map(function (message) { return (React.createElement(Message, __assign({}, message, { key: message.id, onClose: function () {
                    queue = queue.filter(function (item) { return item.id !== message.id; });
                    renderMessage();
                } }))); }) }, void 0), container);
    }
    function appendMessage(option, type) {
        queue.push({ option: option, type: type, id: guid() });
        if (!document.body.contains(container)) {
            container.className = 'rbp-message-container';
            document.body.appendChild(container);
        }
        renderMessage();
    }
    var toast = function (type) { return function (content, duration, onClose) {
        if (duration === void 0) { duration = DURATION; }
        appendMessage({ content: content, duration: duration, onClose: onClose }, type);
    }; };
    return {
        info: toast(MessageType.Info),
        success: toast(MessageType.Success),
        warn: toast(MessageType.Warn),
        error: toast(MessageType.Error),
    };
})();

var index = (function () {
    return (jsxRuntime.jsx("div", { children: Object.entries(icons).map(function (_a) {
            var iconName = _a[0], icon = _a[1];
            return jsxRuntime.jsx("div", { children: React__default.createElement(icon) }, iconName);
        }) }, void 0));
});

exports.Button = Button;
exports.Icons = index;
exports.message = message;
//# sourceMappingURL=index.js.map
