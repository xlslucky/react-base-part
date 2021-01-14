import React from 'react'
import classnames from 'classnames'

import { DropdownProps } from './Dropdown.types'
import Trigger from '../Trigger'

import './Dropdown.scss'
import '../style/animation/slide.scss'
import {
  getSlideAnimationClassNames,
  getOffsetByPlacement,
} from '../utils/trigger'
import { PREFIX_CLASS } from '../constants'

const Dropdown: React.FC<DropdownProps> = ({
  disabled,
  children,
  overlay,
  trigger = ['hover'],
  placement = 'bottomLeft',
  getPopupContainer,
  clickPopupClose = true,
  prefixCls = PREFIX_CLASS,
}) => {
  const [enterClassName, leaveClassName] = getSlideAnimationClassNames(
    placement
  )

  return (
    <Trigger
      prefixCls={prefixCls}
      clickPopupClose={clickPopupClose}
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
      {React.cloneElement(children, { disabled })}
    </Trigger>
  )
}

export default Dropdown
