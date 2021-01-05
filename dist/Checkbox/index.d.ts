import BaseCheckbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
declare type CheckboxType = typeof BaseCheckbox & {
    Group: typeof CheckboxGroup;
};
declare const Checkbox: CheckboxType;
export default Checkbox;
