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

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var BaseIcon = require('../BaseIcon.js');

function IconArrowLeftLine(props) {
    return (jsxRuntime.jsx(BaseIcon, _tslib.__assign({}, props, { children: jsxRuntime.jsx("svg", _tslib.__assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M683.07569925 13.67750133a36.35267685 36.35267685 0 0 1 55.61959611 46.38601575l-4.21691091 5.08937516-381.04876238 380.97605669a79.10342523 79.10342523 0 0 0-6.17995548 105.05923673l6.17995548 6.83430368 380.97605667 381.04876238a36.35267685 36.35267685 0 0 1-46.31331004 55.61959611l-5.08937517-4.21691091-380.97605667-380.97605667a151.80877998 151.80877998 0 0 1-8.50652645-205.61074188l8.50652645-9.16087466 380.97605667-380.97605773z" }, void 0) }), void 0) }), void 0));
}

module.exports = IconArrowLeftLine;
//# sourceMappingURL=IconArrowLeftLine.js.map
