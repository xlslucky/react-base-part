import React from 'react'

import * as icons from '../components/Icons'

export default {
  title: 'inner/Icons',
}

export const Default = () => (
  <div>
    {Object.entries(icons).map(([iconName, icon]) => {
      return (
        <span style={{ marginRight: 10 }} key={iconName}>
          <span style={{ fontSize: 20 }}>{React.createElement(icon)}</span>
          <span>{iconName}</span>
        </span>
      )
    })}
  </div>
)
