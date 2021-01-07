import React from 'react'

const TOTAL_PAGE_NO = 8
const THRESHOLD = 4

function useBasePage(pageNo: number, totalPage: number) {
  const hasLeft = React.useMemo(() => {
    return totalPage >= TOTAL_PAGE_NO && pageNo > THRESHOLD
  }, [pageNo, totalPage])

  const hasRight = React.useMemo(() => {
    return totalPage >= TOTAL_PAGE_NO && totalPage - pageNo >= THRESHOLD
  }, [pageNo, totalPage])

  const centerStartNo = React.useMemo(() => {
    if (hasLeft) {
      // 特殊处理
      if (totalPage - pageNo < THRESHOLD - 1) {
        return totalPage - THRESHOLD
      }
      return pageNo - 2
    }
    return 1
  }, [hasLeft, pageNo, totalPage])

  const centerEndNo = React.useMemo(() => {
    if (hasRight) {
      // 特殊处理
      if (pageNo < THRESHOLD) {
        return THRESHOLD + 1
      }
      return pageNo + 2
    }
    return totalPage
  }, [hasRight, totalPage, pageNo])

  return {
    hasLeft,
    centerStartNo,
    centerEndNo,
    hasRight,
  }
}

export default useBasePage
