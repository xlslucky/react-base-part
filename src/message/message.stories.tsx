import React from 'react'
import message from '.'
import Button from '../Button'

import '../style/storybook.scss'

export default {
  title: 'message',
  component: message,
}

export const Default = () => {
  return (
    <div>
      <Button
        style={{ marginRight: 10 }}
        onClick={() => message.info('This is an info message', 10000)}
      >
        Info
      </Button>
      <Button
        style={{ marginRight: 10 }}
        onClick={() => message.success('This is an success message')}
      >
        Success
      </Button>
      <Button
        style={{ marginRight: 10 }}
        onClick={() => message.error('This is an error message')}
      >
        Error
      </Button>
      <Button
        style={{ marginRight: 10 }}
        onClick={() => message.warn('This is an warn message')}
      >
        Warn
      </Button>
    </div>
  )
}
