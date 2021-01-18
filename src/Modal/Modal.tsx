import React from 'react'

import { ModalProps } from './Modal.types'

import Button from '../Button'
import ModalContent from './components/ModalContent'
import Portal from '../utils/Portal'

import './Modal.scss'
import { PREFIX_CLASS } from '../constants'
import { IconClose } from '../components/Icons'

const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  children,
  width = 520,
  onCancel,
  onOk,
  closable = true,
  maskClosable = true,
  confirmLoading,
  footer,
  okText = '确定',
  cancelText = '取消',
  getContainer = () => document.body,
  prefixCls = PREFIX_CLASS,
  ...props
}) => {
  const prefixClass = `${prefixCls}-modal`
  const [primaryLoading, setPrimaryLoading] = React.useState(false)

  const container = getContainer()

  async function handleOk(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (typeof onOk === 'function') {
      try {
        setPrimaryLoading(true)
        await onOk(event)
      } finally {
        setPrimaryLoading(false)
      }
    }
  }

  function renderModal() {
    return (
      <ModalContent
        width={width}
        onClickMask={onCancel}
        maskClosable={maskClosable}
        prefixCls={prefixCls}
        {...props}
      >
        {closable ? (
          <div className={`${prefixClass}-close-btn`} onClick={onCancel}>
            <span className={`${prefixClass}-close`}>
              <IconClose className={`${prefixClass}-close-icon`} />
            </span>
          </div>
        ) : null}
        {title ? <div className={`${prefixClass}-header`}>{title}</div> : null}
        <div className={`${prefixClass}-body`}>{children}</div>
        {footer === null ? null : (
          <div className={`${prefixClass}-footer`}>
            {footer || (
              <>
                <Button onClick={onCancel} className={`${prefixClass}-opt-btn`}>
                  {cancelText}
                </Button>
                <Button
                  onClick={handleOk}
                  className={`${prefixClass}-opt-btn`}
                  type="primary"
                  loading={primaryLoading || confirmLoading}
                >
                  {okText}
                </Button>
              </>
            )}
          </div>
        )}
      </ModalContent>
    )
  }

  if (!visible) {
    return null
  }

  return <Portal getContainer={() => container}>{renderModal()}</Portal>
}

export default Modal
