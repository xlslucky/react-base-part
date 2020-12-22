import React from 'react'
import classnames from 'classnames'

import { ButtonProps } from './Button.types'

import { IconLoading } from '../Icons/Icons'

import './Button.scss'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      style,
      disabled,
      htmlType,
      onClick,
      loading,
      type = 'default',
      className,
      block,
      circle,
    },
    ref
  ) => {
    const buttonClassName = React.useMemo(() => {
      return classnames('rbp-btn', className, {
        [`rbp-btn-theme-${type}`]: type,
        'rbp-btn-disabled': disabled,
        'rbp-btn-loading': loading,
        'rbp-btn-block': block,
        'rbp-btn-circle': circle,
      })
    }, [className, disabled, loading, type, block, circle])

    return (
      <button
        style={style}
        disabled={disabled}
        type={htmlType}
        className={buttonClassName}
        onClick={onClick}
        ref={ref}
      >
        {loading ? <IconLoading className="loading-icon" /> : null}
        <span>{children}</span>
      </button>
    )
  }
)

export default Button
