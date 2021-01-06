/// <reference types="react" />
export interface OptionProps {
    value: React.ReactText;
    onClick?: (value: React.ReactText) => void;
    className?: string;
    children?: React.ReactNode;
    prefixCls?: string;
}
