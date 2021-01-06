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

var Radio$1 = require('./Radio.js');
var RadioGroup = require('./RadioGroup.js');

var Radio = Radio$1;
Radio.Group = RadioGroup;

module.exports = Radio;
//# sourceMappingURL=index.js.map
