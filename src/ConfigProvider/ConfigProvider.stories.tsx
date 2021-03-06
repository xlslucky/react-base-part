import React from 'react'
import ConfigProvider from '.'
import Button from '../Button'
import message from '../message'

import '../style/storybook.scss'

export default {
  title: 'ConfigProvider',
  component: ConfigProvider,
}

export const Default = () => {
  return (
    <ConfigProvider variables={{ 'primary-color': 'blue' }}>
      <Button type="primary" onClick={() => message.success('保存成功')}>
        确定
      </Button>
      <Button type="danger">危险</Button>
    </ConfigProvider>
  )
}
