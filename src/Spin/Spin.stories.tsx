import React from 'react'
import Spin from '.'

import '../style/storybook.scss'

export default {
  title: 'Spin',
  components: Spin,
}

export const Default = () => (
  <Spin loading>
    <div style={{ height: 100, background: 'red' }}>测试呀</div>
  </Spin>
)
