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
    'border-color': '#d9d9d9',
    'background-disabled': '#f5f5f5',
    'text-strong': '#000',
    'text-second': 'rgba(0, 0, 0, .75)',
    'text-third': 'rgba(0, 0, 0, .5)',
    'height-base': '32px',
    'height-lg': '40px',
    'height-sm': '24px',
    'font-size-base': '14px',
    'font-size-lg': '16px',
    'font-size-sm': '12px',
};

module.exports = variables;
//# sourceMappingURL=variables.js.map
