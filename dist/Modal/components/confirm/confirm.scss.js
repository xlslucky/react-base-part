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

___$insertStyle(".rbp-modal-confirm {\n  padding: 32px 32px 24px;\n}\n\n.rbp-modal-confirm-body .rbp-modal-confirm-body-header {\n  display: flex;\n}\n.rbp-modal-confirm-body .rbp-modal-confirm-exclamation-icon {\n  color: var(--primary);\n  font-size: 22px;\n}\n.rbp-modal-confirm-body .rbp-modal-confirm-body-title {\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.4;\n}\n.rbp-modal-confirm-body .rbp-modal-confirm-body-content {\n  margin: 8px 0 0 32px;\n}\n\n.rbp-modal-confirm-btns {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\n.rbp-modal-confirm-btn {\n  padding: 0 25px;\n}\n.rbp-modal-confirm-btn + .rbp-modal-confirm-btn {\n  margin-left: 10px;\n}");
//# sourceMappingURL=confirm.scss.js.map
