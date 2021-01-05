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

Object.defineProperty(exports, '__esModule', { value: true });

(function (UiEventsKey) {
    UiEventsKey["ArrowUp"] = "ArrowUp";
    UiEventsKey["ArrowDown"] = "ArrowDown";
    UiEventsKey["ArrowLeft"] = "ArrowLeft";
    UiEventsKey["ArrowRight"] = "ArrowRight";
    UiEventsKey["Enter"] = "Enter";
    UiEventsKey["Escape"] = "Escape";
})(exports.UiEventsKey || (exports.UiEventsKey = {}));
//# sourceMappingURL=Input.types.js.map
