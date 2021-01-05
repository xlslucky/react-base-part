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

___$insertStyle(".rbp-tooltip.rbp-tooltip-top-left, .rbp-tooltip.rbp-tooltip-top-center, .rbp-tooltip.rbp-tooltip-top-right {\n  padding-bottom: 8px;\n}\n.rbp-tooltip.rbp-tooltip-right-top, .rbp-tooltip.rbp-tooltip-right-center, .rbp-tooltip.rbp-tooltip-right-bottom {\n  padding-left: 8px;\n}\n.rbp-tooltip.rbp-tooltip-bottom-left, .rbp-tooltip.rbp-tooltip-bottom-center, .rbp-tooltip.rbp-tooltip-bottom-right {\n  padding-top: 8px;\n}\n.rbp-tooltip.rbp-tooltip-left-top, .rbp-tooltip.rbp-tooltip-left-center, .rbp-tooltip.rbp-tooltip-left-bottom {\n  padding-right: 8px;\n}\n\n.rbp-tooltip-content {\n  position: relative;\n  max-width: 250px;\n}\n\n.rbp-tooltip-arrow {\n  color: rgba(0, 0, 0, 0.75);\n  border-width: 3px;\n}\n\n.rbp-tooltip-inner {\n  background-color: rgba(0, 0, 0, 0.75);\n  color: #fff;\n  padding: 4px 10px;\n  border-radius: 2px;\n}");
//# sourceMappingURL=Tooltip.scss.js.map
