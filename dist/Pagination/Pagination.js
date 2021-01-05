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
require('./Pagination.scss.js');

var Pagination = function (_a) {
    var _b, _c;
    var disabled = _a.disabled, className = _a.className, pageNo = _a.pageNo, pageSize = _a.pageSize, total = _a.total, onChange = _a.onChange, _d = _a.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d;
    var totalPage = Math.ceil(total / pageSize);
    if (totalPage <= 1) {
        return null;
    }
    function handleLeftBtn() {
        if (pageNo > 1 && typeof onChange === 'function' && !disabled) {
            onChange(pageNo - 1, pageSize);
        }
    }
    function handleRightBtn() {
        if (pageNo < totalPage && typeof onChange === 'function' && !disabled) {
            onChange(pageNo + 1, pageSize);
        }
    }
    function handleItem(num) {
        if (pageNo !== num && typeof onChange === 'function' && !disabled) {
            onChange(num, pageSize);
        }
    }
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(prefixCls + "-pagination", className) }, { children: [jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixCls + "-pagination-item", (_b = {},
                    _b[prefixCls + "-pagination-item-not-allowed"] = pageNo === 1,
                    _b[prefixCls + "-pagination-item-disabled"] = disabled,
                    _b)), onClick: handleLeftBtn }, { children: '<' }), void 0),
            new Array(totalPage).fill(undefined).map(function (_, i) {
                var _a;
                var num = i + 1;
                return (jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixCls + "-pagination-item", (_a = {},
                        _a[prefixCls + "-pagination-item-active"] = pageNo === num,
                        _a[prefixCls + "-pagination-item-disabled"] = disabled,
                        _a)), onClick: function () { return handleItem(num); } }, { children: num }), i));
            }),
            jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixCls + "-pagination-item", (_c = {},
                    _c[prefixCls + "-pagination-item-not-allowed"] = pageNo === totalPage,
                    _c[prefixCls + "-pagination-item-disabled"] = disabled,
                    _c)), onClick: handleRightBtn }, { children: '>' }), void 0)] }), void 0));
};

module.exports = Pagination;
//# sourceMappingURL=Pagination.js.map
