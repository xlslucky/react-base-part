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

___$insertStyle(".rbp-empty {\n  text-align: center;\n}\n\n.rbp-empty-image {\n  height: 100px;\n  margin-bottom: 10px;\n}\n.rbp-empty-image > img {\n  height: 100%;\n}\n\n.rbp-empty-description {\n  color: var(--text-second);\n}\n\n.rbp-empty-footer {\n  margin-top: 15px;\n}");
//# sourceMappingURL=Empty.scss.js.map
