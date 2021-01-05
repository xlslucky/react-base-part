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

function CheckboxGroup(_a) {
    var children = _a.children, disabled = _a.disabled, defaultValue = _a.defaultValue, value = _a.value, onChange = _a.onChange, className = _a.className;
    var onChangeCheckbox = function (v) { return function (event) {
        if (typeof onChange === 'function') {
            if (event.target.checked) {
                onChange(_tslib.__spreadArrays((value || []), [v]));
            }
            else {
                onChange((value || []).filter(function (item) { return item !== v; }));
            }
        }
    }; };
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: className }, { children: React__default.Children.map(children, function (option) {
            var props = option.props;
            return React__default.cloneElement(option, _tslib.__assign(_tslib.__assign({}, props), { disabled: disabled || props.disabled, defaultChecked: defaultValue && defaultValue.includes(props.value), checked: value && value.includes(props.value), onChange: onChangeCheckbox(props.value) }));
        }) }), void 0));
}

module.exports = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map
