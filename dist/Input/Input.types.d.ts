/// <reference types="react" />
export declare enum UiEventsKey {
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    Enter = "Enter",
    Escape = "Escape"
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    bordered?: boolean;
    disabled?: boolean;
    className?: string;
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    prefixCls?: string;
    onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
