import React from 'react'
import Badge from '.'

import { INNER_COLOR } from '../constants'

import '../style/storybook.scss'

export default {
  title: 'Badge',
}

function InnerChildren() {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 40,
        height: 40,
        backgroundColor: '#d8d8d8',
      }}
    ></span>
  )
}

export const Default = () => {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Badge count={20} style={{ marginRight: 10 }}>
          <InnerChildren />
        </Badge>
        <Badge dot count={20} style={{ marginRight: 10 }}>
          <InnerChildren />
        </Badge>
        <Badge count={200} size="small">
          <InnerChildren />
        </Badge>
      </div>
      <div>
        <div style={{ float: 'left', marginRight: 50 }}>
          {INNER_COLOR.map(color => (
            <div key={color}>
              <Badge color={color} text={color} />
            </div>
          ))}
        </div>
        <div>
          <div>
            <Badge style={{ marginRight: 7 }} status="default" />
            <Badge style={{ marginRight: 7 }} status="error" />
            <Badge style={{ marginRight: 7 }} status="processing" />
            <Badge style={{ marginRight: 7 }} status="success" />
            <Badge style={{ marginRight: 7 }} status="warning" />
            <div>
              <Badge status="default" text="Default" />
            </div>
            <div>
              <Badge status="error" text="Error" />
            </div>
            <div>
              <Badge status="processing" text="Processing" />
            </div>
            <div>
              <Badge status="success" text="Success" />
            </div>
            <div>
              <Badge status="warning" text="Warning" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
