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

___$insertStyle(".rbp-slider {\n  position: relative;\n  height: 14px;\n}\n\n.rbp-slider-rail,\n.rbp-slider-track {\n  position: absolute;\n  height: 4px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.rbp-slider-rail {\n  width: 100%;\n  background-color: var(--background-color);\n}\n\n.rbp-slider-track {\n  background-color: var(--primary-light-color);\n}\n\n.rbp-slider-handle-base {\n  position: absolute;\n  transform: translateX(-50%);\n}\n\n.rbp-slider-handle {\n  top: -5px;\n  width: 14px;\n  height: 14px;\n  border-radius: 14px;\n  background-color: var(--primary-color);\n  cursor: pointer;\n  user-select: none;\n}");
//# sourceMappingURL=Slider.scss.js.map
