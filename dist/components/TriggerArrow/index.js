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

var jsxRuntime = require('react/jsx-runtime');
var classnames = _interopDefault(require('classnames'));
var index = require('../../constants/index.js');
var index$1 = require('../Arrow/index.js');
require('./TriggerArrow.scss.js');
var trigger = require('../../utils/trigger.js');

function TriggerArrow(_a) {
    var placement = _a.placement, className = _a.className, _b = _a.prefixCls, prefixCls = _b === void 0 ? index.PREFIX_CLASS : _b;
    return (jsxRuntime.jsx(index$1, { className: classnames(prefixCls + "-trigger-arrow", prefixCls + "-trigger-arrow-" + trigger.PLACEMENT_MAP[placement], className), place: trigger.getArrowPlace(placement) }, void 0));
}

module.exports = TriggerArrow;
//# sourceMappingURL=index.js.map
