import React from 'react'
import Tooltip from '.'
import Button from '../Button'

import { TooltipProps } from './Tooltip.types'
import { TriggerArrayType } from '../Trigger/Trigger.types'

import '../style/storybook.scss'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

type GroupType = Partial<TooltipProps & { label: string }>[]

const TITLE = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'

const trigger: TriggerArrayType = ['hover']

const TOP_GROUP: GroupType = [
  { label: 'TL', trigger, placement: 'topLeft' },
  { label: 'Top', trigger, placement: 'topCenter' },
  { label: 'TR', trigger, placement: 'topRight' },
]
const BOTTOM_GROUP: GroupType = [
  { label: 'BL', trigger, placement: 'bottomLeft' },
  { label: 'Bottom', trigger, placement: 'bottomCenter' },
  { label: 'BR', trigger, placement: 'bottomRight' },
]
const LEFT_GROUP: GroupType = [
  { label: 'LT', trigger, placement: 'leftTop' },
  { label: 'Left', trigger, placement: 'leftCenter' },
  { label: 'LB', trigger, placement: 'leftBottom' },
]
const RIGHT_GROUP: GroupType = [
  { label: 'RT', trigger, placement: 'rightTop' },
  { label: 'Right', trigger, placement: 'rightCenter' },
  { label: 'RB', trigger, placement: 'rightBottom' },
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
