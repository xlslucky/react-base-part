/// <reference types="react" />
export declare enum MessageType {
    Success = "success",
    Warn = "warn",
    Error = "error",
    Info = "info"
}
export interface OptionProps {
    className?: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    duration?: number;
    onClose?: () => void;
}
export declare type MessageProps = {
    option: OptionProps;
    type: MessageType;
};
