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

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('../../../constants/index.js');
require('../../../components/Icons/components/IconLoading.js');
require('../../../components/Icons/components/IconCheckCircleFilled.js');
require('../../../components/Icons/components/IconCloseCircleFilled.js');
var IconExclamationCircleFilled = require('../../../components/Icons/components/IconExclamationCircleFilled.js');
require('../../../components/Icons/components/IconClose.js');
var index$1 = require('../../../Button/index.js');
var ReactDOM = _interopDefault(require('react-dom'));
var index$2 = require('../ModalContent/index.js');
require('./confirm.scss.js');

var prefixCls = index.PREFIX_CLASS;
function Modal(_a) {
    var title = _a.title, content = _a.content, onCancel = _a.onCancel, onOk = _a.onOk, removeContainer = _a.removeContainer;
    var _b = React__default.useState(false), loading = _b[0], setLoading = _b[1];
    function handleOk() {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof onOk === 'function')) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        setLoading(true);
                        return [4 /*yield*/, onOk()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 4:
                        removeContainer();
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleCancel() {
        if (typeof onCancel === 'function') {
            onCancel();
        }
        removeContainer();
    }
    return (jsxRuntime.jsx(index$2, _tslib.__assign({ width: 416 }, { children: jsxRuntime.jsxs("div", _tslib.__assign({ className: prefixCls + "-modal-confirm" }, { children: [jsxRuntime.jsxs("div", _tslib.__assign({ className: prefixCls + "-modal-confirm-body" }, { children: [jsxRuntime.jsxs("div", _tslib.__assign({ className: prefixCls + "-modal-confirm-body-header" }, { children: [jsxRuntime.jsx(IconExclamationCircleFilled, { className: prefixCls + "-modal-confirm-exclamation-icon" }, void 0),
                                jsxRuntime.jsx("span", _tslib.__assign({ className: prefixCls + "-modal-confirm-body-title" }, { children: title }), void 0)] }), void 0),
                        jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-modal-confirm-body-content" }, { children: content }), void 0)] }), void 0),
                jsxRuntime.jsxs("div", _tslib.__assign({ className: prefixCls + "-modal-confirm-btns" }, { children: [jsxRuntime.jsx(index$1, _tslib.__assign({ className: prefixCls + "-modal-confirm-btn", onClick: handleCancel }, { children: "\u53D6\u6D88" }), void 0),
                        jsxRuntime.jsx(index$1, _tslib.__assign({ loading: loading, className: prefixCls + "-modal-confirm-btn", type: "primary", onClick: handleOk }, { children: "\u786E\u5B9A" }), void 0)] }), void 0)] }), void 0) }), void 0));
}
function confirm(_a) {
    var _b = _a.getContainer, getContainer = _b === void 0 ? function () { return document.body; } : _b, props = _tslib.__rest(_a, ["getContainer"]);
    var container = document.createElement('div');
    function removeContainer() {
        getContainer().removeChild(container);
    }
    ReactDOM.render(jsxRuntime.jsx(Modal, _tslib.__assign({}, props, { removeContainer: removeContainer }), void 0), container);
    getContainer().appendChild(container);
}

module.exports = confirm;
//# sourceMappingURL=index.js.map
