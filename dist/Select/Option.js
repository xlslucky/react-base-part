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
require('./Option.scss.js');

function Option(_a) {
    var value = _a.value, children = _a.children, onClick = _a.onClick, className = _a.className, _b = _a.prefixCls, prefixCls = _b === void 0 ? index.PREFIX_CLASS : _b;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixCls + "-select-selection-item", className), onClick: function () {
            if (typeof onClick === 'function') {
                onClick(value);
            }
        } }, { children: children }), void 0));
}

module.exports = Option;
//# sourceMappingURL=Option.js.map
