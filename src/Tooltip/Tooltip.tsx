import React from 'react'
import classnames from 'classnames'

import { TooltipProps } from './Tooltip.types'

import Trigger from '../Trigger/Trigger'
import TriggerArrow from '../components/TriggerArrow'

import { getSlideAnimationClassNames, PLACEMENT_MAP } from '../utils/trigger'

import './Tooltip.scss'
import '../style/animation.scss'

const Tooltip: React.FC<TooltipProps> = ({
  children,
  placement = 'topCenter',
  trigger = ['hover'],
  title,
  getPopupContainer,
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
            'rbp-tooltip',
            `rbp-tooltip-${PLACEMENT_MAP[placement]}`
          )}
        >
          <div className="rbp-tooltip-content">
            <TriggerArrow placement={placement} className="rbp-tooltip-arrow" />
            <div className="rbp-tooltip-inner">{title}</div>
          </div>
        </div>
      }
    >
      {children}
    </Trigger>
  )
}

export default Tooltip
