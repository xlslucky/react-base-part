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

var variables = {
    primary: '#13c2c2',
    'primary-light': '#e6fffb',
    danger: '#f5222d',
    'danger-light': '#ffeaea',
    warn: '#fadb14',
    'warn-light': '#fefbeb',
    success: '#52c41a',
    'success-light': '#efffe8',
    'border-color': '#eee',
};

module.exports = variables;
//# sourceMappingURL=variables.js.map
