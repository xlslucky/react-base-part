/// <reference types="react" />
export interface ConfirmProps {
    title?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    getContainer?: () => HTMLElement;
}
