import React from 'react'
import classnames from 'classnames'

import { SelectProps } from './Select.types'

import Trigger from '../Trigger'

import './Select.scss'
import '../style/animation/slide.scss'
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
  // allowClear,
  // TODO size
  // size,
  prefixCls = PREFIX_CLASS,
}) => {
  const prefixClass = `${prefixCls}-select`
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
        <div className={`${prefixClass}-selection-wrapper`}>
          <div className={`${prefixClass}-selection`}>
            {React.Children.map(children, (option: React.ReactElement) => {
              const { props } = option
              const checked = innerValue === props.value
              return React.cloneElement(option as React.ReactElement, {
                ...props,
                className: classnames(props.className, {
                  [`${prefixClass}-selection-item-active`]: checked,
                }),
                onClick: handleItem(props.value),
              })
            })}
          </div>
        </div>
      }
    >
      <div
        className={classnames(`${prefixClass}-selector`, className)}
        style={style}
      >
        <span className={`${prefixClass}-value`}>
          {selected || (
            <span className={`${prefixClass}-placeholder`}>{placeholder}</span>
          )}
        </span>
        <span className={`${prefixClass}-opts`}>
          <IconArrowBottom className={`${prefixClass}-arrow-icon`} />
        </span>
      </div>
    </Trigger>
  )
}

export default Select
