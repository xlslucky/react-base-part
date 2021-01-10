/// <reference types="react" />
import { InputSizeType } from './Input.types';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    style?: React.CSSProperties;
    bordered?: boolean;
    size?: InputSizeType;
    prefixCls?: string;
}
