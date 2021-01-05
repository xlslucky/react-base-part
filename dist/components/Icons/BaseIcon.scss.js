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

___$insertStyle(".rbp-icon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  flex-shrink: 0;\n  vertical-align: middle;\n}\n.rbp-icon.default-fill svg {\n  fill: currentColor;\n}\n.rbp-icon svg {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n}");
//# sourceMappingURL=BaseIcon.scss.js.map
