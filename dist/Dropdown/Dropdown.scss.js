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

___$insertStyle(".rbp-dropdown {\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.1), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.rbp-dropdown::before {\n  position: absolute;\n  z-index: -9999;\n  opacity: 0.0001;\n  content: \" \";\n}\n.rbp-dropdown::before {\n  top: -4px;\n  right: -4px;\n  bottom: -4px;\n  left: -4px;\n}");
//# sourceMappingURL=Dropdown.scss.js.map
