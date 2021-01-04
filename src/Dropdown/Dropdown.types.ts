import { PlacementType, TriggerArrayType } from '../Trigger/Trigger.types'

export interface DropdownProps {
  disabled?: boolean
  children: React.ReactElement
  overlay: React.ReactElement
  trigger?: TriggerArrayType
  placement?: PlacementType
  getPopupContainer?: () => HTMLElement
  prefixCls?: string
}
