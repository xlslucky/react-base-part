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

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var classnames = _interopDefault(require('classnames'));
var index = require('../../../constants/index.js');
require('./ModalContent.scss.js');
require('../../../style/animation/move-10.scss.js');

function ModalContent(_a) {
    var children = _a.children, onClickMask = _a.onClickMask, maskClosable = _a.maskClosable, _b = _a.width, width = _b === void 0 ? 416 : _b, className = _a.className, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c;
    var prefixClass = prefixCls + "-modal";
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: prefixClass + "-root" }, { children: [jsxRuntime.jsx("div", { className: prefixClass + "-mask" }, void 0),
            jsxRuntime.jsx("div", _tslib.__assign({ className: prefixClass + "-wrap", onClick: maskClosable && typeof onClickMask === 'function'
                    ? onClickMask
                    : undefined }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixClass, className, 'move-up-enter-10'), style: { width: width }, onClick: function (e) { return e.stopPropagation(); } }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: prefixClass + "-content" }, { children: children }), void 0) }), void 0) }), void 0)] }), void 0));
}

module.exports = ModalContent;
//# sourceMappingURL=index.js.map
