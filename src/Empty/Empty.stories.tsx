import React from 'react'
import Empty from '.'

import Button from '../Button'

import '../style/storybook.scss'

export default {
  title: 'Empty',
}

export const Default = () => (
  <Empty description="这里什么都没有">
    <Button>添加</Button>
  </Empty>
)
