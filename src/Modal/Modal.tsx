import React from 'react'

import { ModalProps } from './Modal.types'

import Button from '../Button'
import ModalContent from './components/ModalContent'
import Portal from '../utils/Portal'

import './Modal.scss'
import classnames from 'classnames'
import { PREFIX_CLASS } from '../constants'
import { IconClose } from '../components/Icons'

const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  children,
  width = 520,
  onCancel,
  onOk,
  className,
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
        className={classnames(className, `${prefixCls}-modal`)}
        prefixCls={prefixCls}
        {...props}
      >
        {closable ? (
          <div className={`${prefixCls}-modal-close-btn`} onClick={onCancel}>
            <span className={`${prefixCls}-modal-close`}>
              <IconClose className={`${prefixCls}-modal-close-icon`} />
            </span>
          </div>
        ) : null}
        {title ? (
          <div className={`${prefixCls}-modal-header`}>{title}</div>
        ) : null}
        <div className={`${prefixCls}-modal-body`}>{children}</div>
        {footer === null ? null : (
          <div className={`${prefixCls}-modal-footer`}>
            {footer || (
              <>
                <Button
                  onClick={onCancel}
                  className={`${prefixCls}-modal-opt-btn`}
                >
                  {cancelText}
                </Button>
                <Button
                  onClick={handleOk}
                  className={`${prefixCls}-modal-opt-btn`}
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
