import { PlacementType } from '../Trigger/Trigger.types'

// 动画名称 移入 移出
export function getSlideAnimationClassNames(placement: PlacementType) {
  if (['topLeft', 'topCenter', 'topRight'].includes(placement)) {
    return ['slide-down-enter', 'slide-down-leave']
  }
  if (['rightTop', 'rightCenter', 'rightBottom'].includes(placement)) {
    return ['slide-left-enter', 'slide-left-leave']
  }
  if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(placement)) {
    return ['slide-up-enter', 'slide-up-leave']
  }
  if (['leftTop', 'leftCenter', 'leftBottom'].includes(placement)) {
    return ['slide-right-enter', 'slide-right-leave']
  }
  return []
}

// 获取箭头方向
export function getArrowPlace(
  placement: PlacementType
): 'left' | 'top' | 'bottom' | 'right' {
  if (['topLeft', 'topCenter', 'topRight'].includes(placement)) {
    return 'bottom'
  }
  if (['rightTop', 'rightCenter', 'rightBottom'].includes(placement)) {
    return 'left'
  }
  if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(placement)) {
    return 'top'
  }
  if (['leftTop', 'leftCenter', 'leftBottom'].includes(placement)) {
    return 'right'
  }
  return 'bottom'
}

export const PLACEMENT_MAP: Record<PlacementType, string> = {
  topLeft: 'top-left',
  topCenter: 'top-center',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomCenter: 'bottom-center',
  bottomRight: 'bottom-right',
  rightTop: 'right-top',
  rightCenter: 'right-center',
  rightBottom: 'right-bottom',
  leftTop: 'left-top',
  leftCenter: 'left-center',
  leftBottom: 'left-bottom',
}
