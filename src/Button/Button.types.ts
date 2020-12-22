export interface ButtonProps {
  children: React.ReactNode
  type?: 'primary' | 'ghost' | 'danger' | 'default'
  htmlType?: 'submit' | 'reset' | 'button'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  style?: React.CSSProperties
  className?: string
  disabled?: boolean
  loading?: boolean
  block?: boolean
  circle?: boolean
}
