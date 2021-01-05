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

var Checkbox$1 = require('./Checkbox.js');
var CheckboxGroup = require('./CheckboxGroup.js');

var Checkbox = Checkbox$1;
Checkbox.Group = CheckboxGroup;

module.exports = Checkbox;
//# sourceMappingURL=index.js.map
