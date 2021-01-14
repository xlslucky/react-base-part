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

// 动画名称 移入 移出
function getSlideAnimationClassNames(placement) {
    if (['topLeft', 'topCenter', 'topRight'].includes(placement)) {
        return ['slide-down-enter', 'slide-down-leave'];
    }
    if (['rightTop', 'rightCenter', 'rightBottom'].includes(placement)) {
        return ['slide-left-enter', 'slide-left-leave'];
    }
    if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(placement)) {
        return ['slide-up-enter', 'slide-up-leave'];
    }
    if (['leftTop', 'leftCenter', 'leftBottom'].includes(placement)) {
        return ['slide-right-enter', 'slide-right-leave'];
    }
    return [];
}
// 获取箭头方向
function getArrowPlace(placement) {
    if (['topLeft', 'topCenter', 'topRight'].includes(placement)) {
        return 'bottom';
    }
    if (['rightTop', 'rightCenter', 'rightBottom'].includes(placement)) {
        return 'left';
    }
    if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(placement)) {
        return 'top';
    }
    if (['leftTop', 'leftCenter', 'leftBottom'].includes(placement)) {
        return 'right';
    }
    return 'bottom';
}
var PLACEMENT_MAP = {
    topLeft: 'top-left',
    topCenter: 'top-center',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomCenter: 'bottom-center',
    bottomRight: 'bottom-right',
    rightTop: 'right-top',
    rightCenter: 'right-center',
    rightBottom: 'right-bottom',
    leftTop: 'left-top',
    leftCenter: 'left-center',
    leftBottom: 'left-bottom',
};
var PLACEMENT_MAP_SUMMARIZE = {
    topLeft: 'top',
    topCenter: 'top',
    topRight: 'top',
    bottomLeft: 'bottom',
    bottomCenter: 'bottom',
    bottomRight: 'bottom',
    rightTop: 'right',
    rightCenter: 'right',
    rightBottom: 'right',
    leftTop: 'left',
    leftCenter: 'left',
    leftBottom: 'left',
};
var getOffsetByPlacement = function (placement, offset) {
    if (['topLeft', 'topCenter', 'topRight'].includes(placement)) {
        return [0, -offset];
    }
    if (['rightTop', 'rightCenter', 'rightBottom'].includes(placement)) {
        return [offset, 0];
    }
    if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(placement)) {
        return [0, offset];
    }
    if (['leftTop', 'leftCenter', 'leftBottom'].includes(placement)) {
        return [-offset, 0];
    }
    return [];
};

exports.PLACEMENT_MAP = PLACEMENT_MAP;
exports.PLACEMENT_MAP_SUMMARIZE = PLACEMENT_MAP_SUMMARIZE;
exports.getArrowPlace = getArrowPlace;
exports.getOffsetByPlacement = getOffsetByPlacement;
exports.getSlideAnimationClassNames = getSlideAnimationClassNames;
//# sourceMappingURL=trigger.js.map
