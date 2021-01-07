/// <reference types="react" />
declare type InputSizeType = 'default' | 'large' | 'small';
export declare enum UiEventsKey {
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    Enter = "Enter",
    Escape = "Escape"
}
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    bordered?: boolean;
    disabled?: boolean;
    className?: string;
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
    prefixCls?: string;
    size?: InputSizeType;
    style?: React.CSSProperties;
    onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export {};
