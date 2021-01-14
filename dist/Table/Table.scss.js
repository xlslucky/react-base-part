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

___$insertStyle(".word-break, .rbp-table-container tbody tr {\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.rbp-table-container {\n  flex: 1;\n  font-size: var(--font-size-base);\n}\n.rbp-table-container table {\n  width: 100%;\n  text-align: left;\n  border-collapse: collapse;\n}\n.rbp-table-container table.rbp-table-narrow tr th:first-child,\n.rbp-table-container table.rbp-table-narrow tr td:first-child {\n  padding-left: 16px;\n}\n.rbp-table-container table tr th,\n.rbp-table-container table tr td {\n  padding: 5px 8px;\n}\n.rbp-table-container table tr th:first-child,\n.rbp-table-container table tr td:first-child {\n  padding-left: 30px;\n}\n.rbp-table-container table tr th:last-child,\n.rbp-table-container table tr td:last-child {\n  padding-right: 30px;\n}\n.rbp-table-container thead tr,\n.rbp-table-container tbody tr {\n  height: 46px;\n}\n.rbp-table-container thead tr {\n  white-space: nowrap;\n  border-bottom: 1px solid var(--border-color);\n}\n.rbp-table-container tbody tr {\n  color: var(--text-second);\n}\n.rbp-table-container tbody tr:nth-child(2n) {\n  background-color: var(--primary-light-color);\n}");
//# sourceMappingURL=Table.scss.js.map
