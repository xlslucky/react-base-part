import React from 'react'
import classnames from 'classnames'

import { DropdownProps } from './Dropdown.types'
import { Trigger } from '../Trigger'

import './Dropdown.scss'
import '../style/animation/slide.scss'
import {
  getSlideAnimationClassNames,
  getOffsetByPlacement,
} from '../utils/trigger'
import { PREFIX_CLASS } from '../constants'

const Dropdown: React.FC<DropdownProps> = ({
  // TODO disabled
  disabled,
  children,
  overlay,
  trigger = ['hover'],
  placement = 'bottomLeft',
  getPopupContainer,
  prefixCls = PREFIX_CLASS,
}) => {
  const [enterClassName, leaveClassName] = getSlideAnimationClassNames(
    placement
  )

  return (
    <Trigger
      prefixCls={prefixCls}
      popup={
        <div className={classnames(`${prefixCls}-dropdown`)}>{overlay}</div>
      }
      placement={placement}
      trigger={trigger}
      enterClassName={enterClassName}
      leaveClassName={leaveClassName}
      getPopupContainer={getPopupContainer}
      offset={getOffsetByPlacement(placement, 4)}
      stretch="minWidth"
    >
      {children}
    </Trigger>
  )
}

export default Dropdown
