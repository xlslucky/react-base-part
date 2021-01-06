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
var index$1 = require('../utils/index.js');
require('./Radio.scss.js');

var Radio = function (_a) {
    var _b;
    var _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c, children = _a.children, className = _a.className, disabled = _a.disabled, onChange = _a.onChange, value = _a.value, restProps = _tslib.__rest(_a, ["prefixCls", "children", "className", "disabled", "onChange", "value"]);
    function onChangeRadio(event) {
        if (typeof onChange === 'function') {
            onChange(_tslib.__assign(_tslib.__assign({}, event), { target: _tslib.__assign(_tslib.__assign({}, event.target), { 
                    // event.target.value 是 string 类型，不符合我们要求
                    // @ts-ignore
                    value: index$1.isEmpty(value) ? event.target.value : value }) }));
        }
    }
    return (jsxRuntime.jsxs("label", _tslib.__assign({ className: classnames(prefixCls + "-radio-wrapper", className, (_b = {},
            _b[prefixCls + "-radio-wrapper-disabled"] = disabled,
            _b)) }, { children: [jsxRuntime.jsxs("span", _tslib.__assign({ className: prefixCls + "-radio" }, { children: [jsxRuntime.jsx("input", _tslib.__assign({ className: prefixCls + "-radio-input", type: "radio", value: value, onChange: onChangeRadio }, restProps), void 0),
                    jsxRuntime.jsx("span", { className: prefixCls + "-radio-inner" }, void 0)] }), void 0),
            children ? (jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-radio-content" }, { children: children }), void 0)) : null] }), void 0));
};

module.exports = Radio;
//# sourceMappingURL=Radio.js.map
