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
require('./Rate.scss.js');

var Rate = function (_a) {
    var allowHalf = _a.allowHalf, _b = _a.character, character = _b === void 0 ? '❤' : _b, activeCharacter = _a.activeCharacter, _c = _a.count, count = _c === void 0 ? 5 : _c, value = _a.value, onChange = _a.onChange, className = _a.className, style = _a.style, _d = _a.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d;
    var prefixClass = prefixCls + "-rate";
    var _e = React__default.useState(), innerValue = _e[0], setInnerValue = _e[1];
    var _f = React__default.useState(), hoverValue = _f[0], setHoverValue = _f[1];
    React__default.useEffect(function () {
        setInnerValue(value);
    }, [value]);
    var onClick = React__default.useCallback(function (itemValue) {
        setInnerValue(itemValue);
        if (typeof onChange === 'function') {
            onChange(itemValue);
        }
    }, [onChange]);
    var onMouseEnter = function (itemValue) { return function () {
        setHoverValue(itemValue);
    }; };
    function onMouseLeave() {
        setHoverValue(undefined);
    }
    var isActive = React__default.useCallback(function (val) {
        var v = hoverValue || innerValue;
        return Boolean(v && v >= val);
    }, [hoverValue, innerValue]);
    var renderStar = React__default.useCallback(function (index, itemValue) {
        if (isActive(itemValue) && activeCharacter) {
            return typeof activeCharacter === 'function'
                ? activeCharacter(index)
                : activeCharacter;
        }
        return typeof character === 'function' ? character(index) : character;
    }, [activeCharacter, character, isActive]);
    var renderItem = React__default.useCallback(function (index) {
        var halfValue = index + 0.5;
        var fullValue = index + 1;
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [allowHalf ? (jsxRuntime.jsx("div", _tslib.__assign({ className: prefixClass + "-star-first", onMouseEnter: onMouseEnter(halfValue), onClick: function () { return onClick(halfValue); } }, { children: renderStar(index, halfValue) }), void 0)) : null,
                jsxRuntime.jsx("div", _tslib.__assign({ className: prefixClass + "-star-second", onMouseEnter: onMouseEnter(fullValue), onClick: function () { return onClick(fullValue); } }, { children: renderStar(index, fullValue) }), void 0)] }, void 0));
    }, [allowHalf, onClick, prefixClass, renderStar]);
    var getStarClassName = React__default.useCallback(function (index) {
        var v = hoverValue || innerValue;
        if (!v) {
            return;
        }
        if (v >= index + 1) {
            return prefixClass + "-star-full";
        }
        if (v > index && v < index + 1) {
            return prefixClass + "-star-half";
        }
    }, [hoverValue, innerValue, prefixClass]);
    return (jsxRuntime.jsx("div", _tslib.__assign({ style: style, onMouseLeave: onMouseLeave, className: classnames(prefixClass, className) }, { children: new Array(count).fill(undefined).map(function (_, index) {
            return (jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixClass + "-star", getStarClassName(index)) }, { children: renderItem(index) }), index));
        }) }), void 0));
};

module.exports = Rate;
//# sourceMappingURL=Rate.js.map
