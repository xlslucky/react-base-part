/// <reference types="react" />
import { PlacementType, TriggerArrayType } from '../Trigger/Trigger.types';
export interface TooltipProps {
    children: React.ReactElement;
    placement?: PlacementType;
    trigger?: TriggerArrayType;
    title: React.ReactNode;
    getPopupContainer?: () => HTMLElement;
    prefixCls?: string;
}
