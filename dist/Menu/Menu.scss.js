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

___$insertStyle(".rbp-menu {\n  background-color: #fff;\n  padding: 2px 0;\n  font-size: var(--font-size-base);\n}");
//# sourceMappingURL=Menu.scss.js.map
