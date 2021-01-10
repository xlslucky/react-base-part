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

var Menu$1 = require('./Menu.js');
var MenuItem = require('./MenuItem.js');

var Menu = Menu$1;
Menu.Item = MenuItem;

module.exports = Menu;
//# sourceMappingURL=index.js.map
