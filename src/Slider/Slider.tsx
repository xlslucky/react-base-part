import React from 'react'
import classnames from 'classnames'

import { SliderProps } from './Slider.types'

import './Slider.scss'
import { PREFIX_CLASS } from '../constants'
import useSlider from '../hooks/useSlider'

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  step = 1,
  min = 0,
  max = 100,
  smooth,
  renderHandle,
  className,
  prefixCls = PREFIX_CLASS,
}) => {
  const prefixClass = `${prefixCls}-slider`
  const railRef = React.useRef<HTMLDivElement>(null)
  const handleRef = React.useRef<HTMLDivElement>(null)

  const [innerValue, setInnerValue] = React.useState(0)

  React.useEffect(() => {
    setInnerValue(value || 0)
  }, [value])

  function onSuccess(value: number) {
    setInnerValue(value)
    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  const { onMouseDown, onTouchStart, onClick, left, nextValue } = useSlider({
    railRef,
    handleRef,
    step,
    min,
    max,
    smooth,
    value: innerValue,
    onSuccess,
  })

  return (
    <div className={classnames(prefixClass, className)}>
      <div onClick={onClick} ref={railRef} className={`${prefixClass}-rail`} />
      <div
        onClick={onClick}
        className={`${prefixClass}-track`}
        style={{ width: left }}
      />
      {typeof renderHandle === 'function' ? (
        React.cloneElement(renderHandle({ left, value: nextValue }), {
          ref: handleRef,
          onMouseDown,
          onTouchStart,
        })
      ) : (
        <div
          style={{ left }}
          ref={handleRef}
          className={classnames(
            `${prefixClass}-handle-base`,
            `${prefixClass}-handle`
          )}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        />
      )}
    </div>
  )
}

export default Slider
