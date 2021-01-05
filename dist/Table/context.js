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

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var TableContext = React__default.createContext({
    columns: [],
    getCount: function (index) { return index + 1; },
    countRender: function (count) { return count; },
});
function useTableContext() {
    return React__default.useContext(TableContext);
}

exports.default = TableContext;
exports.useTableContext = useTableContext;
//# sourceMappingURL=context.js.map
