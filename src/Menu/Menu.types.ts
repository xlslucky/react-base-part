interface ClickEventType {
  item: React.ReactElement
  key: React.ReactText
}

export interface MenuProps {
  children: React.ReactElement[] | React.ReactElement
  defaultSelectedKeys?: React.ReactText[]
  onClick?: ({ item, key }: ClickEventType) => void
  prefixCls?: string
}
