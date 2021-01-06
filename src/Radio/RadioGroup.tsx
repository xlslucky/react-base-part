import React from 'react'
import classnames from 'classnames'

import { RadioGroupProps } from './RadioGroup.types'

import { isEmpty } from '../utils'
import { PREFIX_CLASS } from '../constants'

import './RadioGroup.scss'

export default function RadioGroup({
  disabled,
  defaultValue,
  value,
  onChange,
  children,
  className,
  prefixCls = PREFIX_CLASS,
}: RadioGroupProps) {
  const [innerValue, setInnerValue] = React.useState<React.ReactText>()

  React.useEffect(() => {
    setInnerValue(value)
  }, [value])

  const onChangeCheckbox = (value: React.ReactText) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (typeof onChange === 'function') {
      onChange(event)
    }
    setInnerValue(value)
  }

  return (
    <div className={classnames(`${prefixCls}-radio-group`, className)}>
      {React.Children.map(children, option => {
        const { props } = option
        // react报受控 非受控组件的错误
        // 不能同时设置defaultChecked和checked 合并 defaultValue 和 value
        const checked = isEmpty(innerValue)
          ? defaultValue === props.value
          : innerValue === props.value
        return React.cloneElement(option, {
          ...props,
          disabled: disabled || props.disabled,
          checked,
          onChange: onChangeCheckbox(props.value),
          prefixCls: prefixCls || props.prefixCls,
        })
      })}
    </div>
  )
}
