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

___$insertStyle(".rbp-arrow-icon {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: transparent;\n}\n.rbp-arrow-icon.rbp-arrow-icon-top {\n  border-bottom-color: currentColor;\n}\n.rbp-arrow-icon.rbp-arrow-icon-bottom {\n  border-top-color: currentColor;\n}\n.rbp-arrow-icon.rbp-arrow-icon-left {\n  border-right-color: currentColor;\n}\n.rbp-arrow-icon.rbp-arrow-icon-right {\n  border-left-color: currentColor;\n}");
//# sourceMappingURL=Arrow.scss.js.map
