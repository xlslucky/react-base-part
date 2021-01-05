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

// 通过【子元素宽高】、【浮层宽高】、【子元素距页面上、左距离】计算基础left top值
function getBaseStyle(_a) {
    var placement = _a.placement, childrenFullLeft = _a.childrenFullLeft, childrenFullTop = _a.childrenFullTop, childrenHeight = _a.childrenHeight, childrenWidth = _a.childrenWidth, PopupHeight = _a.PopupHeight, PopupWidth = _a.PopupWidth;
    var style = {};
    if (['topLeft', 'bottomLeft'].includes(placement)) {
        style.left = childrenFullLeft;
    }
    if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(placement)) {
        style.top = Math.round(childrenFullTop + childrenHeight);
    }
    if (['rightTop', 'rightCenter', 'rightBottom'].includes(placement)) {
        style.left = Math.round(childrenFullLeft + childrenWidth);
    }
    if (['rightTop', 'leftTop'].includes(placement)) {
        style.top = childrenFullTop;
    }
    if (['topLeft', 'topCenter', 'topRight'].includes(placement)) {
        // top fulltop - height
        style.top = childrenFullTop - PopupHeight;
    }
    if (['topCenter', 'bottomCenter'].includes(placement)) {
        // left fullleft - width / 2 + childrenW / 2
        style.left = childrenFullLeft - PopupWidth / 2 + childrenWidth / 2;
    }
    if (['rightBottom', 'leftBottom'].includes(placement)) {
        // top fulltop - height + childrenH
        style.top = childrenFullTop - PopupHeight + childrenHeight;
    }
    if (['rightCenter', 'leftCenter'].includes(placement)) {
        // top fulltop - height / 2 + childrenH / 2
        style.top = childrenFullTop - PopupHeight / 2 + childrenHeight / 2;
    }
    if (['topRight', 'bottomRight'].includes(placement)) {
        // left fullleft - width + childrenW
        style.left = childrenFullLeft - PopupWidth + childrenWidth;
    }
    if (['leftTop', 'leftCenter', 'leftBottom'].includes(placement)) {
        // left fullleft - width
        style.left = childrenFullLeft - PopupWidth;
    }
    return style;
}
// offset、stretch参数和baseStyle叠加组合样式
function getFullStyle(_a) {
    var style = _a.style, offset = _a.offset, stretch = _a.stretch, childrenHeight = _a.childrenHeight, childrenWidth = _a.childrenWidth;
    // 偏移数据
    var _b = offset || [], _c = _b[0], offsetX = _c === void 0 ? 0 : _c, _d = _b[1], offsetY = _d === void 0 ? 0 : _d;
    style.left = Number(style.left) + offsetX;
    style.top = Number(style.top) + offsetY;
    // 拉伸数据
    switch (stretch) {
        case 'width':
            style.width = childrenWidth;
            break;
        case 'minWidth':
            style.minWidth = childrenWidth;
            break;
        case 'height':
            style.height = childrenHeight;
            break;
        case 'minHeight':
            style.minHeight = childrenHeight;
            break;
    }
    return style;
}

exports.getBaseStyle = getBaseStyle;
exports.getFullStyle = getFullStyle;
//# sourceMappingURL=utils.js.map
