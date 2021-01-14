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
var React = require('react');
var React__default = _interopDefault(React);
var classnames = _interopDefault(require('classnames'));
var index = require('../constants/index.js');
var trigger = require('../utils/trigger.js');
require('../style/animation/slide.scss.js');
var index$1 = require('../Trigger/index.js');
require('./Dropdown.scss.js');

var Dropdown = function (_a) {
    var disabled = _a.disabled, children = _a.children, overlay = _a.overlay, _b = _a.trigger, trigger$1 = _b === void 0 ? ['hover'] : _b, _c = _a.placement, placement = _c === void 0 ? 'bottomLeft' : _c, getPopupContainer = _a.getPopupContainer, _d = _a.clickPopupClose, clickPopupClose = _d === void 0 ? true : _d, _e = _a.prefixCls, prefixCls = _e === void 0 ? index.PREFIX_CLASS : _e;
    var _f = trigger.getSlideAnimationClassNames(placement), enterClassName = _f[0], leaveClassName = _f[1];
    return (jsxRuntime.jsx(index$1, _tslib.__assign({ prefixCls: prefixCls, clickPopupClose: clickPopupClose, popup: jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixCls + "-dropdown") }, { children: overlay }), void 0), placement: placement, trigger: trigger$1, enterClassName: enterClassName, leaveClassName: leaveClassName, getPopupContainer: getPopupContainer, offset: trigger.getOffsetByPlacement(placement, 4), stretch: "minWidth" }, { children: React__default.cloneElement(children, { disabled: disabled }) }), void 0));
};

module.exports = Dropdown;
//# sourceMappingURL=Dropdown.js.map
