export type BadgeSizeType = 'default' | 'small'

export type BadegStatusType =
  | 'success'
  | 'error'
  | 'default'
  | 'processing'
  | 'warning'

export interface BadgeProps {
  children?: React.ReactNode
  count?: number
  size?: BadgeSizeType
  style?: React.CSSProperties
  className?: string
  color?: string
  text?: React.ReactNode
  dot?: boolean
  status?: BadegStatusType
  prefixCls?: string
}
