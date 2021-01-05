import React from 'react'
import classnames from 'classnames'

import { PaginationProps } from './Pagination.types'

import './Pagination.scss'
import { PREFIX_CLASS } from '../constants'

const Pagination: React.FC<PaginationProps> = ({
  disabled,
  className,
  pageNo,
  pageSize,
  total,
  onChange,
  prefixCls = PREFIX_CLASS,
}) => {
  const totalPage = Math.ceil(total / pageSize)

  if (totalPage <= 1) {
    return null
  }

  function handleLeftBtn() {
    if (pageNo > 1 && typeof onChange === 'function' && !disabled) {
      onChange(pageNo - 1, pageSize)
    }
  }

  function handleRightBtn() {
    if (pageNo < totalPage && typeof onChange === 'function' && !disabled) {
      onChange(pageNo + 1, pageSize)
    }
  }

  function handleItem(num: number) {
    if (pageNo !== num && typeof onChange === 'function' && !disabled) {
      onChange(num, pageSize)
    }
  }

  return (
    <div className={classnames(`${prefixCls}-pagination`, className)}>
      <span
        className={classnames(`${prefixCls}-pagination-item`, {
          [`${prefixCls}-pagination-item-not-allowed`]: pageNo === 1,
          [`${prefixCls}-pagination-item-disabled`]: disabled,
        })}
        onClick={handleLeftBtn}
      >
        {'<'}
      </span>
      {new Array(totalPage).fill(undefined).map((_, i) => {
        const num = i + 1
        return (
          <span
            key={i}
            className={classnames(`${prefixCls}-pagination-item`, {
              [`${prefixCls}-pagination-item-active`]: pageNo === num,
              [`${prefixCls}-pagination-item-disabled`]: disabled,
            })}
            onClick={() => handleItem(num)}
          >
            {num}
          </span>
        )
      })}
      <span
        className={classnames(`${prefixCls}-pagination-item`, {
          [`${prefixCls}-pagination-item-not-allowed`]: pageNo === totalPage,
          [`${prefixCls}-pagination-item-disabled`]: disabled,
        })}
        onClick={handleRightBtn}
      >
        {'>'}
      </span>
    </div>
  )
}

export default Pagination
