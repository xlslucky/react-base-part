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

___$insertStyle(".rbp-radio-wrapper {\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.rbp-radio-wrapper.rbp-radio-wrapper-disabled {\n  cursor: not-allowed;\n}\n.rbp-radio-wrapper.rbp-radio-wrapper-disabled .rbp-radio,\n.rbp-radio-wrapper.rbp-radio-wrapper-disabled .rbp-radio-input {\n  cursor: not-allowed;\n}\n.rbp-radio-wrapper.rbp-radio-wrapper-disabled .rbp-radio-input + .rbp-radio-inner {\n  border-color: var(--border-color);\n  background-color: var(--background-disabled);\n}\n.rbp-radio-wrapper.rbp-radio-wrapper-disabled .rbp-radio-input + .rbp-radio-inner::before {\n  background-color: var(--border-color);\n}\n\n.rbp-radio {\n  position: relative;\n  cursor: pointer;\n}\n\n.rbp-radio-input {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  cursor: pointer;\n}\n.rbp-radio-input:checked + .rbp-radio-inner {\n  border-color: var(--primary-color);\n}\n.rbp-radio-input:checked + .rbp-radio-inner::before {\n  display: block;\n}\n\n.rbp-radio-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 50%;\n}\n.rbp-radio-inner::before {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: none;\n  content: \"\";\n  width: 9px;\n  height: 9px;\n  background-color: var(--primary-color);\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n}\n\n.rbp-radio-content {\n  margin-left: 8px;\n}");
//# sourceMappingURL=Radio.scss.js.map
