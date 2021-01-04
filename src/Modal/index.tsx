import OriginModal from './Modal'
import confirm from './components/confirm'

type ModalType = typeof OriginModal & {
  confirm: typeof confirm
}

const Modal = OriginModal as ModalType

Modal.confirm = confirm

export default Modal
