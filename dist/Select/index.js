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

var Select$1 = require('./Select.js');
var Option = require('./Option.js');

var Select = Select$1;
Select.Option = Option;

module.exports = Select;
//# sourceMappingURL=index.js.map
