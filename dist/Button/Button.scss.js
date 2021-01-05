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

___$insertStyle(".rbp-btn {\n  display: inline-block;\n  text-align: center;\n  border: none;\n  outline: none;\n  height: 32px;\n  font-size: 14px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  border-radius: 2px;\n  white-space: nowrap;\n  padding: 4px 15px;\n  line-height: 1.5;\n}\n.rbp-btn > span {\n  display: inline-block;\n}\n.rbp-btn > a {\n  text-decoration: none;\n  color: inherit;\n}\n.rbp-btn.rbp-btn-theme-default {\n  border-color: #f0f0f0;\n  background-color: #f0f0f0;\n  color: #000;\n}\n.rbp-btn.rbp-btn-theme-default .loading-icon {\n  color: #000;\n}\n.rbp-btn.rbp-btn-theme-primary {\n  border-color: var(--primary);\n  background-color: var(--primary);\n  color: #fff;\n}\n.rbp-btn.rbp-btn-theme-primary .loading-icon {\n  color: #fff;\n}\n.rbp-btn.rbp-btn-theme-ghost {\n  border-color: var(--primary);\n  background-color: transparent;\n  color: var(--primary);\n}\n.rbp-btn.rbp-btn-theme-ghost .loading-icon {\n  color: var(--primary);\n}\n.rbp-btn.rbp-btn-theme-danger {\n  border-color: var(--danger);\n  background-color: var(--danger);\n  color: #fff;\n}\n.rbp-btn.rbp-btn-theme-danger .loading-icon {\n  color: #fff;\n}\n\n.rbp-btn.rbp-btn-circle {\n  border-radius: 32px;\n}\n.rbp-btn.rbp-btn-block {\n  display: flex;\n  width: 100%;\n}\n\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled], .rbp-btn.rbp-btn-loading {\n  position: relative;\n}\n.rbp-btn.rbp-btn-disabled::before, .rbp-btn[disabled]::before, .rbp-btn.rbp-btn-loading::before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  z-index: 1;\n  opacity: 0.35;\n  background-color: #fff;\n  pointer-events: none;\n}\n.rbp-btn.rbp-btn-disabled, .rbp-btn[disabled] {\n  cursor: not-allowed;\n}\n.rbp-btn.rbp-btn-loading {\n  cursor: progress;\n}\n.rbp-btn .rbp-btn-loading-icon {\n  display: inline-block;\n  margin-right: 8px;\n  background-size: cover;\n  font-size: 18px;\n}");
//# sourceMappingURL=Button.scss.js.map
