import React from 'react'

import { CheckboxGroupProps } from './CheckboxGroup.types'

function CheckboxGroup({
  children,
  disabled,
  defaultValue,
  value,
  onChange,
  className,
}: CheckboxGroupProps) {
  const onChangeCheckbox = (v: React.ReactText) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (typeof onChange === 'function') {
      if (event.target.checked) {
        onChange([...(value || []), v])
      } else {
        onChange((value || []).filter(item => item !== v))
      }
    }
  }

  return (
    <div className={className}>
      {React.Children.map(children, option => {
        const { props } = option
        return React.cloneElement(option, {
          ...props,
          disabled: disabled || props.disabled,
          defaultChecked: defaultValue && defaultValue.includes(props.value),
          checked: value && value.includes(props.value),
          onChange: onChangeCheckbox(props.value),
        })
      })}
    </div>
  )
}

export default CheckboxGroup
