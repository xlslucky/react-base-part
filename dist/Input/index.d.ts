import BaseInput from './Input';
import Textarea from './Textarea';
declare type InputType = typeof BaseInput & {
    Textarea: typeof Textarea;
};
declare const Input: InputType;
export default Input;
