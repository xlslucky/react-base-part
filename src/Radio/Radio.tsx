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
  onChange,
  value,
  ...restProps
}) => {
  function onChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof onChange === 'function') {
      onChange({
        ...event,
        target: {
          ...event.target,
          // event.target.value 是 string 类型，不符合我们要求
          // @ts-ignore
          value: value || event.target.value,
        },
      })
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
          className={`${prefixCls}-radio-input`}
          type="radio"
          value={value}
          onChange={onChangeRadio}
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
