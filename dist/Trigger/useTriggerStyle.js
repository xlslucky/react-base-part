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

var React = require('react');
var React__default = _interopDefault(React);
var utils = require('./utils.js');

function useTriggerStyle(_a) {
    var placement = _a.placement, finalVisible = _a.finalVisible, childrenRef = _a.childrenRef, popupRef = _a.popupRef, container = _a.container, offset = _a.offset, stretch = _a.stretch;
    var _b = React__default.useState({
        display: 'block',
        visibility: 'hidden',
    }), triggerStyle = _b[0], setTriggerStyle = _b[1];
    // 计算属性后，加动画，不然popup高度，宽度计算不准确
    var _c = React__default.useState(false), calcStyleEnd = _c[0], setCalcStyleEnd = _c[1];
    var _d = React__default.useMemo(function () {
        // 需要加visible 不然childrenRef不更新
        if (!finalVisible || !childrenRef.current) {
            return [0, 0];
        }
        var _a = childrenRef.current.getBoundingClientRect(), childrenLeft = _a.left, childrenTop = _a.top;
        var _b = container.getBoundingClientRect(), containerLeft = _b.left, containerTop = _b.top;
        var containerScrollTop = container.scrollTop, containerScrollLeft = container.scrollLeft;
        var fullTop = Math.round(childrenTop - containerTop + containerScrollTop);
        var fullLeft = Math.round(childrenLeft - containerLeft + containerScrollLeft);
        return [fullLeft, fullTop];
    }, [childrenRef, container, finalVisible]), childrenFullLeft = _d[0], childrenFullTop = _d[1];
    var getTriggerStyle = React__default.useCallback(function () {
        if (!childrenRef.current || !popupRef.current) {
            return {};
        }
        var _a = childrenRef.current.getBoundingClientRect(), childrenWidth = _a.width, childrenHeight = _a.height;
        /**
         * fix: 快速、多次划过，位置计算错误
         * cause: 设置放大/缩小动画 DOMRect 返回 height/width 不固定
         * solve: 获取offsetHeight/offsetWidth
         */
        // const {
        //   width: PopupWidth,
        //   height: PopupHeight,
        // } = popupRef.current.getBoundingClientRect()
        var _b = popupRef.current, PopupHeight = _b.offsetHeight, PopupWidth = _b.offsetWidth;
        var baseStyle = utils.getBaseStyle({
            placement: placement,
            childrenFullLeft: childrenFullLeft,
            childrenFullTop: childrenFullTop,
            childrenHeight: childrenHeight,
            childrenWidth: childrenWidth,
            PopupHeight: PopupHeight,
            PopupWidth: PopupWidth,
        });
        var style = utils.getFullStyle({
            style: baseStyle,
            offset: offset,
            stretch: stretch,
            childrenHeight: childrenHeight,
            childrenWidth: childrenWidth,
        });
        return style;
    }, [
        childrenRef,
        popupRef,
        placement,
        childrenFullLeft,
        childrenFullTop,
        offset,
        stretch,
    ]);
    React__default.useEffect(function () {
        if (finalVisible) {
            setTimeout(function () {
                // setTimeout 为了childrenRef.current和popupRef.current能取到值
                setTriggerStyle(getTriggerStyle());
                setCalcStyleEnd(true);
            }, 0);
        }
        else {
            setCalcStyleEnd(false);
        }
    }, [getTriggerStyle, finalVisible]);
    return { triggerStyle: triggerStyle, calcStyleEnd: calcStyleEnd };
}

module.exports = useTriggerStyle;
//# sourceMappingURL=useTriggerStyle.js.map
