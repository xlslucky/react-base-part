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

___$insertStyle(".rbp-input-textarea {\n  border: none;\n  outline: none;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  font-size: inherit;\n  font-family: inherit;\n  padding: 0;\n  resize: vertical;\n}\n.rbp-input-textarea.rbp-input-textarea-border {\n  border: 1px solid var(--border-color);\n}\n.rbp-input-textarea.rbp-input-textarea-border:focus-within {\n  border: 1px solid var(--primary);\n}\n\n.rbp-input-textarea {\n  min-height: var(--height-base);\n  font-size: var(--font-size-base);\n  padding: 4px 10px;\n}\n.rbp-input-textarea.rbp-input-textarea-size-lg {\n  min-height: var(--height-lg);\n  font-size: var(--font-size-lg);\n  padding: 6px 10px;\n}\n.rbp-input-textarea.rbp-input-textarea-size-sm {\n  padding: 0 7px;\n  min-height: var(--height-sm);\n  font-size: var(--font-size-sm);\n}");
//# sourceMappingURL=Textarea.scss.js.map
