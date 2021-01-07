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

___$insertStyle(".rbp-pagination {\n  font-size: var(--font-size-base);\n}\n.rbp-pagination.rbp-pagination-size-sm {\n  font-size: var(--font-size-sm);\n}\n.rbp-pagination.rbp-pagination-size-sm .rbp-pagination-item,\n.rbp-pagination.rbp-pagination-size-sm .rbp-pagination-item-jump {\n  min-width: var(--height-sm);\n  height: var(--height-sm);\n}\n\n.rbp-pagination-item,\n.rbp-pagination-item-jump {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  min-width: var(--height-base);\n  height: var(--height-base);\n  vertical-align: middle;\n  margin-right: 8px;\n  cursor: pointer;\n}\n\n.rbp-pagination-item {\n  border: 1px solid var(--border-color);\n  border-radius: 2px;\n}\n.rbp-pagination-item:last-child {\n  margin-right: 0;\n}\n.rbp-pagination-item:not(.rbp-pagination-item-disabled):not(.rbp-pagination-item-not-allowed):hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  font-weight: 500;\n}\n.rbp-pagination-item.rbp-pagination-item-active {\n  border-color: var(--primary);\n  color: var(--primary);\n  font-weight: 500;\n}\n.rbp-pagination-item.rbp-pagination-item-not-allowed {\n  color: var(--border-color);\n  cursor: not-allowed;\n}\n.rbp-pagination-item.rbp-pagination-item-disabled {\n  background-color: var(--background-disabled);\n  border-color: var(--border-color);\n  color: var(--border-color);\n  cursor: not-allowed;\n}\n.rbp-pagination-item.rbp-pagination-item-disabled.rbp-pagination-item-active {\n  background-color: var(--border-color);\n  color: #fff;\n}\n\n.rbp-pagination-item-jump {\n  font-weight: 500;\n  position: relative;\n}\n.rbp-pagination-item-jump:hover .rbp-pagination-item-more {\n  display: none;\n}\n.rbp-pagination-item-jump:hover .rbp-pagination-item-jump-icon {\n  display: block;\n}\n.rbp-pagination-item-jump .rbp-pagination-item-jump-icon {\n  color: var(--primary);\n  display: none;\n}\n.rbp-pagination-item-jump .rbp-pagination-item-more {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--border-color);\n}");
//# sourceMappingURL=Pagination.scss.js.map
