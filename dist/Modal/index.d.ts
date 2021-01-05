import OriginModal from './Modal';
import confirm from './components/confirm';
declare type ModalType = typeof OriginModal & {
    confirm: typeof confirm;
};
declare const Modal: ModalType;
export default Modal;
