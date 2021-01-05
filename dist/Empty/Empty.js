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

var _tslib = require('../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var classnames = _interopDefault(require('classnames'));
var index = require('../constants/index.js');
require('./Empty.scss.js');

var Empty = function (_a) {
    var description = _a.description, _b = _a.image, image = _b === void 0 ? '//static.linghemedia.com.cn/assets/applet/applet-empty.png' : _b, imageStyle = _a.imageStyle, className = _a.className, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c, children = _a.children;
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(prefixCls + "-empty", className) }, { children: [jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-empty-image", style: imageStyle }, { children: typeof image === 'string' ? jsxRuntime.jsx("img", { src: image, alt: "" }, void 0) : image }), void 0),
            jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-empty-description" }, { children: description }), void 0),
            children ? (jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-empty-footer" }, { children: children }), void 0)) : null] }), void 0));
};

module.exports = Empty;
//# sourceMappingURL=Empty.js.map
