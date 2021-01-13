import React from 'react'
import classnames from 'classnames'

import { SwitchProps } from './Switch.types'

import './Switch.scss'
import { PREFIX_CLASS } from '../constants'

const Switch: React.FC<SwitchProps> = ({
  checked,
  size,
  checkedChildren,
  unCheckedChildren,
  disabled,
  onChange,
  className,
  defaultChecked = false,
  prefixCls = PREFIX_CLASS,
}) => {
  const prefixClass = `${prefixCls}-switch`
  const [innerChecked, setInnerChecked] = React.useState(defaultChecked)

  React.useEffect(() => {
    if (typeof checked === 'boolean') {
      setInnerChecked(checked)
    }
  }, [checked])

  function handleSwitch(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const flag = !innerChecked
    setInnerChecked(flag)
    if (typeof onChange === 'function') {
      onChange(flag)
    }
  }

  return (
    <button
      disabled={disabled}
      className={classnames(prefixClass, {
        [`${prefixClass}-size-${size}`]: size === 'small',
        [`${prefixClass}-checked`]: innerChecked,
        [`${prefixClass}-disabled`]: disabled,
      })}
      onClick={handleSwitch}
    >
      <div className={`${prefixClass}-handle`}></div>
      <span className={`${prefixClass}-inner`}>
        {innerChecked ? checkedChildren : unCheckedChildren}
      </span>
    </button>
  )
}

export default Switch
