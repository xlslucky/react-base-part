import React from 'react'
import { PlacementType, OffsetType, StretchType } from './Trigger.types'

import { getBaseStyle, getFullStyle } from './utils'

interface Props {
  placement: PlacementType
  finalVisible: boolean
  childrenRef: React.RefObject<HTMLElement>
  popupRef: React.RefObject<HTMLDivElement>
  container: HTMLElement
  offset?: OffsetType
  stretch?: StretchType
}

function useTriggerStyle({
  placement,
  finalVisible,
  childrenRef,
  popupRef,
  container,
  offset,
  stretch,
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
    const {
      width: childrenWidth,
      height: childrenHeight,
    } = childrenRef.current.getBoundingClientRect()
    const {
      width: PopupWidth,
      height: PopupHeight,
    } = popupRef.current.getBoundingClientRect()
    const baseStyle = getBaseStyle({
      placement,
      childrenFullLeft,
      childrenFullTop,
      childrenHeight,
      childrenWidth,
      PopupHeight,
      PopupWidth,
    })
    const style = getFullStyle({
      style: baseStyle,
      offset,
      stretch,
      childrenHeight,
      childrenWidth,
    })
    return style
  }, [
    childrenRef,
    popupRef,
    placement,
    childrenFullLeft,
    childrenFullTop,
    offset,
    stretch,
  ])

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
