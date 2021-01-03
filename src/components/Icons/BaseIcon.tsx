// lib
import React from 'react'
import classnames from 'classnames'

// components

// styles
import './BaseIcon.scss'

import { BaseIconProps } from './Icons.types'
import { PREFIX_CLASS } from '../../constants'

export default function BaseIcon({
  children,
  className,
  onClick,
  style,
  defaultFill = true,
  prefixCls = PREFIX_CLASS,
}: BaseIconProps) {
  return (
    <span
      style={style}
      className={classnames(`${prefixCls}-icon`, className, {
        'default-fill': defaultFill,
      })}
      onClick={onClick}
    >
      {children}
    </span>
  )
}
