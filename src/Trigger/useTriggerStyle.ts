import React from 'react'
import { PlacementType } from './Trigger.types'

interface Props {
  placement: PlacementType
  finalVisible: boolean
  childrenRef: React.RefObject<HTMLElement>
  popupRef: React.RefObject<HTMLDivElement>
  container: HTMLElement
}

function useTriggerStyle({
  placement,
  finalVisible,
  childrenRef,
  popupRef,
  container,
}: Props) {
  const [triggerStyle, setTriggerStyle] = React.useState<React.CSSProperties>({
    display: 'block',
    visibility: 'hidden',
  })
  // 计算属性后，加动画，不然popup高度，宽度计算不准确
  const [calcStyleEnd, setCalcStyleEnd] = React.useState(false)

  const [childrenFullLeft, childrenFullTop] = React.useMemo(() => {
    // 需要加visible 不然childrenRef不更新
    if (!finalVisible || !childrenRef.current) {
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
  }, [childrenRef, container, finalVisible])

  const getTriggerStyle = React.useCallback((): React.CSSProperties => {
    if (!childrenRef.current || !popupRef.current) {
      return {}
    }
    let style: React.CSSProperties = {}
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
  }, [childrenFullLeft, childrenFullTop, childrenRef, placement, popupRef])

  React.useEffect(() => {
    if (finalVisible) {
      setTimeout(() => {
        // setTimeout 为了childrenRef.current和popupRef.current能取到值
        setTriggerStyle(getTriggerStyle())
        setCalcStyleEnd(true)
      }, 0)
    } else {
      setCalcStyleEnd(false)
    }
  }, [getTriggerStyle, finalVisible])

  return { triggerStyle, calcStyleEnd }
}

export default useTriggerStyle
