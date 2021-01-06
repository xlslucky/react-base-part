import React from 'react'
import classnames from 'classnames'

import { SelectProps } from './Select.types'

import Trigger from '../Trigger'

import './Select.scss'
import { PREFIX_CLASS } from '../constants'
import {
  getOffsetByPlacement,
  getSlideAnimationClassNames,
} from '../utils/trigger'
import { IconArrowBottom } from '../components/Icons'

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  className,
  style,
  children,
  placeholder,
  // TODO allowClear
  allowClear,
  // TODO size
  size,
  prefixCls = PREFIX_CLASS,
}) => {
  const [enterClassName, leaveClassName] = getSlideAnimationClassNames(
    'bottomLeft'
  )

  const [innerValue, setInnerValue] = React.useState<React.ReactText>()

  React.useEffect(() => {
    setInnerValue(value)
  }, [value])

  const selected = React.useMemo(() => {
    const active = React.Children.toArray(children).find(
      (item: any) => item.props.value === innerValue
    )
    if (active) {
      return (active as React.ReactElement).props.children
    }
    return innerValue
  }, [children, innerValue])

  // function handleClear(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
  //   e.stopPropagation()
  //   if (typeof onChange === 'function') {
  //     onChange(undefined)
  //   }
  // }

  const handleItem = (value: React.ReactText) => () => {
    if (onChange) {
      onChange(value)
    }
    setInnerValue(value)
  }

  return (
    <Trigger
      trigger={['click']}
      placement="bottomLeft"
      stretch="width"
      enterClassName={enterClassName}
      leaveClassName={leaveClassName}
      offset={getOffsetByPlacement('bottomLeft', 4)}
      popup={
        <div className={classnames(`${prefixCls}-select-selection`, className)}>
          {React.Children.map(children, (option: React.ReactElement) => {
            const { props } = option
            const checked = innerValue === props.value
            return React.cloneElement(option as React.ReactElement, {
              ...props,
              className: classnames(props.className, {
                [`${prefixCls}-select-selection-item-active`]: checked,
              }),
              onClick: handleItem(props.value),
            })
          })}
        </div>
      }
    >
      <div className={classnames(`${prefixCls}-select-selector`)} style={style}>
        <span className={`${prefixCls}-select-value`}>
          {selected || (
            <span className={`${prefixCls}-select-placeholder`}>
              {placeholder}
            </span>
          )}
        </span>
        <span className={`${prefixCls}-select-opts`}>
          <IconArrowBottom className={`${prefixCls}-select-arrow-icon`} />
        </span>
      </div>
    </Trigger>
  )
}

export default Select
