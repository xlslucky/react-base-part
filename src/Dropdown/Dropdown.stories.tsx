import React from 'react'
import Dropdown from './Dropdown'

import Button from '../Button'

import '../style/storybook.scss'

import { DropdownProps } from './Dropdown.types'
import { TriggerArrayType } from '../Trigger/Trigger.types'

export default {
  title: 'Dropdown',
}

type GroupType = Partial<DropdownProps & { label: string }>[]

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

export const Default = () => (
  <div style={{ margin: '0 auto', width: 500, paddingTop: 50 }}>
    <div style={{ marginLeft: 70, marginBottom: 10 }}>
      {TOP_GROUP.map(({ label, ...item }, index) => (
        <Dropdown disabled key={index} overlay={<span>{TITLE}</span>} {...item}>
          <Button style={{ width: 70, marginRight: 15 }}>{label}</Button>
        </Dropdown>
      ))}
    </div>
    <div style={{ marginLeft: 70, marginTop: 10 }}>
      {BOTTOM_GROUP.map(({ label, ...item }, index) => (
        <Dropdown key={index} overlay={<span>{TITLE}</span>} {...item}>
          <Button style={{ width: 70, marginRight: 15 }}>{label}</Button>
        </Dropdown>
      ))}
    </div>
  </div>
)