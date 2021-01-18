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
  offset,
  stretch,
  clickPopupClose,
  zIndex,
  visible,
  onVisibleChange,
  prefixCls = PREFIX_CLASS,
}) => {
  const [innerVisible, setVisible] = React.useState(false)
  const [showOverlay, setShowOverlay] = React.useState(false)

  const childrenRef = React.useRef<HTMLElement>(null)
  const popupRef = React.useRef<HTMLDivElement>(null)

  const HIDDEN_CLASS_NAME = `${prefixCls}-trigger-hidden`
  const OPACITY_ZERO_CLASS_NAME = `${prefixCls}-trigger-opacity-zero`

  const container = getPopupContainer()

  // 受外部控制
  const controlled = typeof visible === 'boolean'

  const finalVisible = React.useMemo(() => {
    if (controlled) {
      return visible
    }
    return innerVisible
  }, [controlled, innerVisible, visible])

  function updateVisible(nextVisible: boolean) {
    setVisible(nextVisible)
    if (typeof onVisibleChange === 'function') {
      onVisibleChange(nextVisible)
    }
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
      // 进入动画结束，删除进入动画className
      if (target.classList.contains(enterClassName)) {
        target.classList.remove(enterClassName)
      }
      // 离开动画结束，删除离开动画className并添加隐藏className
      if (target.classList.contains(leaveClassName)) {
        target.classList.remove(leaveClassName)
        target.classList.add(HIDDEN_CLASS_NAME)
        // 销毁dom
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
      if (enterClassName && leaveClassName) {
        /**
         * fix: 加动画className 第二次划过会闪动
         * solve: 如果有动画 加个opacity: 0 的样式 等到动画加载出来再删除
         */
        node?.classList.add(OPACITY_ZERO_CLASS_NAME)
        if (calcStyleEnd) {
          // 删除离开动画，添加进入动画
          node?.classList.remove(leaveClassName)
          node?.classList.add(enterClassName)
          node?.classList.remove(OPACITY_ZERO_CLASS_NAME)
        }
      }
    } else {
      const node = popupRef.current
      if (leaveClassName && enterClassName) {
        // 删除进入动画，添加离开动画
        node?.classList.remove(enterClassName)
        node?.classList.add(leaveClassName)
      } else {
        // 没设置动画 直接隐藏
        node?.classList.add(HIDDEN_CLASS_NAME)
      }
    }
  }, [
    HIDDEN_CLASS_NAME,
    OPACITY_ZERO_CLASS_NAME,
    calcStyleEnd,
    enterClassName,
    finalVisible,
    leaveClassName,
  ])

  /**
   * 点击子元素 切换显示、隐藏状态
   *
   * 废弃：使用clickPopupClose传参控制
   * // 如需点击浮层不关闭，在 popup 上写 onClick={e => e.stopPropagation()} 即可
   */
  function onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { props } = children
    /**
     * fix: 子元素loading | disabled 状态不允许点击
     * solve: loading | disabled 直接return
     */
    if (props.loading || props.disabled) {
      return
    }
    if (typeof props.onClick === 'function') {
      children.props.onClick(event)
    }
    if (trigger.includes('click')) {
      updateVisible(!finalVisible)
    }
  }

  // 点击浮层
  function onClickPopup() {
    if (clickPopupClose) {
      updateVisible(!finalVisible)
    }
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
              onClick={onClickPopup}
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
