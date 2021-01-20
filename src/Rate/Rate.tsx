import React from 'react'
import classnames from 'classnames'

import { RateProps } from './Rate.types'

import './Rate.scss'
import { PREFIX_CLASS } from '../constants'

const Rate: React.FC<RateProps> = ({
  allowHalf,
  character = '❤',
  activeCharacter,
  count = 5,
  value,
  onChange,
  className,
  style,
  prefixCls = PREFIX_CLASS,
}) => {
  const prefixClass = `${prefixCls}-rate`
  const [innerValue, setInnerValue] = React.useState<undefined | number>()
  const [hoverValue, setHoverValue] = React.useState<undefined | number>()

  React.useEffect(() => {
    setInnerValue(value)
  }, [value])

  const onClick = React.useCallback(
    (itemValue: number) => {
      setInnerValue(itemValue)
      if (typeof onChange === 'function') {
        onChange(itemValue)
      }
    },
    [onChange]
  )

  const onMouseEnter = (itemValue: number) => () => {
    setHoverValue(itemValue)
  }

  function onMouseLeave() {
    setHoverValue(undefined)
  }

  const isActive = React.useCallback(
    (val: number) => {
      const v = hoverValue || innerValue
      return Boolean(v && v >= val)
    },
    [hoverValue, innerValue]
  )

  const renderStar = React.useCallback(
    (index: number, itemValue: number) => {
      if (isActive(itemValue) && activeCharacter) {
        return typeof activeCharacter === 'function'
          ? activeCharacter(index)
          : activeCharacter
      }
      return typeof character === 'function' ? character(index) : character
    },
    [activeCharacter, character, isActive]
  )

  const renderItem = React.useCallback(
    index => {
      const halfValue = index + 0.5
      const fullValue = index + 1
      return (
        <>
          {allowHalf ? (
            <div
              className={`${prefixClass}-star-first`}
              onMouseEnter={onMouseEnter(halfValue)}
              onClick={() => onClick(halfValue)}
            >
              {renderStar(index, halfValue)}
            </div>
          ) : null}
          <div
            className={`${prefixClass}-star-second`}
            onMouseEnter={onMouseEnter(fullValue)}
            onClick={() => onClick(fullValue)}
          >
            {renderStar(index, fullValue)}
          </div>
        </>
      )
    },
    [allowHalf, onClick, prefixClass, renderStar]
  )

  const getStarClassName = React.useCallback(
    (index: number) => {
      const v = hoverValue || innerValue
      if (!v) {
        return
      }
      if (v >= index + 1) {
        return `${prefixClass}-star-full`
      }
      if (v > index && v < index + 1) {
        return `${prefixClass}-star-half`
      }
    },
    [hoverValue, innerValue, prefixClass]
  )

  return (
    <div
      style={style}
      onMouseLeave={onMouseLeave}
      className={classnames(prefixClass, className)}
    >
      {new Array(count).fill(undefined).map((_, index) => {
        return (
          <div
            key={index}
            className={classnames(
              `${prefixClass}-star`,
              getStarClassName(index)
            )}
          >
            {renderItem(index)}
          </div>
        )
      })}
    </div>
  )
}

export default Rate
