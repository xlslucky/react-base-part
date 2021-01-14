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
require('./MenuItem.scss.js');

function MenuItem(_a) {
    var _b;
    var children = _a.children, onClick = _a.onClick, active = _a.active, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c;
    return (jsxRuntime.jsx("div", _tslib.__assign({ onClick: onClick, className: classnames([prefixCls + "-menu-item"], (_b = {},
            _b[prefixCls + "-menu-item-active"] = active,
            _b)) }, { children: children }), void 0));
}

module.exports = MenuItem;
//# sourceMappingURL=MenuItem.js.map
