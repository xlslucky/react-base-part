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

function IconCloseCircleFilled(props) {
    return (jsxRuntime.jsx(BaseIcon, _tslib.__assign({}, props, { children: jsxRuntime.jsx("svg", _tslib.__assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M512 8c278.36307647 0 504 225.63692353 504 504s-225.63692353 504-504 504S8 790.36307647 8 512 233.63692353 8 512 8zM347.50215392 292.68246177a38.76923039 38.76923039 0 0 0-54.81969215 54.81969215L457.18030784 512l-164.49784607 164.49784608a38.76923039 38.76923039 0 0 0-3.21784608 51.17538431l3.21784608 3.64430784a38.76923039 38.76923039 0 0 0 54.81969215 0L512 566.81969216l164.49784608 164.49784607a38.76923039 38.76923039 0 0 0 51.17538431 3.21784608l3.64430784-3.21784608a38.76923039 38.76923039 0 0 0 0-54.81969215L566.81969216 512l164.49784607-164.49784608a38.76923039 38.76923039 0 0 0 3.21784608-51.17538431l-3.21784608-3.64430784a38.76923039 38.76923039 0 0 0-54.81969215 0L512 457.18030784z" }, void 0) }), void 0) }), void 0));
}

module.exports = IconCloseCircleFilled;
//# sourceMappingURL=IconCloseCircleFilled.js.map
