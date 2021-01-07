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

function IconArrowRightLine(props) {
    return (jsxRuntime.jsx(BaseIcon, _tslib.__assign({}, props, { children: jsxRuntime.jsx("svg", _tslib.__assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M338.20881346 1007.39640077a36.92970347 36.92970347 0 0 1-56.50244684-47.12230171l4.283846-5.17015889 387.09715544-387.02329568a80.35903515 80.35903515 0 0 0 6.27805001-106.72684367l-6.27805001-6.94278469-387.02329567-387.09715544a36.92970347 36.92970347 0 0 1 47.04844195-56.50244684l5.1701589 4.28384601 387.02329566 387.02329566a154.21844315 154.21844315 0 0 1 8.64155068 208.87440445l-8.64155068 9.30628537-387.02329566 387.02329674z" }, void 0) }), void 0) }), void 0));
}

module.exports = IconArrowRightLine;
//# sourceMappingURL=IconArrowRightLine.js.map
