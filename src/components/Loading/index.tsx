// lib
import React from 'react'
import classnames from 'classnames'

import { IconLoading } from '../Icons'

// styles
import './Loading.scss'

import { PREFIX_CLASS } from '../../constants'

const Melody = () => (
  <div className={`${PREFIX_CLASS}-loading-melody`}>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
)

const Ellipsis = () => (
  <div className={`${PREFIX_CLASS}-loading-ellipsis`}>
    <span />
  </div>
)

interface LoadingProps {
  className?: string
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <IconLoading
      className={classnames(`${PREFIX_CLASS}-loading-icon`, className)}
    />
  )
}

Loading.Ellipsis = Ellipsis
Loading.Melody = Melody

export default Loading
