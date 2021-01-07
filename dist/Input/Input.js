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
var Input_types = require('./Input.types.js');
require('./Input.scss.js');

var Input = function (_a) {
    var _b, _c, _d;
    var _e = _a.bordered, bordered = _e === void 0 ? true : _e, 
    // TODO 禁用
    // disabled,
    className = _a.className, suffix = _a.suffix, prefix = _a.prefix, _f = _a.prefixCls, prefixCls = _f === void 0 ? index.PREFIX_CLASS : _f, _g = _a.type, type = _g === void 0 ? 'text' : _g, onPressEnter = _a.onPressEnter, _h = _a.size, size = _h === void 0 ? 'default' : _h, style = _a.style, restProps = _tslib.__rest(_a, ["bordered", "className", "suffix", "prefix", "prefixCls", "type", "onPressEnter", "size", "style"]);
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(prefixCls + "-input-wrapper", (_b = {}, _b[prefixCls + "-input-border"] = bordered, _b), (_c = {}, _c[prefixCls + "-input-size-lg"] = size === 'large', _c), (_d = {}, _d[prefixCls + "-input-size-sm"] = size === 'small', _d), className), style: style }, { children: [jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-input-prefix" }, { children: prefix }), void 0),
            jsxRuntime.jsx("input", _tslib.__assign({ onKeyDown: function (event) {
                    if (event.key === Input_types.UiEventsKey.Enter) {
                        if (typeof onPressEnter === 'function') {
                            onPressEnter(event);
                        }
                    }
                }, className: prefixCls + "-input", type: type }, restProps), void 0),
            jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-input-suffix" }, { children: suffix }), void 0)] }), void 0));
};

module.exports = Input;
//# sourceMappingURL=Input.js.map
