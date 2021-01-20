import React from 'react';
import { UseSliderProps } from './useSlider.types';
declare function useSlider({ railRef, handleRef, max, step, min, smooth, value, onSuccess, }: UseSliderProps): {
    nextValue: number;
    left: number;
    onMouseDown: (downEvent: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onTouchStart: (startEvent: React.TouchEvent<HTMLElement>) => void;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export default useSlider;
