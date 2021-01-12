import React from 'react'
import classnames from 'classnames'

import { TagProps } from './Tag.types'

import './Tag.scss'
import { PREFIX_CLASS, INNER_COLOR } from '../constants'

const Tag: React.FC<TagProps> = ({
  color,
  children,
  className,
  prefixCls = PREFIX_CLASS,
  onClick,
  style,
}) => {
  const prefixClass = `${prefixCls}-tag`

  const innerStyle = React.useMemo(() => {
    if (color && !INNER_COLOR.includes(color)) {
      return {
        ...style,
        backgroundColor: color,
      }
    }
    return style
  }, [color, style])

  return (
    <span
      className={classnames(
        prefixClass,
        {
          [`${prefixClass}-color-${color}`]:
            color && INNER_COLOR.includes(color),
          [`${prefixClass}-has-color`]: color && !INNER_COLOR.includes(color),
        },
        className
      )}
      style={innerStyle}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default Tag
