import React from 'react'
import { PlacementType } from './Trigger.types'

interface Props {
  placement: PlacementType
  visible: boolean
  childrenRef: React.RefObject<HTMLElement>
  popupRef: React.RefObject<HTMLDivElement>
  container: HTMLElement
}

function useTriggerStyle({
  placement,
  visible,
  childrenRef,
  popupRef,
  container,
}: Props) {
  const [calcStart, setCalcStart] = React.useState(false)

  React.useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setCalcStart(true)
      }, 0)
    } else {
      setCalcStart(false)
    }
  }, [popupRef, visible])

  const [childrenFullLeft, childrenFullTop] = React.useMemo(() => {
    // 需要加visible 不然childrenRef不更新
    if (!visible || !childrenRef.current) {
      return [0, 0]
    }
    const {
      left: childrenLeft,
      top: childrenTop,
    } = childrenRef.current.getBoundingClientRect()
    const {
      left: containerLeft,
      top: containerTop,
    } = container.getBoundingClientRect()
    const {
      scrollTop: containerScrollTop,
      scrollLeft: containerScrollLeft,
    } = container
    const fullTop = Math.round(childrenTop - containerTop + containerScrollTop)
    const fullLeft = Math.round(
      childrenLeft - containerLeft + containerScrollLeft
    )
    return [fullLeft, fullTop]
  }, [childrenRef, container, visible])

  const triggerStyle = React.useMemo(() => {
    let style: React.CSSProperties = {
      display: 'none',
    }
    if (visible) {
      style.display = 'block'
      style.visibility = 'hidden'
    }
    if (!calcStart || !childrenRef.current || !popupRef.current) {
      return style
    }
    style.visibility = 'visible'
    const {
      width: childrenWidth,
      height: childrenHeight,
    } = childrenRef.current.getBoundingClientRect()
    const {
      width: PopupWidth,
      height: PopupHeight,
    } = popupRef.current.getBoundingClientRect()
    if (['topLeft', 'bottomLeft'].includes(placement)) {
      style.left = childrenFullLeft
    }
    if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(placement)) {
      style.top = Math.round(childrenFullTop + childrenHeight)
    }
    if (['rightTop', 'rightCenter', 'rightBottom'].includes(placement)) {
      style.left = Math.round(childrenFullLeft + childrenWidth)
    }
    if (['rightTop', 'leftTop'].includes(placement)) {
      style.top = childrenFullTop
    }
    if (['topLeft', 'topCenter', 'topRight'].includes(placement)) {
      // top fulltop - height
      style.top = childrenFullTop - PopupHeight
    }
    if (['topCenter', 'bottomCenter'].includes(placement)) {
      // left fullleft - width / 2 + childrenW / 2
      style.left = childrenFullLeft - PopupWidth / 2 + childrenWidth / 2
    }
    if (['rightBottom', 'leftBottom'].includes(placement)) {
      // top fulltop - height + childrenH
      style.top = childrenFullTop - PopupHeight + childrenHeight
    }
    if (['rightCenter', 'leftCenter'].includes(placement)) {
      // top fulltop - height / 2 + childrenH / 2
      style.top = childrenFullTop - PopupHeight / 2 + childrenHeight / 2
    }
    if (['topRight', 'bottomRight'].includes(placement)) {
      // left fullleft - width + childrenW
      style.left = childrenFullLeft - PopupWidth + childrenWidth
    }
    if (['leftTop', 'leftCenter', 'leftBottom'].includes(placement)) {
      // left fullleft - width
      style.left = childrenFullLeft - PopupWidth
    }
    return style
  }, [
    calcStart,
    childrenFullLeft,
    childrenFullTop,
    childrenRef,
    placement,
    popupRef,
    visible,
  ])

  return { triggerStyle }
}

export default useTriggerStyle
