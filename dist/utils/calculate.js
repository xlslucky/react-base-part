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

var tenPower = function (power) {
    if (power === void 0) { power = 2; }
    return function (str) {
        if (str === void 0) { str = 0; }
        return parseInt(parseFloat("" + str).toFixed(power).replace('.', ''), 10);
    };
};
var yuan2fen = tenPower(2);
// 乘
var productFloat = function (power) {
    if (power === void 0) { power = 2; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var newPower = power + 1;
        var toInt = tenPower(newPower);
        var value = args.reduce(function (total, next) { return total * toInt(next); }, 1) /
            Math.pow(10, (newPower * args.length));
        return value.toFixed(power);
    };
};

exports.productFloat = productFloat;
exports.yuan2fen = yuan2fen;
//# sourceMappingURL=calculate.js.map
