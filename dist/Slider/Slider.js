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
require('./Slider.scss.js');
var index$1 = require('../hooks/useSlider/index.js');

var Slider = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.step, step = _b === void 0 ? 1 : _b, _c = _a.min, min = _c === void 0 ? 0 : _c, _d = _a.max, max = _d === void 0 ? 100 : _d, smooth = _a.smooth, renderHandle = _a.renderHandle, className = _a.className, _e = _a.prefixCls, prefixCls = _e === void 0 ? index.PREFIX_CLASS : _e;
    var prefixClass = prefixCls + "-slider";
    var railRef = React__default.useRef(null);
    var handleRef = React__default.useRef(null);
    var _f = React__default.useState(0), innerValue = _f[0], setInnerValue = _f[1];
    React__default.useEffect(function () {
        setInnerValue(value || 0);
    }, [value]);
    function onSuccess(value) {
        setInnerValue(value);
        if (typeof onChange === 'function') {
            onChange(value);
        }
    }
    var _g = index$1({
        railRef: railRef,
        handleRef: handleRef,
        step: step,
        min: min,
        max: max,
        smooth: smooth,
        value: innerValue,
        onSuccess: onSuccess,
    }), onMouseDown = _g.onMouseDown, onTouchStart = _g.onTouchStart, onClick = _g.onClick, left = _g.left, nextValue = _g.nextValue;
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(prefixClass, className) }, { children: [jsxRuntime.jsx("div", { onClick: onClick, ref: railRef, className: prefixClass + "-rail" }, void 0),
            jsxRuntime.jsx("div", { onClick: onClick, className: prefixClass + "-track", style: { width: left } }, void 0),
            typeof renderHandle === 'function' ? (React__default.cloneElement(renderHandle({ left: left, value: nextValue }), {
                ref: handleRef,
                onMouseDown: onMouseDown,
                onTouchStart: onTouchStart,
            })) : (jsxRuntime.jsx("div", { style: { left: left }, ref: handleRef, className: classnames(prefixClass + "-handle-base", prefixClass + "-handle"), onMouseDown: onMouseDown, onTouchStart: onTouchStart }, void 0))] }), void 0));
};

module.exports = Slider;
//# sourceMappingURL=Slider.js.map
