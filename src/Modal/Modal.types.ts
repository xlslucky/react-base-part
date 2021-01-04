import { ContentType } from './components/ModalContent/ModalContent.types'

export type ModalProps = React.PropsWithChildren<
  {
    title?: React.ReactNode
    footer?: React.ReactNode | null
    visible?: boolean
    onCancel?: () => void
    onOk?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    closable?: boolean
    confirmLoading?: boolean
    okText?: React.ReactNode
    cancelText?: React.ReactNode
    getContainer?: () => HTMLElement
  } & ContentType
>
