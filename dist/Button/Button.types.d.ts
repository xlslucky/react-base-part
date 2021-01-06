/// <reference types="react" />
export declare type ButtonType = 'primary' | 'ghost' | 'danger' | 'default';
declare type ButtonSizeType = 'default' | 'large' | 'small';
export interface BaseButtonProps {
    children: React.ReactNode;
    type?: ButtonType;
    htmlType?: 'submit' | 'reset' | 'button';
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    circle?: boolean;
    prefixCls?: string;
    size?: ButtonSizeType;
}
export declare type ButtonProps = BaseButtonProps & React.RefAttributes<HTMLButtonElement>;
export {};
