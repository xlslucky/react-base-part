import React from 'react'
import Menu from '.'

import '../style/storybook.scss'

export default {
  title: 'Menu',
}

export const Default = () => (
  <Menu>
    <Menu.Item key="1">1</Menu.Item>
    <Menu.Item key="2">2</Menu.Item>
  </Menu>
)
