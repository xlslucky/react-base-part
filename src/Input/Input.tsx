import React from 'react'
import classnames from 'classnames'

import { InputProps, UiEventsKey } from './Input.types'

import './Input.scss'

import { PREFIX_CLASS } from '../constants'

const Input: React.FC<InputProps> = ({
  bordered = true,
  // TODO 禁用
  // disabled,
  className,
  addonAfter,
  addonBefore,
  prefixCls = PREFIX_CLASS,
  type = 'text',
  onPressEnter,
  ...restProps
}) => {
  return (
    <div
      className={classnames(
        `${prefixCls}-input-wrapper`,
        { [`${prefixCls}-input-border`]: bordered },
        className
      )}
    >
      {addonBefore}
      <input
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === UiEventsKey.Enter) {
            if (typeof onPressEnter === 'function') {
              onPressEnter(event)
            }
          }
        }}
        className={`${prefixCls}-input`}
        type={type}
        {...restProps}
      />
      {addonAfter}
    </div>
  )
}

export default Input
