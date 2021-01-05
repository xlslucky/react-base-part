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

function IconClose(props) {
    return (jsxRuntime.jsx(BaseIcon, _tslib.__assign({}, props, { children: jsxRuntime.jsxs("svg", _tslib.__assign({ viewBox: "0 0 1024 1024" }, { children: [jsxRuntime.jsx("path", { d: "M-29.87235908 136.85759737m83.36497822-83.36497823l0 0q83.36497821-83.36497821 166.72995645 0l750.28480527 750.28480527q83.36497821 83.36497821 0 166.72995645l0 0q-83.36497821 83.36497821-166.72995645 0l-750.28480527-750.28480527q-83.36497821-83.36497821 0-166.72995645Z" }, void 0),
                jsxRuntime.jsx("path", { d: "M887.14240263-29.87235908m83.36497823 83.36497822l0 0q83.36497821 83.36497821 0 166.72995645l-750.28480527 750.28480527q-83.36497821 83.36497821-166.72995645 0l0 0q-83.36497821-83.36497821 0-166.72995645l750.28480527-750.28480527q83.36497821-83.36497821 166.72995645 0Z" }, void 0)] }), void 0) }), void 0));
}

module.exports = IconClose;
//# sourceMappingURL=IconClose.js.map
