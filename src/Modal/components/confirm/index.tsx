import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../../../Button'
import { IconExclamationCircleFilled } from '../../../components/Icons'

import './confirm.scss'

import ModalContent from '../ModalContent'
import { PREFIX_CLASS } from '../../../constants'
import { ConfirmProps } from './confirm.types'

const prefixCls = PREFIX_CLASS

function Modal({
  title,
  content,
  onCancel,
  onOk,
  removeContainer,
}: ConfirmProps & { removeContainer: () => void }) {
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
      <div className={`${prefixCls}-modal-confirm`}>
        <div className={`${prefixCls}-modal-confirm-body`}>
          <div className={`${prefixCls}-modal-confirm-body-header`}>
            <IconExclamationCircleFilled
              className={`${prefixCls}-modal-confirm-exclamation-icon`}
            />
            <span className={`${prefixCls}-modal-confirm-body-title`}>
              {title}
            </span>
          </div>
          <div className={`${prefixCls}-modal-confirm-body-content`}>
            {content}
          </div>
        </div>
        <div className={`${prefixCls}-modal-confirm-btns`}>
          <Button
            className={`${prefixCls}-modal-confirm-btn`}
            onClick={handleCancel}
          >
            取消
          </Button>
          <Button
            loading={loading}
            className={`${prefixCls}-modal-confirm-btn`}
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
