import React from 'react'

import { TriggerProps } from './Trigger.types'

import Portal from '../utils/Portal'

import './Trigger.scss'

import useTriggerStyle from './useTriggerStyle'

const Trigger: React.FC<TriggerProps> = ({
  children,
  placement,
  trigger,
  popup,
  getPopupContainer = () => document.body,
}) => {
  const [visible, setVisible] = React.useState(false)

  const childrenRef = React.useRef<HTMLElement>(null)

  const popupRef = React.useRef<HTMLDivElement>(null)

  const container = getPopupContainer()

  React.useEffect(() => {
    if (container) {
      if (
        !['relative', 'absolute', 'fixed'].includes(
          window.getComputedStyle(container, null).position
        )
      ) {
        container.style.position = 'relative'
      }
    }
  }, [container])

  const { triggerStyle } = useTriggerStyle({
    placement,
    visible,
    childrenRef,
    popupRef,
    container,
  })

  function onClick(event: React.MouseEventHandler<HTMLElement>) {
    setVisible(!visible)
  }

  function onMouseEnter(event: React.MouseEventHandler<HTMLElement>) {
    setVisible(true)
  }

  function onMouseLeave(event: React.MouseEventHandler<HTMLElement>) {
    setVisible(false)
  }

  // TODO 取消不销毁dom，加动画

  return (
    <>
      {React.cloneElement(children, {
        ref: childrenRef,
        onClick,
        onMouseEnter,
        onMouseLeave,
      })}
      {visible ? (
        <Portal getContainer={() => container}>
          <div className="rbp-trigger-portal">
            <div
              ref={popupRef}
              style={{ ...triggerStyle }}
              className="rbp-trigger-container"
            >
              {popup}
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  )
}

export default Trigger
