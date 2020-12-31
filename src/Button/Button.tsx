import React from 'react'
import classnames from 'classnames'

import { ButtonProps } from './Button.types'

import './Button.scss'

import { PREFIX_CLASS } from '../constants'
import Loading from '../components/Loading'

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
      prefixCls = PREFIX_CLASS,
      ...restProps
    },
    ref
  ) => {
    const buttonClassName = React.useMemo(() => {
      return classnames(`${prefixCls}-btn`, className, {
        [`${prefixCls}-btn-theme-${type}`]: type,
        [`${prefixCls}-btn-disabled`]: disabled,
        [`${prefixCls}-btn-loading`]: loading,
        [`${prefixCls}-btn-block`]: block,
        [`${prefixCls}-btn-circle`]: circle,
      })
    }, [prefixCls, className, type, disabled, loading, block, circle])

    return (
      <button
        style={style}
        disabled={disabled}
        type={htmlType}
        className={buttonClassName}
        onClick={onClick}
        ref={ref}
        {...restProps}
      >
        {loading ? (
          <Loading className={`${prefixCls}-btn-loading-icon`} />
        ) : null}
        <span>{children}</span>
      </button>
    )
  }
)

export default Button
