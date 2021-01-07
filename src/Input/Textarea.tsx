// lib
import React from 'react'
import classnames from 'classnames'
import { TextareaProps } from './Textarea.types'

import './Textarea.scss'
import { PREFIX_CLASS } from '../constants'

export default function Textarea({
  style,
  className,
  bordered = true,
  prefixCls = PREFIX_CLASS,
  size,
  // TODO 禁用样式
  disabled,
  ...restProps
}: TextareaProps) {
  const prefixClass = `${prefixCls}-input-textarea`

  return (
    <textarea
      disabled={disabled}
      className={classnames(
        prefixClass,
        { [`${prefixClass}-border`]: bordered },
        { [`${prefixClass}-size-lg`]: size === 'large' },
        { [`${prefixClass}-size-sm`]: size === 'small' },
        className
      )}
      {...restProps}
    />
  )
}
