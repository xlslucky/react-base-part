import React from 'react'
import Button from './Button'

import { ButtonProps } from './Button.types'

import '../style/storybook.scss'

export default {
  title: 'Button',
}

const BUTTON_GROUP: Array<
  Array<{
    props: Partial<ButtonProps>
    label: string
  }>
> = [
  [
    { props: {}, label: 'Default' },
    { props: { type: 'primary' }, label: 'Primary' },
    { props: { type: 'danger' }, label: 'Danger' },
    { props: { type: 'ghost' }, label: 'Ghost' },
  ],
  [
    { props: { loading: true }, label: 'Default Loading' },
    { props: { type: 'primary', loading: true }, label: 'Primary Loading' },
    { props: { type: 'danger', loading: true }, label: 'Danger Loading' },
    { props: { type: 'ghost', loading: true }, label: 'Danger Loading' },
  ],
]

export const Default = () => (
  <div>
    {BUTTON_GROUP.map((list, listIndex) => (
      <div key={listIndex} style={{ marginBottom: 20 }}>
        {list.map((item, index) => (
          <Button style={{ marginRight: 10 }} key={index} {...item.props}>
            {item.label}
          </Button>
        ))}
      </div>
    ))}
  </div>
)
