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

___$insertStyle(".rbp-radio-group > .rbp-radio-wrapper {\n  margin-right: 10px;\n}\n.rbp-radio-group > .rbp-radio-wrapper:last-child {\n  margin-right: 0;\n}");
//# sourceMappingURL=RadioGroup.scss.js.map
