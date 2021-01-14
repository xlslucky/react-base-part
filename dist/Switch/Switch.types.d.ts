/// <reference types="react" />
export declare type SwitchSizeType = 'default' | 'small';
export interface SwitchProps {
    checked?: boolean;
    size?: SwitchSizeType;
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
    defaultChecked?: boolean;
    prefixCls?: string;
}
