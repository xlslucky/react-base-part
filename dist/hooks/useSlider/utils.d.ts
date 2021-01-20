import { SliderCalcProps } from './useSlider.types';
export declare function sliderCalc({ railDom, clientX, excursion, handleWidth, step, smooth, distanceWidth, }: SliderCalcProps): {
    value: number;
    moveLeft: number;
};
