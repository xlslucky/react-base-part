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

___$insertStyle(".rbp-loading-icon > svg {\n  animation: loading 1s linear infinite;\n}\n\n.rbp-loading-melody {\n  height: 16px;\n  display: flex;\n  align-items: flex-end;\n  list-style: none;\n  padding: 0;\n  margin: 0 10px 0 0;\n  overflow: hidden;\n}\n.rbp-loading-melody > span {\n  float: left;\n  width: 4px;\n  height: 0;\n  background-color: var(--primary);\n  animation: load-1 0.7s infinite;\n}\n.rbp-loading-melody > span + span {\n  margin-left: 2px;\n}\n.rbp-loading-melody > span:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.rbp-loading-melody > span:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.rbp-loading-melody > span:nth-child(4) {\n  animation-delay: 0.3s;\n}\n.rbp-loading-melody > span:nth-child(5) {\n  animation-delay: 0.4s;\n}\n.rbp-loading-melody > span:nth-child(6) {\n  animation-delay: 0.5s;\n}\n.rbp-loading-melody > span:nth-child(7) {\n  animation-delay: 0.6s;\n}\n\n@keyframes load-1 {\n  0% {\n    height: 2px;\n  }\n  50% {\n    height: 16px;\n  }\n  100% {\n    height: 2px;\n  }\n}\n.rbp-loading-ellipsis {\n  position: relative;\n  width: 56px;\n  height: 13px;\n}\n.rbp-loading-ellipsis::before, .rbp-loading-ellipsis::after, .rbp-loading-ellipsis > span::before, .rbp-loading-ellipsis > span::after {\n  content: \"\";\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background-color: var(--primary);\n  animation-duration: 0.6s;\n  animation-iteration-count: infinite;\n}\n.rbp-loading-ellipsis::before {\n  position: absolute;\n  left: 0;\n  animation-name: load-2-1;\n}\n.rbp-loading-ellipsis::after {\n  position: absolute;\n  right: 0;\n  animation-name: load-2-3;\n}\n.rbp-loading-ellipsis > span {\n  position: relative;\n}\n.rbp-loading-ellipsis > span::before {\n  position: absolute;\n  animation-name: load-2-2;\n}\n.rbp-loading-ellipsis > span::after {\n  position: absolute;\n  left: 21px;\n  animation-name: load-2-2;\n}\n\n@keyframes load-2-1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes load-2-2 {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(21px);\n  }\n}\n@keyframes load-2-3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes loading {\n  0% {\n    transform: rotateZ(0);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}");
//# sourceMappingURL=Loading.scss.js.map
