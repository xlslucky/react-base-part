export type PlacementType =
  | 'topLeft' // 上居左
  | 'topCenter' // 上居中
  | 'topRight' // 上居右
  | 'rightTop' // 右居上
  | 'rightCenter' // 右居中
  | 'rightBottom' // 右居下
  | 'bottomLeft' // 下居左
  | 'bottomCenter' // 下居中
  | 'bottomRight' // 下居右
  | 'leftTop' // 左居上
  | 'leftCenter' // 左居中
  | 'leftBottom' // 左居下

export interface TriggerProps {
  placement: PlacementType
  children: React.ReactElement
  destroyPopupOnHide?: boolean
  getPopupContainer?: () => HTMLElement
  trigger: Array<'hover' | 'click' | 'contextMenu'> // contextMenu 暂时没实现
  popup: React.ReactElement | (() => React.ReactElement)
  enterClassName?: string
  leaveClassName?: string
}
