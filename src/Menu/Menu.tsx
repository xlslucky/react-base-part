import React from 'react'

import { MenuProps } from './Menu.types'

import './Menu.scss'
import { PREFIX_CLASS } from '../constants'

const Menu: React.FC<MenuProps> = ({
  children,
  defaultSelectedKeys = [],
  onClick,
  prefixCls = PREFIX_CLASS,
}) => (
  <div className={`${prefixCls}-menu`}>
    {React.Children.map(children, (item: React.ReactElement) => {
      const itemKey = item.key as React.ReactText
      return (
        <>
          {React.cloneElement(item, {
            onClick: () => {
              if (typeof onClick === 'function') {
                onClick({ item, key: itemKey })
              }
            },
            prefixCls,
            active: defaultSelectedKeys?.includes(itemKey),
          })}
        </>
      )
    })}
  </div>
)

export default Menu
