import { PlacementType, TriggerType } from '../Trigger/Trigger.types'

export interface TooltipProps {
  children: React.ReactElement
  placement?: PlacementType
  trigger?: TriggerType
  title: React.ReactNode
  getPopupContainer?: () => HTMLElement
}
