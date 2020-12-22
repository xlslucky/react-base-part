export type ButtonType = 'primary' | 'ghost' | 'danger' | 'default'

export interface ButtonProps {
  children: React.ReactNode
  type?: ButtonType
  htmlType?: 'submit' | 'reset' | 'button'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: React.CSSProperties
  className?: string
  disabled?: boolean
  loading?: boolean
  block?: boolean
  circle?: boolean
}
