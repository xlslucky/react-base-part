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
var index$2 = require('./message/index.js');
var index$3 = require('./Tooltip/index.js');
var index$4 = require('./Modal/index.js');
var index$5 = require('./Dropdown/index.js');
var index$6 = require('./Input/index.js');
var index$2$1 = require('./Pagination/index.js');
var index$7 = require('./Checkbox/index.js');
var index$3$1 = require('./Empty/index.js');
var index$8 = require('./Spin/index.js');
var index$9 = require('./Table/index.js');
var index$a = require('./ConfigProvider/index.js');



exports.Button = index$1;
exports.message = index$2;
exports.Tooltip = index$3;
exports.Modal = index$4;
exports.Dropdown = index$5;
exports.Input = index$6;
exports.Pagination = index$2$1;
exports.Checkbox = index$7;
exports.Empty = index$3$1;
exports.Spin = index$8;
exports.Table = index$9;
exports.ConfigProvider = index$a;
//# sourceMappingURL=index.js.map
