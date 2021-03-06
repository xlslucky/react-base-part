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
var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));
require('./Button.scss.js');
var index = require('../constants/index.js');
var index$1 = require('../components/Loading/index.js');

var Button = React__default.forwardRef(function (_a, ref) {
    var children = _a.children, style = _a.style, disabled = _a.disabled, _b = _a.htmlType, htmlType = _b === void 0 ? 'button' : _b, onClick = _a.onClick, loading = _a.loading, _c = _a.type, type = _c === void 0 ? 'default' : _c, className = _a.className, block = _a.block, circle = _a.circle, _d = _a.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d, _e = _a.size, size = _e === void 0 ? 'default' : _e, restProps = _tslib.__rest(_a, ["children", "style", "disabled", "htmlType", "onClick", "loading", "type", "className", "block", "circle", "prefixCls", "size"]);
    var buttonClassName = React__default.useMemo(function () {
        var _a;
        return classnames(prefixCls + "-btn", className, (_a = {},
            _a[prefixCls + "-btn-theme-" + type] = type,
            _a[prefixCls + "-btn-disabled"] = disabled,
            _a[prefixCls + "-btn-loading"] = loading,
            _a[prefixCls + "-btn-block"] = block,
            _a[prefixCls + "-btn-circle"] = circle,
            _a[prefixCls + "-btn-size-lg"] = size === 'large',
            _a[prefixCls + "-btn-size-sm"] = size === 'small',
            _a));
    }, [prefixCls, className, type, disabled, loading, block, circle, size]);
    function handleBtn(event) {
        if (loading || disabled) {
            return;
        }
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }
    return (jsxRuntime.jsxs("button", _tslib.__assign({ style: style, disabled: disabled, type: htmlType, className: buttonClassName, onClick: handleBtn, ref: ref }, restProps, { children: [loading ? (jsxRuntime.jsx(index$1, { className: prefixCls + "-btn-loading-icon" }, void 0)) : null,
            jsxRuntime.jsx("span", { children: children }, void 0)] }), void 0));
});

module.exports = Button;
//# sourceMappingURL=Button.js.map
