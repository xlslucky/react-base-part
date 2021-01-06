import React from 'react'
import classnames from 'classnames'

import { RadioProps } from './Radio.types'

import './Radio.scss'
import { PREFIX_CLASS } from '../constants'

const Radio: React.FC<RadioProps> = ({
  prefixCls = PREFIX_CLASS,
  children,
  className,
  disabled,
  ...restProps
}) => {
  return (
    <label
      className={classnames(`${prefixCls}-radio-wrapper`, className, {
        [`${prefixCls}-radio-wrapper-disabled`]: disabled,
      })}
    >
      <span className={`${prefixCls}-radio`}>
        <input
          className={`${prefixCls}-radio-input`}
          type="radio"
          {...restProps}
        />
        <span className={`${prefixCls}-radio-inner`} />
      </span>
      {children ? (
        <span className={`${prefixCls}-radio-content`}>{children}</span>
      ) : null}
    </label>
  )
}

export default Radio
