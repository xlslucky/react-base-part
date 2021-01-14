import React from 'react'
import classnames from 'classnames'

import { TooltipProps } from './Tooltip.types'

import Trigger from '../Trigger/Trigger'
import TriggerArrow from '../components/TriggerArrow'

import {
  getSlideAnimationClassNames,
  PLACEMENT_MAP_SUMMARIZE,
} from '../utils/trigger'

import './Tooltip.scss'
import '../style/animation/slide.scss'
import { PREFIX_CLASS } from '../constants'

const Tooltip: React.FC<TooltipProps> = ({
  children,
  placement = 'topCenter',
  trigger = ['hover'],
  title,
  getPopupContainer,
  prefixCls = PREFIX_CLASS,
}) => {
  const [enterClassName, leaveClassName] = getSlideAnimationClassNames(
    placement
  )

  return (
    <Trigger
      getPopupContainer={getPopupContainer}
      placement={placement}
      trigger={trigger}
      enterClassName={enterClassName}
      leaveClassName={leaveClassName}
      popup={
        <div
          className={classnames(
            `${prefixCls}-tooltip`,
            `${prefixCls}-tooltip-${PLACEMENT_MAP_SUMMARIZE[placement]}`
          )}
        >
          <div className={`${prefixCls}-tooltip-content`}>
            <TriggerArrow
              placement={placement}
              className={`${prefixCls}-tooltip-arrow`}
            />
            <div className={`${prefixCls}-tooltip-inner`}>{title}</div>
          </div>
        </div>
      }
    >
      {children}
    </Trigger>
  )
}

export default Tooltip
