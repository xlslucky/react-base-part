import React from 'react'
import classnames from 'classnames'
import { PREFIX_CLASS } from '../constants'

import { CheckboxGroupProps } from './CheckboxGroup.types'

import './CheckboxGroup.scss'

function CheckboxGroup({
  children,
  disabled,
  defaultValue,
  value,
  onChange,
  className,
  prefixCls = PREFIX_CLASS,
}: CheckboxGroupProps) {
  const [innerValue, setInnerValue] = React.useState<React.ReactText[]>([])

  React.useEffect(() => {
    setInnerValue(value || [])
  }, [value])

  const onChangeCheckbox = (value: React.ReactText) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let list = []
    if (event.target.checked) {
      list = [...(innerValue || []), value]
    } else {
      list = (innerValue || []).filter(item => item !== value)
    }
    if (typeof onChange === 'function') {
      onChange(list)
    }
    setInnerValue(list)
  }

  return (
    <div className={classnames(`${prefixCls}-checkbox-group`, className)}>
      {React.Children.map(children, option => {
        const { props } = option
        const defaultChecked =
          defaultValue && defaultValue.includes(props.value)
        const checked = innerValue && innerValue.includes(props.value)
        return React.cloneElement(option, {
          ...props,
          disabled: disabled || props.disabled,
          defaultChecked,
          checked,
          onChange: onChangeCheckbox(props.value),
          prefixCls: prefixCls || props.prefixCls,
        })
      })}
    </div>
  )
}

export default CheckboxGroup
