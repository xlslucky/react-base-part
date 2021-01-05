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

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var classnames = _interopDefault(require('classnames'));
var index = require('../../constants/index.js');
require('./BaseIcon.scss.js');

function BaseIcon(_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick, style = _a.style, _b = _a.defaultFill, defaultFill = _b === void 0 ? true : _b, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c;
    return (jsxRuntime.jsx("span", _tslib.__assign({ style: style, className: classnames(prefixCls + "-icon", className, {
            'default-fill': defaultFill,
        }), onClick: onClick }, { children: children }), void 0));
}

module.exports = BaseIcon;
//# sourceMappingURL=BaseIcon.js.map
