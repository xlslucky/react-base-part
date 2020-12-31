import React from 'react'
import message from './message'
import Button from '../Button'

export default {
  title: 'message',
}

export const Default = () => {
  return (
    <div>
      <Button
        style={{ marginRight: 10 }}
        onClick={() => message.info('This is an info message')}
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
