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

___$insertStyle(".rbp-select-selection-item {\n  flex: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 32px;\n  padding: 5px 12px;\n  line-height: 22px;\n  cursor: pointer;\n}\n.rbp-select-selection-item.rbp-select-selection-item-active {\n  background-color: var(--primary-light-color);\n}\n.rbp-select-selection-item.rbp-select-selection-item-active:hover {\n  background-color: var(--primary-light-color);\n}\n.rbp-select-selection-item:hover {\n  background-color: #f5f5f5;\n}");
//# sourceMappingURL=Option.scss.js.map
