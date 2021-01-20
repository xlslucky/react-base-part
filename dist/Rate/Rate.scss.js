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

___$insertStyle(".rbp-rate {\n  display: inline-block;\n  font-size: 20px;\n  line-height: unset;\n}\n\n.rbp-rate-star {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  margin-right: 6px;\n  color: var(--rate-star-color);\n}\n\n.rbp-rate-star-full .rbp-rate-star-second {\n  color: var(--rate-star-selected-color);\n}\n\n.rbp-rate-star-half .rbp-rate-star-first {\n  opacity: 1;\n  color: var(--rate-star-selected-color);\n}\n\n.rbp-rate-star-first {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 0;\n}");
//# sourceMappingURL=Rate.scss.js.map
