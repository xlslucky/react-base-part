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

___$insertStyle(".rbp-badge {\n  position: relative;\n  display: inline-block;\n}\n\n.rbp-badge-dot {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: var(--danger-color);\n  transform: translate(50%, -50%);\n}\n\n.rbp-badge-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background-color: var(--danger-color);\n  color: #fff;\n  line-height: 1;\n  height: 20px;\n  min-width: 20px;\n  font-size: 12px;\n  border-radius: 20px;\n  padding: 0 6px;\n  transform: translate(50%, -50%);\n}\n.rbp-badge-count.rbp-badge-count-size-small {\n  height: 14px;\n  min-width: 14px;\n  font-size: 12px;\n  border-radius: 14px;\n  padding: 0 4px;\n}\n\n.rbp-badge-status-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n\n.rbp-badge-status-text {\n  vertical-align: middle;\n  margin-left: 7px;\n}\n\n.rbp-badge-status-dot.rbp-badge-status-dot-default {\n  background-color: var(--border-color);\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-success {\n  background-color: var(--success-color);\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-error {\n  background-color: var(--danger-color);\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-processing {\n  background-color: var(--primary-color);\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-warning {\n  background-color: var(--warn-color);\n}\n\n.rbp-badge-status-dot.rbp-badge-status-dot-color-magenta {\n  background-color: #eb2f96;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-red {\n  background-color: #f5222d;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-volcano {\n  background-color: #fa541c;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-orange {\n  background-color: #fa8c16;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-gold {\n  background-color: #faad14;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-lime {\n  background-color: #a0d911;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-green {\n  background-color: #52c41a;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-cyan {\n  background-color: #13c2c2;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-blue {\n  background-color: #1890ff;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-geekblue {\n  background-color: #2f54eb;\n}\n.rbp-badge-status-dot.rbp-badge-status-dot-color-purple {\n  background-color: #722ed1;\n}");
//# sourceMappingURL=Badge.scss.js.map
