export interface MenuItemProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  key: React.ReactText
  active?: boolean
  prefixCls?: string
}
