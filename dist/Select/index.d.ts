import BaseSelect from './Select';
import Option from './Option';
declare type SelectType = typeof BaseSelect & {
    Option: typeof Option;
};
declare const Select: SelectType;
export default Select;
