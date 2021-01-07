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

var TOTAL_PAGE_NO = 8;
var THRESHOLD = 4;
function useBasePage(pageNo, totalPage) {
    var hasLeft = React__default.useMemo(function () {
        return totalPage >= TOTAL_PAGE_NO && pageNo > THRESHOLD;
    }, [pageNo, totalPage]);
    var hasRight = React__default.useMemo(function () {
        return totalPage >= TOTAL_PAGE_NO && totalPage - pageNo >= THRESHOLD;
    }, [pageNo, totalPage]);
    var centerStartNo = React__default.useMemo(function () {
        if (hasLeft) {
            // 特殊处理
            if (totalPage - pageNo < THRESHOLD - 1) {
                return totalPage - THRESHOLD;
            }
            return pageNo - 2;
        }
        return 1;
    }, [hasLeft, pageNo, totalPage]);
    var centerEndNo = React__default.useMemo(function () {
        if (hasRight) {
            // 特殊处理
            if (pageNo < THRESHOLD) {
                return THRESHOLD + 1;
            }
            return pageNo + 2;
        }
        return totalPage;
    }, [hasRight, totalPage, pageNo]);
    return {
        hasLeft: hasLeft,
        centerStartNo: centerStartNo,
        centerEndNo: centerEndNo,
        hasRight: hasRight,
    };
}

module.exports = useBasePage;
//# sourceMappingURL=useBasePage.js.map
