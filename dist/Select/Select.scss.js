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

___$insertStyle(".rbp-select-selector {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: var(--height-base);\n  border: 1px solid var(--border-color);\n  cursor: pointer;\n  border-radius: 2px;\n  padding: 4px 10px;\n}\n.rbp-select-selector:hover {\n  border-color: var(--primary);\n}\n\n.rbp-select-selection-wrapper {\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.1), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.rbp-select-selection-wrapper::before {\n  position: absolute;\n  z-index: -9999;\n  opacity: 0;\n  content: \"\";\n  top: -4px;\n  right: -4px;\n  bottom: -4px;\n  left: -4px;\n}\n\n.rbp-select-selection {\n  background-color: #fff;\n  padding: 2px 0;\n  max-height: calc(32px * 8 + 4px);\n  border-radius: 2px;\n  overflow: auto;\n}\n\n.rbp-select-value {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.rbp-select-placeholder {\n  color: var(--text-third);\n  user-select: none;\n}\n\n.rbp-select-arrow-icon {\n  color: var(--text-third);\n}");
//# sourceMappingURL=Select.scss.js.map
