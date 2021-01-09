// lib
import React from 'react'
import classnames from 'classnames'

import { ArrowProps } from './Arrow.types'

// styles
import './Arrow.scss'

import { PREFIX_CLASS } from '../../constants'

export default function Arrow({
  place,
  className,
  prefixCls = PREFIX_CLASS,
}: ArrowProps) {
  return (
    <span
      className={classnames(
        `${prefixCls}-arrow-icon`,
        `${prefixCls}-arrow-icon-${place}`,
        className
      )}
    />
  )
}
