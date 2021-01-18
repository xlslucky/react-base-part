import React from 'react'
import Button from '.'

import { ButtonProps } from './Button.types'

import '../style/storybook.scss'

export default {
  title: 'Button',
  component: Button,
}

type ExampleProps = Array<{
  title: string
  props: Partial<ButtonProps> & { label?: string }
  list: Array<Partial<ButtonProps> & { label?: string }>
}>

const BASE_LIST: Array<Partial<ButtonProps> & { label?: string }> = [
  { type: 'default' },
  { type: 'primary' },
  { type: 'danger' },
  { type: 'ghost' },
]

const BUTTON_MAP: ExampleProps = [
  {
    title: 'base button',
    props: { label: 'Base Button' },
    list: [...BASE_LIST, { type: 'ghost', loading: true }],
  },
  {
    title: 'base disabeld button',
    props: { label: 'Base Disabled Button', disabled: true },
    list: [...BASE_LIST, { type: 'ghost', loading: true }],
  },
  {
    title: 'base loading button',
    props: { label: 'Base Loading Button', loading: true },
    list: [...BASE_LIST],
  },
  {
    title: 'large button',
    props: { label: 'Large Button', size: 'large' },
    list: [...BASE_LIST, { type: 'ghost', loading: true }],
  },
  {
    title: 'large loading button',
    props: { label: 'Large Loading Button', size: 'large', loading: true },
    list: [...BASE_LIST],
  },
  {
    title: 'small button',
    props: { label: 'Large Button', size: 'small' },
    list: [...BASE_LIST, { type: 'ghost', loading: true }],
  },
  {
    title: 'small loading button',
    props: { label: 'Large Loading Button', size: 'small', loading: true },
    list: [...BASE_LIST],
  },
]

export const Default = () => (
  <div>
    {BUTTON_MAP.map((item, gIndex) => (
      <div key={gIndex}>
        <h1>{item.title}</h1>
        <div>
          {item.list.map((props, pIndex) => (
            <Button
              style={{ marginRight: 10 }}
              key={pIndex}
              {...item.props}
              {...props}
            >
              {item.props.label || props.label}
            </Button>
          ))}
        </div>
      </div>
    ))}
  </div>
)
