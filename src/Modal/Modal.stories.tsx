import React from 'react'
import Modal from '.'

import Button from '../Button'

import '../style/storybook.scss'

export default {
  title: 'Modal',
}

export const Default = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>测试</Button>
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        modal
      </Modal>
      <Button
        onClick={() => {
          Modal.confirm({ title: '测试' })
        }}
      >
        测试confirm
      </Button>
    </div>
  )
}
