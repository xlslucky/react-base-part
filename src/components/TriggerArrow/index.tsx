// lib
import React from 'react'
import classnames from 'classnames'

// components
import Arrow from '../Arrow'
import { TriggerArrowProps } from './TriggerArrow.types'

// styles
import './TriggerArrow.scss'
import { getArrowPlace, PLACEMENT_MAP } from '../../utils/trigger'

export default function TriggerArrow({
  placement,
  className,
}: TriggerArrowProps) {
  return (
    <Arrow
      className={classnames(
        'rbp-trigger-arrow',
        `rbp-trigger-arrow-${PLACEMENT_MAP[placement]}`,
        className
      )}
      place={getArrowPlace(placement)}
    />
  )
}
