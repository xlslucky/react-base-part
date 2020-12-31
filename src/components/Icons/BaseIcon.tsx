// lib
import React from 'react'
import classnames from 'classnames'

// components

// styles
import './BaseIcon.scss'

import { BaseIconProps } from './Icons.types'

export default function BaseIcon({
  children,
  className,
  onClick,
  style,
  defaultFill = true,
}: BaseIconProps) {
  return (
    <span
      style={style}
      className={classnames(['rbp-icon'], className, {
        'default-fill': defaultFill,
      })}
      onClick={onClick}
    >
      {children}
    </span>
  )
}
