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
var useCssVariable = require('./useCssVariable.js');
var variables = require('../constants/variables.js');

// 样式优先级 ConfigProvider variables > document.body variables > 内置 variables
function useSetVariables(variables$1) {
    var _a = useCssVariable(), getPropertiesValue = _a.getPropertiesValue, setPropertiesValue = _a.setPropertiesValue;
    React__default.useEffect(function () {
        var prevVariables = getPropertiesValue(Object.keys(variables));
        var newVariables = _tslib.__assign(_tslib.__assign(_tslib.__assign({}, variables), prevVariables), variables$1);
        setPropertiesValue(newVariables);
    }, [getPropertiesValue, setPropertiesValue, variables$1]);
}

module.exports = useSetVariables;
//# sourceMappingURL=useSetVariables.js.map
