// lib
import React from 'react'
import classnames from 'classnames'

import { ArrowProps } from './Arrow.types'

// styles
import './Arrow.scss'

export default function Arrow({ place, className }: ArrowProps) {
  return (
    <span
      className={classnames(
        'rbp-arrow-icon',
        `rbp-arrow-icon-${place}`,
        className
      )}
    ></span>
  )
}
