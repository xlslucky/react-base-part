import './message.scss';
import '../style/animation/move-50.scss';
declare const message: {
    info: (content: string, duration?: number, onClose?: (() => void) | undefined) => void;
    success: (content: string, duration?: number, onClose?: (() => void) | undefined) => void;
    warn: (content: string, duration?: number, onClose?: (() => void) | undefined) => void;
    error: (content: string, duration?: number, onClose?: (() => void) | undefined) => void;
};
export default message;
