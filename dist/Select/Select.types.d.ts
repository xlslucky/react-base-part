/// <reference types="react" />
declare type SelectSizeType = 'default' | 'large' | 'small';
export interface SelectProps {
    value?: React.ReactText;
    onChange?: (value?: React.ReactText) => void;
    placeholder?: string;
    children: React.ReactElement[] | React.ReactElement;
    className?: string;
    style?: React.CSSProperties;
    allowClear?: boolean;
    size?: SelectSizeType;
    prefixCls?: string;
}
export {};
