// lib
import React from 'react'
import classnames from 'classnames'
import { MenuItemProps } from './MenuItem.types'
import { PREFIX_CLASS } from '../constants'

// components

// styles
import './MenuItem.scss'

export default function MenuItem({
  children,
  onClick,
  active,
  prefixCls = PREFIX_CLASS,
}: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      className={classnames([`${PREFIX_CLASS}-menu-item`], {
        [`${PREFIX_CLASS}-menu-item-active`]: active,
      })}
    >
      {children}
    </div>
  )
}
