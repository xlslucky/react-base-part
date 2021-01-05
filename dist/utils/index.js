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

function guid() {
    return Date.now() + "_" + Math.random().toString(32).substr(2, 8);
}
function isEmpty(val) {
    return val === undefined || val === null || val === '';
}

exports.guid = guid;
exports.isEmpty = isEmpty;
//# sourceMappingURL=index.js.map
