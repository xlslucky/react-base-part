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
require('./Tag.scss.js');

var Tag = function (_a) {
    var _b;
    var color = _a.color, children = _a.children, className = _a.className, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c, onClick = _a.onClick, style = _a.style;
    var prefixClass = prefixCls + "-tag";
    var innerStyle = React__default.useMemo(function () {
        if (color && !index.INNER_COLOR.includes(color)) {
            return _tslib.__assign(_tslib.__assign({}, style), { backgroundColor: color });
        }
        return style;
    }, [color, style]);
    return (jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixClass, (_b = {},
            _b[prefixClass + "-color-" + color] = color && index.INNER_COLOR.includes(color),
            _b[prefixClass + "-has-color"] = color && !index.INNER_COLOR.includes(color),
            _b), className), style: innerStyle, onClick: onClick }, { children: children }), void 0));
};

module.exports = Tag;
//# sourceMappingURL=Tag.js.map
