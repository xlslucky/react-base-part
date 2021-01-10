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
var index$5 = require('./Input/index.js');
var index$2$1 = require('./Pagination/index.js');
var index$6 = require('./Checkbox/index.js');
var index$7 = require('./Radio/index.js');
var index$3$1 = require('./Empty/index.js');
var index$1$1 = require('./Spin/index.js');
var index$8 = require('./Table/index.js');
var index$9 = require('./Select/index.js');
var index$a = require('./Menu/index.js');
var index$b = require('./ConfigProvider/index.js');



exports.Button = index$1;
exports.message = index;
exports.Tooltip = index$2;
exports.Modal = index$3;
exports.Dropdown = index$4;
exports.Input = index$5;
exports.Pagination = index$2$1;
exports.Checkbox = index$6;
exports.Radio = index$7;
exports.Empty = index$3$1;
exports.Spin = index$1$1;
exports.Table = index$8;
exports.Select = index$9;
exports.Menu = index$a;
exports.ConfigProvider = index$b;
//# sourceMappingURL=index.js.map
