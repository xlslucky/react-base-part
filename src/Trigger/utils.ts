import { PlacementType, OffsetType, StretchType } from './Trigger.types'

type BaseStyleProps = {
  placement: PlacementType
  childrenFullLeft: number
  childrenFullTop: number
  childrenHeight: number
  childrenWidth: number
  PopupHeight: number
  PopupWidth: number
}

// 通过【子元素宽高】、【浮层宽高】、【子元素距页面上、左距离】计算基础left top值
export function getBaseStyle({
  placement,
  childrenFullLeft,
  childrenFullTop,
  childrenHeight,
  childrenWidth,
  PopupHeight,
  PopupWidth,
}: BaseStyleProps) {
  let style: React.CSSProperties = {}
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
}

// offset、stretch参数和baseStyle叠加组合样式
export function getFullStyle({
  style,
  offset,
  stretch,
  childrenHeight,
  childrenWidth,
}: {
  style: React.CSSProperties
  offset?: OffsetType
  stretch?: StretchType
  childrenHeight: number
  childrenWidth: number
}) {
  // 偏移数据
  const [offsetX = 0, offsetY = 0] = offset || []
  style.left = Number(style.left) + offsetX
  style.top = Number(style.top) + offsetY

  // 拉伸数据
  switch (stretch) {
    case 'width':
      style.width = childrenWidth
      break
    case 'minWidth':
      style.minWidth = childrenWidth
      break
    case 'height':
      style.height = childrenHeight
      break
    case 'minHeight':
      style.minHeight = childrenHeight
      break
    default:
      break
  }
  return style
}
