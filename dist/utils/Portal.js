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
var ReactDOM = _interopDefault(require('react-dom'));

// lib
function Portal(_a) {
    var children = _a.children, getContainer = _a.getContainer;
    var containerRef = React__default.useRef();
    var initRef = React__default.useRef(false);
    if (!initRef.current) {
        containerRef.current = getContainer();
        initRef.current = true;
    }
    React__default.useEffect(function () {
        // return () => {
        //   containerRef.current?.parentNode?.removeChild(containerRef.current)
        // }
    }, []);
    return containerRef.current
        ? ReactDOM.createPortal(children, containerRef.current)
        : null;
}

module.exports = Portal;
//# sourceMappingURL=Portal.js.map
