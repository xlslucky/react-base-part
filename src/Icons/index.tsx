import React from 'react'

import * as icons from './Icons'

export default () => {
  return (
    <div>
      {Object.entries(icons).map(([iconName, icon]) => {
        return <div key={iconName}>{React.createElement(icon)}</div>
      })}
    </div>
  )
}
