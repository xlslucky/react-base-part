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
require('./Textarea.scss.js');

function Textarea(_a) {
    var _b, _c, _d;
    var style = _a.style, className = _a.className, _e = _a.bordered, bordered = _e === void 0 ? true : _e, _f = _a.prefixCls, prefixCls = _f === void 0 ? index.PREFIX_CLASS : _f, size = _a.size, 
    // TODO 禁用样式
    disabled = _a.disabled, restProps = _tslib.__rest(_a, ["style", "className", "bordered", "prefixCls", "size", "disabled"]);
    var prefixClass = prefixCls + "-input-textarea";
    return (jsxRuntime.jsx("textarea", _tslib.__assign({ disabled: disabled, className: classnames(prefixClass, (_b = {}, _b[prefixClass + "-border"] = bordered, _b), (_c = {}, _c[prefixClass + "-size-lg"] = size === 'large', _c), (_d = {}, _d[prefixClass + "-size-sm"] = size === 'small', _d), className) }, restProps), void 0));
}

module.exports = Textarea;
//# sourceMappingURL=Textarea.js.map
