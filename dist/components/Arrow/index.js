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

var jsxRuntime = require('react/jsx-runtime');
var classnames = _interopDefault(require('classnames'));
var index = require('../../constants/index.js');
require('./Arrow.scss.js');

function Arrow(_a) {
    var place = _a.place, className = _a.className, _b = _a.prefixCls, prefixCls = _b === void 0 ? index.PREFIX_CLASS : _b;
    return (jsxRuntime.jsx("span", { className: classnames(prefixCls + "-arrow-icon", prefixCls + "-arrow-icon-" + place, className) }, void 0));
}

module.exports = Arrow;
//# sourceMappingURL=index.js.map
