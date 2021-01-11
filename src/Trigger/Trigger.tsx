import React from 'react'

import { TriggerProps } from './Trigger.types'

import useTriggerStyle from './useTriggerStyle'
import useClickAway from '../hooks/useClickAway'
import Portal from '../utils/Portal'

import './Trigger.scss'
import { PREFIX_CLASS } from '../constants'

const Trigger: React.FC<TriggerProps> = ({
  children,
  placement,
  destroyPopupOnHide = false,
  trigger,
  popup,
  getPopupContainer = () => document.body,
  enterClassName,
  leaveClassName,
  prefixCls = PREFIX_CLASS,
  offset,
  stretch,
  zIndex,
}) => {
  const [innerVisible, setVisible] = React.useState(false)
  const [showOverlay, setShowOverlay] = React.useState(false)

  const childrenRef = React.useRef<HTMLElement>(null)
  const popupRef = React.useRef<HTMLDivElement>(null)

  const HIDDEN_CLASS_NAME = `${prefixCls}-trigger-hidden`

  const container = getPopupContainer()

  const finalVisible = React.useMemo(() => {
    return innerVisible
  }, [innerVisible])

  function updateVisible(nextVisible: boolean) {
    setVisible(nextVisible)
  }

  // 点击子元素、浮层以外元素 关闭浮层
  useClickAway([childrenRef, popupRef], () => {
    updateVisible(false)
  })

  React.useEffect(() => {
    if (finalVisible) {
      setShowOverlay(true)
    }
  }, [finalVisible])

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
        target.classList.add(HIDDEN_CLASS_NAME)
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
  }, [
    HIDDEN_CLASS_NAME,
    destroyPopupOnHide,
    enterClassName,
    leaveClassName,
    showOverlay,
  ])

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
    finalVisible,
    placement,
    childrenRef,
    popupRef,
    container,
    offset,
    stretch,
  })

  React.useEffect(() => {
    if (finalVisible) {
      const node = popupRef.current
      node?.classList.remove(HIDDEN_CLASS_NAME)
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
        node?.classList.add(HIDDEN_CLASS_NAME)
      }
    }
  }, [
    enterClassName,
    leaveClassName,
    calcStyleEnd,
    finalVisible,
    HIDDEN_CLASS_NAME,
  ])

  // 点击子元素、浮层都走这个方法 切换显示、隐藏状态
  // 如需点击浮层不关闭，在 popup 上写 onClick={e => e.stopPropagation()} 即可
  function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { props } = children
    if (typeof props.onClick === 'function') {
      // 解决button loading | disabled 状态 点击问题
      if (props.loading || props.disabled) {
        return
      }
      children.props.onClick(event)
    }
    // fix: Dropdown hover触发，点击不取消
    // 不论 trigger 有没有 click 参数，点击都切换弹窗状态
    updateVisible(!finalVisible)
    // if (trigger.includes('click')) {
    //   updateVisible(!finalVisible)
    // }
  }

  function onMouseEnter(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (typeof children.props.onMouseEnter === 'function') {
      children.props.onMouseEnter(event)
    }
    if (trigger.includes('hover')) {
      updateVisible(true)
    }
  }

  function onMouseLeave(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (typeof children.props.onMouseLeave === 'function') {
      children.props.onMouseLeave(event)
    }
    if (trigger.includes('hover')) {
      updateVisible(false)
    }
  }

  const showPortal = finalVisible || showOverlay

  return (
    <React.Fragment>
      {React.cloneElement(children, {
        ref: childrenRef,
        onClick,
        onMouseEnter,
        onMouseLeave,
      })}
      {showPortal ? (
        <Portal getContainer={() => container}>
          <div className={`${prefixCls}-trigger-portal`} style={{ zIndex }}>
            <div
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              ref={popupRef}
              style={triggerStyle}
              className={`${prefixCls}-trigger-container`}
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
