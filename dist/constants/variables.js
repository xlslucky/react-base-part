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
    'primary-color': '#13c2c2',
    'primary-light-color': '#e6fffb',
    'danger-color': '#f5222d',
    'danger-light-color': '#ffeaea',
    'warn-color': '#fadb14',
    'warn-light-color': '#fefbeb',
    'success-color': '#52c41a',
    'success-light-color': '#efffe8',
    'border-color': '#d9d9d9',
    'background-color': '#fafafa',
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
    'rate-star-color': '#000',
    'rate-star-selected-color': '#FCBF39',
};

module.exports = variables;
//# sourceMappingURL=variables.js.map
