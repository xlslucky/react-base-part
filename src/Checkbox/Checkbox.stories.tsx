import React from 'react'
import Checkbox from '.'

import '../style/storybook.scss'

export default {
  title: 'Checkbox',
}

export const Default = () => {
  return (
    <div>
      <div>
        <Checkbox>default</Checkbox>
        <Checkbox disabled>disabled</Checkbox>
        <Checkbox defaultChecked>defaultChecked</Checkbox>
        <Checkbox defaultChecked disabled>
          defaultChecked disabled
        </Checkbox>
      </div>
      <div>
        <Checkbox.Group>
          <Checkbox value={1}>1</Checkbox>
          <Checkbox value={2}>2</Checkbox>
          <Checkbox value={3}>3</Checkbox>
          <Checkbox value={4}>4</Checkbox>
        </Checkbox.Group>
      </div>
    </div>
  )
}
