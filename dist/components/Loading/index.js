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

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var classnames = _interopDefault(require('classnames'));
var index = require('../../constants/index.js');
var IconLoading = require('../Icons/components/IconLoading.js');
require('../Icons/components/IconCheckCircleFilled.js');
require('../Icons/components/IconCloseCircleFilled.js');
require('../Icons/components/IconExclamationCircleFilled.js');
require('../Icons/components/IconClose.js');
require('../Icons/components/IconArrowBottom.js');
require('./Loading.scss.js');

var Melody = function () { return (jsxRuntime.jsxs("div", _tslib.__assign({ className: index.PREFIX_CLASS + "-loading-melody" }, { children: [jsxRuntime.jsx("span", {}, void 0),
        jsxRuntime.jsx("span", {}, void 0),
        jsxRuntime.jsx("span", {}, void 0),
        jsxRuntime.jsx("span", {}, void 0),
        jsxRuntime.jsx("span", {}, void 0),
        jsxRuntime.jsx("span", {}, void 0),
        jsxRuntime.jsx("span", {}, void 0)] }), void 0)); };
var Ellipsis = function () { return (jsxRuntime.jsx("div", _tslib.__assign({ className: index.PREFIX_CLASS + "-loading-ellipsis" }, { children: jsxRuntime.jsx("span", {}, void 0) }), void 0)); };
var Loading = function (_a) {
    var className = _a.className;
    return (jsxRuntime.jsx(IconLoading, { className: classnames(index.PREFIX_CLASS + "-loading-icon", className) }, void 0));
};
Loading.Ellipsis = Ellipsis;
Loading.Melody = Melody;

module.exports = Loading;
//# sourceMappingURL=index.js.map
