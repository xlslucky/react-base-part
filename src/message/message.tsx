import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'

import { guid } from '../utils'
import {
  DURATION,
  MESSAGE_TYPE_CLASSNAME,
  MESSAGE_TYPE_ICON,
} from './constants'

import './message.scss'
import { MessageType, OptionProps, MessageProps } from './message.types'

function Message({
  option,
  type,
  onClose,
}: MessageProps & { onClose(): void }) {
  const thisRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setTimeout(() => {
      const notice = thisRef.current
      notice?.classList.add('rbp-message-move-leave')
    }, option.duration)
  }, [option.duration])

  React.useEffect(() => {
    const notice = thisRef.current
    notice?.addEventListener('animationend', () => {
      if (notice.classList.contains('rbp-message-move-appear')) {
        notice.classList.remove('rbp-message-move-appear')
      } else if (notice.classList.contains('rbp-message-move-leave')) {
        notice.classList.remove('rbp-message-move-leave')
        onClose()
        if (typeof option.onClose === 'function') {
          option.onClose()
        }
      }
    })
  }, [onClose, option, option.onClose])

  return (
    <div
      className={classnames('rbp-message-notice', 'rbp-message-move-appear')}
      ref={thisRef}
    >
      <div
        className={classnames(
          'rbp-message-notice-content',
          MESSAGE_TYPE_CLASSNAME[type],
          option.className
        )}
      >
        {option.icon
          ? option.icon
          : React.createElement(MESSAGE_TYPE_ICON[type], {
              className: classnames('rbp-message-icon'),
            })}
        <span className="rbp-message-content">{option.content}</span>
      </div>
    </div>
  )
}

type MessageListItem = MessageProps & { id: string }

const message = (() => {
  const container = document.createElement('div')
  let queue: MessageListItem[] = []

  function renderMessage() {
    ReactDOM.render(
      <React.Fragment>
        {queue.map(message => (
          <Message
            {...message}
            key={message.id}
            onClose={() => {
              queue = queue.filter(item => item.id !== message.id)
              renderMessage()
            }}
          />
        ))}
      </React.Fragment>,
      container
    )
  }

  function appendMessage(option: OptionProps, type: MessageType) {
    queue.push({ option, type, id: guid() })

    if (!document.body.contains(container)) {
      container.className = 'rbp-message-container'
      document.body.appendChild(container)
    }

    renderMessage()
  }

  const toast = (type: MessageType) => (
    content: string,
    duration: number = DURATION,
    onClose?: () => void
  ) => {
    appendMessage({ content, duration, onClose }, type)
  }

  return {
    info: toast(MessageType.Info),
    success: toast(MessageType.Success),
    warn: toast(MessageType.Warn),
    error: toast(MessageType.Error),
  }
})()

export default message
