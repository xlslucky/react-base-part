// lib
import React from 'react'
import classnames from 'classnames'

// components
import Arrow from '../Arrow'
import { TriggerArrowProps } from './TriggerArrow.types'

// styles
import './TriggerArrow.scss'
import { getArrowPlace, PLACEMENT_MAP } from '../../utils/trigger'

import { PREFIX_CLASS } from '../../constants'

export default function TriggerArrow({
  placement,
  className,
  prefixCls = PREFIX_CLASS,
}: TriggerArrowProps) {
  return (
    <Arrow
      className={classnames(
        `${prefixCls}-trigger-arrow`,
        `${prefixCls}-trigger-arrow-${PLACEMENT_MAP[placement]}`,
        className
      )}
      place={getArrowPlace(placement)}
    />
  )
}
