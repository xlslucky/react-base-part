export type BadgeSizeType = 'default' | 'small'

export interface BadgeProps {
  children?: React.ReactNode
  count?: number
  size?: BadgeSizeType
  style?: React.CSSProperties
  className?: string
  color?: string
  text?: React.ReactNode
  dot?: boolean
  prefixCls?: string
}
