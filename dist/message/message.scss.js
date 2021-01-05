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

___$insertStyle(".rbp-message-container {\n  position: fixed;\n  left: 0;\n  top: 8px;\n  z-index: 1001;\n  font-size: 14px;\n  width: 100%;\n  pointer-events: none;\n}\n\n.rbp-message-notice {\n  padding: 8px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.rbp-message-notice-content {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 22px;\n  background: #fff;\n  border-radius: 1px;\n  pointer-events: all;\n}\n.rbp-message-notice-content .rbp-message-icon {\n  margin-right: 12px;\n  font-size: 22px;\n}\n.rbp-message-notice-content.rbp-message-info {\n  background-color: var(--primary-light);\n  border: 1px solid var(--primary);\n}\n.rbp-message-notice-content.rbp-message-info .rbp-message-icon {\n  color: var(--primary);\n}\n.rbp-message-notice-content.rbp-message-success {\n  background-color: var(--success-light);\n  border: 1px solid var(--success);\n}\n.rbp-message-notice-content.rbp-message-success .rbp-message-icon {\n  color: var(--success);\n}\n.rbp-message-notice-content.rbp-message-error {\n  background-color: var(--danger-light);\n  border: 1px solid var(--danger);\n}\n.rbp-message-notice-content.rbp-message-error .rbp-message-icon {\n  color: var(--danger);\n}\n.rbp-message-notice-content.rbp-message-warn {\n  background-color: var(--warn-light);\n  border: 1px solid var(--warn);\n}\n.rbp-message-notice-content.rbp-message-warn .rbp-message-icon {\n  color: var(--warn);\n}\n.rbp-message-notice-content .rbp-message-content {\n  text-align: left;\n}");
//# sourceMappingURL=message.scss.js.map
