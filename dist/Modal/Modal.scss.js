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

___$insertStyle(".rbp-modal-header {\n  padding: 16px 24px;\n  color: rgba(0, 0, 0, 0.85);\n  background-color: #fff;\n  border-bottom: 1px solid var(--border-color);\n  border-radius: 2px 2px 0 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.rbp-modal-body {\n  padding: 16px 24px;\n}\n\n.rbp-modal-footer {\n  padding: 10px 16px;\n  text-align: right;\n  background: transparent;\n  border-top: 1px solid var(--border-color);\n  border-radius: 0 0 2px 2px;\n}\n\n.rbp-modal-close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: 6px;\n  top: 0;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n}\n.rbp-modal-close-btn .rbp-modal-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  background-color: rgba(0, 0, 0, 0.06);\n  border-radius: 50%;\n}\n.rbp-modal-close-btn .rbp-modal-close .rbp-modal-close-icon {\n  color: #979797;\n  font-size: 10px;\n}\n\n.rbp-modal-opt-btn {\n  padding: 0 22px;\n  margin-left: 12px;\n  height: 34px;\n}");
//# sourceMappingURL=Modal.scss.js.map
