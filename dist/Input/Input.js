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
var Input_types = require('./Input.types.js');
require('./Input.scss.js');

var Input = function (_a) {
    var _b;
    var _c = _a.bordered, bordered = _c === void 0 ? true : _c, 
    // TODO 禁用
    // disabled,
    className = _a.className, addonAfter = _a.addonAfter, addonBefore = _a.addonBefore, _d = _a.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d, _e = _a.type, type = _e === void 0 ? 'text' : _e, onPressEnter = _a.onPressEnter, restProps = _tslib.__rest(_a, ["bordered", "className", "addonAfter", "addonBefore", "prefixCls", "type", "onPressEnter"]);
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(prefixCls + "-input-wrapper", (_b = {}, _b[prefixCls + "-input-border"] = bordered, _b), className) }, { children: [addonBefore, jsxRuntime.jsx("input", _tslib.__assign({ onKeyDown: function (event) {
                    if (event.key === Input_types.UiEventsKey.Enter) {
                        if (typeof onPressEnter === 'function') {
                            onPressEnter(event);
                        }
                    }
                }, className: prefixCls + "-input", type: type }, restProps), void 0), addonAfter] }), void 0));
};

module.exports = Input;
//# sourceMappingURL=Input.js.map
