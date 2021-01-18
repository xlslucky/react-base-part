import React from 'react'
import Tag from '.'

import '../style/storybook.scss'

export default {
  title: 'Tag',
  component: Tag,
}

export const Default = () => (
  <div>
    <Tag>default</Tag>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <Tag color="#13c2c2">#13c2c2</Tag>
  </div>
)
