import React from 'react'
import classnames from 'classnames'

import { PaginationProps, BasePaginationProps } from './Pagination.types'

import {
  IconArrowLeftLine,
  IconArrowRightLine,
  IconDoubleLeft,
  IconDoubleRight,
} from '../components/Icons'

import './Pagination.scss'
import { PREFIX_CLASS } from '../constants'
import useBasePage from './useBasePage'

function BasePagination({
  prefixCls,
  className,
  disabled,
  size,
  totalPage,
  pageNo,
  handleLeftBtn,
  handleRightBtn,
  onChangeItem,
}: BasePaginationProps) {
  const data = useBasePage(pageNo, totalPage)
  const { hasLeft, centerStartNo, centerEndNo, hasRight } = data

  function handleLeftMore() {
    let newPageNo = pageNo - 5
    if (newPageNo < 1) {
      newPageNo = 1
    }
    onChangeItem(newPageNo)
  }

  function handleRightMore() {
    let newPageNo = pageNo + 5
    if (newPageNo > totalPage) {
      newPageNo = totalPage
    }
    onChangeItem(newPageNo)
  }

  function renderItem(num: number) {
    return (
      <span
        key={num}
        className={classnames(`${prefixCls}-pagination-item`, {
          [`${prefixCls}-pagination-item-active`]: pageNo === num,
          [`${prefixCls}-pagination-item-disabled`]: disabled,
        })}
        onClick={() => onChangeItem(num)}
      >
        {num}
      </span>
    )
  }

  return (
    <div
      className={classnames(
        `${prefixCls}-pagination`,
        { [`${prefixCls}-pagination-size-sm`]: size === 'small' },
        className
      )}
    >
      <span
        className={classnames(`${prefixCls}-pagination-item`, {
          [`${prefixCls}-pagination-item-not-allowed`]: pageNo === 1,
          [`${prefixCls}-pagination-item-disabled`]: disabled,
        })}
        onClick={handleLeftBtn}
      >
        <IconArrowLeftLine />
      </span>

      {hasLeft ? renderItem(1) : null}
      {hasLeft ? (
        <span
          onClick={handleLeftMore}
          className={`${prefixCls}-pagination-item-jump`}
        >
          <IconDoubleLeft
            className={`${prefixCls}-pagination-item-jump-icon`}
          />
          <span className={`${prefixCls}-pagination-item-more`}>···</span>
        </span>
      ) : null}

      {new Array(centerEndNo - centerStartNo + 1)
        .fill(undefined)
        .map((_, i) => {
          const num = centerStartNo + i
          return renderItem(num)
        })}

      {hasRight ? (
        <span
          onClick={handleRightMore}
          className={`${prefixCls}-pagination-item-jump`}
        >
          <IconDoubleRight
            className={`${prefixCls}-pagination-item-jump-icon`}
          />
          <span className={`${prefixCls}-pagination-item-more`}>···</span>
        </span>
      ) : null}
      {hasRight ? renderItem(totalPage) : null}

      <span
        className={classnames(`${prefixCls}-pagination-item`, {
          [`${prefixCls}-pagination-item-not-allowed`]: pageNo === totalPage,
          [`${prefixCls}-pagination-item-disabled`]: disabled,
        })}
        onClick={handleRightBtn}
      >
        <IconArrowRightLine />
      </span>
    </div>
  )
}

const Pagination: React.FC<PaginationProps> = ({
  disabled,
  className,
  pageNo,
  pageSize,
  total,
  onChange,
  size = 'default',
  prefixCls = PREFIX_CLASS,
}) => {
  const [innerPageNo, setInnerPageNo] = React.useState(pageNo)
  const [innerPageSize, setInnerPageSize] = React.useState(pageSize)

  React.useEffect(() => {
    setInnerPageNo(pageNo)
  }, [pageNo])

  React.useEffect(() => {
    setInnerPageSize(pageSize)
  }, [pageSize])

  function updateData(data: Record<string, number>) {
    if (data.pageNo) {
      setInnerPageNo(data.pageNo)
    }
    if (data.pageSize) {
      setInnerPageSize(data.pageSize)
    }
    if (typeof onChange === 'function') {
      onChange(data.pageNo || innerPageNo, data.pageSize || innerPageSize)
    }
  }

  const totalPage = Math.ceil(total / innerPageSize)

  if (totalPage <= 1) {
    return null
  }

  function handleLeftBtn() {
    if (innerPageNo > 1 && !disabled) {
      updateData({
        pageNo: innerPageNo - 1,
      })
    }
  }

  function handleRightBtn() {
    if (innerPageNo < totalPage && !disabled) {
      updateData({
        pageNo: innerPageNo + 1,
      })
    }
  }

  function onChangeItem(num: number) {
    if (innerPageNo !== num && !disabled) {
      updateData({
        pageNo: num,
      })
    }
  }

  return (
    <BasePagination
      prefixCls={prefixCls}
      className={className}
      disabled={disabled}
      size={size}
      totalPage={totalPage}
      pageNo={innerPageNo}
      handleLeftBtn={handleLeftBtn}
      handleRightBtn={handleRightBtn}
      onChangeItem={onChangeItem}
    />
  )
}

export default Pagination
