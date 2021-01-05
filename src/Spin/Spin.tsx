import React from 'react'

import { SpinProps } from './Spin.types'

import Pagination from '../Pagination'
import Empty from '../Empty'
import Loading from '../components/Loading'

import './Spin.scss'
import { PREFIX_CLASS } from '../constants'

const Spin: React.FC<SpinProps> = ({
  loading,
  empty,
  pagination,
  customEmpty,
  emptyProps,
  description,
  children,
  customLoading,
  prefixCls = PREFIX_CLASS,
}) => {
  const renderPagination = () => {
    if (empty || !pagination) return null
    return <Pagination prefixCls={prefixCls} {...pagination} />
  }

  function renderEmpty() {
    if (customEmpty) {
      return <>{customEmpty}</>
    }
    return (
      <Empty description={description} prefixCls={prefixCls} {...emptyProps} />
    )
  }

  function renderLoading() {
    return (
      <div className={`${prefixCls}-spin-loading-content`}>
        {customLoading || <Loading.Melody />}
      </div>
    )
  }

  if (loading) {
    if (empty) return renderLoading()

    return (
      <>
        <div className={`${prefixCls}-spin-loading`}>
          <div className={`${prefixCls}-spin-mask`}>{renderLoading()}</div>
          {children}
        </div>
        {renderPagination()}
      </>
    )
  }

  if (empty) {
    return renderEmpty()
  }

  return (
    <>
      {children}
      {renderPagination()}
    </>
  )
}

export default Spin
