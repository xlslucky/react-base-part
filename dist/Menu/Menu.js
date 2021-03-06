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
var index = require('../constants/index.js');
require('./Menu.scss.js');

var Menu = function (_a) {
    var children = _a.children, _b = _a.defaultSelectedKeys, defaultSelectedKeys = _b === void 0 ? [] : _b, onClick = _a.onClick, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c;
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-menu" }, { children: React__default.Children.map(children, function (option) {
            if (!option) {
                return null;
            }
            var props = option.props;
            var itemKey = option.key;
            return React__default.cloneElement(option, _tslib.__assign(_tslib.__assign({}, props), { onClick: function (event) {
                    if (typeof props.onClick === 'function') {
                        props.onClick(event);
                    }
                    if (typeof onClick === 'function') {
                        onClick({ item: option, key: itemKey });
                    }
                }, prefixCls: prefixCls, active: defaultSelectedKeys === null || defaultSelectedKeys === void 0 ? void 0 : defaultSelectedKeys.includes(itemKey) }));
        }) }), void 0));
};

module.exports = Menu;
//# sourceMappingURL=Menu.js.map
