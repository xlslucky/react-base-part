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

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../constants/index.js');
require('../components/Icons/components/IconLoading.js');
var IconCheckCircleFilled = require('../components/Icons/components/IconCheckCircleFilled.js');
var IconCloseCircleFilled = require('../components/Icons/components/IconCloseCircleFilled.js');
var IconExclamationCircleFilled = require('../components/Icons/components/IconExclamationCircleFilled.js');
require('../components/Icons/components/IconClose.js');
var message_types = require('./message.types.js');

var _a, _b;
var MESSAGE_TYPE_CLASSNAME = (_a = {},
    _a[message_types.MessageType.Success] = index.PREFIX_CLASS + "-message-success",
    _a[message_types.MessageType.Warn] = index.PREFIX_CLASS + "-message-warn",
    _a[message_types.MessageType.Error] = index.PREFIX_CLASS + "-message-error",
    _a[message_types.MessageType.Info] = index.PREFIX_CLASS + "-message-info",
    _a);
var MESSAGE_TYPE_ICON = (_b = {},
    _b[message_types.MessageType.Success] = IconCheckCircleFilled,
    _b[message_types.MessageType.Warn] = IconExclamationCircleFilled,
    _b[message_types.MessageType.Error] = IconCloseCircleFilled,
    _b[message_types.MessageType.Info] = IconExclamationCircleFilled,
    _b);
var DURATION = 3000;

exports.DURATION = DURATION;
exports.MESSAGE_TYPE_CLASSNAME = MESSAGE_TYPE_CLASSNAME;
exports.MESSAGE_TYPE_ICON = MESSAGE_TYPE_ICON;
//# sourceMappingURL=constants.js.map
