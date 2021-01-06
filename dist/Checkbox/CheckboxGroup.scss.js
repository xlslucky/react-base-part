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

___$insertStyle(".rbp-checkbox-group > .rbp-checkbox-wrapper {\n  margin-right: 10px;\n}\n.rbp-checkbox-group > .rbp-checkbox-wrapper:last-child {\n  margin-right: 0;\n}");
//# sourceMappingURL=CheckboxGroup.scss.js.map
