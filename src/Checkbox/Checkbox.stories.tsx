import React from 'react'
import Checkbox from '.'

import '../style/storybook.scss'

export default {
  title: 'Checkbox',
}

export const Default = () => {
  const [value, setValue] = React.useState([])

  return (
    <div>
      <div>
        <Checkbox />
        <Checkbox disabled />
        <Checkbox defaultChecked />
        <Checkbox defaultChecked disabled />
      </div>
      <div>
        <Checkbox.Group
          value={value}
          onChange={v => {
            setValue(v)
          }}
        >
          <Checkbox value={1}>1</Checkbox>
          <Checkbox value={2}>2</Checkbox>
        </Checkbox.Group>
      </div>
    </div>
  )
}
