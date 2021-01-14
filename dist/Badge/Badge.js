'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _tslib = require('../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var classnames = _interopDefault(require('classnames'));
var index = require('../constants/index.js');
require('./Badge.scss.js');

var Badge = function (_a) {
    var _b, _c;
    var children = _a.children, count = _a.count, _d = _a.size, size = _d === void 0 ? 'default' : _d, style = _a.style, className = _a.className, color = _a.color, text = _a.text, dot = _a.dot, status = _a.status, _e = _a.prefixCls, prefixCls = _e === void 0 ? index.PREFIX_CLASS : _e;
    var prefixClass = prefixCls + "-badge";
    return (jsxRuntime.jsxs("span", _tslib.__assign({ className: classnames(prefixClass, className), style: style }, { children: [color || status ? (jsxRuntime.jsx("span", { className: classnames(prefixClass + "-status-dot", (_b = {},
                    _b[prefixClass + "-status-dot-color-" + color] = color && index.INNER_COLOR.includes(color),
                    _b[prefixClass + "-status-dot-" + status] = status,
                    _b)) }, void 0)) : null,
            text ? (jsxRuntime.jsx("span", _tslib.__assign({ className: prefixClass + "-status-text" }, { children: text }), void 0)) : null, children, typeof count === 'number' ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: dot ? (jsxRuntime.jsx("span", { className: prefixClass + "-dot" }, void 0)) : (jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixClass + "-count", (_c = {},
                        _c[prefixClass + "-count-size-" + size] = size === 'small',
                        _c)) }, { children: count }), void 0)) }, void 0)) : null] }), void 0));
};

module.exports = Badge;
//# sourceMappingURL=Badge.js.map
