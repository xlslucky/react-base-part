import React from 'react'
import Input from '.'

import '../style/storybook.scss'

export default {
  title: 'Input',
}

export const Default = () => (
  <div>
    <div>
      <Input />
    </div>
    <div>
      <Input size="large" />
    </div>
    <div>
      <Input size="small" />
    </div>
  </div>
)
