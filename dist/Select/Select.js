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
require('../components/Icons/components/IconLoading.js');
require('../components/Icons/components/IconCheckCircleFilled.js');
require('../components/Icons/components/IconCloseCircleFilled.js');
require('../components/Icons/components/IconExclamationCircleFilled.js');
require('../components/Icons/components/IconClose.js');
var IconArrowBottom = require('../components/Icons/components/IconArrowBottom.js');
var trigger = require('../utils/trigger.js');
var index$1 = require('../Trigger/index.js');
require('./Select.scss.js');

var Select = function (_a) {
    var value = _a.value, onChange = _a.onChange, className = _a.className, style = _a.style, children = _a.children, placeholder = _a.placeholder, 
    // TODO allowClear
    allowClear = _a.allowClear, 
    // TODO size
    size = _a.size, _b = _a.prefixCls, prefixCls = _b === void 0 ? index.PREFIX_CLASS : _b;
    var _c = trigger.getSlideAnimationClassNames('bottomLeft'), enterClassName = _c[0], leaveClassName = _c[1];
    var _d = React__default.useState(), innerValue = _d[0], setInnerValue = _d[1];
    React__default.useEffect(function () {
        setInnerValue(value);
    }, [value]);
    var selected = React__default.useMemo(function () {
        var active = React__default.Children.toArray(children).find(function (item) { return item.props.value === innerValue; });
        if (active) {
            return active.props.children;
        }
        return innerValue;
    }, [children, innerValue]);
    // function handleClear(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    //   e.stopPropagation()
    //   if (typeof onChange === 'function') {
    //     onChange(undefined)
    //   }
    // }
    var handleItem = function (value) { return function () {
        if (onChange) {
            onChange(value);
        }
        setInnerValue(value);
    }; };
    return (jsxRuntime.jsx(index$1, _tslib.__assign({ trigger: ['click'], placement: "bottomLeft", stretch: "width", enterClassName: enterClassName, leaveClassName: leaveClassName, offset: trigger.getOffsetByPlacement('bottomLeft', 4), popup: jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixCls + "-select-selection", className) }, { children: React__default.Children.map(children, function (option) {
                var _a;
                var props = option.props;
                var checked = innerValue === props.value;
                return React__default.cloneElement(option, _tslib.__assign(_tslib.__assign({}, props), { className: classnames(props.className, (_a = {},
                        _a[prefixCls + "-select-selection-item-active"] = checked,
                        _a)), onClick: handleItem(props.value) }));
            }) }), void 0) }, { children: jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(prefixCls + "-select-selector"), style: style }, { children: [jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-select-value" }, { children: selected || (jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-select-placeholder" }, { children: placeholder }), void 0)) }), void 0),
                jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-select-opts" }, { children: jsxRuntime.jsx(IconArrowBottom, { className: prefixCls + "-select-arrow-icon" }, void 0) }), void 0)] }), void 0) }), void 0));
};

module.exports = Select;
//# sourceMappingURL=Select.js.map
