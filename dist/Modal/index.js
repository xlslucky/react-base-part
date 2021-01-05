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

var Modal$1 = require('./Modal.js');
var index = require('./components/confirm/index.js');

var Modal = Modal$1;
Modal.confirm = index;

module.exports = Modal;
//# sourceMappingURL=index.js.map
