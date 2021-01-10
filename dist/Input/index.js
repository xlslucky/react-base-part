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

var Input$1 = require('./Input.js');
var Textarea = require('./Textarea.js');

var Input = Input$1;
Input.Textarea = Textarea;

module.exports = Input;
//# sourceMappingURL=index.js.map
