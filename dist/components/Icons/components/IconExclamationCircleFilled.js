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

function IconExclamationCircleFilled(props) {
    return (jsxRuntime.jsx(BaseIcon, _tslib.__assign({}, props, { children: jsxRuntime.jsx("svg", _tslib.__assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M512 8c278.36307647 0 504 225.63692353 504 504s-225.63692353 504-504 504S8 790.36307647 8 512 233.63692353 8 512 8z m0 736.61538431a38.76923039 38.76923039 0 1 0 0 77.53846177 38.76923039 38.76923039 0 0 0 0-77.53846177z m0-542.76923039a38.76923039 38.76923039 0 0 0-38.76923039 38.76923039v387.69230785a38.76923039 38.76923039 0 0 0 77.53846078 0V240.61538431a38.76923039 38.76923039 0 0 0-38.76923039-38.76923039z" }, void 0) }), void 0) }), void 0));
}

module.exports = IconExclamationCircleFilled;
//# sourceMappingURL=IconExclamationCircleFilled.js.map
