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

___$insertStyle(".rbp-btn {\n  display: inline-block;\n  text-align: center;\n  outline: none;\n  border: 1px solid transparent;\n  cursor: pointer;\n  border-radius: 2px;\n  white-space: nowrap;\n  line-height: 1.5;\n}\n.rbp-btn > span {\n  display: inline-block;\n}\n.rbp-btn > a {\n  text-decoration: none;\n  color: inherit;\n}\n.rbp-btn.rbp-btn-theme-default {\n  border-color: #f0f0f0;\n  background-color: #f0f0f0;\n  color: #000;\n}\n.rbp-btn.rbp-btn-theme-default .loading-icon {\n  color: #000;\n}\n.rbp-btn.rbp-btn-theme-primary {\n  border-color: var(--primary);\n  background-color: var(--primary);\n  color: #fff;\n}\n.rbp-btn.rbp-btn-theme-primary .loading-icon {\n  color: #fff;\n}\n.rbp-btn.rbp-btn-theme-ghost {\n  border-color: var(--primary);\n  background-color: transparent;\n  color: var(--primary);\n}\n.rbp-btn.rbp-btn-theme-ghost .loading-icon {\n  color: var(--primary);\n}\n.rbp-btn.rbp-btn-theme-danger {\n  border-color: var(--danger);\n  background-color: var(--danger);\n  color: #fff;\n}\n.rbp-btn.rbp-btn-theme-danger .loading-icon {\n  color: #fff;\n}\n\n.rbp-btn {\n  height: var(--height-base);\n  font-size: var(--font-size-base);\n  padding: 4px 15px;\n}\n.rbp-btn.rbp-btn-size-lg {\n  height: var(--height-lg);\n  font-size: var(--font-size-lg);\n  padding: 6px 15px;\n}\n.rbp-btn.rbp-btn-size-lg.rbp-btn-circle {\n  border-radius: var(--height-lg);\n}\n.rbp-btn.rbp-btn-size-lg .rbp-btn-loading-icon {\n  margin-right: 10px;\n  font-size: 20px;\n}\n.rbp-btn.rbp-btn-size-sm {\n  height: var(--height-sm);\n  font-size: var(--font-size-sm);\n  padding: 0 7px;\n}\n.rbp-btn.rbp-btn-size-sm.rbp-btn-circle {\n  border-radius: var(--height-sm);\n}\n.rbp-btn.rbp-btn-size-sm .rbp-btn-loading-icon {\n  margin-right: 6px;\n  font-size: 12px;\n}\n\n.rbp-btn.rbp-btn-circle {\n  border-radius: var(--height-base);\n}\n.rbp-btn.rbp-btn-block {\n  display: flex;\n  width: 100%;\n}\n\n.rbp-btn.rbp-btn-loading {\n  position: relative;\n}\n.rbp-btn.rbp-btn-loading::before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  z-index: 1;\n  opacity: 0.35;\n  background-color: #fff;\n  pointer-events: none;\n}\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled] {\n  background-color: var(--background-disabled);\n  color: var(--border-color);\n  border-color: var(--border-color);\n}\n.rbp-btn.rbp-btn-loading {\n  cursor: progress;\n}\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled] {\n  cursor: not-allowed;\n}\n.rbp-btn .rbp-btn-loading-icon {\n  display: inline-block;\n  background-size: cover;\n  margin-right: 8px;\n  font-size: 18px;\n}");
//# sourceMappingURL=Button.scss.js.map
