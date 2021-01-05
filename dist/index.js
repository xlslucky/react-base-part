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

var index$1 = require('./Button/index.js');
var index = require('./message/index.js');
var index$2 = require('./Tooltip/index.js');
var index$3 = require('./Modal/index.js');
var index$4 = require('./Dropdown/index.js');
var index$5 = require('./ConfigProvider/index.js');



exports.Button = index$1;
exports.message = index;
exports.Tooltip = index$2;
exports.Modal = index$3;
exports.Dropdown = index$4;
exports.ConfigProvider = index$5;
//# sourceMappingURL=index.js.map
