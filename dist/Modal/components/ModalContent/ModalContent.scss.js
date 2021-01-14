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

___$insertStyle(".rbp-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.45);\n}\n\n.rbp-modal-wrap {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  outline: 0;\n  z-index: 1000;\n}\n\n.rbp-modal {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: var(--font-size-base);\n  font-variant: tabular-nums;\n  list-style: none;\n  pointer-events: none;\n  position: relative;\n  top: 100px;\n  width: auto;\n  max-width: calc(100vw - 32px);\n  margin: 0 auto;\n  padding: 0 0 24px;\n}\n\n.rbp-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-radius: 2px;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n  pointer-events: auto;\n}");
//# sourceMappingURL=ModalContent.scss.js.map
