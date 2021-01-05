import React from 'react'
import Checkbox from './Checkbox'

import '../style/storybook.scss'

export default {
  title: 'Checkbox',
}

export const Default = () => {
  return (
    <div>
      <Checkbox />
      <br />
      <Checkbox disabled />
      <br />
      <Checkbox defaultChecked />
      <br />
      <Checkbox defaultChecked disabled />
    </div>
  )
}
