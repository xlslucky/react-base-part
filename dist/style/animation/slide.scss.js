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

___$insertStyle(".slide-up-enter {\n  animation: slideUpIn 0.2s ease-out;\n}\n\n.slide-up-leave {\n  animation: slideUpOut 0.2s ease-out;\n}\n\n.slide-down-enter {\n  animation: slideDownIn 0.2s ease-out;\n}\n\n.slide-down-leave {\n  animation: slideDownOut 0.2s ease-out;\n}\n\n.slide-left-enter {\n  animation: slideLeftIn 0.2s ease-out;\n}\n\n.slide-left-leave {\n  animation: slideLeftOut 0.2s ease-out;\n}\n\n.slide-right-enter {\n  animation: slideRightIn 0.2s ease-out;\n}\n\n.slide-right-leave {\n  animation: slideRightOut 0.2s ease-out;\n}\n\n@keyframes slideUpIn {\n  0% {\n    transform: scaleY(0.8);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n  100% {\n    transform: scaleY(1);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n}\n@keyframes slideUpOut {\n  0% {\n    transform: scaleY(1);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n  100% {\n    transform: scaleY(0.8);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n}\n@keyframes slideDownIn {\n  0% {\n    transform: scaleY(0.8);\n    transform-origin: 100% 100%;\n    opacity: 0;\n  }\n  100% {\n    transform: scaleY(1);\n    transform-origin: 100% 100%;\n    opacity: 1;\n  }\n}\n@keyframes slideDownOut {\n  0% {\n    transform: scaleY(1);\n    transform-origin: 100% 100%;\n    opacity: 1;\n  }\n  100% {\n    transform: scaleY(0.8);\n    transform-origin: 100% 100%;\n    opacity: 0;\n  }\n}\n@keyframes slideLeftIn {\n  0% {\n    transform: scaleX(0.8);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n}\n@keyframes slideLeftOut {\n  0% {\n    transform: scaleX(1);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n  100% {\n    transform: scaleX(0.8);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n}\n@keyframes slideRightIn {\n  0% {\n    transform: scaleX(0.8);\n    transform-origin: 100% 0;\n    opacity: 0;\n  }\n  to {\n    transform: scaleX(1);\n    transform-origin: 100% 0;\n    opacity: 1;\n  }\n}\n@keyframes slideRightOut {\n  0% {\n    transform: scaleX(1);\n    transform-origin: 100% 0;\n    opacity: 1;\n  }\n  100% {\n    transform: scaleX(0.8);\n    transform-origin: 100% 0;\n    opacity: 0;\n  }\n}");
//# sourceMappingURL=slide.scss.js.map
