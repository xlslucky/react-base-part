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

___$insertStyle(".rbp-spin-loading {\n  position: relative;\n}\n\n.rbp-spin-mask {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.rbp-spin-loading-content {\n  width: 100%;\n  text-align: center;\n}\n\n.rbp-pagination {\n  text-align: center;\n  padding: 32px 0;\n}\n.rbp-pagination.rbp-pagination-size-sm {\n  padding: 16px 0;\n}");
//# sourceMappingURL=Spin.scss.js.map
