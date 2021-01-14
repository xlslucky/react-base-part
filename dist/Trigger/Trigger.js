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
var useTriggerStyle = require('./useTriggerStyle.js');
var useClickAway = require('../hooks/useClickAway.js');
var Portal = require('../utils/Portal.js');
require('./Trigger.scss.js');

var Trigger = function (_a) {
    var children = _a.children, placement = _a.placement, _b = _a.destroyPopupOnHide, destroyPopupOnHide = _b === void 0 ? false : _b, trigger = _a.trigger, popup = _a.popup, _c = _a.getPopupContainer, getPopupContainer = _c === void 0 ? function () { return document.body; } : _c, enterClassName = _a.enterClassName, leaveClassName = _a.leaveClassName, offset = _a.offset, stretch = _a.stretch, clickPopupClose = _a.clickPopupClose, zIndex = _a.zIndex, _d = _a.prefixCls, prefixCls = _d === void 0 ? index.PREFIX_CLASS : _d;
    var _e = React__default.useState(false), innerVisible = _e[0], setVisible = _e[1];
    var _f = React__default.useState(false), showOverlay = _f[0], setShowOverlay = _f[1];
    var childrenRef = React__default.useRef(null);
    var popupRef = React__default.useRef(null);
    var HIDDEN_CLASS_NAME = prefixCls + "-trigger-hidden";
    var OPACITY_ZERO_CLASS_NAME = prefixCls + "-trigger-opacity-zero";
    var container = getPopupContainer();
    var finalVisible = React__default.useMemo(function () {
        return innerVisible;
    }, [innerVisible]);
    function updateVisible(nextVisible) {
        setVisible(nextVisible);
    }
    // 点击子元素、浮层以外元素 关闭浮层
    useClickAway([childrenRef, popupRef], function () {
        updateVisible(false);
    });
    React__default.useEffect(function () {
        if (finalVisible) {
            setShowOverlay(true);
        }
    }, [finalVisible]);
    React__default.useEffect(function () {
        var node = popupRef.current;
        function popupAnimationend(_a) {
            var target = _a.target;
            if (!enterClassName || !leaveClassName) {
                return;
            }
            // 进入动画结束，删除进入动画className
            if (target.classList.contains(enterClassName)) {
                target.classList.remove(enterClassName);
            }
            // 离开动画结束，删除离开动画className并添加隐藏className
            if (target.classList.contains(leaveClassName)) {
                target.classList.remove(leaveClassName);
                target.classList.add(HIDDEN_CLASS_NAME);
                // 销毁dom
                if (destroyPopupOnHide) {
                    setShowOverlay(false);
                }
            }
        }
        if (showOverlay) {
            node === null || node === void 0 ? void 0 : node.addEventListener('animationend', popupAnimationend);
        }
        return function () {
            node === null || node === void 0 ? void 0 : node.removeEventListener('animationend', popupAnimationend);
        };
    }, [
        HIDDEN_CLASS_NAME,
        destroyPopupOnHide,
        enterClassName,
        leaveClassName,
        showOverlay,
    ]);
    React__default.useEffect(function () {
        if (container) {
            if (!['relative', 'absolute', 'fixed'].includes(window.getComputedStyle(container, null).position)) {
                container.style.position = 'relative';
            }
        }
    }, [container]);
    var _g = useTriggerStyle({
        finalVisible: finalVisible,
        placement: placement,
        childrenRef: childrenRef,
        popupRef: popupRef,
        container: container,
        offset: offset,
        stretch: stretch,
    }), triggerStyle = _g.triggerStyle, calcStyleEnd = _g.calcStyleEnd;
    React__default.useEffect(function () {
        if (finalVisible) {
            var node = popupRef.current;
            node === null || node === void 0 ? void 0 : node.classList.remove(HIDDEN_CLASS_NAME);
            if (enterClassName && leaveClassName) {
                /**
                 * fix: 加动画className 第二次划过会闪动
                 * solve: 如果有动画 加个opacity: 0 的样式 等到动画加载出来再删除
                 */
                node === null || node === void 0 ? void 0 : node.classList.add(OPACITY_ZERO_CLASS_NAME);
                if (calcStyleEnd) {
                    // 删除离开动画，添加进入动画
                    node === null || node === void 0 ? void 0 : node.classList.remove(leaveClassName);
                    node === null || node === void 0 ? void 0 : node.classList.add(enterClassName);
                    node === null || node === void 0 ? void 0 : node.classList.remove(OPACITY_ZERO_CLASS_NAME);
                }
            }
        }
        else {
            var node = popupRef.current;
            if (leaveClassName && enterClassName) {
                // 删除进入动画，添加离开动画
                node === null || node === void 0 ? void 0 : node.classList.remove(enterClassName);
                node === null || node === void 0 ? void 0 : node.classList.add(leaveClassName);
            }
            else {
                // 没设置动画 直接隐藏
                node === null || node === void 0 ? void 0 : node.classList.add(HIDDEN_CLASS_NAME);
            }
        }
    }, [
        HIDDEN_CLASS_NAME,
        OPACITY_ZERO_CLASS_NAME,
        calcStyleEnd,
        enterClassName,
        finalVisible,
        leaveClassName,
    ]);
    /**
     * 点击子元素 切换显示、隐藏状态
     *
     * 废弃：使用clickPopupClose传参控制
     * // 如需点击浮层不关闭，在 popup 上写 onClick={e => e.stopPropagation()} 即可
     */
    function onClick(event) {
        var props = children.props;
        /**
         * fix: 子元素loading | disabled 状态不允许点击
         * solve: loading | disabled 直接return
         */
        if (props.loading || props.disabled) {
            return;
        }
        if (typeof props.onClick === 'function') {
            children.props.onClick(event);
        }
        if (trigger.includes('click')) {
            updateVisible(!finalVisible);
        }
    }
    // 点击浮层
    function onClickPopup() {
        if (clickPopupClose) {
            updateVisible(!finalVisible);
        }
    }
    function onMouseEnter(event) {
        if (typeof children.props.onMouseEnter === 'function') {
            children.props.onMouseEnter(event);
        }
        if (trigger.includes('hover')) {
            updateVisible(true);
        }
    }
    function onMouseLeave(event) {
        if (typeof children.props.onMouseLeave === 'function') {
            children.props.onMouseLeave(event);
        }
        if (trigger.includes('hover')) {
            updateVisible(false);
        }
    }
    var showPortal = finalVisible || showOverlay;
    return (jsxRuntime.jsxs(React__default.Fragment, { children: [React__default.cloneElement(children, {
                ref: childrenRef,
                onClick: onClick,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
            }),
            showPortal ? (jsxRuntime.jsx(Portal, _tslib.__assign({ getContainer: function () { return container; } }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: prefixCls + "-trigger-portal", style: { zIndex: zIndex } }, { children: jsxRuntime.jsx("div", _tslib.__assign({ onClick: onClickPopup, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, ref: popupRef, style: triggerStyle, className: prefixCls + "-trigger-container" }, { children: popup }), void 0) }), void 0) }), void 0)) : null] }, void 0));
};

module.exports = Trigger;
//# sourceMappingURL=Trigger.js.map
