import React from 'react'
import Input from '.'

import '../style/storybook.scss'

export default {
  title: 'Input',
}

export const Default = () => (
  <div>
    <div>
      <h2>default</h2>
      <Input />
    </div>
    <div>
      <h2>size large</h2>
      <Input size="large" />
    </div>
    <div>
      <h2>size small</h2>
      <Input size="small" />
    </div>
    <div>
      <h2>default</h2>
      <Input.Textarea />
    </div>
    <div>
      <h2>size large</h2>
      <Input.Textarea size="large" />
    </div>
    <div>
      <h2>size small</h2>
      <Input.Textarea size="small" />
    </div>
  </div>
)
