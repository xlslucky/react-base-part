import React from 'react'
import Rate from '.'

import '../style/storybook.scss'

export default {
  title: 'Rate',
  component: Rate,
}

export const Default = () => (
  <div>
    <h2>base</h2>
    <Rate />
    <h2>half</h2>
    <Rate allowHalf />
    <h2>character</h2>
    <Rate allowHalf character={index => index + 1} />
    <h2>character</h2>
    <Rate allowHalf character="☆" />
  </div>
)
