import BaseRadio from './Radio';
import RadioGroup from './RadioGroup';
declare type RadioType = typeof BaseRadio & {
    Group: typeof RadioGroup;
};
declare const Radio: RadioType;
export default Radio;
