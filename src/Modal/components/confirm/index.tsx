import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../../../Button'
import { IconExclamationCircleFilled } from '../../../components/Icons'

import './confirm.scss'

import ModalContent from '../ModalContent'
import { PREFIX_CLASS } from '../../../constants'
import { ConfirmProps } from './confirm.types'

function Modal({
  title,
  content,
  onCancel,
  onOk,
  removeContainer,
}: ConfirmProps & { removeContainer: () => void }) {
  const prefixClass = `${PREFIX_CLASS}-modal-confirm`
  const [loading, setLoading] = React.useState(false)

  async function handleOk() {
    if (typeof onOk === 'function') {
      try {
        setLoading(true)
        await onOk()
      } finally {
        setLoading(false)
      }
    }
    removeContainer()
  }

  function handleCancel() {
    if (typeof onCancel === 'function') {
      onCancel()
    }
    removeContainer()
  }

  return (
    <ModalContent width={416}>
      <div className={prefixClass}>
        <div className={`${prefixClass}-body`}>
          <div className={`${prefixClass}-body-header`}>
            <IconExclamationCircleFilled
              className={`${prefixClass}-exclamation-icon`}
            />
            <span className={`${prefixClass}-body-title`}>{title}</span>
          </div>
          <div className={`${prefixClass}-body-content`}>{content}</div>
        </div>
        <div className={`${prefixClass}-btns`}>
          <Button className={`${prefixClass}-btn`} onClick={handleCancel}>
            取消
          </Button>
          <Button
            loading={loading}
            className={`${prefixClass}-btn`}
            type="primary"
            onClick={handleOk}
          >
            确定
          </Button>
        </div>
      </div>
    </ModalContent>
  )
}

export default function confirm({
  getContainer = () => document.body,
  ...props
}: ConfirmProps) {
  const container = document.createElement('div')

  function removeContainer() {
    getContainer().removeChild(container)
  }

  ReactDOM.render(
    <Modal {...props} removeContainer={removeContainer} />,
    container
  )

  getContainer().appendChild(container)
}
