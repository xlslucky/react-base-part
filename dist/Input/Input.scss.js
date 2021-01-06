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

___$insertStyle(".rbp-input-wrapper {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.rbp-input-wrapper.rbp-input-border {\n  border: 1px solid var(--border-color);\n}\n.rbp-input-wrapper.rbp-input-border:focus-within {\n  border: 1px solid var(--primary);\n}\n\n.rbp-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  font-size: inherit;\n  font-family: inherit;\n  padding: 0;\n}\n\n.rbp-input-wrapper {\n  height: var(--height-base);\n  font-size: var(--font-size-base);\n  padding: 4px 10px;\n}\n.rbp-input-wrapper.rbp-input-size-lg {\n  height: var(--height-lg);\n  font-size: var(--font-size-lg);\n  padding: 6px 10px;\n}\n.rbp-input-wrapper.rbp-input-size-sm {\n  padding: 0 7px;\n  height: var(--height-sm);\n  font-size: var(--font-size-sm);\n}\n\n.rbp-input-wrapper .rbp-input-prefix {\n  margin-right: 4px;\n}\n.rbp-input-wrapper .rbp-input-suffix {\n  margin-left: 4px;\n}");
//# sourceMappingURL=Input.scss.js.map
