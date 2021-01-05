/// <reference types="react" />
import { PlacementType, OffsetType, StretchType } from './Trigger.types';
declare type BaseStyleProps = {
    placement: PlacementType;
    childrenFullLeft: number;
    childrenFullTop: number;
    childrenHeight: number;
    childrenWidth: number;
    PopupHeight: number;
    PopupWidth: number;
};
export declare function getBaseStyle({ placement, childrenFullLeft, childrenFullTop, childrenHeight, childrenWidth, PopupHeight, PopupWidth, }: BaseStyleProps): import("react").CSSProperties;
export declare function getFullStyle({ style, offset, stretch, childrenHeight, childrenWidth, }: {
    style: React.CSSProperties;
    offset?: OffsetType;
    stretch?: StretchType;
    childrenHeight: number;
    childrenWidth: number;
}): import("react").CSSProperties;
export {};
