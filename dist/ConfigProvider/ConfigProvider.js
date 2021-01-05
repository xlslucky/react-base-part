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
var useSetVarables = require('../hooks/useSetVarables.js');

var ConfigContext = React__default.createContext({});
var ConfigProvider = function (_a) {
    var children = _a.children, variables = _a.variables;
    useSetVarables(variables);
    return jsxRuntime.jsx(ConfigContext.Provider, _tslib.__assign({ value: {} }, { children: children }), void 0);
};

module.exports = ConfigProvider;
//# sourceMappingURL=ConfigProvider.js.map
