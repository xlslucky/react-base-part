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

___$insertStyle(".rbp-checkbox-wrapper {\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.rbp-checkbox-wrapper.rbp-checkbox-wrapper-disabled {\n  cursor: not-allowed;\n}\n.rbp-checkbox-wrapper.rbp-checkbox-wrapper-disabled .rbp-checkbox,\n.rbp-checkbox-wrapper.rbp-checkbox-wrapper-disabled .rbp-checkbox-input {\n  cursor: not-allowed;\n}\n.rbp-checkbox-wrapper.rbp-checkbox-wrapper-disabled .rbp-checkbox-input + .rbp-checkbox-inner {\n  border-color: var(--border-color);\n  background-color: var(--background-disabled);\n}\n.rbp-checkbox-wrapper.rbp-checkbox-wrapper-disabled .rbp-checkbox-input + .rbp-checkbox-inner::before {\n  border-color: var(--border-color);\n}\n\n.rbp-checkbox {\n  position: relative;\n  cursor: pointer;\n}\n\n.rbp-checkbox-input {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  opacity: 0;\n  cursor: pointer;\n}\n.rbp-checkbox-input:checked + .rbp-checkbox-inner {\n  border-color: var(--primary-color);\n  background-color: var(--primary-color);\n}\n.rbp-checkbox-input:checked + .rbp-checkbox-inner::before {\n  display: block;\n  border-color: #fff;\n}\n\n.rbp-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 2px;\n}\n.rbp-checkbox-inner::before {\n  display: none;\n  position: absolute;\n  top: 1px;\n  left: 5px;\n  content: \"\";\n  width: 5px;\n  height: 9px;\n  border: 2px solid transparent;\n  border-top: 0;\n  border-left: 0;\n  transform: rotateZ(45deg);\n}\n\n.rbp-checkbox-content {\n  margin-left: 8px;\n}");
//# sourceMappingURL=Checkbox.scss.js.map
