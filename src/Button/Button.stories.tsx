import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
}

export const Default = () => (
  <div>
    <Button>Default Button</Button>
    &emsp;
    <Button type="primary">Primary Button</Button>
    &emsp;
    <Button loading>Default Button Loading</Button>
    &emsp;
    <Button type="ghost">Ghost Button</Button>
    &emsp;
    <Button type="ghost" loading>
      Ghost Button Loading
    </Button>
    &emsp;
    <Button type="danger" loading>
      Danger Button Loading
    </Button>
  </div>
)
