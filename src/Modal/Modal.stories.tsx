import React from 'react'
import Modal from '.'
import confirm from './components/confirm'

import Button from '../Button'

import '../style/storybook.scss'

export default {
  title: 'Modal',
  component: Modal,
  subcomponents: { confirm },
}

export const Default = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>测试 Modal</Button>
      &emsp;
      <Button
        onClick={() => {
          Modal.confirm({ title: '测试' })
        }}
      >
        测试 Modal.confirm
      </Button>
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        modal
      </Modal>
    </div>
  )
}
