import React from 'react'
import Tooltip from './Tooltip'
import Button from '../Button/Button'

import { TooltipProps } from './Tooltip.types'

export default {
  title: 'Tooltip',
}

type GroupType = Partial<TooltipProps & { label: string }>[]

const TITLE = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'

const TOP_GROUP: GroupType = [
  { label: 'TL', placement: 'topLeft' },
  { label: 'Top', placement: 'topCenter' },
  { label: 'TR', placement: 'topRight' },
]
const BOTTOM_GROUP: GroupType = [
  { label: 'BL', placement: 'bottomLeft' },
  { label: 'Bottom', placement: 'bottomCenter' },
  { label: 'BR', placement: 'bottomRight' },
]
const LEFT_GROUP: GroupType = [
  { label: 'LT', placement: 'leftTop' },
  { label: 'Left', placement: 'leftCenter' },
  { label: 'LB', placement: 'leftBottom' },
]
const RIGHT_GROUP: GroupType = [
  { label: 'RT', placement: 'rightTop' },
  { label: 'Right', placement: 'rightCenter' },
  { label: 'RB', placement: 'rightBottom' },
]

export const Default = () => {
  return (
    <div style={{ margin: '0 auto', width: 500, paddingTop: 50 }}>
      <div style={{ marginLeft: 70, marginBottom: 10 }}>
        {TOP_GROUP.map(({ label, ...item }, index) => (
          <Tooltip key={index} title={TITLE} {...item}>
            <Button style={{ width: 70, marginRight: 15 }}>{label}</Button>
          </Tooltip>
        ))}
      </div>
      <div style={{ float: 'left', width: 70 }}>
        {LEFT_GROUP.map(({ label, ...item }, index) => (
          <Tooltip key={index} title={TITLE} {...item}>
            <Button style={{ width: 70, marginBottom: index === 2 ? 0 : 15 }}>
              {label}
            </Button>
          </Tooltip>
        ))}
      </div>
      <div style={{ width: 70, marginLeft: 310 }}>
        {RIGHT_GROUP.map(({ label, ...item }, index) => (
          <Tooltip key={index} title={TITLE} {...item}>
            <Button style={{ width: 70, marginBottom: index === 2 ? 0 : 15 }}>
              {label}
            </Button>
          </Tooltip>
        ))}
      </div>
      <div style={{ marginLeft: 70, marginTop: 10 }}>
        {BOTTOM_GROUP.map(({ label, ...item }, index) => (
          <Tooltip key={index} title={TITLE} {...item}>
            <Button style={{ width: 70, marginRight: 15 }}>{label}</Button>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
