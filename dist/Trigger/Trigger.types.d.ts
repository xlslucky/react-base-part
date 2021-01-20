/// <reference types="react" />
declare type HorizontalPlacementType = 'rightTop' | 'rightCenter' | 'rightBottom' | 'leftTop' | 'leftCenter' | 'leftBottom';
export declare type VerticalPlacementType = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export declare type PlacementType = HorizontalPlacementType | VerticalPlacementType;
export declare type TriggerType = 'hover' | 'click' | 'contextMenu';
export declare type TriggerArrayType = Array<TriggerType>;
declare type OffsetOneType = number | undefined;
export declare type OffsetType = [offsetX?: OffsetOneType, offsetY?: OffsetOneType];
export declare type StretchType = 'width' | 'minWidth' | 'height' | 'minHeight';
export interface TriggerProps {
    clickPopupClose?: boolean;
    placement: PlacementType;
    children: React.ReactElement;
    destroyPopupOnHide?: boolean;
    getPopupContainer?: () => HTMLElement;
    trigger: TriggerArrayType;
    popup: React.ReactElement | (() => React.ReactElement);
    enterClassName?: string;
    leaveClassName?: string;
    prefixCls?: string;
    offset?: OffsetType;
    stretch?: StretchType;
    zIndex?: number;
    visible?: boolean;
    onVisibleChange?: (visible: boolean) => void;
}
export {};
