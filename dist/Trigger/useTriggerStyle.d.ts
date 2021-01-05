import React from 'react';
import { PlacementType, OffsetType, StretchType } from './Trigger.types';
interface Props {
    placement: PlacementType;
    finalVisible: boolean;
    childrenRef: React.RefObject<HTMLElement>;
    popupRef: React.RefObject<HTMLDivElement>;
    container: HTMLElement;
    offset?: OffsetType;
    stretch?: StretchType;
}
declare function useTriggerStyle({ placement, finalVisible, childrenRef, popupRef, container, offset, stretch, }: Props): {
    triggerStyle: React.CSSProperties;
    calcStyleEnd: boolean;
};
export default useTriggerStyle;
