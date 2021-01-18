import React from 'react'
import Switch from '.'

import '../style/storybook.scss'

export default {
  title: 'Switch',
  component: Switch,
}

export const Default = () => (
  <div>
    <div>
      <Switch checked />
    </div>
    <div>
      <Switch size="small" />
    </div>
    <div>
      <Switch disabled />
    </div>
    <div>
      <Switch disabled size="small" />
    </div>
    <div>
      <Switch unCheckedChildren="关闭" checkedChildren="开启" />
    </div>
    <div>
      <Switch size="small" unCheckedChildren="关闭" checkedChildren="开启" />
    </div>
    <div>
      <Switch disabled unCheckedChildren="关闭" checkedChildren="开启" />
    </div>
    <Switch
      defaultChecked
      disabled
      size="small"
      unCheckedChildren="关闭"
      checkedChildren="开启"
    />
  </div>
)
