type HorizontalPlacementType =
  | 'rightTop' // 右居上
  | 'rightCenter' // 右居中
  | 'rightBottom' // 右居下
  | 'leftTop' // 左居上
  | 'leftCenter' // 左居中
  | 'leftBottom' // 左居下

export type VerticalPlacementType =
  | 'topLeft' // 上居左
  | 'topCenter' // 上居中
  | 'topRight' // 上居右
  | 'bottomLeft' // 下居左
  | 'bottomCenter' // 下居中
  | 'bottomRight' // 下居右

export type PlacementType = HorizontalPlacementType | VerticalPlacementType

export type TriggerType = 'hover' | 'click' | 'contextMenu' // contextMenu 暂时没实现

export type TriggerArrayType = Array<TriggerType>

type OffsetOneType = number | undefined

export type OffsetType = [offsetX?: OffsetOneType, offsetY?: OffsetOneType]

export type StretchType = 'width' | 'minWidth' | 'height' | 'minHeight'

export interface TriggerProps {
  clickPopupClose?: boolean
  placement: PlacementType
  children: React.ReactElement
  destroyPopupOnHide?: boolean
  getPopupContainer?: () => HTMLElement
  trigger: TriggerArrayType
  popup: React.ReactElement | (() => React.ReactElement)
  enterClassName?: string
  leaveClassName?: string
  prefixCls?: string
  // 偏移
  offset?: OffsetType
  // 拉伸
  stretch?: StretchType
  zIndex?: number
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
}
