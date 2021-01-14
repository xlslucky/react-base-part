import { PlacementType, OffsetType } from '../Trigger/Trigger.types';
export declare function getSlideAnimationClassNames(placement: PlacementType): string[];
export declare function getArrowPlace(placement: PlacementType): 'left' | 'top' | 'bottom' | 'right';
export declare const PLACEMENT_MAP: Record<PlacementType, string>;
export declare const PLACEMENT_MAP_SUMMARIZE: Record<PlacementType, string>;
export declare const getOffsetByPlacement: (placement: PlacementType, offset: number) => OffsetType;
