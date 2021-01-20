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

var calculate = require('../../utils/calculate.js');

var NUMBER = 1000;
function calcMoveLeft(_a) {
    var railDom = _a.railDom, clientX = _a.clientX, excursion = _a.excursion, handleWidth = _a.handleWidth;
    var _b = railDom.getBoundingClientRect(), domX = _b.x, domWidth = _b.width;
    var moveLeft = clientX - excursion + handleWidth / 2 - domX;
    if (moveLeft < 0) {
        moveLeft = 0;
    }
    else if (moveLeft > domWidth) {
        moveLeft = domWidth;
    }
    return moveLeft;
}
function calcValue(_a) {
    var step = _a.step, left = _a.left, distanceWidth = _a.distanceWidth;
    // 划过整倍数剩下的距离
    var remainderWidth = left % distanceWidth;
    // 划过多少个单元格
    var hoverCells = (left - remainderWidth) / distanceWidth;
    // 划过下一个单元格超过一半 就进入下一个
    if (Boolean(Math.round(remainderWidth / distanceWidth))) {
        hoverCells = hoverCells + 1;
    }
    var power = String(step).split('.')[1]
        ? String(step).split('.')[1].length
        : 0;
    var value = Number(calculate.productFloat(power)(hoverCells, step));
    var harshLeft = Number(((hoverCells * distanceWidth * NUMBER) / NUMBER).toFixed(2));
    return { value: value, harshLeft: harshLeft };
}
function sliderCalc(_a) {
    var railDom = _a.railDom, clientX = _a.clientX, excursion = _a.excursion, handleWidth = _a.handleWidth, step = _a.step, smooth = _a.smooth, distanceWidth = _a.distanceWidth;
    var left = calcMoveLeft({
        railDom: railDom,
        clientX: clientX,
        excursion: excursion,
        handleWidth: handleWidth,
    });
    var _b = calcValue({
        step: step,
        left: left,
        distanceWidth: distanceWidth,
    }), value = _b.value, harshLeft = _b.harshLeft;
    var moveLeft = smooth ? left : harshLeft;
    return { value: value, moveLeft: moveLeft };
}

exports.sliderCalc = sliderCalc;
//# sourceMappingURL=utils.js.map
