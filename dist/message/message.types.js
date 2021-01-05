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

(function (MessageType) {
    MessageType["Success"] = "success";
    MessageType["Warn"] = "warn";
    MessageType["Error"] = "error";
    MessageType["Info"] = "info";
})(exports.MessageType || (exports.MessageType = {}));
//# sourceMappingURL=message.types.js.map
