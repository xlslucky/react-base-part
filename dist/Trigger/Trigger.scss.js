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

___$insertStyle(".rbp-trigger-portal {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n}\n\n.rbp-trigger-container {\n  position: absolute;\n}\n\n.rbp-trigger-hidden {\n  display: none;\n}");
//# sourceMappingURL=Trigger.scss.js.map
