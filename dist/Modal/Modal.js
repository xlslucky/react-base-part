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
var IconClose = require('../components/Icons/components/IconClose.js');
require('../components/Icons/components/IconArrowBottom.js');
require('../components/Icons/components/IconArrowLeftLine.js');
require('../components/Icons/components/IconArrowRightLine.js');
require('../components/Icons/components/IconDoubleLeft.js');
require('../components/Icons/components/IconDoubleRight.js');
var index$1 = require('../Button/index.js');
var Portal = require('../utils/Portal.js');
var index$2 = require('./components/ModalContent/index.js');
require('./Modal.scss.js');

var Modal = function (_a) {
    var title = _a.title, visible = _a.visible, children = _a.children, _b = _a.width, width = _b === void 0 ? 520 : _b, onCancel = _a.onCancel, onOk = _a.onOk, className = _a.className, _c = _a.closable, closable = _c === void 0 ? true : _c, _d = _a.maskClosable, maskClosable = _d === void 0 ? true : _d, confirmLoading = _a.confirmLoading, footer = _a.footer, _e = _a.okText, okText = _e === void 0 ? '确定' : _e, _f = _a.cancelText, cancelText = _f === void 0 ? '取消' : _f, _g = _a.getContainer, getContainer = _g === void 0 ? function () { return document.body; } : _g, _h = _a.prefixCls, prefixCls = _h === void 0 ? index.PREFIX_CLASS : _h, props = _tslib.__rest(_a, ["title", "visible", "children", "width", "onCancel", "onOk", "className", "closable", "maskClosable", "confirmLoading", "footer", "okText", "cancelText", "getContainer", "prefixCls"]);
    var _j = React__default.useState(false), primaryLoading = _j[0], setPrimaryLoading = _j[1];
    var container = getContainer();
    function handleOk(event) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof onOk === 'function')) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        setPrimaryLoading(true);
                        return [4 /*yield*/, onOk(event)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        setPrimaryLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function renderModal() {
        return (jsxRuntime.jsxs(index$2, _tslib.__assign({ width: width, onClickMask: onCancel, maskClosable: maskClosable, className: classnames(className, prefixCls + "-modal"), prefixCls: prefixCls }, props, { children: [closable ? (jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-modal-close-btn", onClick: onCancel }, { children: jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-modal-close" }, { children: jsxRuntime.jsx(IconClose, { className: prefixCls + "-modal-close-icon" }, void 0) }), void 0) }), void 0)) : null,
                title ? (jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-modal-header" }, { children: title }), void 0)) : null,
                jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-modal-body" }, { children: children }), void 0),
                footer === null ? null : (jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-modal-footer" }, { children: footer || (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1, _tslib.__assign({ onClick: onCancel, className: prefixCls + "-modal-opt-btn" }, { children: cancelText }), void 0),
                            jsxRuntime.jsx(index$1, _tslib.__assign({ onClick: handleOk, className: prefixCls + "-modal-opt-btn", type: "primary", loading: primaryLoading || confirmLoading }, { children: okText }), void 0)] }, void 0)) }), void 0))] }), void 0));
    }
    if (!visible) {
        return null;
    }
    return jsxRuntime.jsx(Portal, _tslib.__assign({ getContainer: function () { return container; } }, { children: renderModal() }), void 0);
};

module.exports = Modal;
//# sourceMappingURL=Modal.js.map
