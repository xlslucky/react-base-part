import React from 'react'
import Radio from '.'

import '../style/storybook.scss'

export default {
  title: 'Radio',
}

export const Default = () => (
  <>
    <div>
      <Radio>default</Radio>
      <Radio checked>checked</Radio>
      <Radio disabled>disabled</Radio>
      <Radio checked disabled>
        checked disabled
      </Radio>
      <Radio defaultChecked>defaultChecked</Radio>
    </div>
    <div>
      <Radio.Group>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={4}>4</Radio>
      </Radio.Group>
    </div>
  </>
)
