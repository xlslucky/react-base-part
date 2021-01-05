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

var _tslib = require('../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../constants/index.js');
var index$1 = require('../components/Loading/index.js');
var index$2 = require('../Pagination/index.js');
var index$3 = require('../Empty/index.js');
require('./Spin.scss.js');

var Spin = function (_a) {
    var loading = _a.loading, empty = _a.empty, pagination = _a.pagination, customEmpty = _a.customEmpty, emptyProps = _a.emptyProps, description = _a.description, children = _a.children, customLoading = _a.customLoading, _b = _a.prefixCls, prefixCls = _b === void 0 ? index.PREFIX_CLASS : _b;
    var renderPagination = function () {
        if (empty || !pagination)
            return null;
        return jsxRuntime.jsx(index$2, _tslib.__assign({ prefixCls: prefixCls }, pagination), void 0);
    };
    function renderEmpty() {
        if (customEmpty) {
            return jsxRuntime.jsx(jsxRuntime.Fragment, { children: customEmpty }, void 0);
        }
        return (jsxRuntime.jsx(index$3, _tslib.__assign({ description: description, prefixCls: prefixCls }, emptyProps), void 0));
    }
    function renderLoading() {
        return (jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-spin-loading-content" }, { children: customLoading || jsxRuntime.jsx(index$1.Melody, {}, void 0) }), void 0));
    }
    if (loading) {
        if (empty)
            return renderLoading();
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", _tslib.__assign({ className: prefixCls + "-spin-loading" }, { children: [jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-spin-mask" }, { children: renderLoading() }), void 0), children] }), void 0), renderPagination()] }, void 0));
    }
    if (empty) {
        return renderEmpty();
    }
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [children, renderPagination()] }, void 0));
};

module.exports = Spin;
//# sourceMappingURL=Spin.js.map
