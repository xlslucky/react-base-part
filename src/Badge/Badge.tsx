import React from 'react'
import classnames from 'classnames'

import { BadgeProps } from './Badge.types'

import './Badge.scss'
import { PREFIX_CLASS, INNER_COLOR } from '../constants'

const Badge: React.FC<BadgeProps> = ({
  children,
  count,
  size = 'default',
  style,
  className,
  color,
  text,
  dot,
  status,
  prefixCls = PREFIX_CLASS,
}) => {
  const prefixClass = `${prefixCls}-badge`

  return (
    <span className={classnames(prefixClass, className)} style={style}>
      {color || status ? (
        <span
          className={classnames(`${prefixClass}-status-dot`, {
            [`${prefixClass}-status-dot-color-${color}`]:
              color && INNER_COLOR.includes(color),
            [`${prefixClass}-status-dot-${status}`]: status,
          })}
        />
      ) : null}
      {text ? (
        <span className={`${prefixClass}-status-text`}>{text}</span>
      ) : null}
      {children}
      {typeof count === 'number' ? (
        <>
          {dot ? (
            <span className={`${prefixClass}-dot`} />
          ) : (
            <span
              className={classnames(`${prefixClass}-count`, {
                [`${prefixClass}-count-size-${size}`]: size === 'small',
              })}
            >
              {count}
            </span>
          )}
        </>
      ) : null}
    </span>
  )
}

export default Badge
