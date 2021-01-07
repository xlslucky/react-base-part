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
var Checkbox$1 = require('../Checkbox/Checkbox.js');
var index$1 = require('../Spin/index.js');
require('./Table.scss.js');
var context = require('./context.js');

// 格式化 columns
var formatColumns = function (columns) {
    return columns.filter(function (item) { return !item.hide; });
};
var SortableItem = function (_a) {
    var item = _a.item, itemIndex = _a.itemIndex;
    var _b = context.useTableContext(), showNo = _b.showNo, columns = _b.columns, _c = _b.onRow, onRow = _c === void 0 ? function () { } : _c, getCount = _b.getCount, countRender = _b.countRender, showCheckbox = _b.showCheckbox, isChecked = _b.isChecked, isDisabled = _b.isDisabled, onChangeCheckbox = _b.onChangeCheckbox;
    var count = getCount(itemIndex);
    return (jsxRuntime.jsxs("tr", _tslib.__assign({}, onRow(item), { children: [showCheckbox && (jsxRuntime.jsx("td", { children: jsxRuntime.jsx(Checkbox$1, { checked: isChecked ? isChecked(item) : false, disabled: isDisabled ? isDisabled(item) : false, onChange: onChangeCheckbox ? onChangeCheckbox(item) : undefined }, void 0) }, void 0)),
            showNo && jsxRuntime.jsx("td", { children: countRender(count, item) }, void 0),
            columns.map(function (col, i) {
                var content = col.dataIndex && item[col.dataIndex];
                content = col.render ? col.render(content, item, itemIndex) : content;
                return (jsxRuntime.jsx("td", _tslib.__assign({ style: { textAlign: col.align || 'left' } }, { children: content }), col.key || col.dataIndex || i));
            })] }), void 0));
};
function Table(props) {
    // 切换分页，要从外部重置checkedList
    var _a = React__default.useState([]), innerCheckedList = _a[0], setInnerCheckedList = _a[1];
    var dataSource = props.dataSource, rowKey = props.rowKey, showNo = props.showNo, pagination = props.pagination, loading = props.loading, _b = props.description, description = _b === void 0 ? '暂无数据' : _b, onRow = props.onRow, className = props.className, _c = props.countRender, countRender = _c === void 0 ? function (count) { return count; } : _c, checkedList = props.checkedList, batch = props.batch, disabledList = props.disabledList, _d = props.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d;
    var columns = props.columns;
    columns = formatColumns(columns);
    React__default.useEffect(function () {
        if (typeof checkedList !== 'undefined' &&
            checkedList.length !== innerCheckedList.length) {
            setInnerCheckedList(checkedList);
        }
    }, [innerCheckedList.length, checkedList]);
    var getCount = React__default.useCallback(function (index) {
        var pageNo = (pagination === null || pagination === void 0 ? void 0 : pagination.pageNo) || 1;
        var count = pageNo && (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize)
            ? (pageNo - 1) * (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) + index + 1
            : index + 1;
        return count;
    }, [pagination]);
    var showCheckbox = React__default.useMemo(function () {
        return batch && !!rowKey;
    }, [batch, rowKey]);
    var countColWidth = React__default.useMemo(function () {
        var paddingLeft = !showCheckbox ? 18 : 8;
        var paddingRight = 8;
        var maxCount = getCount(dataSource.length - 1);
        var num = String(maxCount).length * 10 + paddingLeft + paddingRight;
        if (num < 50) {
            num = 50;
        }
        return num;
    }, [dataSource.length, getCount, showCheckbox]);
    // 全选是否禁用
    var isDisabledAll = React__default.useMemo(function () {
        return dataSource.length - ((disabledList === null || disabledList === void 0 ? void 0 : disabledList.length) || 0) === 0;
    }, [dataSource.length, disabledList === null || disabledList === void 0 ? void 0 : disabledList.length]);
    // 全选是否选中
    var isCheckedAll = React__default.useMemo(function () {
        if (isDisabledAll) {
            return false;
        }
        return (innerCheckedList.length ===
            dataSource.length - ((disabledList === null || disabledList === void 0 ? void 0 : disabledList.length) || 0));
    }, [
        innerCheckedList.length,
        dataSource.length,
        disabledList === null || disabledList === void 0 ? void 0 : disabledList.length,
        isDisabledAll,
    ]);
    // 复选框是否选中
    var isChecked = React__default.useCallback(function (item) {
        if (!rowKey) {
            return false;
        }
        return !!innerCheckedList.find(function (checked) { return checked[rowKey] === item[rowKey]; });
    }, [innerCheckedList, rowKey]);
    // 复选框是否禁用
    var isDisabled = React__default.useCallback(function (item) {
        if (!rowKey || !disabledList) {
            return false;
        }
        return !!disabledList.find(function (key) { return String(key) === String(item[rowKey]); });
    }, [disabledList, rowKey]);
    // 复选框选中
    var onChangeCheckbox = function (item) { return function (_a) {
        var target = _a.target;
        var list = innerCheckedList.filter(function (checked) { return checked[rowKey] !== item[rowKey]; });
        if (target.checked) {
            list = _tslib.__spreadArrays(list, [item]);
        }
        setInnerCheckedList(list);
        if (props.onChangeCheckbox) {
            props.onChangeCheckbox(list);
        }
    }; };
    // 全选
    var onChangeCheckboxAll = function (_a) {
        var target = _a.target;
        var list = [];
        if (target.checked) {
            if (disabledList && rowKey) {
                list = dataSource.filter(function (item) { return !disabledList.map(String).includes(String(item[rowKey])); });
            }
            else {
                list = dataSource;
            }
        }
        setInnerCheckedList(list);
        if (props.onChangeCheckbox) {
            props.onChangeCheckbox(list);
        }
    };
    var renderTable = function () {
        var _a;
        var narrowTable = showNo;
        return (jsxRuntime.jsx(context.default.Provider, _tslib.__assign({ value: {
                countRender: countRender,
                getCount: getCount,
                showNo: showNo,
                columns: columns,
                onRow: onRow,
                showCheckbox: showCheckbox,
                isChecked: isChecked,
                isDisabled: isDisabled,
                onChangeCheckbox: onChangeCheckbox,
            } }, { children: jsxRuntime.jsxs("table", _tslib.__assign({ className: classnames((_a = {}, _a[prefixCls + "-table-narrow"] = narrowTable, _a)) }, { children: [jsxRuntime.jsxs("colgroup", { children: [showCheckbox && jsxRuntime.jsx("col", { width: 50 }, void 0),
                            showNo && jsxRuntime.jsx("col", { width: countColWidth }, void 0),
                            columns.map(function (item, index) { return (jsxRuntime.jsx("col", { width: item.width }, item.key || item.dataIndex || index)); })] }, void 0),
                    jsxRuntime.jsx("thead", { children: jsxRuntime.jsxs("tr", { children: [showCheckbox && (jsxRuntime.jsx("th", { children: jsxRuntime.jsx(Checkbox$1, { disabled: isDisabledAll, checked: isCheckedAll, onChange: onChangeCheckboxAll }, void 0) }, void 0)),
                                showNo && jsxRuntime.jsx("th", {}, void 0),
                                columns.map(function (item, index) { return (jsxRuntime.jsx("th", _tslib.__assign({ style: { textAlign: item.align || 'left' } }, { children: item.title }), item.key || item.dataIndex || index)); })] }, void 0) }, void 0),
                    jsxRuntime.jsx("tbody", { children: dataSource.map(function (item, index) {
                            var key = rowKey ? item[rowKey] : index;
                            return jsxRuntime.jsx(SortableItem, { itemIndex: index, item: item }, key);
                        }) }, void 0)] }), void 0) }), void 0));
    };
    return (jsxRuntime.jsx(index$1, _tslib.__assign({ loading: loading, empty: !dataSource.length, description: description, pagination: pagination }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(prefixCls + "-table-container", className) }, { children: renderTable() }), void 0) }), void 0));
}

module.exports = Table;
//# sourceMappingURL=Table.js.map
