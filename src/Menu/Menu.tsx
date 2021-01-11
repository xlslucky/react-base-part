import React from 'react'

import { MenuProps } from './Menu.types'

import './Menu.scss'
import { PREFIX_CLASS } from '../constants'

const Menu = ({
  children,
  defaultSelectedKeys = [],
  onClick,
  prefixCls = PREFIX_CLASS,
}: MenuProps) => (
  <div className={`${prefixCls}-menu`}>
    {React.Children.map(children, option => {
      if (!option) {
        return null
      }
      const { props } = option
      const itemKey = option.key as React.ReactText
      return React.cloneElement(option, {
        ...props,
        onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          if (typeof props.onClick === 'function') {
            props.onClick(event)
          }
          if (typeof onClick === 'function') {
            onClick({ item: option, key: itemKey })
          }
        },
        prefixCls,
        active: defaultSelectedKeys?.includes(itemKey),
      })
    })}
  </div>
)

export default Menu
