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
var React = require('react');
var React__default = _interopDefault(React);
var useCssVarable = require('./useCssVarable.js');
var variables = require('../constants/variables.js');

// 样式优先级 ConfigProvider variables > document.body variables > 内置 variables
function useSetVarables(variables$1) {
    var _a = useCssVarable(), getPropertysValue = _a.getPropertysValue, setPropertysValue = _a.setPropertysValue;
    React__default.useEffect(function () {
        var prevVariables = getPropertysValue(Object.keys(variables));
        var newVariables = _tslib.__assign(_tslib.__assign(_tslib.__assign({}, variables), prevVariables), variables$1);
        setPropertysValue(newVariables);
    }, [getPropertysValue, setPropertysValue, variables$1]);
}

module.exports = useSetVarables;
//# sourceMappingURL=useSetVarables.js.map
