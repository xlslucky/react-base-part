/// <reference types="react" />
export interface RadioProps {
    children?: React.ReactNode;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: React.ReactText;
    prefixCls?: string;
}
