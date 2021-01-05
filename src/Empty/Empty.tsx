import React from 'react'
import classnames from 'classnames'

import { EmptyProps } from './Empty.types'

import './Empty.scss'

import { PREFIX_CLASS } from '../constants'

const Empty: React.FC<EmptyProps> = ({
  description,
  image = '//static.linghemedia.com.cn/assets/applet/applet-empty.png',
  imageStyle,
  className,
  prefixCls = PREFIX_CLASS,
  children,
}) => (
  <div className={classnames(`${prefixCls}-empty`, className)}>
    <div className={`${prefixCls}-empty-image`} style={imageStyle}>
      {typeof image === 'string' ? <img src={image} alt="" /> : image}
    </div>
    <div className={`${prefixCls}-empty-description`}>{description}</div>
    {children ? (
      <div className={`${prefixCls}-empty-footer`}>{children}</div>
    ) : null}
  </div>
)

export default Empty
