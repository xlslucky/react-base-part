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

function IconCheckCircleFilled(props) {
    return (jsxRuntime.jsx(BaseIcon, _tslib.__assign({}, props, { children: jsxRuntime.jsx("svg", _tslib.__assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M512 8c278.36307647 0 504 225.63692353 504 504s-225.63692353 504-504 504S8 790.36307647 8 512 233.63692353 8 512 8z m288.75323039 321.51323039a38.76923039 38.76923039 0 0 0-54.85846078 0l-312.984 312.984-164.88553922-164.84676862-3.64430686-3.25661569a38.76923039 38.76923039 0 0 0-51.1753853 58.07630784l192.2953853 192.29538431 3.64430686 3.21784608a38.76923039 38.76923039 0 0 0 51.1753853-3.21784608l340.39384608-340.39384607 3.2566147-3.68307647a38.76923039 38.76923039 0 0 0-3.21784608-51.1753853z" }, void 0) }), void 0) }), void 0));
}

module.exports = IconCheckCircleFilled;
//# sourceMappingURL=IconCheckCircleFilled.js.map
