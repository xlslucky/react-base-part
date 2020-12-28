import React from 'react'

import { TriggerProps } from './Trigger.types'

import Portal from '../utils/Portal'

import './Trigger.scss'

import useTriggerStyle from './useTriggerStyle'

const Trigger: React.FC<TriggerProps> = ({
  children,
  placement,
  destroyPopupOnHide = false,
  trigger,
  popup,
  getPopupContainer = () => document.body,
  enterClassName,
  leaveClassName,
}) => {
  const [visible, setVisible] = React.useState(false)
  const [showOverlay, setShowOverlay] = React.useState(false)

  const childrenRef = React.useRef<HTMLElement>(null)
  const popupRef = React.useRef<HTMLDivElement>(null)

  const container = getPopupContainer()

  React.useEffect(() => {
    if (visible) {
      setShowOverlay(true)
    }
  }, [visible])

  React.useEffect(() => {
    if (showOverlay && enterClassName && leaveClassName) {
      const node = popupRef.current
      node?.addEventListener('animationend', () => {
        // 动画结束删除className
        if (node.classList.contains(enterClassName)) {
          node.classList.remove(enterClassName)
        }
        if (node.classList.contains(leaveClassName)) {
          node.classList.remove(leaveClassName)
          node.classList.add('trigger-hidden')
          if (destroyPopupOnHide) {
            setShowOverlay(false)
          }
        }
      })
    }
  }, [destroyPopupOnHide, enterClassName, leaveClassName, showOverlay])

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

  const { triggerStyle, calcStyleEnd } = useTriggerStyle({
    placement,
    visible,
    childrenRef,
    popupRef,
    container,
  })

  React.useEffect(() => {
    if (visible) {
      const node = popupRef.current
      node?.classList.remove('trigger-hidden')
      if (enterClassName && calcStyleEnd) {
        node?.classList.add(enterClassName)
      }
    } else {
      if (leaveClassName) {
        const node = popupRef.current
        node?.classList.add(leaveClassName)
      }
    }
  }, [enterClassName, leaveClassName, calcStyleEnd, visible])

  function onClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (trigger.includes('click')) {
      setVisible(!visible)
    }
  }

  function onMouseEnter(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (trigger.includes('hover')) {
      setVisible(true)
    }
  }

  function onMouseLeave(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (trigger.includes('hover')) {
      setVisible(false)
    }
  }

  return (
    <>
      {React.cloneElement(children, {
        ref: childrenRef,
        onClick,
        onMouseEnter,
        onMouseLeave,
      })}
      {visible || showOverlay ? (
        <Portal getContainer={() => container}>
          <div className="rbp-trigger-portal">
            <div
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              ref={popupRef}
              style={triggerStyle}
              className={'rbp-trigger-container'}
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
