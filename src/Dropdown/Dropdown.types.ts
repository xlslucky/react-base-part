import {
  TriggerArrayType,
  VerticalPlacementType,
} from '../Trigger/Trigger.types'

export type DropdownPlacementType = VerticalPlacementType

export interface DropdownProps {
  disabled?: boolean
  children: React.ReactElement
  overlay: React.ReactElement
  trigger?: TriggerArrayType
  placement?: DropdownPlacementType
  getPopupContainer?: () => HTMLElement
  clickPopupClose?: boolean
  prefixCls?: string
}
