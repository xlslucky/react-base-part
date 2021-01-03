export interface IconsProps {}

export type BaseIconProps = React.PropsWithChildren<{
  className?: string
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  style?: React.CSSProperties
  defaultFill?: boolean
  prefixCls?: string
}>
