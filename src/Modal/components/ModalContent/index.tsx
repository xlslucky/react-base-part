// lib
import React from 'react'
import classnames from 'classnames'

// components

// styles
import './ModalContent.scss'
import { PREFIX_CLASS } from '../../../constants'
import { ContentType } from './ModalContent.types'

import '../../../style/animation/move-10.scss'

export default function ModalContent({
  children,
  onClickMask,
  maskClosable,
  width = 416,
  className,
  prefixCls = PREFIX_CLASS,
}: ContentType) {
  const prefixClass = `${prefixCls}-modal`

  return (
    <div className={`${prefixClass}-root`}>
      <div className={`${prefixClass}-mask`} />
      <div
        className={`${prefixClass}-wrap`}
        onClick={
          maskClosable && typeof onClickMask === 'function'
            ? onClickMask
            : undefined
        }
      >
        <div
          className={classnames(prefixClass, className, 'move-up-enter-10')}
          style={{ width }}
          onClick={e => e.stopPropagation()}
        >
          <div className={`${prefixClass}-content`}>{children}</div>
        </div>
      </div>
    </div>
  )
}
