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
var ReactDOM = _interopDefault(require('react-dom'));
var index$1 = require('../utils/index.js');
var message_types = require('./message.types.js');
var constants = require('./constants.js');
require('./message.scss.js');
require('../style/animation/move-50.scss.js');

var moveUpEnter = 'move-up-enter-50';
var moveLeaveEnter = 'move-up-leave-50';
function Message(_a) {
    var option = _a.option, type = _a.type, onClose = _a.onClose;
    var thisRef = React__default.useRef(null);
    React__default.useEffect(function () {
        setTimeout(function () {
            var notice = thisRef.current;
            notice === null || notice === void 0 ? void 0 : notice.classList.add(moveLeaveEnter);
        }, option.duration);
    }, [option.duration]);
    React__default.useEffect(function () {
        var notice = thisRef.current;
        notice === null || notice === void 0 ? void 0 : notice.addEventListener('animationend', function () {
            if (notice.classList.contains(moveUpEnter)) {
                notice.classList.remove(moveUpEnter);
            }
            else if (notice.classList.contains(moveLeaveEnter)) {
                notice.classList.remove(moveLeaveEnter);
                onClose();
                if (typeof option.onClose === 'function') {
                    option.onClose();
                }
            }
        });
    }, [onClose, option, option.onClose]);
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: classnames(index.PREFIX_CLASS + "-message-notice", moveUpEnter), ref: thisRef }, { children: jsxRuntime.jsxs("div", _tslib.__assign({ className: classnames(index.PREFIX_CLASS + "-message-notice-content", constants.MESSAGE_TYPE_CLASSNAME[type], option.className) }, { children: [option.icon
                    ? option.icon
                    : React__default.createElement(constants.MESSAGE_TYPE_ICON[type], {
                        className: index.PREFIX_CLASS + "-message-icon",
                    }),
                jsxRuntime.jsx("span", _tslib.__assign({ className: index.PREFIX_CLASS + "-message-content" }, { children: option.content }), void 0)] }), void 0) }), void 0));
}
var message = (function () {
    var container = document.createElement('div');
    var queue = [];
    function renderMessage() {
        ReactDOM.render(jsxRuntime.jsx(React__default.Fragment, { children: queue.map(function (message) { return (React.createElement(Message, _tslib.__assign({}, message, { key: message.id, onClose: function () {
                    queue = queue.filter(function (item) { return item.id !== message.id; });
                    renderMessage();
                } }))); }) }, void 0), container);
    }
    function appendMessage(option, type) {
        queue.push({ option: option, type: type, id: index$1.guid() });
        if (!document.body.contains(container)) {
            container.className = index.PREFIX_CLASS + "-message-container";
            document.body.appendChild(container);
        }
        renderMessage();
    }
    var toast = function (type) { return function (content, duration, onClose) {
        if (duration === void 0) { duration = constants.DURATION; }
        appendMessage({ content: content, duration: duration, onClose: onClose }, type);
    }; };
    return {
        info: toast(message_types.MessageType.Info),
        success: toast(message_types.MessageType.Success),
        warn: toast(message_types.MessageType.Warn),
        error: toast(message_types.MessageType.Error),
    };
})();

module.exports = message;
//# sourceMappingURL=message.js.map
