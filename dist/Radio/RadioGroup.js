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
var index$1 = require('../utils/index.js');
require('./RadioGroup.scss.js');

function RadioGroup(_a) {
    var disabled = _a.disabled, defaultValue = _a.defaultValue, value = _a.value, onChange = _a.onChange, children = _a.children, className = _a.className, _b = _a.prefixCls, prefixCls = _b === void 0 ? index.PREFIX_CLASS : _b;
    var _c = React__default.useState(), innerValue = _c[0], setInnerValue = _c[1];
    React__default.useEffect(function () {
        setInnerValue(value);
    }, [value]);
    var onChangeCheckbox = function (value) { return function (event) {
        if (typeof onChange === 'function') {
            onChange(event);
        }
        setInnerValue(value);
    }; };
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixCls + "-radio-group", className) }, { children: React__default.Children.map(children, function (option) {
            var props = option.props;
            // react报受控 非受控组件的错误
            // 不能同时设置defaultChecked和checked 合并 defaultValue 和 value
            var checked = index$1.isEmpty(innerValue)
                ? defaultValue === props.value
                : innerValue === props.value;
            return React__default.cloneElement(option, _tslib.__assign(_tslib.__assign({}, props), { disabled: disabled || props.disabled, checked: checked, onChange: onChangeCheckbox(props.value), prefixCls: prefixCls || props.prefixCls }));
        }) }), void 0));
}

module.exports = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map
