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

___$insertStyle(".rbp-pagination-item {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 32px;\n  height: 32px;\n  border: 1px solid var(--border-color);\n  border-radius: 2px;\n  cursor: pointer;\n  margin-right: 8px;\n}\n.rbp-pagination-item:last-child {\n  margin-right: 0;\n}\n.rbp-pagination-item:not(.rbp-pagination-item-disabled):not(.rbp-pagination-item-not-allowed):hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  font-weight: 500;\n}\n.rbp-pagination-item.rbp-pagination-item-active {\n  border-color: var(--primary);\n  color: var(--primary);\n  font-weight: 500;\n}\n.rbp-pagination-item.rbp-pagination-item-not-allowed {\n  color: var(--border-color);\n  cursor: not-allowed;\n}\n.rbp-pagination-item.rbp-pagination-item-disabled {\n  background-color: var(--background-disabled);\n  border-color: var(--border-color);\n  color: var(--border-color);\n  cursor: not-allowed;\n}\n.rbp-pagination-item.rbp-pagination-item-disabled.rbp-pagination-item-active {\n  background-color: var(--border-color);\n  color: #fff;\n}");
//# sourceMappingURL=Pagination.scss.js.map
