/// <reference types="react" />
export interface CheckboxProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    value?: React.ReactText;
    children?: React.ReactNode;
    prefixCls?: string;
}
