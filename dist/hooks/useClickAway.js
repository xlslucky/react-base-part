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

// https://github.com/streamich/react-use/blob/master/src/useClickAway.ts
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = React__default.useRef(onClickAway);
    React__default.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    React__default.useEffect(function () {
        var handler = function (event) {
            var refs = Array.isArray(ref) ? ref : [ref];
            var flag = refs.every(function (curRef) {
                var el = curRef.current;
                return el && !el.contains(event.target);
            });
            if (flag) {
                savedCallback.current(event);
            }
        };
        for (var i = 0; i < events.length; i += 1) {
            document.addEventListener(events[i], handler);
        }
        return function () {
            for (var i = 0; i < events.length; i += 1) {
                document.removeEventListener(events[i], handler);
            }
        };
    }, [events, ref]);
};

module.exports = useClickAway;
//# sourceMappingURL=useClickAway.js.map
