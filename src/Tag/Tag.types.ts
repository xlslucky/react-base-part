export interface TagProps {
  color?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  className?: string
  style?: React.CSSProperties
  prefixCls?: string
}
