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
var Trigger = require('../Trigger/Trigger.js');
var trigger = require('../utils/trigger.js');
var index$1 = require('../components/TriggerArrow/index.js');
require('./Tooltip.scss.js');
require('../style/animation/slide.scss.js');

var Tooltip = function (_a) {
    var children = _a.children, _b = _a.placement, placement = _b === void 0 ? 'topCenter' : _b, _c = _a.trigger, trigger$1 = _c === void 0 ? ['hover'] : _c, title = _a.title, getPopupContainer = _a.getPopupContainer, _d = _a.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d;
    var _e = trigger.getSlideAnimationClassNames(placement), enterClassName = _e[0], leaveClassName = _e[1];
    return (jsxRuntime.jsx(Trigger, _tslib.__assign({ getPopupContainer: getPopupContainer, placement: placement, trigger: trigger$1, enterClassName: enterClassName, leaveClassName: leaveClassName, popup: jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixCls + "-tooltip", prefixCls + "-tooltip-" + trigger.PLACEMENT_MAP[placement]) }, { children: jsxRuntime.jsxs("div", _tslib.__assign({ className: prefixCls + "-tooltip-content" }, { children: [jsxRuntime.jsx(index$1, { placement: placement, className: prefixCls + "-tooltip-arrow" }, void 0),
                    jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-tooltip-inner" }, { children: title }), void 0)] }), void 0) }), void 0) }, { children: children }), void 0));
};

module.exports = Tooltip;
//# sourceMappingURL=Tooltip.js.map
