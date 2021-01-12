import React from 'react'
import Badge from '.'

import { INNER_COLOR } from '../constants'

import '../style/storybook.scss'

export default {
  title: 'Badge',
}

export const Default = () => {
  return (
    <div>
      <div>
        <Badge count={20} style={{ marginRight: 10 }}>
          <span
            style={{
              display: 'inline-block',
              width: 40,
              height: 40,
              backgroundColor: '#d8d8d8',
            }}
          >
            哈
          </span>
        </Badge>
        <Badge dot count={20} style={{ marginRight: 10 }}>
          <span
            style={{
              display: 'inline-block',
              width: 40,
              height: 40,
              backgroundColor: '#d8d8d8',
            }}
          >
            哈
          </span>
        </Badge>
        <Badge count={200} size="small">
          <span
            style={{
              display: 'inline-block',
              width: 40,
              height: 40,
              backgroundColor: '#d8d8d8',
            }}
          >
            哈
          </span>
        </Badge>
      </div>
      <div>
        {INNER_COLOR.map(color => (
          <div key={color}>
            <Badge color={color} text={color} />
          </div>
        ))}
      </div>
    </div>
  )
}
