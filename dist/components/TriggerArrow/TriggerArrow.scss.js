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

___$insertStyle(".rbp-trigger-arrow {\n  position: absolute;\n}\n\n.rbp-trigger-arrow-top-left,\n.rbp-trigger-arrow-bottom-left {\n  left: 5px;\n}\n\n.rbp-trigger-arrow-top-right,\n.rbp-trigger-arrow-bottom-right {\n  right: 5px;\n}\n\n.rbp-trigger-arrow-left-top,\n.rbp-trigger-arrow-right-top {\n  top: 5px;\n}\n\n.rbp-trigger-arrow-left-bottom,\n.rbp-trigger-arrow-right-bottom {\n  bottom: 5px;\n}\n\n.rbp-trigger-arrow-top-left,\n.rbp-trigger-arrow-top-center,\n.rbp-trigger-arrow-top-right {\n  bottom: 0;\n}\n\n.rbp-trigger-arrow-top-left {\n  transform: translateY(100%);\n}\n\n.rbp-trigger-arrow-top-center {\n  left: 50%;\n  transform: translateX(-50%) translateY(100%);\n}\n\n.rbp-trigger-arrow-top-right {\n  transform: translateY(100%);\n}\n\n.rbp-trigger-arrow-bottom-left,\n.rbp-trigger-arrow-bottom-center,\n.rbp-trigger-arrow-bottom-right {\n  top: 0;\n}\n\n.rbp-trigger-arrow-bottom-left {\n  transform: translateY(-100%);\n}\n\n.rbp-trigger-arrow-bottom-center {\n  left: 50%;\n  transform: translateX(-50%) translateY(-100%);\n}\n\n.rbp-trigger-arrow-bottom-right {\n  transform: translateY(-100%);\n}\n\n.rbp-trigger-arrow-left-top,\n.rbp-trigger-arrow-left-center,\n.rbp-trigger-arrow-left-bottom {\n  right: 0;\n}\n\n.rbp-trigger-arrow-left-top {\n  transform: translateX(100%);\n}\n\n.rbp-trigger-arrow-left-center {\n  top: 50%;\n  transform: translateX(100%) translateY(-50%);\n}\n\n.rbp-trigger-arrow-left-bottom {\n  transform: translateX(100%);\n}\n\n.rbp-trigger-arrow-right-top,\n.rbp-trigger-arrow-right-center,\n.rbp-trigger-arrow-right-bottom {\n  left: 0;\n}\n\n.rbp-trigger-arrow-right-top {\n  transform: translateX(-100%);\n}\n\n.rbp-trigger-arrow-right-center {\n  top: 50%;\n  transform: translateX(-100%) translateY(-50%);\n}\n\n.rbp-trigger-arrow-right-bottom {\n  transform: translateX(-100%);\n}");
//# sourceMappingURL=TriggerArrow.scss.js.map
