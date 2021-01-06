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
require('./Radio.scss.js');

var Radio = function (_a) {
    var _b;
    var _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c, children = _a.children, className = _a.className, disabled = _a.disabled, defaultChecked = _a.defaultChecked, onChange = _a.onChange, checked = _a.checked, value = _a.value;
    function onChangeRadio(event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }
    return (jsxRuntime.jsxs("label", _tslib.__assign({ className: classnames(prefixCls + "-radio-wrapper", className, (_b = {},
            _b[prefixCls + "-radio-wrapper-disabled"] = disabled,
            _b)) }, { children: [jsxRuntime.jsxs("span", _tslib.__assign({ className: prefixCls + "-radio" }, { children: [jsxRuntime.jsx("input", { disabled: disabled, className: prefixCls + "-radio-input", type: "radio", onChange: onChangeRadio, defaultChecked: defaultChecked, checked: checked }, void 0),
                    jsxRuntime.jsx("span", { className: prefixCls + "-radio-inner" }, void 0)] }), void 0),
            children ? (jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-radio-content" }, { children: children }), void 0)) : null] }), void 0));
};

module.exports = Radio;
//# sourceMappingURL=Radio.js.map
