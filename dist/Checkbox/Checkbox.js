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
require('./Checkbox.scss.js');

var Checkbox = function (_a) {
    var _b;
    var disabled = _a.disabled, defaultChecked = _a.defaultChecked, checked = _a.checked, onChange = _a.onChange, children = _a.children, className = _a.className, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c;
    function onChangeCheckbox(e) {
        if (typeof onChange === 'function') {
            onChange(e);
        }
    }
    return (jsxRuntime.jsxs("label", _tslib.__assign({ className: classnames(prefixCls + "-checkbox-wrapper", className, (_b = {},
            _b[prefixCls + "-checkbox-wrapper-disabled"] = disabled,
            _b)) }, { children: [jsxRuntime.jsxs("span", _tslib.__assign({ className: prefixCls + "-checkbox" }, { children: [jsxRuntime.jsx("input", { disabled: disabled, className: prefixCls + "-checkbox-input", type: "checkbox", onChange: onChangeCheckbox, defaultChecked: defaultChecked, checked: checked }, void 0),
                    jsxRuntime.jsx("span", { className: prefixCls + "-checkbox-inner" }, void 0)] }), void 0),
            children ? (jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-checkbox-content" }, { children: children }), void 0)) : null] }), void 0));
};

module.exports = Checkbox;
//# sourceMappingURL=Checkbox.js.map
