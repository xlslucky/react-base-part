import React from 'react'
import classnames from 'classnames'

import { InputProps, UiEventsKey } from './Input.types'

import './Input.scss'

import { PREFIX_CLASS } from '../constants'

const Input: React.FC<InputProps> = ({
  bordered = true,
  // TODO 禁用样式
  disabled,
  className,
  suffix,
  prefix,
  prefixCls = PREFIX_CLASS,
  type = 'text',
  onPressEnter,
  size = 'default',
  style,
  ...restProps
}) => {
  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === UiEventsKey.Enter) {
      if (typeof onPressEnter === 'function') {
        onPressEnter(event)
      }
    }
  }

  return (
    <div
      className={classnames(
        `${prefixCls}-input-wrapper`,
        { [`${prefixCls}-input-border`]: bordered },
        { [`${prefixCls}-input-size-lg`]: size === 'large' },
        { [`${prefixCls}-input-size-sm`]: size === 'small' },
        className
      )}
      style={style}
    >
      <span className={`${prefixCls}-input-prefix`}>{prefix}</span>
      <input
        disabled={disabled}
        onKeyDown={onKeyDown}
        className={`${prefixCls}-input`}
        type={type}
        {...restProps}
      />
      <span className={`${prefixCls}-input-suffix`}>{suffix}</span>
    </div>
  )
}

export default Input
