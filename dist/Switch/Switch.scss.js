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

___$insertStyle(".rbp-switch {\n  position: relative;\n  outline: none;\n  border: none;\n  border-radius: 50px;\n  padding: 0;\n  cursor: pointer;\n  background-color: var(--border-color);\n  vertical-align: middle;\n}\n\n.rbp-switch-handle {\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  background-color: #fff;\n  border-radius: 50px;\n  transition: left 0.2s;\n}\n\n.rbp-switch-inner {\n  display: block;\n  color: #fff;\n  font-size: 12px;\n  transition: margin 0.2s;\n  line-height: 1;\n}\n\n.rbp-switch {\n  height: 22px;\n  min-width: 44px;\n}\n.rbp-switch .rbp-switch-handle {\n  width: 18px;\n  height: 18px;\n}\n.rbp-switch.rbp-switch-size-small {\n  height: 16px;\n  min-width: 28px;\n}\n.rbp-switch.rbp-switch-size-small .rbp-switch-handle {\n  width: 12px;\n  height: 12px;\n}\n\n.rbp-switch .rbp-switch-inner {\n  margin: 0 7px 0 25px;\n}\n.rbp-switch.rbp-switch-size-small .rbp-switch-inner {\n  margin: 0 5px 0 16px;\n}\n.rbp-switch.rbp-switch-checked .rbp-switch-inner {\n  margin: 0 25px 0 7px;\n}\n.rbp-switch.rbp-switch-checked.rbp-switch-size-small .rbp-switch-inner {\n  margin: 0 16px 0 5px;\n}\n\n.rbp-switch.rbp-switch-checked {\n  background-color: var(--primary-color);\n}\n.rbp-switch.rbp-switch-checked .rbp-switch-handle {\n  left: calc(100% - 20px);\n}\n.rbp-switch.rbp-switch-checked.rbp-switch-size-small .rbp-switch-handle {\n  left: calc(100% - 14px);\n}\n\n.rbp-switch.rbp-switch-disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}");
//# sourceMappingURL=Switch.scss.js.map
