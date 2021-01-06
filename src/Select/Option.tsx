import React from 'react'
import classnames from 'classnames'
import { OptionProps } from './Option.types'
import { PREFIX_CLASS } from '../constants'

import './Option.scss'

function Option({
  value,
  children,
  onClick,
  className,
  prefixCls = PREFIX_CLASS,
}: OptionProps) {
  return (
    <div
      className={classnames(`${prefixCls}-select-selection-item`, className)}
      onClick={() => {
        if (typeof onClick === 'function') {
          onClick(value)
        }
      }}
    >
      {children}
    </div>
  )
}

export default Option
