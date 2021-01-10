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

var React = require('react');
var React__default = _interopDefault(React);
var index$1 = require('../utils/index.js');

function useCssVariable(dom) {
    if (dom === void 0) { dom = document.body; }
    // 获取css变量
    var getPropertyValue = React__default.useCallback(function (key) {
        return dom.style.getPropertyValue(key).trim();
    }, [dom.style]);
    // 设置css变量
    var setPropertyValue = React__default.useCallback(function (key, value) {
        var newKey = key;
        if (key.indexOf('--') === -1) {
            newKey = "--" + key;
        }
        dom.style.setProperty(newKey, value);
    }, [dom.style]);
    // 删除css变量
    var removeProperty = React__default.useCallback(function (key) {
        dom.style.removeProperty(key);
    }, [dom.style]);
    // 批量获取css变量
    var getPropertiesValue = React__default.useCallback(function (keys) {
        var data = {};
        keys.forEach(function (key) {
            var value = getPropertyValue(key);
            if (!index$1.isEmpty(value)) {
                data[key] = value;
            }
        });
        return data;
    }, [getPropertyValue]);
    // 批量设置css变量
    var setPropertiesValue = React__default.useCallback(function (data) {
        Object.keys(data).forEach(function (key) {
            var value = data[key];
            if (!index$1.isEmpty(value)) {
                setPropertyValue(key, data[key]);
            }
        });
    }, [setPropertyValue]);
    return {
        getPropertyValue: getPropertyValue,
        setPropertyValue: setPropertyValue,
        removeProperty: removeProperty,
        getPropertiesValue: getPropertiesValue,
        setPropertiesValue: setPropertiesValue,
    };
}

module.exports = useCssVariable;
//# sourceMappingURL=useCssVariable.js.map
