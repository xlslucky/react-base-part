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

function IconArrowBottom(props) {
    return (jsxRuntime.jsx(BaseIcon, _tslib.__assign({}, props, { children: jsxRuntime.jsx("svg", _tslib.__assign({ viewBox: "0 0 1024 1024" }, { children: jsxRuntime.jsx("path", { d: "M20.15552197 346.29365552l422.46464626 498.28917191a90.94811865 90.94811865 0 0 0 138.75966354 0L1003.84447803 346.29365552a57.16706985 57.16706985 0 0 0-43.60217276-94.14366855h-896.48461054a57.16706985 57.16706985 0 0 0-43.60217276 94.14366855z" }, void 0) }), void 0) }), void 0));
}

module.exports = IconArrowBottom;
//# sourceMappingURL=IconArrowBottom.js.map
