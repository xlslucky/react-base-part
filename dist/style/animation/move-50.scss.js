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

___$insertStyle(".move-up-enter-50 {\n  animation: moveUpIn 0.2s ease-out;\n}\n\n.move-up-leave-50 {\n  animation: moveUpOut 0.2s ease-out;\n}\n\n.move-down-enter-50 {\n  animation: moveDownIn 0.2s ease-out;\n}\n\n.move-down-leave-50 {\n  animation: moveDownOut 0.2s ease-out;\n}\n\n.move-left-enter-50 {\n  animation: moveLeftIn 0.2s ease-out;\n}\n\n.move-left-leave-50 {\n  animation: moveLeftOut 0.2s ease-out;\n}\n\n.move-right-enter-50 {\n  animation: moveRightIn 0.2s ease-out;\n}\n\n.move-right-leave-50 {\n  animation: moveRightOut 0.2s ease-out;\n}\n\n@keyframes moveDownIn {\n  0% {\n    transform: translateY(50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n}\n@keyframes moveDownOut {\n  0% {\n    transform: translateY(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n}\n@keyframes moveLeftIn {\n  0% {\n    transform: translateX(-50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n}\n@keyframes moveLeftOut {\n  0% {\n    transform: translateX(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n}\n@keyframes moveRightIn {\n  0% {\n    transform: translateX(50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n}\n@keyframes moveRightOut {\n  0% {\n    transform: translateX(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n}\n@keyframes moveUpIn {\n  0% {\n    transform: translateY(-50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n}\n@keyframes moveUpOut {\n  0% {\n    transform: translateY(0);\n    transform-origin: 0 0;\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50%);\n    transform-origin: 0 0;\n    opacity: 0;\n  }\n}");
//# sourceMappingURL=move-50.scss.js.map
