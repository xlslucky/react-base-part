import React from 'react'

import { TriggerProps } from './Trigger.types'

import Portal from '../utils/Portal'

import './Trigger.scss'

import useTriggerStyle from './useTriggerStyle'

import useClickAway from '../hooks/useClickAway'

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

  useClickAway([childrenRef, popupRef], () => {
    setVisible(false)
  })

  React.useEffect(() => {
    if (visible) {
      setShowOverlay(true)
    }
  }, [visible])

  React.useEffect(() => {
    const node = popupRef.current
    function popupAnimationend({ target }: any) {
      if (!enterClassName || !leaveClassName) {
        return
      }
      // 动画结束删除className
      if (target.classList.contains(enterClassName)) {
        target.classList.remove(enterClassName)
      }
      if (target.classList.contains(leaveClassName)) {
        target.classList.remove(leaveClassName)
        target.classList.add('trigger-hidden')
        if (destroyPopupOnHide) {
          setShowOverlay(false)
        }
      }
    }
    if (showOverlay) {
      node?.addEventListener('animationend', popupAnimationend)
    }
    return () => {
      node?.removeEventListener('animationend', popupAnimationend)
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
      if (enterClassName && leaveClassName && calcStyleEnd) {
        // 进入、离开是需要删除另外一种样式
        node?.classList.remove(leaveClassName)
        node?.classList.add(enterClassName)
      }
    } else {
      const node = popupRef.current
      if (leaveClassName && enterClassName) {
        // 进入、离开是需要删除另外一种样式
        node?.classList.remove(enterClassName)
        node?.classList.add(leaveClassName)
      } else {
        // 没设置动画 直接隐藏
        node?.classList.add('trigger-hidden')
      }
    }
  }, [enterClassName, leaveClassName, calcStyleEnd, visible])

  // TODO 优化 onClick onMouseEnter onMouseLeave 目前不是很流畅

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
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Trigger
