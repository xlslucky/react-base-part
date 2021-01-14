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
var index = require('../constants/index.js');
require('./Switch.scss.js');

var Switch = function (_a) {
    var _b;
    var checked = _a.checked, size = _a.size, checkedChildren = _a.checkedChildren, unCheckedChildren = _a.unCheckedChildren, disabled = _a.disabled, onChange = _a.onChange, className = _a.className, _c = _a.defaultChecked, defaultChecked = _c === void 0 ? false : _c, _d = _a.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d;
    var prefixClass = prefixCls + "-switch";
    var _e = React__default.useState(defaultChecked), innerChecked = _e[0], setInnerChecked = _e[1];
    React__default.useEffect(function () {
        if (typeof checked === 'boolean') {
            setInnerChecked(checked);
        }
    }, [checked]);
    function handleSwitch(event) {
        var flag = !innerChecked;
        setInnerChecked(flag);
        if (typeof onChange === 'function') {
            onChange(flag);
        }
    }
    return (jsxRuntime.jsxs("button", _tslib.__assign({ disabled: disabled, className: classnames(prefixClass, (_b = {},
            _b[prefixClass + "-size-" + size] = size === 'small',
            _b[prefixClass + "-checked"] = innerChecked,
            _b[prefixClass + "-disabled"] = disabled,
            _b)), onClick: handleSwitch }, { children: [jsxRuntime.jsx("div", { className: prefixClass + "-handle" }, void 0),
            jsxRuntime.jsx("span", _tslib.__assign({ className: prefixClass + "-inner" }, { children: innerChecked ? checkedChildren : unCheckedChildren }), void 0)] }), void 0));
};

module.exports = Switch;
//# sourceMappingURL=Switch.js.map
