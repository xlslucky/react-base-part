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
  defaultChecked,
  onChange,
  checked,
  value,
}) => {
  function onChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof onChange === 'function') {
      onChange(event)
    }
  }

  return (
    <label
      className={classnames(`${prefixCls}-radio-wrapper`, className, {
        [`${prefixCls}-radio-wrapper-disabled`]: disabled,
      })}
    >
      <span className={`${prefixCls}-radio`}>
        <input
          disabled={disabled}
          className={`${prefixCls}-radio-input`}
          type="radio"
          onChange={onChangeRadio}
          defaultChecked={defaultChecked}
          checked={checked}
        />
        <span className={`${prefixCls}-radio-inner`}></span>
      </span>
      {children ? (
        <span className={`${prefixCls}-radio-content`}>{children}</span>
      ) : null}
    </label>
  )
}

export default Radio
