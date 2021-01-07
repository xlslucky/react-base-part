import React from 'react'
import classnames from 'classnames'

import { CheckboxProps } from './Checkbox.types'

import './Checkbox.scss'
import { PREFIX_CLASS } from '../constants'

const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  children,
  className,
  prefixCls = PREFIX_CLASS,
  ...restProps
}) => {
  return (
    <label
      className={classnames(`${prefixCls}-checkbox-wrapper`, className, {
        [`${prefixCls}-checkbox-wrapper-disabled`]: disabled,
      })}
    >
      <span className={`${prefixCls}-checkbox`}>
        <input
          disabled={disabled}
          className={`${prefixCls}-checkbox-input`}
          type="checkbox"
          {...restProps}
        />
        <span className={`${prefixCls}-checkbox-inner`} />
      </span>
      {children ? (
        <span className={`${prefixCls}-checkbox-content`}>{children}</span>
      ) : null}
    </label>
  )
}

export default Checkbox
