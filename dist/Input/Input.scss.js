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

___$insertStyle(".rbp-input-wrapper {\n  display: flex;\n  align-items: center;\n  padding: 4px 10px;\n}\n.rbp-input-wrapper.rbp-input-border {\n  border: 1px solid var(--border-color);\n}\n.rbp-input-wrapper.rbp-input-border:focus-within {\n  border: 1px solid var(--primary);\n}\n\n.rbp-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  font-size: inherit;\n  font-family: inherit;\n  padding: 0;\n}");
//# sourceMappingURL=Input.scss.js.map
