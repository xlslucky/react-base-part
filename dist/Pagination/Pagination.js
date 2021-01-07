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
require('../components/Icons/components/IconLoading.js');
require('../components/Icons/components/IconCheckCircleFilled.js');
require('../components/Icons/components/IconCloseCircleFilled.js');
require('../components/Icons/components/IconExclamationCircleFilled.js');
require('../components/Icons/components/IconClose.js');
require('../components/Icons/components/IconArrowBottom.js');
var IconArrowLeftLine = require('../components/Icons/components/IconArrowLeftLine.js');
var IconArrowRightLine = require('../components/Icons/components/IconArrowRightLine.js');
var IconDoubleLeft = require('../components/Icons/components/IconDoubleLeft.js');
var IconDoubleRight = require('../components/Icons/components/IconDoubleRight.js');
require('./Pagination.scss.js');
var useBasePage = require('./useBasePage.js');

function BasePagination(_a) {
    var _b, _c, _d;
    var prefixCls = _a.prefixCls, className = _a.className, disabled = _a.disabled, size = _a.size, totalPage = _a.totalPage, pageNo = _a.pageNo, handleLeftBtn = _a.handleLeftBtn, handleRightBtn = _a.handleRightBtn, onChangeItem = _a.onChangeItem;
    var data = useBasePage(pageNo, totalPage);
    var hasLeft = data.hasLeft, centerStartNo = data.centerStartNo, centerEndNo = data.centerEndNo, hasRight = data.hasRight;
    function handleLeftMore() {
        var newPageNo = pageNo - 5;
        if (newPageNo < 1) {
            newPageNo = 1;
        }
        onChangeItem(newPageNo);
    }
    function handleRightMore() {
        var newPageNo = pageNo + 5;
        if (newPageNo > totalPage) {
            newPageNo = totalPage;
        }
        onChangeItem(newPageNo);
    }
    function renderItem(num) {
        var _a;
        return (jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixCls + "-pagination-item", (_a = {},
                _a[prefixCls + "-pagination-item-active"] = pageNo === num,
                _a[prefixCls + "-pagination-item-disabled"] = disabled,
                _a)), onClick: function () { return onChangeItem(num); } }, { children: num }), num));
    }
    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(prefixCls + "-pagination", (_b = {}, _b[prefixCls + "-pagination-size-sm"] = size === 'small', _b), className) }, { children: [jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixCls + "-pagination-item", (_c = {},
                    _c[prefixCls + "-pagination-item-not-allowed"] = pageNo === 1,
                    _c[prefixCls + "-pagination-item-disabled"] = disabled,
                    _c)), onClick: handleLeftBtn }, { children: jsxRuntime.jsx(IconArrowLeftLine, {}, void 0) }), void 0), hasLeft ? renderItem(1) : null, hasLeft ? (jsxRuntime.jsxs("span", _tslib.__assign({ onClick: handleLeftMore, className: prefixCls + "-pagination-item-jump" }, { children: [jsxRuntime.jsx(IconDoubleLeft, { className: prefixCls + "-pagination-item-jump-icon" }, void 0),
                    jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-pagination-item-more" }, { children: "\u00B7\u00B7\u00B7" }), void 0)] }), void 0)) : null,
            new Array(centerEndNo - centerStartNo + 1)
                .fill(undefined)
                .map(function (_, i) {
                var num = centerStartNo + i;
                return renderItem(num);
            }),
            hasRight ? (jsxRuntime.jsxs("span", _tslib.__assign({ onClick: handleRightMore, className: prefixCls + "-pagination-item-jump" }, { children: [jsxRuntime.jsx(IconDoubleRight, { className: prefixCls + "-pagination-item-jump-icon" }, void 0),
                    jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-pagination-item-more" }, { children: "\u00B7\u00B7\u00B7" }), void 0)] }), void 0)) : null, hasRight ? renderItem(totalPage) : null, jsxRuntime.jsx("span", _tslib.__assign({ className: classnames(prefixCls + "-pagination-item", (_d = {},
                    _d[prefixCls + "-pagination-item-not-allowed"] = pageNo === totalPage,
                    _d[prefixCls + "-pagination-item-disabled"] = disabled,
                    _d)), onClick: handleRightBtn }, { children: jsxRuntime.jsx(IconArrowRightLine, {}, void 0) }), void 0)] }), void 0));
}
var Pagination = function (_a) {
    var disabled = _a.disabled, className = _a.className, pageNo = _a.pageNo, pageSize = _a.pageSize, total = _a.total, onChange = _a.onChange, _b = _a.size, size = _b === void 0 ? 'default' : _b, _c = _a.prefixCls, prefixCls = _c === void 0 ? index.PREFIX_CLASS : _c;
    var _d = React__default.useState(pageNo), innerPageNo = _d[0], setInnerPageNo = _d[1];
    var _e = React__default.useState(pageSize), innerPageSize = _e[0], setInnerPageSize = _e[1];
    React__default.useEffect(function () {
        setInnerPageNo(pageNo);
    }, [pageNo]);
    React__default.useEffect(function () {
        setInnerPageSize(pageSize);
    }, [pageSize]);
    function updateData(data) {
        if (data.pageNo) {
            setInnerPageNo(data.pageNo);
        }
        if (data.pageSize) {
            setInnerPageSize(data.pageSize);
        }
        if (typeof onChange === 'function') {
            onChange(data.pageNo || innerPageNo, data.pageSize || innerPageSize);
        }
    }
    var totalPage = Math.ceil(total / innerPageSize);
    if (totalPage <= 1) {
        return null;
    }
    function handleLeftBtn() {
        if (innerPageNo > 1 && !disabled) {
            updateData({
                pageNo: innerPageNo - 1,
            });
        }
    }
    function handleRightBtn() {
        if (innerPageNo < totalPage && !disabled) {
            updateData({
                pageNo: innerPageNo + 1,
            });
        }
    }
    function onChangeItem(num) {
        if (innerPageNo !== num && !disabled) {
            updateData({
                pageNo: num,
            });
        }
    }
    return (jsxRuntime.jsx(BasePagination, { prefixCls: prefixCls, className: className, disabled: disabled, size: size, totalPage: totalPage, pageNo: innerPageNo, handleLeftBtn: handleLeftBtn, handleRightBtn: handleRightBtn, onChangeItem: onChangeItem }, void 0));
};

module.exports = Pagination;
//# sourceMappingURL=Pagination.js.map
