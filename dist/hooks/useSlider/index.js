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
var index$1 = require('../../utils/index.js');
var utils = require('./utils.js');

function useSliderCommon(_a) {
    var railRef = _a.railRef, step = _a.step, min = _a.min, max = _a.max;
    var _b = React__default.useState(0), distanceWidth = _b[0], setDistanceWidth = _b[1];
    React__default.useEffect(function () {
        var railDom = railRef.current;
        if (railDom) {
            var width = railDom.getBoundingClientRect().width;
            setDistanceWidth(Number(width / ((max - min) / step)));
        }
    }, [max, min, railRef, step]);
    return { distanceWidth: distanceWidth };
}
function useSlider(_a) {
    var railRef = _a.railRef, handleRef = _a.handleRef, max = _a.max, step = _a.step, min = _a.min, smooth = _a.smooth, value = _a.value, onSuccess = _a.onSuccess;
    var _b = React__default.useState(0), left = _b[0], setLeft = _b[1];
    var _c = React__default.useState(0), nextValue = _c[0], setNextValue = _c[1];
    var distanceWidth = useSliderCommon({ railRef: railRef, step: step, min: min, max: max }).distanceWidth;
    React__default.useEffect(function () {
        // value发生改变就按照value值设置
        if (!index$1.isEmpty(value)) {
            setNextValue(value);
            setLeft((value / step) * distanceWidth);
        }
    }, [distanceWidth, step, value]);
    function onMouseDown(downEvent) {
        if (!handleRef.current || !railRef.current) {
            return;
        }
        var handleDom = handleRef.current;
        var railDom = railRef.current;
        var _a = handleDom.getBoundingClientRect(), handleX = _a.x, handleWidth = _a.width;
        var excursion = downEvent.clientX - handleX;
        document.onmousemove = function (moveEvent) {
            var clientX = moveEvent.clientX;
            var _a = utils.sliderCalc({
                railDom: railDom,
                clientX: clientX,
                excursion: excursion,
                handleWidth: handleWidth,
                step: step,
                smooth: smooth,
                distanceWidth: distanceWidth,
            }), value = _a.value, moveLeft = _a.moveLeft;
            setNextValue(value);
            setLeft(moveLeft);
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                onSuccess(value);
            };
        };
    }
    function onTouchStart(startEvent) {
        if (!handleRef.current || !railRef.current) {
            return;
        }
        var handleDom = handleRef.current;
        var railDom = railRef.current;
        var _a = handleDom.getBoundingClientRect(), handleX = _a.x, handleWidth = _a.width;
        var excursion = startEvent.touches[0].clientX - handleX;
        document.ontouchmove = function (moveEvent) {
            var clientX = moveEvent.touches[0].clientX;
            var _a = utils.sliderCalc({
                railDom: railDom,
                clientX: clientX,
                excursion: excursion,
                handleWidth: handleWidth,
                step: step,
                smooth: smooth,
                distanceWidth: distanceWidth,
            }), value = _a.value, moveLeft = _a.moveLeft;
            setNextValue(value);
            setLeft(moveLeft);
            document.ontouchend = function () {
                document.ontouchmove = null;
                document.ontouchend = null;
                onSuccess(value);
            };
        };
    }
    function onClick(event) {
        if (!handleRef.current || !railRef.current) {
            return;
        }
        var handleDom = handleRef.current;
        var railDom = railRef.current;
        var handleWidth = handleDom.getBoundingClientRect().width;
        var _a = utils.sliderCalc({
            railDom: railDom,
            clientX: event.clientX,
            excursion: handleWidth / 2,
            handleWidth: handleWidth,
            step: step,
            smooth: smooth,
            distanceWidth: distanceWidth,
        }), value = _a.value, moveLeft = _a.moveLeft;
        setNextValue(value);
        setLeft(moveLeft);
    }
    return {
        nextValue: nextValue,
        left: left,
        onMouseDown: onMouseDown,
        onTouchStart: onTouchStart,
        onClick: onClick,
    };
}

module.exports = useSlider;
//# sourceMappingURL=index.js.map
