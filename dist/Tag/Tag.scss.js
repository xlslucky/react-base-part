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

___$insertStyle(".rbp-tag {\n  display: inline-block;\n  padding: 0 7px;\n  background-color: var(--background-color);\n  border: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  line-height: 20px;\n  border-radius: 2px;\n  margin-right: 8px;\n}\n\n.rbp-tag-has-color {\n  border-color: transparent;\n  color: #fff;\n}\n\n.rbp-tag-color-magenta {\n  color: #eb2f96;\n  border-color: #eb2f96;\n  background-color: #fff0f6;\n}\n\n.rbp-tag-color-red {\n  color: #f5222d;\n  border-color: #f5222d;\n  background-color: #fff1f0;\n}\n\n.rbp-tag-color-volcano {\n  color: #fa541c;\n  border-color: #fa541c;\n  background-color: #fff2e8;\n}\n\n.rbp-tag-color-orange {\n  color: #fa8c16;\n  border-color: #fa8c16;\n  background-color: #fff7e6;\n}\n\n.rbp-tag-color-gold {\n  color: #faad14;\n  border-color: #faad14;\n  background-color: #fffbe6;\n}\n\n.rbp-tag-color-lime {\n  color: #a0d911;\n  border-color: #a0d911;\n  background-color: #fcffe6;\n}\n\n.rbp-tag-color-green {\n  color: #52c41a;\n  border-color: #52c41a;\n  background-color: #f6ffed;\n}\n\n.rbp-tag-color-cyan {\n  color: #13c2c2;\n  border-color: #13c2c2;\n  background-color: #e6fffb;\n}\n\n.rbp-tag-color-blue {\n  color: #1890ff;\n  border-color: #1890ff;\n  background-color: #e6f7ff;\n}\n\n.rbp-tag-color-geekblue {\n  color: #2f54eb;\n  border-color: #2f54eb;\n  background-color: #f0f5ff;\n}\n\n.rbp-tag-color-purple {\n  color: #722ed1;\n  border-color: #722ed1;\n  background-color: #f9f0ff;\n}");
//# sourceMappingURL=Tag.scss.js.map
